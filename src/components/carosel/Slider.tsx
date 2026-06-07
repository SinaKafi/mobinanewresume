"use client";
import { sliderSettings } from "@/utils/slider";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ComponentType } from "react";
import Slider from "react-slick";
import { Settings } from "react-slick"; // Import the Settings type

const SLIDE_SIZES =
  "(max-width: 480px) 100vw, (max-width: 800px) 50vw, (max-width: 1024px) 40vw, 23rem";

const ImageSlider = ({
  array = [],
  title,
}: {
  array?: string[];
  title?: string;
}) => {
  const reducedMotion = useReducedMotion();
  const totalImages = array.length;

  const dynamicSliderSettings = {
    ...sliderSettings,
    infinite: totalImages > 1, // Disable infinite loop when there's only one image
    swip: totalImages > 1,
    slidesToShow: totalImages === 3 ? 2.5 : totalImages, // Adjust dynamically based on the number of images
    centerMode: false,
    accessibility: true,
    adaptiveHeight: true,
    autoplaySpeed: 1500,
    // swipeToSlide: true,

    pauseOnHover: false,
  };
  type SliderProps = Settings & {
    children?: React.ReactNode;
    ref?: React.Ref<Slider>;
  };
  const ReactSlickSlider = Slider as unknown as ComponentType<SliderProps>;

  return (
    <ReactSlickSlider {...dynamicSliderSettings}>
      {array?.map((image, index) => (
        <div className="w-full !appearance-none p-2 outline-none" key={image}>
          <motion.div
            className="max-w-[23rem] max-h-[23rem] relative aspect-square w-full mx-auto bg-gray-200 overflow-hidden rounded-lg"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.08,
            }}
            whileHover={reducedMotion ? undefined : { scale: 1.02 }}
            data-aos="zoom-in"
            data-aos-delay={index * 60}
          >
            <Image
              src={image}
              alt={
                title
                  ? `${title} — screen ${index + 1}`
                  : `Portfolio screen ${index + 1}`
              }
              className="object-cover !mx-auto w-full h-full"
              fill
              sizes={SLIDE_SIZES}
              priority={index === 0}
            />
          </motion.div>
        </div>
      ))}
    </ReactSlickSlider>
  );
};

export default ImageSlider;
