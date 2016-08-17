import test from 'ava'
import del from 'del'
import stat from '../tasks/utils/stat'
import { exec } from 'child_process'
import { scripts } from '../package.json'
delete scripts.test
delete scripts.watch

const tasks = [
	{
		name: 'styles',
		output:
		[
			'styles.css'
		]
	},
	{
		name: 'scripts',
		output:
		[
			'defer.js'
		]
	},
	{
		name: 'templates',
		output:
		[
			'index.html'
		]
	},
	{
		name: 'images',
		output:
		[
			'assets/images/a.png',
			'assets/images/a.webp'
		]
	}
]
const run = (task) =>
	new Promise((resolve, reject) => {
		exec(task, (err, stdout, stderr) => {
			if (err) reject(err)
			else if (stderr) reject(stdout)
			else resolve(stdout)
		})
	})

test.before('remove build dir', () => {
	return run('rm -rf ../build/')
		.then(() => {
			console.log('Build folder is removed')
		})
})

tasks.forEach(({ name, output }) => {
	test(
		'styles task',
		t => run(`npm run ${name}`)
			.then(d => {
				return Promise
					.all(output.map(path => stat(`../build/${path}`)))
					.then(values => t.pass())
					.catch(err => {
						console.log(`No ${path}`)
						t.fail()
					})
			})
			.catch(err => t.fail(`Err: ${err}`))
	)
})
