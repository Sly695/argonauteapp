var express = require('express');
var router = express.Router();
const argonauteModel = require("../models/argonaute")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/addArgonaute', async function(req, res, next){

  let argonaute = await argonauteModel.findOne({ name: req.query.name });

  if(argonaute){
    res.json({result: false, error: 'Cet argonaute a déjà été enregistré'})
  } else {
    let newArgonaute = new argonauteModel({
      name: req.query.name,
    });

    argonauteSaved = await newArgonaute.save();

    res.json({result: true, name : newArgonaute})
  }
})

router.get('/allArgonaute', async function(req, res, next){
  var argonaute = await argonauteModel.find();
  res.json({argonaute: argonaute})
})

module.exports = router;
