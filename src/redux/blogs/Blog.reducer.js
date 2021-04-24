import blogType from "./BlogType";

const INITIAL_STATE = {
    currentBlog : null ,
}
const blogReducer  = (state=INITIAL_STATE,action)=>{
    switch(action.type){
    case blogType.SET_CURRENT_BLOG:
        return {
        ...state , currentBlog : action.payload
    }
    default :
    return state  
}
};
export default blogReducer 