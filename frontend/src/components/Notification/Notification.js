import React from "react";
import useNotification from "../../hooks/useNotification";
import styles from "./Notification.module.css";

const typeClasses = {
  error: styles.error,
  success: styles.success,
};

function Notification() {
  const { notification, clear } = useNotification();

  return notification ? (
    <div className={`${styles.notification} ${typeClasses[notification.type]}`}>
      {notification.message}
      <div className={styles.closeBtn} onClick={() => clear()}>
        <svg width="11px" height="9px" viewBox="0 0 11 9">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon
              id="x"
              fill="#ffffff"
              // eslint-disable-next-line max-len
              points="3.798 4.356 0.666 0 3.456 0 5.49 3.006 7.614 0 10.152 0 7.074 4.32 10.332 9 7.614 9 5.328 5.688 3.006 9 0.45 9"
            />
          </g>
        </svg>
      </div>
    </div>
  ) : null;
}

export default Notification;
