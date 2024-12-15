import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getMyCoursesForInstructor } from '../actions'

export default async function MyCoursesPage() {
	const data = await cookies().get('user')
	const user = JSON.parse(data.value)

	// Ensure the user is an instructor
	if (user.role !== 'instructor') {
		redirect('/') // Redirect to home page if the user is not an instructor
	}

	// Fetch the instructor's courses
	const courses = await getMyCoursesForInstructor(user.id)

	return (
		<div className='p-8'>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-3xl font-bold'>My Courses</h1>
				<Link
					href='/instructor/create-course'
					className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
				>
					Create Course
				</Link>
			</div>
			{courses.length === 0 ? (
				<p>You haven't created any courses yet.</p>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{courses.map(course => (
						<div
							key={course.id}
							className='p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition'
						>
							<h2 className='text-xl font-semibold'>{course.title}</h2>
							<p className='text-gray-700 mt-2'>{course.category}</p>
							<p className='text-gray-500 mt-1 text-sm'>{course.description}</p>
							<p className='mt-4 text-sm text-gray-600'>
								Created at: {new Date(course.createdat).toLocaleDateString()}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
