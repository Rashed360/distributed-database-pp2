'use server'

import { database } from '@/app/actions'
import { actions, tables, dbToRegion } from '@/constants/db'
import { ROLES } from '@/constants/roles'

export async function login({ email, password, role }) {
	if (!email || !password || !role) {
		throw new Error('Email, Password, and Role are required.')
	}

	const isStudent = role === ROLES[0].value // student
	const isInstructor = role === ROLES[1].value // instructor
	const table = isStudent ? tables.Students : isInstructor ? tables.Instructors : null
	if (!table) {
		throw new Error('Invalid role selected.')
	}

	for (const db of Object.keys(dbToRegion)) {
		try {
			const user = await database(db, actions.SELECT, table, { email })
			if (user && user.length > 0) {
				const userData = user[0]
				if (userData.password !== password) {
					throw new Error('Invalid email or password.')
				}

				// Return user details (excluding password)
				return {
					id: userData.id,
					email: userData.email,
					regionid: dbToRegion[db],
					role,
				}
			}
		} catch (error) {
			console.error(`Login failed in DB: ${db}`, error.message)
		}
	}

	throw new Error('User not found or invalid credentials.')
}
