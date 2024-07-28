import * as React from "react";
import { useEffect, useState } from "react";
import "./Notification.css";

interface NotificationProps {
  id: number;
  message: string;
  type: string;
  duration?: number;
  onDismiss?: (id: number) => void;
}

const Notification: React.FC<NotificationProps> = React.memo(
  ({ id, message, type, duration = 4000, onDismiss }) => {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setExiting(true);
        setTimeout(() => {
          if (onDismiss) {
            onDismiss(id);
          }
        }, 300); // Match the animation duration
      }, duration);

      return () => clearTimeout(timer);
    }, [id, duration, onDismiss]);

    const handleClose = () => {
      setExiting(true);
      setTimeout(() => {
        if (onDismiss) {
          onDismiss(id);
        }
      }, 300);
    };

    return (
      <div
        className={`notification notification-${type} ${
          exiting ? "notification-exit" : "notification-enter"
        }`}
      >
        <div className="notification-content">
          <span>{message}</span>
        </div>
        <button className="close" onClick={handleClose}>
          &times;
        </button>
      </div>
    );
  }
);

export { Notification };
