// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

import { title } from "process";

// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Administrateur',
    email: 'admin@musique.com',
    password: '123456',
    role: 'ADMIN',
  },
];

const courses = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    title: 'Cours de Piano pour Débutants',
    description: 'Course Description',
    instrument: 'Piano',
    teacherId: '410544b2-4001-4271-9855-fec4b6a6442a',
    level: 'Débutants',
    schedule: 'Lundi 10H',
    capacity: 3,
  }
];

const enrollments = [
  {
    id: 'd6e15727-9fe1-4961-8c8c-ea44a9bd81aa',
    studentId: '410544b2-4001-4271-9855-fec4b6a6442a',
    courseId: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    enrollmentDate: '2025-02-24',
    status: 'inscrit',
  },
];

const progress = [
  {
    id: 'd6e15727-9fe1-4961-5b5b-ea44a9bd81aa',
    studentId: '410544b2-4001-4271-9855-fec4b6a6442a',
    courseId: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    date: '2025-02-22',
    evaluation: 'A',
    comment: 'Morceau presque fini, bien réviser minimum 30 min par jour',
  },
];

export { users, courses, enrollments, progress };
