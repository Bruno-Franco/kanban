import React from 'react'
import TaskCard from './TaskCard'
import addBtn from '../assets/add.png'
import { Link } from 'react-router-dom'

const Column = ({
	tasks,
	columnTitle,
	status,
	id,
	handleStatus,
	handleDelete,
}) => {
	return (
		<div
			id={id}
			className='column'
			onDragOver={(e) => {
				e.preventDefault()
			}}
			onDrop={(e) => {
				e.preventDefault()

				e.target.appendChild(
					document.getElementById(e.dataTransfer.getData('text'))
				)
			}}
		>
			<div className='column-header'>
				<h4>{columnTitle}</h4>
				<Link to='../add-task'>
					<span
						className='add-btn'
						onClick={() => {
							let columnId = document
								.getElementById(id)
								.getAttribute('id')
							console.log('add item in column ---> ', columnId)
						}}
					>
						<img src={addBtn} alt='' />
					</span>
				</Link>
			</div>
			{tasks.map((task) => {
				return (
					status === task.status && (
						<TaskCard
							task={task}
							handleStatus={handleStatus}
							handleDelete={handleDelete}
						/>
					)
				)
			})}
		</div>
	)
}

export default Column
