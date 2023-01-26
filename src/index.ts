import "dotenv/config"
import { Client } from "discord.js"

const token = process.env.CLIENT_TOKEN;
const client  = new Client({
    intents: []
});

client.login(token)
console.log(client)