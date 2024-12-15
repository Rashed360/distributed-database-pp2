'use client'

import { ROLES } from '@/constants/roles'
import { REGIONS } from '@/constants/regions'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import InputField from '@/components/InputField'
import SelectField from '@/components/SelectField'

export default function App() {
	const router = useRouter()
	const [values, setValues] = useState({
		email: '',
		password: '',
		fullName: '',
		aboutMe: '',
		region: '',
		role: ROLES[0].value,
	})

	const onChange = e => setValues({ ...values, [e.target.name]: e.target.value })

	const handleSignup = async e => {
		e.preventDefault()
		console.log('User registered', values)
		router.push('/login')
	}

	return (
		<div className='h-screen w-full grid place-content-center overflow-hidden'>
			<div className='p-10 rounded-2xl w-[500px] text-white bg-stone-800'>
				<div>
					<p className='mb-4 font-bold text-white text-3xl'>EduOnline</p>
					<div className='flex justify-between'>
						<h1 className='mb-4 text-2xl'>Sign Up</h1>
						<div className='flex flex-col justify-center items-center'>
							<select
								className='px-4 py-2 bg-white/0 outline-none'
								name='role'
								value={values.role}
								onChange={onChange}
							>
								{ROLES.map(role => (
									<option key={role.value} className='text-black' value={role.value}>
										{role.label}
									</option>
								))}
							</select>
						</div>
					</div>
					<form onSubmit={handleSignup}>
						<SelectField
							label='Region/Location'
							name='region'
							value={values.region}
							options={REGIONS}
							onChange={onChange}
						/>
						<InputField
							label='Full Name'
							name='fullName'
							type='text'
							value={values.fullName}
							onChange={onChange}
							required
						/>
						<InputField
							label='Email'
							name='email'
							type='email'
							value={values.email}
							onChange={onChange}
							required
						/>
						<InputField
							label='Password'
							name='password'
							type='password'
							value={values.password}
							onChange={onChange}
							required
						/>
						<button
							className='w-full px-4 py-3 mb-2 rounded-lg border-none outline-none bg-green-600'
							type='submit'
						>
							Sign Up
						</button>
					</form>
					<p>
						Already have an account? <Link href='/login'>Log In</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
