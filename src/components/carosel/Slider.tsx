"use client";
import { sliderSettings } from "@/utils/slider";
import Image from "next/image";
import { ComponentType } from "react";
import Slider from "react-slick";
import { Settings } from "react-slick"; // Import the Settings type

const ImageSlider = ({ array = [] }: { array?: string[] }) => {
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
        {array?.map((image) => (
          <div
            className="w-full !appearance-none p-2 outline-none "
            key={image}
          >
            <div className="max-w-[23rem] max-h-[23rem] relative  aspect-square w-full mx-auto bg-gray-200 overflow-hidden rounded-lg">
              <Image
                src={image}
                alt="Image Description"
                className="object-cover !mx-auto w-full h-full"
                fill // Makes it responsive within its container
                priority
              />
            </div>
          </div>
        ))}
      </ReactSlickSlider>
    </div>
  );
};

export default ImageSlider;
