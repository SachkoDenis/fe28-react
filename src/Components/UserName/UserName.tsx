import React from 'react';
//@ts-ignore
import styles from './UserName.module.css';

const UserName = ({ userName }:any) => {
   return (
   <div className={styles.userName}>
      <div className={styles.userNameInitials}>{userName[0]}</div>
      <p>{userName}</p>
   </div>
   )
};

export default UserName;