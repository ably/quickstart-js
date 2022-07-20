// Create the client
const Ably = require('ably');
const ably = new Ably.Realtime({ authUrl: 'https://ably.com/ably-auth/token/docs' });

// Connect to Ably
ably.connection.on('connected', () => {
  console.log('Connected to Ably!');
});


// Get the channel to connect to
const channel = ably.channels.get('quickstart');

// Subscribe to the channel
channel.subscribe('greeting', (message) => {
  console.log(`Received a greeting message in realtime: ${message.data}`);
});


// Publish a message
channel.publish('greeting', 'hello!');
channel.publish('greeting', 'hello!');
channel.publish('greeting', 'hello!');
channel.publish('greeting', 'hello!');

// Register connection close callback
ably.connection.on('closed', () => {
  console.log('Closed the connection to Ably.');
});

// wait 2s to receive all messages and then shut down
setTimeout(() => {
  // Close the connection
  ably.connection.close();
}, 2000);    
