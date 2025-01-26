export const EXPERIENCE = [
  {
    name: "DARIC HOLDING",
    role: "PRODUCT DESIGNER",
    description: `As the Senior UI/UX Designer at Daric Holding, which includes subsidiaries such as Tara Safar Airlines and Tractor Sports Club, I have been responsible for:
            - Enhancing the design of the Tractor Football Club fan website.
            - Designing the Tractor mobile application.
            - Developing the ticketing website for the team.
        Through this role, I have gained significant insights into understanding football fans, identifying user needs for supporting a sports team, analyzing ticket sales processes, and creating seamless user journeys to meet the expectations of app and website users.
      `,
    fromDate: "2024",
    toDate: "NOW",
    id: 6,
  },
  {
    name: "IranFava Gostaresh",
    role: "SENIOR UI/UX DESIGNER",
    description: `I joined the team as a UI designer and was later promoted to lead the UI design team as a supervisor. The company specialized in designing and delivering e-commerce websites for major automotive companies such as Iran Khodro and Saipa. It also developed dashboards and systems to streamline processes for employees and managers of large corporations like Iran Khodro.
        Key projects include:
        - Vehicle Sales System.
        - Iran Khodro’s international website.
        - Employee Health Dashboard for Iran Khodro.
        - Iran Fava Expansion Company website.
        - Passenger and Driver Apps for Iran Khodro’s services.
        These experiences significantly deepened my understanding of the automotive industry, its users, and the workforce in such large-scale organizations.
      `,
    fromDate: "2023",
    toDate: "2024",
    id: 5,
  },
  {
    name: "Alinland",
    role: "UI/UX DESIGNER",
    description: `I worked as a UI/UX designer at Alinland, a leading e-commerce company offering a diverse range of products to meet everyday needs. The platform catered to users from all walks of life, including those with varying levels of familiarity with online shopping.
        Responsibilities included designing intuitive, user-friendly interfaces to provide a seamless and accessible experience. This required a deep understanding of user behavior and challenges they might face. I focused on creating clear navigation paths and streamlined workflows to ensure users could easily find and purchase what they needed.
        This role reinforced the importance of empathy and simplicity in crafting digital experiences.
      `,
    fromDate: "2022",
    toDate: "2023",
    id: 4,
  },
  {
    name: "KARAFS",
    role: `SENIOR GRAPHIC DESIGNER 
     UI DESIGNER`,
    description: `Karafs was the starting point for my dreams of product design. I joined as a Senior Graphic Designer, transitioning into UI and visual design over time. Initially focused on graphic design, I gradually created UI elements for Karafs’ products.
        This role taught me the importance of brand personality and user personas in designing empathetically and fostering deeper connections between products and their audiences.
      `,
    fromDate: "2021",
    toDate: "2023",
    id: 3,
  },
  {
    name: "Erfan Salamat",
    role: "PRODUCT DESIGNER",
    description: `At Erfan Salamat Company, I began my career as a graphic designer on a freelance basis. Tasks included creating motion graphic videos, designing social media posts, and handling print-related projects. This role allowed me to explore and develop diverse skills across visual communication.
      `,
    fromDate: "2020",
    toDate: "2021",
    id: 2,
  },
  {
    name: "FREELANCE",
    role: "PRODUCT DESIGNER",
    // description: `My freelance journey began during university, where I worked on diverse artistic projects that helped shape my skills. I designed theater posters, crafted book illustrations, and took on various visual design tasks.
    //     These early experiences honed my artistic skills and taught valuable lessons in meeting deadlines, understanding client expectations, and adapting designs to different mediums.
    //   `,
    description: `My freelance journey began during my university years and even earlier, serving as the foundation of my passion for visual design and creative expression. During this period, I had the opportunity to work on a diverse range of artistic projects that helped shape my skills and creative approach.
                  I designed visually compelling theater posters, crafted illustrations for books and magazines, and took on various visual design tasks that required a blend of creativity and technical expertise. 
                  Each project allowed me to explore different styles and refine my understanding of composition, color, and storytelling through visuals.
                  These early experiences not only honed my artistic skills but also taught me valuable lessons in meeting deadlines, understanding client expectations, and adapting designs to fit different mediums. This phase of my career played a crucial role in building my confidence as a designer and set the stage for my transition into more specialized roles in graphic and UI/UX design.`,
    fromDate: "2018",
    toDate: "NOW",
    id: 1,
  },
];

