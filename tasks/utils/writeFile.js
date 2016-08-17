const path = require('path')
const { writeFile } = require('fs')
const mkdir = require('./mkdir')

const write = (filepath, content, callback) =>
	new Promise((resolve, reject) => {
		mkdir(path.parse(filepath).dir)
			.then(msg => {
				writeFile(filepath, content, err => {
					if (err) reject(err)
					else resolve(`Created ${filepath}`)
				})
			})
			.catch(err => reject(err))
	})

module.exports = write
