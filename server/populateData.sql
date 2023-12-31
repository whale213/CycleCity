/* This script is used to add dummy data to the following tables:
    # Itinerary
    - Locations
    - Attractions

    # Account Management
    - Users

    # Social Media
    - UserPosts
    -
    -
    -

    # Missions
    - Criterias
    - Leagues
    - Missions
    - Quests
    - UserMissions
    - UserQuests

    # Pelotons
    - Pelotons


   Instruction:
       1. Connect as root user from localhost
       2. Connect to the cycleCity connection
       3. Open the script and use SHIFT+CTRL+ENTER or the lightning button to run
*/


------------------------------
-- Dropping tables if exist --
------------------------------
-- DROP TABLE IF EXISTS attractions;
-- DROP TABLE IF EXISTS locations;
-- DROP TABLE IF EXISTS usermissions;
-- DROP TABLE IF EXISTS userquests;
-- DROP TABLE IF EXISTS quests;
-- DROP TABLE IF EXISTS missions;
-- DROP TABLE IF EXISTS criterias;
-- DROP TABLE IF EXISTS leagues;
-- DROP TABLE IF EXISTS comments;
-- DROP TABLE IF EXISTS likes;
-- DROP TABLE IF EXISTS followers;
-- DROP TABLE IF EXISTS userposts;
-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS staffs;
-- DROP TABLE IF EXISTS pelotons;

------------------------------------
-- Adding data to LOCATIONS table --
------------------------------------

