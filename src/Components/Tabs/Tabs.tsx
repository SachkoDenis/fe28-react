import React, { useState } from "react";
//@ts-ignore
import styles from './Tabs.module.css'
import { TabsPropsType } from './types'

const Tabs = () => {
const [currentTab, setCurrentTab] = useState('1')

const TABS_NAME = [
    {
      key: 'All',
      title: 'All',
      className: styles.all,
      content:'all',
      id:'1',
    },
    {
      key: 'My favorites',
      title: 'My favorites',
      className: styles.myfavorites,
      content:'My favorites',
      id:'2',
    },
    {
      key: 'Popular',
      title: 'Popular',
      className: styles.popular,
      content:'Popular',
      id:'3',
    },
  ]

  const handleTabClick = (e:any) => {
    setCurrentTab(e.target.id);
}

return (
    <ul className={styles.list}>
       {TABS_NAME.map((tab) => (
          <li className={styles.list_item}>
             <button key={tab.key} id={tab.id} className={tab.className} onClick={handleTabClick}>
                {tab.title}
             </button>
             <div key={tab.key}>
                        {currentTab === `${tab.id}` && <div><p>{tab.content}</p></div>}
                    </div>
          </li>
       ))}
    </ul>
 );
        }

        export default Tabs