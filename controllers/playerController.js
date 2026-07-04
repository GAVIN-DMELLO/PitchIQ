// controllers/playerController.js
import { fetchUsersFromDB } from '../services/userDataService.js';

export const getUserData = async (req, res) => {
  try {
    // 1. Trigger the service layer
    const data = await fetchUsersFromDB();

    // 2. Send the rows directly to your routing layer as JSON
    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};