'use client';

import React from 'react';
import { Course } from '@/app/lib/definitions';

interface CourseListProps {
    courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
    if (courses.length === 0) {
        return <div>No courses found</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Mes Cours</h1>
            <ul className="space-y-4">
                {courses.map((course) => (
                    <li key={course.id} className="p-4 border rounded-lg">
                        <h2 className="text-xl font-semibold">{course.title}</h2>
                        <p>{course.description}</p>
                        <p>Instrument: {course.instrument}</p>
                        <p>Niveau: {course.level}</p>
                        <p>Horaire: {course.schedule}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;