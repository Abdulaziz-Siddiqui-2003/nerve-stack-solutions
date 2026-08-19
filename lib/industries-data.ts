export type IndustryItem = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  challenges: string[];
  howWeHelp: { title: string; description: string }[];
  relevantServices: string[];
  relatedCaseStudySlugs?: string[];
};

export const industries: IndustryItem[] = [
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Secure-by-default platforms for security-conscious teams",
    summary:
      "Security tooling and internal platforms for teams that can't afford to treat authentication, access control, and audit trails as an afterthought.",
    challenges: [
      "Role-based access control that actually gets enforced at the API level, not just hidden in the UI",
      "Audit trails that hold up when something needs to be reconstructed after the fact",
      "Internal tools that handle sensitive data without becoming the weakest link",
    ],
    howWeHelp: [
      {
        title: "Role-based access, enforced properly",
        description: "Access control checked server-side on every request, not just conditionally rendered on the client.",
      },
      {
        title: "Full audit logging",
        description: "Every sensitive action, including who did what, to which record, and when, recorded and queryable.",
      },
      {
        title: "Secure authentication",
        description: "JWT or session-based auth with proper expiry, password hashing, and account lockout on repeated failures.",
      },
    ],
    relevantServices: ["web-development", "n8n-automation"],
  },
  {
    slug: "edtech",
    title: "EdTech",
    tagline: "Learning platforms and assessment tools that scale with enrollment",
    summary:
      "Learning management systems, AI-assisted grading, and role-based platforms for institutions and independent education products alike.",
    challenges: [
      "Grading and feedback loops that don't leave students waiting days for a response",
      "Course content, quizzes, and progress tracking that stay organized as enrollment grows",
      "Distinct experiences for students, instructors, and administrators without building three separate apps",
    ],
    howWeHelp: [
      {
        title: "AI-assisted assessment",
        description: "Automatic essay scoring and quiz generation that give students instant feedback instead of a multi-day wait.",
      },
      {
        title: "Role-based dashboards",
        description: "Student, instructor, and administrator views built as one coherent platform, each scoped to what that role actually needs.",
      },
      {
        title: "Course & content delivery",
        description: "Video lectures, structured modules, and progress tracking that hold up as a course catalog grows.",
      },
    ],
    relevantServices: ["web-development", "n8n-automation"],
    relatedCaseStudySlugs: ["intellilearn", "fyp-management"],
  },
  {
    slug: "healthtech",
    title: "HealthTech",
    tagline: "Platforms built for accuracy, privacy, and clinical trust",
    summary:
      "Digital health tools where getting the data model, access control, and reliability right isn't optional. It's the whole point.",
    challenges: [
      "Patient and clinical data that needs strict access boundaries between roles",
      "Reliability requirements that leave no room for a flaky third-party integration",
      "Interfaces clinicians and patients will actually trust and use correctly under time pressure",
    ],
    howWeHelp: [
      {
        title: "Careful data modeling",
        description: "Schemas designed around how clinical and patient data actually needs to be queried, scoped, and protected.",
      },
      {
        title: "Reliability-first engineering",
        description: "Atomic transactions and proper error handling on anything where a partial failure would be worse than an obvious one.",
      },
      {
        title: "Clear, role-appropriate interfaces",
        description: "Interfaces built for the person actually using them under time pressure, not a generic admin panel repurposed for clinical use.",
      },
    ],
    relevantServices: ["web-development", "app-development"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    tagline: "Cross-platform apps built for real-world conditions",
    summary:
      "React Native apps engineered for the field and the office alike: offline-first, device-integrated, and built to actually get used.",
    challenges: [
      "Users on unreliable connections who still need the app to work",
      "Native device features (camera, location, push notifications) that need to feel native, not bolted on",
      "One team, one codebase, two app stores to satisfy",
    ],
    howWeHelp: [
      {
        title: "Offline-first architecture",
        description: "Local-first data with background sync, built for field conditions where connectivity is the exception, not the norm.",
      },
      {
        title: "Native device integration",
        description: "Camera, location, and push notifications wired in properly rather than through a fragile third-party wrapper.",
      },
      {
        title: "One codebase, two platforms",
        description: "React Native and Expo builds that ship to iOS and Android from a single, maintainable codebase.",
      },
    ],
    relevantServices: ["app-development"],
    relatedCaseStudySlugs: ["aigros"],
  },
  {
    slug: "saas",
    title: "SaaS",
    tagline: "Multi-tenant platforms engineered to scale with your customer base",
    summary:
      "Full-stack SaaS builds, from the first paying customer to the architecture that doesn't need a rewrite at customer number one hundred.",
    challenges: [
      "An architecture that stays maintainable as tenants, roles, and features multiply",
      "Onboarding and billing flows that don't require white-glove handling for every new customer",
      "Performance that holds up as usage and expectations grow",
    ],
    howWeHelp: [
      {
        title: "Multi-tenant architecture",
        description: "Data models and access patterns designed for multiple customers from day one, not retrofitted after the first ten.",
      },
      {
        title: "Role-based permissions",
        description: "Admin, editor, and viewer-style access tiers enforced consistently across the product as your customer base grows.",
      },
      {
        title: "Performance & reliability",
        description: "Server-rendered architecture and database design built to hold up under real, growing production load.",
      },
    ],
    relevantServices: ["web-development", "n8n-automation"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
