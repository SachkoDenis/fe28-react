export type SearchCardType = {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    author: number;
  };
  
  export type SearchCardProps = {
    post: SearchCardType;
  };