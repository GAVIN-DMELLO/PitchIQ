import { getconditionsDataservice } from '../services/pitch.getConditionsDataService.js';

export const getConditionsData = async (req, res) => {
  try {
    const incomingData = req.body;
    const serviceResult = await getconditionsDataservice(incomingData);
    
    return res.status(200).json(serviceResult);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
};