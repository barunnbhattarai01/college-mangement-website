import React from "react";

function Course() {
  const alumniList = [
    {
      name: "Nojal Koirala",
      position: "Head of BBA Department",
      email: "wait@gmail.com",
      phone: "9841234567",
      image: "/bharat.png",
    },
    {
      name: "Bharat Khnal",
      position: "Head of IT Department",
      email: "bharatkhnal@gmail.com",
      phone: "9801234567",
      image: "./bharat.png",
    },
    {
      name: "Wait",
      position: "Head of BBA-BI",
      email: "wait@gmail.com",
      phone: "9811123456",
      image: "/bharat.png",
    },
    {
      name: "Bharat Khnal",
      position: "Head of IT Department",
      email: "bharatkhnal@gmail.com",
      phone: "9801234567",
      image: "./bharat.png",
    },
    {
      name: "Bharat Khnal",
      position: "Head of IT Department",
      email: "bharatkhnal@gmail.com",
      phone: "9801234567",
      image: "./bharat.png",
    },
    {
      name: "Bharat Khnal",
      position: "Head of IT Department",
      email: "bharatkhnal@gmail.com",
      phone: "9801234567",
      image: "./bharat.png",
    }
  ];

  return (
    <div className="alumni-section px-6 py-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center mb-10">Our Proud Alumni</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {alumniList.map((alumni, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-colors duration-300"
          >
            <img
              src={alumni.image}
              alt={alumni.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-400"
            />
            <h2 className="text-2xl font-semibold">{alumni.name}</h2>
            <p className="mt-2 text-blue-700 dark:text-blue-400 font-medium">{alumni.position}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{alumni.email}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{alumni.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
