import React from "react";
import { FaPhone } from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "Fr. Thomas Xavier",
    role: "Vicar",
    category: "SPIRITUAL DIRECTOR",
    image:
      "https://media.istockphoto.com/id/108162892/photo/priest-holding-bible.jpg?s=612x612&w=0&k=20&c=MTuRk11L3Sayb-NkeAhSXazVCWNrFJYAV2AD9ZJFA20=",
    location: "St. Mary's Parish",
    year: "Since 2020",
  },
  {
    id: 2,
    name: "Sr. Maria Therese",
    role: "Trustee",
    category: "PASTORAL CARE",
    image:
      "https://static01.nyt.com/images/2018/12/27/obituaries/27BECKETT1/27BECKETT1-superJumbo.jpg",
    location: "St. Mary's Parish",
    year: "Since 2021",
  },
  {
    id: 3,
    name: "Joseph Emmanuel",
    role: "Secretary",
    category: "MINISTRY",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg",
    location: "St. Mary's Parish",
    year: "Since 2022",
  },
];

const Leaders = () => {
  return (
    <section className="w-full bg-[#2f343a] py-16 md:py-24 mt-[64px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Responsive Grid Layout */}
        <div className="flex gap-2 md:gap-6 lg:gap-8 justify-center">
          {data.map((leader) => (
            <div
              key={leader.id}
              className="cursor-pointer flex-1 max-w-[260px] lg:max-w-[220px] "
            >
              <div className=" flex flex-col space-y-4 justify-between h-full">
                {/* Image */}
                <div className="relative bg-[#3d434a] border-2 border-primary p-1">
                  <div className="aspect-[3/4]   overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full  object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center flex flex-col justify-center items-center space-y-3">
                  <h3 className="font-serif text-sm md:text-2xl text-[#f5f3ef]">
                    {leader.name}
                  </h3>

                  <p className="text-white text-center  text-sm md:text-lg  font-bold bg-bglight px-2 py-1">
                    {leader.role}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-gray-50 text-sm ">
                    <FaPhone className="size-3 fill-green-500"/>
                    <span>996121833</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaders;
