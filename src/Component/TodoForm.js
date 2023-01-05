/** @format */
import { useState, useRef, useEffect } from 'react';

const TodoForm = (props) => {
	const [input, setInput] = useState(props.edit ? props.edit.text : '');

	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const changeHandler = (e) => {
		setInput(e.target.value);
		// console.log(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (input === '') {
			alert('enter todo!');
			return;
		}

		props.submitTodo(input);
		setInput('');

		// or >>>>
		// const newTodo = {
		// 	id: Math.floor(Math.random() * 1000),
		// 	text: input,
		// 	isCompleted: false,
		// };
		// props.setTodos([...props.todos, newTodo]);
		// setInput('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='formControl'>
				<input
					type='text'
					value={input}
					onChange={changeHandler}
					placeholder={props.edit ? 'update todo...' : 'Add new value ...'}
					ref={inputRef}
				/>
				<button
					type='submit'
					className={`btn ${props.edit ? 'updateTodo' : 'addTodo'}`}>
					{props.edit ? 'Update' : 'Add'}
				</button>
			</div>
		</form>
	);
};

export default TodoForm;
