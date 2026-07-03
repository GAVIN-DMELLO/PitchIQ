import storeData from '../services/dataService.js';

export const createPlayerData = async (req, res) => {
  try {
    const playerData = req.body;
    const result = await storeData(playerData);

    res.status(201).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};