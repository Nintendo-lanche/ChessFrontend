import io from "socket.io-client";

const URL = "https://ava-chess.herokuapp.com/";

const socket = io(URL, { transports: ["websocket"] });

// register preliminary event listeners here:

export { socket };
