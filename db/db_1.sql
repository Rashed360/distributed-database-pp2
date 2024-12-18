INSERT INTO RegionalStudents (studentId, fullName, aboutMe) VALUES
(1, 'Student One', 'A dedicated learner from Asia.'),
(2, 'Student Two', 'Tech enthusiast and coder.'),
(3, 'Student Three', 'Lover of AI and machine learning.'),
(4, 'Student Four', 'Aspiring software engineer.'),
(5, 'Student Five', 'Passionate about digital rights.'),
(6, 'Student Six', 'Innovative and creative thinker.'),
(7, 'Student Seven', 'Full-stack developer with a focus on security.'),
(8, 'Student Eight', 'Dedicated to making the world a better place through tech.'),
(9, 'Student Nine', 'Self-driven and goal-oriented.'),
(10, 'Student Ten', 'Learning to become a data scientist.'),
(11, 'Student Eleven', 'Digital safety advocate.'),
(12, 'Student Twelve', 'Focused on blockchain technology.'),
(13, 'Student Thirteen', 'Interested in web development and cybersecurity.'),
(14, 'Student Fourteen', 'Entrepreneur and innovator.'),
(15, 'Student Fifteen', 'Aspiring data analyst.'),
(16, 'Student Sixteen', 'Tech explorer and innovation seeker.'),
(17, 'Student Seventeen', 'Adventurous and problem solver.'),
(18, 'Student Eighteen', 'Science and tech lover.'),
(19, 'Student Nineteen', 'Curious about AI and machine learning.'),
(20, 'Student Twenty', 'Self-motivated and focused learner.');

INSERT INTO Instructors (fullName, email, password, regionId) VALUES
('Instructor One', 'instructor1@asia.com', 'instr1password', 1),
('Instructor Two', 'instructor2@asia.com', 'instr2password', 1),
('Instructor Three', 'instructor3@asia.com', 'instr3password', 1),
('Instructor Four', 'instructor4@asia.com', 'instr4password', 1),
('Instructor Five', 'instructor5@asia.com', 'instr5password', 1),
('Instructor Six', 'instructor6@asia.com', 'instr6password', 1),
('Instructor Seven', 'instructor7@asia.com', 'instr7password', 1),
('Instructor Eight', 'instructor8@asia.com', 'instr8password', 1),
('Instructor Nine', 'instructor9@asia.com', 'instr9password', 1),
('Instructor Ten', 'instructor10@asia.com', 'instr10password', 1),
('Instructor Eleven', 'instructor11@asia.com', 'instr11password', 1),
('Instructor Twelve', 'instructor12@asia.com', 'instr12password', 1),
('Instructor Thirteen', 'instructor13@asia.com', 'instr13password', 1),
('Instructor Fourteen', 'instructor14@asia.com', 'instr14password', 1),
('Instructor Fifteen', 'instructor15@asia.com', 'instr15password', 1),
('Instructor Sixteen', 'instructor16@asia.com', 'instr16password', 1),
('Instructor Seventeen', 'instructor17@asia.com', 'instr17password', 1),
('Instructor Eighteen', 'instructor18@asia.com', 'instr18password', 1),
('Instructor Nineteen', 'instructor19@asia.com', 'instr19password', 1),
('Instructor Twenty', 'instructor20@asia.com', 'instr20password', 1);

