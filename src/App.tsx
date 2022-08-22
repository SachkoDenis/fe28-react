import { tab } from '@testing-library/user-event/dist/tab';
import React, { useState } from 'react';
//@ts-ignore
import styles from './App.module.css'
import Button, {ButtonType} from './Components/Button';
import Input from './Components/Input';

// const TABS_NAME = [
//   {
//     key: 'all',
//     title: 'All',
//   },
//   {
//     key: 'all',
//     title: 'All',
//   },
//   {
//     key: 'all',
//     title: 'All',
//   },
// ]


// const [isActive, setActive] = useState(true)
function App() {
const [value, setValue] = useState<string>('');
const onChange = (inputValue:string) => {
  setValue(inputValue)
}

  return (
    <div className={styles.app}>
      <Button type={ButtonType.Primary} title={'Primary'} onClick={() => alert('Primary')}/>
      <Button type={ButtonType.Secondary} title={'Secondary'} onClick={() => alert('Secondary')} />
      <Button type={ButtonType.Error} title={'Error'} onClick={() => alert('Error')} />
      <Button type={ButtonType.Primary} title={'Primary'} onClick={() => alert('Primary')} disabled/>
      <Button type={ButtonType.Secondary} title={'Secondary'} onClick={() => alert('Secondary')}  disabled/>
      <Button type={ButtonType.Error} title={'Error'} onClick={() => alert('Error')} disabled/>
      {/* {TABS_NAME.map((tab) => <div key={tab.key}>{tab.title} </div>)} */}



      <Input placeholder={'Placeholder'} onChange={onChange} value={value}/>

      </div>
  );
}

export default App;
