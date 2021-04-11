const express =  require('express');
const router = express.Router();



const {
   getSchools,
   getSchool,
   createSchool,
   updateSchool, 
   deleteSchool
} = require('../controllers/schoolController');
/**
 * @swagger
 * components:
 *   schemas:
 *     School:
 *       type: object
 *       required:
 *         - schoolName
 *         - countryCode
 *         - address
 *         - latitude
 *         - longitude
 *         - speedConnectivity
 *         - typeConnectivity
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the school
 *         schoolName:
 *           type: string
 *           description: School Name
 *         countryCode:
 *           type: string
 *           description: Country ISO Code
 *         address:
 *           type: string
 *           description: School address
 *         latitude:
 *           type: string
 *           description: Latitude
 *         longitude:
 *           type: string
 *           description: Longitude
 *         speedConnectivity:
 *           type: string
 *           description: Speed Connectivity
 *         typeConnectivity:
 *           type: string
 *           description: Type of Connectivity
 *       example:
 *         schoolName: St John Catholic Primary School
 *         address: 34-16 42nd St
 *         latitude: 40.7556
 *         longitude: 73.9198
 *         speedConnectivity: 3MB
 *         typeConnectivity: 3G
 */



/**
 * @swagger
 * /api/v1/schools:
 *   get:
 *     summary: Returns the list of all the schools
 *     tags: [School]
 *     responses:
 *       200:
 *         description: The list of schools
 */
router.get('/', getSchools);

/**
 * @swagger
 * /api/v1/schools/{id}:
 *   get:
 *     summary: Get the school by id
 *     tags: [School]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The school id
 *     responses:
 *       200:
 *         description: The school description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *       404:
 *         description: The school was not found
 */
router.get('/:id', getSchool)

/**
 * @swagger
 * /api/v1/schools:
 *   post:
 *     summary: Create a new school
 *     tags: [School]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/School'
 *     responses:
 *       200:
 *         description: The school was successfully created
 *       500:
 *         description: Some server error
 */
router.post('/', createSchool);

/**
 * @swagger
 * /api/v1/schools/{id}:
 *  patch:
 *    summary: Update the school by the id
 *    tags: [School]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The school id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/School'
 *    responses:
 *      200:
 *        description: The school was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/School'
 *      404:
 *        description: The school was not found
 *      500:
 *        description: Some error happened
 */
router.patch('/:id', updateSchool);

/**
 * @swagger
 * /api/v1/schools/{id}:
 *   delete:
 *     summary: Remove the school by id
 *     tags: [School]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The school id
 * 
 *     responses:
 *       200:
 *         description: The school was deleted
 *       404:
 *         description: The school was not found
 */
router.delete('/:id', deleteSchool);

module.exports = router;
