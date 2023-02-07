import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lakee Rawat is a Associate Technology L-1 in Publicis Sapient's Noida
          office. He joined Publicis Sapient in DEC-2021 .he got assigned a role
          in DTCC Project to create applications from scratch, configure
          existing systems with initiatives aimed at improving day-to-day
          operations. Before joining Publicis Sapient, Lakee Rawat mainly worked
          on Live projects as a frontend developer. He holds a Master's degree
          in Computer Science from the Banaras Hindu University.
        </p>

        <br />

        <p className="text-xl">
          In 2021, graduated from Banaras Hindu University with a degree in
          Master of Computer Application. After that, worked as a Front-end
          developer at Redcliffe Science Pvt. Ltd., where used to develop the
          Frontend Part of the Company's Official Website using React and Redux.
        </p>
      </div>
    </div>
  );
};

export default About;
