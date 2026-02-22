export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  role: string;
  stack: string[];
  outcome: string;
  links: { label: string; href: string }[];
  description: string;
}

export const featuredProjects: Project[] = [
  {
    slug: "clawpost",
    title: "ClawPost",
    oneLiner:
      "AI-assisted social posting automation across X, LinkedIn, and Telegram.",
    role: "Built end-to-end",
    stack: ["Next.js", "NestJS", "OpenAI API", "PostgreSQL", "Redis", "Docker"],
    outcome:
      "Reduced manual posting workflow from 15 min to under 2 min per post.",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" },
    ],
    description:
      "ClawPost automates the creation and scheduling of social media posts using AI-generated copy tailored per platform. It handles multi-platform publishing with a single workflow, including content adaptation, scheduling, and analytics tracking.",
  },
  {
    slug: "fall-detection-synthetic-data",
    title: "Synthetic Data for Fall Detection",
    oneLiner:
      "Optical flow and pose pipeline with synthetic data augmentation for fall detection models.",
    role: "ML lead",
    stack: ["PyTorch", "OpenCV", "MediaPipe", "Python", "NumPy", "Blender"],
    outcome:
      "Improved model accuracy via interpolation-based synthetic data generation.",
    links: [{ label: "Write-up", href: "#" }],
    description:
      "Developed a pipeline that generates synthetic fall sequences by interpolating between real pose keyframes, augmenting limited training data. Explored optical flow features alongside skeleton-based representations to improve detection robustness across camera angles.",
  },
  {
    slug: "dynamic-db-builder",
    title: "3Clickz — Dynamic DB Builder",
    oneLiner:
      "Metadata-driven system for generating tables, pages, and forms from configuration.",
    role: "Full-stack developer",
    stack: ["React", "NestJS", "PostgreSQL", "TypeScript", "Prisma", "Docker"],
    outcome:
      "Enabled non-technical users to create full CRUD interfaces without writing code.",
    links: [{ label: "GitHub", href: "#" }],
    description:
      "A platform where database schemas, UI pages, and forms are defined through metadata rather than code. Users configure entities and relationships through a visual builder, and the system generates fully functional CRUD interfaces, validation rules, and API endpoints automatically.",
  },
  {
    slug: "property-extraction",
    title: "Property & Legal Pack Extraction",
    oneLiner:
      "OCR and AI pipeline for extracting structured data from property legal packs.",
    role: "Built end-to-end",
    stack: ["Python", "Tesseract", "OpenAI API", "FastAPI", "PostgreSQL", "AWS"],
    outcome:
      "Reduced manual document processing time by approximately 80%.",
    links: [{ label: "GitHub", href: "#" }],
    description:
      "An extraction pipeline that processes scanned legal documents (title deeds, searches, lease agreements) using OCR and LLM-based entity extraction. Outputs structured JSON with key property details, dates, obligations, and flags for human review.",
  },
];

export const otherProjects = [
  {
    title: "EV Charging Sharing App",
    description: "Peer-to-peer EV charger sharing platform concept with booking and payments.",
  },
  {
    title: "VR Social Skills Training",
    description: "VR-based social scenario simulator for practicing communication skills.",
  },
  {
    title: "Secure Authenticator",
    description: "Concept for a hardware-backed authentication system with biometric verification.",
  },
  {
    title: "Data Pipeline Monitor",
    description: "Dashboard for monitoring ETL pipeline health, latency, and error rates.",
  },
];

export const toolbelt = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  Backend: ["NestJS", "Node.js", "REST APIs", "GraphQL"],
  Data: ["PostgreSQL", "Redis", "ETL Pipelines", "Prisma"],
  ML: ["PyTorch", "OpenCV", "Computer Vision", "LLM APIs"],
};

export const researchContent = {
  focusAreas: [
    "Synthetic data generation for limited-label video understanding tasks",
    "Robustness and generalization in pose-based human activity recognition",
  ],
  contributions: [
    "Built interpolation-based synthetic data pipelines for fall detection datasets",
    "Compared optical flow vs. skeleton features across multiple camera viewpoints",
    "Evaluated model performance under domain shift using cross-environment test sets",
  ],
  links: [{ label: "Research Report", href: "#" }],
};
