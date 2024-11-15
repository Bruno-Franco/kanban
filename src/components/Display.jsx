import React from 'react'
import About_Page from '../pages/About_Page'
import KanbanBoard_Page from '../pages/KanbanBoard_Page'
import TaskDetail_Page from '../pages/TaskDetail_Page'
import CreateForm_Page from '../pages/CreateForm_Page'
import NotFound_Page from '../pages/NotFound_Page'

const Display = () => {
	return (
		<div id='display'>
			<About_Page />
			<KanbanBoard_Page />
			<TaskDetail_Page />
			<CreateForm_Page />
			<NotFound_Page />
		</div>
	)
}

export default Display
