'use server'

import { cookies } from 'next/headers'
import { database } from '@/app/actions'
import { actions, tables, dbToRegion } from '@/constants/db'
import { ROLES } from '@/constants/roles'

export async function login({ email, password, role }) {
	if (!email || !password || !role) {
		throw new Error('Email, Password, and Role are required.')
	}

	const isStudent = role === ROLES[0].value // student
	const isInstructor = role === ROLES[1].value // instructor
	const studentTable = tables.Students
	const instructorTable = tables.Instructors
	const regionalStudentTable = tables.RegionalStudents

	for (const db of Object.keys(dbToRegion)) {
		try {
			if (isStudent) {
				// Fetch student details
				const student = await database(db, actions.SELECT, studentTable, { email })
				if (student && student.length > 0) {
					const studentData = student[0]
					if (studentData.password !== password) {
						throw new Error('Invalid email or password.')
					}

					// Fetch fullname from RegionalStudents table
					const regionalStudent = await database(db, actions.SELECT, regionalStudentTable, {
						studentid: studentData.id,
					})
					if (regionalStudent && regionalStudent.length > 0) {
						const regionalData = regionalStudent[0]

						// Combine data
						const user = {
							id: studentData.id,
							email: studentData.email,
							fullname: regionalData.fullname, // Fullname from RegionalStudents
							regionid: studentData.regionid,
							role,
						}

						// Set cookies for the user
						await cookies().set('user', JSON.stringify(user), {
							httpOnly: true, // Prevent client-side access to cookie
							secure: process.env.NODE_ENV === 'production', // Use secure flag in production
							path: '/',
							maxAge: 30 * 24 * 60 * 60, // 30 days
						})

						return user // Return user data for further use
					}
				}
			} else if (isInstructor) {
				// Fetch instructor details
				const instructor = await database(db, actions.SELECT, instructorTable, { email })
				if (instructor && instructor.length > 0) {
					const instructorData = instructor[0]
					if (instructorData.password !== password) {
						throw new Error('Invalid email or password.')
					}

					// Combine data
					const user = {
						id: instructorData.id,
						email: instructorData.email,
						fullname: instructorData.fullname, // Fullname from Instructors
						regionid: instructorData.regionid,
						role,
					}

					// Set cookies for the user
					await cookies().set('user', JSON.stringify(user), {
						httpOnly: true,
						secure: process.env.NODE_ENV === 'production',
						path: '/',
						maxAge: 30 * 24 * 60 * 60,
					})

					return user // Return user data for further use
				}
			}
		} catch (error) {
			console.error(`Login failed in DB: ${db}`, error.message)
		}
	}

	throw new Error('User not found or invalid credentials.')
}
