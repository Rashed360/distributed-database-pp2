'use client'

import { REGIONS } from '@/constants/regions'
import SideBar from '@/components/SideBar'
import Link from 'next/link'

export default function DashboardLayout({ children }) {
	return (
		<div className='h-screen grid grid-cols-12 overflow-hidden'>
			<SideBar />
			<div className='col-span-9'>
				<header className='w-full h-16 flex justify-between bg-stone-800 text-white'>
					<div className='grid place-content-center px-6'>
						<select className='px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition outline-none'>
							<option className='text-black' value=''>
								Location: Any
							</option>
							{REGIONS.map(region => (
								<option key={region.value} className='text-black' value={region.value}>
									{region.label}
								</option>
							))}
						</select>
					</div>
					<div className='grid place-content-center px-6 bg-white/5 hover:bg-white/10 transition font-bold'>
						<Link href='/login'>Login/SignUp</Link>
					</div>
				</header>
				{children}
			</div>
		</div>
	)
}
