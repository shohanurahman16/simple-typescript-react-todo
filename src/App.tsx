import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import TODOI from './interfaces/TodoInterface'

function App() {
	const [todos, settodos] = useState<TODOI[]>([])

	const addTodo = (todo: TODOI): void => {
		settodos((prevTodos: TODOI[]): TODOI[] => [todo, ...prevTodos])
	}
	return (
		<>
			<div className='container'>
				<Form addTodo={addTodo} todos={todos} />

				<TodoList todos={todos} />
			</div>
		</>
	)
}

export default App
