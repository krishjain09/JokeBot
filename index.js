const { Telegraf } = require('telegraf');
require('dotenv').config();
const axios = require('axios');
const bot = new Telegraf(process.env.BOT_TOKEN);
//started bot
bot.start((ctx)=>ctx.reply("Welcome to Krish's Joke Bot. Type /joke to get a joke"));

bot.command('joke',(ctx)=>{
  axios.get('https://official-joke-api.appspot.com/random_joke').then((response)=>{
    console.log(response.data);
    ctx.reply(response.data.setup);
    console.log(response.data.punchline);
    setTimeout(()=>{
      ctx.reply(response.data.punchline);
    },2700);
  })
  .catch((error)=>{
    console.error("Error fetching joke:", error);
    ctx.reply("Oops! Couldn't fetch a joke right now. Try again later.");
  })
});

bot.hears('hi',(ctx)=>{
  ctx.reply(`Hello ${ctx.from.username}`);
});

bot.on('message',(ctx)=>{
  ctx.reply('🖕');
  const username = ctx.from.username ? ctx.from.username : ctx.from.first_name;
  ctx.reply(`I don't understand humans. Especially (${username})`);
});

bot.launch();
console.log("Bot is running...");  // Just to confirm the bot started successfully
