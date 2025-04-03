import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", (ws) => {

    client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        },
    }).then((user) => {
        console.log("User created successfully", user.id);
    }).catch((error) => {
        console.error("Error creating user", error);
    });
    ws.send("Hi there! I am a WebSocket server.");
});