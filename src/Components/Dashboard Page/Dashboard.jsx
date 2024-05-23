import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import page from './style.module.css'

export default function Dashboard() {
	return (
		<div className='flex'>
			<Sidebar />
			<div id={page.dashboard} className='w-5/6 flex flex-col'>
				<div id={page.user}>
					<div id={page.icon}></div>
					<div className='flex gap-28'>
						<div id={page.userName}>Prakhar</div>
						<div id={page.arrow}>&gt;</div>
					</div>
				</div>
				<div>
					<div id={page.left}>
						<div id={page.welcomeSection} className='flex flex-col gap-5'>
							<h2>Welcome Back! <strong>Prakhar </strong>👋</h2>
							<div className='flex flex-col'>
								<p>You have completed 12 task this week!</p>
								<p>Keep it up and you will be able to finish the course in no time</p>
							</div>
						</div>
						<div id={page.courseProgressSection}>
							<h1>Course Progress : </h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
