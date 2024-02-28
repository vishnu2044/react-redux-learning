import React, {useState} from 'react'
// import { UseDispatch, useDispatch } from 'react-redux'
// import { addTodo } from '../redux/features/todo/todoSlice'
 


function AddTodo() {
    const [input, setInput] = useState('')
    // const dispatch = useDispatch()

    // const addTodoHandler = (e) =>{
    //     e.preventDefault()

    //     dispatch(addTodo(input))
    //     setInput('')
    // }
  return (
    <form className='space-x-3 mt-12 flex flex-col items-center'>
        <div className='bg-gray-100 border border-gray-300 w-1/4 flex flex-col items-center shadow-md rounded-xl'>

            <div className='m-6'>
                <p className='text-2xl font-semibold text-gray-700'> Add todo</p>

            </div>

            <div className='flex justify-between m-4 '>
                <p className=' px-2 py-1'>Note: </p>
                <input type="text"
                className='bg-gray-200 px-2 shadow border border-gray-300 rounded-md focus:outline-none py-1'
                />

            </div>
            <div className='p-2 mb-4 flex justify-between '>
                <button className='bg-gray-800 text-white px-8 py-2 shadow-sm rounded-md mx-6'>Add</button>
                <button className='bg-gray-800 text-white px-8 py-2 shadow-sm rounded-md mx-6'>Cancel</button>
            </div>

        </div>


    </form>
  )
}

export default AddTodo