import { useState, FunctionComponent as FC, FormEvent } from 'react'
import TODOI from '../interfaces/TodoInterface'
interface Props {
	addTodo(todo: TODOI): void
	todos: TODOI[]
}
const Form: FC<Props> = ({ addTodo, todos }) => {
	const [todo, settodo] = useState<string>('')

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = {
			id: 3,
			text: todo,
			completed: false,
		}
		addTodo(data)
		settodo('')
	}
	return (
		<div className='row'>
			<div className='col-8 mx-auto my-5'>
				<form onSubmit={handleSubmit}>
					<div className='form-group rounded-0 d-flex'>
						<input
							type='text'
							className='form-control rounded-0'
							placeholder='add todo'
							onChange={(e) => {
								settodo(e.target.value)
							}}
							style={{ boxShadow: 'none' }}
							value={todo}
						/>
						<button
							type='submit'
							className='btn btn-primary rounded-0'
						>
							Add
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Form
