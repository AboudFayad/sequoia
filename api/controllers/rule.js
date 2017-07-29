//api/controllers/rule
'use strict';

//Loading Dependencies =============================================
var Rule = require('../models/rule');


//creating a rule
function createRule (req, res) {
	var rule = new Rule();

	//populating the rule model with sequents and their connectives
	rule.premises  = JSON.parse(req.body.premises);
	rule.conlusion = JSON.parse(req.body.conlusion);

	//saving the rule in the database
	rule.save(function (err) {

		//if something went wrong while saving, return the error
		if (err) {
			return res.status(400).json({
				'status'  : 'failure',
				'message' : 'something went wrong while creating the rule'
			});
		}

		//send success message and created rule
		return res.status(200).json({
			'status'  : 'success',
			'message' : 'rule was created',
			'rule'    : rule   
		});
	}); 
}


//fetching a rule
function getRule (req, res) {
	//looking up the rule
	Rule.findById(req.params.id, function (err, rule) {

		//if the rule does not exist
		if (err || rule == null) {
			return res.status(400).json({
				'status'  : 'failure',
				'message' : 'rule does not exist'
			});
		}

		//return the rule 
		return res.status(200).json({
			'status' : 'success',
			'rule'   : rule
		});
	});
}


//updating a rule
function updateRule (req, res) {
	//looking up the rule and updating it
	Rule.findOneAndUpdate({ _id : req.params.id}, 
		{ premises : JSON.parse(req.body.premises), conlusion : JSON.parse(req.body.conlusion)}, { new : true}, 
		function (err, rule) {
			//if the rule does not exist
			if (err || rule == null) {
				return res.status(400).json({
					'status'  : 'failure',
					'message' : 'rule does not exist'
				});
			}

		//send back the updated rule 
		return res.status(200).json({
			'status' : 'success',
			'rule'   : rule
		});
	});
}








