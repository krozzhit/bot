import dotenv from 'dotenv';

dotenv.config();

export const config = {
    token: process.env.DISCORD_TOKEN!,
    clientId: process.env.CLIENT_ID!,
    guildId: process.env.GUILD_ID,
    database: {
        url: process.env.DATABASE_URL!,
    }
};
