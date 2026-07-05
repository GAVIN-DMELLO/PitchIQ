import { getBatsmanDataFromDb } from '../db/pitch.getBatsmanDataFromDb.js';

export const getBatsmanDataService = async () => {
  try {
    const dbResponse = await getBatsmanDataFromDb();

    return dbResponse;
    
  } catch (error) {
    console.error("Error in getBatsmanDataService:", error);
    throw error; 
  }
};