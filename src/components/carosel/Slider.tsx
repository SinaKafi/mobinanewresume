// "use client";
// import { sliderSettings } from "@/utils/slider";
// import Image from "next/image";
// import Slider from "react-slick";

// const ImageSlider = ({ array = [] }: { array?: string[] }) => {
//   const totalImages = array.length;

//   const dynamicSliderSettings = {
//     ...sliderSettings,
//     infinite: totalImages > 1, // Disable infinite loop when there's only one image
//     swip: totalImages > 1,
//     slidesToShow: totalImages == 3 ? 2.5 : totalImages, // Adjust dynamically based on the number of images
//     centerMode: totalImages == 1,
//   };

//   return (
//     <div>
//       <Slider {...dynamicSliderSettings}>
//         {array?.map((image) => (
//           <div className="!appearance-none p-2 outline-none   " key={image}>
//             <Image
//               src={image}
//               alt="Image Description"
//               className="mx-auto aspect-square object-fill"
//               width={550}
//               height={550}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;
"use client";
import { sliderSettings } from "@/utils/slider";
import Image from "next/image";
import Slider from "react-slick";

const ImageSlider = ({ array = [] }: { array?: string[] }) => {
  const totalImages = array.length;

  const dynamicSliderSettings = {
    ...sliderSettings,
    infinite: totalImages > 1, // Disable infinite loop when there's only one image
    swip: totalImages > 1,
    slidesToShow: totalImages === 3 ? 2.5 : totalImages, // Adjust dynamically based on the number of images
    centerMode: false,
  };

  return (
    <div>
      <Slider {...dynamicSliderSettings}>
        {array?.map((image) => (
          <div
            className="w-full !appearance-none p-2 outline-none "
            key={image}
          >
            <div className="max-w-[25rem] max-h-[25rem] relative  aspect-square w-full mx-auto bg-gray-200 overflow-hidden rounded-lg">
              <Image
                src={image}
                alt="Image Description"
                className="object-cover !mx-auto w-full"
                fill // Makes it responsive within its container
                priority
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
