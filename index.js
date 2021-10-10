// This is were all the magic starts to ocurr
const {Telegraf} = require('telegraf');
const keepAlive = require('./server')

const bot = new Telegraf(process.env.TOKEN)

bot.start((ctx) => {
    console.log(ctx.from)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)
    // Respuesta en español a la persona
    ctx.reply('🇪🇸 ¡Bienvenido a mi bot,' + ' ' + ctx.from.first_name + ' ' + ctx.from.last_name + '!' + ' Actualmente, este bot está en construcción, por lo que es probable que no todo esté como debería.');

    // Respuesta en inglés a la persona

    ctx.reply('🇬🇧 Welcome to the bot,' + ' ' + ctx.from.first_name + ' ' + ctx.from.last_name + '!' + " Currently, this bot is on the way to be built, and so, it's possible that everything is not as it will be.");
})

bot.help((ctx) => {
     ctx.reply('🇪🇸 ¡Hey! Actualmente, no he llegado a programar esta parte del bot, por lo que lo más probable es que esta función esté inoperativa de momento. ¡Vuelve a intentarlo pasados unos minutos!');

     ctx.reply("🇬🇧 Hey! Currently, I didn't get to code this part of the bot, and so, most likely is that this function is not operational at the moment. Try again in a few minutes! ");
})

bot.settings((ctx) => {
  ctx.reply('🇪🇸 ¡Hey! Actualmente, no he llegado a programar esta parte del bot, por lo que lo más probable es que esta función esté inoperativa de momento. ¡Vuelve a intentarlo pasados unos minutos!');

  ctx.reply("🇬🇧 Hey! Currently, I didn't get to code this part of the bot, and so, most likely is that this function is not operational at the moment. Try again in a few minutes! ");
})

//bot.command(['mycommand', 'Mycommand', 'myCommand', 'MyCommand',  'MYCOMMAND'], (ctx) => {
//  ctx.reply('My Happy Custom Command!')
//})

bot.command(['hugo', 'Hugo', 'HUGO'], (ctx) => {
  ctx.reply('Hugo es el mejor. ¿Acaso no lo sabías ya? ♥')
})

bot.hears(['Hola', 'hola', 'HOLA'], (ctx) => {
     ctx.reply('Bienvenido al bot de Rodrigo. Ten en cuenta que actualmente estoy siendo programado. Aun así, dime, ¿en qué puedo ayudarte? 😊')    
})

bot.on('sticker', ctx => {
   ctx.reply('🇪🇸 A mi también me gustan los stickers... 😉 (aunque todavía no sé como responder a ellos... shhhh)')

   ctx.reply("🇬🇧 I like stickers too... 😉 (although I still don't know how to respond to them... shhhh.")
})

bot.launch()
keepAlive()

// End of the bot. End of the magic. Really? Well, you'll have to find out later on this repl.it
