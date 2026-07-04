// services/userDataService.js
import { getAllUsers } from '../db/user.js'; // Imports the function you already wrote!

/**
 * Service layer function that calls the DB layer and returns data to the controller
 */
export const fetchUsersFromDB = async () => {
  try {
    // 1. Call the existing database layer function
    const users = await getAllUsers();

    // 2. Return those database rows back up to the controller
    return users;
  } catch (error) {
    console.error('Error inside userDataService layer:', error.message);
    throw error;
  }
};