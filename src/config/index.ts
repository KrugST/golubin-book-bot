import dotenv from "dotenv";

dotenv.config();

const { TELEGRAM_BOT_TOKEN } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
    throw new Error("Missing telegram tokens env variables");
}

export const config = {
    TELEGRAM_BOT_TOKEN
};