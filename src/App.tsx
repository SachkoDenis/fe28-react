import { type } from 'os';
import { title } from 'process';
import React from 'react';
//@ts-ignore
import styles from './App.module.css'


const Button = ({title, onClick, className, type,  disabled}: any) => {

  const buttonType = {
    primary: styles.primary,
    secondary: styles.secondary,
    error: styles.error,
  }//@ts-ignore
 



  return <div onClick={onClick} className={`${styles.button} ${className} ${buttonType[type as keyof typeof buttonType]} ${disabled ? styles.disabled:''}`}>{title}</div>
}




export const App = () => {
  return (
    <div className={styles.app}>
      <Button title={'Primary'} onClick={() => alert('Primary')}  type={'primary'} disabled={false}/>
      
      <Button title={'Secondary'} onClick={() => alert('Secondary')} type={'secondary'} disabled={false} />
      <Button title={'Error'} onClick={() => alert('Error')} type={'error'} disabled={false}/>
      <Button title={'Primary'} onClick={() => alert('Primary')} type={'primary'} disabled={true}/>
      <Button title={'Secondary'} onClick={() => alert('Secondary')} type={'secondary'} disabled={true}/>
      <Button title={'Error'} onClick={() => alert('Error')} type={'error'} disabled={true}/>
            
      </div>
  );
}

export default App;
