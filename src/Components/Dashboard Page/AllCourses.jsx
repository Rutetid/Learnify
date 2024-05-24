import Sidebar from '../Sidebar/Sidebar'
import React from 'react'
import Course_progress from './Course_progress';

const AllCourses = () => {
  return (
			<div className="flex">
				<div className='w-2/12'>
					<Sidebar />
				</div>
				<div className="bg-dashboard  ">
					<div className="grid grid-cols-3">
						<Course_progress />
						<Course_progress />
						<Course_progress />
					</div>
				</div>
			</div>
		);
}

export default AllCourses;