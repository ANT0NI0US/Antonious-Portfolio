export const creationProjects = [
  {
    id: 100,
    category: "creation",
    title: "Darf (Invitation Management System)",
    imgUrl: "https://i.ibb.co/Zp9CrcTM/Darf.webp",
    description:
      "Darf allows users to create and share personalized online invitations in just a few clicks. It's fast, convenient, and helps save time and effort.",
    keyObjectives: [
      "Build a fully functional and user-friendly system to manage invitation creation and distribution.",
      "Simplify a complex workflow by transforming it into a clean, reusable, and scalable React-based solution.",
      "Integrate bilingual support (Arabic and English) through i18n to serve a diverse user base.",
      "Provide consistent UI/UX elements across the application with a polished look and feel aligned with the brand.",
    ],
    challengesSolved: [
      "Handled a poorly structured and unorganized codebase, which lacked modularity and maintainability.",
      "Tackled the steep learning curve of Fabric.js, which was used extensively in the project despite limited documentation and resources.",
      "Replaced an inconsistent toast system with react-hot-toast to align with the app’s design aesthetics and color scheme.",
      "Faced difficulty in finding relevant solutions through conventional documentation, leading to intensive use of AI tools (ChatGPT, Cursor, DeepSeek) for technical discovery.",
      "Resolved performance bottlenecks by minimizing unnecessary component re-renders and reducing the number of components in the DOM tree.",
    ],
    responsibilities: [
      "Refactored the existing architecture by creating reusable components and converting bloated structures into clean, modular code.",
      "Reduced excessive component count (~700–800) significantly by restructuring logic and separating concerns efficiently.",
      "Wrote clear and consistent code comments to improve readability and maintainability for future developers.",
      "Integrated i18n for seamless bilingual support throughout the application.",
      "Unified the structure of section headers to deliver a cohesive layout experience.",
      "Applied custom logic for Fabric.js canvas manipulation to handle dynamic user inputs for invitation designs.",
      "Managed design constraints and user permissions (admin vs. regular users) using conditional logic within the editor.",
      "Conducted thorough cross-browser and cross-device testing to ensure responsive design compatibility.",
    ],
    keyOutcomes: [
      "Achieved a 40% reduction in user effort by streamlining the invitation creation process and automating repetitive tasks.",
      "Significantly improved code readability and scalability, paving the way for future features and enhancements.",
      "Delivered a visually consistent and polished user interface, increasing user satisfaction and engagement.",
      "Enhanced internal collaboration by writing maintainable code with extensive inline documentation.",
      "Successfully implemented an advanced editor powered by Fabric.js, despite limited external support or tutorials.",
      "Demonstrated high self-sufficiency and proactive research capabilities through intensive use of AI-assisted development tools.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/SwYYVC8/react.webp",
        url: "https://react.dev/",
        alt: "React",
      },
      {
        src: "https://i.ibb.co/ckn2DN2/HTML5.webp",
        url: "https://www.w3schools.com/html/",
        alt: "HTML5",
      },
      {
        src: "https://i.ibb.co/yXxpkMk/CSS.webp",
        url: "https://www.w3schools.com/css/",
        alt: "CSS3",
      },
      {
        src: "https://i.ibb.co/VNpdqLX/javascript.webp",
        url: "https://www.w3schools.com/js/",
        alt: "Javascript",
      },
      {
        src: "https://i.ibb.co/WyVJpw0/tailwind.png",
        url: "https://tailwindcss.com/",
        alt: "Tailwind CSS",
      },
      {
        src: "https://i.ibb.co/phvgSzx/react-router-dom.webp",
        url: "https://reactrouter.com/",
        alt: "react-router-dom",
      },
      {
        src: "https://i.ibb.co/wCDsh5n/react-hook-form.webp",
        url: "https://react-hook-form.com/",
        alt: "react-hook-form",
      },
      {
        src: "https://i.ibb.co/HfnF8CFt/i18n.webp",
        url: "https://react.i18next.com/",
        alt: "react-i18next",
      },
      {
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        url: "https://redux.js.org/",
        alt: "Redux",
      },
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        url: "https://vite.dev/",
        alt: "vite",
      },
    ],
    keyFeatures: [
      {
        title: "Customizable Canvas with Fabric.js",
        description:
          "Allowed users to edit stickers, logos, and text directly on a live preview canvas.",
      },
      {
        title: "Reusable Components Architecture",
        description:
          "Boosted scalability and maintainability across the project.",
      },
      {
        title: "Bilingual Support (Arabic & English)",
        description:
          "Full localization using i18n with RTL/LTR layout switching.",
      },
      {
        title: "Theme-Aware Toast Notifications",
        description:
          "Used react-hot-toast to reflect brand colors and maintain consistent styling.",
      },
      {
        title: "Inline Comments & Clean Code",
        description: "Enhanced developer clarity and future maintainability.",
      },
      {
        title: "Admin-Specific Canvas Controls",
        description:
          "Ensured restricted functionalities only accessible to admin users.",
      },
      {
        title: "Optimized Performance",
        description:
          "Reduced unnecessary renders and heavy state updates by isolating logic efficiently.",
      },
      {
        title: "AI-Powered Research Approach",
        description:
          "Resolved complex implementation gaps using ChatGPT, Cursor, and DeepSeek.",
      },
    ],
  },
];
