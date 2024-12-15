import './globals.css'

export const metadata = {
	title: 'EduOnline',
	description: 'EduOnline - Distributed Database Systems',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='antialiased'>{children}</body>
		</html>
	)
}
