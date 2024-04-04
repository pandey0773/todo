const initialData = {
    list : []
}

const todoReducers = (state = initialData, action)=>{
    switch (action.type) {
        case 'Add_Todo':
            const {id, data} = action.payload;
                return {
                    ...state,
                    list:[
                        ...state.list,
                        {
                        id:id,
                        data:data
                    }]
                }
                case 'Delet_Todo':
                    const newlist = state.list.filter((e)=>e.id !== action.id)
                        return {
                            ...state,
                            list:newlist
                        }
    
        default: return state;
            
    }
}

export default todoReducers;