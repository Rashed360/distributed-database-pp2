'use client'

import { deleteCourse } from '../../actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function CourseCard({ user, course }) {
	const router = useRouter()

	const handleDeleteCourse = async () => {
		try {
			const response = await deleteCourse(course.id)
			router.push('/instructor/my-courses')
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
			<p className='my-4 text-sm text-gray-600'>
				Created at: {new Date(course.createdat).toLocaleDateString()}
			</p>
			<Link
				href={`/instructor/edit-course/${course.id}`}
				className='mt-4 px-4 py-3 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition'
			>
				Edit Course
			</Link>

			<button
				onClick={handleDeleteCourse}
				className='ms-2 mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition'
			>
				Delete
			</button>
		</div>
	)
}
