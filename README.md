# 🤖 JokeBot — Krish's Telegram Joke Bot

**JokeBot** is a fun and sarcastic Telegram bot built with Node.js and Telegraf.  
It tells you jokes, greets you when you say "hi", and roasts you when you confuse it.  
Simple, sassy, and a little savage.

---

## 🚀 Features

- `/start` — Welcomes you to the bot  
- `/joke` — Fetches a random joke (setup + punchline delay)  
- `'hi'` — Replies with a friendly greeting  
- Any other message — Responds with 🖕 and a roast message  

---

## 🧪 Sample Chat

User: /start
Bot: Welcome to Krish's Joke Bot. Type /joke to get a joke

User: hi
Bot: Hello krish09

User: /joke
Bot: Why don't eggs tell jokes?
(wait for punchline...)
Bot: They'd crack each other up.

User: are you dumb?
Bot: 🖕
Bot: I don't understand humans. Especially (krish09)---

## 🛠 Tech Stack

- **Node.js**
- [**Telegraf.js**](https://telegraf.js.org/)
- **Axios** for joke API requests
- [**Official Joke API**](https://official-joke-api.appspot.com/)
- **dotenv** for managing bot token securely
