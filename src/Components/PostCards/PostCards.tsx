import React from "react";
//@ts-ignore
import styles from './PostCards.module.css'
import { PostCardsPropsType } from './types'

const posts = () => {

const POSTS_NAME = [
    {
        id: 0,
        image: "string",
        text: "string",
        date: "2022-08-23",
        lesson_num: 0,
        title: "string",
        author: 0
      }
]
return (
  posts.map(posts) => (
  <div className={styles.postcard}>
    <div className={styles.postcard_content}>
      <div className={styles.postcard_content_left}>
        <div className={styles.postcard_date}> {posts.date} </div>
        <h2>{posts.title}</h2>
        <p>{posts.text}</p>
      </div>
      <div className={styles.postcard_content_right}>
        <div>{posts.image}</div>
      </div>
      <div className={styles.postcard_content_down}>
        <div className={styles.postcard_content_down_left}>
          <img src="" alt="" />
          
          <img src="" alt="" />
        </div>
        <div className={styles.postcard_content_down_right}>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
))
}

export default posts