module.exports = {
    name: 'stop',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        await voiceChannel.leave();
        await message.channel.send('A sair do canal de voz :smiling_face_with_tear:')
 
    }
}