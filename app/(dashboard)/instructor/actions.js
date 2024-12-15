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

export async function getEnrolledStudents(instructorId) {
	if (!instructorId) {
		throw new Error('Instructor ID is required')
	}

	try {
		// Step 1: Get the courses taught by the instructor
		const courses = await database('db_1', actions.SELECT, tables.Courses, {
			instructorid: instructorId,
		})

		if (!courses || courses.length === 0) {
			return [] // No courses found for this instructor
		}

		// Step 2: For each course, get the students enrolled in it
		const courseWithStudents = []
		for (const course of courses) {
			const students = await database('db_1', actions.SELECT, tables.CourseStudents, {
				courseid: course.id,
			})

			const studentDetails = await Promise.all(
				students.map(async student => {
					const studentData = await database('db_1', actions.SELECT, tables.Students, {
						id: student.studentid,
					})
					return studentData[0] // Return the first student object
				})
			)

			courseWithStudents.push({
				...course,
				students: studentDetails,
			})
		}

		return courseWithStudents
	} catch (error) {
		console.error('Failed to fetch enrolled students:', error)
		throw new Error('Failed to fetch enrolled students')
	}
}

export async function getCourse(courseId) {
	if (!courseId) {
		throw new Error('Course ID is required')
	}

	try {
		// Fetch the course from the database
		const course = await database('db_1', actions.SELECT, tables.Courses, {
			id: courseId,
		})

		if (!course || course.length === 0) {
			throw new Error('Course not found')
		}

		return course[0] // Return the first course object
	} catch (error) {
		console.error('Failed to fetch course:', error)
		throw new Error('Failed to fetch course')
	}
}

export async function createCourse(title, category, description, instructorId) {
	if (!title || !category || !description || !instructorId) {
		throw new Error('Title, category, description, and instructorId are required')
	}

	try {
		// Insert the new course into the Courses table
		const newCourse = await database('db_1', actions.INSERT, tables.Courses, {
			title,
			category,
			description,
			instructorid: instructorId,
			createdat: new Date(),
		})

		return { message: 'Course created successfully', courseId: newCourse[0].id }
	} catch (error) {
		console.error('Error creating course:', error)
		throw new Error('Failed to create course')
	}
}

export async function updateCourse(id, title, category, description) {
	if (!id || !title || !category || !description) {
		throw new Error('Course ID, title, category, and description are required')
	}

	try {
		// Update the course in the database
		await database('db_1', actions.UPDATE, tables.Courses, {
			id,
			title,
			category,
			description,
		})

		return { message: 'Course updated successfully' }
	} catch (error) {
		console.error('Error updating course:', error)
		throw new Error('Failed to update course')
	}
}

export async function deleteCourse(courseId) {
	if (!courseId) {
		throw new Error('Course ID is required')
	}

	try {
		// Delete the course from the Courses table
		await database('db_1', actions.DELETE, tables.Courses, { id: courseId })

		// Remove the course from CourseStudents
		// await database('db_1', actions.DELETE, tables.CourseStudents, { courseid: courseId })

		return { message: 'Course deleted successfully' }
	} catch (error) {
		console.error('Error deleting course:', error)
		throw new Error('Failed to delete course')
	}
}
