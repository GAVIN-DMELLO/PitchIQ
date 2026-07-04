// db/users.js
import { query } from './db.js'; // Adjust the path to where your pool code lives

// Function to fetch all users from the database
export async function getAllUsers() {
    try {
        const sql = 'SELECT * FROM users;';
        const result = await query(sql);
        
        // result.rows is the actual array of data objects returned by pg
        return result.rows; 
    } catch (error) {
        console.error("Database error fetching users:", error);
        throw error;
    }
}