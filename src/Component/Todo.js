/** @format */

const Todo = ({ todo, onComplete, onDelete, onUpdateTodo }) => {
	return (
		<div className='todo'>
			<div
				onClick={onComplete}
				className={`todoText ${todo.isCompleted ? 'completed' : ''}`}>
				{todo.text}
			</div>
			<div className='rowItem'>
				<button className='btn' onClick={onUpdateTodo}>
					Edit
				</button>
				<button className='btn remove' onClick={onDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Todo;
