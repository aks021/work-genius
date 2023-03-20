import React from "react";
import styles from './NotificationViewer.module.css';

interface NotificationViewerProps {
    notificationList: string[]
}
export const NotificationViewer = (props: NotificationViewerProps) => {
    return(
        <>
            {props.notificationList.map((notification, index) => 
                <div className={styles.NotificationCtn} 
                key = {index}>{notification}</div>
            )}
        </>)
}