INSERT INTO Courses (instructorId, title, category, description) VALUES
(1, 'Advanced Java Programming', 'Programming', 'An advanced course in Java programming.'),
(1, 'Data Structures and Algorithms', 'Computer Science', 'A comprehensive guide to data structures and algorithms.'),
(1, 'JavaScript for Beginners', 'Programming', 'Master the basics of JavaScript for web development.'),
(1, 'Digital Forensics', 'Cybersecurity', 'Explore digital forensics techniques and tools.'),
(2, 'Web Development 101', 'Web Development', 'An introduction to web development using HTML, CSS, and JavaScript.'),
(3, 'Machine Learning Basics', 'Data Science', 'Understanding machine learning algorithms and techniques.'),
(4, 'Cybersecurity Fundamentals', 'Cybersecurity', 'A beginner’s guide to cybersecurity principles.'),
(5, 'Blockchain Technology', 'Blockchain', 'Understanding blockchain and its applications.'),
(6, 'Digital Marketing Essentials', 'Marketing', 'A course on digital marketing strategies.'),
(7, 'Big Data Analytics', 'Data Science', 'An introduction to big data and its analytics.'),
(8, 'Mobile App Development', 'Mobile Development', 'A hands-on course in developing mobile apps.'),
(9, 'Cloud Computing with AWS', 'Cloud Computing', 'A course on cloud computing platforms like AWS.'),
(10, 'Web Security Best Practices', 'Cybersecurity', 'Learn the best practices for web security.'),
(11, 'Deep Learning with TensorFlow', 'Machine Learning', 'An advanced course in deep learning techniques using TensorFlow.'),
(12, 'Data Visualization with Python', 'Data Science', 'A guide to data visualization techniques using Python.'),
(13, 'Game Development with Unity', 'Game Development', 'Create your first game with Unity.'),
(14, 'Agile Project Management', 'Management', 'Learn the principles of Agile project management.'),
(15, 'Artificial Intelligence for Beginners', 'AI', 'Introduction to AI and its applications.'),
(16, 'Cloud-native Development', 'Cloud Computing', 'Build scalable apps using cloud-native technologies.'),
(17, 'Database Management Systems', 'Database', 'Learn about relational databases and SQL.'),
(18, 'Python for Data Analysis', 'Programming', 'A hands-on course to analyze data with Python.');

INSERT INTO CourseContents (courseId, contentType, dataContent) VALUES
(1, 'Lecture', 'Introduction to Java and its features.'),
(1, 'Assignment', 'Solve basic Java programs.'),
(1, 'Quiz', 'Multiple-choice questions on Java basics.'),
(1, 'Lecture', 'Java data types and control structures.'),
(1, 'Assignment', 'Write a program to find factorial of a number.'),
(1, 'Quiz', 'Multiple-choice questions on control structures.'),
(1, 'Lecture', 'Object-Oriented Programming (OOP) concepts in Java.'),
(1, 'Assignment', 'Create a class and demonstrate inheritance.'),
(1, 'Quiz', 'OOP concepts quiz.'),
(1, 'Lecture', 'Java Collections framework and data structures.'),
(1, 'Assignment', 'Implement a basic LinkedList.'),
(1, 'Quiz', 'Java Collections quiz.'),
(1, 'Lecture', 'Exception handling in Java.'),
(1, 'Assignment', 'Create a program with try-catch block.'),
(1, 'Quiz', 'Exception handling quiz.'),
(1, 'Lecture', 'Java Streams and Lambda expressions.'),
(1, 'Assignment', 'Write a program using lambda expressions.'),
(1, 'Quiz', 'Java Streams and Lambda quiz.'),
(1, 'Lecture', 'Introduction to JavaFX for GUI applications.'),
(1, 'Assignment', 'Create a basic JavaFX application.'),
(1, 'Quiz', 'JavaFX basics quiz.'),
(2, 'Lecture', 'Introduction to Data Structures and Algorithms.'),
(2, 'Assignment', 'Implement a linked list.'),
(2, 'Quiz', 'Multiple-choice questions on Data Structures.'),
(2, 'Lecture', 'Arrays and their applications.'),
(2, 'Assignment', 'Write a program to reverse an array.'),
(2, 'Quiz', 'Arrays quiz.'),
(2, 'Lecture', 'Stacks and Queues.'),
(2, 'Assignment', 'Implement a stack using arrays.'),
(2, 'Quiz', 'Stacks and Queues quiz.'),
(2, 'Lecture', 'Sorting algorithms: QuickSort, MergeSort.'),
(2, 'Assignment', 'Implement QuickSort in Java.'),
(2, 'Quiz', 'Sorting algorithms quiz.'),
(2, 'Lecture', 'Searching algorithms: Binary Search.'),
(2, 'Assignment', 'Implement Binary Search on a sorted array.'),
(2, 'Quiz', 'Searching algorithms quiz.'),
(2, 'Lecture', 'Graphs and their traversal techniques.'),
(2, 'Assignment', 'Implement depth-first search (DFS) on a graph.'),
(2, 'Quiz', 'Graph traversal quiz.'),
(2, 'Lecture', 'Dynamic Programming techniques.'),
(2, 'Assignment', 'Solve the Knapsack problem using Dynamic Programming.'),
(2, 'Quiz', 'Dynamic Programming quiz.');