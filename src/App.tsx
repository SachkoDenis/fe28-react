import React, {FC, useState } from 'react';
//@ts-ignore
import styles from './App.module.css'
import Button, {ButtonType} from './Components/Button';
import classNames from 'classnames';
import CardsList from './Components/CardsList';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import UserName from './Components/UserName';
import Header from './Components/Header';
import Menu from './Components/Header/Menu';
import Input from './Components/Input';
import Footer from './Components/Footer';

function App  ()  {
  const [value, setValue] = useState<string>("");
  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };
  const [isOpened, setOpened] = useState(false);
  return (
    <div className={styles.app}>
       <Header
          onClick={() => setOpened(!isOpened)}
          isOpened={isOpened}
          input={
            isOpened && (
              <Input
                placeholder={"Placeholder"}
                onChange={onChange}
                value={value}
              />
            )
          }
       />
      {isOpened && <Menu />}


       <SignUp/>  
       <SignIn/>   

       <Footer/>
      </div>
  );
}

export default App;
