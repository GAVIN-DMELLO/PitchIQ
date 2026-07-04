import { query } from './pitch.db.js';

export default async function postConditionsDataToDb(data) {
  try {
    console.log("Incoming data to POST DB layer:", data);

    
    const conditions = data.current_ground_conditions;

    const text = `
      INSERT INTO ground_conditions (
        observation_session, pitch_type, soil_composition, moisture_level, 
        grass_cover, surface_hardness, crack_severity, roller_used, 
        weather_condition, temperature, humidity, cloud_cover, 
        dew_severity, wind_speed, wind_direction, altitude, 
        outfield_speed, outfield_grass_length, boundary_straight, 
        boundary_square, pitch_orientation, shadow_coverage
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
        $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, 
        $21, $22
      ) RETURNING *; 
    `;

    
    const params = [
      conditions.observation_session,
      conditions.pitch_type,
      conditions.soil_composition,
      conditions.moisture_level,
      conditions.grass_cover,
      conditions.surface_hardness,
      conditions.crack_severity,
      conditions.roller_used,
      conditions.weather_condition,
      conditions.temperature,
      conditions.humidity,
      conditions.cloud_cover,
      conditions.dew_severity,
      conditions.wind_speed,
      conditions.wind_direction,
      conditions.altitude,
      conditions.outfield_speed,
      conditions.outfield_grass_length,
      conditions.boundary_straight,
      conditions.boundary_square,
      conditions.pitch_orientation,
      conditions.shadow_coverage
    ];

    
    const response = await query(text, params);
    
    console.log(response)

    return response.rows[0]; 

  } catch (error) {
    console.error("Error in postConditionsDataToDb:", error);
    throw error;
  }
}