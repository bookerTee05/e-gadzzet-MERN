import {Router} from "express";

const router = Router();

/**POST method */
router.route('/register').post((req, res) => res.json('register route'));

/**GET method */


/**PUT method */


export default router;