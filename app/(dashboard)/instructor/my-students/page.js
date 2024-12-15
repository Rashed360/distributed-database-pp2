import { cookies } from 'next/headers'
import { getEnrolledStudents } from '../actions'

export default async function MyStudents() {
	const data = await cookies().get('user')
	const user = JSON.parse(data.value)

	// Ensure the user is an instructor
	if (user.role !== 'instructor') {
		redirect('/')
	}

	// Fetch the instructor's course's students
	const courses = await getEnrolledStudents(user.id)
	console.log(courses)

	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold mb-6'>My Students</h1>
			{courses.length === 0 ? (
				<p>You have no students enrolled in your courses.</p>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{courses.map(course => (
						<div
							key={course.id}
							className='p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition'
						>
							<h2 className='text-xl font-semibold'>{course.title}</h2>
							<p className='text-gray-700 mt-2'>{course.category}</p>
							<p className='mt-4 text-sm text-gray-600'>Enrolled Students:</p>
							<ul className='list-disc pl-5'>
								{course.students.length === 0 ? (
									<li>No students enrolled</li>
								) : (
									course.students.map(student => <li key={student.id}>{student.email}</li>)
								)}
							</ul>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
