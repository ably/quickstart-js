// Include the promises interface
const Ably = require('ably/promises');
// Create the client
const ably = new Ably.Realtime.Promise({ authUrl: 'https://ably.com/ably-auth/token/docs' });

// wrapper for async functions
const ablyRealtimePromiseExample = async () => {
    // Connect to Ably
    try {
        await ably.connection.once('connected');
        console.log('Connected to Ably!');
    } catch (error) {
        console.error(error);
    }

    // get the channel to subscribe to
    const channel = ably.channels.get('quickstart');

    // Subscribe to a channel
    // the promise resolves when the channel is attached
    // (and resolves synchronously if the channel is already attached)
    await channel.subscribe('greeting', (message) => {
        console.log('Message is ==> '+ message.data)
    });

    // Publish a message or two
    await channel.publish('greeting', 'hello!');
    await channel.publish('greeting', 'hello!');
    await channel.publish('greeting', 'hello!');

    // wait 2s to receive all messages and then shut down
    setTimeout(() => {
        console.log('Closing connection...');
        ably.close();
        console.log('Closed the connection to Ably.');
    }, 2000);    
};

// call wrapper
ablyRealtimePromiseExample();
