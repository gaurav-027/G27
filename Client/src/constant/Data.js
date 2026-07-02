const projectData = [
  {
    slug: "lancerflow",
    title: "LancerFlow - An AI-Powered Freelance OS",
    description:
      "LancerFlow is a production-grade, highly intuitive freelance management platform engineered with the MERN stack (React, Node.js, Express, and MongoDB) to function as a unified freelance operating system. The primary objective of this application is to consolidate the traditionally fragmented freelance workflow—such as manual client onboarding, dynamic project metric tracking, and operational management—into a single, visually cohesive workspace. Architected on a clean, decoupled MVC (Model-View-Controller) design pattern on the backend, the system routes incoming requests from the core server.js gateway directly into specialized endpoint paths like authRoutes.js, clientRoutes.js, and projectRoutes.js. Through structured Mongoose schemas, the application establishes relational NoSQL mapping among user accounts, client profiles, and active workloads, tracking critical financial parameters like project budgets and payments alongside automated contextual alerts under a centralized notification controller.  On the frontend, the platform features a modular configuration designed around responsive layouts, isolating authentication state integrity through a custom AuthContext.jsx layer and specialized hook engines. This design enforces strict data security by dynamically wrapping view paths within client-side Protected.jsx and Public.jsx logic components. To elevate its capabilities as a next-generation SaaS ecosystem, LancerFlow natively embeds an intelligent AI Workspace Sidebar that communicates directly with dedicated backend routing pipelines. This framework allows independent professionals to trigger automated text operations for drafting targeted project proposals, tailored legal agreements, or formal update emails directly from their dashboard. Once rendered, these text arrays are processed by an asynchronous document utility asset (pdf.js), which maps active project tokens to generate structured, print-ready invoices and PDF contracts instantaneously.",
    image: "/project-1.png",
    repo: "https://github.com/gaurav-027/lancerflow",
    demo: "...",
  },
  {
    slug: "vidio",
    title: "Vidio",
    description: "VIDIO is a production-grade, real-time video conferencing web application engineered using the MERN stack (MongoDB, Express.js, React, and Node.js) combined with advanced WebSocket integration to facilitate seamless virtual collaboration. The primary objective of the platform is to eliminate communication barriers by providing high-performance video rooms, secure user authentication workflows, and comprehensive meeting histories within a cohesive UI. Architected with a decoupled backend pattern, the system relies on an Express gateway that routes requests to specialized user controllers and handles database persistence through Mongoose schemas specifically designed to track individual profiles and multi-user meeting states. Central to its real-time functionality is a custom socketManager.js signaling engine that orchestrates real-time event broadcasting, peer connections, and messaging pipelines across connected clients dynamically. On the frontend, the client-side infrastructure leverages React to manage interactive components alongside a global Authcontext.jsx state provider that isolates user context across sessions. Robust authentication flows secure specialized end-user views via higher-order authentication wrappers (withAuth.jsx), restricting access to core application modules like the user dashboard, custom profile configurations, and historical log lookups. The main workspace interface, built inside VideoMeet.jsx, provides immersive layout logic for streaming video assets, managing individual device tracks, and processing concurrent participant state maps smoothly. Users can easily join or initialize unique room keys, check past collaborative engagement logs inside a clean history dashboard, and maintain localized connection security rules effortlessly. By integrating declarative styling sheets alongside modern UI patterns, VIDIO bridges complex signaling handshakes on the server with smooth, responsive client interactions. The application implements strict route verification and optimized socket payload management to ensure minimal video latency and high connection stability. Ultimately, this codebase highlights an enterprise-ready architecture that demonstrates strong proficiency in managing state synchronization, multi-peer routing, and secure session validation required for modern SaaS communication systems.",
    image: "/project-2.png",
    repo: "https://github.com/gaurav-027/vidio",
    demo: "...",
  },
  {
    slug: "g27",
    title: "G27",
    description: "...",
    image: "/project-3.png",
    repo: "https://github.com/gaurav-027/g27",
    demo: "...",
  },
  {
    slug: "xitamin",
    title: "Xitamin Solution Pvt. Ltd.",
    description: "...",
    image: "/project-4.png",
    repo: "...",
    demo: "...",
  },
  {
    slug: "wanderlust",
    title: "Wanderlust",
    description: "Wanderlust is a production-grade web application engineered with the MERN stack (MongoDB, Express.js, React, and Node.js) to deliver a high-performance web dashboard. Architected on a decoupled system model, the backend layer utilizes Express logic pathways to handle structured business rules, isolating system operations into specialized user controllers and implementing database persistency via Mongoose schemas designed to capture user parameters. Request handling flows from the central server.js gateway directly into distinct routing blocks like userRoutes.js. Security boundaries are enforced across the environment using Passport authentication configurations (passport.js) bound to structured sessions, while asynchronous email integration channels are decoupled into standalone configuration scripts (email.js) to maximize background worker processing speeds and pipeline reliability. On the frontend client, the platform relies on React to handle deep state integrity, wrapping active user sessions inside a global Authcontext.jsx contextual layer. Restricted operational areas such as historical activity lookup logs, custom profile details, and main interface sections are securely encapsulated using high-order view validation strategies (withAuth.jsx). The master user layout provides a sleek interface optimized with declarative style matrices, loading dynamic visual components like text and element engines (FuzzyText.jsx, Particles.jsx) alongside immersive backdrop canvas layers (LightRays.jsx). This bridges intense backend session handshakes with fluid user experiences, maintaining rapid render loops during high database activity. Ultimately, Wanderlust provides a scalable design model that effectively utilizes strict request parsing, persistent account storage, and responsive client-side routing to manage complex application states. By dividing structural code cleanly into independent modules, the project remains fully maintainable and adaptive for future system expansion. This production-ready repository showcases a thorough mastery of data segregation, modular component development, and real-time session lifecycle orchestration vital for developing modern, full-stack digital environments.",
    image: "/project-5.png",
    repo: "https://github.com/gaurav-027/wanderlust",
    demo: "...",
  },
];

export default projectData;
