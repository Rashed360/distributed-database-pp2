'use server'

import { Pool } from 'pg'
import { actions, tables } from '@/constants/db'

const clients = {
	db_1: new Pool({ connectionString: process.env.DB_1_URL }),
	db_2: new Pool({ connectionString: process.env.DB_2_URL }),
	db_3: new Pool({ connectionString: process.env.DB_3_URL }),
}

export async function database(db, action = actions.SELECT, table = '', values = {}) {
	console.log(db,action,table,values)
	
	if (!clients[String(db).toLowerCase()] || !table) return
	if (!(action in actions) && !(table in tables)) return

	const data = Object.keys(values)
	if (action !== actions.SELECT && data.length === 0) return

	let query = ''
	let args = []

	try {
		switch (action) {
			case actions.DELETE:
				query = 'DELETE FROM ' + table + ' WHERE ' + data[0] + ' = $1'
				args.push(values[data[0]])
				break
			case actions.UPDATE:
				let newValues = ''
				data.map((key, index) => {
					if (index !== 0) {
						newValues += key + ' = $' + index
						args.push(values[key])
						if (index + 1 !== data.length) newValues += ', '
					}
				})
				query = 'UPDATE ' + table + ' SET ' + newValues + ' WHERE ' + data[0] + ' = $' + data.length
				args.push(values[data[0]])
				break
			case actions.INSERT:
				let keys = ''
				let indexes = ''
				data.map((key, index) => {
					keys += key
					indexes += '$' + (index + 1)
					args.push(values[key])

					if (index + 1 !== data.length) {
						keys += ', '
						indexes += ', '
					}
				})
				query = 'INSERT INTO ' + table + ' (' + keys + ') VALUES (' + indexes + ') RETURNING *'
				break
			case actions.SELECT:
				query = 'SELECT * FROM ' + table
				if (data.length > 0) {
					query += ' WHERE ' + data[0] + ' = $1'
					args.push(values[data[0]])
				}
				break
		}
		const res = await clients[String(db).toLowerCase()].query(query, args)
		// console.log(res.rows)		
		return res.rows
	} catch (error) {
		console.error('░ Failed to handle Query: ' + action + ' from DB: ' + db, '\nDatabase Error:', error)
	}
}
