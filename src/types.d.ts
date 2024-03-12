export type PostType = { 
    userId: number, 
    id : number,
    title: string, 
    body: string
} 


export interface PostsState {
    posts: PostType[];
    searchResult: PostType[] | null;
    searchForm : FormType

  }



  export interface FormType {
    search : string,
    input: string
  }