INSERT INTO locations VALUES (1, "East Coast Park", "449876", "East Coast Park Service Rd, Singapore 449876", "Z43WyDDrMJ.jpg", 103.929558, 1.304219, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (2, "MacRitchie Reservoir Park", "298717", "MacRitchie Reservoir, Singapore 298717", "Z43WyDDrMJ.jpg", 103.822830, 1.340596, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (3, "Botanic Gardens", "259569", "1 Cluny Rd, Singapore 259569", "Z43WyDDrMJ.jpg", 103.815280, 1.313839, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (4, "Pulau Ubin", "508297", "Pulau Ubin, Singapore 508297", "Z43WyDDrMJ.jpg", 103.967678, 1.413669, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (5, "Kallang Riverside Park", "339348", "Kallang Riverside Park, Singapore 339348", "Z43WyDDrMJ.jpg", 103.865387, 1.305491, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (6, "Coney Island Park", "539837", "Coney Island, Singapore 539837", "Z43WyDDrMJ.jpg", 103.921152, 1.412308, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (7, "Jurong Lake Gardens", "649853", "25 Yuan Ching Rd, Singapore 649853", "Z43WyDDrMJ.jpg", 103.724527, 1.340415, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (8, "Punggol Waterway Park", "829325", "10 Sentul Cres, Singapore 829325", "Z43WyDDrMJ.jpg", 103.905092, 1.402877, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (9, "HortPark", "139653", "33 Hyderabad Rd, Singapore 139653", "Z43WyDDrMJ.jpg", 103.790888, 1.279829, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (10, "Changi Beach Park", "499982", "Changi Coast Rd, Singapore 499982", "Z43WyDDrMJ.jpg", 103.989120, 1.390614, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (11, "Bukit Timah Nature Reserve", "589968", "Bukit Timah Nature Reserve, Singapore 589968", "Z43WyDDrMJ.jpg", 103.776921, 1.354882, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (12, "Labrador Nature Reserve", "119187", "Labrador Villa Rd, Singapore 119187", "Z43WyDDrMJ.jpg", 103.811036, 1.272066, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (13, "Southern Ridges", "109918", "Henderson Rd, Singapore 109918", "Z43WyDDrMJ.jpg", 103.812958, 1.281540, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (14, "Lower Seletar Reservoir Park", "769298", "Lower Seletar Reservoir Park, Singapore 769298", "Z43WyDDrMJ.jpg", 103.827617, 1.396000, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (15, "Woodlands Waterfront Park", "738909", "Woodlands Waterfront Park, Singapore 738909", "Z43WyDDrMJ.jpg", 103.792725, 1.450504, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (16, "Pulau Hantu", "099984", "Pulau Hantu, Singapore 099984", "Z43WyDDrMJ.jpg", 103.764937, 1.200242, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (17, "Kent Ridge Park", "119275", "Kent Ridge Park, Singapore 119275", "Z43WyDDrMJ.jpg", 103.781637, 1.281799, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (18, "Pasir Ris Park", "519756", "125 Elias Rd, Singapore 519756", "Z43WyDDrMJ.jpg", 103.955200, 1.379000, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (19, "Sungei Buloh Wetland Reserve", "689150", "301 Neo Tiew Cres, Singapore 689150", "Z43WyDDrMJ.jpg", 103.729162, 1.446394, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (20, "Sembawang Park", "759580", "Sembawang Park, Singapore 759580", "Z43WyDDrMJ.jpg", 103.819715, 1.444230, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (21, "Kranji Reservoir Park", "739167", "Kranji Reservoir Park, Singapore 739167", "Z43WyDDrMJ.jpg", 103.755958, 1.434243, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (22, "Marina Barrage", "018951", "8 Marina Gardens Dr, Singapore 018951", "Z43WyDDrMJ.jpg", 103.871330, 1.279816, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (23, "Bishan-Ang Mo Kio Park", "569931", "1384 Ang Mo Kio Ave 1, Singapore 569931", "Z43WyDDrMJ.jpg", 103.849637, 1.365656, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (24, "Bedok Reservoir Park", "479244", "Bedok Reservoir Rd, Singapore 479244", "Z43WyDDrMJ.jpg", 103.934600, 1.337000, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (25, "West Coast Park", "612345", "West Coast Park, Singapore 612345", "Z43WyDDrMJ.jpg", 103.759503, 1.292267, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (26, "Gardens by the Bay", "018953", "18 Marina Gardens Dr, Singapore 018953", "Z43WyDDrMJ.jpg", 103.865608, 1.281689, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (27, "Tanjong Beach", "098942", "Sentosa Island, Singapore 098942", "Z43WyDDrMJ.jpg", 103.824402, 1.251625, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (28, "Bukit Batok Town Park", "659908", "Bukit Batok Central, Singapore 659908", "Z43WyDDrMJ.jpg", 103.749507, 1.355359, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (29, "Fort Siloso", "099981", "33 Allanbrooke Rd, Singapore 099981", "Z43WyDDrMJ.jpg", 103.807999, 1.250275, "2023-06-30 01:30:57");
INSERT INTO locations VALUES (30, "Mount Faber Park", "099203", "Mount Faber Rd, Singapore 099203", "Z43WyDDrMJ.jpg", 103.819836, 1.271876, "2023-06-30 01:30:57");

--------------------------------------
-- Adding data to ATTRACTIONS table --
--------------------------------------

INSERT INTO attractions VALUES (1, 6.5, "Easy", "2023-06-30 01:30:57", 1);
INSERT INTO attractions VALUES (2, 4.2, "Hard", "2023-06-30 01:30:57", 2);
INSERT INTO attractions VALUES (3, 3.8, "Medium", "2023-06-30 01:30:57", 3);
INSERT INTO attractions VALUES (4, 5.1, "Medium", "2023-06-30 01:30:57", 4);
INSERT INTO attractions VALUES (5, 2.3, "Easy", "2023-06-30 01:30:57", 5);
INSERT INTO attractions VALUES (6, 4.7, "Medium", "2023-06-30 01:30:57", 6);
INSERT INTO attractions VALUES (7, 1.9, "Easy", "2023-06-30 01:30:57", 7);
INSERT INTO attractions VALUES (8, 7.2, "Hard", "2023-06-30 01:30:57", 8);
INSERT INTO attractions VALUES (9, 4.3, "Medium", "2023-06-30 01:30:57", 9);
INSERT INTO attractions VALUES (10, 6.8, "Hard", "2023-06-30 01:30:57", 10);
INSERT INTO attractions VALUES (11, 3.5, "Easy", "2023-06-30 01:30:57", 11);
INSERT INTO attractions VALUES (12, 5.9, "Medium", "2023-06-30 01:30:57", 12);
INSERT INTO attractions VALUES (13, 2.1, "Easy", "2023-06-30 01:30:57", 13);
INSERT INTO attractions VALUES (14, 4.4, "Medium", "2023-06-30 01:30:57", 14);
INSERT INTO attractions VALUES (15, 1.8, "Easy", "2023-06-30 01:30:57", 15);
INSERT INTO attractions VALUES (16, 5.6, "Hard", "2023-06-30 01:30:57", 16);
INSERT INTO attractions VALUES (17, 4.2, "Medium", "2023-06-30 01:30:57", 17);
INSERT INTO attractions VALUES (18, 7.9, "Hard", "2023-06-30 01:30:57", 18);
INSERT INTO attractions VALUES (19, 3.3, "Easy", "2023-06-30 01:30:57", 19);
INSERT INTO attractions VALUES (20, 6.1, "Medium", "2023-06-30 01:30:57", 20);
INSERT INTO attractions VALUES (21, 2.7, "Easy", "2023-06-30 01:30:57", 21);
INSERT INTO attractions VALUES (22, 4.8, "Medium", "2023-06-30 01:30:57", 22);
INSERT INTO attractions VALUES (23, 1.6, "Easy", "2023-06-30 01:30:57", 23);
INSERT INTO attractions VALUES (24, 3.9, "Medium", "2023-06-30 01:30:57", 24);
INSERT INTO attractions VALUES (25, 2.4, "Easy", "2023-06-30 01:30:57", 25);
INSERT INTO attractions VALUES (26, 5.2, "Medium", "2023-06-30 01:30:57", 26);
INSERT INTO attractions VALUES (27, 1.7, "Easy", "2023-06-30 01:30:57", 27);
INSERT INTO attractions VALUES (28, 4.6, "Medium", "2023-06-30 01:30:57", 28);
INSERT INTO attractions VALUES (29, 3.1, "Easy", "2023-06-30 01:30:57", 29);
INSERT INTO attractions VALUES (30, 7.3, "Hard", "2023-06-30 01:30:57", 30);

--------------------------------
-- Adding data to USERS table --
--------------------------------

INSERT INTO users VALUES (1, "John", "john@mail.com", 91234567, "Cyclecity123???", "I love cycling with my friends and touching people", "User", "Bronze", "2023-01-25 16:50:00", true, 500, "./assets/img5");
INSERT INTO users VALUES (2, "Jane", "jane@mail.com", 91234568, "Hiking123!!!", "I enjoy hiking in the mountains", "User", "Bronze", "2023-02-10 09:15:00", true, 600, "./assets/img6");
INSERT INTO users VALUES (3, "Mark", "mark@mail.com", 91234569, "Golfing456$$$", "I'm a passionate golfer and love playing on weekends", "User", "Silver", "2023-03-05 14:20:00", true, 700, "./assets/img7");
INSERT INTO users VALUES (4, "Emily", "emily@mail.com", 91234570, "Swimming789%%%", "Swimming is my favorite sport, and I swim every day", "User", "Silver", "2023-04-15 18:30:00", true, 800, "./assets/img8");
INSERT INTO users VALUES (5, "Michael", "michael@mail.com", 91234571, "Soccer123###", "I'm a die-hard soccer fan and play every weekend", "User", "Gold", "2023-05-20 11:45:00", true, 900, "./assets/img9");
INSERT INTO users VALUES (6, "Sarah", "sarah@mail.com", 91234572, "Dancing789***", "Dancing is my passion, and I perform in shows regularly", "User", "Gold", "2023-06-10 20:00:00", true, 1000, "./assets/img10");
INSERT INTO users VALUES (7, "David", "david@mail.com", 91234573, "Basketball123@@@", "Basketball is my favorite sport, and I play for a local team", "User", "Platinum", "2023-07-30 15:10:00", true, 1100, "./assets/img11");
INSERT INTO users VALUES (8, "Linda", "linda@mail.com", 91234574, "Yoga789$$$", "Yoga helps me stay fit and relaxed", "User", "Platinum", "2023-08-05 09:20:00", true, 1200, "./assets/img12");
INSERT INTO users VALUES (9, "Tom", "tom@mail.com", 91234575, "Gaming123&&&", "I'm a hardcore gamer and love playing all kinds of games", "User", "Diamond", "2023-09-15 17:30:00", true, 1300, "./assets/img13");
INSERT INTO users VALUES (10, "Amy", "amy@mail.com", 91234576, "Reading789(((", "Reading is my escape from reality", "User", "Diamond", "2023-10-20 10:45:00", true, 1400, "./assets/img14");
INSERT INTO users VALUES (11, "Peter", "peter@mail.com", 91234577, "Photography123@@@", "I love capturing moments through my camera lens", "User", "Bronze", "2023-11-10 19:00:00", true, 1500, "./assets/img15");
INSERT INTO users VALUES (12, "Olivia", "olivia@mail.com", 91234578, "Cooking789###", "Cooking is my passion, and I experiment with new recipes", "User", "Bronze", "2023-12-30 14:10:00", true, 1600, "./assets/img16");
INSERT INTO users VALUES (13, "Daniel", "daniel@mail.com", 91234579, "Running123$$$", "I'm a long-distance runner and participate in marathons", "User", "Silver", "2024-01-05 08:20:00", true, 1700, "./assets/img17");
INSERT INTO users VALUES (14, "Sophia", "sophia@mail.com", 91234580, "Painting789%%%", "Painting is my creative outlet, and I love using different mediums", "User", "Silver", "2024-02-15 16:30:00", true, 1800, "./assets/img18");
INSERT INTO users VALUES (15, "Christopher", "christopher@mail.com", 91234581, "Music123###", "I'm a musician and play multiple instruments", "User", "Gold", "2024-03-20 09:45:00", true, 1900, "./assets/img19");
INSERT INTO users VALUES (16, "Isabella", "isabella@mail.com", 91234582, "Singing789***", "Singing is my passion, and I perform at local events", "User", "Gold", "2024-04-10 18:00:00", true, 2000, "./assets/img20");
INSERT INTO users VALUES (17, "Andrew", "andrew@mail.com", 91234583, "Chess123@@@", "I'm a chess enthusiast and enjoy playing strategic games", "User", "Platinum", "2024-05-30 13:10:00", true, 2100, "./assets/img21");
INSERT INTO users VALUES (18, "Mia", "mia@mail.com", 91234584, "Meditation789$$$", "Meditation helps me find inner peace and calmness", "User", "Platinum", "2024-06-05 07:20:00", true, 2200, "./assets/img22");
INSERT INTO users VALUES (19, "William", "william@mail.com", 91234585, "Writing123&&&", "Writing is my way of expressing thoughts and emotions", "User", "Diamond", "2024-07-15 15:30:00", true, 2300, "./assets/img23");
INSERT INTO users VALUES (20, "Ava", "ava@mail.com", 91234586, "Gardening789(((", "I enjoy tending to plants and creating beautiful gardens", "User", "Diamond", "2024-08-20 08:45:00", true, 2400, "./assets/img24");
INSERT INTO users VALUES (21, "James", "james@mail.com", 91234587, "Football123@@@", "Football is my passion, and I play for a local team", "User", "Bronze", "2024-09-10 17:00:00", true, 2500, "./assets/img25");
INSERT INTO users VALUES (22, "Ella", "ella@mail.com", 91234588, "Baking789###", "Baking is my hobby, and I love trying new recipes", "User", "Bronze", "2024-10-30 12:10:00", true, 2600, "./assets/img26");
INSERT INTO users VALUES (23, "Alexander", "alexander@mail.com", 91234589, "Cycling123$$$", "I'm an avid cyclist and explore new routes every week", "User", "Silver", "2024-11-05 06:20:00", true, 2700, "./assets/img27");
INSERT INTO users VALUES (24, "Victoria", "victoria@mail.com", 91234590, "Paintball789%%%", "I enjoy playing paintball and competing in tournaments", "User", "Silver", "2024-12-15 14:30:00", true, 2800, "./assets/img28");
INSERT INTO users VALUES (25, "Benjamin", "benjamin@mail.com", 91234591, "Piano123###", "I'm a pianist and love composing music", "User", "Gold", "2025-01-20 07:45:00", true, 2900, "./assets/img29", "2023-06-30 01:30:57");
INSERT INTO users VALUES (26, "Grace", "grace@mail.com", 91234592, "Sculpting789***", "Sculpting is my creative passion, and I love working with clay", "User", "Gold", "2025-02-10 16:00:00", true, 3000, "./assets/img30");
INSERT INTO users VALUES (27, "Joseph", "joseph@mail.com", 91234593, "Chess123@@@", "Chess is my favorite game, and I play competitively", "User", "Platinum", "2025-03-30 11:10:00", true, 3100, "./assets/img31");
INSERT INTO users VALUES (28, "Sofia", "sofia@mail.com", 91234594, "Yoga789$$$", "Yoga helps me maintain a healthy body and mind", "User", "Platinum", "2025-04-05 05:20:00", true, 3200, "./assets/img32");
INSERT INTO users VALUES (29, "Daniel", "daniel@mail.com", 91234595, "Gaming123&&&", "I'm a passionate gamer and play competitive esports", "User", "Diamond", "2025-05-15 13:30:00", true, 3300, "./assets/img33");
INSERT INTO users VALUES (30, "Mila", "mila@mail.com", 91234596, "Reading789(((", "Reading is my escape and I devour books", "User", "Diamond", "2025-06-20 06:45:00", true, 3400, "./assets/img34");

--------------------------------
-- Adding data to STAFF table --
--------------------------------

INSERT INTO staffs VALUES (1, "Staff1", "staff1@mail.com", 91234567, "Cyclecity123???");
INSERT INTO staffs VALUES (2, "Staff2", "staff2@mail.com", 91234568, "Cyclecity123???");
INSERT INTO staffs VALUES (3, "Staff3", "staff3@mail.com", 91234569, "Cyclecity123???");
INSERT INTO staffs VALUES (4, "Staff4", "staff4@mail.com", 91234570, "Cyclecity123???");
INSERT INTO staffs VALUES (5, "Staff5", "staff5@mail.com", 91234571, "Cyclecity123???");

------------------------------------
-- Adding data to UserPost table --
------------------------------------

INSERT INTO UserPost VALUES (1, 'Amazing view', './assets/img1.jpg', 1);
INSERT INTO UserPost VALUES (2, 'Delicious meal', './assets/img2.jpg', 2);
INSERT INTO UserPost VALUES (3, 'Exciting adventure', './assets/img3.jpg', 3);
INSERT INTO UserPost VALUES (4, 'Fun with friends', './assets/img4.jpg', 4);
INSERT INTO UserPost VALUES (5, 'Beautiful sunset', './assets/img5.jpg', 5);
INSERT INTO UserPost VALUES (6, 'Exploring new places', './assets/img6.jpg', 6);
INSERT INTO UserPost VALUES (7, 'Adrenaline rush', './assets/img7.jpg', 7);
INSERT INTO UserPost VALUES (8, 'Cozy evenings', './assets/img8.jpg', 8);
INSERT INTO UserPost VALUES (9, 'Memorable moments', './assets/img9.jpg', 9);
INSERT INTO UserPost VALUES (10, 'Nature hike', './assets/img10.jpg', 10);
INSERT INTO UserPost VALUES (11, 'City skyline', './assets/img11.jpg', 11);
INSERT INTO UserPost VALUES (12, 'Tasty dessert', './assets/img12.jpg', 12);
INSERT INTO UserPost VALUES (13, 'Sunrise at the beach', './assets/img13.jpg', 13);
INSERT INTO UserPost VALUES (14, 'Aerial view', './assets/img14.jpg', 14);
INSERT INTO UserPost VALUES (15, 'Road trip memories', './assets/img15.jpg', 15);
INSERT INTO UserPost VALUES (16, 'Coastal paradise', './assets/img16.jpg', 16);
INSERT INTO UserPost VALUES (17, 'Mountain peak', './assets/img17.jpg', 17);
INSERT INTO UserPost VALUES (18, 'Serenity in nature', './assets/img18.jpg', 18);
INSERT INTO UserPost VALUES (19, 'Foodie delights', './assets/img19.jpg', 19);
INSERT INTO UserPost VALUES (20, 'Urban exploration', './assets/img20.jpg', 20);
INSERT INTO UserPost VALUES (21, 'Gorgeous architecture', './assets/img21.jpg', 21);
INSERT INTO UserPost VALUES (22, 'Countryside retreat', './assets/img22.jpg', 22);
INSERT INTO UserPost VALUES (23, 'Artistic masterpiece', './assets/img23.jpg', 23);
INSERT INTO UserPost VALUES (24, 'Celebration with loved ones', './assets/img24.jpg', 24);
INSERT INTO UserPost VALUES (25, 'Magical winter scene', './assets/img25.jpg', 25);
INSERT INTO UserPost VALUES (26, 'Outdoor adventure', './assets/img26.jpg', 26);
INSERT INTO UserPost VALUES (27, 'Relaxation by the pool', './assets/img27.jpg', 27);
INSERT INTO UserPost VALUES (28, 'Lively city streets', './assets/img28.jpg', 28);
INSERT INTO UserPost VALUES (29, 'Stunning natural wonders', './assets/img29.jpg', 29);
INSERT INTO UserPost VALUES (30, 'Charming countryside', './assets/img30.jpg', 30);

------------------------------------
-- Adding data to Comments table --
------------------------------------

INSERT INTO Comments VALUES (1, 'Great photo!', 1, 1);
INSERT INTO Comments VALUES (2, 'Looks delicious!', 2, 2);
INSERT INTO Comments VALUES (3, 'Wow, what an adventure!', 3, 3);
INSERT INTO Comments VALUES (4, 'Seems like a fun time!', 4, 4);
INSERT INTO Comments VALUES (5, 'Stunning sunset!', 5, 5);
INSERT INTO Comments VALUES (6, 'I want to visit there!', 6, 6);
INSERT INTO Comments VALUES (7, 'That is so thrilling!', 7, 7);
INSERT INTO Comments VALUES (8, 'Cozy vibes!', 8, 8);
INSERT INTO Comments VALUES (9, 'Such precious memories!', 9, 9);
INSERT INTO Comments VALUES (10, 'Beautiful nature!', 10, 10);
INSERT INTO Comments VALUES (11, 'Love the cityscape!', 11, 11);
INSERT INTO Comments VALUES (12, 'Yummy!', 12, 12);
INSERT INTO Comments VALUES (13, 'Breathtaking beach view!', 13, 13);
INSERT INTO Comments VALUES (14, 'Amazing aerial shot!', 14, 14);
INSERT INTO Comments VALUES (15, 'Road trips are the best!', 15, 15);
INSERT INTO Comments VALUES (16, 'Paradise on the coast!', 16, 16);
INSERT INTO Comments VALUES (17, 'Incredible mountain peak!', 17, 17);
INSERT INTO Comments VALUES (18, 'Peaceful in nature!', 18, 18);
INSERT INTO Comments VALUES (19, 'Food looks so tasty!', 19, 19);
INSERT INTO Comments VALUES (20, 'Exploring the city!', 20, 20);
INSERT INTO Comments VALUES (21, 'Architectural marvel!', 21, 21);
INSERT INTO Comments VALUES (22, 'I need a countryside getaway!', 22, 22);
INSERT INTO Comments VALUES (23, 'Such artistry!', 23, 23);
INSERT INTO Comments VALUES (24, 'Lovely celebration!', 24, 24);
INSERT INTO Comments VALUES (25, 'Magical winter scenery!', 25, 25);
INSERT INTO Comments VALUES (26, 'Thrilling outdoor adventure!', 26, 26);
INSERT INTO Comments VALUES (27, 'I want to relax there!', 27, 27);
INSERT INTO Comments VALUES (28, 'Busy city life!', 28, 28);
INSERT INTO Comments VALUES (29, "Nature's wonders!", 29, 29);
INSERT INTO Comments VALUES (30, 'Charming countryside!', 30, 30);

------------------------------------
-- Adding data to Likes table --
------------------------------------

INSERT INTO Likes VALUES (1, 1, 1);
INSERT INTO Likes VALUES (2, 2, 2);
INSERT INTO Likes VALUES (3, 3, 3);
INSERT INTO Likes VALUES (4, 4, 4);
INSERT INTO Likes VALUES (5, 5, 5);
INSERT INTO Likes VALUES (6, 6, 6);
INSERT INTO Likes VALUES (7, 7, 7);
INSERT INTO Likes VALUES (8, 8, 8);
INSERT INTO Likes VALUES (9, 9, 9);
INSERT INTO Likes VALUES (10, 10, 10);
INSERT INTO Likes VALUES (11, 11, 11);
INSERT INTO Likes VALUES (12, 12, 12);
INSERT INTO Likes VALUES (13, 13, 13);
INSERT INTO Likes VALUES (14, 14, 14);
INSERT INTO Likes VALUES (15, 15, 15);
INSERT INTO Likes VALUES (16, 16, 16);
INSERT INTO Likes VALUES (17, 17, 17);
INSERT INTO Likes VALUES (18, 18, 18);
INSERT INTO Likes VALUES (19, 19, 19);
INSERT INTO Likes VALUES (20, 20, 20);
INSERT INTO Likes VALUES (21, 21, 21);
INSERT INTO Likes VALUES (22, 22, 22);
INSERT INTO Likes VALUES (23, 23, 23);
INSERT INTO Likes VALUES (24, 24, 24);
INSERT INTO Likes VALUES (25, 25, 25);
INSERT INTO Likes VALUES (26, 26, 26);
INSERT INTO Likes VALUES (27, 27, 27);
INSERT INTO Likes VALUES (28, 28, 28);
INSERT INTO Likes VALUES (29, 29, 29);
INSERT INTO Likes VALUES (30, 30, 30);

------------------------------------
-- Adding data to Followers table --
------------------------------------

INSERT INTO Followers VALUES (1, 1, 30);
INSERT INTO Followers VALUES (2, 2, 29);
INSERT INTO Followers VALUES (3, 3, 28);
INSERT INTO Followers VALUES (4, 4, 27);
INSERT INTO Followers VALUES (5, 5, 26);
INSERT INTO Followers VALUES (6, 6, 25);
INSERT INTO Followers VALUES (7, 7, 24);
INSERT INTO Followers VALUES (8, 8, 23);
INSERT INTO Followers VALUES (9, 9, 22);
INSERT INTO Followers VALUES (10, 10, 21);
INSERT INTO Followers VALUES (11, 11, 20);
INSERT INTO Followers VALUES (12, 12, 19);
INSERT INTO Followers VALUES (13, 13, 18);
INSERT INTO Followers VALUES (14, 14, 17);
INSERT INTO Followers VALUES (15, 15, 16);
INSERT INTO Followers VALUES (16, 16, 15);
INSERT INTO Followers VALUES (17, 17, 14);
INSERT INTO Followers VALUES (18, 18, 13);
INSERT INTO Followers VALUES (19, 19, 12);
INSERT INTO Followers VALUES (20, 20, 11);
INSERT INTO Followers VALUES (21, 21, 10);
INSERT INTO Followers VALUES (22, 22, 9);
INSERT INTO Followers VALUES (23, 23, 8);
INSERT INTO Followers VALUES (24, 24, 7);
INSERT INTO Followers VALUES (25, 25, 6);
INSERT INTO Followers VALUES (26, 26, 5);
INSERT INTO Followers VALUES (27, 27, 4);
INSERT INTO Followers VALUES (28, 28, 3);
INSERT INTO Followers VALUES (29, 29, 2);
INSERT INTO Followers VALUES (30, 30, 1);


------------------------------------
-- Adding data to CRITERIAS table --
------------------------------------
INSERT INTO criterias VALUES (1, "KM", 1);
INSERT INTO criterias VALUES (2, "KM", 2);
INSERT INTO criterias VALUES (3, "KM", 3);
INSERT INTO criterias VALUES (4, "KM", 4);
INSERT INTO criterias VALUES (5, "KM", 5);
INSERT INTO criterias VALUES (6, "KM", 6);
INSERT INTO criterias VALUES (7, "KM", 7);
INSERT INTO criterias VALUES (8, "KM", 8);
INSERT INTO criterias VALUES (9, "KM", 9);

INSERT INTO criterias VALUES (10, "KM", 10);
INSERT INTO criterias VALUES (11, "KM", 11);
INSERT INTO criterias VALUES (12, "KM", 12);
INSERT INTO criterias VALUES (13, "KM", 13);
INSERT INTO criterias VALUES (14, "KM", 14);
INSERT INTO criterias VALUES (15, "KM", 15);
INSERT INTO criterias VALUES (16, "KM", 16);
INSERT INTO criterias VALUES (17, "KM", 17);
INSERT INTO criterias VALUES (18, "KM", 18);
INSERT INTO criterias VALUES (19, "KM", 19);
INSERT INTO criterias VALUES (20, "KM", 20);
INSERT INTO criterias VALUES (21, "KM", 21);
INSERT INTO criterias VALUES (22, "KM", 22);
INSERT INTO criterias VALUES (23, "KM", 23);
INSERT INTO criterias VALUES (24, "KM", 24);
INSERT INTO criterias VALUES (25, "KM", 25);
INSERT INTO criterias VALUES (26, "KM", 26);
INSERT INTO criterias VALUES (27, "KM", 27);
INSERT INTO criterias VALUES (28, "KM", 28);
INSERT INTO criterias VALUES (29, "KM", 29);
INSERT INTO criterias VALUES (30, "KM", 30);

INSERT INTO criterias VALUES (31, "location", "East Coast Park");
INSERT INTO criterias VALUES (32, "location", "MacRitchie Reservoir Park");
INSERT INTO criterias VALUES (33, "location", "Botanic Gardens");
INSERT INTO criterias VALUES (34, "location", "Pulau Ubin");
INSERT INTO criterias VALUES (35, "location", "Kallang Riverside Park");
INSERT INTO criterias VALUES (36, "location", "Coney Island Park");
INSERT INTO criterias VALUES (37, "location", "Jurong Lake Gardens");
INSERT INTO criterias VALUES (38, "location", "Punggol Waterway Park");
INSERT INTO criterias VALUES (39, "location", "HortPark");
INSERT INTO criterias VALUES (40, "location", "Changi Beach Park");
INSERT INTO criterias VALUES (41, "location", "Bukit Timah Nature Reserve");
INSERT INTO criterias VALUES (42, "location", "Labrador Nature Reserve");
INSERT INTO criterias VALUES (43, "location", "Southern Ridges");
INSERT INTO criterias VALUES (44, "location", "Lower Seletar Reservoir Park");
INSERT INTO criterias VALUES (45, "location", "Woodlands Waterfront Park");

INSERT INTO criterias VALUES (46, "location", "Pulau Hantu");
INSERT INTO criterias VALUES (47, "location", "Kent Ridge Park");
INSERT INTO criterias VALUES (48, "location", "Pasir Ris Park");
INSERT INTO criterias VALUES (49, "location", "Sungei Buloh Wetland Reserve");
INSERT INTO criterias VALUES (50, "location", "Sembawang Park");
INSERT INTO criterias VALUES (51, "location", "Kranji Reservoir Park");
INSERT INTO criterias VALUES (52, "location", "Marina Barrage");
INSERT INTO criterias VALUES (53, "location", "Bishan-Ang Mo Kio Park");
INSERT INTO criterias VALUES (54, "location", "Bedok Reservoir Park");
INSERT INTO criterias VALUES (55, "location", "West Coast Park");
INSERT INTO criterias VALUES (56, "location", "Gardens by the Bay");
INSERT INTO criterias VALUES (57, "location", "Tanjong Beach");
INSERT INTO criterias VALUES (58, "location", "Bukit Batok Town Park");
INSERT INTO criterias VALUES (59, "location", "Fort Silosok");
INSERT INTO criterias VALUES (60, "location", "Mount Faber Park");

----------------------------------
-- Adding data to LEAGUES table --
----------------------------------
INSERT INTO leagues VALUES (1, "Wood", "0");
INSERT INTO leagues VALUES (2, "Stone", "300");
INSERT INTO leagues VALUES (3, "Iron", "600");
INSERT INTO leagues VALUES (4, "Bronze", "1000");
INSERT INTO leagues VALUES (5, "Silver", "1300");
INSERT INTO leagues VALUES (6, "Gold", "1600");
INSERT INTO leagues VALUES (7, "Platinum", "2000");
INSERT INTO leagues VALUES (8, "Diamond", "2300");
INSERT INTO leagues VALUES (9, "Grandmaster", "2600");
INSERT INTO leagues VALUES (10, "Champion", "3000");
-----------------------------------
-- Adding data to MISSIONS table --
-----------------------------------
INSERT INTO missions VALUES (1, 'Pedal Pioneer: One Kilometer Triumph', "10", "1");
INSERT INTO missions VALUES (2, 'Double Wheel Dynamo: Two Kilometer Champion', "20", "2");
INSERT INTO missions VALUES (3, 'Tricycle Trekker: Three Kilometer Conqueror', "30", "3");
INSERT INTO missions VALUES (4, 'Quad-Cycle Trailblazer: Four Kilometer Adventurer', "40", "4");
INSERT INTO missions VALUES (5, 'Halfway Hero: Five Kilometer Master', "50", "5");
INSERT INTO missions VALUES (6, 'Sextuple Spokes Star: Six Kilometer Dynamo', "60", "6");
INSERT INTO missions VALUES (7, 'Lucky Seven Cyclist: Seven Kilometer Crusader', "70", "7");
INSERT INTO missions VALUES (8, 'Ocho Speedster: Eight Kilometer Speedster', "80", "8");
INSERT INTO missions VALUES (9, 'Niner Navigator: Nine Kilometer Voyager', "90", "9");
INSERT INTO missions VALUES (10, 'Dime Distance Dynamo: Ten Kilometer Achiever', "100", "10");
INSERT INTO missions VALUES (11, 'Elevenspeed Explorer: Eleven Kilometer Discoverer', "110", "11");
INSERT INTO missions VALUES (12, 'Dozen Dash Dynamo: Twelve Kilometer Trailblazer', "120", "12");
INSERT INTO missions VALUES (13, 'Thirteener Thrasher: Thirteen Kilometer Champion', "130", "13");
INSERT INTO missions VALUES (14, 'Fourteener Flyer: Fourteen Kilometer Whiz', "140", "14");
INSERT INTO missions VALUES (15, 'Fifteen Milestone Maestro: Fifteen Kilometer Pro', "150", "15");
INSERT INTO missions VALUES (16, 'Coastal Expedition: Cycling to East Coast Park', "10", "1");
INSERT INTO missions VALUES (17, 'Nature Escape: Conquering MacRitchie Reservoir Park', "20", "2");
INSERT INTO missions VALUES (18, 'Garden Trek: Cycling Adventure to Botanic Gardens', "30", "3");
INSERT INTO missions VALUES (19, 'Island Expedition: Pedaling to Pulau Ubin', "40", "4");
INSERT INTO missions VALUES (20, 'Riverside Quest: Cycling Adventure to Kallang Riverside Park', "50", "5");
INSERT INTO missions VALUES (21, 'Island Discovery: Exploring Coney Island Park on Wheels', "60", "6");
INSERT INTO missions VALUES (22, 'Lake Adventure: Cycling Journey to Jurong Lake Gardens', "70", "7");
INSERT INTO missions VALUES (23, 'Waterway Expedition: Navigating Punggol Waterway Park', "80", "8");
INSERT INTO missions VALUES (24, 'Green Oasis Quest: Cycling Adventure to HortPark', "90", "9");
INSERT INTO missions VALUES (25, 'Coastal Serenity: Cycling Retreat to Changi Beach Park', "100", "10");
INSERT INTO missions VALUES (26, "Nature's Peak Challenge: Conquering Bukit Timah Nature Reserve", "110", "11");
INSERT INTO missions VALUES (27, 'Seaside Exploration: Cycling Adventure to Labrador Nature Reserve', "120", "12");
INSERT INTO missions VALUES (28, 'Ridge Quest: Cycling Expedition along the Southern Ridges', "130", "13");
INSERT INTO missions VALUES (29, 'Reservoir Ride: Cycling Adventure to Lower Seletar Reservoir Park', "140", "14");
INSERT INTO missions VALUES (30, 'Waterfront Escape: Pedaling to Woodlands Waterfront Park', "150", "15");
---------------------------------
-- Adding data to QUESTS table --
---------------------------------
INSERT INTO quests VALUES (1, "Complete 1 km", "10", 1);
INSERT INTO quests VALUES (2, "Complete 2 km", "20", 2);
INSERT INTO quests VALUES (3, "Complete 3 km", "30", 3);
INSERT INTO quests VALUES (4, "Complete 4 km", "40", 4);
INSERT INTO quests VALUES (5, "Complete 5 km", "50", 5);
INSERT INTO quests VALUES (6, "Complete 6 km", "60", 6);
INSERT INTO quests VALUES (7, "Complete 7 km", "70", 7);
INSERT INTO quests VALUES (8, "Complete 8 km", "80", 8);
INSERT INTO quests VALUES (9, "Complete 9 km", "90", 9);
INSERT INTO quests VALUES (10, "Complete 10 km", "100", 10);
INSERT INTO quests VALUES (11, "Complete 11 km", "110", 11);
INSERT INTO quests VALUES (12, "Complete 12 km", "120", 12);
INSERT INTO quests VALUES (13, "Complete 13 km", "130", 13);
INSERT INTO quests VALUES (14, "Complete 14 km", "140", 14);
INSERT INTO quests VALUES (15, "Complete 15 km", "150", 15);

INSERT INTO quests VALUES (16, "Visit Pulau Hantu", "150", 46);
INSERT INTO quests VALUES (17, "Discover Kent Ridge Park", "150", 47);
INSERT INTO quests VALUES (18, "Explore Pasir Ris Park", "150", 48);
INSERT INTO quests VALUES (19, "Discover Sungei Buloh Wetland Reserve", "150", 49);
INSERT INTO quests VALUES (20, "Adventure in Sembawang Park", "150", 50);
INSERT INTO quests VALUES (21, "Visit Kranji Reservoir Park", "150", 51);
INSERT INTO quests VALUES (22, "Explore Marina Barrage", "150", 52);
INSERT INTO quests VALUES (23, "Discover Bishan-Ang Mo Kio Park", "150", 53);
INSERT INTO quests VALUES (24, "Adventure in Bedok Reservoir Park", "150", 54);
INSERT INTO quests VALUES (25, "Visit West Coast Park", "150", 55);
INSERT INTO quests VALUES (26, "Explore Gardens by the Bay", "150", 56);
INSERT INTO quests VALUES (27, "Discover Tanjong Beach", "150", 57);
INSERT INTO quests VALUES (28, "Adventure in Bukit Batok Town Park", "150", 58);
INSERT INTO quests VALUES (298, "Visit Fort Siloso", "150", 59);
INSERT INTO quests VALUES (30, "Explore Mount Faber Park", "150", 60);


---------------------------------------
-- Adding data to userMISSIONS table --
---------------------------------------
INSERT INTO usermissions VALUES (1, "Not Completed", "1", "1");
INSERT INTO usermissions VALUES (2, "Not Completed", "2", "1");
INSERT INTO usermissions VALUES (3, "Not Completed", "3", "1");
INSERT INTO usermissions VALUES (4, "Not Completed", "4", "1");
INSERT INTO usermissions VALUES (5, "Not Completed", "5", "1");
INSERT INTO usermissions VALUES (6, "Not Completed", "6", "1");
INSERT INTO usermissions VALUES (7, "Not Completed", "7", "1");
INSERT INTO usermissions VALUES (8, "Not Completed", "8", "1");
INSERT INTO usermissions VALUES (9, "Not Completed", "9", "1");
INSERT INTO usermissions VALUES (10, "Not Completed", "10", "1");
INSERT INTO usermissions VALUES (11, "Not Completed", "11", "1");
INSERT INTO usermissions VALUES (12, "Not Completed", "12", "1");
INSERT INTO usermissions VALUES (13, "Not Completed", "13", "1");
INSERT INTO usermissions VALUES (14, "Not Completed", "14", "1");
INSERT INTO usermissions VALUES (15, "Not Completed", "15", "1");
INSERT INTO usermissions VALUES (16, "Not Completed", "16", "1");
INSERT INTO usermissions VALUES (17, "Not Completed", "17", "1");
INSERT INTO usermissions VALUES (18, "Not Completed", "18", "1");
INSERT INTO usermissions VALUES (19, "Not Completed", "19", "1");
INSERT INTO usermissions VALUES (20, "Not Completed", "20", "1");
INSERT INTO usermissions VALUES (21, "Not Completed", "21", "1");
INSERT INTO usermissions VALUES (22, "Not Completed", "22", "1");
INSERT INTO usermissions VALUES (23, "Not Completed", "23", "1");
INSERT INTO usermissions VALUES (24, "Not Completed", "24", "1");
INSERT INTO usermissions VALUES (25, "Not Completed", "25", "1");
INSERT INTO usermissions VALUES (26, "Not Completed", "26", "1");
INSERT INTO usermissions VALUES (27, "Not Completed", "27", "1");
INSERT INTO usermissions VALUES (28, "Not Completed", "28", "1");
INSERT INTO usermissions VALUES (29, "Not Completed", "29", "1");
INSERT INTO usermissions VALUES (30, "Not Completed", "30", "1");
-------------------------------------
-- Adding data to userQUESTS table --
-------------------------------------
INSERT INTO userquests VALUES (1, "Not Completed", "1", "1");
INSERT INTO userquests VALUES (2, "Not Completed", "2", "1");
INSERT INTO userquests VALUES (3, "Not Completed", "3", "1");
INSERT INTO userquests VALUES (4, "Not Completed", "4", "1");
INSERT INTO userquests VALUES (5, "Not Completed", "5", "1");
INSERT INTO userquests VALUES (6, "Not Completed", "6", "1");
INSERT INTO userquests VALUES (7, "Not Completed", "7", "1");
INSERT INTO userquests VALUES (8, "Not Completed", "8", "1");
INSERT INTO userquests VALUES (9, "Not Completed", "9", "1");
INSERT INTO userquests VALUES (10, "Not Completed", "10", "1");
INSERT INTO userquests VALUES (11, "Not Completed", "11", "1");
INSERT INTO userquests VALUES (12, "Not Completed", "12", "1");
INSERT INTO userquests VALUES (13, "Not Completed", "13", "1");
INSERT INTO userquests VALUES (14, "Not Completed", "14", "1");
INSERT INTO userquests VALUES (15, "Not Completed", "15", "1");
INSERT INTO userquests VALUES (16, "Not Completed", "16", "1");
INSERT INTO userquests VALUES (17, "Not Completed", "17", "1");
INSERT INTO userquests VALUES (18, "Not Completed", "18", "1");
INSERT INTO userquests VALUES (19, "Not Completed", "19", "1");
INSERT INTO userquests VALUES (20, "Not Completed", "20", "1");
INSERT INTO userquests VALUES (21, "Not Completed", "21", "1");
INSERT INTO userquests VALUES (22, "Not Completed", "22", "1");
INSERT INTO userquests VALUES (23, "Not Completed", "23", "1");
INSERT INTO userquests VALUES (24, "Not Completed", "24", "1");
INSERT INTO userquests VALUES (25, "Not Completed", "25", "1");
INSERT INTO userquests VALUES (26, "Not Completed", "26", "1");
INSERT INTO userquests VALUES (27, "Not Completed", "27", "1");
INSERT INTO userquests VALUES (28, "Not Completed", "28", "1");
INSERT INTO userquests VALUES (29, "Not Completed", "29", "1");
INSERT INTO userquests VALUES (30, "Not Completed", "30", "1");
-----------------------------------
-- Adding data to PELOTONS table --
-----------------------------------
INSERT INTO pelotons VALUES (1, 'Cycling Squad', 'Cycling', 1001, 'We ride together and conquer the road.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (2, 'Runners United', 'Running', 1002, 'A community of passionate runners.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (3, 'FitFam Spinners', 'Cycling', 1003, 'Join us for intense indoor cycling sessions.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (4, 'Road Warriors', 'Cycling', 1004, 'We explore the world on two wheels.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (5, 'Sprint Squad', 'Running', 1005, 'For those who love to sprint and challenge their limits.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (6, 'Pace Setters', 'Running', 1006, 'Setting the pace and achieving new milestones.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (7, 'Endurance Enthusiasts', 'Cycling', 1007, 'Push your limits with long-distance rides.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (8, 'Trail Blazers', 'Running', 1008, 'Conquer the trails and enjoy nature.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (9, 'Spin Fusion', 'Cycling', 1009, 'A mix of music, motivation, and high-intensity workouts.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (10, 'Sweat and Run', 'Running', 1010, 'Run hard, sweat hard, and achieve your goals.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (11, 'Pedal Power', 'Cycling', 1011, 'Unleash the power of your legs on the bike.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (12, 'Speed Demons', 'Running', 1012, 'Feel the need for speed on every run.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (13, 'Climb and Ride', 'Cycling', 1013, 'Conquer the virtual mountains on your bike.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (14, 'Mile Crushers', 'Running', 1014, 'Crushing mile after mile to become better runners.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (15, 'Spin Sisters', 'Cycling', 1015, 'A supportive sisterhood of spin enthusiasts.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (16, 'Marathoners Club', 'Running', 1016, 'Training together for marathon success.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (17, 'Bike Battalion', 'Cycling', 1017, 'Riding in sync and achieving new challenges.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (18, 'Urban Runners', 'Running', 1018, 'Exploring the city streets one run at a time.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (19, 'Cycle Warriors', 'Cycling', 1019, 'Defending fitness and conquering new territories.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (20, 'Sweat Tribe', 'Running', 1020, 'A tribe that sweats together, stays together.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (21, 'Spin and Shine', 'Cycling', 1021, 'Let the wheels spin and your spirit shine.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (22, 'Running Revolution', 'Running', 1022, 'Revolutionizing the way we run and stay fit.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (23, 'Pedal Prodigies', 'Cycling', 1023, 'Young talents pushing the limits on the bike.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (24, 'Trail Runners Club', 'Running', 1024, 'For those who love the thrill of trail running.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (25, 'Spin Fusion', 'Cycling', 1025, 'Fuse music and spin workouts for a unique experience.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (26, 'RunStrong Nation', 'Running', 1026, 'A nation of strong and dedicated runners.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (27, 'Cycle Studio X', 'Cycling', 1027, 'Unleashing the power of indoor cycling.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (28, 'Fast Feet Club', 'Running', 1028, 'Where speed and agility meet.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (29, 'Pedal and Burn', 'Cycling', 1029, 'Pedal hard, burn calories, and feel the burn.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO pelotons VALUES (30, 'Road Runners', 'Running', 1030, 'Hitting the road and chasing new running goals.', "2023-06-30 01:30:57", "2023-06-30 01:30:57");
