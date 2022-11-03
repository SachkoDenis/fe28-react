import React, { FC } from "react";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
// @ts-ignore
import styles from './Label.module.css';
import classNames from 'classnames'

type LabelProps = {
  title: string;
};

const Label: FC<LabelProps> = ({ title }) => {

const {theme} = useThemeContext();

return <div className={classNames(styles.label, {
  [styles.darkContainer]: theme === Theme.Dark
})}>{title}</div>;
};

export default Label