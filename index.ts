import { config } from "./src/config";
import { Telegraf, Markup } from 'telegraf'
import { generateChapterNames, generateChapterNamesInline } from './src/utils'
const bot = new Telegraf(config.TELEGRAM_BOT_TOKEN);

bot.use(Telegraf.log())

const chapterNames = generateChapterNames(12)
const chapterNamesInline = generateChapterNamesInline(12, 5)

bot.command('start', (ctx) => {
    return ctx.reply(
        'Оглавление',
        Markup.keyboard(chapterNames, {
            wrap: (btn, index, currentRow) => currentRow.length >= 5
        })
    )
})

bot.command("inline", (ctx) => {
    ctx.reply("Главы", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. side-by-side */
                ...chapterNamesInline,
            ]
        }
    });
});

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))