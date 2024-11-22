import React from "react";
import Image from "next/image";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

const Card = ({ text, imageSrc, name, username }: any) => {
  return (
    <div className="px-12 py-8 flex flex-col gap-6 border border-[#fafafa] rounded-xl shadow-[0_7px_14px_#eaeaea] bg-white text-black">
      <p>{text}</p>

      <div className="flex items-center gap-2">
        <Image src={imageSrc} alt="logo" width={50} height={50} />
        <div>
          <h4>{name}</h4>
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
};
function Testimonials() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="title">Exceptional service!</h2>
          <div className="text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            Their customer support is unmatched. I had a few questions, and they
            took the time to explain everything clearly and patiently.
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-[30px] [mask-image:linear-gradient(to_bottom,transparent,black,black,black,black,transparent)]">
          <div className="flex flex-col gap-8">
            {firstCol.map((user) => (
              <Card {...user} />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {secondCol.map((user) => (
              <Card {...user} />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {thirdCol.map((user) => (
              <Card {...user} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
