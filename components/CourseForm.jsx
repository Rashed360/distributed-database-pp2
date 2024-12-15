import InputField from '@/components/InputField'
import Link from 'next/link'

export default function CourseForm({ values, onChange, onSubmit }) {
	return (
		<form onSubmit={onSubmit}>
			<InputField label='Title' name='title' value={values.title} type='text' onChange={onChange} required />
			<InputField
				label='Category'
				name='category'
				value={values.category}
				type='text'
				onChange={onChange}
				required
			/>
			<InputField
				label='Description'
				name='description'
				value={values.description}
				type='text'
				onChange={onChange}
				required
			/>

			<button
				type='submit'
				className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition'
			>
				Save Changes
			</button>
			<Link
				href='/instructor/my-courses'
				className='ms-2 px-4 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition'
			>
				Cancel
			</Link>
		</form>
	)
}
