import { cookies } from 'next/headers'
import { getMyCourses } from '../actions'

export default async function MyCoursesPage() {
	const data = await cookies().get('user')
	const user = JSON.parse(data.value)

	// Fetch the student's enrolled courses
	const courses = await getMyCourses(user.id)

	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold mb-6'>My Courses</h1>
			{courses.length === 0 ? (
				<p>You are not enrolled in any courses yet.</p>
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
							<p className='mt-4 text-sm text-gray-600'>Instructor: {course.instructorname}</p>
							<p className='mt-1 text-sm text-gray-600'>
								Enrolled at: {new Date(course.createdat).toLocaleDateString()}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
