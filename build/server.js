"use strict";

require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _configEngine = _interopRequireDefault(require("./config/configEngine"));
var _web = _interopRequireDefault(require("./routes/web"));
var _cronJobContronler = _interopRequireDefault(require("./controllers/cronJobContronler"));
var _socketIoController = _interopRequireDefault(require("./controllers/socketIoController"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var cookieParser = require('cookie-parser');
var app = (0, _express["default"])();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
app.use(cookieParser());
// app.use(express.static('public'));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());

// setup viewEngine
(0, _configEngine["default"])(app);
// init Web Routes
_web["default"].initWebRouter(app);

// Cron game 1 Phut 
_cronJobContronler["default"].cronJobGame1p(io);

// Check xem ai connect vào sever 
_socketIoController["default"].sendMessageAdmin(io);

// app.all('*', (req, res) => {
//     return res.render("404.ejs"); 
// });

server.listen(port, function () {
  console.log("Connected success port: " + port);
});