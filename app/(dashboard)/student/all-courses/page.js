import { getAllCourses } from '../actions'
import { cookies } from 'next/headers'
import CourseCard from './components/CourseCard'

export default async function AllCoursesPage() {
	const data = await cookies().get('user')
	const user = JSON.parse(data.value)
	const courses = await getAllCourses()

	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold mb-6'>All Courses</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{courses.map(course => (
					<CourseCard key={course.id} course={course} user={user} />
				))}
			</div>
		</div>
	)
}
