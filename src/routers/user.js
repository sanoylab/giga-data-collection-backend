const express =  require('express');
const router = express.Router();

const User = require('../models/user');

const {
   getUsers,
   getUser,
   createUser,
   updateUser, 
   deleteUser
} = require('../controllers/userController');
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - userName
 *         - password
 *         - userType
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         userName:
 *           type: string
 *           description: User Name
 *         password:
 *           type: string
 *           description: Password
 *         userType:
 *           type: string
 *           description: User Type
 *       example:
 *         userName: John
 *         password: very_complex_password
 *         userType: admin
 *         postedBy: school_id
 */



/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: The list of users
 */
router.get('/', getUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 */
router.get('/:id', getUser)

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'

 *     responses:
 *       200:
 *         description: The user was successfully created
 *       500:
 *         description: Some server error
 */
router.post('/', createUser);

/**
 * @swagger
 * /api/v1/users/{id}:
 *  patch:
 *    summary: Update the user by the id
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 */
router.patch('/:id', updateUser);

/**
 * @swagger
 * //api/v1/users/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 * 
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
router.delete('/:id', deleteUser);

module.exports = router;
