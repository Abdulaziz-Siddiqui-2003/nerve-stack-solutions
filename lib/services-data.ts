export type ServiceItem = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  bullets: string[];
  overview: string;
  capabilities: { title: string; description: string }[];
  techStack: string[];
  faq: { question: string; answer: string }[];
};

export const services: ServiceItem[] = [
  {
    slug: "web-development",
    title: "Web Development",
    category: "Full-Stack",
    tagline: "High-performance web applications engineered for scale",
    summary:
      "High-performance web applications engineered for scale. From architecture to deployment, pixel-perfect and production-ready.",
    bullets: ["Next.js / React", "API & CMS integration", "Performance-first builds", "Custom dashboards & portals"],
    overview:
      "We build full-stack web platforms on Next.js and React that are server-rendered, fast by default, and architected to hold up under real production traffic rather than falling apart past the demo. Every build covers the full stack: database schema, API design, authentication, and a frontend that's fast on a real connection, not just on localhost.",
    capabilities: [
      {
        title: "Server-rendered architecture",
        description: "Next.js App Router builds with proper caching, streaming, and Core Web Vitals treated as a requirement, not an afterthought.",
      },
      {
        title: "API & CMS integration",
        description: "REST and GraphQL integrations, headless CMS wiring, and third-party API connections that don't fall over under load.",
      },
      {
        title: "Custom dashboards & portals",
        description: "Role-based internal tools and customer-facing portals with real data, not another spreadsheet replacement that still needs a spreadsheet.",
      },
      {
        title: "Performance & SEO foundations",
        description: "Semantic HTML, structured data, and Core Web Vitals treated as launch requirements, not a follow-up sprint.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"],
    faq: [
      {
        question: "Do you work with an existing codebase or only greenfield builds?",
        answer: "Both. We regularly take over existing Next.js/React or MERN codebases. The first step is always a technical audit before we touch anything.",
      },
      {
        question: "Can you integrate with our existing backend or CMS?",
        answer: "Yes. Most web builds connect to an existing API, database, or headless CMS rather than starting from zero.",
      },
      {
        question: "How long does a typical web build take?",
        answer: "A focused MVP is usually 3 to 6 weeks; larger platforms with multiple roles and integrations run longer. Scope is fixed at kickoff so there are no surprises.",
      },
    ],
  },
  {
    slug: "app-development",
    title: "App Development",
    category: "Mobile",
    tagline: "Native-feel mobile experiences on iOS and Android",
    summary:
      "Native-feel mobile experiences on iOS and Android. We design and build apps that users open by habit, not obligation.",
    bullets: ["React Native & Expo", "iOS + Android", "Offline-first architecture", "App Store deployment"],
    overview:
      "We build cross-platform mobile apps with React Native and Expo, one codebase shipping to iOS and Android without the native-feel compromises that usually come with that shortcut. Every app is built with real device conditions in mind: patchy connections, background sync, and the App Store review process, not just a demo on a fast wifi network.",
    capabilities: [
      {
        title: "Cross-platform builds",
        description: "React Native and Expo apps that share one codebase across iOS and Android without feeling like a compromise on either.",
      },
      {
        title: "Offline-first architecture",
        description: "Local-first data with background sync, so the app stays usable on a flaky connection instead of just spinning.",
      },
      {
        title: "Native device integration",
        description: "Camera, push notifications, background location, and other native APIs wired in properly, not bolted on with a plugin and hope.",
      },
      {
        title: "App Store & Play Store deployment",
        description: "End-to-end release management: builds, signing, store listings, and the review process handled for you.",
      },
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Node.js", "PostgreSQL"],
    faq: [
      {
        question: "React Native or fully native, which do you recommend?",
        answer: "For most business apps, React Native gets you to a genuinely native-feeling app on both platforms from one codebase, at a fraction of the cost of separate iOS/Android teams. We'll flag it if your app needs a fully native approach instead.",
      },
      {
        question: "Do you handle App Store and Play Store submission?",
        answer: "Yes. Accounts, builds, signing, store listings, and the review process are part of every mobile engagement.",
      },
      {
        question: "Can the app work with intermittent connectivity?",
        answer: "Offline-first design (local storage plus background sync) is standard on every build where connectivity isn't guaranteed, like field or industrial use cases.",
      },
    ],
  },
  {
    slug: "n8n-automation",
    title: "n8n Automation",
    category: "Intelligent Systems",
    tagline: "Replace repetitive workflows with intelligent, connected systems",
    summary:
      "Replace repetitive workflows with intelligent automation. Custom n8n pipelines that connect the systems your business already runs on.",
    bullets: ["n8n workflow design", "CRM & API integration", "AI-powered automations", "Real-time decision triggers"],
    overview:
      "We design and build n8n automation pipelines that connect your CRM, support desk, internal tools, and APIs into one system that runs without someone copy-pasting between tabs. Where it makes sense, we layer in AI (OpenAI, Google Gemini) for classification, summarization, and drafting: automations that think, not just move data from A to B.",
    capabilities: [
      {
        title: "Workflow automation",
        description: "Lead routing, CRM sync, notification pipelines, and internal ops workflows connected into one dependable system.",
      },
      {
        title: "AI-powered pipelines",
        description: "OpenAI and Google Gemini wired into your workflows for classification, summarization, and drafting, with a human review step where it matters.",
      },
      {
        title: "Custom API integration",
        description: "Connect tools that were never designed to talk to each other, without a fragile point-to-point patchwork.",
      },
      {
        title: "Monitoring & error handling",
        description: "Failed runs get flagged and retried, not silently dropped. Automations you can actually trust to run unattended.",
      },
    ],
    techStack: ["n8n", "Node.js", "OpenAI", "Google Gemini", "REST & Webhooks"],
    faq: [
      {
        question: "What tools can you connect together?",
        answer: "If it has an API or webhook (most CRMs, support desks, spreadsheets, Slack, email providers, and internal databases), n8n can connect it.",
      },
      {
        question: "Do we need our own n8n instance?",
        answer: "We can build on a self-hosted or cloud n8n instance, either yours or one we set up and hand over. You own the workflows either way.",
      },
      {
        question: "How is this different from a no-code automation tool we could build ourselves?",
        answer: "We handle the parts that break in practice: error handling, retries, auth, and edge cases, so the automation still runs correctly when an upstream API changes or a request fails.",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    category: "Growth",
    tagline: "Organic growth built on technical precision and content authority",
    summary:
      "Organic growth built on technical precision and content authority. Rankings that hold because they're earned, not gamed.",
    bullets: ["Technical SEO audits", "Core Web Vitals", "Content strategy", "Structured data & schema"],
    overview:
      "Technical SEO is the foundation every other growth channel sits on top of. We audit and fix the structural issues (crawlability, Core Web Vitals, structured data, semantic HTML) that keep a good product from ranking, then build a content strategy on top of a technically sound site rather than papering over a broken one.",
    capabilities: [
      {
        title: "Technical SEO audits",
        description: "Full crawl and audit covering indexation, Core Web Vitals, structured data, and semantic HTML, with a prioritized fix list, not just a scorecard.",
      },
      {
        title: "Core Web Vitals",
        description: "Real performance engineering, including image optimization, caching, and render-blocking fixes, not a plugin that claims to handle it.",
      },
      {
        title: "Structured data & schema",
        description: "Organization, Product, Article, and FAQ schema implemented correctly so search engines understand exactly what's on the page.",
      },
      {
        title: "Content strategy",
        description: "Keyword and content planning grounded in what your business actually offers, aimed at rankings that convert, not just traffic.",
      },
    ],
    techStack: ["Next.js Metadata API", "Schema.org", "Core Web Vitals", "Search Console", "Sitemaps & robots.txt"],
    faq: [
      {
        question: "How long until we see ranking movement?",
        answer: "Technical fixes (indexation, Core Web Vitals) can show up in weeks. Competitive keyword rankings are a months-long compounding effort. We'll give you a realistic timeline once we've seen your site.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer: "No one honestly can. Anyone promising a guaranteed ranking is not being straight with you. We focus on the technical and content fundamentals that earn rankings and hold up over time.",
      },
      {
        question: "Is SEO offered as a one-off project or ongoing retainer?",
        answer: "Both. A technical audit and fix pass is typically a fixed-scope project; ongoing content and ranking work is offered as a monthly or yearly retainer. See the SEO plans below.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
