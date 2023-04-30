import React from 'react'
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField:React.FC<Props> = ({todo, setTodo}) => {
  return <form className='input'>
    <input 
        type='input' 
        value={todo}
        onChange={(e) => setTodo (e.target.value)}
        className='input__box' 
        placeholder='Add a task' 
    />
    <button className='input__button' type='submit'>Add</button>
  </form>;
}

export default InputField;
