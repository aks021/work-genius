import React from "react";

interface NotificationViewerProps {
    notificationList: string[]
}
export const NotificationViewer = (props: NotificationViewerProps) => {
    return(
        <>
            {props.notificationList.map((notification, index) => 
                <p key = {index}>{notification}</p>
            )}
        </>)
}