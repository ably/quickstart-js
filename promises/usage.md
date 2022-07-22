## Ably Quickstart - Promises interface

This folder contains JavaScript source code for the [Quickstart guide](https://ably.com/docs/quick-start-guide), using the promises interface.

### Installation

For Node.js:

``` shell
npm install ably
```

For JavaScript:

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="//cdn.ably.com/lib/ably.min-1.js"></script>
  </head>
  <body>
  ...
```

### Create the client

For Node.js client:

``` javascript
const Ably = require('ably/promises');
const ably = new Ably.Realtime.Promise({ authUrl: 'https://ably.com/ably-auth/token/docs' });
```

For JavaScript (browser client):

``` javascript
  <body>
  ...
  <script>
      const ably = new Ably.Realtime.Promise({
        authUrl: "/auth",
      });
```

### Connect to Ably

``` javascript
await ably.connection.once('connected');
console.log('connected');
```

### Subscribe to a Channel

``` javascript
// get the channel to subscribe to
const channel = ably.channels.get('quickstart');

// the promise resolves when the channel is attached 
// (and resolves synchronously if the channel is already attached)
await channel.subscribe('greeting', (message) => {
  console.log('Message is ==> '+ message.data)
});
```

### Publish a message

``` javascript
await channel.publish('greeting', 'hello');
```

### Close the connection

``` javascript
console.log("Closing connection...");
ably.close();
console.log('Closed the connection to Ably.');
```
