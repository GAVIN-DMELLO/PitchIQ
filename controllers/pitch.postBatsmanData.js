import { postBatsmanDataService } from '../services/pitch.postBatsmanDataService.js';

export const postBatsmanData = async (req, res) => {
  try {
    
    const incomingData = req.body;

    const newlyCreatedData = await postBatsmanDataService(incomingData);

    return res.status(201).json({
      success: true,
      message: "Batsman biomechanical data successfully saved!",
      data: newlyCreatedData
    });
    
  } catch (error) {
    console.error("Error in postBatsmanData controller:", error);
    
    return res.status(500).json({ 
      success: false, 
      message: "Internal server error. Failed to save batsman data." 
    });
  }
};