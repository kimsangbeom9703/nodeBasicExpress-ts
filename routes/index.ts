import express from 'express';
const router = express.Router();
import db from '../models/db'; // 모듈 가져오기
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
     db.query('SELECT 1 + 1 AS `test`;', (_err, rows) => {
          /**
           * @rows: [ { test: 2 } ]
           */
          console.log(rows)
     });
    res.render('index', {title: 'Express'});
    //res.send('respond with a resource');
});
export default router;
