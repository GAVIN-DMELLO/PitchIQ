
import { postConditionsDataService } from '../services/pitch.postConditionsDataService.js';

export const postConditionsData = async (req, res) => {
  try {
    
    const incomingData = req.body;

    
    const newlyCreatedData = await postConditionsDataService(incomingData);

    
    return res.status(201).json({
      success: true,
      message: "Ground conditions successfully saved to database!",
      data: newlyCreatedData
    });
    
  } catch (error) {
    console.error("Error in postConditionsData controller:", error);
    
    
    return res.status(500).json({ 
      success: false, 
      message: "Internal server error. Failed to save data." 
    });
  }
};