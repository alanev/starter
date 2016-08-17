const { stat } = require('fs')

const util = (path) =>
	new Promise((resolve, reject) => {
		stat(path, (err, stat) => {
			if (err) reject(err)
			else resolve(stat)
		})
	})

module.exports = util
