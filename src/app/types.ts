export interface Course {
    courseId: string;
    name: string;
    description: string;
    instructorId: string;    // links to the User who is the instructor
    meetingLink: string;
    imgLink: string;
  }

  export type UserRole = 'student' | 'instructor'; 

  export interface User {
    userId: string;
    name: string;
    email: string;
    sMedia: string[];       // social media links
    role: UserRole;
    courses?: string[];     // optional - instructor's teaching courses and student's enrolled courses
  }


// this is a test 

// this is another test 

// this is another test test test 