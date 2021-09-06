// const { Post } = require("../models");

module.exports = {
    loginController: (req, res)=> {
        res.render('login_view');
    },

    registerController: (req, res)=> {
        res.render('register_view');
    },

    createController: (req, res)=> {
        res.redirect('/auth/login');
    },

    // validateController: (req, res)=> {
    //     res.redirect('/home');
    // }

}