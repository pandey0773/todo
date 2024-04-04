export const addTodo = (data)=>{
    // debugger;
    return {
        type:'Add_Todo',
        payload : {
            id : new Date().getTime().toString(),
            data:data
        }
    }
}
export const DeletTodo = (id)=>{
    return {
        type:'Delet_Todo',
        id
    }
}