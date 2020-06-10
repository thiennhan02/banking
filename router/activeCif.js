const express = require('express');
const user = require('../services/user');
const userQuery = require('../repository/cif');
const db = require('../services/db');
const asyncHandler = require('async-handler');
const router = express.Router();



router.get('/',asyncHandler(async (req,res) => {
    const cif = await db.any(userQuery.viewCif);
    res.render('viewCifForActive',{cif});
}));

router.post('/:id/active',asyncHandler(async (req,res) => {
    const id = req.params;
    await db.none(userQuery.activeCif(id));
    res.redirect('/');
}))


module.exports =router;

