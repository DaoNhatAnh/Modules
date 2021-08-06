module.exports.config = {
	name: "help",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "DuyVuong",
	description: "khóa help VjpPr0",
	commandCategory: "group",
	usages: "[lệnh]",
	cooldowns: 5,
};
module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("help") != 0) return;

	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["hiện tại code này là do Đào code ở phiên bản 1.1.2","con bot này thông minh hơn bạn","bạn đã biết rồi đấy","thằng admin này có ny là ĐTML","con bot này giúp bạn hỗ trợ trong việc học?","spam bot của Đào sẽ ban bạn khỏi người dùng bot","đừng để tôi cáu nhé!","việc bạn đang làm là vô dụng","đây là con bot lỗi nhiều","yêu bản thân giúp bạn camt thấy tốt hơn","trên TG có khoảng hơn 6.500 ngôn ngữ đấy","cái gì chưa biết chỉ cần biết là được","con chuột bị ốm uống thuốc chuột thì tại sao con chuột lại chết ?","chảy máu cam nhưng sao màu máu là màu đỏ ?", "Hàng năm, khoảng 9-10 người chết vì thả diều", "tôi có thể thấy bạn đang làm gì với con bot này", "bạn biết đấy, bạn biết rồi", "thực ra lệnh là menu, nếu bạn còn dùng lệnh này để xem bảng lệnh thì bạn ngu vcl", "tôi rất yêu ny tôi UwU", "phụ nữ khóc nhiều hơn đàn ông", "diện tích của nước Nga gần bằng với diện tích bề mặt của toàn bộ sao Diêm Vương", "làm ơn đừng dùng lệnh này để xem bảng lệnh nữa.", "bạn hay ví von những người mất trí là 'não cá vàng'? nhưng cá vàng có bộ nhỡ gần 5-6/10 bộ nhớ con người", "Đại học Oxford còn lâu đời hơn cả đế chế Aztec", "nếu Mặt Trời có kích thước của một tế bào bạch cầu trong máu, thì dải Ngân hà của chúng ta có kích thước tương đương với cả nước Mỹ"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = `[Bạn có biết?]: ${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};