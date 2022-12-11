const headerReducer =(state, action)=>{
    switch(action.type){
        case 'UPDATE-HEADER-INPUT-TEXT':
            state.inputSearch.textValue = action.text
            return state
            default: return state
    }
}
export const updateHeaderInputText =(text)=>{
    return {type: 'UPDATE-HEADER-INPUT-TEXT', text:text}
         
}
export default headerReducer