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


------------------------------------
-- Adding data to LOCATIONS table --
------------------------------------

INSERT INTO locations VALUES (1, "East Coast Park", 449876, "East Coast Park Service Rd, Singapore 449876", 103.929558, 1.304219);
INSERT INTO locations VALUES (2, "MacRitchie Reservoir Park", 298717, "MacRitchie Reservoir, Singapore 298717", 103.822830, 1.340596);
INSERT INTO locations VALUES (3, "Botanic Gardens", 259569, "1 Cluny Rd, Singapore 259569", 103.815280, 1.313839);
INSERT INTO locations VALUES (4, "Pulau Ubin", 508297, "Pulau Ubin, Singapore 508297", 103.967678, 1.413669);
INSERT INTO locations VALUES (5, "Kallang Riverside Park", 339348, "Kallang Riverside Park, Singapore 339348", 103.865387, 1.305491);
INSERT INTO locations VALUES (6, "Coney Island Park", 539837, "Coney Island, Singapore 539837", 103.921152, 1.412308);
INSERT INTO locations VALUES (7, "Jurong Lake Gardens", 649853, "25 Yuan Ching Rd, Singapore 649853", 103.724527, 1.340415);
INSERT INTO locations VALUES (8, "Punggol Waterway Park", 829325, "10 Sentul Cres, Singapore 829325", 103.905092, 1.402877);
INSERT INTO locations VALUES (9, "HortPark", 139653, "33 Hyderabad Rd, Singapore 139653", 103.790888, 1.279829);
INSERT INTO locations VALUES (10, "Changi Beach Park", 499982, "Changi Coast Rd, Singapore 499982", 103.987083, 1.386432);
INSERT INTO locations VALUES (11, "Bukit Timah Nature Reserve", 589375, "Bukit Timah Nature Reserve, Singapore 589375", 103.778781, 1.354047);
INSERT INTO locations VALUES (12, "Labrador Nature Reserve", 119187, "Labrador Nature Reserve, Singapore 119187", 103.804759, 1.268295);
INSERT INTO locations VALUES (13, "Southern Ridges", 119260, "Mount Faber Park, Singapore 119260", 103.812987, 1.270944);
INSERT INTO locations VALUES (14, "Woodlands Waterfront Park", 738991, "6A Admiralty Rd W, Singapore 738991", 103.788615, 1.449243);
INSERT INTO locations VALUES (15, "Fort Canning Park", 179618, "Fort Canning Park, Singapore 179618", 103.845442, 1.293063);
INSERT INTO locations VALUES (16, "Lower Seletar Reservoir Park", 807013, "Lower Seletar Reservoir Park, Singapore 807013", 103.828384, 1.409947);
INSERT INTO locations VALUES (17, "Pasir Ris Park", 519486, "Pasir Ris Park, Singapore 519486", 103.947346, 1.379569);
INSERT INTO locations VALUES (18, "Kranji Marshes", 739162, "11 Neo Tiew Ln 2, Singapore 739162", 103.708415, 1.443297);
INSERT INTO locations VALUES (19, "Sungei Buloh Wetland Reserve", 689150, "301 Neo Tiew Cres, Singapore 689150", 103.729162, 1.446394);
INSERT INTO locations VALUES (20, "Sembawang Park", 759580, "Sembawang Park, Singapore 759580", 103.815425, 1.452190);
INSERT INTO locations VALUES (21, "Bishan-Ang Mo Kio Park", 569981, "Bishan-Ang Mo Kio Park, Singapore 569981", 103.850346, 1.369000);
INSERT INTO locations VALUES (22, "West Coast Park", 128384, "West Coast Park, Singapore 128384", 103.758130, 1.290412);
INSERT INTO locations VALUES (23, "Pasir Ris Town Park", 519634, "110 Pasir Ris Central, Singapore 519634", 103.948540, 1.373920);
INSERT INTO locations VALUES (24, "Pearl's Hill City Park", 168977, "Pearl's Hill City Park, Singapore 168977", 103.840097, 1.285628);
INSERT INTO locations VALUES (25, "Tampines Eco Green", 528766, "Tampines Eco Green, Singapore 528766", 103.951905, 1.361558);
INSERT INTO locations VALUES (26, "Haw Par Villa", 117396, "262 Pasir Panjang Rd, Singapore 117396", 103.780498, 1.281430);
INSERT INTO locations VALUES (27, "Chinese Garden", 619795, "1 Chinese Garden Rd, Singapore 619795", 103.725023, 1.342070);
INSERT INTO locations VALUES (28, "Fort Siloso", 099981, "33 Allanbrooke Rd, Singapore 099981", 103.807999, 1.250275);
INSERT INTO locations VALUES (29, "Labrador Park", 119974, "Labrador Villa Rd, Singapore 119974", 103.803445, 1.269938);
INSERT INTO locations VALUES (30, "Mount Faber Park", 099203, "Mount Faber Rd, Singapore 099203", 103.819836, 1.271876);

