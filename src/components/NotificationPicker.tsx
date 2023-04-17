import React from 'react';
import { motion } from 'framer-motion';

// Styles
import styles from './notificationPicker.module.scss';

function NotificationPicker() {
  return (
    <div className={styles.container}>
      <motion.div
        className={`${styles.option} ${styles.success}`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', damping: 10 }}
      >
        Success
      </motion.div>
      <motion.div
        className={`${styles.option} ${styles.info}`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', damping: 10 }}
      >
        Info
      </motion.div>
      <motion.div
        className={`${styles.option} ${styles.warning}`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', damping: 10 }}
      >
        Warning
      </motion.div>
      <motion.div
        className={`${styles.option} ${styles.error}`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', damping: 10 }}
      >
        Error
      </motion.div>
    </div>
  );
}

export default NotificationPicker;
