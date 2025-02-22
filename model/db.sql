CREATE TABLE niche (
    n_id SERIAL PRIMARY KEY,
    niche_name VARCHAR(255) NOT NULL
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    password TEXT NOT NULL,
    name VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(10) NOT NULL,
    campaign_ids INT[]
	);

CREATE TABLE campaigns (
    c_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    objective TEXT NOT NULL,
    platforms INT[],
    group_niche INT[],
    target_by_group JSONB,  -- JSONB to store g_id and bid as key-value pairs
    location TEXT[],
    content TEXT NOT NULL,
    img_or_vid BYTEA,
    schedule_start TIMESTAMP NOT NULL,
    schedule_end TIMESTAMP NOT NULL,
    members_range INT[],
    bid_per_group DECIMAL(10,2) NOT NULL,
    total_budget DECIMAL(10,2) NOT NULL
);

CREATE TABLE platform (
    p_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    no_of_groups INT NOT NULL
);

CREATE TABLE groups (
    g_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,  
    number_of_person INT NOT NULL,
    platform_id INT[],
    niche_ids INT[],
    bid DECIMAL(10,2) NOT NULL 
);



-- Insert into niche
INSERT INTO niche (niche_name) VALUES 
('Technology'), ('Health & Wellness'), ('Finance'), ('Education'), ('Travel'),
('Fashion'), ('Food & Beverage'), ('Automotive'), ('Gaming'), ('Music');

-- Insert into users
INSERT INTO users (email, password, name, mobile_number, campaign_ids) VALUES
('user1@example.com', 'hashed_password1', 'Alice Johnson', '1234567890', '{1,2}'),
('user2@example.com', 'hashed_password2', 'Bob Smith', '9876543210', '{3,4}'),
('user3@example.com', 'hashed_password3', 'Charlie Brown', '1122334455', '{5,6}'),
('user4@example.com', 'hashed_password4', 'David White', '6677889900', '{7,8}'),
('user5@example.com', 'hashed_password5', 'Emma Davis', '5566778899', '{9,10}'),
('user6@example.com', 'hashed_password6', 'Frank Miller', '2233445566', '{1,3}'),
('user7@example.com', 'hashed_password7', 'Grace Lee', '7788990011', '{2,4}'),
('user8@example.com', 'hashed_password8', 'Henry Wilson', '8899001122', '{5,7}'),
('user9@example.com', 'hashed_password9', 'Ivy Clark', '9900112233', '{6,8}'),
('user10@example.com', 'hashed_password10', 'Jack Taylor', '1100223344', '{9,10}');

-- Insert into campaigns
INSERT INTO campaigns (name, objective, platforms, group_niche, target_by_group, location, content, img_or_vid, schedule_start, schedule_end, members_range, bid_per_group, total_budget) VALUES
('Tech Awareness', 'Promote new tech gadgets', '{1,2}', '{1,2}', '[{"g_id": 3, "bid": 10.50}, {"g_id": 4, "bid": 10.50}]', '{USA,UK}', 'Tech content', NULL, '2025-03-01 09:00:00', '2025-03-31 18:00:00', '{500,1000}', 10.50, 5000.00),
('Health Drive', 'Increase awareness on fitness', '{3,4}', '{2,3}', '[{"g_id": 5, "bid": 8.75}, {"g_id": 6, "bid": 8.75}]', '{Canada,India}', 'Fitness campaign', NULL, '2025-03-10 07:00:00', '2025-04-10 19:00:00', '{300,700}', 8.75, 4000.00),
('Finance Tips', 'Share financial tips', '{2,5}', '{3,5}', '[{"g_id": 7, "bid": 12.00}, {"g_id": 8, "bid": 12.00}]', '{USA,Australia}', 'Finance content', NULL, '2025-03-15 10:00:00', '2025-04-15 17:00:00', '{600,1200}', 12.00, 7200.00),
('Educational Webinar', 'Host free learning sessions', '{1,6}', '{4,5}', '[{"g_id": 6, "bid": 9.50}, {"g_id": 7, "bid": 9.50}]', '{Germany,France}', 'Education campaign', NULL, '2025-04-01 08:00:00', '2025-05-01 16:00:00', '{200,500}', 9.50, 2500.00),
('Travel Deals', 'Promote travel packages', '{3,7}', '{5,6}', '[{"g_id": 8, "bid": 7.25}, {"g_id": 9, "bid": 7.25}]', '{Japan,Brazil}', 'Travel offers', NULL, '2025-04-05 12:00:00', '2025-05-05 18:30:00', '{350,900}', 7.25, 3200.00),
('Fashion Trends', 'Advertise fashion trends', '{2,8}', '{6,7}', '[{"g_id": 9, "bid": 11.00}, {"g_id": 10, "bid": 11.00}]', '{Italy,Spain}', 'Fashion campaign', NULL, '2025-04-10 14:00:00', '2025-05-10 20:00:00', '{400,850}', 11.00, 4500.00),
('Food Fiesta', 'Promote new restaurants', '{4,9}', '{7,8}', '[{"g_id": 1, "bid": 6.75}, {"g_id": 2, "bid": 6.75}]', '{Mexico,Thailand}', 'Food blog content', NULL, '2025-04-15 11:00:00', '2025-05-15 21:00:00', '{500,950}', 6.75, 3800.00),
('Gaming Hub', 'Promote new gaming community', '{5,10}', '{8,9}', '[{"g_id": 3, "bid": 10.00}, {"g_id": 4, "bid": 10.00}]', '{China,Korea}', 'Gaming content', NULL, '2025-04-20 16:00:00', '2025-05-20 22:00:00', '{600,1300}', 10.00, 5000.00),
('Automotive Fair', 'Showcase new car models', '{6,1}', '{9,10}', '[{"g_id": 5, "bid": 9.75}, {"g_id": 6, "bid": 9.75}]', '{USA,Germany}', 'Car content', NULL, '2025-04-25 09:00:00', '2025-05-25 15:30:00', '{450,1000}', 9.75, 4200.00),
('Music Vibes', 'Promote indie music artists', '{7,2}', '{10,1}', '[{"g_id": 7, "bid": 8.50}, {"g_id": 8, "bid": 8.50}]', '{France,UK}', 'Music content', NULL, '2025-05-01 12:30:00', '2025-06-01 18:00:00', '{550,1100}', 8.50, 3900.00);



-- Insert into platform
INSERT INTO platform (name, no_of_groups) VALUES
('Facebook', 200), ('Instagram', 150), ('Twitter', 120), ('LinkedIn', 80), ('Snapchat', 100),
('TikTok', 130), ('YouTube', 170), ('Reddit', 90), ('Pinterest', 60), ('Discord', 110);

-- Insert into groups
INSERT INTO groups (name, number_of_person, platform_id, niche_ids, bid) VALUES
('Tech Enthusiasts', 500, '{1}', '{1,2}', 10.50),
('Fitness Freaks', 300, '{2}', '{2,3}', 8.75),
('Stock Market Geeks', 600, '{3}', '{3,5}', 12.00),
('Lifelong Learners', 200, '{4}', '{4,5}', 9.50),
('Globetrotters', 350, '{5}', '{5,6}', 7.25),
('Fashionistas', 400, '{6}', '{6,7}', 11.00),
('Food Lovers', 500, '{7}', '{7,8}', 6.75),
('Gamers United', 600, '{8}', '{8,9}', 10.00),
('Car Lovers Club', 450, '{9}', '{9,10}', 9.75),
('Music Maniacs', 550, '{10}', '{10,1}', 8.50);
