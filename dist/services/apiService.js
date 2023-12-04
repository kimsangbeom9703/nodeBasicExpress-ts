"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiModel_1 = __importDefault(require("../models/apiModel"));
const getData = () => {
    return apiModel_1.default.test();
};
exports.default = {
    getData
};
