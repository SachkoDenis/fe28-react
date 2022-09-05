import React, { FC } from 'react';
import { UserNamePropsType } from './types';
//@ts-ignore
import styles from './UserName.module.css';

const UserName: FC<UserNamePropsType> = ({ title, className }) => {
   return <p className={`${styles.userName} ${className || ''}`}>{title}</p>;
};

export default UserName;