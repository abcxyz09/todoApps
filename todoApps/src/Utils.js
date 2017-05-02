
export function moveTodoList(array,fromIndex,toIndex){
  let temp = array[fromIndex];
  if(fromIndex>toIndex){
      for(let i = fromIndex ;i> toIndex; i--){
        array[i] = array [i-1];
      }
      array[toIndex] = temp;
  }
  else{
    for(let i = fromIndex ; i< toIndex ; i++){
      array[i] = array[i+1];
    }
    array[toIndex] = temp;
  }
  return array;
}
export function findTodo(todo,todoList){
   return todoList.find((item) => item.title.toLowerCase()===todo.title.toLowerCase());
}
