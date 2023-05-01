/*
import React from 'react'
import { Todo } from '../model'
import { useReducer } from 'react'

type Actions = 
    | {type: 'add', payload: string}
    | {type: 'remove', payload: number}
    | {type: 'done', payload: number}

const TodoReducer = (state: Todo[], action: Actions) => {
    switch(action.type) {
        case 'add':
        return [
            ...state, 
            {id: Date.now(), todo: action.payload, isDone: false}
        ]
        case 'remove':
        return state.filter((todo) => todo.id !== action.payload)
        case 'done':
        return [
            state.map((todo) => {
                if (todo.id === action.payload) {
                  return {...todo, isDone: !todo.isDone}
                } else {
                  return todo
                }
              })
        ]
        default:
        return state
    }
}

const taskReducer = () => {
  const [state, dispatch] = useReducer(TodoReducer, [])


  return
    <div></div>;
}

export default taskReducer
*/
export {}