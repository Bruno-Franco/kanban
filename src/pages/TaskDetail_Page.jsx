import React from 'react'
import { useParams, Link } from 'react-router-dom'

const TaskDetail_Page = ({ tasks }) => {
	const taskId = useParams().taskId
	let taskInfo = tasks.find((task) => task.id === taskId)
	console.log(taskInfo)

	const {
		id,
		title,
		description,
		assignee,
		status,
		createdDate,
		dueDate,
		priority,
	} = taskInfo

	return (
		<div className='display-views'>
			<div id='task-detail-page'>
				<div id='task-detail_headers'>
					<h3>{title}</h3>
					<h4>{assignee}</h4>
				</div>
				<div id='task-detail_status'>
					<p>{status}</p>
					{priority === 'Low' ? (
						<p>{`Priority: Low ❗️`}</p>
					) : priority === 'Medium' ? (
						<p>{`Priority: Medium ❗️❗️`}</p>
					) : priority === 'High' ? (
						<p>{`Priority: High ❗️❗️❗️`}</p>
					) : null}
				</div>
				<div id='task-detail_description'>
					<p>{description}</p>
				</div>
				<div id='task-detail_dates'>
					<p>Created Date: {createdDate}</p>
					<p>Due Date: {dueDate}</p>
					{/* --------------------- */}
					{/* EXPIRED DATE CALCULATION */}
					{dueDate > new Date().toJSON().slice(0, 10) ? (
						<p>{`Task will expire in ${Math.abs(
							Math.ceil(
								(new Date(dueDate).getTime() -
									new Date().getTime()) /
									(1000 * 60 * 60 * 24)
							)
						)} days`}</p>
					) : dueDate < new Date().toJSON().slice(0, 10) ? (
						<p>{`This task has been expired for ${Math.abs(
							Math.ceil(
								(new Date(dueDate).getTime() -
									new Date().getTime()) /
									(1000 * 60 * 60 * 24)
							)
						)} days`}</p>
					) : null}
				</div>
				<div id='task-detail_btns'>
					<Link to='/'>
						<button>Back to Kanban</button>
					</Link>
					<Link to='/tasks-list'>
						<button>Go to Tasks List!</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default TaskDetail_Page
