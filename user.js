const express = require('express');

const Passport = require('passport');

const routes = express.Router();

const usercontroller = require('../controller/usercontroller');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
routes.post('/add_user', Passport.authenticate("userverify", { failureRedirect: "/admin/faillogin" }), usercontroller.add_user);

routes.get('/viewuser', Passport.authenticate("userverify", { failureRedirect: "/admin/faillogin" }), usercontroller.viewuser);

routes.patch('/edituser/:id', Passport.authenticate("userverify", { failureRedirect: "/admin/faillogin" }), usercontroller.edituser);

routes.delete('/deleteuser/:id', Passport.authenticate("userverify", { failureRedirect: "/admin/faillogin" }), usercontroller.deleteuser);

// Bulk CSV upload of expenses
routes.post('/uploadCSV', Passport.authenticate("userverify", { failureRedirect: "/admin/faillogin" }), upload.single('file'), usercontroller.uploadCSV);

routes.get('/fetchExpenses',Passport.authenticate("userverify", { failureRedirect: "/admin/faillogin" }),usercontroller.fetchExpenses);

routes.get('/generateExpenseStats', Passport.authenticate("userverify", { failureRedirect: "/admin/faillogin" }), usercontroller.generateExpenseStats);



module.exports = routes;