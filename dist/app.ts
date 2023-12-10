import {Telegraf} from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.start((ctx) => {
  ctx.reply('Привет, ' + ctx.from.first_name + '!');
})

bot.on('text', (ctx) => {
  ctx.reply(ctx.message.text);
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
