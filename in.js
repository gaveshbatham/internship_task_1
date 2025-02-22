// import sequelize from './db.js';


// async function insertSampleData() {
//   try {
//     // Start transaction
//     const transaction = await sequelize.transaction();

//     // Insert into `niche`
//     await sequelize.query(`
//       INSERT INTO niches (niche_name) VALUES
//       ('Technology'), ('Health & Wellness'), ('Finance'), ('Education'), ('Travel'),
//       ('Fashion'), ('Food & Beverage'), ('Automotive'), ('Gaming'), ('Music')
//     `, { transaction });

//     // Insert into `users`
//     await sequelize.query(`
//       INSERT INTO "users" (email, password, name, mobile_number, campaign_ids) VALUES
//       ('user1@example.com', 'hashed_password1', 'Alice Johnson', '1234567890', ARRAY[1,2]),
//       ('user2@example.com', 'hashed_password2', 'Bob Smith', '9876543210', ARRAY[3,4]),
//       ('user3@example.com', 'hashed_password3', 'Charlie Brown', '1122334455', ARRAY[5,6]),
//       ('user4@example.com', 'hashed_password4', 'David White', '6677889900', ARRAY[7,8]),
//       ('user5@example.com', 'hashed_password5', 'Emma Davis', '5566778899', ARRAY[9,10])
//     `, { transaction });

//     // Insert into `campaigns`
//     await sequelize.query(`
//       INSERT INTO campaigns (name, objective, platforms, group_niche, target_by_group, location, content, img_or_vid, schedule_start, schedule_end, members_range, bid_per_group, total_budget) VALUES
//       ('Tech Awareness', 'Promote new tech gadgets', ARRAY[1,2], ARRAY[1,2], '[{"g_id": 3, "bid": 10.50}, {"g_id": 4, "bid": 10.50}]'::jsonb, ARRAY['USA', 'UK'], 'Tech content', NULL, '2025-03-01 09:00:00', '2025-03-31 18:00:00', ARRAY[500,1000], 10.50, 5000.00),
//       ('Health Drive', 'Increase awareness on fitness', ARRAY[3,4], ARRAY[2,3], '[{"g_id": 5, "bid": 8.75}, {"g_id": 6, "bid": 8.75}]'::jsonb, ARRAY['Canada', 'India'], 'Fitness campaign', NULL, '2025-03-10 07:00:00', '2025-04-10 19:00:00', ARRAY[300,700], 8.75, 4000.00)
//     `, { transaction });

//     // Insert into `platform`
//     await sequelize.query(`
//       INSERT INTO platforms (name, no_of_groups) VALUES
//       ('Facebook', 200), ('Instagram', 150), ('Twitter', 120), ('LinkedIn', 80), ('Snapchat', 100),
//       ('TikTok', 130), ('YouTube', 170), ('Reddit', 90), ('Pinterest', 60), ('Discord', 110)
//     `, { transaction });

//     // Insert into `groups`
//     await sequelize.query(`
//       INSERT INTO groups (name, number_of_person, platform_id, niche_ids, bid) VALUES
//       ('Tech Enthusiasts', 500, ARRAY[1], ARRAY[1,2], 10.50),
//       ('Fitness Freaks', 300, ARRAY[2], ARRAY[2,3], 8.75),
//       ('Stock Market Geeks', 600, ARRAY[3], ARRAY[3,5], 12.00),
//       ('Lifelong Learners', 200, ARRAY[4], ARRAY[4,5], 9.50),
//       ('Globetrotters', 350, ARRAY[5], ARRAY[5,6], 7.25),
//       ('Fashionistas', 400, ARRAY[6], ARRAY[6,7], 11.00),
//       ('Food Lovers', 500, ARRAY[7], ARRAY[7,8], 6.75),
//       ('Gamers United', 600, ARRAY[8], ARRAY[8,9], 10.00),
//       ('Car Lovers Club', 450, ARRAY[9], ARRAY[9,10], 9.75),
//       ('Music Maniacs', 550, ARRAY[10], ARRAY[10,1], 8.50)
//     `, { transaction });

//     // Commit transaction
//     await transaction.commit();
//     console.log("✅ Sample data inserted successfully.");
//   } catch (error) {
//     console.error("❌ Error inserting sample data:", error);
//   }
// }

// insertSampleData();