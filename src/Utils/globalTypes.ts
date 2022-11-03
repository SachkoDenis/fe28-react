import CardsList from "../Components/CardsList"

export enum LikeStatus  {
    Like = 'like',
    Dislike = 'dislike'
}

export type PostCardsType = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
    likeStatus?: LikeStatus | null; 

}

export type CardsListType = Array<PostCardsType>;

export type UserActionPayload = {
    username: string;
    password: string;
    email: string;
}

export enum TabsNames {
    All = 'all',
    Favorites = 'favorites',
    Popular = 'popular',
    MyPosts = 'myPosts'
}

export enum RegistrationStatus {
    Success = 'success',
    Failed = 'failed',
    Default = 'default',
}

export type ActivationParams = {
    uid:string,
    token:string;
}

export type ActivateUserPayload = {
    params: ActivationParams;
    callback: (status: RegistrationStatus) => void;
  };
  export type AuthUserPayload = {
    email: string;
    password: string;
  };
  
  export type User = {
    username: string;
    id: number;
    email: string;
  };
  
  export type GetPostsPayload = {
    offset: number;
  };
  
  export type SearchPostsPayload = {
    search: string;
    offset: number;
    isOverwrite: boolean;
  };

  export type SetSearchedPostsPayload = {
    data: CardsListType;
    isOverwrite: boolean;
  };