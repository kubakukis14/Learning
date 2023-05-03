import '../styles.css'

interface props {
    id: string,
    checked: boolean,
    text: string,
    completeTask: (id:string, check:boolean) => void,
    deleteTodo: (id:string) => void
}

const Task = ({ id, checked, text, completeTask, deleteTodo }:props) => {
    return (
        <li>
            <label>
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={(e) => completeTask(id, e.target.checked)} 
                />
                {text}
            </label>
            <button
                className='btn btn-danger'
                onClick={() => deleteTodo(id)}
            >
                Delete
            </button>
        </li>
    )
}

export default Task