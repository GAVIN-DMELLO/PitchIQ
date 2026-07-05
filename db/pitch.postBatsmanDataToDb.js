import { query } from './pitch.db.js';

export const postBatsmanDataToDb = async (data) => {
  try {
    console.log("Incoming data to Batsman DB layer:", data);

    const text = `
      INSERT INTO batsman_data (
        head_fall_angle_degrees, head_lateral_movement_cm, bat_speed_kmh, 
        backlift_angle_degrees, backlift_direction, downswing_angle_degrees, 
        trigger_movement_distance_cm, stance_width_cm, front_elbow_height_degrees, 
        weight_transfer_percent_front_foot, footwork_stride_length_cm, hip_rotation_degrees, 
        shoulder_alignment_angle_degrees, wrist_roll_angle_degrees, balance_offset_cm, 
        follow_through_height_degrees, bat_face_angle_at_contact_degrees, reaction_time_ms, 
        point_of_contact_distance_from_body_cm
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
        $11, $12, $13, $14, $15, $16, $17, $18, $19
      ) RETURNING *;
    `;

    const params = [
      data.head_fall_angle_degrees,
      data.head_lateral_movement_cm,
      data.bat_speed_kmh,
      data.backlift_angle_degrees,
      data.backlift_direction,
      data.downswing_angle_degrees,
      data.trigger_movement_distance_cm,
      data.stance_width_cm,
      data.front_elbow_height_degrees,
      data.weight_transfer_percent_front_foot,
      data.footwork_stride_length_cm,
      data.hip_rotation_degrees,
      data.shoulder_alignment_angle_degrees,
      data.wrist_roll_angle_degrees,
      data.balance_offset_cm,
      data.follow_through_height_degrees,
      data.bat_face_angle_at_contact_degrees,
      data.reaction_time_ms,
      data.point_of_contact_distance_from_body_cm
    ];

    const response = await query(text, params);
    
    return response.rows[0]; 

  } catch (error) {
    console.error("Error in postBatsmanDataToDb:", error);
    throw error;
  }
};