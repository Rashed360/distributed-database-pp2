'use server'

import { database } from '@/app/actions' // Corrected import path
import { actions, tables } from '@/constants/db'

export async function getMyCoursesForInstructor(instructorId) {
	if (!instructorId) {
		throw new Error('Instructor ID is required')
	}

	try {
		// Fetch courses created by the instructor
		const courses = await database('db_1', actions.SELECT, tables.Courses, {
			instructorid: instructorId,
		})

		return courses
	} catch (error) {
		console.error('Failed to fetch courses for instructor:', error)
		throw new Error('Failed to fetch courses')
	}
}
