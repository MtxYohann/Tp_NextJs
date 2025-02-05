// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

import { title } from "process";

// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    role: 'STUDENT',
  },
];

const courses = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    title: 'Course',
    description: 'Course Description',
    instrument: 'Piano',
    teacherId: '410544b2-4001-4271-9855-fec4b6a6442a',
    level: 'Beginner',
    schedule: 'Monday 10:00 AM',
    capacity: 10,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b8g6442a',
    title: 'Course 2',
    description: 'Course Description 2',
    instrument: 'Guitar',
    teacherId: '410544b2-4001-4271-9855-fec4b6a6442a',
    level: 'Intermediate',
    schedule: 'Tuesday 10:00 AM',
    capacity: 10,
  },
];

const enrollments = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    studentId: '410544b2-4001-4271-9855-fec4b6a6442a',
    courseId: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    enrollmentDate: '2021-10-01',
    status: 'ENROLLED',
  },
];

const progress = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    studentId: '410544b2-4001-4271-9855-fec4b6a6442a',
    courseId: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    date: '2021-10-01',
    evaluation: 'A',
    comment: 'Good job!',
  },
];

export { users, courses, enrollments, progress };
