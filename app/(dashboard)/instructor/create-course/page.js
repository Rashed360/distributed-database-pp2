import { cookies } from 'next/headers'
import CreateCourse from './components/CreatePage'

export default async function CreateCoursePage() {
	const data = await cookies().get('user')
	const user = JSON.parse(data.value)

	return <CreateCourse user={user} />
}
