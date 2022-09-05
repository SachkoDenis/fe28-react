import React from "react";
//@ts-ignore
import styles from './CardsList.module.css'
import PostCard from "../PostCards";
import { CardSize } from "../PostCards/PostCards";
import classNames from 'classnames'


const CardsList = ({ post, size }: any) => {
    const POST_MOCK = [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1612805144400-88c7821bf36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "lAstronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "2022-08-31",
        lesson_num: 0,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0,
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1583141293572-68a03934f43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwYXVkaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text: "Test Medium",
        date: "2021-12-12",
        lesson_num: 0,
        title: "Test Title",
        author: 0,
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1589536672709-a5d34b12466d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhciUyMGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "Test Medium",
        date: "2021-12-12",
        lesson_num: 0,
        title: "Test Title",
        author: 0,
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1615240697225-e9c0a61c24ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhciUyMGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60s",
        text: "Test Medium",
        date: "2021-12-12",
        lesson_num: 0,
        title: "Test Title",
        author: 0,
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1532268116505-8c59cc37d2e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "Test Medium",
        date: "2021-12-12",
        lesson_num: 0,
        title: "Test Title",
        author: 0,
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1622701578810-67534f6e6d2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNhciUyMGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "Test Small",
        date: "2021-12-12",
        lesson_num: 0,
        title: "Test Title",
        author: 0,
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1624001010212-f7bfd7cc74cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhciUyMGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "Test Small",
        date: "2021-12-12",
        lesson_num: 0,
        title: "Test Title",
        author: 0,
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1598122253931-3542df4e4100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGNhciUyMGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "Test Small ",
        date: "2021-12-12",
        lesson_num: 0,
        title: "Test Title",
        author: 0,
      },
      {
        id: 9,
        image: "https://images.unsplash.com/photo-1619682378738-f4204416d8ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGNhciUyMGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "Test Small",
        date: "2021-12-12",
        lesson_num: 0,
        title: "Test Title",
        author: 0,
      },
      {
        id: 10,
        image: "https://images.unsplash.com/photo-1639245944845-81b451c0842f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxjYXIlMjBhdWRpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        text: "Test Small",
        date: "2021-12-12",
        lesson_num: 0,
        title: "Test Title",
        author: 0,
      },
      {
        id: 11,
        image: "https://images.unsplash.com/photo-1640610031929-448db321fc47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGNhciUyMGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "Test Small",
        date: "2021-12-12",
        lesson_num: 0,
        title: "Test Title",
        author: 0,
      },
    ];
  
    return (
      <div className={styles.listContainer}>
        <div className={styles.listContainerLeft}>
          <div className={styles.listContainerLeftUp}>
            <PostCard post={POST_MOCK[0]} size={CardSize.Large} />
          </div>
          <div className={styles.listContainerLeftDown}>
            {POST_MOCK.map((post, id) => {
                      if (id > 0 && id < 5) {
                        return <PostCard post={post} key={post.id} size={CardSize.Medium}/>;
                      }
                    })}
           </div>       
        </div>
        <div className={styles.listContainerRight}>
            {POST_MOCK.map((post, id) => {
              if (id > 5) {
                return <PostCard post={post} key={post.id} size={CardSize.Small}/>;
               }
            })}
        </div>

      </div>
    );
  };

  export default CardsList