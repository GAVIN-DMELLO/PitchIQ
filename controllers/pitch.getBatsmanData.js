import { getBatsmanDataService } from '../services/pitch.getBatsmanDataService.js';

export const getBatsmanData = async (req, res) => {
  try {
    const data = await getBatsmanDataService();

    return res.status(200).json({
      success: true,
      message: "Batsman data retrieved successfully!",
      data: data
    });
    
  } catch (error) {
    console.error("Error in getBatsmanData controller:", error);
    
    return res.status(500).json({ 
      success: false, 
      message: "Internal server error. Failed to fetch batsman data." 
    });
  }
};