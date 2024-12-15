INSERT INTO RegionalStudents (studentId, fullName, aboutMe) VALUES
(1, 'Student One', 'A dedicated learner from Europe.'),
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
('Instructor One', 'instructor1@europe.com', 'instr1password', 2),
('Instructor Two', 'instructor2@europe.com', 'instr2password', 2),
('Instructor Three', 'instructor3@europe.com', 'instr3password', 2),
('Instructor Four', 'instructor4@europe.com', 'instr4password', 2),
('Instructor Five', 'instructor5@europe.com', 'instr5password', 2),
('Instructor Six', 'instructor6@europe.com', 'instr6password', 2),
('Instructor Seven', 'instructor7@europe.com', 'instr7password', 2),
('Instructor Eight', 'instructor8@europe.com', 'instr8password', 2),
('Instructor Nine', 'instructor9@europe.com', 'instr9password', 2),
('Instructor Ten', 'instructor10@europe.com', 'instr10password', 2),
('Instructor Eleven', 'instructor11@europe.com', 'instr11password', 2),
('Instructor Twelve', 'instructor12@europe.com', 'instr12password', 2),
('Instructor Thirteen', 'instructor13@europe.com', 'instr13password', 2),
('Instructor Fourteen', 'instructor14@europe.com', 'instr14password', 2),
('Instructor Fifteen', 'instructor15@europe.com', 'instr15password', 2),
('Instructor Sixteen', 'instructor16@europe.com', 'instr16password', 2),
('Instructor Seventeen', 'instructor17@europe.com', 'instr17password', 2),
('Instructor Eighteen', 'instructor18@europe.com', 'instr18password', 2),
('Instructor Nineteen', 'instructor19@europe.com', 'instr19password', 2),
('Instructor Twenty', 'instructor20@europe.com', 'instr20password', 2);

INSERT INTO Courses (instructorId, title, category, description) VALUES
(1, 'Advanced Java Programming', 'Programming', 'An advanced course in Java programming.'),
(1, 'Data Structures and Algorithms', 'Computer Science', 'A comprehensive guide to data structures and algorithms.'),
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
(18, 'Python for Data Analysis', 'Programming', 'A hands-on course to analyze data with Python.'),
(19, 'JavaScript for Beginners', 'Programming', 'Master the basics of JavaScript for web development.'),
(20, 'Digital Forensics', 'Cybersecurity', 'Explore digital forensics techniques and tools.');

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