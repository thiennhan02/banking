const express = require('express');
const user = require('../services/user');
const userQuery = require('../repository/cif');
const db = require('../services/db');
const asyncHandler = require('async-handler');
const router = express.Router();



router.get('/',asyncHandler(async (req,res) => {
    const cif = await db.any(userQuery.viewAll);
    res.render('viewCif',{cif});
}));

// router.post('/:id/change',asyncHandler(async (req,res) => {////////////////// doing
//     const id = req.params;
//     const cus= await db.none(userQuery.findById(id));
//     if (cus.active==false)
//     res.redirect('/');
// }))


module.exports =router;

