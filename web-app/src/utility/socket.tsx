import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'http://0.0.0.0:5005';

export const socket = io(URL);