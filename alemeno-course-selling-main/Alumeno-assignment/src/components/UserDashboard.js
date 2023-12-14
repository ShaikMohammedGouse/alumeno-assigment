import React, { useState } from "react";
import courseModel from "./dummyData";

const UserDashboard = () => {
  const [completedCourses, setCompletedCourses] = useState([]);

  const markCourseAsCompleted = (courseId) => {
    // Add the course to the list of completed courses
    setCompletedCourses([...completedCourses, courseId]);
  };

  return (
    <div className="bg-blue-100">
      <h1 className="sm:text-3xl text-xl font-bold p-4 bg-blue-100 text-indigo-500 text-border">
        Your Enrolled Courses
      </h1>
      <div className="flex flex-wrap">
        {courseModel &&
          courseModel.map((course) => (
            <div
              key={course.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4"
            >
              <div className="border border-gray-300 p-4 rounded-lg shadow-md bg-white">
                <img
                  src={course.thumbnail}
                  alt={course.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold">{course.name}</h2>
                <p className="text-gray-600 text-sm">Instructor: {course.instructor}</p>
                <p className="text-gray-600 text-sm">Duration: {course.duration}</p>
                <p className="text-gray-600 text-sm">Schedule: {course.schedule}</p>
                <p className="text-gray-600 text-sm">Location: {course.location}</p>
                <p className="text-gray-600 text-sm">
                  Prerequisites: {course.prerequisites.join(", ")}
                </p>
                <button
                  onClick={() => markCourseAsCompleted(course.id)}
                  className="mt-2 bg-indigo-900 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserDashboard;
