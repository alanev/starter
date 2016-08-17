import test from 'ava'
import stat from '../tasks/utils/stat'
import { exec } from 'child_process'

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
		`${name} task`,
		t => run(`npm run ${name}`)
			.then(() => {
				return Promise
					.all(output.map(path => stat(`../build/${path}`)))
					.then(() => t.pass())
					.catch(({ path }) => {
						console.log(`No ${path}`)
						t.fail()
					})
			})
			.catch(err => t.fail(`Err: ${err}`))
	)
})
