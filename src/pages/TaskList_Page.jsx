import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TaskList_Page = ({ tasks }) => {
	let nav = useNavigate()
	return (
		<div className='display-views'>
			<div id='task-list_header'>
				<h3>TASK LIST</h3>
			</div>
			<table id='task-list_table'>
				<thead id='task-list_head'>
					<th id='table-header_id'>Id</th>
					<th>Title</th>
					<th>Description</th>
					<th>Assignee</th>
					<th>Status</th>
					<th>Priority</th>
					<th>Created Date</th>
					<th>Due Date</th>
					<th>Days to Expire</th>
				</thead>
				<tbody>
					{tasks.map((task) => {
						return (
							<tr
								className='task-list_table_row'
								onClick={() => {
									nav(`/task-detail/${task.id}`)
								}}
							>
								<td>{task.id}</td>

								<td>{task.title}</td>

								<td>{task.description}</td>

								<td>{task.assignee}</td>

								{/* <td>{task.status}</td> */}

								{task.status === 'To Do' ? (
									<td>{`To Do 🤯`}</td>
								) : task.status === 'In Progress' ? (
									<td>{`In Progress 🏃‍➡️`}</td>
								) : task.status === 'Done' ? (
									<td>{`Done ✅`}</td>
								) : null}

								{task.priority === 'Low' ? (
									<td>{`Low ❗️`}</td>
								) : task.priority === 'Medium' ? (
									<td>{`Medium ❗️❗️`}</td>
								) : task.priority === 'High' ? (
									<td>{`High ❗️❗️❗️`}</td>
								) : null}

								<td>{task.createdDate}</td>

								<td>{task.dueDate}</td>

								{task.dueDate >
								new Date().toJSON().slice(0, 10) ? (
									<td>{`Task will expire in ${Math.abs(
										Math.ceil(
											(new Date(task.dueDate).getTime() -
												new Date().getTime()) /
												(1000 * 60 * 60 * 24)
										)
									)} days`}</td>
								) : task.dueDate <
								  new Date().toJSON().slice(0, 10) ? (
									<td>{`Expired for ${Math.abs(
										Math.ceil(
											(new Date(task.dueDate).getTime() -
												new Date().getTime()) /
												(1000 * 60 * 60 * 24)
										)
									)} days`}</td>
								) : null}
							</tr>
						)
					})}
				</tbody>
			</table>

			<div id='task-list_btns'>
				<Link to='/'>
					<button id='task-list_btn_kanban'>Go to KanBan</button>
				</Link>
				<Link to='/add-task'>
					<button id='task-list_btn_create'>Create Task</button>
				</Link>
			</div>
		</div>
	)
}

export default TaskList_Page
