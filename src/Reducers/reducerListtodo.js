let stateinitial=[]

const reducer=(state=stateinitial,action)=>
{
   switch(action.type)
   {   
       case 'ADD_TODO' :
       return [
           ...state,{todo:action.newtodo}//state.concat({todo:action.newtodo})
       ]
       case 'REMOVE_TODO':
       return (
           state.filter((el,index)=>(index!=action.id))
       )

       case 'TOGGLE_TODO':
       return (
           state.map((el,index)=>(index===action.cin)?{todo:el.todo,isDone:!el.isDone}:el)
       )
       default:
       return state
   }
}

export default reducer

