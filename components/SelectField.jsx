import React from 'react'

export default function SelectField({ label, value, onChange, options, ...rest }) {
	return (
		<div className='flex flex-col'>
			<label className=''>{label}</label>
			<select
				className='w-full px-4 py-2 mb-2 rounded-lg border-none outline-none bg-white/90 text-black'
				value={value}
				onChange={onChange}
				{...rest}
			>
				{options.map(option => (
					<option key={option.value} className='text-black' value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}
