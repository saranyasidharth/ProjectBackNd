const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const employeeController = require('../controller/employeeController');
const bodyParser = require('body-parser');


const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});


/**
 * @swagger
 * /employees:
 *  get:
 *    tags: ['employees']
 *    description: get all employees
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.get('/employees', requireAuth, employeeController.get_all_employees);

/**
 * @swagger
 * /employee:
 *  get:
 *    tags: ['employees']
 *    description: get unapproved employees
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.get('/employee', requireAuth, employeeController.get_employees);

router.put('/employee/:id', requireAuth, urlencodedparser, employeeController.update_employee);


router.get('/countEmployees', requireAuth, employeeController.count_employees);

module.exports = router;