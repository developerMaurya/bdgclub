"use strict";

var _express = _interopRequireDefault(require("express"));
var _accountController = _interopRequireDefault(require("../controllers/accountController"));
var _homeController = _interopRequireDefault(require("../controllers/homeController"));
var _winGoController = _interopRequireDefault(require("../controllers/winGoController"));
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _middlewareController = _interopRequireDefault(require("../controllers/middlewareController"));
var _adminController = _interopRequireDefault(require("../controllers/adminController"));
var _dailyController = _interopRequireDefault(require("../controllers/dailyController"));
var _k5Controller = _interopRequireDefault(require("../controllers/k5Controller"));
var _k3Controller = _interopRequireDefault(require("../controllers/k3Controller"));
var _paymentController = _interopRequireDefault(require("../controllers/paymentController"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
var initWebRouter = function initWebRouter(app) {
  // page account
  router.get('/login', _accountController["default"].loginPage);
  router.get('/register', _accountController["default"].registerPage);
  router.get('/forgot', _accountController["default"].forgotPage);
  router.post('/api/sent/otp/verify', _accountController["default"].verifyCode);
  router.post('/api/sent/otp/verify/reset', _accountController["default"].verifyCodePass);
  router.post('/api/resetPasword', _accountController["default"].forGotPassword);

  // page home
  router.get('/', function (req, res) {
    return res.redirect('/home');
  });
  router.get('/home', _homeController["default"].homePage);
  router.get('/checkIn', _middlewareController["default"], _homeController["default"].checkInPage);
  router.get('/checkDes', _middlewareController["default"], _homeController["default"].checkDes);
  router.get('/checkRecord', _middlewareController["default"], _homeController["default"].checkRecord);
  router.get('/wallet/transfer', _middlewareController["default"], _homeController["default"].transfer);
  router.get('/promotion', _middlewareController["default"], _homeController["default"].promotionPage);
  router.get('/promotion/myTeam', _middlewareController["default"], _homeController["default"].promotionmyTeamPage);
  router.get('/promotion/promotionDes', _middlewareController["default"], _homeController["default"].promotionDesPage);
  router.get('/promotion/tutorial', _middlewareController["default"], _homeController["default"].tutorialPage);
  router.get('/promotion/bonusrecord', _middlewareController["default"], _homeController["default"].bonusRecordPage);
  router.get('/wallet', _middlewareController["default"], _homeController["default"].walletPage);
  router.get('/wallet/recharge', _middlewareController["default"], _homeController["default"].rechargePage);
  router.get('/wallet/recharge/pay', _middlewareController["default"], _homeController["default"].rechargeGateway);
  router.get('/wallet/recharge/pay1', _middlewareController["default"], _homeController["default"].rechargeGateway1);
  router.get('/wallet/withdrawal', _middlewareController["default"], _homeController["default"].withdrawalPage);
  router.get('/wallet/rechargerecord', _middlewareController["default"], _homeController["default"].rechargerecordPage);
  router.get('/wallet/withdrawalrecord', _middlewareController["default"], _homeController["default"].withdrawalrecordPage);
  router.get('/wallet/addBank', _middlewareController["default"], _homeController["default"].addBank);
  router.get('/wallet/paynow/manual_upi', _middlewareController["default"], _paymentController["default"].initiateManualUPIPayment);
  router.get('/wallet/paynow/manual_usdt', _middlewareController["default"], _paymentController["default"].initiateManualUSDTPayment);
  router.post('/wallet/paynow/manual_upi_request', _middlewareController["default"], _paymentController["default"].addManualUPIPaymentRequest);
  router.post('/wallet/paynow/manual_usdt_request', _middlewareController["default"], _paymentController["default"].addManualUSDTPaymentRequest);
  router.post('/wallet/paynow/wowpay', _middlewareController["default"], _paymentController["default"].initiateWowPayPayment);
  router.post('/wallet/verify/wowpay', _middlewareController["default"], _paymentController["default"].verifyWowPayPayment);
  router.get('/wallet/verify/wowpay', _middlewareController["default"], _paymentController["default"].verifyWowPayPayment);
  router.post('/wallet/paynow/upi', _middlewareController["default"], _paymentController["default"].initiateUPIPayment);
  router.get('/wallet/verify/upi', _middlewareController["default"], _paymentController["default"].verifyUPIPayment);
  router.get('/keFuMenu', _middlewareController["default"], _homeController["default"].keFuMenu);
  router.get('/mian', _middlewareController["default"], _homeController["default"].mianPage);
  router.get('/recordsalary', _middlewareController["default"], _homeController["default"].recordsalary);
  router.get('/getrecord', _middlewareController["default"], _homeController["default"].getSalaryRecord);
  router.get('/about', _middlewareController["default"], _homeController["default"].aboutPage);
  router.get('/redenvelopes', _middlewareController["default"], _homeController["default"].redenvelopes);
  router.get('/mian/forgot', _middlewareController["default"], _homeController["default"].forgot);
  router.get('/newtutorial', _homeController["default"].newtutorial);
  router.get('/about/privacyPolicy', _middlewareController["default"], _homeController["default"].privacyPolicy);
  router.get('/about/riskAgreement', _middlewareController["default"], _homeController["default"].riskAgreement);
  router.get('/myProfile', _middlewareController["default"], _homeController["default"].myProfilePage);

  // BET wingo
  router.get('/win', _middlewareController["default"], _winGoController["default"].winGoPage);
  router.get('/win/3', _middlewareController["default"], _winGoController["default"].winGoPage3);
  router.get('/win/5', _middlewareController["default"], _winGoController["default"].winGoPage5);
  router.get('/win/10', _middlewareController["default"], _winGoController["default"].winGoPage10);

  // trx 

  router.get('/trx', _middlewareController["default"], _winGoController["default"].trxPage1);
  router.get('/trx/3', _middlewareController["default"], _winGoController["default"].trxPage3);
  router.get('/trx/5', _middlewareController["default"], _winGoController["default"].trxPage5);
  router.get('/trx/10', _middlewareController["default"], _winGoController["default"].trxPage10);
  // BET K5D
  router.get('/5d', _middlewareController["default"], _k5Controller["default"].K5DPage);
  router.post('/api/webapi/action/5d/join', _middlewareController["default"], _k5Controller["default"].betK5D); // register
  router.post('/api/webapi/5d/GetNoaverageEmerdList', _middlewareController["default"], _k5Controller["default"].listOrderOld); // register
  router.post('/api/webapi/5d/GetMyEmerdList', _middlewareController["default"], _k5Controller["default"].GetMyEmerdList); // register

  // BET K3
  router.get('/k3', _middlewareController["default"], _k3Controller["default"].K3Page);
  router.post('/api/webapi/action/k3/join', _middlewareController["default"], _k3Controller["default"].betK3); // register
  router.post('/api/webapi/k3/GetNoaverageEmerdList', _middlewareController["default"], _k3Controller["default"].listOrderOld); // register
  router.post('/api/webapi/k3/GetMyEmerdList', _middlewareController["default"], _k3Controller["default"].GetMyEmerdList); // register

  // login | register 
  router.get('/aviator', _middlewareController["default"], _userController["default"].aviator);
  router.get('/popular', _middlewareController["default"], _userController["default"].popular);
  router.get('/lottery', _middlewareController["default"], _userController["default"].lottery);
  router.get('/slots', _middlewareController["default"], _userController["default"].slots);
  router.post('/api/webapi/login', _accountController["default"].login); // login
  router.post('/api/webapi/register', _accountController["default"].register); // register
  router.get('/api/webapi/GetUserInfo', _middlewareController["default"], _userController["default"].userInfo); // get info account
  router.put('/api/webapi/change/userInfo', _middlewareController["default"], _userController["default"].changeUser); // get info account
  router.put('/api/webapi/change/pass', _middlewareController["default"], _userController["default"].changePassword); // get info account

  // bet wingo
  router.post('/api/webapi/action/join', _middlewareController["default"], _winGoController["default"].betWinGo); // register
  router.post('/api/webapi/GetNoaverageEmerdList', _middlewareController["default"], _winGoController["default"].listOrderOld); // register
  router.post('/api/webapi/GetMyEmerdList', _middlewareController["default"], _winGoController["default"].GetMyEmerdList); // register

  // promotion
  router.post('/api/webapi/promotion', _middlewareController["default"], _userController["default"].promotion); // register
  router.post('/api/webapi/checkIn', _middlewareController["default"], _userController["default"].checkInHandling); // register
  router.post('/api/webapi/check/Info', _middlewareController["default"], _userController["default"].infoUserBank); // register
  router.post('/api/webapi/addBank', _middlewareController["default"], _userController["default"].addBank); // register
  router.post('/api/webapi/otp', _middlewareController["default"], _userController["default"].verifyCode); // register
  router.post('/api/webapi/use/redenvelope', _middlewareController["default"], _userController["default"].useRedenvelope); // register

  // wallet
  router.post('/api/webapi/recharge', _middlewareController["default"], _userController["default"].recharge); // register
  router.post('/api/webapi/confirm_recharge', _middlewareController["default"], _userController["default"].confirmRecharge);
  router.get('/api/webapi/myTeam', _middlewareController["default"], _userController["default"].listMyTeam); // register
  router.get('/api/webapi/recharge/list', _middlewareController["default"], _userController["default"].listRecharge); // register
  router.get('/api/webapi/withdraw/list', _middlewareController["default"], _userController["default"].listWithdraw); // register
  router.post('/api/webapi/recharge/check', _middlewareController["default"], _userController["default"].recharge2); // register
  router.post('/api/webapi/withdrawal', _middlewareController["default"], _userController["default"].withdrawal3); // register
  router.post('/api/webapi/callback_bank', _middlewareController["default"], _userController["default"].callback_bank); // register
  router.post('/api/webapi/recharge/update', _middlewareController["default"], _userController["default"].updateRecharge); // update recharge
  router.post('/api/webapi/transfer', _middlewareController["default"], _userController["default"].transfer); // register
  router.get('/api/webapi/transfer_history', _middlewareController["default"], _userController["default"].transferHistory); //

  router.post('/api/webapi/search', _middlewareController["default"], _userController["default"].search); // register

  // daily
  router.get('/manager/index', _dailyController["default"].middlewareDailyController, _dailyController["default"].dailyPage);
  router.get('/manager/listRecharge', _dailyController["default"].middlewareDailyController, _dailyController["default"].listRecharge);
  router.get('/manager/listWithdraw', _dailyController["default"].middlewareDailyController, _dailyController["default"].listWithdraw);
  router.get('/manager/members', _dailyController["default"].middlewareDailyController, _dailyController["default"].listMeber);
  router.get('/manager/profileMember', _dailyController["default"].middlewareDailyController, _dailyController["default"].profileMember);
  router.get('/manager/settings', _dailyController["default"].middlewareDailyController, _dailyController["default"].settingPage);
  router.get('/manager/gifts', _dailyController["default"].middlewareDailyController, _dailyController["default"].giftPage);
  router.get('/manager/support', _dailyController["default"].middlewareDailyController, _dailyController["default"].support);
  router.get('/manager/member/info/:phone', _dailyController["default"].middlewareDailyController, _dailyController["default"].pageInfo);
  router.post('/manager/member/info/:phone', _dailyController["default"].middlewareDailyController, _dailyController["default"].userInfo);
  router.post('/manager/member/listRecharge/:phone', _dailyController["default"].middlewareDailyController, _dailyController["default"].listRechargeMem);
  router.post('/manager/member/listWithdraw/:phone', _dailyController["default"].middlewareDailyController, _dailyController["default"].listWithdrawMem);
  router.post('/manager/member/redenvelope/:phone', _dailyController["default"].middlewareDailyController, _dailyController["default"].listRedenvelope);
  router.post('/manager/member/bet/:phone', _dailyController["default"].middlewareDailyController, _dailyController["default"].listBet);
  router.post('/manager/settings/list', _dailyController["default"].middlewareDailyController, _dailyController["default"].settings);
  router.post('/manager/createBonus', _dailyController["default"].middlewareDailyController, _dailyController["default"].createBonus);
  router.post('/manager/listRedenvelops', _dailyController["default"].middlewareDailyController, _dailyController["default"].listRedenvelops);
  router.post('/manager/listRecharge', _dailyController["default"].middlewareDailyController, _dailyController["default"].listRechargeP);
  router.post('/manager/listWithdraw', _dailyController["default"].middlewareDailyController, _dailyController["default"].listWithdrawP);
  router.post('/api/webapi/statistical', _dailyController["default"].middlewareDailyController, _dailyController["default"].statistical);
  router.post('/manager/infoCtv', _dailyController["default"].middlewareDailyController, _dailyController["default"].infoCtv); // get info account
  router.post('/manager/infoCtv/select', _dailyController["default"].middlewareDailyController, _dailyController["default"].infoCtv2); // get info account
  router.post('/api/webapi/manager/listMember', _dailyController["default"].middlewareDailyController, _dailyController["default"].listMember); // get info account

  router.post('/api/webapi/manager/buff', _dailyController["default"].middlewareDailyController, _dailyController["default"].buffMoney); // get info account

  // admin
  router.get('/admin/manager/index', _adminController["default"].middlewareAdminController, _adminController["default"].adminPage); // get info account
  router.get('/admin/manager/trx', _adminController["default"].middlewareAdminController, _adminController["default"].trxAdminPage);
  router.get('/admin/manager/index/3', _adminController["default"].middlewareAdminController, _adminController["default"].adminPage3); // get info account
  router.get('/admin/manager/index/5', _adminController["default"].middlewareAdminController, _adminController["default"].adminPage5); // get info account
  router.get('/admin/manager/index/10', _adminController["default"].middlewareAdminController, _adminController["default"].adminPage10); // get info account

  router.get('/admin/manager/5d', _adminController["default"].middlewareAdminController, _adminController["default"].adminPage5d); // get info account
  router.get('/admin/manager/k3', _adminController["default"].middlewareAdminController, _adminController["default"].adminPageK3); // get info account

  router.get('/admin/manager/members', _adminController["default"].middlewareAdminController, _adminController["default"].membersPage); // get info account
  router.get('/admin/manager/createBonus', _adminController["default"].middlewareAdminController, _adminController["default"].giftPage); // get info account
  router.get('/admin/manager/ctv', _adminController["default"].middlewareAdminController, _adminController["default"].ctvPage); // get info account
  router.get('/admin/manager/ctv/profile/:phone', _adminController["default"].middlewareAdminController, _adminController["default"].ctvProfilePage); // get info account

  router.get('/admin/manager/settings', _adminController["default"].middlewareAdminController, _adminController["default"].settings); // get info account
  router.get('/admin/manager/listRedenvelops', _adminController["default"].middlewareAdminController, _adminController["default"].listRedenvelops); // get info account
  router.post('/admin/manager/infoCtv', _adminController["default"].middlewareAdminController, _adminController["default"].infoCtv); // get info account
  router.post('/admin/manager/infoCtv/select', _adminController["default"].middlewareAdminController, _adminController["default"].infoCtv2); // get info account
  router.post('/admin/manager/settings/bank', _adminController["default"].middlewareAdminController, _adminController["default"].settingBank); // get info account
  router.post('/admin/manager/settings/cskh', _adminController["default"].middlewareAdminController, _adminController["default"].settingCskh); // get info account
  router.post('/admin/manager/settings/buff', _adminController["default"].middlewareAdminController, _adminController["default"].settingbuff); // get info account
  router.post('/admin/manager/create/ctv', _adminController["default"].middlewareAdminController, _adminController["default"].register); // get info account
  router.post('/admin/manager/settings/get', _adminController["default"].middlewareAdminController, _adminController["default"].settingGet); // get info account
  router.post('/admin/manager/createBonus', _adminController["default"].middlewareAdminController, _adminController["default"].createBonus); // get info account

  router.post('/admin/member/listRecharge/:phone', _adminController["default"].middlewareAdminController, _adminController["default"].listRechargeMem);
  router.post('/admin/member/listWithdraw/:phone', _adminController["default"].middlewareAdminController, _adminController["default"].listWithdrawMem);
  router.post('/admin/member/redenvelope/:phone', _adminController["default"].middlewareAdminController, _adminController["default"].listRedenvelope);
  router.post('/admin/member/bet/:phone', _adminController["default"].middlewareAdminController, _adminController["default"].listBet);
  router.get('/admin/manager/recharge', _adminController["default"].middlewareAdminController, _adminController["default"].rechargePage); // get info account
  router.get('/admin/manager/withdraw', _adminController["default"].middlewareAdminController, _adminController["default"].withdraw); // get info account
  // router.get('/admin/manager/level', adminController.middlewareAdminController, adminController.level); // get info account
  router.get('/admin/manager/levelSetting', _adminController["default"].middlewareAdminController, _adminController["default"].levelSetting);
  router.get('/admin/manager/CreatedSalaryRecord', _adminController["default"].middlewareAdminController, _adminController["default"].CreatedSalaryRecord);
  router.get('/admin/manager/rechargeRecord', _adminController["default"].middlewareAdminController, _adminController["default"].rechargeRecord); // get info account
  router.get('/admin/manager/withdrawRecord', _adminController["default"].middlewareAdminController, _adminController["default"].withdrawRecord); // get info account
  router.get('/admin/manager/statistical', _adminController["default"].middlewareAdminController, _adminController["default"].statistical); // get info account
  router.get('/admin/member/info/:id', _adminController["default"].middlewareAdminController, _adminController["default"].infoMember);
  router.get('/api/webapi/admin/getLevelInfo', _adminController["default"].middlewareAdminController, _adminController["default"].getLevelInfo);
  router.get('/api/webapi/admin/getSalary', _adminController["default"].middlewareAdminController, _adminController["default"].getSalary);
  router.post('/api/webapi/admin/updateLevel', _adminController["default"].middlewareAdminController, _adminController["default"].updateLevel); // get info account
  router.post('/api/webapi/admin/CreatedSalary', _adminController["default"].middlewareAdminController, _adminController["default"].CreatedSalary); // get info account
  router.post('/api/webapi/admin/listMember', _adminController["default"].middlewareAdminController, _adminController["default"].listMember); // get info account
  router.post('/api/webapi/admin/listctv', _adminController["default"].middlewareAdminController, _adminController["default"].listCTV); // get info account
  router.post('/api/webapi/admin/withdraw', _adminController["default"].middlewareAdminController, _adminController["default"].handlWithdraw); // get info account
  router.post('/api/webapi/admin/recharge', _adminController["default"].middlewareAdminController, _adminController["default"].recharge); // get info account
  router.post('/api/webapi/admin/rechargeDuyet', _adminController["default"].middlewareAdminController, _adminController["default"].rechargeDuyet); // get info account
  router.post('/api/webapi/admin/member/info', _adminController["default"].middlewareAdminController, _adminController["default"].userInfo); // get info account
  router.post('/api/webapi/admin/statistical', _adminController["default"].middlewareAdminController, _adminController["default"].statistical2); // get info account

  router.post('/api/webapi/admin/banned', _adminController["default"].middlewareAdminController, _adminController["default"].banned); // get info account

  router.post('/api/webapi/admin/totalJoin', _adminController["default"].middlewareAdminController, _adminController["default"].totalJoin); // get info account
  router.post('/api/webapi/admin/change', _adminController["default"].middlewareAdminController, _adminController["default"].changeAdmin); // get info account
  router.post('/api/webapi/admin/profileUser', _adminController["default"].middlewareAdminController, _adminController["default"].profileUser); // get info account

  // admin 5d 
  router.post('/api/webapi/admin/5d/listOrders', _adminController["default"].middlewareAdminController, _adminController["default"].listOrderOld); // get info account
  router.post('/api/webapi/admin/k3/listOrders', _adminController["default"].middlewareAdminController, _adminController["default"].listOrderOldK3); // get info account
  router.post('/api/webapi/admin/5d/editResult', _adminController["default"].middlewareAdminController, _adminController["default"].editResult); // get info account
  router.post('/api/webapi/admin/k3/editResult', _adminController["default"].middlewareAdminController, _adminController["default"].editResult2); // get info account

  return app.use('/', router);
};
module.exports = {
  initWebRouter: initWebRouter
};