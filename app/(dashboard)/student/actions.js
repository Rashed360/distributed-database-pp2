'use server'

import { database } from '@/app/actions'
import { actions, tables } from '@/constants/db'

export async function getAllCourses() {
	try {
		// Fetch all courses from the Courses table
		const courses = await database('db_1', actions.SELECT, tables.Courses)
		return courses
	} catch (error) {
		console.error('Failed to fetch courses:', error)
		throw new Error('Failed to fetch courses')
	}
}

export async function getMyCourses(studentId) {
	if (!studentId) {
		throw new Error('Student ID is required')
	}

	try {
		// Step 1: Fetch enrolled courses for the student
		const enrolledCourses = await database('db_1', actions.SELECT, tables.CourseStudents, {
			studentid: studentId,
		})

		if (!enrolledCourses || enrolledCourses.length === 0) {
			return []
		}

		// Step 2: Fetch course details and instructor names
		const coursesWithInstructor = []
		for (const courseEntry of enrolledCourses) {
			const course = await database('db_1', actions.SELECT, tables.Courses, {
				id: courseEntry.courseid,
			})

			if (course && course[0]) {
				// Fetch the instructor for the course
				const instructor = await database('db_1', actions.SELECT, tables.Instructors, {
					id: course[0].instructorid,
				})

				// Combine course and instructor data
				coursesWithInstructor.push({
					...course[0],
					instructorname: instructor && instructor[0] ? instructor[0].fullname : 'Unknown',
				})
			}
		}

		return coursesWithInstructor
	} catch (error) {
		console.error('Failed to fetch enrolled courses:', error)
		throw new Error('Failed to fetch enrolled courses')
	}
}

export async function enrollInCourse(studentId, courseId) {
	if (!studentId || !courseId) {
		throw new Error('Student ID and Course ID are required')
	}

	try {
		// Check if the student is already enrolled in the course
		const existingEnrollment = await database('db_1', actions.SELECT, tables.CourseStudents, {
			studentid: studentId,
			courseid: courseId,
		})

		if (existingEnrollment && existingEnrollment.length > 0) {
			throw new Error('You are already enrolled in this course')
		}

		// Enroll the student in the course
		await database('db_1', actions.INSERT, tables.CourseStudents, {
			studentid: studentId,
			courseid: courseId,
		})

		return { message: 'Successfully enrolled in the course' }
	} catch (error) {
		console.error('Failed to enroll in course:', error)
		throw new Error(error.message || 'Failed to enroll in the course')
	}
}
