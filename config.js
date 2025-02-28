const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IvcgxZAa#C7wAUz6FPdqhk5bCUZkDYm8ZfNw6EuLcjkDnpk3UWe4",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/jo7gt7.jpeg",
SUDO_NB: process.env.SUDO_NB || "918138898059",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: "false"
};
