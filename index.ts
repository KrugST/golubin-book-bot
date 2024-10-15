import { config } from "./src/config";
import { Telegraf } from 'telegraf'
import { generateChapterNamesInline, getChapterContent } from './src/utils'
const bot = new Telegraf(config.TELEGRAM_BOT_TOKEN);
const bookChapterCount = 12; // Hardcoded for now
const chapterNamesInline = generateChapterNamesInline(bookChapterCount, 5)

bot.command("start", (ctx) => {
    ctx.reply("Оглавление", {
        reply_markup: {
            inline_keyboard: [
                ...chapterNamesInline,
            ]
        }
    });
});

for (let i = 1; i <= bookChapterCount; i++) {
    const chapterId = `chapter-${i}`;
    bot.action(chapterId, (ctx) => {
        console.log(ctx);
        const chapterContent = getChapterContent(chapterId);
        ctx.reply(chapterContent);
    });
}


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))