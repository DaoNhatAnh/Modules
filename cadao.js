module.exports.config = {
	name: "cadao",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ca Dao Việt Nam",
	commandCategory: "News",
	usages: "gai",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const res = await axios.get(`https://le31.glitch.me/tarot`);
var cadao = res.data.data
return api.sendMessage(`★ℭɑ ɗɑ❍ ҩ¡ệζ ղɑლ★:\n" ${cadao} "`, event.threadID, event.messageID)
}