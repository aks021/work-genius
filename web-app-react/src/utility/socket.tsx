import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.WEBSOCKET_HOST +':' + process.env.WEBSOCKET_PORT;
export const socket = io(URL);