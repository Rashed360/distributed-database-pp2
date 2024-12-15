import { cookies } from 'next/headers'
import { getCourse } from '../../actions'
import EditCourse from './components/EditPage'

export default async function EditCoursePage({ params }) {
	const data = await cookies().get('user')
	const user = JSON.parse(data.value)

	const { courseId } = params
	const course = await getCourse(courseId)

	return <EditCourse course={course} user={user} />
}
