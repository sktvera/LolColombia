let indexController = {
    home: function(req, res) {
        /* Mostrar el home */
        res.render('index');
    },

    login: function(req, res) {
        /* Mostrar el login */
        res.render('login');
    },

    register: function(req, res) {
        /* Mostrar el register */
        res.render('register');
    },


}
module.exports = indexController