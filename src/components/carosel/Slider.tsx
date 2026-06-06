"use client";
import { sliderSettings } from "@/utils/slider";
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
  const totalImages = array.length;

  const dynamicSliderSettings = {
    ...sliderSettings,
    infinite: totalImages > 1, // Disable infinite loop when there's only one image
    swip: totalImages > 1,
    slidesToShow: totalImages === 3 ? 2.5 : totalImages, // Adjust dynamically based on the number of images
    centerMode: false,
    accessibility: true,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    // swipeToSlide: true,

    pauseOnHover: false,
  };
  type SliderProps = Settings & {
    children?: React.ReactNode;
    ref?: React.Ref<Slider>;
  };
  const ReactSlickSlider = Slider as unknown as ComponentType<SliderProps>;

  return (
    <div>
      <ReactSlickSlider {...dynamicSliderSettings}>
        {array?.map((image, index) => (
          <div
            className="w-full !appearance-none p-2 outline-none "
            key={image}
          >
            <div className="max-w-[23rem] max-h-[23rem] relative  aspect-square w-full mx-auto bg-gray-200 overflow-hidden rounded-lg">
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
            </div>
          </div>
        ))}
      </ReactSlickSlider>
    </div>
  );
};

export default ImageSlider;
