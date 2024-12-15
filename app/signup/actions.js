'use server'

import { database } from '@/app/actions'
import { actions, tables, dbToRegion } from '@/constants/db'
import { ROLES } from '@/constants/roles'

export async function signup({ email, password, fullname, region, role }) {
	if (!email || !password || !fullname || !region || !role) {
		throw new Error('All fields are required.')
	}

	// Validate region
	const targetDb = region // set region to corresponding DB
	if (!targetDb) {
		throw new Error('Invalid region selected.')
	}

	const isStudent = role === ROLES[0].value // student
	const isInstructor = role === ROLES[1].value // instructor
	if (!isStudent && !isInstructor) {
		throw new Error('Invalid role selected.')
	}

	// Prepare data for insertion
	const studentData = { email, password, regionid: dbToRegion[region] }
	const instructorData = { fullname, email, password, regionid: dbToRegion[region] }
	const regionalStudentData = { fullname, aboutme: '' }

	try {
		for (const db of Object.keys(dbToRegion)) {
			if (isStudent) {
				// Create student in all databases
				await database(db, actions.INSERT, tables.Students, studentData)
			} else if (isInstructor) {
				// Create instructor in all databases
				await database(db, actions.INSERT, tables.Instructors, instructorData)
			}
		}

		// Add RegionalStudent in the specific region for 'Student' role
		if (isStudent) {
			const newStudent = await database(targetDb, actions.SELECT, tables.Students, { email })
			if (newStudent && newStudent[0]) {
				const studentId = newStudent[0].id
				await database(targetDb, actions.INSERT, tables.RegionalStudents, {
					studentid: studentId,
					...regionalStudentData,
				})
			}
		}

		return { message: 'Signup successful', email, fullname, role, region: dbToRegion[region] }
	} catch (error) {
		console.error('Signup Error:', error)
		throw new Error('Signup failed.')
	}
}
