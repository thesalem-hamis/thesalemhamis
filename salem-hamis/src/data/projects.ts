export type Project = {
  id: string;
  title: string;
  tagline: string;
  industry: string;
  stack: string[];
  year: string;
  href: string;
  client?: string;
  duration?: string;
  timeframe?: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  heroImage: string;
  heroVideo?: string; // Optional video hero for case study pages
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: "vivar-realty-global",
    title: "Vivar Realty Global",
    tagline:
      "Enterprise real estate platform with an integrated CRM, lead management, and business intelligence dashboard.",
    industry: "Real Estate Technology",
    stack: ["Next.js", "React", "Node.js", "Tailwind CSS", "MongoDB"],
    year: "2026",
    href: "https://www.vivar.global",
    client: "Vivar Global",
    duration: "4 Weeks",

    overview:
      "Vivar Realty Global is a modern real estate platform built to simplify property discovery while providing administrators with complete control over business operations. Beyond a polished customer-facing experience, the platform includes a fully custom CRM that allows staff to manage listings, publish blog content, track enquiries, automate lead responses, and monitor business performance from one centralized dashboard. Every workflow was designed around the client's operations instead of relying on generic third-party software.",

    challenge:
      "The client had outgrown traditional website builders and disconnected management tools. Property updates required unnecessary manual effort, customer enquiries were scattered across multiple channels, and there was no reliable way to monitor marketing performance or website activity. They needed a scalable platform capable of supporting both customer acquisition and internal operations.",

    solution:
      "We designed and developed a complete digital ecosystem combining a high-performance real estate website with a powerful administrative CRM. Administrators can manage property listings, publish articles, capture and organize leads, trigger automated email responses, and analyze visitor behaviour through integrated reporting. The platform was engineered to minimize repetitive work while giving the business complete ownership of its data.",

    outcome:
      "The finished platform transformed Viva Realty Global into a fully digital real estate operation. Listing management became significantly faster, customer response times improved through automation, and the business gained real-time visibility into lead generation and website performance. The system now provides a scalable foundation capable of supporting future growth without dependence on external management platforms.",

    heroImage: "/src/assets/vivar-home.png", 
    heroVideo: "/src/assets/vivar.mp4", 

    gallery: [
      "/src/assets/vivar-admin.png",
      "/src/assets/vivar-home.png",
    ],
  },
  {
    id: "rhace-co",
    title: "Rhace.co",
    tagline:
      "A unified hospitality marketplace connecting restaurants, hotels, nightlife, and events through one intelligent platform.",
    industry: "Hospitality Technology",
    stack: ["Next.js", "React", "Node.js", "Tailwind CSS", "MongoDB"],
    year: "2026",
    href: "https://rhace-frontend.vercel.app",
    client: "Rhace Inc.",
    duration: "5 Months",

    overview:
      "Rhace.co is a multi-vendor hospitality marketplace designed to bring restaurants, lounges, hotels, clubs, and live events together within a single digital ecosystem. Customers can reserve tables, purchase event tickets, book hotel rooms, browse menus, and complete secure payments from one seamless platform, while vendors receive powerful business management tools through dedicated dashboards.",

    challenge:
      "Creating a platform capable of serving multiple business categories introduced significant architectural complexity. Restaurants, hotels, event organizers, and nightlife venues each required different operational workflows, yet customers expected one fast and intuitive experience. Traditional marketplace wallet systems also created payout delays and accounting overhead that negatively affected vendors.",

    solution:
      "Instead of implementing a conventional wallet system, we engineered an automated split-payment infrastructure that securely distributes payments to participating vendors after a controlled settlement period. Alongside this payment engine, we developed vendor dashboards for reservation management, menu administration, sales reporting, customer analytics, inventory visibility, and operational insights while maintaining a frictionless customer journey.",

    outcome:
      "Rhace successfully unified multiple hospitality services into one connected platform. Vendors benefited from automated settlements, improved operational visibility, and simplified business management, while customers enjoyed a faster booking experience across restaurants, hotels, events, and nightlife. The platform established a scalable foundation capable of supporting continued expansion across the hospitality industry.",

    heroImage: "/src/assets/rhace.png", 
    heroVideo: "/src/assets/rhace-main.mp4", 

    gallery: [
      "/src/assets/rhace-2.png",
      "/src/assets/rhace-3.png",
    ],
  },
  {
    id: "rhace-back-office",
    title: "Rhace Back Office",
    tagline:
      "An enterprise restaurant operating system powering staff, inventory, payments, and real-time business operations.",
    industry: "Restaurant SaaS",
    stack: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    year: "2026",
    href: "https://back-office.rhace.co",
    client: "Rhace Inc.",
    duration: "5 Months",

    overview:
      "Rhace Back Office serves as the operational engine behind the Rhace ecosystem. Built specifically for modern restaurant operations, it centralizes staff management, inventory tracking, live order monitoring, payment processing, customer analytics, and executive reporting within one secure management platform.",

    challenge:
      "Restaurant environments require multiple teams to work simultaneously under constant time pressure. Waiters, supervisors, inventory managers, accountants, and business owners all require different permission levels while interacting with the same operational data. The challenge was building a highly responsive platform without compromising security or usability.",

    solution:
      "We developed a role-based operating system featuring granular access control, live kitchen order management, inventory monitoring, payment oversight, customer insights, employee administration, and business intelligence dashboards. Every module was optimized for speed, allowing restaurant staff to perform daily operations efficiently during peak service hours.",

    outcome:
      "The platform replaced fragmented manual workflows with a centralized digital operating system that improved staff collaboration, reduced inventory inaccuracies, simplified reporting, and gave management complete visibility into restaurant performance through real-time operational analytics.",

    heroImage: "/src/assets/vivar-home.png", 
    heroVideo: "/src/assets/rhace-backoffice.mp4", 

    gallery: [
      "/src/assets/rhace-backoffice.png",
      "/src/assets/backoffice.png",
    ],
  },
  {
    id: "rhace-customer",
    title: "Rhace Customer App",
    tagline:
      "A QR-powered dining experience enabling instant ordering, seamless payments, and effortless group bill splitting.",
    industry: "Consumer Hospitality Technology",
    stack: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    year: "2026",
    href: "https://customer.rhace.co",
    client: "Rhace Inc.",
    duration: "3 Months",

    overview:
      "The Rhace Customer App transforms the restaurant dining experience by allowing guests to order directly from their table through QR technology. Customers can browse digital menus, submit orders instantly to the kitchen, split bills among friends, and complete payments without waiting for traditional table service. The application integrates seamlessly with Rhace Back Office to provide real-time synchronization across restaurant operations.",

    challenge:
      "Traditional dining experiences often suffer from ordering delays, communication errors between staff and kitchens, and frustrating group payment processes. Building a seamless customer experience required instant synchronization between customer actions and restaurant operations while supporting complex split-payment scenarios.",

    solution:
      "We created a lightweight QR-powered web application requiring no installation. Guests can instantly access restaurant menus, customize orders, request additional items, split payments by item or percentage, and complete transactions while every interaction synchronizes directly with kitchen displays and the Rhace Back Office management system.",

    outcome:
      "The application reduced ordering delays, minimized payment confusion, improved kitchen communication, and significantly enhanced the customer dining experience. Together with Rhace Back Office, it created a fully connected restaurant ecosystem that modernized both front-of-house and back-office operations.",

    heroImage: "/src/assets/vivar-home.png", 
    heroVideo: "/src/assets/rhace-customer.mp4", 

    gallery: [
      "/src/assets/rhace-cutomer.png",
      // "/src/assets/work-restaurant.jpg",
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
