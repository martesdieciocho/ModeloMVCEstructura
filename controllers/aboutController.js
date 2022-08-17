var path = require('path');
const controlador = {
    about:(req, res, next) => {
        res.sendFile(path.resolve(__dirname, '../views/about.html'));
      }
};

module.exports = controlador;