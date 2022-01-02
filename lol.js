

    const WebSocket = require("ws")
    
    const wss = new WebSocket.Server({ port : 3000 });
    sleep = function(time) {
        var stop = new Date().getTime();
        while (new Date().getTime() < stop + time) {;
        }
        return new Promise((r, _) => r())
      }

    wss.on("connection", ws => {
        console.log("new client connected");
        // sending message
        ws.on("message", data => {
            console.log(String.fromCharCode.apply(null, new Uint16Array(data)));

            ws.send(String.fromCharCode.apply(null, new Uint16Array(data)));
        });
        // handling what to do when clients disconnects from server
        ws.on("close", () => {
            console.log("the client has connected");
        });
        // handling client connection error
        ws.onerror = function () {
            console.log("Some Error occurred")
        }
    });
