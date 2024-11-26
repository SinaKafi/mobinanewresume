// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className=" flex flex-col gap-56  ">
//       <div className="aboutme  grid grid-cols-2 items-center justify-center ">
//         <div className="">
//           <Image
//             src={"/mobi.png"}
//             alt="mobi"
//             width={1000}
//             height={1000}
//             className="block "
//             loading={"lazy"}
//           />
//         </div>
//         <div className="leading-8">
//           <h1 className="relative cursor-pointer font-medium text-2xl text-foreground leading-10">
//             I'm Mobina Moghadam
//           </h1>
//           <br />
//           <p className="!text-lg !font-light !leading-8 text-foreground">
//             I'm Mobina Moghadam I've been a designer for over 6 years, and all
//             my interest in life is about creating and bringing order. Seeing
//             better is one of the most important tools for humans to easily deal
//             with issues. In this busy world, we need to see better to find the
//             right path. Design allows me to accompany others on this journey.I
//             am passionate about UI/UX design and have had the privilege of
//             contributing to user communication and interaction in the products
//             I've worked on. I continually seek to expand my knowledge in this
//             field.
//           </p>{" "}
//           <br />
//           <p className="!text-lg !font-light !leading-8 text-foreground">
//             I've been a designer for over 6 years, and all my interest in life
//             is about creating and bringing order. Seeing better is one of the
//             most important tools for humans to easily deal with issues. In this
//             busy world, we need to see better to find the right path. Design
//             allows me to accompany others on this journey.I am passionate about
//             UI/UX design and have had the privilege of contributing to user
//             communication and interaction in the products I've worked on. I
//             continually seek to expand my knowledge in this field.
//           </p>
//           <br />
//           <p className="!text-lg !font-light !leading-8 text-foreground">
//             I've been a designer for over 6 years, and all my interest in life
//             is about creating and bringing order.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-28 lg:gap-56 px-4 md:px-8 lg:px-16 py-8">
      {/* About Me Section */}
      <div className="aboutme grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
        {/* Responsive Image Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/mobi.png"
            alt="Mobina Moghadam - UI/UX Designer"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="leading-relaxed">
          <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug">
            I'm Mobina Moghadam
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl font-light text-foreground">
            I've been a designer for over 6 years, and my passion lies in
            creating and bringing order. Seeing better is one of the most
            important tools for humans to deal with challenges. In this busy
            world, we need clarity to find the right path. Design enables me to
            guide others on this journey.
          </p>
          <p className="mt-4 text-base md:text-lg lg:text-xl font-light text-foreground">
            I am passionate about UI/UX design and have contributed to user
            communication and interaction in various projects. I continuously
            seek to expand my knowledge and skills in this field.
          </p>
          <p className="mt-4 text-base md:text-lg lg:text-xl font-light text-foreground">
            My interest in life revolves around creating order, and design
            allows me to make a meaningful impact.
          </p>
        </div>
      </div>
    </div>
  );
}
