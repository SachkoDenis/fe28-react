import React from "react";
//@ts-ignore
import styles from './ModalWindow.module.css'
import classNames from "classnames";
import { IconCancel } from "../../Assets/Icons";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const ModalWindow= ({active, closeModal, children, isPostModalVisible, isImgModalVisible}:any) => {
    const { theme } = useThemeContext();

return (
    <div
    className={classNames(styles.modalPost, {
      [styles.modalActive]: active,
      [styles.darkContainer]: theme === Theme.Dark,
    })}
    
  >
    <div className={styles.cancelButton} onClick={closeModal}><IconCancel/></div>
   
    <div className={classNames({
      [styles.modalContent]: isPostModalVisible,
      [styles.modalContentImg]: isImgModalVisible,
    })}> {children}</div>
  </div>

);
};
export default ModalWindow;
