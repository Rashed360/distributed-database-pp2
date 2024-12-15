'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { updateCourse } from '../../../actions'
import CourseForm from '@/components/CourseForm'

export default function EditCourse({ course, user }) {
	const router = useRouter()
	const [values, setValues] = useState({
		title: course.title,
		category: course.category,
		description: course.description,
	})

	const onChange = e => setValues({ ...values, [e.target.name]: e.target.value })

	const handleUpdateCourse = async e => {
		e.preventDefault()

		try {
			const response = await updateCourse(course.id, values.title, values.category, values.description)
			alert(response.message)
			router.push('/instructor/my-courses')
		} catch (error) {
			alert(error.message) // Show error message
		}
	}

	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold mb-6'>Edit Course</h1>
			<CourseForm values={values} onChange={onChange} onSubmit={handleUpdateCourse} />
		</div>
	)
}
