// El método Router() de Express nos permite crear rutas
const router = require('express').Router();

const { check } = require('express-validator');
// Importando controladores
const {
    getUsers,
    postUser,
    putUser,
    deleteUser,

} = require('../controllers/user.controllers');

const esAdmin = require('../middlewares/es-admin');

const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');
const validarEmail = require('../helpers/validarEmail');

// Definiendo rutas

// Ruta para obtener todos los usuarios
router.get('/user',[
    validarJWT,
    esAdmin
] ,getUsers);

// Crear nuevo usuario
router.post('/user', [
    // validarJWT
    check('email')
    .isEmail().withMessage('Revise los campos y vuelva a intentarlo - no es email')
    .custom(validarEmail),

    validarCampos
], postUser);

// Editar usuario, requiere ID de usuario
router.put('/user/:id', [
    validarJWT
], putUser);

// Eliminar usuario, requiere ID de usuario
router.delete('/user', [], deleteUser);



// Se exporta el objeto router que contiene las rutas
module.exports = router;