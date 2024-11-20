import React, { useState } from 'react'
import Column from '../components/Column'
// import dataTasks from '../assets/jsontasks.json'

const KanbanBoard_Page = ({ tasks, setTasks }) => {
	// const [tasks, setTasks] = useState(dataTasks)

	function handleDelete(cardId) {
		const filteredTasks = tasks.filter((task) => {
			if (task.id !== cardId) {
				return true
			}
		})
		setTasks(filteredTasks)
	}

	function handleStatus(cardId, cardParent) {
		// const upTask = tasks.map((task) => {
		tasks.map((task) => {
			if (cardId === task.id) {
				task.status = cardParent
				return task
			} else {
				return task
			}
		})
		// setTasks(upTask)
		setTasks(tasks)
	}
	return (
		<div className='display-views kanban-columns'>
			<Column
				id='To Do'
				columnTitle='To Do 🤯'
				tasks={tasks}
				status='To Do'
				handleStatus={handleStatus}
				handleDelete={handleDelete}
			/>
			<Column
				id='In Progress'
				columnTitle='In Progress 🏃‍➡️'
				tasks={tasks}
				status='In Progress'
				handleStatus={handleStatus}
				handleDelete={handleDelete}
			/>
			<Column
				id='Done'
				columnTitle='Done ✅'
				tasks={tasks}
				status='Done'
				handleStatus={handleStatus}
				handleDelete={handleDelete}
			/>
		</div>
	)
}

export default KanbanBoard_Page
