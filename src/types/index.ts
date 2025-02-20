import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export interface Command {
    name: string;
    data: SlashCommandBuilder;
    execute: (interaction: CommandInteraction) => Promise<void>;
}

declare module 'discord.js' {
    export interface Client {
        commands: Collection<string, Command>;
    }
}
