var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	contact_number: {
		type: Number,
		required: true
	}
});

var contact = module.exports = mongoose.model('contact', contactSchema);