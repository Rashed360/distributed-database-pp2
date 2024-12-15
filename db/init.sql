CREATE TABLE Regions (
    id SERIAL PRIMARY KEY,
    db VARCHAR(5) NOT NULL,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Students (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    regionId INT REFERENCES Regions(id)
);

CREATE TABLE RegionalStudents (
    id SERIAL PRIMARY KEY,
    studentId INT REFERENCES Students(id) ON DELETE CASCADE,
    fullName VARCHAR(100) NOT NULL,
    aboutMe TEXT,
    joinedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Instructors (
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    joinedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    regionId INT REFERENCES Regions(id)
);

CREATE TABLE Courses (
    id SERIAL PRIMARY KEY,
    instructorId INT REFERENCES Instructors(id),
    title VARCHAR(200) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE CourseContents (
    id SERIAL PRIMARY KEY,
    courseId INT REFERENCES Courses(id) ON DELETE CASCADE,
    contentType VARCHAR(50) NOT NULL,
    dataContent TEXT NOT NULL,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE CourseStudents (
    id SERIAL PRIMARY KEY,
    courseId INT REFERENCES Courses(id),
    studentId INT REFERENCES Students(id),
    attendance INT DEFAULT 0,
    enrolledAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Assignments (
    id SERIAL PRIMARY KEY,
    courseId INT REFERENCES Courses(id),
    questions TEXT NOT NULL,
    options TEXT NOT NULL,
    answers TEXT NOT NULL,
    deadline TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE AssignmentSubmissions (
    id SERIAL PRIMARY KEY,
    assignmentId INT REFERENCES Assignments(id),
    studentId INT REFERENCES Students(id),
    selectedOption VARCHAR(255),
    grade DECIMAL(5, 2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Regions (db, name) VALUES
('db_1', 'Asia'),
('db_2', 'Europe'),
('db_3', 'America');

INSERT INTO Students (email, password, regionId) VALUES
('student1@asia.com', 'password1', 1),
('student2@asia.com', 'password2', 1),
('student3@asia.com', 'password3', 1),
('student4@asia.com', 'password4', 1),
('student5@asia.com', 'password5', 1),
('student6@asia.com', 'password6', 1),
('student7@asia.com', 'password7', 1),
('student8@asia.com', 'password8', 1),
('student9@asia.com', 'password9', 1),
('student10@asia.com', 'password10', 1),
('student11@asia.com', 'password11', 1),
('student12@asia.com', 'password12', 1),
('student13@asia.com', 'password13', 1),
('student14@asia.com', 'password14', 1),
('student15@asia.com', 'password15', 1),
('student16@asia.com', 'password16', 1),
('student17@asia.com', 'password17', 1),
('student18@asia.com', 'password18', 1),
('student19@asia.com', 'password19', 1),
('student20@asia.com', 'password20', 1),
('student1@europe.com', 'password1', 2),
('student2@europe.com', 'password2', 2),
('student3@europe.com', 'password3', 2),
('student4@europe.com', 'password4', 2),
('student5@europe.com', 'password5', 2),
('student6@europe.com', 'password6', 2),
('student7@europe.com', 'password7', 2),
('student8@europe.com', 'password8', 2),
('student9@europe.com', 'password9', 2),
('student10@europe.com', 'password10', 2),
('student11@europe.com', 'password11', 2),
('student12@europe.com', 'password12', 2),
('student13@europe.com', 'password13', 2),
('student14@europe.com', 'password14', 2),
('student15@europe.com', 'password15', 2),
('student16@europe.com', 'password16', 2),
('student17@europe.com', 'password17', 2),
('student18@europe.com', 'password18', 2),
('student19@europe.com', 'password19', 2),
('student20@europe.com', 'password20', 2),
('student1@america.com', 'password1', 3),
('student2@america.com', 'password2', 3),
('student3@america.com', 'password3', 3),
('student4@america.com', 'password4', 3),
('student5@america.com', 'password5', 3),
('student6@america.com', 'password6', 3),
('student7@america.com', 'password7', 3),
('student8@america.com', 'password8', 3),
('student9@america.com', 'password9', 3),
('student10@america.com', 'password10', 3),
('student11@america.com', 'password11', 3),
('student12@america.com', 'password12', 3),
('student13@america.com', 'password13', 3),
('student14@america.com', 'password14', 3),
('student15@america.com', 'password15', 3),
('student16@america.com', 'password16', 3),
('student17@america.com', 'password17', 3),
('student18@america.com', 'password18', 3),
('student19@america.com', 'password19', 3),
('student20@america.com', 'password20', 3);