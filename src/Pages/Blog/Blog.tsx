import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from 'react-paginate'

//@ts-ignore

import CardsList from "../../Components/CardsList";
import Title from "../../Components/Title";
import Tabs from "../../Components/Tabs";
import { TabsNames, PER_PAGE, DEFAULT_PAGE_NUMBER } from "../../Utils";
import {
  getMyPostsList,
  getPosts,
  setActiveTab
} from '../../Redux/reducers/postsReducer'
import styles from './Blog.module.css'
import postsSelectors from "../../Redux/selectors/postsSelectors";
import SinglePostModal from "./Components/SinglePostModal";
import SingleImgModal from "./Components/SingleImgModal";
import classNames from "classnames";
import authSelectors from "../../Redux/selectors/authSelectors";




  // const POST_MOCK = [
  //   {
  //     id: 1,
  //     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     text: "lAstronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  //     date: "2022-08-31",
  //     lesson_num: 0,
  //     title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  //     author: 0,
  //   },
  //   {
  //     id: 2,
  //     image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     text: "lAstronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  //     date: "2022-08-31",
  //     lesson_num: 0,
  //     title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  //     author: 0,
  //   },
  //   {
  //     id: 3,
  //     image: "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //     text: "lAstronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  //     date: "2022-08-31",
  //     lesson_num: 0,
  //     title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  //     author: 0,
  //   },
  //   {
  //     id: 4,
  //     image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //     text: "lAstronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  //     date: "2022-08-31",
  //     lesson_num: 0,
  //     title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  //     author: 0,
  //   },
  //   {
  //     id: 5,
  //     image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //     text: "lAstronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  //     date: "2022-08-31",
  //     lesson_num: 0,
  //     title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  //     author: 0,
  //   },
  //   {
  //     id: 6,
  //     image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //     text: "lAstronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  //     date: "2022-08-31",
  //     lesson_num: 0,
  //     title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  //     author: 0,
  //   },
  //   {
  //     id: 7,
  //     image: "",
  //     text: "lAstronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  //     date: "2022-08-31",
  //     lesson_num: 0,
  //     title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  //     author: 0,
  //   },
  //   {
  //     id: 8,
  //     image: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  //     date: "2022-08-31",
  //     lesson_num: 0,
  //     title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  //     author: 0,
  //   },
  //   {
  //     id: 9,
  //     image: "https://images.unsplash.com/photo-1594683734152-0eccf2501041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     text: "lAstronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  //     date: "2022-08-31",
  //     lesson_num: 0,
  //     title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  //     author: 0,
  //   },
  //   {
  //     id: 10,
  //     image: "https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     text: "lAstronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  //     date: "2022-08-31",
  //     lesson_num: 0,
  //     title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  //     author: 0,
  //   },
  //   {
  //     id: 11,
  //     image: "https://images.unsplash.com/photo-1581069593979-b897256fc6ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  //     date: "2022-08-31",
  //     lesson_num: 0,
  //     title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  //     author: 0,
  //   },
  // ];

  const Blog = () => {
    const activeTab = useSelector(postsSelectors.getActiveTab);
    const cardsList = useSelector(postsSelectors.getCardsList);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(authSelectors.getAuthStatus);
  

    const tabs = useMemo (
      () => [
        {
          key: TabsNames.All,
          title: "All",
          disabled: false,
        },
        {
          key: TabsNames.MyPosts,
          title: "My Posts",
          disabled: !isAuthenticated,
        },
  
        {
          key: TabsNames.Favorites,
          title: "My favorites",
          disabled: !isAuthenticated,
        },
        {
          key: TabsNames.Popular,
          title: "Popular",
          disabled: !isAuthenticated,
        },
      ],
      [isAuthenticated]
      )
  
    const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);
    const cardsCount = useSelector(postsSelectors.getCardsCount);
    const pagesCount = Math.ceil(cardsCount / PER_PAGE);
    const isMyPosts = activeTab === TabsNames.MyPosts;
    const onTabClick = (id: TabsNames) => {

      dispatch(setActiveTab(id));
    };
  
    useEffect(() => {
      const offset = (page-1) * PER_PAGE;
      dispatch(isMyPosts ? getMyPostsList() : getPosts({ offset}))
    }, [page, isMyPosts]);

    const onPageChange = ({selected}:{selected:number}) => {
      setPage(selected+1);
    }
  
    return (
      <div >
        <Title title={"Blog"} />
        <Tabs tabs={tabs} onClick={onTabClick} activeTab={activeTab} />
        <CardsList cardsList={cardsList} />
        {!isMyPosts && (
        <ReactPaginate
          pageCount={pagesCount}
          onPageChange={onPageChange}
          containerClassName={styles.pagesContainer}
          pageClassName={styles.pageNumber}
          breakClassName={styles.pageNumber}
          breakLinkClassName={styles.linkPage}
          activeLinkClassName={styles.linkPage}
          pageLinkClassName={styles.linkPage}
          activeClassName={styles.activePageNumber}
          nextClassName={classNames(styles.pageNumber, styles.arrowButton, {
            [styles.availableToClickButton]: page !== pagesCount,
          })}
          previousClassName={classNames(styles.pageNumber, styles.arrowButton, {
            [styles.availableToClickButton]: page !== 1,
          })}
          previousLinkClassName={styles.linkPage}
          nextLinkClassName={styles.linkPage}
        />
      )}
        <SinglePostModal/>
        <SingleImgModal/>
      </div>
    );
  };
  export default Blog;
  