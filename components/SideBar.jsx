'use client'

import { useState } from 'react'

export default function SideBar() {
	const currentUser = 'instructor'
	const tabs = {
		student: ['All Courses', 'My Courses', 'My Assignments', 'My Grades'],
		instructor: ['My Courses', 'My Assignments', 'My Students'],
	}
	const [active, setActive] = useState(tabs[0])

	return (
		<aside className='col-span-3 flex flex-col bg-stone-900'>
			<div className='h-16 flex justify-center items-center bg-stone-700'>
				<p className='font-bold text-white text-2xl'>EduOnline</p>
			</div>
			<section className='flex flex-col text-lg text-white'>
				{tabs[currentUser].map((tab, idx) => (
					<div
						key={idx}
						onClick={() => setActive(tab)}
						className={`px-4 py-2 bg-white/10 transition ${
							active === tab ? 'bg-white/20' : 'hover:bg-white/15'
						}`}
					>
						{tab}
					</div>
				))}
			</section>
		</aside>
	)
}
