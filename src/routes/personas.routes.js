import { Router } from 'express'
import { pool } from '../database.js'

const router = Router();

router.get('/list', async (req, res) => { 
    try {
        const [result] = await pool.query('SELECT * FROM personas');
        console.log(result)
    } catch (err) {
        res.status(500).jason({ messege: err.messege });
    }
});

export default router;
