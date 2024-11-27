import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 px-4 md:px-8 lg:px-16">
      <div className="aboutme grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
        {/* بخش تصویر */}
        <div className="relative w-full lg:!w-full  aspect-square md:!w-[75%] mx-auto">
          <Image
            src="/mobi.png"
            alt="Mobina Moghadam - UI/UX Designer"
            fill
            className="rounded-lg object-contain"
            priority
          />
        </div>

        {/* بخش متن */}
        <div className="leading-relaxed text-sm sm:text-base lg:text-lg">
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
      </div>
    </div>
  );
}
