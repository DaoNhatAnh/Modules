module.exports.config = {
	name: "antiout",
	version: "1.0.0",
	credits: "ProCoderMew - ĐNA fix it",
	hasPermssion: 1,
	description: "Tắt/Bật Antiout để add lại thành viên out chùa",
	usages: "on/off",
    commandCategory: "other",
	cooldowns: 0
};

module.exports.run = async function({ api, event }) {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'meewmeew.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { antiout } = database;
    if (antiout[threadID] == true) {
        antiout[threadID] = false;
        api.sendMessage("Đã tắt chế độ chống out chùa.", threadID, messageID);
    } else {
        antiout[threadID] = true;
        api.sendMessage("Đã bật chế độ chống out chùa. (Không chắc là có thể add lại được toàn bộ thành viên out chùa)", threadID, messageID);
    }
    writeFileSync(path, JSON.stringify(database, null, 4));
}
