import React from 'react'
import litter from '../assets/litter.png'
import info from '../assets/info.png'
import { Link } from 'react-router-dom'

const TaskCard = ({ task, handleStatus, handleDelete }) => {
	const {
		id,
		title,
		description,
		assignee,
		status,
		priority,
		createdDate,
		dueDate,
	} = task
	return (
		<div
			id={id}
			key={id}
			draggable
			className='card'
			onDragStart={(e) => {
				e.dataTransfer.setData('text', e.target.id)
			}}
			onDragEnd={() => {
				let cardId = document.getElementById(id).getAttribute('id')
				let cardParent = document.getElementById(id).parentNode.id

				handleStatus(cardId, cardParent)
				console.log(cardParent, cardId)
			}}
		>
			{/* --------------------- */}
			{/* CARD TITLE */}
			<div className='card-header'>
				<h5>{title}</h5>
			</div>

			{/* ------------------ */}
			{/* TASK DESCRIPTION */}
			{/* <p>{status}</p> */}
			<div className='description'>
				{priority === 'Low' ? (
					<p>{`Priority: ❗️`}</p>
				) : priority === 'Medium' ? (
					<p>{`Priority: ❗️❗️`}</p>
				) : priority === 'High' ? (
					<p>{`Priority: ❗️❗️❗️`}</p>
				) : null}{' '}
				<br />
				<p>{description}</p>
			</div>

			{/* -------------------- */}
			{/* DUE DATE */}
			<div className='card-date'>
				<p>Due date: {dueDate}</p>
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
				) : dueDate <= new Date().toJSON().slice(0, 10) ? (
					<p>{`This task has been expired for ${Math.abs(
						Math.ceil(
							(new Date(dueDate).getTime() -
								new Date().getTime()) /
								(1000 * 60 * 60 * 24)
						)
					)} days`}</p>
				) : null}
			</div>
			<div className='card-btns'>
				{/* ------------------------ */}
				{/* DELETE TASK */}
				<span
					onClick={(e) => {
						let cardId = document
							.getElementById(id)
							.getAttribute('id')
						console.log(cardId, 'delete - button')
						handleDelete(cardId)
					}}
				>
					<img className='litter-info' src={litter} alt='trash-btn' />
				</span>
				{/* --------------------------- */}
				{/* INFO BUTTON */}
				<Link to={`/task-detail/${id}`}>
					<span
						onClick={(e) => {
							let cardId = document
								.getElementById(id)
								.getAttribute('id')
							console.log(cardId, 'info')
						}}
					>
						<img
							className='litter-info'
							src={info}
							alt='info-btn'
						/>
					</span>
				</Link>
			</div>
		</div>
	)
}

export default TaskCard
