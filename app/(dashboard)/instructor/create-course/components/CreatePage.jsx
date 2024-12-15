'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CourseForm from '@/components/CourseForm'
import { createCourse } from '../../actions'

export default function CreateCourse({ user }) {
	const router = useRouter()
	const [values, setValues] = useState({
		title: '',
		category: '',
		description: '',
	})

	const onChange = e => setValues({ ...values, [e.target.name]: e.target.value })

	const handleCreateCourse = async e => {
		e.preventDefault()

		try {
			const response = await createCourse(values.title, values.category, values.description, user.id)
			alert(response.message)
			router.push('/instructor/my-courses')
		} catch (error) {
			alert(error.message) // Show error message
		}
	}

	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold mb-6'>Create Course</h1>
			<CourseForm values={values} onChange={onChange} onSubmit={handleCreateCourse} />
		</div>
	)
}