--------------------------------------
-- Adding data to ATTRACTIONS table --
--------------------------------------

INSERT INTO attractions VALUES (1, 3.2, "Easy", "./assets/img1", 1);
INSERT INTO attractions VALUES (2, 6.8, "Medium", "./assets/img2", 1);
INSERT INTO attractions VALUES (3, 5.1, "Hard", "./assets/img3", 1);
INSERT INTO attractions VALUES (4, 2.9, "Easy", "./assets/img4", 2);
INSERT INTO attractions VALUES (5, 4.5, "Medium", "./assets/img5", 2);
INSERT INTO attractions VALUES (6, 6.3, "Hard", "./assets/img6", 2);
INSERT INTO attractions VALUES (7, 4.8, "Easy", "./assets/img7", 3);
INSERT INTO attractions VALUES (8, 7.1, "Medium", "./assets/img8", 3);
INSERT INTO attractions VALUES (9, 3.5, "Hard", "./assets/img9", 3);
INSERT INTO attractions VALUES (10, 5.2, "Easy", "./assets/img10", 4);
INSERT INTO attractions VALUES (11, 6.9, "Medium", "./assets/img11", 4);
INSERT INTO attractions VALUES (12, 2.7, "Hard", "./assets/img12", 4);
INSERT INTO attractions VALUES (13, 4.4, "Easy", "./assets/img13", 5);
INSERT INTO attractions VALUES (14, 6.2, "Medium", "./assets/img14", 5);
INSERT INTO attractions VALUES (15, 5.8, "Hard", "./assets/img15", 5);
INSERT INTO attractions VALUES (16, 2.5, "Easy", "./assets/img16", 6);
INSERT INTO attractions VALUES (17, 4.9, "Medium", "./assets/img17", 6);
INSERT INTO attractions VALUES (18, 7.3, "Hard", "./assets/img18", 6);
INSERT INTO attractions VALUES (19, 4.1, "Easy", "./assets/img19", 7);
INSERT INTO attractions VALUES (20, 6.7, "Medium", "./assets/img20", 7);
INSERT INTO attractions VALUES (21, 5.4, "Hard", "./assets/img21", 7);
INSERT INTO attractions VALUES (22, 3.7, "Easy", "./assets/img22", 8);
INSERT INTO attractions VALUES (23, 5.6, "Medium", "./assets/img23", 8);
INSERT INTO attractions VALUES (24, 7.2, "Hard", "./assets/img24", 8);
INSERT INTO attractions VALUES (25, 4.3, "Easy", "./assets/img25", 9);
INSERT INTO attractions VALUES (26, 6.1, "Medium", "./assets/img26", 9);
INSERT INTO attractions VALUES (27, 5.9, "Hard", "./assets/img27", 9);
INSERT INTO attractions VALUES (28, 2.3, "Easy", "./assets/img28", 10);
INSERT INTO attractions VALUES (29, 4.7, "Medium", "./assets/img29", 10);
INSERT INTO attractions VALUES (30, 7.5, "Hard", "./assets/img30", 10);

