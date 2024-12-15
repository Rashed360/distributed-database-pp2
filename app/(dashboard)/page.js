import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
	const user = await cookies().get('user')
	if (!user) {
		redirect('/login')
	}

	const userData = JSON.parse(user.value)
	if (userData.role === 'instructor') {
		return redirect('/instructor')
	} else redirect('/student')
}
