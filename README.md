## Ably Quickstart

This repository contains the [Quickstart guide](https://ably.com/docs/quick-start-guide) JavaScript source code for both the callback and promises interfaces.

There are two folders: 

* `promises` contains the Quickstart code in Node and JavaScript (in `index.html`) using the promises interface. A [usage guide](./promises/usage.md) is also provided.
* `callbacks` contains the Quickstart code in Node using callbacks.

### Authentication

You will generally need to point your client at an authentication server by specifying an `authUrl`. For example:

``` javascript
const ably = new Ably.Realtime.Promise({ authUrl: 'https://ably.com/ably-auth/token/docs' });
```

**NOTE:** The authentication server `https://ably.com/ably-auth/token/docs` is only specified to provide an example and should not be used for production use.
