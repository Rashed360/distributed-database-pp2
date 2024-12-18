import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { REGIONS } from '@/constants/regions'
import SideBar from '@/components/SideBar'
import { regionToDB } from '@/constants/db'
import Link from 'next/link'

export default async function DashboardLayout({ children }) {
	const user = await cookies().get('user')

	if (!user) {
		// Redirect to login if no user cookie is found
		redirect('/login')
	}

	// Parse the user data from cookies
	const userData = JSON.parse(user.value)

	return (
		<div className='h-screen grid grid-cols-12 overflow-hidden'>
			<SideBar userData={userData} />
			<div className='h-screen col-span-9'>
				<header className='w-full h-16 flex justify-between bg-stone-800 text-white'>
					<div className='grid place-content-center px-6'>
						<select
							className='px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition outline-none'
							value={regionToDB[userData.regionid]}
							disabled
						>
							<option className='text-black' value=''>
								All Locations
							</option>
							{REGIONS.map(region => (
								<option key={region.value} className='text-black' value={region.value}>
									{region.label}
								</option>
							))}
						</select>
					</div>
					<div className='grid place-content-center px-6 bg-white/5 hover:bg-white/10 transition'>
						{userData ? (
							<div className='flex flex-col'>
								<p className='font-bold m-0'>{userData.fullname}</p>
								<span className='text-sm uppercase text-white/60'>{userData.role}</span>
							</div>
						) : (
							<Link className='font-bold' href='/login'>
								Login/SignUp
							</Link>
						)}
					</div>
				</header>
				<main className='h-screen overflow-y-auto' style={{ height: 'calc(100vh - 4rem)' }}>
					{children}
				</main>
			</div>
		</div>
	)
}
