import { query } from './pitch.db.js';

export default async function getConditionsDataToDb() {
  try {
    const text = `SELECT * FROM ground_conditions;`;

    const response = await query(text);

    console.log(response.rows);
    return response.rows;
  } catch (error) {
    throw error;
  }
}