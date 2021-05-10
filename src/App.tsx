import { FC, useEffect, useState } from "react";
import Counter from './Counter'
import {ITodos} from './interfaces/todos'

const App: FC = () => {
  const [todos, setTodos] = useState<ITodos[] | null>(null)
  
  useEffect(() => {
    fetchData()
    .then(res => setTodos(res))
  }, [])

   const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const json = response.json()
    return json
  }

  const handleButton = ():void => {
    setTodos([])
  }

  return (
    <>
      <div>my awesome app</div>
      <Counter />
      <button onClick={handleButton}>Button</button>
      {!todos && (
        <div>Loading...</div>
      )}

      {todos && (
        todos.map((todo) => {
          return (
            <div key={todo.id}>
               <h3>{todo.title}</h3>
               <img src={todo.url} />
            </div>
          )
        })
      )}
      
      {Array.isArray(todos) && !todos.length && (
        <div>No data</div>
      )}
    </>
  );
}

export default App;
