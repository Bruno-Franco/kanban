import React, { useState } from 'react'
import Sidebar from './Sidebar'
import About_Page from '../pages/About_Page'
import KanbanBoard_Page from '../pages/KanbanBoard_Page'
import TaskDetail_Page from '../pages/TaskDetail_Page'
import CreateForm_Page from '../pages/CreateForm_Page'
import NotFound_Page from '../pages/NotFound_Page'
import TaskList_Page from '../pages/TaskList_Page'
import dataTasks from '../assets/jsontasks.json'

import { Routes, Route } from 'react-router-dom'

const Main = () => {
	const [tasks, setTasks] = useState(dataTasks)
	function handleAddTask(newTask) {
		// setTasks([...tasks, newTask])
		setTasks([newTask, ...tasks])
		console.log(tasks)
	}
	return (
		<div id='main'>
			<Sidebar />
			<Routes>
				<Route
					path='/'
					element={
						<KanbanBoard_Page tasks={tasks} setTasks={setTasks} />
					}
				/>
				<Route path='/about' element={<About_Page />} />
				<Route
					path='/task-detail/:taskId'
					element={<TaskDetail_Page tasks={tasks} />}
				/>
				<Route
					path='/add-task'
					element={<CreateForm_Page handleAddTask={handleAddTask} />}
				/>
				<Route
					path='/tasks-list'
					element={<TaskList_Page tasks={tasks} />}
				/>
				<Route path='/*' element={<NotFound_Page />} />
			</Routes>
		</div>
	)
}

export default Main
