import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 px-4 md:px-8 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center ">
        {/* grid grid-cols-1 lg:grid-cols-2 */}
        <div className="relative min-w-[50%] h-full w-full lg:!w-full mx-auto md:mb-16">
          <Image
            src="/mobi.png"
            alt="Mobina Moghadam - UI/UX Designer"
            className="rounded-lg aspect-square"
            width={1000}
            height={1000}
          />
        </div>

        <div className="h-full leading-relaxed text-sm sm:text-base lg:text-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            I'm Mobina Moghadam
          </h1>
          <p className="mt-4 text-gray-700">
            I'm a UI/UX designer, and I strongly believe that empathy is at the
            core of creating meaningful and effective designs. To truly
            understand and connect with users, a designer needs to develop a
            habit of observing everything in their surroundings with care and
            clarity, noticing the details that others might overlook. By
            immersing myself in this mindset, I’ve learned to see the world
            through the lens of the user, which helps me anticipate their needs
            and challenges.
          </p>
          <p className="mt-4 text-gray-700">
            I believe a great product designer anticipates user needs and
            delivers intuitive solutions. By observing my surroundings, I fuel
            creativity and design experiences that feel natural, engaging, and
            user-friendly.
          </p>
          <p className="mt-4 text-gray-700">
            I’ve been working in the design field for over 6 years. My journey
            started with exciting graphic design projects, which eventually led
            me to discover my passion for UI/UX design. For the past 3 years,
            I’ve been gaining hands-on experience in this field, and I’m truly
            passionate about creating intuitive and user-friendly interfaces.
            I’ve also had the privilege of being closely involved in user
            interactions and engagement for the products I’ve worked on, which
            has been incredibly rewarding.
          </p>
          <p className="mt-4 text-gray-700">
            I'm continuously seeking to expand my knowledge in this area.
          </p>
        </div>

        <div className="h-full flex flex-col gap-2">
          <h1 className="designHeading">Courses I took</h1>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="designTitleBold">userx academy:</span>
              <p className="designTitle pl-5">
                Comprehensive product design course.
              </p>
            </li>
            <li>
              <span className="designTitleBold">sevenlearn academy:</span>
              <p className="designTitle pl-5">
                Comprehensive user interface design course.
              </p>
            </li>{" "}
            <li>
              <span className="designTitleBold">invers school:</span>
              <p className="designTitle pl-5">Digital paintings. </p>
              <p className="designTitle pl-5">Stop motion. </p>
              {/* <p className="designTitle">Digital paintings , Stop motion </p> */}
            </li>
          </ul>
          {/* <p className="designTitle whitespace-nowrap">
            Comprehensive product design course (userx academy)
          </p>

          <p className="designTitle whitespace-nowrap">
            Comprehensive user interface design course (sevenlearn academy)
          </p>

          <p className="designTitle whitespace-nowrap">
            Digital paintings (invers school) Stop motion (invers school)
          </p> */}
        </div>
        <div className="h-full flex flex-col gap-2 ">
          <h1 className="designHeading">University education</h1>
          <p className="designTitle">
            I have a Bachelor's degree in graphic design, which has definitely
            played a big role in shaping my creative journey
          </p>
        </div>
      </div>
    </div>
  );
}
