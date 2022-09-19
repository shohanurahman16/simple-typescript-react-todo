import React, { FunctionComponent as FC } from 'react'
import TODOI from '../interfaces/TodoInterface'

interface Props {
	todos: TODOI[]
}

const TodoList: FC<Props> = ({ todos }) => {
	return (
		<div>
			{todos.map((todo: TODOI, i: number): any => (
				<div key={i}>{todo.text}</div>
			))}
		</div>
	)
}

export default TodoList
