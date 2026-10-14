const links = {
  email: "elxanxanlarov@gmail.com",
  phone: "+994 50 733 38 16",
  github: "https://github.com/elxanxanlarov",
  linkedin: "https://www.linkedin.com/in/elkhan-khanlarov-a9673028b/",
  cv: "/elkhan-khanlarov-cv.pdf",
};

const experience = [
  {
    name: "Ephesus Beach Resort",
    kind: "Access control and QR turnstile system",
    text: "Reception staff register customers and send QR access links over WhatsApp. Customers scan the code at the turnstile, and admin and reception panels track every entry. First deployed on a local server, later moved to cPanel with the backend rewritten in PHP.",
  },
  {
    name: "Arnold Fitness",
    kind: "Membership and turnstile management",
    text: "Gym membership with card-based turnstile access: subscription packages, payment tracking, membership duration and entry limits, plus manual entry for members without their card.",
  },
  {
    name: "Zumrud Women’s Club",
    kind: "Customer and sales management",
    text: "Customer registration with entry and exit tracking, instructor assignment and scheduling, an admin panel for packages and lessons, and product sales with inventory.",
  },
  {
    name: "Fi Home",
    kind: "Store and inventory management",
    text: "Sales and stock tracking for retail: expenses, daily cash delivery reports, transfers between branches, product categories, credit sales and automatic receipts.",
  },
  {
    name: "Lankaran Springs Hotel",
    kind: "Captive portal and RADIUS authentication",
    text: "Captive portal on an Aruba Controller with FreeRADIUS on Ubuntu Server: SSID setup, AAA profiles, Layer 3 authentication, automatic guest login and access logs in a database.",
  },
];

const projects = [
  {
    name: "Salex.az",
    role: "Full Stack Developer",
    text: "AI-powered sales assistant built with Next.js, with a RAG-based system for customer communication and product recommendations.",
  },
  {
    name: "Evimfix.az",
    role: "Full Stack Developer",
    text: "Real estate platform with property listings, search and filtering, user management and admin tools.",
    href: "https://evimfix.az",
  },
  {
    name: "Ficlub.az",
    role: "Full Stack Developer",
    text: "Training and course management platform: course creation, instructor management and participant tracking.",
    href: "https://ficlub.az",
  },
  {
    name: "Yalli.org",
    role: "Frontend Developer",
    text: "Platform for Azerbaijanis living abroad, built with React.js and later migrated to Next.js for performance and SEO.",
  },
  {
    name: "CRM (Baku Design Academy)",
    role: "Frontend Developer",
    text: "Sales CRM interfaces for customer management and sales pipeline tracking.",
  },
];

const education = [
  {
    school: "Matrix Academy",
    subject: "Frontend Developer (React.js)",
    years: "Feb 2024 – Sep 2024",
  },
  {
    school: "Mastercode Academy",
    subject: "Frontend Developer (JavaScript)",
    years: "Jul 2023 – Jan 2024",
  },
  {
    school: "AZMIUK",
    subject: "Operation of Water Supply Systems",
    years: "Sep 2023 – Jun 2025",
  },
];

const skills = [
  { group: "Frontend", items: "React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS" },
  { group: "Backend", items: "Node.js, Express.js, PHP, RESTful APIs, Prisma ORM" },
  { group: "Databases", items: "MySQL, PostgreSQL, MariaDB, Redis" },
  { group: "DevOps & Hosting", items: "Git, GitHub, Docker, cPanel, Vercel, Hetzner, Linux Server (Ubuntu)" },
  {
    group: "System & Hardware",
    items: "Access Control Systems, QR & Turnstiles, Captive Portal, FreeRADIUS, Aruba Controller",
  },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-black/10 py-12 dark:border-white/15">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6">
      <header className="flex items-center justify-between py-6">
        <span className="font-semibold">Elkhan Khanlarov</span>
        <nav className="flex gap-5 text-sm">
          <a className="hover:underline" href="#experience">
            Experience
          </a>
          <a className="hover:underline" href="#projects">
            Projects
          </a>
          <a className="hover:underline" href="#skills">
            Skills
          </a>
          <a className="hover:underline" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="py-16">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Elkhan Khanlarov</h1>
          <p className="mt-2 text-xl text-zinc-600 dark:text-zinc-400">Fullstack Developer · Baku, Azerbaijan</p>
          <p className="mt-6 max-w-2xl leading-7">
            Fullstack Developer with a solid track record of delivering web, desktop, and system-level
            applications for real-world businesses. Skilled across the entire stack, from UI/UX implementation
            with React to backend APIs, database design, and server deployment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
            <a
              className="rounded-md bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-85"
              href={links.cv}
              download
            >
              Download CV
            </a>
            <a
              className="rounded-md border border-black/15 px-4 py-2 transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-md border border-black/15 px-4 py-2 transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <Section id="experience" title="Work Experience">
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Fullstack Developer</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Fitechnology · May 2025 – Present</p>
            <p className="mt-3 leading-7">
              Developed and maintained multiple business management, access control, and automation systems
              for real clients using React.js, Node.js, PHP, MySQL, and network technologies.
            </p>
          </div>
          <ul className="space-y-6">
            {experience.map((item) => (
              <li key={item.name}>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.kind}</p>
                <p className="mt-2 leading-7">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <ul className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.name} className="rounded-lg border border-black/10 p-5 dark:border-white/15">
                <h3 className="font-semibold">
                  {project.href ? (
                    <a className="hover:underline" href={project.href} target="_blank" rel="noreferrer">
                      {project.name} ↗
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.role}</p>
                <p className="mt-2 text-sm leading-6">{project.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.group} className="sm:grid sm:grid-cols-[11rem_1fr] sm:gap-4">
                <dt className="font-semibold">{skill.group}</dt>
                <dd className="leading-7">{skill.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="Education">
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.school} className="sm:flex sm:items-baseline sm:justify-between sm:gap-4">
                <div>
                  <h3 className="font-semibold">{item.school}</h3>
                  <p>{item.subject}</p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.years}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <ul className="space-y-2">
            <li>
              <a className="hover:underline" href={`mailto:${links.email}`}>
                {links.email}
              </a>
            </li>
            <li>
              <a className="hover:underline" href="tel:+994507333816">
                {links.phone}
              </a>
            </li>
            <li>Baku, Azerbaijan</li>
          </ul>
        </Section>
      </main>

      <footer className="border-t border-black/10 py-6 text-sm text-zinc-600 dark:border-white/15 dark:text-zinc-400">
        © 2026 Elkhan Khanlarov
      </footer>
    </div>
  );
}
