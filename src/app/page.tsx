import JobCard from "@/components/experience/JobCard";
import ExperienceCard from "@/components/GalleryCard";
import { EXPERIENCE } from "@/utils/datas";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col gap-56  ">
      <div className="aboutme  grid grid-cols-2 items-center justify-center ">
        <div className="">
          <Image
            src={"/mobi.png"}
            alt="mobi"
            width={1000}
            height={1000}
            className="block "
            loading={"lazy"}
          />
        </div>
        <div className="leading-8">
          <h1 className="relative cursor-pointer font-medium text-2xl text-foreground leading-10">
            I'm Mobina Moghadam
          </h1>
          <br />
          <p className="!text-lg !font-light !leading-8 text-foreground">
            I'm Mobina Moghadam I've been a designer for over 6 years, and all
            my interest in life is about creating and bringing order. Seeing
            better is one of the most important tools for humans to easily deal
            with issues. In this busy world, we need to see better to find the
            right path. Design allows me to accompany others on this journey.I
            am passionate about UI/UX design and have had the privilege of
            contributing to user communication and interaction in the products
            I've worked on. I continually seek to expand my knowledge in this
            field.
          </p>{" "}
          <br />
          <p className="!text-lg !font-light !leading-8 text-foreground">
            I've been a designer for over 6 years, and all my interest in life
            is about creating and bringing order. Seeing better is one of the
            most important tools for humans to easily deal with issues. In this
            busy world, we need to see better to find the right path. Design
            allows me to accompany others on this journey.I am passionate about
            UI/UX design and have had the privilege of contributing to user
            communication and interaction in the products I've worked on. I
            continually seek to expand my knowledge in this field.
          </p>
          <br />
          <p className="!text-lg !font-light !leading-8 text-foreground">
            I've been a designer for over 6 years, and all my interest in life
            is about creating and bringing order.
          </p>
        </div>
      </div>
    </div>
  );
}
