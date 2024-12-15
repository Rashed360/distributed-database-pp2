import { redirect } from 'next/navigation'
import { tabs } from '@/constants/tabs'

export default function App() {
	return redirect(tabs.student[0].link)
}
