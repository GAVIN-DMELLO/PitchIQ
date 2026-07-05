import { postBatsmanDataToDb } from '../db/pitch.postBatsmanDataToDb.js';

export const postBatsmanDataService = async (data) => {
  try {
    const dbResponse = await postBatsmanDataToDb(data);

    return dbResponse;
    
  } catch (error) {
    console.error("Error in postBatsmanDataService:", error);
    throw error; 
  }
};