export const DESIGNED: {
  title: string;
  cover: string;
  id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  route: string;
  images: Required<string[]>;
}[] = [
  {
    title: "Tractor Fan Club App",
    cover: "/designed/TractorFanClubApp.png",
    id: 9,
    route: "TractorApp",
    images: [
      "/works/tractor app/1.png",
      "/works/tractor app/2.png",
      "/works/tractor app/3.png",
    ],
  },
  {
    title: "Tractor Fan Club Website",
    cover: "/designed/TractorFanClubWebsite.png",
    id: 8,
    route: "TractorWeb",
    images: [
      "/works/tractor web/1.png",
      "/works/tractor web/2.png",
      "/works/tractor web/3.png",
    ],
  },
  {
    title: "Namikhodro E-commerce Website",
    cover: "/designed/NamikhodroE-commerceWebsite.png",
    id: 7,
    route: "NamikhodroWeb",
    images: ["/works/namikhodro website/1.png"],
  },
  {
    title: "Wellowork Health App",
    cover: "/designed/WelloworkHealthApp.png",
    id: 6,
    route: "WelloworkApp",
    images: ["/works/wellowork app/1.png", "/works/wellowork app/2.png"],
  },
  {
    title: "Wellowork Website",
    route: "WelloworkWeb",
    cover: "/designed/WelloworkWebsite.png",
    images: ["/works/wellowork website/1.png"],
    id: 5,
  },
  {
    title: "Irankhodro Health Dashboard",
    route: "IrankhodroHealth",
    cover: "/designed/IrankhodroHealthDashboard.png",
    images: ["/works/irankhodro health dashboared/1.png"],
    id: 4,
  },
  {
    title: "Alyajosh Task Manager App",
    route: "Alyajosh",
    cover: "/designed/AlyajoshTaskManagerApp.png",
    images: [
      "/works/aryajoosh task manager/1.png",
      "/works/aryajoosh task manager/2.png",
    ],
    id: 3,
  },
  {
    title: "Moeinkhodro E-commerce Website",
    route: "Moeinkhodro",
    cover: "/designed/MoeinkhodroE-commerceWebsite.png",
    images: ["/works/moein khodro website/1.png"],
    id: 2,
  },
  {
    title: "Food E-commerce Landing",
    route: "Food",
    cover: "/designed/FoodE-commerceLanding.png",
    images: ["/works/food eccommece/1.png"],
    id: 1,
  },
];

