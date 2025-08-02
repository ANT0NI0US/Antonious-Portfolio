export const smartGateProjects = [
  {
    id: 1,
    category: "smartGate",
    title: "Learning Management System (LMS)",
    imgUrl: "https://i.ibb.co/QFfkQ4y7/LMS.webp",
    description:
      "Engineered a multi-admin educational platform connecting students and administrators for efficient management of course materials, books, announcements, and schedules.",
    keyObjectives: [
      "Build a scalable and secure digital learning platform to serve over 10,000 users including students and admins.",
      "Streamline educational asset management (books, content, schedules) in one centralized system.",
      "Ensure secure usage through fine-grained role-based access.",
      "Improve operational workflows and reduce manual overhead for educational administrators.",
    ],
    challengesSolved: [
      "Achieved complete access security via strict role separation and permission validation.",
      "Structured large volumes of course content dynamically based on academic roles and levels.",
      "Reduced performance bottlenecks by efficiently fetching and caching data using TanStack Query.",
      "Ensured accessibility and performance consistency across devices through responsive UI implementation.",
    ],
    responsibilities: [
      "Led frontend development using React.js and Tailwind CSS, implementing clean and scalable UI components.",
      "Integrated backend services using TanStack React Query to manage data flow with optimized caching.",
      "Built a complete SPA experience with dynamic routing, state persistence, and optimized navigation.",
      "Created reusable components for forms, tables, modals, and data displays to maintain consistency and code reusability.",
      "Boosted frontend speed through lazy loading, code splitting, and component memoization.",
      "Collaborated closely with backend and design teams to align UI/UX with project goals.",
      "Participated in sprint planning and daily stand-ups to ensure alignment and timely delivery of tasks.",
      "Implemented responsive design across all major devices and screen sizes.",
      "Helped digitize traditional paper-based workflows into a modern web-based system, minimizing manual paperwork and ensuring structured data flow.",
    ],
    keyOutcomes: [
      "25% improvement in workflow efficiency reported by school admins.",
      "Maintained flawless access control post-deployment with zero security breaches reported.",
      "Reduced page load and navigation time significantly, enhancing the student experience.",
      "Enabled the system to be reused for other institutions within the organization with minimal modifications.",
      "Project delivered on time and within scope, adopted as the default LMS solution internally.",
      "Successfully transitioned from paper-based processes to a fully digital system, enhancing organization, traceability, and eco-friendliness.",
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
        src: "https://i.ibb.co/dJkTtBgX/Tanstack-Query.webp",
        url: "https://tanstack.com/query/latest",
        alt: "TanStack React Query",
      },
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        url: "https://vite.dev/",
        alt: "vite",
      },
    ],
    keyFeatures: [
      {
        title: "Role-Based Access Control (RBAC)",
        description:
          "Implemented a fully secure RBAC system that strictly separates permissions between admins and students, eliminating unauthorized access.",
      },
      {
        title: "Dynamic Content Management",
        description:
          "Enabled the upload and organization of educational content (books, PDFs, videos) categorized by course and academic level.",
      },
      {
        title: "Schedule Management System",
        description:
          "Developed tools to manage and visualize class schedules, assignments, and due dates — accessible by both roles with respective permissions.",
      },
      {
        title: "Responsive UI/UX Design",
        description:
          "Crafted a seamless and responsive user interface using Tailwind CSS, tailored to accommodate both desktop and mobile experiences.",
      },
      {
        title: "Data Layer Optimization with TanStack Query",
        description:
          "Used TanStack Query to efficiently fetch, cache, and sync server data, significantly reducing API load and improving frontend performance.",
      },
    ],
  },
  {
    id: 2,
    category: "smartGate",

    title: "ChatBot",
    imgUrl: "https://i.ibb.co/gthm3Hb/ChatBot.webp",
    // url: "https://chatbotv2.mygatein.com/#/login",
    description:
      "This is what I have done since a month after joining Smart Gate company, and I am not allowed to use the source code according to the current contract between us. This project allows any user, whether a company, organization, or any website, to integrate a chat feature on their platform. This chat can contain any desired content, such as messages or the addition of workdays, with the ability to specify the working hours. Additionally, users can define multiple pathways to enable them to choose the desired route. The platform also allows the creation of forms through which users can be asked various questions, and the collected data is recorded according to the preferences of the chat's creator. Furthermore, users can ask and respond to questions, add images for display, and download any data as per the preferences of the individual who built the interface.",
    keyObjectives: [
      "Provide a no-code solution that empowers any business (websites, companies, organizations) to embed a fully customizable chatbot into their platform.",
      "Allow users to build interactive conversation flows tailored to their operations — from customer support to lead generation.",
      "Enable dynamic control over working days, available hours, and user interaction logic.",
      "Offer flexible data collection via forms, with full export and customization options.",
    ],
    challengesSolved: [
      "Integrated React Quill to enable rich text editing inside the chatbot interface, giving creators more control over content formatting",
      "Built a dynamic flow editor that allows users to map and visualize custom conversation paths with branching logic.",
      "Addressed UX complexity by abstracting technical logic (like timing, user inputs, and conditionals) into intuitive visual controls.",
      "Reduced friction in user interactions by embedding form builders directly into chat flows, cutting data collection time by 15%.",
      "Solved the challenge of multilingual and multimedia support by enabling the addition of images, downloadable files, and flexible messaging.",
      "Tackled the challenge of adapting to unfamiliar technologies and incorporated them seamlessly into production.",
    ],
    responsibilities: [
      "Led the development of the chat interface and builder panel using React (Vite) and Tailwind CSS for high responsiveness and speed.",
      "Implemented an interactive flow editor and rich content editor using unfamiliar yet powerful libraries like React Flow and React Quill, adapting quickly to their architecture and limitations.",
      "Built the interactive flow builder, allowing conditional branching, user input handling, and previewing chat logic in real-time.",
      "Integrated features to define business hours and active days, dynamically impacting bot availability.",
      "Implemented a system for form creation, response validation, and custom question logic without coding.",
      "Ensured state consistency and persistence of chatbot configurations using Redux and local storage strategies.",
      "Added options to export data collected from user interactions in formats chosen by the chatbot creator.",
    ],
    keyOutcomes: [
      "Boosted platform engagement by 20% due to the interactive and personalized chatbot experience.",
      "Reduced average setup time for chat flows, leading to faster onboarding and quicker user success.",
      "Delivered a scalable architecture for chatbot customization that can be reused across different clients or verticals.",
      "Complied fully with company security policies, with no access to source code post-contract — maintaining IP protection.",
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
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        url: "https://redux.js.org/",
        alt: "Redux",
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
    ],
    keyFeatures: [
      {
        title: "Drag-and-Drop Workflow Builder",
        description:
          "Users can design unique chat paths using a visual editor, including questions, buttons, and conditions.",
      },
      {
        title: "Work Schedule Management",
        description:
          "Ability to define working days and time ranges when the chatbot is available or auto-responds.",
      },
      {
        title: "Advanced Form Creation",
        description:
          "Support for multi-step forms inside the chat, with customizable inputs (text, multiple choice, dates, etc.).",
      },
      {
        title: "Image and File Support",
        description:
          "Add visual elements or downloadable files within any chat flow step.",
      },
      {
        title: "Data Collection & Exporting",
        description:
          "Collected user data is saved and exportable in multiple formats based on the creator’s preferences.",
      },
      {
        title: "Multi-Use Embedding",
        description:
          "The chatbot can be integrated into any external platform or website via lightweight embedding scripts.",
      },
    ],
  },
  {
    id: 3,
    category: "smartGate",

    title: "Restico",
    imgUrl: "https://i.ibb.co/4PpHkc7/Restico.webp",
    // url: "https://restecho.portal.smartgate-egypt.com/",
    description:
      "A comprehensive cloud-based restaurant management platform designed to streamline and enhance various aspects of food and beverage businesses. Offering a user-friendly point-of-sale (POS) system, efficient inventory management, staff scheduling tools, robust analytics, and customer relationship management (CRM) features, Restico aims to optimize day-to-day operations. With support for various payment methods, detailed analytics for informed decision-making, and the flexibility of cloud-based accessibility, the platform provides a holistic solution for restaurants, cafes, and similar establishments to manage transactions, inventory, staff, and customer relations seamlessly.",
    keyObjectives: [
      "Design a cloud-based platform to help restaurants and cafes manage daily operations efficiently.",
      "Provide tools to handle staff schedules, transactions, inventory, and customer relationships — all in one system.",
      "Integrate real-time data reporting to support faster, data-driven decisions for restaurant managers.",
      "Support multiple payment methods and devices across branches through a web-based POS interface.",
    ],
    challengesSolved: [
      "Addressed the complexity of multi-module coordination by unifying inventory, employee activity, and transaction logs in one system.",
      "Implemented a role-sensitive interface for managers, cashiers, and staff to streamline their workflows and reduce friction.",
      "Introduced dynamic staff tracking and scheduling, improving visibility and reducing human error in shift assignments.",
      "Reduced internal delays and manual processes by 40% through process automation and real-time data syncing.",
      "Adapted to domain-specific problems like high-volume transaction management and inventory accuracy across different branches.",
    ],
    responsibilities: [
      "Led frontend development using React with Redux for complex state flows and Chakra UI for a clean, accessible interface.",
      "Built interfaces for POS systems, staff schedules, transaction logs, and inventory dashboards — each with modular components.",
      "Designed role-based dashboards with distinct permissions and views for admins, cashiers, and waitstaff.",
      "Integrated external APIs for payment methods and data syncing across branches.",
      "Focused on performance optimization and responsive design to ensure usability across tablets, kiosks, and desktops.",
    ],
    keyOutcomes: [
      "System adopted by 50+ restaurants, reducing operational delays by 40%.",
      "Empowered restaurant managers with access to real-time analytics and staff metrics.",
      "Created a modular and extensible frontend architecture, allowing easy expansion to future modules (like delivery or loyalty programs).",
      "Improved decision-making through actionable insights on sales trends, staff productivity, and inventory levels.",
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
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        url: "https://redux.js.org/",
        alt: "Redux",
      },
      {
        src: "https://i.ibb.co/QcWrxrY/chakra-ui.webp",
        url: "https://chakra-ui.com/",
        alt: "chakra Ui",
      },
      {
        src: "https://i.ibb.co/6cM3CLs/framer-motion.webp",
        url: "https://motion.dev/",
        alt: "framer-motion",
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
    ],
    keyFeatures: [
      {
        title: "Web-Based POS Interface",
        description:
          "Fast, reliable, and compatible with different devices for real-time order management and payments.",
      },
      {
        title: "Employee Tracking & Shift Scheduling",
        description:
          "Assign, edit, and monitor staff shifts with live status updates.",
      },
      {
        title: "Inventory Management",
        description:
          "Real-time tracking of ingredients, stock alerts, and usage reports.",
      },
      {
        title: "Multi-Role Access Control",
        description:
          "Customized dashboards and permissions based on the user's role in the restaurant.",
      },
      {
        title: "Advanced Analytics",
        description:
          "Visual reports on sales, transactions, customer behavior, and more.",
      },
      {
        title: "Cloud Accessibility",
        description:
          "Accessible from any location — enabling multi-branch control and 24/7 data sync.",
      },
      {
        title: "Flexible Payment Integration",
        description:
          "Supports cash, card, and online gateways via external API connectors.",
      },
    ],
  },
  {
    id: 4,
    category: "smartGate",

    title: "Invoice Management System",
    imgUrl: "https://i.ibb.co/99hd7339/invoice.webp",
    description:
      "Built a hierarchical platform for managing products, customers, and invoices, complete with user roles, branch management, and secure permissions. Streamlined invoice handling across multi-branch operations.",
    keyObjectives: [
      "Build a scalable web platform for managing invoices, customers, and product catalogs efficiently.",
      "Streamline the entire invoicing workflow — from invoice creation to client delivery — under one system.",
      "Implement robust user role and permission systems to separate concerns (e.g., accountant, admin, sales).",
      "Ensure data integrity and validation across customer details, invoice items, and tax calculations.",
    ],
    challengesSolved: [
      "Bridged the gap between technical implementation and financial domain knowledge by learning accounting fundamentals (e.g., debit/credit logic, tax invoice vs simplified invoice), enabling accurate UI behavior and calculations.",
      "Improved data entry accuracy by 30% through automated validation rules and real-time form error handling.",
      "Solved role conflict issues by architecting a secure multi-role access control system using Redux.",
      "Reduced UI complexity and improved usability by structuring reusable form components for dynamic invoice rows, product selectors, and customer inputs.",
      "Ensured consistent state synchronization across modules (invoices, clients, products) using Redux and a normalized store structure",
    ],
    responsibilities: [
      "Designed and developed the entire frontend using React and Tailwind CSS, adhering to scalability best practices.",
      "Managed global state using Redux Toolkit, including slices for users, invoices, products, and permissions.",
      "Built dynamic and validated forms for invoice creation, customer selection, and product assignment.",
      "Integrated conditional logic for role-based UI rendering (e.g., hiding admin-only sections from sales users).",
      "Applied component-level optimization strategies to enhance render performance.",
      "Implemented responsive design across all major devices and screen sizes.",
      "Integrated internationalization (i18n) with support for both Arabic and English, improving accessibility for a wider audience.",
      "Participated in sprint planning and daily stand-ups to ensure alignment and timely delivery of tasks.",
    ],
    keyOutcomes: [
      "Increased invoice data accuracy by 30%, minimizing manual errors and correction loops.",
      "Delivered a stable and secure invoice management system with support for multiple user roles.",
      "Significantly improved the efficiency of invoice creation, approval, and tracking processes.",
      "System adopted across multiple departments with plans to integrate with accounting APIs.",
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
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        url: "https://redux.js.org/",
        alt: "Redux",
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
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        url: "https://vite.dev/",
        alt: "vite",
      },
    ],
    keyFeatures: [
      {
        title: "Invoice Generator",
        description:
          "Create, update, and manage invoices with dynamic line items, taxes, and totals.",
      },
      {
        title: "Customer Management",
        description:
          "Add and manage clients with full contact and billing details, searchable and editable.",
      },
      {
        title: "Product Catalog",
        description:
          "Manage products and services with pricing and descriptions for quick invoice insertion.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description:
          "Separate interfaces and access logic for admins, accountants, and sales personnel.",
      },
      {
        title: "Live Form Validation",
        description:
          "Real-time field validation for invoice inputs (amounts, dates, client data) with error feedback.",
      },
      {
        title: "Reusable Form Components",
        description:
          "Modular form sections for invoice rows, dropdowns, inputs — optimized for scalability.",
      },
      {
        title: "Invoice Status Tracking",
        description:
          "Monitor invoice states (draft, sent, paid, overdue) for better workflow visibility.",
      },
    ],
  },
  {
    id: 5,
    category: "smartGate",

    title: "Playgrounds (B2C)",
    imgUrl: "https://i.ibb.co/r8s5YCj/b2c.webp",
    description:
      "Built a dual-version system (B2C) for playground reservations. The platform included admin management for owners and clients, real-time conversations, and reservation oversight.",
    keyObjectives: [
      "Build a B2C platform that connects playground owners and end-users through an intuitive booking interface.",
      "Provide tailored interfaces for clients (booking) and owners/admins (management) with clear role separation.",
      "Enable real-time communication between playground owners and users for inquiries and confirmations.",
      "Centralize reservation handling with live availability and tracking.",
    ],
    challengesSolved: [
      "Architected a system that cleanly separates business logic for two distinct user types with shared infrastructure.",
      "Built reliable real-time messaging infrastructure to streamline user-owner interactions.",
      "Prevented double-booking through live availability validation and calendar synchronization.",
      "Designed responsive and intuitive UX flows that serve both business owners and casual users equally well.",
    ],
    responsibilities: [
      "Designed and developed the frontend UI using React and Tailwind CSS, tailored for both user types (B2C).",
      "Implemented role-based rendering and routing logic to distinguish between client and owner dashboards.",
      "Developed a reusable real-time chat component integrated across multiple views.",
      "Created booking forms, availability calendars, and admin dashboards for schedule and payment tracking.",
      "Collaborated with backend developers to ensure secure data flow and real-time syncing (likely via sockets or polling).",
      "Communicated directly with product owners and design stakeholders to align on business and UI requirements.",
      "Collaborated with a cross-functional team including frontend developers, backend developers (.NET/SQL), UI/UX designers (Figma), data analysts, and project managers to deliver key features.",
      "Converted Figma designs into high-performance, pixel-perfect React components.",
      "Implemented responsive design across all major devices and screen sizes.",
      "Integrated internationalization (i18n) with support for both Arabic and English, improving accessibility for a wider audience.",
      "Participated in sprint planning and daily stand-ups to ensure alignment and timely delivery of tasks.",
    ],
    keyOutcomes: [
      "Shipped a production-ready dual-user system that balances both booking flow and owner-side operations.",
      "Enabled smoother client-owner interaction, reducing booking delays and conflicts.",
      "Digitized the full reservation process, cutting manual overhead and improving operational speed.",
      "Established a reusable architecture now serving as a blueprint for future venue reservation systems (e.g., event halls, sports courts).",
      "Supported both English and Arabic users with full bilingual UI using i18n and RTL handling.",
      "Applied smooth transitions, hover effects, and contextual tooltips to enhance user interaction.",
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
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        url: "https://redux.js.org/",
        alt: "Redux",
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
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        url: "https://vite.dev/",
        alt: "vite",
      },
    ],
    keyFeatures: [
      {
        title: "Dual Dashboards",
        description:
          "Separate experiences for playground owners and customers with tailored access and features.",
      },
      {
        title: "Live Chat / Messaging",
        description:
          "Instant messaging system enabling quick confirmations and efficient support handling.",
      },
      {
        title: "Reservation Calendar",
        description:
          "Interactive calendar for managing bookings, availability, and time slots.",
      },
      {
        title: "Admin Controls",
        description:
          "Playground owners can manage availability, edit listings, and review/reschedule reservations.",
      },
      {
        title: "Responsive UI",
        description:
          "Fully responsive design to serve mobile and desktop users seamlessly.",
      },
      {
        title: "Secure Role-Based Access",
        description:
          "Distinct login and access permissions for clients and playground admins.",
      },
    ],
    imageColleges: [
      {
        src: "https://i.ibb.co/v4SBhXY2/2-login-English.webp",
        alt: "login - ( English )",
      },
      {
        src: "https://i.ibb.co/1GN9Brr6/3-Login-Arabic.webp",
        alt: "Login - ( Arabic )",
      },
      {
        src: "https://i.ibb.co/21YW0N4n/4-Playgrounds-main.webp",
        alt: "Playgrounds - ( Main )",
      },
      {
        src: "https://i.ibb.co/FLpkkvDf/5-Playgrounds-playground-details.webp",
        alt: "Playgrounds - ( Playground Details )",
      },
      {
        src: "https://i.ibb.co/PsJBrL75/6-Playgrounds-Add-new-playground.webp",
        alt: "Playgrounds - ( Add New Playground )",
      },
      {
        src: "https://i.ibb.co/MxWhqWLK/7-Playgrounds-Edit-playground.webp",
        alt: "Playgrounds - ( Edit Playground )",
      },
      {
        src: "https://i.ibb.co/jP1T9k64/8-Playgrounds-Delete-playground.webp",
        alt: "Playgrounds - ( Delete Playground )",
      },
      {
        src: "https://i.ibb.co/yx6hfs4/9-Playgrounds-playground-pass-time.webp",
        alt: "Playgrounds - ( Playground Pass Time )",
      },
      {
        src: "https://i.ibb.co/tMCJCNxK/10-Playgrounds-reserve-a-playground.webp",
        alt: "Playgrounds - ( Reserve a Playground )",
      },
      {
        src: "https://i.ibb.co/zTGmxSGJ/11-Playground-Types-main.webp",
        alt: "Playground Types - ( Main )",
      },
      {
        src: "https://i.ibb.co/gLjnWCPT/12-Playground-Types-add-new-playground-type.webp",
        alt: "Playground Types - ( Add new playground type )",
      },
      {
        src: "https://i.ibb.co/5XhZLYCm/13-Playground-Types-edit-exist-playground-type.webp",
        alt: "Playground Types - ( Edit exist playground type )",
      },
      {
        src: "https://i.ibb.co/M5jh5BwH/14-Playground-Types-delete-exist-playground-type.webp",
        alt: "Playground Types - ( Delete playground type )",
      },
      {
        src: "https://i.ibb.co/3ypPtbfB/15-reservations-main.webp",
        alt: "Reservations - ( Main )",
      },
      {
        src: "https://i.ibb.co/JR8kM8t1/16-reservations-reservation-details.webp",
        alt: "Reservations - ( Reservation Details )",
      },
      {
        src: "https://i.ibb.co/Pbv09Bj/17-Messages-main.webp",
        alt: "Messages - ( Main )",
      },
      {
        src: "https://i.ibb.co/KjJcwnJv/18-Settings-main.webp",
        alt: "Settings - ( Main )",
      },
      {
        src: "https://i.ibb.co/3YCT0LPL/19-settings-edit-exist-user.webp",
        alt: "Settings - ( Edit exist user )",
      },
      {
        src: "https://i.ibb.co/b5vhdMYX/20-Exit-modal.webp",
        alt: "Exit - ( Modal )",
      },
    ],
  },
  {
    id: 6,
    category: "smartGate",

    title: "Playgrounds (B2B)",
    imgUrl: "https://i.ibb.co/8L0RxcXw/7-Playgrounds-Main-English.webp",
    description:
      "Booking system for field owners to list and manage availability and reservations.",
    keyObjectives: [
      "Develop a dedicated B2B platform for field owners to efficiently manage their playgrounds, bookings, and schedules.",
      "Offer a centralized interface for listing, editing, and tracking real-time availability.",
      "Replace traditional/manual booking processes with a smooth, self-service digital solution.",
      "Enhance operational control for business owners while ensuring ease of use.",
    ],
    challengesSolved: [
      "Built a flexible scheduling engine that allowed owners to define recurring or custom availability patterns.",
      "Addressed inconsistencies in reservation timing by validating overlapping time slots in real time.",
      "Simplified the UI/UX for non-technical users to update their listings without requiring backend knowledge.",
      "Enabled multi-field owners to manage all their playgrounds under one unified dashboard without redundancy.",
    ],
    responsibilities: [
      "Crafted a role-specific interface for field owners using React and Tailwind CSS, focusing on usability and clarity.",
      "Engineered dynamic forms to allow real-time creation/editing of available slots, booking windows, and field details.",
      "Managed global state and booking flows using Redux, ensuring predictable behavior across components.",
      "Designed modular UI components to streamline maintenance and future feature extensions.",
      "Integrated with backend APIs to fetch, display, and update real-time reservation data.",
      "Converted Figma designs into high-performance, pixel-perfect React components.",
      "Implemented responsive design across all major devices and screen sizes.",
      "Integrated internationalization (i18n) with support for both Arabic and English, improving accessibility for a wider audience.",
      "Participated in sprint planning and daily stand-ups to ensure alignment and timely delivery of tasks.",
    ],
    keyOutcomes: [
      "Digitized the entire reservation workflow, reducing admin time spent on manual bookings by over 40%.",
      "Increased engagement from field owners due to intuitive UX and effortless availability management.",
      "Achieved high system reliability with consistent booking accuracy and no overlaps.",
      "Provided a scalable architecture ready for integrating with B2C layers or third-party payment solutions.",
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
        src: "https://i.ibb.co/MVCh9Rx/Redux.webp",
        url: "https://redux.js.org/",
        alt: "Redux",
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
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        url: "https://vite.dev/",
        alt: "vite",
      },
    ],
    keyFeatures: [
      {
        title: "Field Listing Management",
        description:
          "Owners can create, update, and remove playgrounds with custom attributes (location, size, price, type).",
      },
      {
        title: "Availability Scheduler",
        description:
          "Visual calendar interface for managing booking slots — daily, weekly, or seasonal.",
      },
      {
        title: "Reservation Tracking Dashboard",
        description:
          "Monitor all upcoming, past, and canceled bookings in a structured and filterable view.",
      },
      {
        title: "Slot Conflict Detection",
        description:
          "Smart logic to prevent overlapping reservations and alert users to timing conflicts instantly.",
      },
      {
        title: "Responsive & Owner-Centric UI",
        description:
          "Built for mobile and desktop usage, tailored to business owners with minimal training needs.",
      },
      {
        title: "Redux-Based State Management",
        description:
          "Centralized handling of booking data, form states, and UI conditions.",
      },
    ],
    imageColleges: [
      {
        src: "https://i.ibb.co/qLmRzGnf/2-Login.webp",
        alt: "Login",
      },
      {
        src: "https://i.ibb.co/RTW4MYzG/3-Forget-Password-Email-Checkout.webp",
        alt: "Forget-Password-Email-Checkout",
      },
      {
        src: "https://i.ibb.co/23qvpryK/4-Forget-Password-Send-OTP.webp",
        alt: "Forget-Password-Send-OTP",
      },
      {
        src: "https://i.ibb.co/cXhY0nNt/5-Forget-Password-Reset-Password.webp",
        alt: "Forget-Password-Reset-Password",
      },
      {
        src: "https://i.ibb.co/7dwXW6hH/6-Playgrounds-Dashboard.webp",
        alt: "Playgrounds-Dashboard",
      },
      {
        src: "https://i.ibb.co/8L0RxcXw/7-Playgrounds-Main-English.webp",
        alt: "Playgrounds-Main-English",
      },
      {
        src: "https://i.ibb.co/Fb7Q2XfG/8-Playgrounds-Main-Arabic.webp",
        alt: "Playgrounds-Main-Arabic",
      },
      {
        src: "https://i.ibb.co/R4VsYvDQ/9-Playgrounds-Add-Playground.webp",
        alt: "Playgrounds-Add-Playground",
      },
      {
        src: "https://i.ibb.co/RTcvcbGC/10-Playgrounds-Add-Playground-Validations.webp",
        alt: "Playgrounds-Add-Playground-Validations",
      },
      {
        src: "https://i.ibb.co/qMXR99QZ/11-Playgrounds-Edit-Playground.webp",
        alt: "Playgrounds-Edit-Playground",
      },
      {
        src: "https://i.ibb.co/9HFYm2dV/12-Playgrounds-Delete-Playground.webp",
        alt: "Playgrounds-Delete-Playground",
      },
      {
        src: "https://i.ibb.co/Fqs2CsS3/13-Playgrounds-Playgrounds-Owners-main.webp",
        alt: "Playgrounds-Playgrounds-Owners-main",
      },
      {
        src: "https://i.ibb.co/dsPF2WD0/14-Playgrounds-Playgrounds-Owners-mobile-responsive-main.webp",
        alt: "Playgrounds-Playgrounds-Owners-mobile-responsive-main",
      },
      {
        src: "https://i.ibb.co/5hQbcS0t/15-Playgrounds-Playgrounds-Owners-mobile-responsive-Sidebar.webp",
        alt: "Playgrounds-Playgrounds-Owners-mobile-responsive-Sidebar",
      },
      {
        src: "https://i.ibb.co/DDhDSzsj/16-Playgrounds-Playgrounds-Owners-IPAD-responsive-main.webp",
        alt: "Playgrounds-Playgrounds-Owners-IPAD-responsive-main",
      },
      {
        src: "https://i.ibb.co/JWZdLPLX/17-Playgrounds-Add-Playgrounds-Owners.webp",
        alt: "Playgrounds-Add-Playgrounds-Owners",
      },
      {
        src: "https://i.ibb.co/jsBFL3k/18-Playgrounds-Show-Playground-Owner-Details.webp",
        alt: "Playgrounds-Show-Playground-Owner-Details",
      },
      {
        src: "https://i.ibb.co/21mNjfj6/19-Playgrounds-Edit-Playgrounds-Owners.webp",
        alt: "Playgrounds-Edit-Playgrounds-Owners",
      },
      {
        src: "https://i.ibb.co/FL0GHmwR/20-Playgrounds-Change-Playground-Owner-Password.webp",
        alt: "Playgrounds-Change-Playground-Owner-Password",
      },
      {
        src: "https://i.ibb.co/spFNGxXg/21-Playgrounds-Delete-Playgrounds-Owners.webp",
        alt: "Playgrounds-Delete-Playgrounds-Owners",
      },
      {
        src: "https://i.ibb.co/60Z8dwyV/22-Playgrounds-Playgrounds-Types-main.webp",
        alt: "Playgrounds-Playgrounds-Types-main",
      },
      {
        src: "https://i.ibb.co/jvtKZLm0/23-Playgrounds-Add-Playgrounds-Types.webp",
        alt: "Playgrounds-Add-Playgrounds-Types",
      },
      {
        src: "https://i.ibb.co/fdRjFTFn/24-Playgrounds-Edit-Playgrounds-Types.webp",
        alt: "Playgrounds-Edit-Playgrounds-Types",
      },
      {
        src: "https://i.ibb.co/5gnM2Yrd/25-Playgrounds-Delete-Playgrounds-Types.webp",
        alt: "Playgrounds-Delete-Playgrounds-Types",
      },
      {
        src: "https://i.ibb.co/RTVH5dFC/26-Playgrounds-Members-main.webp",
        alt: "Playgrounds-Members-main",
      },
      {
        src: "https://i.ibb.co/Csp2v9m1/27-Playgrounds-Settings-main.webp",
        alt: "Playgrounds-Settings-main",
      },
      {
        src: "https://i.ibb.co/mWwrFw9/28-Playgrounds-Settings-Edit-User.webp",
        alt: "Playgrounds-Settings-Edit-User",
      },
      {
        src: "https://i.ibb.co/nMBQ3160/29-Playgrounds-Reservations-main.webp",
        alt: "Playgrounds-Reservations-main",
      },
      {
        src: "https://i.ibb.co/0RM0XGYf/30-Playgrounds-Exit.webp",
        alt: "Playgrounds-Exit",
      },
    ],
  },
  {
    id: 7,
    title: "Clinic Marketer",
    imgUrl: "https://i.ibb.co/mXb7bSP/Clinc.webp",
    // url: "https://portal.clinicmarkter.niyat.sa/#/adminlogin",
    description:
      "This project targets the number of visits to a specific website, along with the percentage you will receive based on the number of entries resulting from your access to this site.",
    keyObjectives: [
      "Design a dashboard that tracks the number of visits to a specific website.",
      "Enable users to monitor performance based on traffic and calculate commission percentages.",
      "Build a dynamic form system to support marketing operations for clinics and influencers.",
    ],
    challengesSolved: [
      "Worked with new libraries and unfamiliar tools such as React Flow (for visual flows) and React Quill (for rich text editing), learning them from scratch and integrating them seamlessly.",
      "Built a dynamic form builder that supports conditional rendering and input validation based on configuration.",
      "Managed complex state updates and syncing between different form stages using Redux and custom hooks.",
      "Solved layout issues for printable reports (optimized for A4), ensuring all data fits cleanly in PDF export.",
      "Developed an admin vs. influencer separation logic, allowing each user role to access and edit different fields dynamically.",
      "Handled deep form nesting and error management, especially with dynamically added inputs.",
    ],
    responsibilities: [
      "Developed the dashboard UI and marketing form builder from the ground up using React.js and Tailwind CSS.",
      "Integrated React Flow to visually display marketing flows and user journeys.",
      "Customized React Quill for rich text entry with tailored formatting options and field validations.",
      "Designed reusable and flexible form components that support various input types, conditions, and styles.",
      "Ensured state persistence across form steps using Redux Toolkit and form-driven configuration files.",
      "Handled route-based logic to differentiate form visibility and access control based on user role (admin/influencer).",
      "Created a summary table that dynamically calculates percentages based on traffic and performance.",
      "Built a multi-section layout that’s printable and exportable as PDF using print-specific Tailwind classes.",
    ],
    keyOutcomes: [
      "Delivered a highly flexible form builder system used by marketers and clinics with zero need for dev intervention.",
      "Reduced manual setup time for campaigns by 60% through reusable form templates.",
      "Successfully incorporated new tools (like React Flow and React Quill) to enhance functionality and UX.",
      "Enabled team members to visualize flow logic, improving internal marketing strategy discussions.",
      "Ensured marketing data was clear, clean, and print-ready, which improved client reporting and delivery.",
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
        src: "https://i.ibb.co/QcWrxrY/chakra-ui.webp",
        url: "https://chakra-ui.com/",
        alt: "chakra Ui",
      },
    ],
    keyFeatures: [
      {
        title: "Dynamic Form System",
        description:
          "Allows administrators to create, edit, and preview custom marketing forms.",
      },
      {
        title: "Role-based Views",
        description: "Differentiated access and UI for influencers and admins.",
      },
      {
        title: "Visual Flow Integration",
        description:
          "Uses React Flow to map out marketing user journeys visually.",
      },
      {
        title: "Rich Text Support",
        description: "Embedded React Quill editor for flexible content input.",
      },
      {
        title: "Real-time Calculations",
        description:
          "Summary section that auto-updates performance percentage based on inputs.",
      },
      {
        title: "Responsive & Print-Ready Design",
        description: "Optimized for both screen and PDF/A4 printing.",
      },
      {
        title: "Component Reusability",
        description:
          "Built highly modular form components to support text, dates, dropdowns, and more.",
      },
      {
        title: "Multistep Flow Support",
        description:
          "Smooth navigation between form steps with persistent state and validation.",
      },
    ],
  },
  {
    id: 8,
    category: "smartGate",

    title: "Niyat’s Website",
    imgUrl: "https://i.ibb.co/B5Wzsgmc/niyats-website.webp",
    description:
      "Niyat's website landing page is a sleek and modern platform designed to showcase its purpose and services effectively. With a clean layout, intuitive navigation, and engaging visuals, it provides visitors with a seamless experience to explore and interact with the brand.",
    keyObjectives: [
      "Build a sleek, responsive landing page that reflects Niyat’s brand identity and services.",
      "Improve loading performance and SEO using server-side rendering.",
      "Provide a smooth, modern user experience across devices.",
    ],
    challengesSolved: [
      "Migrated from a static React setup to Next.js, enabling faster load times and better SEO.",
      "Ensured full responsiveness across desktop, tablet, and mobile using Tailwind CSS and custom layouts.",
      "Integrated clean, scroll-based animations to enhance engagement without affecting performance.",
      "Managed optimized image rendering using Next’s built-in <Image /> component to reduce load time.",
      "Achieved pixel-perfect design implementation by collaborating with designers and iterating based on feedback.",
      "Handled route-based rendering with dynamic content sections based on page scroll behavior.",
    ],
    responsibilities: [
      "Developed the entire frontend using Next.js and Tailwind CSS.",
      "Applied SEO best practices by using semantic HTML, meta tags, and server-side rendering.",
      "Used Next Image optimization to serve images in modern formats with lazy loading.",
      "Built reusable layout components to ensure scalability and consistency.",
      "Coordinated with UI/UX designers to ensure brand identity was reflected precisely in the final output.",
      "Deployed the project and ensured performance scores using tools like Lighthouse and PageSpeed Insights.",
    ],
    keyOutcomes: [
      "Achieved 90+ performance and SEO scores across all devices using Next.js features.",
      "Reduced initial page load time by 40% through image and code optimization.",
      "Delivered a visually stunning, clean, and fast website that represents Niyat’s identity professionally.",
      "Improved user retention by providing a frictionless and responsive navigation experience.",
      "Enabled future scalability for blog or service sections due to Next’s file-based routing and SSR.",
    ],
    toolkit: [
      {
        src: "https://i.ibb.co/2x3gtYH/Next-js.webp",
        alt: "Next-js",
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
        src: "https://i.ibb.co/HfnF8CFt/i18n.webp",
        url: "https://react.i18next.com/",
        alt: "react-i18next",
      },
      {
        src: "https://i.ibb.co/YjQBNWh/vite.webp",
        url: "https://vite.dev/",
        alt: "vite",
      },
    ],
    keyFeatures: [
      {
        title: "Next.js Framework",
        description:
          "Leveraged for SSR, static generation, and better performance",
      },
      {
        title: "SEO Optimization",
        description: "Dynamic meta tags, structured content, and fast loading",
      },
      {
        title: "Responsive Design",
        description: "Fully optimized for all screen sizes using Tailwind CSS",
      },
      {
        title: "Optimized Images",
        description: "Lazy-loaded, modern-format images using next/image",
      },
      {
        title: "Smooth Animations",
        description:
          "Integrated scroll-triggered animations for better user engagement",
      },
      {
        title: "Reusable Components",
        description: "Modular structure for buttons, sections, and headers",
      },
      {
        title: "Performance-Focused",
        description: "Lighthouse and PageSpeed optimized across all metrics",
      },
      {
        title: "Clean Deployment",
        description:
          "Ready-to-scale layout with easy backend integration if needed",
      },
    ],
  },
];
