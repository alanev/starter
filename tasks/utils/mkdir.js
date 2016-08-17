const mkdirp = require('mkdirp')

const mkdir = (dir) =>
	new Promise((resolve, reject) => {
		mkdirp(dir, err => {
			if (err) reject(promise)
			else resolve(`Created ${dir}`)
		})
	})

module.exports = mkdir
