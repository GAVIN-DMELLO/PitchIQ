import getConditionsDataToDb from '../db/pitch.getConditionsToDb.js';

export const getconditionsDataservice = async (data) => {
  const dbResponse = await getConditionsDataToDb(data);

  
  return dbResponse;
};