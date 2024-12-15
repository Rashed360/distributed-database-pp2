import React from 'react'

export default function InputField({ label, value, onChange, ...rest }) {
	return (
		<div className='flex flex-col'>
			<label className=''>{label}</label>
			<input
				className='px-4 py-2 mb-2 rounded-lg border-none outline-none bg-white/90 text-black'
				value={value}
				onChange={onChange}
				{...rest}
			/>
		</div>
	)
}