--------------------------------
-- Adding data to USERS table --
--------------------------------

INSERT INTO users VALUES (1, "John", "john@mail.com", 91234567, "Cyclecity123???", "I love cycling with my friends and touching people", "User", "Bronze", "2023-01-25 16:50:00", true, 500, "./assets/img5", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (2, "Jane", "jane@mail.com", 91234568, "Hiking123!!!", "I enjoy hiking in the mountains", "User", "Bronze", "2023-02-10 09:15:00", true, 600, "./assets/img6", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (3, "Mark", "mark@mail.com", 91234569, "Golfing456$$$", "I'm a passionate golfer and love playing on weekends", "User", "Silver", "2023-03-05 14:20:00", true, 700, "./assets/img7", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (4, "Emily", "emily@mail.com", 91234570, "Swimming789%%%", "Swimming is my favorite sport, and I swim every day", "User", "Silver", "2023-04-15 18:30:00", true, 800, "./assets/img8", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (5, "Michael", "michael@mail.com", 91234571, "Soccer123###", "I'm a die-hard soccer fan and play every weekend", "User", "Gold", "2023-05-20 11:45:00", true, 900, "./assets/img9", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (6, "Sarah", "sarah@mail.com", 91234572, "Dancing789***", "Dancing is my passion, and I perform in shows regularly", "User", "Gold", "2023-06-10 20:00:00", true, 1000, "./assets/img10", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (7, "David", "david@mail.com", 91234573, "Basketball123@@@", "Basketball is my favorite sport, and I play for a local team", "User", "Platinum", "2023-07-30 15:10:00", true, 1100, "./assets/img11", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (8, "Linda", "linda@mail.com", 91234574, "Yoga789$$$", "Yoga helps me stay fit and relaxed", "User", "Platinum", "2023-08-05 09:20:00", true, 1200, "./assets/img12", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (9, "Tom", "tom@mail.com", 91234575, "Gaming123&&&", "I'm a hardcore gamer and love playing all kinds of games", "User", "Diamond", "2023-09-15 17:30:00", true, 1300, "./assets/img13", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (10, "Amy", "amy@mail.com", 91234576, "Reading789(((", "Reading is my escape from reality", "User", "Diamond", "2023-10-20 10:45:00", true, 1400, "./assets/img14", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (11, "Peter", "peter@mail.com", 91234577, "Photography123@@@", "I love capturing moments through my camera lens", "User", "Bronze", "2023-11-10 19:00:00", true, 1500, "./assets/img15", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (12, "Olivia", "olivia@mail.com", 91234578, "Cooking789###", "Cooking is my passion, and I experiment with new recipes", "User", "Bronze", "2023-12-30 14:10:00", true, 1600, "./assets/img16", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (13, "Daniel", "daniel@mail.com", 91234579, "Running123$$$", "I'm a long-distance runner and participate in marathons", "User", "Silver", "2024-01-05 08:20:00", true, 1700, "./assets/img17", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (14, "Sophia", "sophia@mail.com", 91234580, "Painting789%%%", "Painting is my creative outlet, and I love using different mediums", "User", "Silver", "2024-02-15 16:30:00", true, 1800, "./assets/img18", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (15, "Christopher", "christopher@mail.com", 91234581, "Music123###", "I'm a musician and play multiple instruments", "User", "Gold", "2024-03-20 09:45:00", true, 1900, "./assets/img19", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (16, "Isabella", "isabella@mail.com", 91234582, "Singing789***", "Singing is my passion, and I perform at local events", "User", "Gold", "2024-04-10 18:00:00", true, 2000, "./assets/img20", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (17, "Andrew", "andrew@mail.com", 91234583, "Chess123@@@", "I'm a chess enthusiast and enjoy playing strategic games", "User", "Platinum", "2024-05-30 13:10:00", true, 2100, "./assets/img21", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (18, "Mia", "mia@mail.com", 91234584, "Meditation789$$$", "Meditation helps me find inner peace and calmness", "User", "Platinum", "2024-06-05 07:20:00", true, 2200, "./assets/img22", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (19, "William", "william@mail.com", 91234585, "Writing123&&&", "Writing is my way of expressing thoughts and emotions", "User", "Diamond", "2024-07-15 15:30:00", true, 2300, "./assets/img23", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (20, "Ava", "ava@mail.com", 91234586, "Gardening789(((", "I enjoy tending to plants and creating beautiful gardens", "User", "Diamond", "2024-08-20 08:45:00", true, 2400, "./assets/img24", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (21, "James", "james@mail.com", 91234587, "Football123@@@", "Football is my passion, and I play for a local team", "User", "Bronze", "2024-09-10 17:00:00", true, 2500, "./assets/img25", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (22, "Ella", "ella@mail.com", 91234588, "Baking789###", "Baking is my hobby, and I love trying new recipes", "User", "Bronze", "2024-10-30 12:10:00", true, 2600, "./assets/img26", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (23, "Alexander", "alexander@mail.com", 91234589, "Cycling123$$$", "I'm an avid cyclist and explore new routes every week", "User", "Silver", "2024-11-05 06:20:00", true, 2700, "./assets/img27", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (24, "Victoria", "victoria@mail.com", 91234590, "Paintball789%%%", "I enjoy playing paintball and competing in tournaments", "User", "Silver", "2024-12-15 14:30:00", true, 2800, "./assets/img28", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (25, "Benjamin", "benjamin@mail.com", 91234591, "Piano123###", "I'm a pianist and love composing music", "User", "Gold", "2025-01-20 07:45:00", true, 2900, "./assets/img29", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (26, "Grace", "grace@mail.com", 91234592, "Sculpting789***", "Sculpting is my creative passion, and I love working with clay", "User", "Gold", "2025-02-10 16:00:00", true, 3000, "./assets/img30", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (27, "Joseph", "joseph@mail.com", 91234593, "Chess123@@@", "Chess is my favorite game, and I play competitively", "User", "Platinum", "2025-03-30 11:10:00", true, 3100, "./assets/img31", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (28, "Sofia", "sofia@mail.com", 91234594, "Yoga789$$$", "Yoga helps me maintain a healthy body and mind", "User", "Platinum", "2025-04-05 05:20:00", true, 3200, "./assets/img32", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (29, "Daniel", "daniel@mail.com", 91234595, "Gaming123&&&", "I'm a passionate gamer and play competitive esports", "User", "Diamond", "2025-05-15 13:30:00", true, 3300, "./assets/img33", "2023-06-30 01:30:57", "2023-06-30 01:30:57");
INSERT INTO users VALUES (30, "Mila", "mila@mail.com", 91234596, "Reading789(((", "Reading is my escape and I devour books", "User", "Diamond", "2025-06-20 06:45:00", true, 3400, "./assets/img34", "2023-06-30 01:30:57", "2023-06-30 01:30:57");

------------------------------------
-- Adding data to userPOSTS table --
------------------------------------

------------------------------------
-- Adding data to CRITERIAS table --
------------------------------------

----------------------------------
-- Adding data to LEAGUES table --
----------------------------------

-----------------------------------
-- Adding data to MISSIONS table --
-----------------------------------

---------------------------------
-- Adding data to QUESTS table --
---------------------------------

---------------------------------------
-- Adding data to userMISSIONS table --
---------------------------------------

-------------------------------------
-- Adding data to userQUESTS table --
-------------------------------------

-----------------------------------
-- Adding data to PELOTONS table --
-----------------------------------
