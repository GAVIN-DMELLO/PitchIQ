import { query } from './pitch.db.js';

export const getBatsmanDataFromDb = async () => {
  try {
    const text = `SELECT * FROM batsman_data ORDER BY id DESC;`;

    const response = await query(text);
    
    return response.rows; 

  } catch (error) {
    console.error("Error in getBatsmanDataFromDb:", error);
    throw error;
  }
};