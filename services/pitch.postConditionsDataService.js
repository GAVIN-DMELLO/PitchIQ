
import postConditionsDataToDb from '../db/pitch.postConditionsDataToDb.js';

export const postConditionsDataService = async (data) => {
  try {
  
    const dbResponse = await postConditionsDataToDb(data);

    
    return dbResponse;
    
  } catch (error) {
    console.error("Error in postConditionsDataService:", error);
    throw error;
  }
};