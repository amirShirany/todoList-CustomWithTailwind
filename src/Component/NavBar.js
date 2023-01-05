/** @format */
import Select from 'react-select';

const options = [
	{ value: 'All', label: 'All' },
	{ value: 'Completed', label: 'Completed' },
	{ value: 'Uncompleted', label: 'Uncompleted' },
];

const NavBar = ({ unCompletedTodos, selectedOption, onChange }) => {
	if (!unCompletedTodos) return <h2>set your todays todos!</h2>;

	return (
		<header>
			<span>{unCompletedTodos}</span>
			<h2> are not completed</h2>
			<Select
				onChange={onChange}
				value={selectedOption}
				options={options}
				className='select'
			/>
		</header>
	);
};

export default NavBar;
