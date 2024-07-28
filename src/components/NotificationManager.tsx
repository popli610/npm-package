import * as React from "react";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import { Notification } from "./Notification";

type PropsType = {
  children: ReactNode;
};

interface NotificationContextType {
  addNotification: (message: string, type: string, options?: any) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

const NotificationProvider = ({ children }: PropsType) => {
  const [notifications, setNotifications] = useState<any[]>([]);

  const addNotification = useCallback(
    (message: string, type: string, options: any = {}) => {
      const id = new Date().getTime();
      console.log("Adding notification:", { id, message, type, ...options });
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { id, message, type, ...options },
      ]);
    },
    []
  );

  const removeNotification = useCallback((id: number) => {
    console.log("Removing notification:", id);
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  }, []);

  console.log("NotificationProvider render");

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="notification-container">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            {...notification}
            onDismiss={removeNotification}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, useNotification };
