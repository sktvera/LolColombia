const usersController =
 {
     login: function(req, res) {
        /* Mostrar el login */
        res.render('./users/login');
    },

    register: function(req, res) {
        /* Mostrar el register */
        res.render('./users/register');
    },
}

module.exports = usersController;