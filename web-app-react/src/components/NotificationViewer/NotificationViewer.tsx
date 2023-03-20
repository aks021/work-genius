import React from "react";

interface NotificationViewerProps {
    notificationList: string[]
}
export const NotificationViewer = (props: NotificationViewerProps) => {
    return(
        <div data-testid="notification-viewer-component-ctn">
            {props.notificationList.map((notification, index) => 
                <p key = {index}>{notification}</p>
            )}
        </div>)
}