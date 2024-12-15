'use client'

import Link from 'next/link'
import { logout } from '@/app/actions'

export default function SideBar({ userData }) {
	const { role } = userData
	const tabs = {
		student: [
			{ name: 'All Courses', link: '/student/all-courses' },
			{ name: 'My Courses', link: '/student/my-courses' },
			{ name: 'My Assignments', link: '/student/my-assignments' },
			{ name: 'My Grades', link: '/student/my-grades' },
		],
		instructor: [
			{ name: 'My Courses', link: '/instructor/my-courses' },
			{ name: 'My Assignments', link: '/instructor/my-assignments' },
			{ name: 'My Students', link: '/instructor/my-students' },
		],
	}

	const userTabs = tabs[role] || []

	return (
		<aside className='col-span-3 flex flex-col bg-stone-900'>
			<div className='h-16 flex justify-center items-center bg-stone-700'>
				<p className='font-bold text-white text-2xl'>EduOnline</p>
			</div>
			<section className='h-full flex flex-col justify-between text-lg text-white'>
				<div className='flex flex-col'>
					{userTabs.map((tab, idx) => (
						<Link
							key={idx}
							href={tab.link}
							className='mt-1 px-4 py-2 bg-white/10 transition hover:bg-white/15'
						>
							{tab.name}
						</Link>
					))}
				</div>
				<button onClick={logout} className='mt-1 px-4 py-2 bg-white/10 transition hover:bg-white/15'>
					Logout
				</button>
			</section>
		</aside>
	)
}
