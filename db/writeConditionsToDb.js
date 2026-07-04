import { query } from './db.js';

export default async function writeConditionsDataToDb(data) {
  try {


    console.log("db data :" , data)

    const text = `
      CREATE TABLE IF NOT EXISTS ground_conditions (
        id SERIAL PRIMARY KEY,
        observation_session VARCHAR(255),
        pitch_type VARCHAR(100),
        soil_composition VARCHAR(100),
        moisture_level VARCHAR(50),
        grass_cover VARCHAR(50),
        surface_hardness VARCHAR(100),
        crack_severity VARCHAR(100),
        roller_used VARCHAR(100),
        weather_condition VARCHAR(100),
        temperature VARCHAR(50),
        humidity VARCHAR(50),
        cloud_cover VARCHAR(50),
        dew_severity VARCHAR(100),
        wind_speed VARCHAR(50),
        wind_direction VARCHAR(100),
        altitude VARCHAR(50),
        outfield_speed VARCHAR(100),
        outfield_grass_length VARCHAR(50),
        boundary_straight VARCHAR(50),
        boundary_square VARCHAR(50),
        pitch_orientation VARCHAR(100),
        shadow_coverage VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    const response = await query(text);
    return response;
  } catch (error) {
    throw error;
  }
}