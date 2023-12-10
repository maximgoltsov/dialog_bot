"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = require("telegraf");
var bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
bot.start(function (ctx) {
    ctx.reply('Привет, ' + ctx.from.first_name + '!');
});
bot.on('text', function (ctx) {
    ctx.reply(ctx.message.text);
});
bot.launch();
process.once('SIGINT', function () { return bot.stop('SIGINT'); });
process.once('SIGTERM', function () { return bot.stop('SIGTERM'); });
