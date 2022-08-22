import { tab } from '@testing-library/user-event/dist/tab';
import React, { useState } from 'react';
//@ts-ignore
import styles from './App.module.css'
import Button, {ButtonType} from './Components/Button';
import Tabs from './Components/Tabs';




// const [isActive, setActive] = useState(true)

export const App = () => {
  return (
    <div className={styles.app}>
      {/* <Button type={ButtonType.Primary} title={'Primary'} onClick={() => alert('Primary')}/>
      <Button type={ButtonType.Secondary} title={'Secondary'} onClick={() => alert('Secondary')} />
      <Button type={ButtonType.Error} title={'Error'} onClick={() => alert('Error')} />
      <Button type={ButtonType.Primary} title={'Primary'} onClick={() => alert('Primary')} disabled/>
      <Button type={ButtonType.Secondary} title={'Secondary'} onClick={() => alert('Secondary')}  disabled/>
      <Button type={ButtonType.Error} title={'Error'} onClick={() => alert('Error')} disabled/> */}
          <Tabs/> 
          
      </div>
  );
}

export default App;
