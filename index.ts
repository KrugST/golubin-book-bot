import { config } from "./src/config";
import { Telegraf } from 'telegraf'
import { generateChapterNamesInline } from './src/utils'
const bot = new Telegraf(config.TELEGRAM_BOT_TOKEN);

bot.use(Telegraf.log())

const chapterNamesInline = generateChapterNamesInline(12, 5)

bot.command("start", (ctx) => {
    ctx.reply("Оглавление", {
        reply_markup: {
            inline_keyboard: [
                ...chapterNamesInline,
            ]
        }
    });
});

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))