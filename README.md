# Kurento Media Server

Kurento is a WebRTC media server and a set of client APIs making simple
the development of advanced video applications for WWW and smartphone platforms.
Kurento features include group communications, transcoding, recording, mixing,
broadcasting and routing of audiovisual flows.

http://www.kurento.org/docs/current/

## Meteor package notes

Loads server Kurento libraries. You can use any frontend WebRTC library or 
directly the browser APIs.

On the server 'kurento' is the entry point for normal usage. See Kurento
documentation for further details.

A getKurentoClient function is also provided for ease of use. It assumes
Meteor.settings.kurentoAddr is set to the address of your KMS instance.
All calls to getKurentoClient will share the same connection.
If the connection is severed, it will automatically try to reconnect.

Set kurento.logConnectionStatus to true to log connection success/error.

Kurento is a callback type API, you can make it synchronous by using
Meteor.wrapAsync:

``` js
const pipeline = Meteor.wrapAsync(kurentoClient.create)("MediaPipeline");
```
