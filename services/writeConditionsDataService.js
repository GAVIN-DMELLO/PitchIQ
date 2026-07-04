import writeConditionsDataToDb from '../db/writeConditionsToDb.js';

export const writeconditionsDataservice = async (data) => {
  const dbResponse = await writeConditionsDataToDb(data);

  
  return dbResponse;
};