import { writeconditionsDataservice } from '../services/writeConditionsDataService.js';

export const writeConditionsData = async (req, res) => {
  try {
    const incomingData = req.body;
    const serviceResult = await writeconditionsDataservice(incomingData);
    
    return res.status(200).json(serviceResult);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
};