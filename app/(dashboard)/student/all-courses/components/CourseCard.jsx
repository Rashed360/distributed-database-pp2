'use client'

import { enrollInCourse } from '../../actions'

export default function CourseCard({ user, course }) {
	console.log(course);
	
	const handleEnroll = async courseId => {
		try {
			const response = await enrollInCourse(user.id, courseId)
			alert(response.message) // Show success message
		} catch (error) {
			alert(error.message) // Show error message
		}
	}

	return (
		<div className='p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition'>
			<h2 className='text-xl font-semibold'>{course.title}</h2>
			<p className='text-gray-700 mt-2'>{course.category}</p>
			<p className='text-gray-500 mt-1 text-sm'>{course.description}</p>
			<p className='mt-4 text-sm text-gray-600'>Instructor: {course.instructorid}</p>
			<p className='mt-1 text-sm text-gray-600'>
				Created at: {new Date(course.createdat).toLocaleDateString()}
			</p>
			<button
				onClick={() => handleEnroll(course.id)}
				className='mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition'
			>
				Enroll
			</button>
		</div>
	)
}
