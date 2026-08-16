export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  tags: string[];
  client: string;
  duration: string;
  role: string;
  techStack: string[];
  overview: string;
  problem: string;
  solution: string;
  features: { title: string; description: string }[];
  outcomes: string[];
  accent: "amber" | "violet" | "teal" | "green";
  /** Optional real screenshots. images[0] doubles as the card thumbnail and detail-page header image. */
  images?: { src: string; alt: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "inventrack",
    title: "InvenTrack",
    tagline: "Inventory & Asset Management System",
    summary:
      "A role-aware inventory and asset management platform that replaced spreadsheet-based tracking with a centralized system for stock, purchase orders, and project allocation.",
    tags: ["Web Platform", "Internal Tools", "Inventory"],
    client: "EIE — Electronics Interconnect Engineering",
    duration: "3 weeks",
    role: "Full-stack development (solo)",
    techStack: ["React", "Vite", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "Supabase", "JWT Auth"],
    overview:
      "InvenTrack is a full-stack inventory management system built to replace manual, spreadsheet-based tracking with a centralized, role-aware platform. Staff manage physical electronic components across organized storage sections, track stock movements, allocate equipment to projects, manage purchase orders with suppliers, and generate detailed PDF reports — all through a secure web application accessible from any device.",
    problem:
      "The team was tracking hundreds of electronic components across physical storage sections using spreadsheets — a process prone to human error, conflicting edits between team members, and zero audit trail of who issued what stock to which project. There was no real-time view of stock levels, no structured purchase order workflow, and no way to enforce who was allowed to change inventory data.",
    solution:
      "We designed a three-tier role system — Admin, Editor, and Viewer — on top of a relational PostgreSQL schema, giving every team member exactly the access their role required. Stock movements, purchase orders, and project allocations are all recorded as atomic transactions with a full audit trail, and a live dashboard surfaces low-stock alerts before they become project blockers.",
    features: [
      {
        title: "Role-based access control",
        description: "Admin, Editor, and Viewer accounts enforced at both the UI and API level, so sensitive actions stay locked down.",
      },
      {
        title: "Executive dashboard",
        description: "Live stock alerts, a recent-activity feed, and one-click PDF report generation covering stock, allocations, and low-stock items.",
      },
      {
        title: "Full product lifecycle",
        description: "Structured component sections and categories, stock issuance to projects, and soft-deleted archival that preserves history.",
      },
      {
        title: "Purchase order workflow",
        description: "Multi-item orders that automatically increment stock and log a stock-IN entry the moment an order is marked received.",
      },
      {
        title: "Supplier management",
        description: "A vendor reference table tied directly into procurement, with deletion guarded against orders still in flight.",
      },
      {
        title: "Secure authentication",
        description: "JWT sessions with automatic expiry checks on every page load, plus an in-app request flow for account access.",
      },
    ],
    outcomes: [
      "Replaced manual spreadsheet-based inventory tracking with a centralized digital system, eliminating data conflicts and human error across the team",
      "Real-time stock alerts prevent project delays caused by missing components",
      "Automated stock updates on purchase order receipt removed the need for manual stock entry and its count errors",
      "A full audit trail of every stock movement gives management complete operational visibility",
      "One-click PDF reporting replaced manual report compilation, producing detailed inventory and allocation reports in seconds",
    ],
    accent: "amber",
  },
  {
    slug: "aigros",
    title: "AIGROS — Pest Detector",
    tagline: "AI-Powered Agricultural Pest Detection Mobile App",
    summary:
      "A smart farming platform connecting solar-powered ESP32 field devices to a Flutter mobile app, giving farmers and admins real-time visibility into device health, captured field images, and system alerts.",
    tags: ["Mobile App", "IoT", "AgriTech"],
    client: "EIE — Electronics Interconnect Engineering",
    duration: "3 weeks",
    role: "Full-stack development — mobile, backend & IoT integration (solo)",
    techStack: ["Flutter", "Dart", "Node.js", "Express.js", "ESP32-S3", "PostgreSQL", "REST API"],
    overview:
      "AIGROS is a full-stack smart farming platform consisting of a Flutter mobile app, a Node.js/Express REST API, and ESP32-S3 IoT gateway devices deployed in agricultural fields. Farmers and admins monitor devices in real time — battery, solar power, signal strength, captured field images, and system alerts — while admins can remotely configure device settings.",
    problem:
      "Field devices were generating valuable sensor and image data with no central place for farmers or administrators to monitor them. There was no way to know a device had gone offline, was running low on battery, or had stopped syncing until someone physically checked it in the field — by which point data, and potentially early pest signals, had already been lost.",
    solution:
      "We built an end-to-end pipeline from the physical ESP32-S3 device through a REST API into a PostgreSQL database and a Flutter mobile dashboard. Devices sync telemetry and images on a configurable schedule; the app surfaces battery, solar, and signal health as color-coded status, and pushes alerts the moment a device goes offline, drops signal, or fails an upload.",
    features: [
      {
        title: "Role-based dashboard",
        description: "Admins see every device system-wide; farmers see only the devices assigned to them, enforced at the API query level.",
      },
      {
        title: "Live telemetry & charts",
        description: "24-hour and 7-day interactive line charts for signal strength, battery, and solar voltage per device.",
      },
      {
        title: "Field image gallery",
        description: "Captured images in a cached, scrollable grid with a fullscreen swipe viewer and per-image capture metadata.",
      },
      {
        title: "Real-time alert feed",
        description: "Battery-low, device-offline, upload-failed, firmware-update, and solar-drop alerts with unread tracking and bulk mark-as-read.",
      },
      {
        title: "Fleet health overview",
        description: "A summary bar and per-device health cards with color-coded battery status across the entire deployed fleet.",
      },
      {
        title: "Secure authentication",
        description: "Account lockout after repeated failed logins with a live cooldown, and encrypted on-device session storage.",
      },
    ],
    outcomes: [
      "Built a complete end-to-end IoT pipeline from ESP32-S3 field device to Flutter mobile dashboard — sensor data, images, and telemetry all flowing through a live REST API into PostgreSQL",
      "Delivered real-time device monitoring across battery, solar voltage, signal strength, and upload success rate, visualised through interactive charts and health cards",
      "Designed a low-power field device architecture with configurable wake-up schedules and OTA firmware update support to maximise device lifespan in remote environments",
      "Role-based access control cleanly separates admin and farmer workflows",
      "Resolved platform-level build and runtime issues introduced by an SDK update, restoring full compatibility",
    ],
    accent: "teal",
  },
  {
    slug: "intellilearn",
    title: "IntelliLearn",
    tagline: "Intelligent E-Learning Platform with Automated Assessment",
    summary:
      "A learning management platform with AI essay scoring and automatic quiz generation, turning grading and quiz-writing from a manual chore into an instant, reviewable draft.",
    tags: ["Web Platform", "EdTech", "AI"],
    client: "Independent project",
    duration: "Semester-length build",
    role: "Full-stack development",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Python", "FastAPI", "BERT", "T5", "Docker"],
    overview:
      "IntelliLearn is a full-stack learning management platform built around two AI microservices: automatic essay scoring and automatic quiz generation. Students enroll in courses, watch lecture videos, and take AI-generated quizzes; instructors upload course content, generate quizzes straight from lecture text, and review AI-scored essay submissions before publishing grades; admins manage accounts and monitor platform health — all inside one role-aware system.",
    problem:
      "Grading free-text essays and short answers by hand is slow, and the delay between submission and feedback undermines learning. Writing new quiz questions for every topic also eats into time instructors could spend teaching. Most learning platforms handle content delivery and objective-question grading well, but offer little for nuanced, open-ended assessment.",
    solution:
      "We built two independent AI microservices behind a standard React/Node.js LMS: a BERT-based essay scoring service that evaluates meaning, structure, and coherence against an instructor's rubric rather than just keyword matching, and a T5-based question generator that turns uploaded lecture text into a draft quiz ready for review. Both AI services run as separate Docker containers so the grading and generation workload never slows down the core platform, and can be updated independently of it.",
    features: [
      {
        title: "AI essay scoring",
        description: "Free-text submissions are scored against an instructor's rubric with contextual, rubric-broken-down feedback delivered in seconds instead of days.",
      },
      {
        title: "Automated quiz generation",
        description: "Instructors upload lecture text and get a draft MCQ or fill-in-the-blank quiz ready to review, edit, and publish.",
      },
      {
        title: "Role-based dashboards",
        description: "Distinct Student, Instructor, and Admin experiences, each scoped to their own courses, sections, and permissions.",
      },
      {
        title: "Course delivery",
        description: "Video lectures, PDFs, and structured modules with progress tracking and resume-from-last-position playback.",
      },
      {
        title: "Performance analytics",
        description: "Grade distributions, completion rates, and engagement metrics for instructors and admins, exportable as CSV/PDF.",
      },
      {
        title: "Containerized microservice architecture",
        description: "Frontend, backend, and both AI services run as independent Docker containers, so the grading and quiz-generation models can be updated without redeploying the rest of the platform.",
      },
    ],
    outcomes: [
      "Replaced manual essay grading with instant, rubric-based AI feedback, cutting turnaround from days to seconds",
      "Automated quiz generation freed instructors from writing every question by hand while keeping a human review step before publishing",
      "Independent AI microservices let the grading and quiz models scale and update without redeploying the core platform",
      "Role-scoped dashboards kept students, instructors, and admins each working with only the data relevant to them",
    ],
    accent: "violet",
  },
  {
    slug: "fyp-management",
    title: "FYP Management System",
    tagline: "Final Year Project tracking, supervision & evaluation platform",
    summary:
      "A role-based portal for university Final Year Projects that manages proposals, supervisor assignment, and evaluations in one system, replacing spreadsheets and email threads with a single source of truth.",
    tags: ["Web Platform", "Education", "Workflow"],
    client: "Independent project",
    duration: "Independent build",
    role: "Full-stack development",
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL"],
    overview:
      "Final Year Projects at a university department are mandatory, team-based capstone undertakings — students propose a topic, a supervisor and co-supervisor are assigned to mentor the group, and progress is tracked through regular evaluations, documentation, and presentations until the final grade is recorded. This platform digitizes that entire lifecycle with three role-based dashboards: Student, Supervisor, and Coordinator.",
    problem:
      "Running Final Year Projects across a whole department means tracking proposals, supervisor assignments, milestone evaluations, and grading for hundreds of students at once — usually spread across spreadsheets, email threads, and in-person meetings. Coordinators had no single view of which groups were on track, which proposals were still pending review, or where evaluation bottlenecks were forming.",
    solution:
      "We built a role-based portal with three distinct views so each person only sees what's relevant to them. Students track their assignments and supervisor details from one dashboard; supervisors monitor their assigned groups' progress and review proposals; coordinators get a department-wide view of enrollment, active supervisors, pending proposals, and evaluation status, with grade-distribution and group-performance charts to spot problems before they become deadline emergencies.",
    features: [
      {
        title: "Student dashboard",
        description: "Announcements, assignment status (submitted, pending, in review), supervisor contact details, and project title in one view.",
      },
      {
        title: "Supervisor dashboard",
        description: "Group counts by status — in progress, completed, pending evaluation — department announcements, and a groups-performance chart across supervised teams.",
      },
      {
        title: "Coordinator command center",
        description: "Department-wide KPIs — total enrolled students, active supervisors, pending proposals, ongoing evaluations, and plagiarism alerts — at a glance.",
      },
      {
        title: "Proposal & evaluator workflow",
        description: "Dedicated panels for reviewing proposals, assigning evaluators, and recording results without leaving the portal.",
      },
      {
        title: "Data visualization",
        description: "FYP-groups-per-department and grade-distribution charts give coordinators a department-wide view of load and outcomes.",
      },
      {
        title: "Role-based access",
        description: "Student, Supervisor, and Coordinator each get a purpose-built interface instead of one generic dashboard trying to serve everyone.",
      },
    ],
    outcomes: [
      "Replaced scattered spreadsheets and email threads with a single, role-aware system of record for the entire FYP lifecycle",
      "Gave coordinators a real-time, department-wide view of proposals, evaluations, and supervisor load",
      "Surfaced grade distribution and group performance visually, making it easier to spot at-risk groups before deadlines",
      "Cut down on manual status-chasing between students, supervisors, and coordinators",
    ],
    accent: "green",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}

export const otherProjects = [
  {
    title: "MedVid: AI",
    tags: ["AI", "Healthcare", "Video"],
    description:
      "An AI-powered medical video platform that structures and summarizes clinical video content for faster review, learning, and patient education.",
  },
  {
    title: "Kisaan Bot",
    tags: ["AI Assistant", "AgriTech", "Automation"],
    description:
      "An AI assistant for farmers that answers crop, weather, and market questions in plain language, built to work over low-bandwidth connections.",
  },
  {
    title: "Executive MERN Analytics Dashboards",
    tags: ["MERN", "Data", "Operations"],
    description:
      "Unified fragmented KPI views into a single operational dashboard with fast filters and cleaner decision loops.",
  },
  {
    title: "Automation Node Network",
    tags: ["n8n", "Workflow", "CRM"],
    description:
      "Connected lead routing, CRM sync, and customer notifications into an autonomous system with less human touch time.",
  },
];
