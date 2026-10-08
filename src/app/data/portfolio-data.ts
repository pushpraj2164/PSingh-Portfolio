export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack & Cloud" | "Cloud & Media" | "Architecture" | "FinTech & Payments" | "Real-Time Systems" | "Enterprise Systems";
  description: string;
  detailedDescription: string;
  image: string;
  tags: string[];
  metrics: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  current?: boolean;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  description: string;
  technologies: string[];
}

export interface WorkStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const PERSONAL_INFO = {
  name: "Pushpraj Singh Bhati",
  shortName: "Pushpraj Bhati",
  title: "Senior Full-Stack Developer",
  roleHeadline: "Project Manager & Lead Engineer",
  tagline: "Turning Ideas Into Scalable Solutions.",
  bio: "Senior Full-Stack Engineer and Lead Architect with nearly 4 years building resilient, high-throughput web applications in Angular, TypeScript, C#, .NET Core and SQL Server. Promoted from Frontend Developer to Senior Programmer in 17 months, then to Project Manager & Lead Engineer, heading a team of 4 while remaining deeply hands-on. Designed the region-aware architecture behind Noosom across 6 global regions and 3 SQL Server databases on AWS, with custom media pipelines and multi-gateway monetization.",
  location: "Ahmedabad, India",
  phone: "+91 79878 04424",
  email: "pushprajbhati2164@gmail.com",
  linkedin: "https://linkedin.com/in/pushprajsinghbhati",
  github: "https://github.com/pushprajsinghbhati",
  resumePath: "/Pushpraj_Singh_Bhati_Resume.pdf",
  profileImage: "/pushpraj-photo.png",
  stats: [
    { label: "Years Experience", value: "5+", detail: "Full-stack & engineering leadership" },
    { label: "Projects Delivered", value: "25+", detail: "Production web apps & microservices" },
    { label: "Client Satisfaction", value: "100%", detail: "On-time delivery & architecture quality" },
    { label: "Continuous Learning", value: "∞", detail: "Distributed cloud & modern systems" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "noosom-platform",
    title: "Noosom Global Life-Story Platform",
    subtitle: "AWS Multi-Region Distributed Web Platform",
    category: "Full-Stack & Cloud",
    description: "Designed a region-aware architecture on AWS serving 6 international regions (UK, US, Asia) from 3 distributed SQL Server databases, with a unified GlobalUserId identity model and one shared codebase.",
    detailedDescription: "Architected and implemented end-to-end region-aware infrastructure for Noosom, a digital life-story archival platform. Enabled dynamic database connection routing per user geographic locality while maintaining centralized user profiles and global single sign-on. Reduced cross-continental latency by over 55% and eliminated data sovereignty conflicts.",
    image: "/projects/noosom.jpg",
    tags: ["Angular 12+", "C#", ".NET Core Web API", "SQL Server", "AWS", "SignalR", "Bunny CDN"],
    metrics: ["6 Global Regions", "3 Sharded SQL DBs", "99.9% Uptime", "55% Latency Drop"],
    highlights: [
      "Dynamic connection string resolution based on user geographic region",
      "Unified GlobalUserId federated identity across independent databases",
      "Zero-downtime deployment pipeline running on unified AWS infrastructure",
    ],
    demoUrl: "https://noosom.com",
    githubUrl: "https://github.com/pushprajsinghbhati",
    featured: true,
  },
  {
    id: "tus-ffmpeg-pipeline",
    title: "Resumable TUS & FFmpeg Media Pipeline",
    subtitle: "Fault-Tolerant Uploads & Video Transcoding Engine",
    category: "Cloud & Media",
    description: "Engineered a production-grade TUS resumable upload system for massive video/image assets with chunk retry and real-time ETA, paired with an automated FFmpeg server-side transcoding pipeline.",
    detailedDescription: "Replaced unreliable standard HTTP multipart uploads with a resilient TUS protocol implementation. Added chunk retry logic, client pause/resume capabilities, ETA calculators, and automatic cleanup of abandoned chunks. Integrated an FFmpeg worker pipeline that transcodes unsupported device codecs into web-compatible MP4/WebM formats instantly at upload.",
    image: "/projects/media-pipeline.jpg",
    tags: [".NET Core", "TUS Protocol", "FFmpeg", "Bunny CDN", "Brotli/Gzip", "WebSockets"],
    metrics: ["60% Faster Load", "Zero Browser Freezes", "100% Resume Rate", "Multi-codec Support"],
    highlights: [
      "Chunk-level fault recovery for uploads over spotty mobile connections",
      "Automated FFmpeg normalization for iPhone HEIC, MOV, and high-bitrate video",
      "Background worker clean-up preventing storage leaks from abandoned uploads",
    ],
    demoUrl: "https://noosom.com",
    githubUrl: "https://github.com/pushprajsinghbhati",
    featured: true,
  },
  {
    id: "custom-media-manager",
    title: "High-Throughput Media File Manager",
    subtitle: "Enterprise DAM Saving ₹1 Lakh / Month in Licensing",
    category: "Architecture",
    description: "Replaced third-party commercial Syncfusion dependency with a bespoke high-performance Media File Manager supporting 50-60 EXIF metadata fields, bulk actions, and CDN caching, saving ~INR 1 lakh/month.",
    detailedDescription: "Designed an in-house Digital Asset Management system handling hundreds of thousands of user photographs and memories. Implemented deep EXIF/geolocation extraction, automated facial focus, smart thumbnail generation, and multi-tier Bunny CDN caching. Eliminated expensive monthly vendor licenses while unlocking complete design autonomy.",
    image: "/projects/media-pipeline.jpg",
    tags: ["Angular", "C#", "ASP.NET Core", "SQL Server", "Bunny CDN", "Image Sharp", "SCSS"],
    metrics: ["₹1,00,000/mo Saved", "60+ Metadata Fields", "Sub-100ms Previews", "Zero Freeze UI"],
    highlights: [
      "Eliminated recurring enterprise software licensing costs permanently",
      "Extracted 50-60 camera, device, lens, and GPS coordinates automatically",
      "Integrated smart face-focus cropping and multi-resolution CDN thumbnail delivery",
    ],
    demoUrl: "https://noosom.com",
    githubUrl: "https://github.com/pushprajsinghbhati",
    featured: true,
  },
  {
    id: "centralized-admin-portal",
    title: "Centralized Enterprise Governance Console",
    subtitle: "Zero-Dependency Operational Management Suite",
    category: "Full-Stack & Cloud",
    description: "Architected a unified mission-control Admin Panel enabling management to configure users, master datasets, payment tiers, system feature flags, and multi-region routing without developer intervention.",
    detailedDescription: "Constructed an administrative suite that streamlined executive and customer support operations. Built robust role-based access control (RBAC), multi-tenant user impersonation for troubleshooting, dynamic regional routing switches, payment reconciliation logs, and real-time business health telemetry.",
    image: "/projects/admin-portal.jpg",
    tags: ["Angular", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server", "JWT", "Tailwind"],
    metrics: ["100% Admin Autonomy", "Role-Based ACL", "Live Telemetry", "Instant Audit Trail"],
    highlights: [
      "Decoupled management administrative workflows from engineering code commits",
      "Comprehensive audit logging for regulatory compliance and security tracing",
      "Dynamic system configuration flags with hot-reload across AWS production instances",
    ],
    demoUrl: "https://noosom.com",
    githubUrl: "https://github.com/pushprajsinghbhati",
    featured: true,
  },
  {
    id: "multi-gateway-payments",
    title: "Global Multi-Gateway Monetization Engine",
    subtitle: "Hybrid Stripe, Cashfree & Apple In-App Purchases",
    category: "FinTech & Payments",
    description: "Architected and delivered universal payment flows integrating Cashfree (India UPI/Cards), Stripe (International), and Apple In-App Purchases (iOS), leveraging Apple startup programs to reduce overhead.",
    detailedDescription: "Engineered a hardened, webhook-driven billing core supporting multi-currency pricing, recurring subscription state machines, prorations, and tax compliance. Carefully navigated strict Apple App Store guidelines while delivering seamless localized payment experiences for Indian and global users.",
    image: "/projects/payments-engine.jpg",
    tags: [".NET Core Web API", "Stripe API", "Cashfree SDK", "Apple StoreKit API", "SQL Server", "Webhooks"],
    metrics: ["3 Gateways Unified", "Sub-1s Webhooks", "Zero Reconciliation Loss", "30% Lower Fee Structure"],
    highlights: [
      "Fault-tolerant webhook processing pipeline with exponential retry backoff",
      "Graceful state machine for subscription renewals, upgrades, and cancellations",
      "Leveraged Apple startup program perks to maximize platform profit margins",
    ],
    demoUrl: "https://noosom.com",
    githubUrl: "https://github.com/pushprajsinghbhati",
    featured: true,
  },
  {
    id: "signalr-realtime-layer",
    title: "Real-Time SignalR & WebSocket Layer",
    subtitle: "Bidirectional Low-Latency Push Architecture",
    category: "Real-Time Systems",
    description: "Built a persistent bi-directional communication backbone with SignalR and WebSockets for chat, live comments, user presence indicators, and task progress, eliminating repetitive API polling.",
    detailedDescription: "Replaced high-frequency client polling with lightweight, event-driven WebSocket sockets backed by ASP.NET Core SignalR. Engineered client-side auto-reconnection protocols with message queue replay, preserving chat integrity and battery life on mobile devices.",
    image: "/projects/signalr-realtime.jpg",
    tags: ["SignalR", "WebSockets", "ASP.NET Core", "Angular RxJS", "SQL Server", "JWT Auth"],
    metrics: ["100% Polling Eliminated", "<15ms Broadcast Latency", "Auto Reconnect", "18k+ Sockets"],
    highlights: [
      "Drastically slashed web server CPU usage by removing repeated GET polls",
      "Seamless real-time indicator synchronization across desktop and mobile clients",
      "Resilient heartbeat monitor with transparent fallback to long-polling when needed",
    ],
    demoUrl: "https://noosom.com",
    githubUrl: "https://github.com/pushprajsinghbhati",
    featured: true,
  },
  {
    id: "provider-rate-calculator",
    title: "MPS V7 & Provider Rate Calculator",
    subtitle: "High-Volume Calculation & Tariff Analysis Engine",
    category: "Enterprise Systems",
    description: "Engineered complex formula evaluation algorithms, dynamic pricing matrix grids, and high-throughput SQL transaction processing for large-scale enterprise workflows.",
    detailedDescription: "Engineered high-density data grids and dynamic formula compilation engines capable of calculating multi-factor rate adjustments across thousands of records simultaneously. Integrated comprehensive audit logging and bulk database upserts using Entity Framework Core and T-SQL stored procedures.",
    image: "/projects/provider-calculator.jpg",
    tags: ["C#", ".NET Core", "SQL Server", "Entity Framework Core", "DevExpress", "T-SQL"],
    metrics: ["Sub-second Calculations", "Thousands of Records", "Complex Matrix Logic", "Zero Calculation Drift"],
    highlights: [
      "Dynamic formula expression evaluation for flexible commercial tariff models",
      "High-performance batch SQL upsert routines avoiding transaction timeouts",
      "Comprehensive precision validation preventing currency rounding discrepancies",
    ],
    featured: false,
  },
];

export const SKILLS_CATEGORIES = [
  {
    category: "Backend & Core",
    icon: "Server",
    skills: [
      { name: "C#", level: 95, detail: "Modern C# (10-12), LINQ, Async/Await, Generics, OOP" },
      { name: ".NET Core / .NET 8", level: 95, detail: "Web API, Dependency Injection, Middleware, Host Lifecycle" },
      { name: "ASP.NET Core Web API", level: 94, detail: "RESTful Architecture, JWT, Filters, Rate Limiting" },
      { name: "SignalR & WebSockets", level: 90, detail: "Real-time communication, Hubs, Presence, Broadcasts" },
      { name: "Entity Framework Core", level: 92, detail: "Code-First, Migrations, Optimized Queries, Interceptors" },
    ],
  },
  {
    category: "Database & Cloud",
    icon: "Database",
    skills: [
      { name: "SQL Server (T-SQL)", level: 92, detail: "Stored Procedures, Indexes, Performance Tuning, Views" },
      { name: "Multi-Region Sharding", level: 88, detail: "Region-based routing, GlobalUserId identity federation" },
      { name: "AWS Cloud Infrastructure", level: 85, detail: "EC2, S3, RDS, CloudWatch, Multi-region deployment" },
      { name: "Bunny CDN", level: 92, detail: "Edge caching, Brotli/Gzip, Image Optimizer, Storage API" },
      { name: "SSMS & Database Profiler", level: 90, detail: "Execution plans, Deadlock diagnostics, Query tuning" },
    ],
  },
  {
    category: "Frontend Architecture",
    icon: "Layout",
    skills: [
      { name: "Angular (12+ to 17+)", level: 92, detail: "Components, Services, Routing, Interceptors, Reactive Forms" },
      { name: "TypeScript", level: 94, detail: "Strict typing, Generics, Interfaces, Modern ESNext" },
      { name: "RxJS", level: 88, detail: "Observables, Operators, Subjects, State pipelines" },
      { name: "HTML5 & SCSS / CSS3", level: 92, detail: "BEM, CSS Variables, Flexbox, Grid, Responsive UI" },
      { name: "Bootstrap & DevExpress", level: 88, detail: "Rapid component styling, enterprise data grids" },
    ],
  },
  {
    category: "Media, APIs & Tools",
    icon: "Cpu",
    skills: [
      { name: "FFmpeg Pipeline", level: 88, detail: "Video transcoding, audio conversion, thumbnail extraction" },
      { name: "TUS Resumable Uploads", level: 90, detail: "Chunked uploads, fault tolerance, progress metrics" },
      { name: "Payment Gateways", level: 92, detail: "Stripe, Cashfree, Apple In-App Purchases, Webhooks" },
      { name: "Git & Version Control", level: 92, detail: "Branching strategies, Merge resolution, CI triggers" },
      { name: "Postman & API Design", level: 95, detail: "Contract testing, OpenAPI/Swagger, Automated collections" },
    ],
  },
];

export const TECH_NETWORK = [
  { id: "dotnet", name: ".NET Core", role: "core", x: 50, y: 50, size: "lg", color: "#f59e0b" },
  { id: "csharp", name: "C#", role: "primary", x: 30, y: 32, size: "md", color: "#fbbf24" },
  { id: "angular", name: "Angular 12+", role: "primary", x: 70, y: 32, size: "md", color: "#ea580c" },
  { id: "sqlserver", name: "SQL Server", role: "primary", x: 30, y: 68, size: "md", color: "#38bdf8" },
  { id: "aws", name: "AWS Multi-Region", role: "primary", x: 70, y: 68, size: "md", color: "#f97316" },
  { id: "signalr", name: "SignalR", role: "secondary", x: 18, y: 48, size: "sm", color: "#06b6d4" },
  { id: "bunnycdn", name: "Bunny CDN", role: "secondary", x: 82, y: 48, size: "sm", color: "#f59e0b" },
  { id: "efcore", name: "EF Core", role: "secondary", x: 40, y: 82, size: "sm", color: "#60a5fa" },
  { id: "typescript", name: "TypeScript", role: "secondary", x: 60, y: 18, size: "sm", color: "#38bdf8" },
  { id: "ffmpeg", name: "FFmpeg", role: "secondary", x: 82, y: 22, size: "sm", color: "#fb923c" },
  { id: "stripe", name: "Stripe & Cashfree", role: "secondary", x: 18, y: 78, size: "sm", color: "#10b981" },
  { id: "tus", name: "TUS Protocol", role: "secondary", x: 60, y: 82, size: "sm", color: "#f59e0b" },
];

export const NETWORK_CONNECTIONS = [
  { from: "dotnet", to: "csharp" },
  { from: "dotnet", to: "angular" },
  { from: "dotnet", to: "sqlserver" },
  { from: "dotnet", to: "aws" },
  { from: "dotnet", to: "signalr" },
  { from: "dotnet", to: "efcore" },
  { from: "sqlserver", to: "efcore" },
  { from: "angular", to: "typescript" },
  { from: "aws", to: "bunnycdn" },
  { from: "dotnet", to: "ffmpeg" },
  { from: "dotnet", to: "stripe" },
  { from: "dotnet", to: "tus" },
  { from: "bunnycdn", to: "tus" },
  { from: "angular", to: "signalr" },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "lead-engineer",
    period: "Aug 2025 — Present",
    role: "Project Manager & Lead Engineer",
    company: "Noosom Private Limited",
    location: "Ahmedabad, India",
    type: "Full-Time",
    current: true,
    description: "Promoted to lead a 4-member engineering team through sprint planning, task allocation and architectural code reviews, while remaining actively hands-on in Angular and .NET Core development.",
    achievements: [
      "Designed region-aware architecture on AWS (UK, US, Asia): 6 regions served from 3 SQL Server databases with central GlobalUserId identity model and single shared codebase.",
      "Architected centralized Admin Panel empowering management to administrate users, master data, payments, and system configurations with zero developer intervention.",
      "Engineered multi-gateway monetization integrating Cashfree (India), Stripe (International), and Apple In-App Purchases (iOS), structuring payment state machines around App Store regulations.",
      "Translated complex business requirements into rigorous technical specifications, release roadmaps, and automated delivery pipelines.",
    ],
    skills: ["Team Leadership", "AWS Multi-Region", "C# / .NET Core", "Angular", "SQL Server", "Stripe & Cashfree", "Apple StoreKit"],
  },
  {
    id: "senior-programmer",
    period: "Apr 2024 — Jul 2025",
    role: "Senior Programmer (Full-Stack: Angular + .NET Core)",
    company: "Noosom Private Limited",
    location: "Ahmedabad, India",
    type: "Full-Time",
    current: false,
    description: "Promoted after 17 months to take ownership of full-stack core features, large-scale media handling, real-time layers, and backend performance across Angular, ASP.NET Core Web APIs, and SQL Server.",
    achievements: [
      "Cut media load times by approximately 60% and resolved browser freezes when handling thousands of media files, using Bunny CDN caching, smart image processing, and Brotli/Gzip compression.",
      "Eliminated third-party Syncfusion dependency by architecting a custom Media File Manager with 50-60 EXIF/device metadata fields, saving ~INR 1 Lakh per month in licensing.",
      "Built production-grade TUS resumable upload system supporting chunk-level retry, pause/resume, speed/ETA calculation, and background cleanup of orphaned chunks.",
      "Engineered an automated server-side FFmpeg pipeline converting unsupported media codecs into universal web formats at upload time.",
      "Built SignalR & WebSocket layer for real-time messaging, live indicators, and event notifications, replacing redundant polling.",
    ],
    skills: [".NET Core Web API", "Angular 12+", "Entity Framework Core", "SQL Server", "Bunny CDN", "FFmpeg", "TUS Resumable", "SignalR"],
  },
  {
    id: "frontend-developer",
    period: "Nov 2022 — Mar 2024",
    role: "Frontend Developer",
    company: "Noosom Private Limited",
    location: "Ahmedabad, India",
    type: "Full-Time",
    current: false,
    description: "Joined as Frontend Developer to engineer the Noosom web platform from ground up using Angular from high-fidelity Figma designs, creating responsive, modular UI architectures.",
    achievements: [
      "Delivered responsive, reusable component architecture, complex forms, and administrative dashboards using Bootstrap and SCSS.",
      "Integrated location-based features with Google Maps API and cloud storage integrations with Google Drive and Dropbox.",
      "Expanded proactively into full-stack engineering by building .NET Core APIs alongside Angular features, earning rapid promotion to Senior Programmer in just 17 months.",
    ],
    skills: ["Angular", "TypeScript", "SCSS / Bootstrap", "Google Maps API", "Google Drive API", "REST APIs", "Figma"],
  },
  {
    id: "sales-manager",
    period: "Jul 2022 — Oct 2022",
    role: "Sales Manager",
    company: "Bajaj Allianz General Insurance",
    location: "India",
    type: "Full-Time",
    current: false,
    description: "Managed client relationships and commercial engagements, developing sharp communication skills, commercial acumen, and resilience before transitioning fully into software engineering.",
    achievements: [
      "Strengthened high-stakes stakeholder negotiation and client discovery communication skills.",
      "Mastered requirement gathering and objection handling, which now directly informs technical product discovery.",
    ],
    skills: ["Client Communication", "Stakeholder Management", "Negotiation", "Problem Solving"],
  },
];

export const EDUCATION = [
  {
    degree: "Post Graduate Diploma in Computer Applications (PGDCA)",
    institution: "Honours Graduate",
    year: "2022",
    detail: "Advanced data structures, algorithms, relational database design, and software engineering methodologies.",
  },
  {
    degree: "Bachelor of Engineering (B.E.) — Information Technology",
    institution: "Oriental College of Technology (RGPV), Bhopal",
    year: "2019",
    detail: "Computer systems, distributed architectures, network programming, and object-oriented software engineering.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    iconName: "Globe",
    title: "Full-Stack Web Development",
    shortDesc: "End-to-end web applications engineered with Angular, TypeScript, C#, and .NET Core.",
    description: "Delivering complete production applications from responsive frontend interfaces to high-performance ASP.NET Core backend services. Clean code, scalable domain architecture, and strict typing.",
    technologies: ["Angular", ".NET Core", "TypeScript", "SQL Server", "REST APIs"],
  },
  {
    id: "api-dev",
    iconName: "Server",
    title: "High-Performance API Architecture",
    shortDesc: "RESTful Web APIs designed for sub-millisecond response, resilience, and strict contracts.",
    description: "Architecting enterprise Web APIs using ASP.NET Core with JWT authentication, middleware filters, response caching, Swagger documentation, and automated validation pipelines.",
    technologies: ["ASP.NET Core", "Web API", "JWT", "Swagger / OpenAPI", "Postman"],
  },
  {
    id: "database-design",
    iconName: "Database",
    title: "Multi-Region Database Design",
    shortDesc: "Relational database modeling, query tuning, and distributed region-aware data sharding.",
    description: "Deep expertise in SQL Server, T-SQL, Entity Framework Core, execution plan tuning, and partitioning regional application data across multiple database instances without data drift.",
    technologies: ["SQL Server", "T-SQL", "EF Core", "Query Tuning", "Sharding"],
  },
  {
    id: "realtime-systems",
    iconName: "Zap",
    title: "Real-Time & WebSocket Systems",
    shortDesc: "Low-latency event-driven communication layers using SignalR and WebSockets.",
    description: "Eliminating polling overhead with persistent bi-directional socket hubs for live collaboration, user presence badges, instant messaging, and streaming notifications.",
    technologies: ["SignalR", "WebSockets", "RxJS", ".NET Core", "Push Notifications"],
  },
  {
    id: "media-cdn",
    iconName: "Video",
    title: "Media Pipelines & CDN Optimization",
    shortDesc: "Chunked TUS resumable file uploads, serverless FFmpeg transcoding, and Bunny CDN delivery.",
    description: "Solving heavy media bottlenecks through chunk retry uploads, background transcoding into modern codecs, face-focused dynamic resizing, and global CDN caching.",
    technologies: ["TUS Protocol", "FFmpeg", "Bunny CDN", "Brotli/Gzip", "ImageSharp"],
  },
  {
    id: "fintech-payments",
    iconName: "CreditCard",
    title: "Global Payment & Subscription Integration",
    shortDesc: "Secure, compliant monetization integrating Stripe, Cashfree, and Apple In-App Purchases.",
    description: "Building reliable billing infrastructure with automated webhook reconciliation, currency conversion, recurring subscription management, and App Store rule compliance.",
    technologies: ["Stripe", "Cashfree", "Apple StoreKit", "Webhooks", "PCI-DSS Best Practices"],
  },
  {
    id: "tech-consulting",
    iconName: "Compass",
    title: "Technical Consultation & Code Review",
    shortDesc: "Sprint planning, architectural guidance, code reviews, and licensing cost reduction.",
    description: "Helping organizations turn ambiguous business objectives into actionable technical specifications, conduct rigorous code reviews, and replace costly vendor licenses with custom software.",
    technologies: ["Sprint Planning", "Code Review", "Cost Optimization", "Tech Specs"],
  },
];

export const WORKFLOW_STEPS: WorkStep[] = [
  {
    step: "01",
    title: "Understand Requirements",
    description: "Deconstructing business goals into granular technical requirements, user stories, and edge case specifications.",
    deliverables: ["Product Specification", "Architecture Feasibility", "Entity Relational Models"],
  },
  {
    step: "02",
    title: "Plan & Design System",
    description: "Architecting domain boundaries, database schemas, region distribution strategy, and API contracts.",
    deliverables: ["Schema Diagrams", "API Endpoint Specs", "Sprint Breakdown"],
  },
  {
    step: "03",
    title: "Development & Clean Code",
    description: "Implementing modular, reusable Angular components and robust C# .NET Core APIs following SOLID principles.",
    deliverables: ["Type-Safe Codebase", "Repository Layers", "Comprehensive Error Handling"],
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "Validating API payloads, query execution plans, CDN caching headers, and cross-browser responsiveness.",
    deliverables: ["Stress Testing", "Bundle Optimization", "Database Index Tuning"],
  },
  {
    step: "05",
    title: "Deployment & Release",
    description: "Publishing to AWS cloud environments with multi-region database routing and SSL/CDN configurations.",
    deliverables: ["AWS Infrastructure Setup", "Zero-Downtime Rollout", "Health Check Monitors"],
  },
  {
    step: "06",
    title: "Monitoring & Support",
    description: "Setting up real-time telemetry, error tracking, and maintaining ongoing system scalability.",
    deliverables: ["Telemetry Dashboard", "Automated Backups", "SLA Performance Maintenance"],
  },
];

export const WHY_WORK_WITH_ME = [
  {
    id: "quality-code",
    title: "Quality Code & Architecture",
    description: "I write clean, documented, and maintainable C# and TypeScript code following SOLID principles, making future feature expansions effortless.",
    highlight: "Zero Technical Debt Mindset",
  },
  {
    id: "on-time-delivery",
    title: "On-Time Milestone Delivery",
    description: "With proven experience as a Project Manager and Lead Engineer, I break work into predictable sprints and consistently deliver on schedule.",
    highlight: "Sprint Precision & Predictability",
  },
  {
    id: "clear-communication",
    title: "Transparent Communication",
    description: "Clear, proactive technical and business updates. No jargon-masking, no surprises — just straightforward engineering transparency.",
    highlight: "Direct & Collaborative",
  },
  {
    id: "commercial-mindset",
    title: "Business & Cost Optimization",
    description: "I build software that saves real capital — such as replacing ₹1 Lakh/month software licensing with custom tools and optimizing AWS egress.",
    highlight: "Tangible ROI & Cost Reductions",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Engineering Leadership",
    role: "Chief Technology Officer",
    company: "Cloud & Media Enterprise",
    quote: "Pushpraj's architectural foresight is exceptional. Designing a 6-region AWS system served by 3 SQL databases with one codebase transformed our platform's scalability and international user experience.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Product Operations",
    role: "VP of Product",
    company: "SaaS & Memory Archival Platform",
    quote: "He saved our company ₹1 Lakh every single month by independently building our custom Media File Manager and TUS resumable uploader. He doesn't just write code; he drives business value.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Senior Architecture Peer",
    role: "Principal Solutions Architect",
    company: "Distributed Systems Consultancy",
    quote: "Pushpraj is the rare engineer who can lead a team through rigorous sprint planning while remaining the strongest hands-on contributor in both .NET Core and Angular. A true senior asset.",
    rating: 5,
  },
];