// export const PROJECTS = [
//   {
//     id: 6,
//     title: `WoloWork Healthcare and Social Services Application and Website`,
//     description: `This project was recognized as one of the top-performing initiatives at the prestigious <b>Plug and Play</b> event, showcasing its innovative approach and impact. Currently, it is under review for further development and potential collaboration opportunities, emphasizing its relevance and value in the industry.`,
//   },
//   {
//     id: 5,
//     title: `E-commerce Websites for the Automotive Industry`,
//     description: `The projects include the design and development of websites for reputable and well-known companies such as Nami Khodro, Sperlos, Saipa, Kerman Khodro, and many others in the automotive industry. Each project was executed with a strong focus on delivering exceptional user experiences, professional visual design, and addressing the unique needs of each brand. These collaborations not only reflect the trust these companies placed in my skills and expertise but also provided valuable opportunities to gain deeper insights into the automotive industry and its users' demands.`,
//   },
//   {
//     id: 4,
//     title: `Adrinnex Real Estate Blockchain Project`,
//     description: `A cutting-edge blockchain-based platform designed to revolutionize tokenized real estate investments. This platform enables users to seamlessly invest in property assets using blockchain technology, ensuring transparency, security, and accessibility. The app version of this platform, which focuses on providing a user-friendly and intuitive experience, is currently in the final stages of design and is set to launch soon, offering an innovative approach to real estate investment.`,
//   },
//   {
//     id: 3,
//     title: `New and Used Car Sales Platform`,
//     description: `A dynamic platform designed for the buying and selling of both new and used cars, offering a seamless and efficient user experience. Initially launched as a comprehensive website, the platform allows users to easily browse, compare, and transact vehicles with confidence. Plans for an app version are already in place, aiming to enhance the accessibility and convenience of the platform in later phases, providing an even more streamlined experience on mobile devices`,
//   },
//   {
//     id: 2,
//     title: `Organizational Task Manager Application`,
//     description: `An innovative app designed to simplify and optimize task management within organizations. It helps teams easily track tasks, prioritize them, and monitor progress in real-time. Its intuitive interface ensures easy use and efficient workflow management.`,
//   },
//   {
//     id: 1,
//     title: `Doctor Appointment Booking Application`,
//     description: `An intuitive application designed to streamline the process of booking appointments with doctors, providing users with a fast and efficient way to schedule consultations. The app allows users to easily browse through available doctors, check their availability, and book appointments in just a few steps. With its user-friendly interface, the app aims to reduce wait times and enhance the overall healthcare experience.`,
//   },
// ];
export const PROJECTS = [
  {
    // Icon: SVGFreelancerDoctor,
    Icon: "/freelance/freelanceIconHelth.svg",

    id: 6,
    title: `WoloWork Healthcare and Social Services Application and Website`,
    description: `This project was recognized as one of the top-performing initiatives at the prestigious <b className="!font-semibold">Plug and Play</b> event, showcasing its innovative approach and impact. Currently, it is under review for further development and potential collaboration opportunities, emphasizing its relevance and value in the industry.`,
  },
  {
    // Icon: SVGFreelancerCar,
    Icon: "/freelance/freelanceIconCar.svg",

    id: 5,
    title: `E-commerce Websites for the Automotive Industry`,
    description: `The projects include the design and development of websites for reputable and well-known companies such as Nami Khodro, Sperlos, Saipa, Kerman Khodro, and many others in the automotive industry. Each project was executed with a strong focus on delivering exceptional user experiences, professional visual design, and addressing the unique needs of each brand. These collaborations not only reflect the trust these companies placed in my skills and expertise but also provided valuable opportunities to gain deeper insights into the automotive industry and its users' demands.`,
  },
  {
    // Icon: SVGFreelancerHome,
    Icon: "/freelance/freelanceIconHome.svg",

    id: 4,
    title: `Adrinnex Real Estate Blockchain Project`,
    description: `A cutting-edge blockchain-based platform designed to revolutionize tokenized real estate investments. This platform enables users to seamlessly invest in property assets using blockchain technology, ensuring transparency, security, and accessibility. The app version of this platform, which focuses on providing a user-friendly and intuitive experience, is currently in the final stages of design and is set to launch soon, offering an innovative approach to real estate investment.`,
  },
  {
    // Icon: SVGFreelancerCar,
    Icon: "/freelance/freelanceIconCar.svg",

    id: 3,
    title: `New and Used Car Sales Platform`,
    description: `A dynamic platform designed for the buying and selling of both new and used cars, offering a seamless and efficient user experience. Initially launched as a comprehensive website, the platform allows users to easily browse, compare, and transact vehicles with confidence. Plans for an app version are already in place, aiming to enhance the accessibility and convenience of the platform in later phases, providing an even more streamlined experience on mobile devices`,
  },
  {
    // Icon: SVGFreelancerTask,
    Icon: "/freelance/freelanceIconTask.svg",

    id: 2,
    title: `Organizational Task Manager Application`,
    description: `An innovative app designed to simplify and optimize task management within organizations. It helps teams easily track tasks, prioritize them, and monitor progress in real-time. Its intuitive interface ensures easy use and efficient workflow management.`,
  },
  {
    // Icon: SVGFreelancerDoctor,
    Icon: "/freelance/freelanceIconHelth.svg",

    id: 1,
    title: `Doctor Appointment Booking Application`,
    description: `An intuitive application designed to streamline the process of booking appointments with doctors, providing users with a fast and efficient way to schedule consultations. The app allows users to easily browse through available doctors, check their availability, and book appointments in just a few steps. With its user-friendly interface, the app aims to reduce wait times and enhance the overall healthcare experience.`,
  },
];
