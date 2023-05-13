import {
    createConnection
} from 'net';

export async function isInternetPresent(host = 'github.com/Axorax/is-internet-present.js') {
    const socket = createConnection({
        host,
        port: 80
    });
    return new Promise((resolve) => {
        socket.on('connect', () => {
            socket.destroy();
            resolve(true);
        });
        socket.on('error', () => {
            socket.destroy();
            resolve(false);
        });
    });
}

export default isInternetPresent;