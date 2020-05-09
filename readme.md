# SimpleBot
A simple bot for you're own Discord server.

What can this **SimpleBot** do?<br>

- When a user joins or leave the server it will send a message to a channel.
- It will delete messages with the `?clear [number]` command.

*The [number] needs to be set to the amount of messages you want to delete.*

<img src="https://cdn.juliandev.nl/license.svg" alt="License">

This project might not be continued to development. 

# How to use

**1.** Download this project.<br>
**2.** Upload this project to your environment<br>
**3.** Run `npm install` to install the needed dependencies.<br>
**5.** Go to the `config.json` file and set your Discord bot token and channel ID.<br>
**6.** Open cmd and go to the project folder.<br>
**7.** Run `node simple.js` to activate the bot.

# Preview

<img src="assets/welcome_messages.png" alt="">
<img src="assets/clear_command.gif" alt="">

# Dependencies

- discord.js
- moment
- moment-duration,
- moment-duration-format
- ms
