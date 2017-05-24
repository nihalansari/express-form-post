const formPost = require('../index'); // npm module
const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = (app) => {

	app.use(express.static(path.join(__dirname, "static")));
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, "views"));
	app.use(formPost({
		method: 's3-storage',
		directory: 'tmp',
		keys: {
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  			bucketName: process.env.S3_BUCKET_NAME
		},
		maxfileSize: 1000000
	}));

}