import React, { FC } from 'react';
//@ts-ignore
import styles from './Title.module.css';
import { TitlePropsType } from './type';

const Title: FC<TitlePropsType> = ({ title, className }) => {
   return <h2 className={`${styles.title} ${className || ''} `}>{title} </h2>;
};

export default Title;