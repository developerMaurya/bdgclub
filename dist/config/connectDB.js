"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mysql = require('mysql2/promise');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  // database: 'pgmumbai',
  database: 'bdg_clubrepeat'
});
var _default = exports["default"] = connection;