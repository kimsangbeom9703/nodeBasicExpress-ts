"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const access = {
    host: 'localhost',
    user: 'root',
    database: 'pin_social_share_svr_real',
    password: 'qkek#dusvlf',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};
const conn = mysql2_1.default.createPool(access);
exports.default = conn;
