import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const CreateForm_Page = ({ handleAddTask }) => {
	let nav = useNavigate()
	let todayDate = `${new Date().getFullYear()}-${
		new Date().getMonth() + 1
	}-${new Date().getDate()}`
	let [newTask, setNewTask] = useState({
		id: uuidv4(),
		title: '',
		description: '',
		assignee: '',
		status: '',
		priority: '',
		createdDate: todayDate,
		dueDate: '',
	})
	return (
		<div className='display-views'>
			<form
				id='form-page'
				onSubmit={(e) => {
					e.preventDefault()

					handleAddTask(newTask)

					setNewTask({
						id: uuidv4(),
						title: '',
						description: '',
						assignee: '',
						status: '',
						priority: '',
						createdDate: todayDate,
						dueDate: '',
					})
					nav('/')
				}}
			>
				<label>Task Title:</label>
				<input
					required
					id='title-field'
					value={newTask.title}
					className='form'
					type='text'
					name='title'
					onChange={(e) => {
						setNewTask({
							...newTask,
							title: e.target.value,
							createdDate: todayDate,
						})
					}}
				/>
				<label>Task Description:</label>
				<input
					required
					id='description-field'
					value={newTask.description}
					className='form'
					type='text'
					name='description'
					onChange={(e) => {
						setNewTask({
							...newTask,
							description: e.target.value,
						})
					}}
				/>
				<label>Task Owner:</label>
				<input
					id='assignee-field'
					value={newTask.assignee}
					className='form'
					type='text'
					name='assignee'
					onChange={(e) => {
						setNewTask({
							...newTask,
							assignee: e.target.value,
						})
					}}
				/>
				<label>
					{' '}
					Task Stage: <br />
					<select
						required
						id='status-field'
						name='status'
						onChange={(e) => {
							setNewTask({
								...newTask,
								status: e.target.value,
							})
						}}
					>
						<option value=''>Select Task Stage</option>
						<option value='To Do'>To Do</option>
						<option value='In Progress'>In Progress</option>
						<option value='Done'>Done</option>
					</select>
				</label>
				<br />
				<label>
					{' '}
					Priority: <br />
					<select
						id='priority-field'
						name='priority'
						onChange={(e) => {
							setNewTask({
								...newTask,
								priority: e.target.value,
							})
						}}
					>
						<option value=''>Select Task Stage</option>
						<option value='Low'>Low ❗️</option>
						<option value='Medium'>Medium ❗️❗️</option>
						<option value='High'>High ❗️❗️❗️</option>
					</select>
				</label>
				<label>Create Date:</label>
				<input
					value={todayDate}
					className='form'
					type='text'
					name='currentDate'
					disabled
				/>
				<label>Due Date:</label>
				<input
					required
					id='dueDate-field'
					value={newTask.dueDate}
					className='form'
					type='date'
					name='dueDate'
					min={new Date().toJSON().slice(0, 10)}
					onChange={(e) => {
						setNewTask({
							...newTask,
							dueDate: e.target.value,
						})
					}}
				/>
				<div id='form-btns'>
					<button
						className='form-btn'
						id='form-create_btn'
						type='submit'
					>
						Create
					</button>

					<Link to='/'>
						<button className='form-btn' id='form-back_btn'>
							Back
						</button>
					</Link>
				</div>
			</form>
		</div>
	)
}

export default CreateForm_Page
