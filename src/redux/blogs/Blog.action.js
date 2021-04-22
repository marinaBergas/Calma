import blogType from "./BlogType";

export const setCurrentBlog = blog =>({
    type : blogType.SET_CURRENT_BLOG ,
    payload : blog
  });