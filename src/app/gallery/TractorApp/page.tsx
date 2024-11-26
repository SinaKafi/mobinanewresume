// import React from "react";

// function page() {
//   return (
//     <div>
//       <div className="flex flex-col gap-8">
//         <h1 className="text-2xl font-medium text-gray2">
//           Tractor Fan Club App
//         </h1>
//         <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//           The Tractor fan app was designed as an extension of the Tractor
//           website, created to provide fans with convenient, real-time access to
//           news, updates, and activities related to their favorite team. The app
//           aimed to simplify and enhance the fan experience, ensuring a seamless
//           connection between users and the team they love. Its development was
//           centered around creating a user-friendly platform that addressed
//           practical needs while fostering a deeper emotional bond between fans
//           and the team.
//         </p>
//         <h1 className="text-lg font-medium text-gray2">Problem statements</h1>
//         <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//           The client's core requirements included a straightforward ticket
//           purchasing system and real-time match updates. As the product
//           designer, I approached these needs with a user-centered perspective.
//         </p>
//         <h1 className="text-lg font-medium text-gray2">What we did</h1>
//         <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//           Through research and user feedback analysis, I identified pain points
//           in previous ticketing processes and developed a smooth, intuitive
//           ticket purchasing flow. This ensured that users could quickly and
//           effortlessly buy tickets without frustration, improving their overall
//           experience.   <br />
//           In addition to ticketing, I focused on designing features to deliver
//           real-time match updates, enabling fans to stay informed during games.
//           To enhance user engagement, I introduced interactive elements such as
//           polls, game highlights, and fan forums, transforming the app into a
//           dynamic space where fans could actively participate and share their
//           enthusiasm.
//         </p>
//         <h1 className="text-lg font-medium text-gray2">Achievements</h1>
//         <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//           One of the most rewarding outcomes of this project was creating an app
//           that became an essential tool for Tractor fans. Beyond its
//           functionality, the app strengthened the sense of community among fans,
//           making them feel like an integral part of the team’s journey. By
//           bridging the gap between the team and its supporters, the app
//           successfully delivered both practical solutions and an emotional
//           connection that resonated deeply with its users.  <br />
//         </p>
//         <p className="leading-7 text-lg whitespace-normal text-justify font-light">
//           This project reflects my commitment to designing products that not
//           only meet functional requirements but also create meaningful and
//           memorable experiences for users.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default page;
import ImageSlider from "@/components/carosel/Slider";
import ExperienceCard from "@/components/GalleryCard";
import { DESIGNED } from "@/utils/datas";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col justify-between">
      <div className="w-full overflow-x-scroll overflow-y-hidden flex items-center justify-center space-x-5">
        <ImageSlider>
          {DESIGNED.find((item) => item.id == 10)?.images?.map((imaged) => (
            // <div className="w-full">
            <Image
              src={imaged}
              alt="asd"
              width={500}
              height={300}
              className="w-full object-cover"
            />
            // </div>
          ))}
        </ImageSlider>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-xl md:text-2xl font-medium text-gray2">
          Tractor Fan Club App
        </h1>
        <p className="leading-6 md:leading-7 text-base md:text-lg text-gray2 text-justify font-light">
          The Tractor fan app was designed as an extension of the Tractor
          website, created to provide fans with convenient, real-time access to
          news, updates, and activities related to their favorite team. The app
          aimed to simplify and enhance the fan experience, ensuring a seamless
          connection between users and the team they love. Its development was
          centered around creating a user-friendly platform that addressed
          practical needs while fostering a deeper emotional bond between fans
          and the team.
        </p>
        <h1 className="text-lg md:text-xl font-medium text-gray2">
          Problem statements
        </h1>
        <p className="leading-6 md:leading-7 text-base md:text-lg text-gray2 text-justify font-light">
          The client's core requirements included a straightforward ticket
          purchasing system and real-time match updates. As the product
          designer, I approached these needs with a user-centered perspective.
        </p>
        <h1 className="text-lg md:text-xl font-medium text-gray2">
          What we did
        </h1>
        <p className="leading-6 md:leading-7 text-base md:text-lg text-gray2 text-justify font-light">
          Through research and user feedback analysis, I identified pain points
          in previous ticketing processes and developed a smooth, intuitive
          ticket purchasing flow. This ensured that users could quickly and
          effortlessly buy tickets without frustration, improving their overall
          experience.
          <br />
          In addition to ticketing, I focused on designing features to deliver
          real-time match updates, enabling fans to stay informed during games.
          To enhance user engagement, I introduced interactive elements such as
          polls, game highlights, and fan forums, transforming the app into a
          dynamic space where fans could actively participate and share their
          enthusiasm.
        </p>
        <h1 className="text-lg md:text-xl font-medium text-gray2">
          Achievements
        </h1>
        <p className="leading-6 md:leading-7 text-base md:text-lg text-gray2 text-justify font-light">
          One of the most rewarding outcomes of this project was creating an app
          that became an essential tool for Tractor fans. Beyond its
          functionality, the app strengthened the sense of community among fans,
          making them feel like an integral part of the team’s journey. By
          bridging the gap between the team and its supporters, the app
          successfully delivered both practical solutions and an emotional
          connection that resonated deeply with its users.
        </p>
        <p className="leading-6 md:leading-7 text-base md:text-lg text-gray2 text-justify font-light mb-10">
          This project reflects my commitment to designing products that not
          only meet functional requirements but also create meaningful and
          memorable experiences for users.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-center mx-auto border-t-2 border-gray2">
        {DESIGNED.filter((item) => item.id !== 10)?.map((item) => (
          <ExperienceCard {...item} key={item.title + item.id} hideTitle />
        ))}
      </div>
    </div>
  );
}

export default Page;
