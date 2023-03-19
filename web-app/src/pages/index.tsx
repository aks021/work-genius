import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { NotificationViewer } from '@/components/NotificationViewer/NotificationViewer'
import React, { useEffect, useState } from 'react'
import { socket } from '@/utility/socket';

export default function Home() {
  const [isSocketConnected, setIsSocketConnected] = useState(socket.connected);
  const [notificationList, setNotificationList] = useState<string[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsSocketConnected(true);
    }

    function onDisconnect() {
      setIsSocketConnected(false);
    }

    function onMessage(value: string) {
      console.log(value);
      setNotificationList(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('broadcast', onMessage);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('broadcast', onMessage);
    };
  }, []);
  /*if (websocket){
    websocket.onopen = function(e: any) {
      console.log("[open] Connection established");
      console.log("Sending to server");
      websocket.send("My name is John");
    };

    websocket.onclose = function(event: any) {
      if (event.wasClean) {
        console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
      } else {
        console.log('[close] Connection died');
      }
    };

    websocket.onerror = function(error: any) {
      console.log(error);
    };
  }*/
  
  return (
    <>
      <div className={styles.description}>
          {isSocketConnected &&
            <NotificationViewer notificationList = {notificationList}/>
          }
        </div>
    </>
  )
}
