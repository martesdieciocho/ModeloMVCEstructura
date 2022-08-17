var path = require('path');
const controlador = {
    index:(req, res, next) => {
       return res.sendFile(path.resolve(__dirname, '../views/home.html'));

      }
};

module.exports = controlador;