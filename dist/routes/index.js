"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const db_1 = __importDefault(require("../models/db")); // 모듈 가져오기
router.get('/', (req, res, next) => {
    db_1.default.query('SELECT 1 + 1 AS `test`;', (_err, rows) => {
        /**
         * @rows: [ { test: 2 } ]
         */
        console.log(rows);
    });
    res.render('index', { title: 'Express' });
    //res.send('respond with a resource');
});
exports.default = router;
