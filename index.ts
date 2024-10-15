import { config } from "./src/config";
import { Telegraf, Markup } from 'telegraf'
import { generateChapterNames } from './src/utils'
const bot = new Telegraf(config.TELEGRAM_BOT_TOKEN);

bot.use(Telegraf.log())
const chapterNames = generateChapterNames(12)

bot.command('start', (ctx) => {
    return ctx.reply(
        'Оглавление',
        Markup.keyboard(chapterNames, {
            wrap: (btn, index, currentRow) => currentRow.length >= 5
        })
    )
})


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))