var ImageKit = require('imagekit');

exports.uploadImagekit = function () {
	console.log("PUBLICKEY_IMAGEKIT:", process.env.PUBLICKEY_IMAGEKIT);
console.log("PRIVATEKEY_IMAGEKIT:", process.env.PRIVATEKEY_IMAGEKIT);
console.log("URLENDPOINT_IMAGEKIT:", process.env.URLENDPOINT_IMAGEKIT);

var imagekit = new ImageKit({
   publicKey: process.env.PUBLICKEY_IMAGEKIT,
   privateKey: process.env.PRIVATEKEY_IMAGEKIT,
   urlEndpoint: process.env.URLENDPOINT_IMAGEKIT,
});

	var imagekit = new ImageKit({
		publicKey: process.env.PUBLICKEY_IMAGEKIT,
		privateKey: process.env.PRIVATEKEY_IMAGEKIT,
		urlEndpoint: process.env.URLENDPOINT_IMAGEKIT,
	});

	return imagekit;
};
