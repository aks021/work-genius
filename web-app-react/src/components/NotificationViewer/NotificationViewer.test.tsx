import {render, screen} from '@testing-library/react';
import React from 'react';

import {NotificationViewer} from './NotificationViewer';

describe('NotificationViewer Component', () => {
    it('should render notification content without issues', () => {
      render(
        <NotificationViewer notificationList = {["test1", "test2", "test3"]} />,
      );
  
      const queryReturn = screen.queryByText("test1");
      
      expect(queryReturn).not.toBe(null);
    });

    it('should not render invalid notification content', () => {
      render(
        <NotificationViewer notificationList = {["test1", "test2", "test3"]} />,
      );
  
      const nvComponent = screen.queryByText("test4");
      
      expect(nvComponent).toBe(null);
    });
});