var express = require('express');
var router = express.Router();
var contact = require('../models/contact');

router.get('/contacts', function(req, res, next) {
     contact.find(function(err, contacts){
     	res.json(contacts);
     });
	//res.send('retrieving contacts');
});

router.post('/contacts', function(req, res, next) {
	var newContact = new contact({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		contact_number: req.body.contact_number
	});

	newContact.save(function(err, save) {
		if (err)
			res.send(err);
		else
			res.send('contact saved successfully');
	});

})



module.exports = router;