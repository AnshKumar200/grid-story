import { useState, useEffect, useRef } from 'react';

export const useWebSocket = (url: string) => {
    const [lastMessage, setLastMessage] = useState(null);
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        ws.current = new WebSocket(url);
        ws.current.onopen = () => console.log("WebSocket connected");
        ws.current.onclose = () => console.log("WebSocket disconnected");

        ws.current.onmessage = (event) => {
            setLastMessage(event.data);
        };

        return () => {
            ws.current?.close();
        };
    }, [url]);

    const sendMessage = (message: any) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify(message));
        }
    };

    return { lastMessage, sendMessage };
};
