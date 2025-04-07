import React from "react";
// import Edison from "../../public/images/Edison.jpg"

const Team = () => {
  const members = [
    {
      name: "Mr. Edison Uwihanganye",
      role: "Software Developer",
      image: "/images/Edison.jpg",
      description: "Experienced in building robust software solutions.",
    },
    {
      name: "Marie Claire Uwiringiyimana",
      role: "Web Developer",
      image: "/images/Claire.jpg",
      description: "Specializes in front-end development with a keen eye for design.",
    },
    {
      name: "Prof. Ntaganda Jean Marie",
      role: "Principal Investigator",
      image: "/images/Prof Ntaganda.jpeg",
      description: "Leading research with extensive experience in project management.",
    },
    {
      name: "Tuyishimire Devid",
      role: "Back-end Developer",
      image: "/images/David.png",
      description: "Expert in building scalable back-end systems.",
    },
  ];

  return (
    <section id="team" className="py-10 text-center bg-gray-50 dark:bg-gray-800">
      <h2 className="mb-6 text-3xl font-bold text-purple-600 dark:text-purple-400">Meet Our Team</h2>
      <div className="flex justify-center gap-4">
        {members.map((member, index) => (
          <div key={index} className="w-1/5 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-20 h-20 mx-auto rounded-full"
            />
            <h3 className="mt-2 font-semibold text-md dark:text-white">{member.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
