/* app.js - Vanilla JS version of your React app, keeping the same Tailwind-based format */

(function () {
  const appEl = document.getElementById("app");
  const navbarEl = document.getElementById("navbar");
  const chatEl = document.getElementById("chat-assistant");
  const toastsEl = document.getElementById("toasts");

  const LEADER_FADE_MS = 700;
  const LEADER_INTERVAL_MS = 5000;

  const TEAM_STORAGE_KEY = "dt_team_members";
  const FALLBACK_MEMBERS = [
    {
      name: "Meri Sargsian",
      role: " Web Development ",
      img: "Team Members/Meri%20Sargsian.png",
      slug: "meri-sargsian",
      sortOrder: 14,
      project: "Shade LA",
      cardObjectPosition: "50% 20%",
      bio:
        "Computer Science student at Los Angeles Valley College, planning to transfer to a UC in 2026. Experienced in web development and UX design with skills in React.js, ASP.NET, WordPress, HTML, CSS, and JavaScript. Previously worked as a full-stack developer and web development instructor, and contributed to website design improvements for nonprofit organizations.",
      highlights: [
        "Computer Science student at Los Angeles Valley College (transfer goal: UC in 2026).",
        "Web development + UX design experience across React.js and modern front-end tooling.",
        "Project team member on Shade LA.",
      ],
      projects: [
        {
          openPreviewId: "03",
          title: "Shade LA",
          subtitle: "Urban Heat Mitigation • Saron",
          img: "gitlogos/ShadeLA.png",
          teamLine: "Team: Volodymyr Balan, Saron Feyisa, Monica Kaye +1 more",
          browserUrl: "https://digitaltwinshub2025.github.io/Shade-LA/",
          description:
            "To demonstrate and communicate effective shade planning strategies in Los Angeles by using interactive maps, 3D simulations, and data analytics that support informed decision-making for urban heat mitigation.",
        },
      ],
      skills: ["React.js", "ASP.NET", "WordPress", "HTML", "CSS", "JavaScript", "UX Design"],
      experience: ["Previously worked as a full-stack developer and web development instructor.", "Contributed to website design improvements for nonprofit organizations.", "Project: Shade LA."],
      education: ["Los Angeles Valley College — Computer Science"],
    },
    {
      name: "Omid Ahmadi",
      role: "Software Engineer • Project Lead",
      img: "Team Members/Omid-Ahmadi.jpeg",
      slug: "omid-ahmadi",
      sortOrder: 1,
      cardObjectPosition: "50% 15%",
      bio:
        "I worked at AT&T (DIRECTV) as a Quality Assurance on a project called SignalSaver / RainFade. This technology allows viewers to continue watching through the internet whenever there is a streaming interruption, or automatically switch if the satellite signal is lost. After two years of development and testing, we successfully released it to the market, and in 2024 the project received an award. Project Lead on: Baldwin Hills 6-Mile Corridor Initiative.",
      highlights: [
        "Led SignalSaver / RainFade quality assurance at AT&T (DIRECTV).",
        "Helped launch an award-winning resiliency feature for satellite TV.",
      ],
      skills: [
        "C / C++ / Java",
        "Python (in progress)",
        "API / Postman / Rest Assured",
        "MySQL",
        "CI/CD / Jenkins",
        "Selenium / Cucumber (BDD)",
        "Agile / Scrum / Waterfall",
        "SDLC / STLC",
        "Google Docs / Sheets / Slides",
      ],
      experience: [
        "Quality Assurance at AT&T (DIRECTV) on SignalSaver / RainFade.",
        "Helped launch a resilience feature that keeps satellite TV streaming via internet during outages.",
        "Two years of development and testing leading to a 2024 project award.",
      ],
    },
    {
      name: "Mario Chong Loo",
      role: "Software Engineer",
      img: "Team Members/mario.png",
      slug: "mario-chong-loo",
      sortOrder: 2,
      education: ["East Los Angeles College", "Cal Poly Pomona"],
      skills: [
        "C++",
        "Java",
        "Python",
        "HTML",
        "CSS",
        "SQL",
        "JavaScript",
        "MS Office",
        "AI",
        "Front/Back End Development",
      ],
      experience: ["Previous intern @ SCEC, Saniset Fleet, and BuildLACCD.", "IT Support Technician @ RiverStreamz."],
      languages: ["English (fluent)", "Spanish (fluent)", "Chinese (spoken)"],
      extracurriculars: ["SHPE", "STEM Advantage", "MESA", "Attended HACKMESA 2025 and BroncoHacks 2025", "GameGala 2025: Judged K–12 students’ Computer Science projects"],
    },
    {
      name: "Monique Nogueira",
      role: "Architecture Designer",
      img: "Team Members/Monique%20Nogueira.jpg",
      slug: "monique-nogueira",
      sortOrder: 3,
      cardObjectPosition: "80% 50%",
      bio:
        "I am an Brazilian architect and interior designer with nearly 10 years of experience in furniture design, renovation projects, lighting design, and site management. Since moving to the United States, my perspective on architecture has expanded, inspiring me to focus on environmental and sustainable design. My experience in the Summer Internship confirmed how architecture can be a powerful tool to make the world a better place. I am passionate about creating functional and inspiring spaces while embracing new opportunities to contribute to a more sustainable future.",
      highlights: [
        "Nearly 10 years of experience across furniture design, renovations, lighting design, and site management.",
        "Focused on environmental and sustainable design with a global perspective.",
        "Committed to creating functional, inspiring spaces that make a positive impact.",
      ],
      education: [
        "Bachelor’s Degree in Architecture and Urbanism at Uniredentor Afya – 2015 - 2022 (Brazil)",
        "AA Architectural Technology and Environmental Design LATTC",
        "Postgraduate in Lighting Design at EBAC – 2024 (Brazil)",
        "Foundations of Green Building - USBGC",
        "Climate Change and Built Enviroment Course - CC WLAC",
      ],
      skills: ["Autocad", "Revit (student)", "Promob", "AURA", "ArchGIS", "Rhino (Student)"],
      experience: [
        "Architect and interior designer with project experience in furniture design and renovation work.",
        "Lighting design work supported by postgraduate training (EBAC – 2024).",
        "Site coordination and design development experience across multi-phase projects.",
      ],
    },
    {
      name: "Saron Feyisa",
      role: "SQL & Web Support Specialist",
      img: "Team Members/Saron%20Feyisa.png",
      slug: "saron-feyisa",
      sortOrder: 4,
      cardObjectPosition: "20% 10%",
      bio:
        "SQL & Web Support Specialist with experience managing SQL Server databases and building reporting and analytics workflows that improve performance, data integrity, and operational visibility. Skilled in T-SQL development, ETL/integration, automation, and dashboarding for business and technical stakeholders.",
      highlights: [
        "Manage SQL Server databases supporting document processing, client records, and fingerprinting workflows (250K+ records).",
        "Designed stored procedures, triggers, and indexes, reducing high-volume transaction time by 35%.",
        "Built Power BI dashboards monitoring performance KPIs and data integrity metrics.",
        "Automated reporting workflows using PowerShell and SQL Server Agent scheduled jobs.",
        "Maintain user-role administration and backup/restore processes to ensure reliability and security.",
      ],
      skills: [
        "Databases: SQL Server / Azure SQL / SSMS",
        "Database Design: Stored Procedures / Indexing / Normalization",
        "Programming: T-SQL / PowerShell / Python (pandas)",
        "ETL & Integration: SSIS / API Integration",
        "Analytics: Power BI / Power Query / Data Modeling",
        "Admin: SQL Server Agent / Backups & Restore / Users & Permissions / High Availability",
        "Other: SSRS / Excel Automation / Documentation / Data Governance",
      ],
      experience: [
        "SQL & Web Support Specialist — Asseye Document Processing (Los Angeles, CA) | 2013–Present.",
        "Manage SQL Server databases supporting document processing and client workflows.",
        "Optimize performance via stored procedures, triggers, and indexing.",
        "Build Power BI dashboards for KPIs and data integrity.",
        "Automate scheduled reporting using PowerShell and SQL Server Agent.",
        "Ensure data accuracy, role-based access, and backup/restore maintenance.",
      ],
    },
    {
      name: "Michael Lee",
      role: "Software Engineer (Intern)",
      img: "Team Members/Michael%20Lee.jfif",
      slug: "michael-lee",
      sortOrder: 5,
      bio:
        "Contributing to PUHC Innovation Alleys and digital twin platforms through web development, API integrations, system troubleshooting, and usability improvements.",
      education: [
        "California State University, Northridge — BA, Communication Design",
        "Los Angeles City College — Computer Information Systems (In Progress)",
      ],
      skills: [
        "C++",
        "Java",
        "Python",
        "HTML",
        "CSS",
        "APIs / JSON",
        "Front-End Development",
        "Linux",
        "UX/UI (Figma)",
        "Technical Troubleshooting",
        "Documentation",
        "MS Office",
      ],
      experience: [
        "Software Engineer (Intern) · PUHC Innovation Alleys.",
        "Contribute to digital twin platforms through web development, API integrations, system troubleshooting, and usability improvements.",
      ],
    },
    {
      name: "Myisha Arellano",
      role: "Digital and scenic Artist",
      img: "Team Members/Myisha%20Arellano.jpeg",
      slug: "myisha-arellano",
      sortOrder: 6,
      bio:
        "Myisha Arellano is a Los Angeles–based public artist whose work since 2010 has brought murals to both commercial and community spaces across Southern California. Their practice is grounded in site-specific storytelling and community collaboration, leading to partnerships with organizations ranging from arts institutions and housing developers to grassroots collectives and universities.",
      experience: ["Team member on the Baldwin Hills 6-Mile Corridor Initiative."],
    },
    {
      name: "Yiceth Cosby",
      role: "Mechanical, Environmental & XR Designer",
      img: "Team Members/Yiceth%20Cosby.png",
      slug: "yiceth-cosby",
      sortOrder: 7,
      cardObjectPosition: "50% 20%",
      bio:
        "I am a multidisciplinary designer with a background in Mechanical Design and Building Design & Environment, focused on the intersection of technology, infrastructure, and the built environment. My work explores how digital tools, such as 3D modeling, immersive visualization, and digital twins, can help understand, represent, and improve complex urban systems. Through my academic and project work in Los Angeles, I am interested in how design and emerging technologies can support more resilient, sustainable, and community-oriented environments.\n\nExperienced in Rhino, Revit, Twinmotion, and Unreal Engine, I focus on 3D modeling, BIM, and immersive visualization. Through projects and internships—including NASA NCAS and sustainability-focused work—I explore how technology and design can support resilient, environmentally responsible communities in Los Angeles.",
      highlights: [
        "CSWA Certified – SolidWorks",
        "NASA NCAS Program – Hardware Specialist (Lunar Rover Concept)",
        "ASU Reclamation Internship – XR & Digital Twin Modeling",
        "Administration Honors Graduate",
        "International Business emphasis",
        "Sustainability Internship aligned with USGBC principles",
      ],
      education: [
        "Associate in Science – Mechanical Design & Fabrication (Pasadena City College) — Graduated with Administration Honors (March 2026)",
        "Associate in Science – Building Design & Environment (Pasadena City College) — Graduated with Administration Honors (Dec 2025)",
        "Associate in Science – Business Administration, Emphasis: International Business (Pasadena City College) — Graduated with Administration Honors (Dec 2024)",
      ],
      skills: [
        "SolidWorks (CSWA Certified)",
        "Rhino",
        "Revit",
        "Twinmotion",
        "Unreal Engine",
        "Photogrammetry",
        "CAD / BIM workflows",
        "3D Modeling & Rendering",
        "Technical Drawing",
      ],
      interests: [
        "Digital Twins & XR Environments",
        "Sustainable & Climate-Responsive Design",
        "Infrastructure Visualization",
        "Biophilic Design",
        "Community-Centered Systems",
        "Environmental Storytelling",
      ],
      goals: [
        "Expand work in immersive and digital twin technologies",
        "Design projects that support environmental resilience",
        "Connect global perspectives with local community design",
        "Continue growing in interdisciplinary design + technology fields",
      ],
    },
    {
      name: "Monica Kaye",
      role: "UX & visual designer",
      img: "Team Members/Monica%20Kaye.jpeg",
      slug: "monica-kaye",
      sortOrder: 8,
      cardObjectPosition: "50% 39%",
      bio:
        "Monica Kaye is a multidisciplinary designer blending UX, visual design, and environmental research. With a background in movement, wellness, and the arts, she approaches climate and spatial challenges through a human-centered, systems-thinking lens. Her work is driven by curiosity, creativity, and a deep commitment to improving lives through thoughtful, research-driven design",
      experience: ["Team member on Shade LA."],
    },
    {
      name: "Brenda Cardoza",
      role: "Interior design student",
      img: "Team Members/Brenda%20Cardoza.png",
      slug: "brenda-cardoza",
      sortOrder: 9,
      bio:
        "Brenda Cardoza is an interior design student at California State University, Northridge and an emerging designer with experience in community-focused design and digital modeling. Through her internship, she has contributed to urban revitalization projects, site analysis, and the development of design concepts using tools such as Rhino, Unreal Engine, and GIS. Her academic training includes space planning, sustainable materials, and human-centered design principles, which she applies to create functional, thoughtful environments. Brenda is particularly interested in commercial and hospitality design and aims to develop spaces that enhance both experience and usability",
      experience: ["Team member on Alley Bloom."],
    },
    {
      name: "Eddie Cortez",
      role: "Architectural Designer",
      img: "Team Members/Eddie%20Cortez.jpeg",
      slug: "eddie-cortez",
      sortOrder: 10,
      bio:
        "Hello There I am a current Architectural Technology Designer and Alumni From Los Angeles Trade Tech College with Construction Background in Drywall and Framing. As Spatial relations and Design Principles quickly became an obsession I began to Interact with Software Programs Like Revit, Rhino, Arc GIS Pro, Adobe Apps, Unreal Engine, and Aura Engine as key tools Inside an Designer and Architects Arsenal. To Design for Humanity with Balanced Solutions and Interconnect with Computer Science Technology.",
      experience: ["Team member on Pando Populus."],
    },
    {
      name: "Volodymyr Balan",
      role: "Backend Software Engineer",
      img: "Team Members/Volodymyr%20Balan.jpeg",
      slug: "volodymyr-balan",
      sortOrder: 11,
      bio:
        "Building scalable web applications and RESTful APIs using Python and modern backend technologies.\n\nContributed to production Django-based systems, focusing on database modeling, authentication & authorization, API development, and performance optimization. Experienced working in remote engineering teams using Git-based workflows and Agile practices.",
      education: ["Los Angeles Valley College — Computer Science (In Progress)"],
      skills: [
        "Python",
        "Django",
        "Django REST Framework (DRF)",
        "FastAPI",
        "Celery",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "SQL",
        "AWS (Cloud Practitioner)",
        "Docker",
        "Redis",
        "Git",
        "Linux",
        "Postman",
        "REST APIs",
        "JSON",
        "YAML",
        "HTML",
        "CSS",
        "Database Modeling",
        "Authentication & Authorization",
        "API Design",
        "Debugging",
        "Technical Documentation",
      ],
      experience: ["Team member on Shade LA."],
    },
    {
      name: "Eden Olvera",
      role: "Architectural Designer",
      img: "Team Members/eden.olvera.webp",
      slug: "eden-olvera",
      sortOrder: 12,
      bio:
        "I am an architectural and computational designer working at the intersection of ecology, geometry, and generative systems. My work focuses on parametric modeling, recursive spatial subdivision, and data-driven design to create responsive environments and adaptive spatial strategies. Using tools such as Grasshopper, GIS, and custom scripting, I translate environmental and biological data—such as plant proximity, terrain, and hydrology—into computational frameworks that inform spatial organization, density, and form. I am particularly interested in ecological architecture, emergent systems, and computational methodologies that bridge natural intelligence with advanced design technologies.",
      highlights: ["2025 Design Village, Cal Poly — Competition Winner"],
      skills: [
        "Computational Design & Parametric Modeling (Grasshopper, Rhino)",
        "Generative Systems & Algorithmic Geometry",
        "GIS & Environmental Data Integration (in progress)",
        "Recursive Subdivision + Spatial Optimization",
        "Python / Design Scripting (in progress)",
        "Ecological & Landscape Systems Design",
        "3D Modeling + Digital Fabrication Workflows",
      ],
      experience: ["Team member on Shade LA.", "Team member on Pando Populus.", "Team member on PUHC Innovation Alleys."],
    },
  ];

  const state = {
    // Global-ish app state
    projects: Array.isArray(window.PROJECTS_CATALOG) ? window.PROJECTS_CATALOG : [],
    // Home page
    home: {
      mounted: false,
      showProposal: false,
      showTerms: false,
      leadersInView: false,
      ctaInView: false,
      activeLeader: 0,
      isFading: false,
      isPaused: false,
      featuredProjects: [],
      projectOfMonth: null,
    },
    // Projects page
    projectsPage: {
      mounted: false,
      searchTerm: "",
      previewingId: null,
      showEmbeddedProject: false,
      teamFilter: "all",
      teamMembers: [...FALLBACK_MEMBERS],
    },
    // Learning hub
    learning: {
      currentDetail: null,
      sections: null,
      pathways: null,
    },
    // Chat
    chat: {
      open: false,
      draft: "",
      messages: [
        {
          from: "bot",
          html:
            "Welcome to the Digital Twins Projects Hub — a space to create, share, and track projects across disciplines.",
        },
      ],
    },
  };

  // -----------------------------
  // Utilities
  // -----------------------------
  function escapeHtml(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalizeChatText(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function chatIncludes(haystack, needle) {
    const h = normalizeChatText(haystack);
    const n = normalizeChatText(needle);
    if (!h || !n) return false;
    return h.includes(n);
  }

  function getChatKnowledge() {
    const projects = Array.isArray(state.projects) ? state.projects : [];
    const members = Array.isArray(state.projectsPage.teamMembers) ? state.projectsPage.teamMembers : [];
    const professors = homeLeaders();
    return { projects, members, professors };
  }

  function formatProjectLink(p) {
    const id = p && p.id != null ? String(p.id) : "";
    const title = escapeHtml(p?.title || "Untitled Project");
    if (!id) return title;
    return `<a href="#/projects/${encodeURIComponent(id)}" class="underline" onclick="event.stopPropagation()">${title}</a>`;
  }

  function formatMemberLink(m) {
    const slug = String(m?.slug || "");
    const name = escapeHtml(m?.name || "Unnamed");
    if (!slug) return name;
    return `<a href="#/team/${encodeURIComponent(slug)}" class="underline" onclick="event.stopPropagation()">${name}</a>`;
  }

  function answerChat(queryRaw) {
    const q = normalizeChatText(queryRaw);
    if (!q) return "Please type a question.";

    const { projects, members, professors } = getChatKnowledge();

    const wantsHelp = /^(help|\?)$/.test(q) || q.includes("what can you do");
    if (wantsHelp) {
      return (
        "Try: <br/>" +
        "- list projects<br/>" +
        "- list team<br/>" +
        "- list professors<br/>" +
        "- Shade LA<br/>" +
        "- who is Eddie Cortez<br/>" +
        "- projects for Eden Olvera"
      );
    }

    const wantsListProjects = (q.includes("list") || q.includes("show") || q.includes("all")) && q.includes("project");
    if (wantsListProjects) {
      const top = projects.slice(0, 12);
      const items = top.map((p) => `- ${formatProjectLink(p)}`).join("<br/>");
      return `Projects (${projects.length}):<br/>${items}${projects.length > top.length ? "<br/>…" : ""}`;
    }

    const wantsListTeam = (q.includes("list") || q.includes("show") || q.includes("all")) && (q.includes("team") || q.includes("members"));
    if (wantsListTeam) {
      const sorted = [...members]
        .filter((m) => m && m.name)
        .sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")));
      const top = sorted.slice(0, 16);
      const items = top.map((m) => `- ${formatMemberLink(m)}${m.role ? ` <span class=\"text-black/60\">(${escapeHtml(m.role)})</span>` : ""}`).join("<br/>");
      return `Team members (${sorted.length}):<br/>${items}${sorted.length > top.length ? "<br/>…" : ""}`;
    }

    const wantsListProfessors = (q.includes("list") || q.includes("show") || q.includes("all")) && (q.includes("prof") || q.includes("leader"));
    if (wantsListProfessors) {
      const items = professors
        .map((p) => `- <span class=\"font-semibold\">${escapeHtml(p?.name || "")}</span>${p?.title ? ` <span class=\"text-black/60\">(${escapeHtml(p.title)})</span>` : ""}`)
        .join("<br/>");
      return `Professors / Leaders:<br/>${items}`;
    }

    const matchMember = members.find((m) => m && m.name && chatIncludes(m.name, q)) || members.find((m) => m && m.name && q.includes(normalizeChatText(m.name)));
    if (matchMember) {
      const parts = [];
      parts.push(`<div><span class=\"font-semibold\">${escapeHtml(matchMember.name)}</span>${matchMember.role ? ` <span class=\"text-black/60\">• ${escapeHtml(matchMember.role)}</span>` : ""}</div>`);
      if (matchMember.bio) parts.push(`<div class=\"mt-1 text-black/80\">${escapeHtml(matchMember.bio)}</div>`);
      parts.push(`<div class=\"mt-2\">Open: ${formatMemberLink(matchMember)}</div>`);
      return parts.join("");
    }

    const matchProject = projects.find((p) => p && p.title && chatIncludes(p.title, q)) || projects.find((p) => p && p.title && q.includes(normalizeChatText(p.title)));
    if (matchProject) {
      const teamMembers = Array.isArray(matchProject?.team?.members) ? matchProject.team.members : [];
      const names = teamMembers.map((m) => String(m?.name || "").trim()).filter(Boolean);
      const parts = [];
      parts.push(`<div><span class=\"font-semibold\">${escapeHtml(matchProject.title || "")}</span>${matchProject.category ? ` <span class=\"text-black/60\">• ${escapeHtml(matchProject.category)}</span>` : ""}</div>`);
      if (matchProject.goal) parts.push(`<div class=\"mt-1 text-black/80\">${escapeHtml(matchProject.goal)}</div>`);
      if (names.length) parts.push(`<div class=\"mt-2\"><span class=\"font-semibold\">Team:</span> ${escapeHtml(names.join(", "))}</div>`);
      parts.push(`<div class=\"mt-2\">Open: ${formatProjectLink(matchProject)}</div>`);
      return parts.join("");
    }

    const matchProfessor = professors.find((p) => p && p.name && chatIncludes(p.name, q)) || professors.find((p) => p && p.name && q.includes(normalizeChatText(p.name)));
    if (matchProfessor) {
      const parts = [];
      parts.push(`<div><span class=\"font-semibold\">${escapeHtml(matchProfessor.name || "")}</span>${matchProfessor.title ? ` <span class=\"text-black/60\">• ${escapeHtml(matchProfessor.title)}</span>` : ""}</div>`);
      if (matchProfessor.desc) parts.push(`<div class=\"mt-1 text-black/80\">${escapeHtml(matchProfessor.desc)}</div>`);
      return parts.join("");
    }

    const fewProjects = projects
      .filter((p) => p && p.title && (chatIncludes(p.title, q) || chatIncludes(p.category, q) || chatIncludes(p.owner, q)))
      .slice(0, 5);
    const fewMembers = members.filter((m) => m && m.name && (chatIncludes(m.name, q) || chatIncludes(m.role, q))).slice(0, 5);

    if (fewProjects.length || fewMembers.length) {
      const parts = [];
      if (fewProjects.length) {
        parts.push(`<div class=\"font-semibold\">Projects</div>`);
        parts.push(fewProjects.map((p) => `- ${formatProjectLink(p)}`).join("<br/>"));
      }
      if (fewMembers.length) {
        parts.push(`<div class=\"mt-3 font-semibold\">Team</div>`);
        parts.push(fewMembers.map((m) => `- ${formatMemberLink(m)}${m.role ? ` <span class=\"text-black/60\">(${escapeHtml(m.role)})</span>` : ""}`).join("<br/>"));
      }
      return parts.join("<br/>");
    }

    return "I couldn't find an exact match. Try a project name, a team member name, or 'list projects'.";
  }

  function toast(title, message, type = "success") {
    const id = `t_${Math.random().toString(16).slice(2)}`;
    const bg =
      type === "success"
        ? "bg-emerald-600"
        : type === "error"
        ? "bg-red-600"
        : "bg-gray-800";
    const html = `
      <div id="${id}" class="w-[92vw] max-w-lg ${bg} text-white rounded-2xl shadow-lg px-4 py-3">
        <div class="font-semibold" style="font-family:Poppins, ui-sans-serif">${escapeHtml(title)}</div>
        <div class="text-sm opacity-90 mt-0.5" style="font-family:Poppins, ui-sans-serif">${escapeHtml(message)}</div>
      </div>
    `;
    toastsEl.insertAdjacentHTML("beforeend", html);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.remove();
    }, 3200);
  }

  function withAutoplayParam(url) {
    const raw = String(url || "").trim();
    if (!raw) return "";
    if (/([?&])autoplay=/.test(raw)) return raw;
    return raw + (raw.includes("?") ? "&" : "?") + "autoplay=1";
  }

  function driveDirectVideoUrl(url) {
    const raw = String(url || "").trim();
    if (!raw) return "";
    const m = raw.match(/drive\.google\.com\/file\/d\/([^/]+)\//i);
    if (!m) return "";
    return `https://drive.google.com/uc?export=download&id=${encodeURIComponent(m[1])}`;
  }

  function isDriveUrl(url) {
    return /(^|\.)drive\.google\.com\//i.test(String(url || "").trim());
  }

  function driveOpenInNewTabCta(url) {
    const u = String(url || "").trim();
    if (!u) return "";
    return `
      <div class="w-full h-full flex items-center justify-center bg-black">
        <a href="${escapeHtml(u)}" target="_blank" rel="noreferrer"
          class="rounded-full bg-white px-4 py-2 text-sm text-black hover:bg-white/90"
          style="font-family:Poppins, ui-sans-serif">
          Open video in new tab
        </a>
      </div>
    `;
  }

  function renderDocumentation() {
    const mountedClass = state.projectsPage.mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
    appEl.innerHTML = `
      <div class="min-h-screen transition-all duration-500 ease-out ${mountedClass}">
        <style>
          .dt-doc{
            margin:0;
            background: radial-gradient(circle at top right, rgba(255,255,255,0.05), transparent 20%), #0a0a0d;
            color: #f5f5f2;
            font-family: Inter, Arial, Helvetica, sans-serif;
            overflow-x:hidden;
            min-height:100vh;
          }

          .dt-doc *{ box-sizing:border-box; }
          .dt-doc a{ color: inherit; }

          .dt-doc .noise{
            position: fixed;
            inset: 0;
            pointer-events: none;
            opacity: 0.035;
            background-image:
              linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px);
            background-size: 4px 4px, 4px 4px;
            mix-blend-mode: soft-light;
            z-index: 0;
          }

          .dt-doc .site{ position: relative; z-index: 1; }

          .dt-doc .topbar{
            position: fixed;
            inset: 0 0 auto 0;
            z-index: 30;
            padding: 18px 28px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(180deg, rgba(10,10,13,0.9), rgba(10,10,13,0.45), transparent);
          }

          .dt-doc .brand{
            display: flex;
            align-items: center;
            gap: 12px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            font-size: 11px;
            color: #d6d6dc;
          }

          .dt-doc .brand-mark{
            width: 11px;
            height: 11px;
            border-radius: 999px;
            background: #fff;
            box-shadow: 0 0 22px rgba(255,255,255,0.4);
          }

          .dt-doc .nav{ display:flex; gap:20px; align-items:center; }

          .dt-doc .nav a{
            text-decoration: none;
            color: #a9a9b3;
            font-size: 13px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            transition: color .25s ease;
          }

          .dt-doc .nav a:hover,
          .dt-doc .nav a.active{ color: #fff; }

          .dt-doc .hero{
            min-height: 100vh;
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            align-items: stretch;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }

          .dt-doc .hero-left,
          .dt-doc .hero-right{
            position: relative;
            min-height: 100vh;
          }

          .dt-doc .hero-left{
            padding: 120px 7vw 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .dt-doc .kicker{
            color: #a9a9b3;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            font-size: 12px;
            margin-bottom: 24px;
          }

          .dt-doc h1{
            margin: 0;
            font-size: clamp(3.6rem, 8vw, 8rem);
            line-height: 0.9;
            letter-spacing: -0.06em;
            font-weight: 700;
            white-space: nowrap;
            display: inline-block;
            animation: dtDocScrollTitle 18s linear infinite;
          }

          @keyframes dtDocScrollTitle{
            0%{ transform: translateX(100%); }
            100%{ transform: translateX(-100%); }
          }

          .dt-doc .hero-copy{
            max-width: 620px;
            margin-top: 28px;
            font-size: 17px;
            line-height: 1.9;
            color: #a9a9b3;
          }

          .dt-doc .hero-actions{
            margin-top: 38px;
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
          }

          .dt-doc .btn{
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 15px 20px;
            border-radius: 999px;
            text-decoration: none;
            font-size: 12px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            border: 1px solid rgba(255,255,255,0.08);
            transition: transform .22s ease, background .22s ease, border-color .22s ease;
          }

          .dt-doc .btn.primary{
            background: #fff;
            color: #111;
            border-color: #fff;
          }

          .dt-doc .btn.secondary{
            color: #fff;
            background: transparent;
          }

          .dt-doc .btn:hover{ transform: translateY(-2px); }

          .dt-doc .hero-meta{
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
            margin-top: 54px;
            max-width: 720px;
          }

          .dt-doc .meta-card{
            border-top: 1px solid rgba(255,255,255,0.08);
            padding-top: 16px;
          }

          .dt-doc .meta-card strong{
            display: block;
            font-size: 24px;
            margin-bottom: 6px;
            font-weight: 600;
          }

          .dt-doc .meta-card span{
            color: #a9a9b3;

          }

        .dt-doc .projects{ display:grid; grid-template-columns: 1fr 1fr; gap: 24px; }

        .dt-doc .project{
          position: relative;
          min-height: 420px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          overflow: hidden;
          background: linear-gradient(180deg, #15151b, #0f1014);
          box-shadow: 0 24px 60px rgba(0,0,0,0.45);
          transition: transform .28s ease, border-color .28s ease;
        }

        .dt-doc .project:hover{
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.18);
        }

        .dt-doc .project-visual{
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.48)),
            radial-gradient(circle at top right, rgba(255,255,255,0.11), transparent 24%),
            radial-gradient(circle at 15% 80%, rgba(255,255,255,0.07), transparent 22%),
            linear-gradient(135deg, #1b1c24, #0e0f14 60%);
        }

        .dt-doc .project-visual::before{
          content: "";
          position: absolute;
          inset: 22px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
        }

        .dt-doc .project-content{
          position: absolute;
          inset: 0;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 18px;
        }

        .dt-doc .project-top{ display:flex; justify-content: space-between; gap:16px; align-items:end; }
        .dt-doc .project-label{ font-size: 11px; color: #c7c7cf; text-transform: uppercase; letter-spacing: 0.16em; margin-bottom: 10px; }

        .dt-doc .project h3{
          margin: 0;
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          letter-spacing: -0.04em;
          line-height: 0.96;
          text-transform: uppercase;
        }

        .dt-doc .status{
          white-space: nowrap;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          padding: 9px 12px;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .dt-doc .project p{ margin: 0; max-width: 540px; color: #a9a9b3; line-height: 1.8; }
        .dt-doc .actions{ display:flex; flex-wrap: wrap; gap: 10px; }

        .dt-doc .action{
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.03);
          color: #fff;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: background .22s ease, border-color .22s ease;
        }

        .dt-doc .action:hover{
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.24);
        }

        .dt-doc .section-head{
          display: flex;
          justify-content: space-between;
          gap: 28px;
          align-items: end;
          margin-bottom: 36px;
          position: relative;
          overflow: hidden;
          padding: 56px 52px;
          border-radius: 34px;
          border: none;
          background: #020617;
          box-shadow: 0 28px 70px rgba(0,0,0,0.55);
        }

        .dt-doc .orb-bg{
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .dt-doc .orb{
          position: absolute;
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.45;
          animation: dtDocOrbFloat 10s infinite ease-in-out alternate;
        }

        .dt-doc .orb1{ width: 220px; height: 220px; background: cyan; top: 10%; left: 15%; }
        .dt-doc .orb2{ width: 300px; height: 300px; background: #8b5cf6; bottom: 10%; right: 15%; animation-duration: 14s; }
        .dt-doc .orb3{ width: 160px; height: 160px; background: #22c55e; top: 55%; left: 55%; animation-duration: 12s; }

        @keyframes dtDocOrbFloat{
          from{ transform: translateY(-20px) translateX(-10px) scale(1); }
          to{ transform: translateY(20px) translateX(10px) scale(1.15); }
        }

        .dt-doc .section-head h2{
          margin: 0;
          font-size: clamp(2rem, 4vw, 4rem);
          letter-spacing: -0.06em;
          line-height: 0.92;
          text-transform: uppercase;
          font-weight: 900;
          color: #fff;
          position: relative;
          z-index: 2;
          text-shadow: 0 0 20px rgba(0,255,255,0.30);
          opacity: 0;
          transform: translateY(14px);
        }

        .dt-doc .section-head p{
          margin: 0;
          max-width: 520px;
          color: #cbd5e1;
          line-height: 1.8;
          position: relative;
          z-index: 2;
          font-size: 14px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(10px);
        }

        @keyframes dtDocSectionHeadIn{
          from{ opacity: 0; transform: translateY(14px); filter: blur(6px); }
          to{ opacity: 1; transform: translateY(0); filter: blur(0px); }
        }

        @keyframes dtDocSectionCopyIn{
          from{ opacity: 0; transform: translateY(10px); filter: blur(6px); }
          to{ opacity: 1; transform: translateY(0); filter: blur(0px); }
        }

        @keyframes dtDocHeroPulse{
          0%, 100%{ transform: scale(1); text-shadow: 0 0 20px rgba(0,255,255,0.25); }
          50%{ transform: scale(1.03); text-shadow: 0 0 35px rgba(0,255,255,0.45); }
        }

        .dt-doc .section-head.is-anim h2{
          animation:
            dtDocSectionHeadIn 780ms cubic-bezier(.2,.8,.2,1) forwards,
            dtDocHeroPulse 3s ease-in-out 900ms infinite;
        }

        .dt-doc .section-head.is-anim p{
          animation: dtDocSectionCopyIn 820ms cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: 90ms;
        }

        @keyframes dtDocCardIn{
          from{ opacity: 0; transform: translateY(14px); filter: blur(6px); }
          to{ opacity: 1; transform: translateY(0); filter: blur(0px); }
        }

        .dt-doc .project.is-anim{
          animation: dtDocCardIn 760ms cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: var(--doc-card-delay, 0ms);
        }

          .dt-doc .footer{
            padding: 60px 28px 80px;
            color: #a9a9b3;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            font-size: 11px;
          }

          .dt-doc .footer-inner{
            width: min(1400px, 100%);
            margin: 0 auto;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.08);
            display: flex;
            justify-content: space-between;
            gap: 18px;
            flex-wrap: wrap;
          }

          @media (max-width: 1100px) {
            .dt-doc .hero{ grid-template-columns: 1fr; }
            .dt-doc .hero-right{ display: none; }
            .dt-doc .projects{ grid-template-columns: 1fr; }
          }

          @media (max-width: 760px) {
            .dt-doc .topbar{ padding: 16px 18px; }
            .dt-doc .nav{ display: none; }
            .dt-doc .hero-left{ padding: 110px 22px 50px; }
            .dt-doc .hero-meta{ grid-template-columns: 1fr; }
            .dt-doc .section{ padding: 84px 18px 26px; }
            .dt-doc .section-head{ flex-direction: column; align-items: start; }
            .dt-doc .project{ min-height: 380px; }
            .dt-doc .project-content{ padding: 22px; }
            .dt-doc .footer{ padding: 44px 18px 60px; }
          }
        </style>

        <div class="dt-doc">
          <div class="noise"></div>
          <div class="site">
            <header class="topbar">
              <div class="brand">
                <div class="brand-mark"></div>
                <span>Digital Twins Documentation</span>
              </div>
            </header>

            <section class="hero" id="home">
              <div class="hero-left">
                <h1>Master Documentation</h1>
                <div class="hero-actions">
                  <a class="btn primary" href="#projects">View Projects</a>
                </div>

                <div class="hero-meta">
                  <div class="meta-card">
                    <strong>07</strong>
                    <span>Featured Projects</span>
                  </div>
                  <div class="meta-card">
                    <strong>Maps</strong>
                    <span>ArcGIS Reports</span>
                  </div>
                  <div class="meta-card">
                    <strong>Media</strong>
                    <span>PDF / Video / Stream</span>
                  </div>
                </div>
              </div>

            </section>

            <section class="section" id="projects">
              <div class="section-inner">
                <div class="section-head">
                  <div class="orb-bg">
                    <div class="orb orb1"></div>
                    <div class="orb orb2"></div>
                    <div class="orb orb3"></div>
                  </div>
                  <h2>Selected<br>Projects</h2>
                  <p>
                    Each card follows the same portfolio language and still supports your practical links for ArcGIS, AURA, Flipthrough, and project videos.
                  </p>
                </div>

                <div class="projects">
                  <article class="project">
                    <div class="project-visual"></div>
                    <div class="project-content">
                      <div class="project-top">
                        <div>
                          <div class="project-label">Urban Shade Study</div>
                          <h3>ShadeLA</h3>
                        </div>
                        <div class="status">Active</div>
                      </div>
                      <p>Climate, shade, and urban digital twin content presented in a more immersive fullscreen-style portfolio card.</p>
                      <div class="actions">
                        <a class="action" href="#">ArcGIS ↗</a>
                        <a class="action" href="#">AURA PDF ↗</a>
                        <a class="action" href="#">Flipthrough ↗</a>
                        <a class="action" href="#">Video ↗</a>
                      </div>
                    </div>
                  </article>

                  <article class="project">
                    <div class="project-visual"></div>
                    <div class="project-content">
                      <div class="project-top">
                        <div>
                          <div class="project-label">Forest / Ecology</div>
                          <h3>Pando</h3>
                        </div>
                        <div class="status">Active</div>
                      </div>
                      <p>A portfolio-led project card with bold type, dark surfaces, and clear actions for every documentation asset.</p>
                      <div class="actions">
                        <a class="action" href="#">ArcGIS ↗</a>
                        <a class="action" href="#">AURA PDF ↗</a>
                        <a class="action" href="#">Flipthrough ↗</a>
                        <a class="action" href="#">Video ↗</a>
                      </div>
                    </div>
                  </article>

                  <article class="project">
                    <div class="project-visual"></div>
                    <div class="project-content">
                      <div class="project-top">
                        <div>
                          <div class="project-label">Sustainability</div>
                          <h3>USGBC</h3>
                        </div>
                        <div class="status">Ready</div>
                      </div>
                      <p>Editorial spacing and darker visual rhythm bring your content closer to the Trigger theme direction.</p>
                      <div class="actions">
                        <a class="action" href="#">ArcGIS ↗</a>
                        <a class="action" href="#">AURA PDF ↗</a>
                        <a class="action" href="#">Flipthrough ↗</a>
                        <a class="action" href="#">Video ↗</a>
                      </div>
                    </div>
                  </article>

                  <article class="project">
                    <div class="project-visual"></div>
                    <div class="project-content">
                      <div class="project-top">
                        <div>
                          <div class="project-label">Regional Site</div>
                          <h3>Baldwin Hills</h3>
                        </div>
                        <div class="status">Ready</div>
                      </div>
                      <p>Dark gradients, cinematic overlays, and streamlined navigation help the site feel more premium and portfolio-driven.</p>
                      <div class="actions">
                        <a class="action" href="#">ArcGIS ↗</a>
                        <a class="action" href="#">AURA PDF ↗</a>
                        <a class="action" href="#">Flipthrough ↗</a>
                        <a class="action" href="#">Video ↗</a>
                      </div>
                    </div>
                  </article>

                  <article class="project">
                    <div class="project-visual"></div>
                    <div class="project-content">
                      <div class="project-top">
                        <div>
                          <div class="project-label">Field Study</div>
                          <h3>Altadena</h3>
                        </div>
                        <div class="status">Draft</div>
                      </div>
                      <p>A strong template for adding richer project details later without changing the overall design system.</p>
                      <div class="actions">
                        <a class="action" href="#">ArcGIS ↗</a>
                        <a class="action" href="#">AURA PDF ↗</a>
                        <a class="action" href="#">Flipthrough ↗</a>
                        <a class="action" href="#">Video ↗</a>
                      </div>
                    </div>
                  </article>

                  <article class="project">
                    <div class="project-visual"></div>
                    <div class="project-content">
                      <div class="project-top">
                        <div>
                          <div class="project-label">Community Project</div>
                          <h3>PUHC PUEDE</h3>
                        </div>
                        <div class="status">Draft</div>
                      </div>
                      <p>The structure stays easy to edit while the design moves much closer to the fullscreen Trigger aesthetic.</p>
                      <div class="actions">
                        <a class="action" href="#">ArcGIS ↗</a>
                        <a class="action" href="#">AURA PDF ↗</a>
                        <a class="action" href="#">Flipthrough ↗</a>
                        <a class="action" href="#">Video ↗</a>
                      </div>
                    </div>
                  </article>

                  <article class="project">
                    <div class="project-visual"></div>
                    <div class="project-content">
                      <div class="project-top">
                        <div>
                          <div class="project-label">Water / Land</div>
                          <h3>Reclamation</h3>
                        </div>
                        <div class="status">Draft</div>
                      </div>
                      <p>Use this section for more technical documentation while preserving the premium visual presentation.</p>
                      <div class="actions">
                        <a class="action" href="#">ArcGIS ↗</a>
                        <a class="action" href="#">AURA PDF ↗</a>
                        <a class="action" href="#">Flipthrough ↗</a>
                        <a class="action" href="#">Video ↗</a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>

            <footer class="footer">
              <div class="footer-inner">
                <span>Digital Twins Master Documentation</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    `;

    const root = appEl.querySelector('.dt-doc');
    if (!root) return;

    requestAnimationFrame(() => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } catch (_) {
        window.scrollTo(0, 0);
      }

      try {
        root.querySelectorAll('.section-head').forEach((el) => {
          el.classList.remove('is-anim');
          void el.offsetWidth;
          el.classList.add('is-anim');
        });
      } catch (_) {
        // no-op
      }

      try {
        const cards = Array.from(root.querySelectorAll('.project'));
        cards.forEach((card, idx) => {
          card.classList.remove('is-anim');
          card.style.setProperty('--doc-card-delay', `${Math.min(idx * 90, 540)}ms`);
          void card.offsetWidth;
          card.classList.add('is-anim');
        });
      } catch (_) {
        // no-op
      }

      // Force-restart the marquee animation on each navigation.
      try {
        const titleEl = root.querySelector("h1");
        if (titleEl) {
          titleEl.style.animation = "none";
          void titleEl.offsetWidth;
          titleEl.style.animation = "dtDocScrollTitle 18s linear infinite";
        }
      } catch (_) {
        // no-op
      }
    });

    const imageByProjectName = {
      "ShadeLA": "./Master-Documentation/assets/ShadeLAA.png",
      "Pando": "./Master-Documentation/assets/Pandoo.png",
      "USGBC": "./Master-Documentation/assets/USGBC.png",
      "Baldwin Hills": "./Master-Documentation/assets/Baldwin Hills.png",
      "Altadena": "./Master-Documentation/assets/Altadena Fire Rebuild_ Resilient, Equitable, and Community-Oriented Recovery Plan V100.png",
      "PUHC PUEDE": "./Master-Documentation/assets/ALLYBOOM.png",
      "Reclamation": "./Master-Documentation/assets/ASU RE.png"
    };

    root.querySelectorAll('.project').forEach((card) => {
      const name = card.querySelector('h3')?.textContent?.trim() || '';
      const visual = card.querySelector('.project-visual');
      const img = imageByProjectName[name];
      if (!visual || !img) return;

      const imageUrl = encodeURI(img);
      visual.style.backgroundImage = [
        'linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.48))',
        'radial-gradient(circle at top right, rgba(255,255,255,0.11), transparent 24%)',
        'radial-gradient(circle at 15% 80%, rgba(255,255,255,0.07), transparent 22%)',
        `url("${imageUrl}")`
      ].join(', ');
      visual.style.backgroundSize = 'auto, auto, auto, cover';
      visual.style.backgroundPosition = '0 0, 0 0, 0 0, center';
      visual.style.backgroundRepeat = 'no-repeat, no-repeat, no-repeat, no-repeat';
    });

    const docNameToProjectId = {
      "ShadeLA": "03",
      "Reclamation": "05",
      "Baldwin Hills": "02",
    };

    root.querySelectorAll('.project').forEach((card) => {
      const name = card.querySelector('h3')?.textContent?.trim() || '';
      const pid = docNameToProjectId[name];
      if (!pid) return;

      const project = getProjectById(pid);
      const videoUrl = String(project?.videoUrl || project?.videoEmbedUrl || "").trim();
      if (!videoUrl) return;

      const videoLink = Array.from(card.querySelectorAll('.actions a.action')).find((a) => (a.textContent || "").toLowerCase().includes('video'));
      if (!videoLink) return;

      videoLink.setAttribute('href', videoUrl);
      videoLink.setAttribute('target', '_blank');
      videoLink.setAttribute('rel', 'noreferrer');
    });

    const auraPdfByProjectName = {
      "ShadeLA": "./Master-Documentation/Shade LA_ Transforming Urban Heat Islands in South Los Angeles Census Tracts 5351.01, 2430, 2382, and 2240.10 through Equitable Shade Structures and Regenerative Design.pdf",
      "Baldwin Hills": "./Master-Documentation/Baldwin Hills 6-Mile Corridor Land Context and Infrastructure Report.pdf",
      "Reclamation": "./Master-Documentation/Reclamation Site 2_ Holistic Ecosystem Restoration for Climate-Resilient Urban Equity in Census Tract 6017.pdf",
      "Pando": "./Master-Documentation/Pando Populus_ Comprehensive Environmental and Social Resilience Assessment for Census Tract 1397.02 Images.pdf",
      "Altadena": "./Master-Documentation/Altadena Fire Rebuild_ Resilient, Equitable, and Community-Oriented Recovery Plan V100.pdf",
      "PUHC PUEDE": "./Master-Documentation/PUHC PUEDE Alleys_ Architecture and Urban Design for Environmental Justice, Climate Resilience, and Community Health in South Los Angeles Census Tracts 2098.10 and 2095.20.pdf",
    };

    root.querySelectorAll('.project').forEach((card) => {
      const name = card.querySelector('h3')?.textContent?.trim() || '';
      const pdfPath = auraPdfByProjectName[name];
      if (!pdfPath) return;

      const auraLink = Array.from(card.querySelectorAll('.actions a.action')).find((a) => (a.textContent || "").toLowerCase().includes('aura'));
      if (!auraLink) return;

      auraLink.setAttribute('href', encodeURI(pdfPath));
      auraLink.setAttribute('target', '_blank');
      auraLink.setAttribute('rel', 'noreferrer');
    });
  }

  window.__dtVideoFallback = function (videoEl) {
    try {
      if (!videoEl || videoEl.dataset?.fallbackApplied === "1") return;
      videoEl.dataset.fallbackApplied = "1";

      const embedUrl = String(videoEl.dataset?.embedUrl || "").trim();
      if (!embedUrl) return;

      const parent = videoEl.parentElement;
      if (!parent) return;

      const isDrive = /(^|\.)drive\.google\.com\//i.test(embedUrl);
      if (isDrive) {
        parent.innerHTML = `
          <div class="w-full h-full flex items-center justify-center bg-black">
            <a href="${escapeHtml(embedUrl)}" target="_blank" rel="noreferrer"
              class="rounded-full bg-white px-4 py-2 text-sm text-black hover:bg-white/90"
              style="font-family:Poppins, ui-sans-serif">
              Open video in new tab
            </a>
          </div>
        `;
        return;
      }

      parent.innerHTML = `<iframe class="w-full h-full" src="${escapeHtml(withAutoplayParam(embedUrl))}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    } catch (_) {
      // no-op
    }
  };

  window.__dtVideoWatchdog = function (videoEl) {
    try {
      if (!videoEl || videoEl.dataset?.watchdogSet === "1") return;
      videoEl.dataset.watchdogSet = "1";

      const timeoutMs = 6000;
      const id = setTimeout(() => {
        try {
          if (!videoEl) return;
          if (videoEl.dataset?.fallbackApplied === "1") return;

          const rs = Number(videoEl.readyState || 0);
          const isReallyPlaying = !videoEl.paused && !videoEl.ended;

          if (rs < 2 && !isReallyPlaying) {
            window.__dtVideoFallback(videoEl);
          }
        } catch (_) {
          // no-op
        }
      }, timeoutMs);

      videoEl.dataset.watchdogId = String(id);
    } catch (_) {
      // no-op
    }
  };

  window.__dtVideoClearWatchdog = function (videoEl) {
    try {
      const idRaw = videoEl?.dataset?.watchdogId;
      if (!idRaw) return;
      clearTimeout(Number(idRaw));
      delete videoEl.dataset.watchdogId;
    } catch (_) {
      // no-op
    }
  };

  function wireVideoFallbacks(root) {
    try {
      const scope = root && root.querySelectorAll ? root : document;
      scope.querySelectorAll('video[data-embed-url]').forEach((videoEl) => {
        try {
          if (!videoEl || videoEl.dataset?.fallbackWired === "1") return;
          videoEl.dataset.fallbackWired = "1";

          videoEl.addEventListener("error", () => window.__dtVideoFallback(videoEl));
          videoEl.addEventListener("loadeddata", () => window.__dtVideoClearWatchdog(videoEl));
          videoEl.addEventListener("canplay", () => window.__dtVideoClearWatchdog(videoEl));

          window.__dtVideoWatchdog(videoEl);
        } catch (_) {
          // no-op
        }
      });
    } catch (_) {
      // no-op
    }
  }

  function applyEnterTextAnimations() {
    if (!appEl) return;

    const els = appEl.querySelectorAll("h1, h2, h3, p, li");
    const max = 18;
    for (let i = 0; i < els.length && i < max; i++) {
      const el = els[i];
      if (el && el.id === "learningHeroSentence") continue;
      if (el && el.tagName === "H1" && el.closest && el.closest(".dt-doc")) continue;
      if (el && el.closest && el.closest(".dt-doc .section-head")) continue;
      if (!el || el.classList.contains("enter-text") || el.classList.contains("enter-fade")) continue;
      const isFadeOnly = !!el.closest('[data-enter="fade"]');
      el.classList.add(isFadeOnly ? "enter-fade" : "enter-text");
      const base = isFadeOnly ? 250 : 0;
      const step = isFadeOnly ? 140 : 55;
      el.style.setProperty("--enter-delay", `${base + Math.min(i * step, 880)}ms`);
    }
  }

  function parseRoute() {
    // Supported:
    // #/               (home)
    // #/projects
    // #/projects/:id
    // #/team
    // #/team/:slug
    // #/learning-hub
    // #/documentation
    // #/contact
    const raw = (location.hash || "#/").replace(/^#/, "");
    const pathOnly = raw.split("?")[0] || "";
    const queryOnly = raw.includes("?") ? raw.split("?").slice(1).join("?") : "";

    const parts = pathOnly.split("/").filter(Boolean);
    const base = parts[0] || "";
    const param = parts[1] || null;

    const qs = new URLSearchParams(queryOnly);
    const qid = qs.get("id");

    if (!base) return { name: "home" };
    if (base === "projects" && !param && qid) return { name: "projectDetail", id: qid };
    if (base === "projects" && !param) return { name: "projects" };
    if (base === "projects" && param) return { name: "projectDetail", id: param };
    if (base === "team" && !param) return { name: "team" };
    if (base === "team" && param) return { name: "teamMember", slug: param };
    if (base === "learning-hub") return { name: "learning" };
    if (base === "documentation") return { name: "documentation" };
    if (base === "contact") return { name: "contact" };
    return { name: "home" };
  }

  function getProjectById(id) {
    return (Array.isArray(state.projects) ? state.projects : []).find((p) => String(p.id) === String(id)) || null;
  }

  function getGitHubOgImage(repoUrl) {
    try {
      const u = new URL(String(repoUrl || ""));
      if (/github\.com$/i.test(u.hostname)) {
        const parts = u.pathname.split("/").filter(Boolean);
        if (parts.length < 2) return "";
        const owner = parts[0];
        const repo = parts[1].replace(/\.git$/i, "");
        return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
      }
      if (/\.github\.io$/i.test(u.hostname)) {
        const owner = u.hostname.replace(/\.github\.io$/i, "");
        const parts = u.pathname.split("/").filter(Boolean);
        if (parts.length < 1) return "";
        const repo = parts[0];
        return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
      }
      return "";
    } catch {
      return "";
    }
  }

  function getProjectImage(project) {
    if (!project) return "";

    const normalizeLocalPath = (p) => {
      const raw = String(p || "").trim();
      if (!raw) return "";
      const noHash = raw.split("#")[0] || "";
      const noQuery = (noHash.split("?")[0] || "").trim();
      const trimmed = noQuery.replace(/^\//, "");
      try {
        return decodeURIComponent(trimmed);
      } catch {
        return trimmed;
      }
    };

    if (project.image) return normalizeLocalPath(project.image); // allow "/gitlogos/x.png?v=1" -> "gitlogos/x.png"

    const titleKey = String(project.title || "").trim().toLowerCase();

    const gitLogoByTitle = [
      { match: "shade", path: "gitlogos/ShadeLA.png" },
      { match: "pando", path: "gitlogos/Pando.jpeg" },
      { match: "usgbc", path: "gitlogos/USGBC.png" },
      { match: "baldwin hills 6", path: "gitlogos/Baldwin hills 6 Miles.png" },
      { match: "baldwin", path: "gitlogos/Baldwin hills.png" },
      { match: "alley bloom", path: "gitlogos/Alley Bloom.png" },
      { match: "ally bloom", path: "gitlogos/Alley Bloom.png" },
      { match: "reclamation", path: "gitlogos/ASU RECLAMATION.png" },
      { match: "asu", path: "gitlogos/ASU RECLAMATION.png" },
    ];

    const gitLogoHit = gitLogoByTitle.find((r) => titleKey.includes(r.match));
    if (gitLogoHit) return gitLogoHit.path;

    if (project.repoUrl) return getGitHubOgImage(project.repoUrl);
    return "";
  }

  function formatModulesValue(modulesValue) {
    if (!modulesValue) return "";
    if (typeof modulesValue === "string") return modulesValue;
    if (Array.isArray(modulesValue)) return modulesValue.filter(Boolean).join("\n");
    if (typeof modulesValue === "object") {
      return Object.entries(modulesValue)
        .map(([name, moduleData]) => {
          const desc = moduleData && typeof moduleData === "object" ? moduleData.description || "" : "";
          const components =
            moduleData && typeof moduleData === "object" && Array.isArray(moduleData.components)
              ? moduleData.components.filter(Boolean)
              : [];
          const line1 = desc ? `${name}: ${desc}` : `${name}`;
          if (components.length === 0) return line1;
          return `${line1}\n- ${components.join("\n- ")}`;
        })
        .filter(Boolean)
        .join("\n\n");
    }
    return "";
  }

  function loadTeamMembers() {
    try {
      const raw = localStorage.getItem(TEAM_STORAGE_KEY);
      const stored = raw ? JSON.parse(raw) : [];
      if (Array.isArray(stored) && stored.length > 0) {
        const adminMembers = stored
          .map((m) => ({
            name: m.name,
            role: m.role || "",
            img: m.avatar || "https://placehold.co/254x240",
            slug: m.slug || "",
            bio: m.bio || "",
          }))
          .filter((m) => m.slug);

        if (adminMembers.length > 0) {
          const bySlug = new Map(FALLBACK_MEMBERS.map((m) => [m.slug, m]));
          adminMembers.forEach((m) => bySlug.set(m.slug, m));
          state.projectsPage.teamMembers = Array.from(bySlug.values());
          return;
        }
      }
    } catch {}
    state.projectsPage.teamMembers = [...FALLBACK_MEMBERS];
  }

  function renderNavbar() {
    if (!navbarEl) return;
    const route = parseRoute();
    const activeKey = (() => {
      if (route.name === "projectDetail") return "projects";
      if (route.name === "teamMember") return "team";
      if (route.name === "learning") return "learning";
      return route.name;
    })();

    const navLink = (key, href, label) => {
      const isActive = activeKey === key;
      const base =
        "px-4 py-2 rounded-full shadow-[inset_0_4px_6px_rgba(255,255,255,0.6)] transition-colors duration-200";
      const active = "bg-black text-white";
      const inactive = "text-black/80 hover:bg-black/5";
      return `<a href="${href}" data-nav-key="${escapeHtml(key)}" class="${base} ${isActive ? active : inactive}" style="font-family:Poppins, ui-sans-serif">${label}</a>`;
    };

    navbarEl.innerHTML = `
      <nav class="w-full bg-white/70 backdrop-blur border-b border-black/5">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <a href="#/" class="font-semibold text-black" style="font-family:Poppins, ui-sans-serif">
            Digital Twins Hub
          </a>

          <div class="flex flex-wrap items-center gap-2">
            ${navLink("home", "#/", "Home")}
            ${navLink("projects", "#/projects", "Projects")}
            ${navLink("learning", "#/learning-hub", "Learning Hub")}
            ${navLink("documentation", "#/documentation", "Documentation")}
            ${navLink("team", "#/team", "Team")}
            ${navLink("contact", "#/contact", "Contact")}
          </div>
        </div>
      </nav>
    `;

    // If the user clicks the *current* tab, the hash won't change, so hashchange won't fire.
    // Force a re-render so animations and page setup re-run.
    const navLinks = navbarEl.querySelectorAll("a[data-nav-key]");
    navLinks.forEach((a) => {
      a.addEventListener("click", (e) => {
        const key = a.getAttribute("data-nav-key") || "";
        const href = a.getAttribute("href") || "";

        if (key === "learning") {
          state.learning.currentDetail = null;
        }

        if (href && location.hash === href) {
          e.preventDefault();
          renderWithTransition();
        }
      });
    });
  }

  function renderChatAssistant() {
    const messages = Array.isArray(state.chat.messages) ? state.chat.messages : [];

    const renderMsg = (m) => {
      const from = String(m?.from || "bot");
      const isUser = from === "user";
      const wrap = isUser ? "justify-end" : "justify-start";
      const bubble = isUser ? "bg-black text-white" : "bg-black/5 text-black";
      return `
        <div class="flex ${wrap}">
          <div class="max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${bubble}" style="font-family:Poppins, ui-sans-serif">
            ${m?.html || ""}
          </div>
        </div>
      `;
    };

    chatEl.innerHTML = `
      <button id="chatBtn"
        class="fixed bottom-6 right-6 z-[9999] rounded-full bg-black text-white px-5 py-3 shadow-lg hover:bg-gray-900"
        style="font-family:Poppins, ui-sans-serif">
        Chat
      </button>

      <div id="chatModal" class="${state.chat.open ? "" : "hidden"} fixed inset-0 z-[9998]">
        <div id="chatBackdrop" class="absolute inset-0 bg-black/60"></div>
        <div class="absolute bottom-24 right-6 w-[92vw] max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="px-4 py-3 border-b flex items-center justify-between">
            <div class="font-semibold" style="font-family:Poppins, ui-sans-serif">Chat Assistant</div>
            <button id="chatClose" class="px-2 py-1 text-gray-600 hover:text-black">✕</button>
          </div>

          <div id="chatMessages" class="p-4 space-y-3 max-h-[55vh] overflow-y-auto">
            ${messages.map(renderMsg).join("")}
          </div>

          <div class="p-3 border-t flex items-center gap-2">
            <input id="chatInput" type="text" placeholder="Ask about projects, team, professors..."
              class="flex-1 rounded-full border border-black/10 px-4 py-2 text-sm outline-none focus:border-black/30"
              style="font-family:Poppins, ui-sans-serif"
              value="${escapeHtml(state.chat.draft)}" />
            <button id="chatSend" class="rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-black/90"
              style="font-family:Poppins, ui-sans-serif">
              Send
            </button>
          </div>
        </div>
      </div>
    `;

    const btn = document.getElementById("chatBtn");
    const close = document.getElementById("chatClose");
    const modal = document.getElementById("chatModal");
    const input = document.getElementById("chatInput");
    const send = document.getElementById("chatSend");
    const messagesEl = document.getElementById("chatMessages");

    btn?.addEventListener("click", () => {
      state.chat.open = true;
      renderChatAssistant();
    });
    close?.addEventListener("click", () => {
      state.chat.open = false;
      renderChatAssistant();
    });

    modal?.addEventListener("click", (e) => {
      const backdrop = document.getElementById("chatBackdrop");
      if (e.target === modal || e.target === backdrop) {
        state.chat.open = false;
        renderChatAssistant();
      }
    });

    const doSend = () => {
      const text = String(input?.value || "").trim();
      state.chat.draft = text;
      if (!text) return;

      state.chat.messages.push({ from: "user", html: escapeHtml(text) });
      const reply = answerChat(text);
      state.chat.messages.push({ from: "bot", html: `Okay — let me take a look for you...<br/><br/>${reply}` });
      state.chat.draft = "";
      renderChatAssistant();
    };

    input?.addEventListener("input", (e) => {
      state.chat.draft = e.target.value;
    });

    send?.addEventListener("click", doSend);

    input?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        doSend();
      }
    });

    if (state.chat.open) {
      setTimeout(() => {
        try {
          input?.focus();
          if (messagesEl) messagesEl.scrollTop = messagesEl.scrollHeight;
        } catch {}
      }, 0);
    }
  }

  // -----------------------------
  // Home Page (DigitalTwinsHub)
  // -----------------------------
  function initHomeData() {
    const catalog = Array.isArray(state.projects) ? state.projects : [];
    const shuffled = [...catalog].sort(() => Math.random() - 0.5);

    const flagship = shuffled.filter((p) => p && p.projectType === "flagship");
    const sourceForFeatured = flagship.length > 0 ? flagship : shuffled;
    state.home.featuredProjects = sourceForFeatured.slice(0, Math.min(3, sourceForFeatured.length));

    const mostRecentWithVideo = [...catalog]
      .reverse()
      .find((p) => p && (p.videoEmbedUrl || p.videoUrl));

    const baldwinHills = catalog.find((p) => p && String(p.id) === "02") || null;
    state.home.projectOfMonth = baldwinHills || mostRecentWithVideo || shuffled[0] || null;
  }

  function homeLeaders() {
    return [
      {
        name: "Professor Marcela Oliva",
        title: "Project Leader",
        img: "Professors/Professor Marcela Oliva.jpg",
        desc:
          "For over a decade, she led as the Knowledge Architect for the $9 billion Building Program at the Los Angeles Community College District, pioneering the development and rollout of the nation’s largest Digital Twin/Virtualization BIM/GIS System, aligned with National Intelligence Standards."
      },
      {
        name: "Professor Arthur Modine",
        title: "Project Leader",
        img: "Professors/Professor Arthur Modine.png",
        desc:
          "Arthur is a designer and entrepreneur based in Los Angeles, California, specializing in architecture, software development and fashion design. He holds a Master's in Architecture from SCI-Arc, where was honored with a master's thesis award for developing a prototype of AURA, an innovative AR-based urban planning and geospatial analysis platform."
      },
      {
        name: "Professor Jack Rendler",
        title: "Project Leader",
        img: "Professors/Professor Jack Rendler.jpg",
        desc:
          "Jack Oliva-Rendler is a designer and researcher exploring digital 3D modeling, GIS, and algorithmic systems for multi-scalar ecological and infrastructural solutions. He studied at SCI-Arc and earned a Master of Architecture from Harvard GSD."
      },
    ];
  }

  function renderHome() {
    const leaders = homeLeaders();
    const featured = state.home.featuredProjects.length
      ? state.home.featuredProjects
      : [
          { id: "sample-1", title: "Campus Microgrid Digital Twin", category: "Energy · Simulation", goal: "Real-time energy monitoring and scenario testing for a multi-building campus microgrid." },
          { id: "sample-2", title: "Transit Accessibility Twin", category: "Mobility · GIS", goal: "GIS-based twin exploring access to public transit stops by walking, biking, and micro-mobility." },
          { id: "sample-3", title: "Manufacturing Line XR Prototype", category: "XR · Industrial", goal: "A 3D twin of a factory line with AR overlays for training and maintenance." },
        ];

    const pom = state.home.projectOfMonth;

    const savedProjects = Array.isArray(state.projects) ? state.projects : [];
    const showcase = savedProjects.length
      ? [...savedProjects].sort(() => Math.random() - 0.5).slice(0, 3)
      : [
          { title: "Smart Campus Energy Model", img: "https://placehold.co/640x420", category: "Energy" },
          { title: "Urban Mobility Twin", img: "https://placehold.co/640x420", category: "Transportation" },
          { title: "Manufacturing Line Simulator", img: "https://placehold.co/640x420", category: "Manufacturing" },
        ];

    const active = state.home.activeLeader;

    appEl.innerHTML = `
      <div class="flex flex-col transition-all duration-500 ease-out opacity-100 translate-y-0">

        <style>
          .home-projects-hero{
            position: relative;
            overflow: hidden;
            border-radius: 28px;
            padding: 58px 28px;
            background:
              radial-gradient(circle at 20% 20%, rgba(125,211,252,0.10), transparent 30%),
              radial-gradient(circle at 80% 15%, rgba(192,132,252,0.12), transparent 28%),
              radial-gradient(circle at 50% 80%, rgba(59,130,246,0.08), transparent 30%),
              linear-gradient(180deg, #0f172a, #020617);
            box-shadow: 0 28px 70px rgba(0,0,0,0.38);
          }

          .home-projects-hero-particles{
            position: absolute;
            inset: 0;
            overflow: hidden;
            pointer-events: none;
            z-index: 0;
          }

          .home-projects-hero-particles span{
            position: absolute;
            display: block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: rgba(255,255,255,0.35);
            box-shadow: 0 0 12px rgba(125,211,252,0.25);
            animation: homeFloatParticle linear infinite;
          }

          .home-projects-hero-particles span:nth-child(1)  { left: 8%;  top: 85%; animation-duration: 14s; animation-delay: 0s; }
          .home-projects-hero-particles span:nth-child(2)  { left: 16%; top: 70%; animation-duration: 18s; animation-delay: 2s; }
          .home-projects-hero-particles span:nth-child(3)  { left: 28%; top: 90%; animation-duration: 16s; animation-delay: 1s; }
          .home-projects-hero-particles span:nth-child(4)  { left: 36%; top: 78%; animation-duration: 20s; animation-delay: 3s; }
          .home-projects-hero-particles span:nth-child(5)  { left: 48%; top: 88%; animation-duration: 13s; animation-delay: 2s; }
          .home-projects-hero-particles span:nth-child(6)  { left: 58%; top: 74%; animation-duration: 17s; animation-delay: 4s; }
          .home-projects-hero-particles span:nth-child(7)  { left: 68%; top: 92%; animation-duration: 15s; animation-delay: 1s; }
          .home-projects-hero-particles span:nth-child(8)  { left: 78%; top: 82%; animation-duration: 19s; animation-delay: 0s; }
          .home-projects-hero-particles span:nth-child(9)  { left: 88%; top: 89%; animation-duration: 16s; animation-delay: 3s; }
          .home-projects-hero-particles span:nth-child(10) { left: 94%; top: 76%; animation-duration: 14s; animation-delay: 2s; }

          .home-projects-hero-wrap{
            position: relative;
            z-index: 2;
            max-width: 920px;
            margin: 0 auto;
            width: 100%;
            text-align: center;
          }

          .home-projects-hero-title{
            display: inline-block;
            font-family: "Orbitron", Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 800;
            letter-spacing: 2px;
            line-height: 1.05;
            white-space: nowrap;
            overflow: hidden;
            width: auto;
            border-right: 3px solid #7dd3fc;
            background: linear-gradient(90deg, #ffffff, #7dd3fc, #c084fc, #ffffff);
            background-size: 220% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            text-shadow:
              0 0 12px rgba(255,255,255,0.08),
              0 0 24px rgba(125,211,252,0.16),
              0 0 34px rgba(192,132,252,0.12);
            clip-path: none;
            animation:
              homeBlink 0.8s step-end infinite,
              homeShine 5s linear infinite;
          }

          .home-projects-hero-title.is-anim{
            animation:
              homeClipTyping 2.2s steps(8, end) forwards,
              homeBlink 0.8s step-end infinite,
              homeShine 5s linear infinite;
          }

          .home-projects-hero-subtitle{
            margin: 34px auto 0;
            max-width: 760px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            padding: 24px 28px;
            border-radius: 22px;
            background: rgba(255,255,255,0.03);
            border: none;
            backdrop-filter: blur(14px);
            box-shadow:
              0 0 40px rgba(0,0,0,0.22),
              0 0 50px rgba(192, 132, 252, 0.18),
              inset 0 0 30px rgba(255,255,255,0.02);
            opacity: 0;
            transform: translateY(24px);
            animation: homeFadeUp 1s ease forwards;
            animation-delay: 2.25s;
            transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
            text-align: center;
            align-items: center;
            font-family: "Space Grotesk", Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          }

          .home-projects-hero-subtitle:hover{
            transform: translateY(-4px);
            box-shadow:
              0 0 40px rgba(0,0,0,0.24),
              0 0 70px rgba(125, 211, 252, 0.22),
              0 0 90px rgba(192, 132, 252, 0.18),
              inset 0 0 30px rgba(255,255,255,0.03);
          }

          .home-projects-hero-subtitle span{
            font-size: clamp(1rem, 2vw, 1.2rem);
            line-height: 1.9;
            color: rgba(255,255,255,0.72);
            opacity: 0;
            transform: translateY(14px);
            animation: homeLineReveal 0.8s ease forwards;
            position: relative;
          }

          .home-projects-hero-subtitle span:nth-child(1) { animation-delay: 2.45s; }
          .home-projects-hero-subtitle span:nth-child(2) { animation-delay: 2.85s; }

          .home-projects-hero-subtitle b{
            font-weight: 600;
            background: linear-gradient(90deg, #7dd3fc, #c084fc);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            animation: homeShine 4s linear infinite;
          }

          .home-projects-hero-subtitle b::after{
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 100%;
            height: 2px;
            border-radius: 999px;
            background: linear-gradient(90deg, rgba(125,211,252,0.95), rgba(192,132,252,0.95));
            opacity: 0.9;
            box-shadow: 0 0 12px rgba(125,211,252,0.35);
            transform: scaleX(0);
            transform-origin: left;
            animation: homeUnderlineGrow 0.9s ease forwards;
          }

          .home-projects-hero-subtitle b:nth-of-type(1)::after { animation-delay: 3s; }
          .home-projects-hero-subtitle b:nth-of-type(2)::after { animation-delay: 3.2s; }
          .home-projects-hero-subtitle b:nth-of-type(3)::after { animation-delay: 3.4s; }

          @keyframes homeClipTyping { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
          @keyframes homeBlink { 50% { border-color: transparent; } }
          @keyframes homeShine { from { background-position: 0% center; } to { background-position: 220% center; } }
          @keyframes homeFadeUp { to { opacity: 1; transform: translateY(0); } }
          @keyframes homeLineReveal { to { opacity: 1; transform: translateY(0); } }
          @keyframes homeUnderlineGrow { to { transform: scaleX(1); } }

          @keyframes homeFloatParticle {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            10% { opacity: 1; }
            80% { opacity: 0.85; }
            100% { transform: translateY(-120vh) scale(1.8); opacity: 0; }
          }

          @media (max-width: 640px) {
            .home-projects-hero-subtitle{ padding: 20px 18px; }
            .home-projects-hero-title{
              white-space: normal;
              width: auto;
              border-right: none;
              clip-path: none;
              animation: homeShine 5s linear infinite, homeFadeUp 1s ease forwards;
              opacity: 0;
            }
          }
        </style>

        <!-- Hero Section -->
        <section class="w-full bg-gray-950 relative overflow-hidden">
          <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.22),_transparent_60%)]"></div>
          <div class="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div class="w-full max-w-4xl mx-auto" data-enter="fade">
              <h1 class="text-white leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center"
                style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-weight:500; line-height:1.1">
                Digital Twins Projects Hub
              </h1>

              <p class="mt-6 text-slate-200/90 text-lg md:text-xl leading-relaxed text-justify"
                style="font-family:Poppins, ui-sans-serif, system-ui">
                This platform is a collaborative space where innovators, researchers, and students can create, showcase, and track projects from any discipline...
              </p>

              <div class="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-600/50 to-transparent"></div>

              <ul class="mt-6 space-y-2 text-slate-100 text-base md:text-lg text-left md:text-justify"
                style="font-family:Poppins, ui-sans-serif, system-ui">
                <li><span class="font-semibold">Collaboration Across Teams:</span> Work with professors, peers, and contributors from anywhere.</li>
                <li><span class="font-semibold">Dynamic Project Tracking:</span> Monitor progress, stages, and milestones visually.</li>
                <li><span class="font-semibold">Cross-Disciplinary Projects:</span> Combine software, data, design, and physical systems in one space.</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Featured + Project of Month -->
        <section class="w-full bg-gray-950 text-white">
          <div class="max-w-7xl mx-auto px-6 py-16 md:py-24 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] items-start">
            <div>
              <h3 class="text-3xl md:text-4xl font-semibold" style="font-family:Poppins, ui-sans-serif">FLAGSHIP PROJECTS</h3>
              <p class="mt-3 text-white/70 max-w-xl text-base md:text-lg" style="font-family:Poppins, ui-sans-serif, system-ui">
                A rotating look at digital twin projects pulled from the Projects hub.
              </p>

              <div class="mt-8 space-y-6">
                ${featured
                  .map((project, index) => {
                    const pid = project.id ? String(project.id) : "";
                    return `
                      <div class="group rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 flex flex-col gap-3 hover:bg-white/10 transition-colors">
                        <div class="flex items-center justify-between gap-3">
                          <h4 class="text-lg md:text-xl font-semibold" style="font-family:Poppins, ui-sans-serif">
                            ${escapeHtml(project.title || "Untitled Project")}
                          </h4>
                          <span class="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                            style="font-family:Poppins, ui-sans-serif">
                            ${escapeHtml(project.category || "Digital Twin Project")}
                          </span>
                        </div>

                        <p class="text-sm md:text-base text-white/70" style="font-family:Poppins, ui-sans-serif, system-ui">
                          ${escapeHtml(project.summary || project.goal || "A featured project from the Digital Twins hub.")}
                        </p>

                        ${
                          project.videoUrl
                            ? `<a href="${escapeHtml(project.videoUrl)}" target="_blank" rel="noreferrer"
                                class="inline-flex items-center text-sm text-white/80 hover:text-white underline-offset-4 hover:underline">
                                Watch video
                              </a>`
                            : ""
                        }

                        <div class="mt-2 flex items-center justify-between gap-3 text-sm text-white/70">
                          ${
                            pid
                              ? `<a href="#/projects?id=${encodeURIComponent(pid)}" class="underline-offset-4 hover:underline">View project</a>`
                              : `<span>From the fellowship projects</span>`
                          }
                          <div class="flex items-center gap-1">
                            ${[0, 1, 2]
                              .map((dot) => `<span class="h-1.5 w-1.5 rounded-full ${dot === index ? "bg-white" : "bg-white/30"}"></span>`)
                              .join("")}
                          </div>
                        </div>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            </div>

            <div class="rounded-3xl bg-white text-gray-900 overflow-hidden shadow-lg border border-gray-200">
              <div class="px-6 pt-6 pb-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-500" style="font-family:Poppins, ui-sans-serif">Project of the Month</h3>
                  <p class="text-lg md:text-xl font-semibold mt-1" style="font-family:Poppins, ui-sans-serif">
                    ${escapeHtml((pom && pom.title) || "LA River Climate Resilience Twin")}
                  </p>
                </div>
                <span class="inline-flex items-center rounded-full bg-gray-900 text-white text-xs px-3 py-1" style="font-family:Poppins, ui-sans-serif">
                  ${escapeHtml((pom && pom.category) || "Climate · GIS · 3D")}
                </span>
              </div>

              <div class="aspect-video bg-black">
                <video class="w-full h-full" autoplay muted playsinline loop controls>
                  <source src="Featured Projects/Baldwin Hills.mp4" type="video/mp4" />
                </video>
              </div>

              <div class="px-6 py-5 space-y-3 text-sm md:text-base" style="font-family:Poppins, ui-sans-serif, system-ui">
                <p class="text-gray-700">
                  ${escapeHtml((pom && (pom.summary || pom.goal)) || "An interactive twin combining 3D models, simulations, and community data to explore future scenarios.")}
                </p>
                <p class="text-gray-600 text-sm">
                  ${escapeHtml((pom && pom.tools) ? `Built with: ${pom.tools}` : "Built with: Unreal Engine, Rhino, QGIS, open datasets.")}
                </p>
                <button class="mt-1 inline-flex items-center text-sm font-medium text-gray-900 hover:text-black underline-offset-4 hover:underline">
                  View project overview
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects Showcase -->
        <section class="w-full bg-gray-950 text-white relative overflow-hidden">
          <div class="pointer-events-none absolute inset-0 opacity-80" style="background: radial-gradient(circle at 50% 0%, rgba(125,211,252,0.08), transparent 55%), radial-gradient(circle at 90% 20%, rgba(192,132,252,0.08), transparent 55%), linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.75));"></div>
          <div class="max-w-[90rem] mx-auto px-6 py-16 md:py-24">
            <div class="home-projects-hero">
              <div class="home-projects-hero-particles">
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
              </div>

              <section class="home-projects-hero-wrap">
                <h3 class="home-projects-hero-title is-anim">Projects</h3>
                <div class="home-projects-hero-subtitle">
                  <span>Explore featured <b>digital twin</b> initiatives across disciplines.</span>
                  <span>Dive into <b>simulations</b>, <b>analytics</b>, and <b>real-time models</b>.</span>
                </div>
              </section>
            </div>

            <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-[1]">
              ${showcase
                .map((p, i) => {
                  const img = (p.image || p.img || "https://placehold.co/640x420").replace(/^\//, "");
                  const id = p.id ? String(p.id) : "";
                  return `
                    <div class="group rounded-2xl bg-white/[0.04] backdrop-blur-sm overflow-hidden shadow-[0_10px_36px_rgba(0,0,0,0.45)]">
                      <div class="relative overflow-hidden">
                        <img src="${escapeHtml(img)}" alt="${escapeHtml(p.title || "Project preview")}" class="w-full h-56 object-cover" />
                        <span class="absolute top-3 left-3 rounded-full bg-white/10 text-white text-xs px-3 py-1" style="font-family:Poppins, ui-sans-serif">
                          ${escapeHtml(p.category || "Project")}
                        </span>
                      </div>
                      <div class="p-5">
                        <h4 class="text-lg font-semibold text-white" style="font-family:Poppins, ui-sans-serif">${escapeHtml(p.title || "Untitled Project")}</h4>
                        ${
                          p.summary || p.goal
                            ? `<p class="mt-2 text-sm text-white/70 line-clamp-2" style="font-family:Poppins, ui-sans-serif, system-ui">
                                ${escapeHtml(p.summary || String(p.goal).split("\n")[0])}
                              </p>`
                            : ""
                        }
                        <a href="${id ? `#/projects/${encodeURIComponent(id)}` : "#/projects"}"
                           class="mt-4 inline-flex items-center text-sm text-white/70 group-hover:text-white underline-offset-4 hover:underline"
                           style="font-family:Poppins, ui-sans-serif">
                          View details
                        </a>
                      </div>
                    </div>
                  `;
                })
                .join("")}
            </div>

            <div class="mt-10 flex justify-center relative z-[1]">
              <a href="#/projects">
                <button class="rounded-full bg-white text-black px-6 py-3 hover:bg-gray-200 transition-colors text-base" style="font-family:Poppins, ui-sans-serif, system-ui">
                  Explore All Projects
                </button>
              </a>
            </div>
          </div>
        </section>

        <!-- Project Leaders -->
        <section class="w-full bg-black text-white relative overflow-hidden">
          <div class="max-w-[90rem] mx-auto px-6 py-20 md:py-24 relative">
            <div class="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-10 items-start">
              <div>
                <div class="text-white" style="font-family:Poppins, ui-sans-serif; font-weight:500; font-size:88px; line-height:1.05">
                  Project <br /> Leaders
                </div>
                <p class="mt-6 text-white/70 max-w-none text-xl md:text-2xl" style="font-family:Poppins, ui-sans-serif, system-ui; text-align:justify">
                  Our fellowship members lead with expertise, creativity, and collaboration. They turn ideas into reality and inspire innovation across every project.
                </p>
              </div>

              <div class="relative">
                <div id="leaderSlider"
                  class="relative bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm shadow-[inset_0_1px_6px_rgba(255,255,255,0.6)] px-6 py-6 md:px-10 md:py-10 overflow-hidden"
                  tabindex="0"
                  aria-label="Project leaders slider">
                  <div id="leaderContent" class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start transition-opacity duration-[${LEADER_FADE_MS}ms] ease-in-out opacity-100">
                    <img
                      id="leaderImg"
                      src="${escapeHtml(leaders[active].img)}"
                      alt="${escapeHtml(leaders[active].name)}"
                      class="w-full md:w-[260px] h-[340px] object-cover rounded-2xl"
                      onerror="this.src='https://placehold.co/260x340'; this.onerror=null;"
                    />
                    <div class="pt-2">
                      <div id="leaderName" class="text-3xl md:text-4xl font-bold" style="font-family:Poppins, ui-sans-serif">
                        ${escapeHtml(leaders[active].name)}
                      </div>
                      <div id="leaderTitle" class="mt-2 text-white/60" style="font-family:Poppins, ui-sans-serif">
                        ${escapeHtml(leaders[active].title)}
                      </div>
                      <p id="leaderDesc" class="mt-6 text-white/80 max-w-xl" style="font-family:Poppins, ui-sans-serif">
                        ${escapeHtml(leaders[active].desc || "Digital Twin leadership and mentorship across disciplines.")}
                      </p>
                    </div>
                  </div>

                  <div class="mt-6 flex items-center gap-2 justify-center">
                    ${leaders
                      .map(
                        (_, i) => `
                        <button data-leader-dot="${i}" aria-label="Go to slide ${i + 1}"
                          class="h-2 w-2 rounded-full ${i === active ? "bg-white" : "bg-white/40"} hover:bg-white/70 transition-colors">
                        </button>
                      `
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="w-full bg-gray-900 text-white">
          <div class="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 class="text-2xl md:text-3xl" style="font-family:Inter, system-ui">Have a Digital Twin idea?</h3>
              <p class="text-white/80 mt-2" style="font-family:Poppins, ui-sans-serif">
                Propose a project and collaborate with mentors and peers.
              </p>
            </div>
            <button id="openProposal"
              class="rounded-full bg-white text-black px-6 py-3 hover:bg-gray-200 transition-colors"
              style="font-family:Poppins, ui-sans-serif">
              Submit a Proposal
            </button>
          </div>
        </section>

        <!-- Footer -->
        <footer class="w-full bg-black text-white/70">
          <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span class="text-sm" style="font-family:Poppins, ui-sans-serif">${new Date().getFullYear()} Digital Twins Hub</span>
            <div class="flex items-center gap-6 text-sm">
              <button id="openTerms1" type="button"
                class="hover:text-white cursor-pointer bg-transparent border-none p-0 m-0 text-inherit"
                style="font-family:Poppins, ui-sans-serif">
                Privacy
              </button>
              <button id="openTerms2" type="button"
                class="hover:text-white cursor-pointer bg-transparent border-none p-0 m-0 text-inherit"
                style="font-family:Poppins, ui-sans-serif">
                Terms
              </button>
              <a href="#/contact" class="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>

        ${renderProposalModal()}
        ${renderTermsModal()}
      </div>
    `;

    // Slider behaviors
    const slider = document.getElementById("leaderSlider");
    slider?.addEventListener("mouseenter", () => (state.home.isPaused = true));
    slider?.addEventListener("mouseleave", () => (state.home.isPaused = false));
    slider?.addEventListener("focus", () => (state.home.isPaused = true));
    slider?.addEventListener("blur", () => (state.home.isPaused = false));

    document.querySelectorAll("[data-leader-dot]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = Number(btn.getAttribute("data-leader-dot"));
        homeGoToLeader(i);
      });
    });

    document.getElementById("openProposal")?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        state.home.showProposal = true;
        render();
      }, 300);
    });

    document.getElementById("openTerms1")?.addEventListener("click", () => {
      state.home.showTerms = true;
      render();
    });
    document.getElementById("openTerms2")?.addEventListener("click", () => {
      state.home.showTerms = true;
      render();
    });

    // Modal close handlers
    document.getElementById("closeProposal")?.addEventListener("click", () => {
      state.home.showProposal = false;
      render();
    });
    document.getElementById("proposalBackdrop")?.addEventListener("click", () => {
      state.home.showProposal = false;
      render();
    });

    document.getElementById("closeTerms")?.addEventListener("click", () => {
      state.home.showTerms = false;
      render();
    });
    document.getElementById("termsBackdrop")?.addEventListener("click", () => {
      state.home.showTerms = false;
      render();
    });
  }

  let leaderTransitionTimeout = null;
  function setLeaderDotActive(index) {
    document.querySelectorAll("[data-leader-dot]").forEach((btn) => {
      const i = Number(btn.getAttribute("data-leader-dot"));
      btn.classList.toggle("bg-white", i === index);
      btn.classList.toggle("bg-white/40", i !== index);
    });
  }

  function updateLeaderSliderDom(index) {
    const leaders = homeLeaders();
    const leader = leaders[index];
    if (!leader) return;

    const img = document.getElementById("leaderImg");
    const nameEl = document.getElementById("leaderName");
    const titleEl = document.getElementById("leaderTitle");
    const descEl = document.getElementById("leaderDesc");

    if (img) {
      img.src = String(leader.img || "");
      img.alt = String(leader.name || "");
    }
    if (nameEl) nameEl.textContent = String(leader.name || "");
    if (titleEl) titleEl.textContent = String(leader.title || "");
    if (descEl) descEl.textContent = String(leader.desc || "Digital Twin leadership and mentorship across disciplines.");

    setLeaderDotActive(index);
  }

  const leaderImgPreloadCache = new Map();
  function preloadLeaderImg(src) {
    const key = String(src || "");
    if (!key) return Promise.resolve();
    if (leaderImgPreloadCache.has(key)) return leaderImgPreloadCache.get(key);

    const p = new Promise((resolve) => {
      const im = new Image();
      im.onload = () => resolve();
      im.onerror = () => resolve();
      im.src = key;
    });
    leaderImgPreloadCache.set(key, p);
    return p;
  }

  function startLeaderTransition(nextIndexOrFn) {
    if (state.home.isFading) return;

    const leaderContent = document.getElementById("leaderContent");
    if (!leaderContent) return;

    if (leaderTransitionTimeout) {
      clearTimeout(leaderTransitionTimeout);
      leaderTransitionTimeout = null;
    }

    state.home.isFading = true;
    leaderContent.classList.remove("opacity-100");
    leaderContent.classList.add("opacity-0");

    leaderTransitionTimeout = setTimeout(() => {
      const leaders = homeLeaders();
      const nextIndex =
        typeof nextIndexOrFn === "function" ? Number(nextIndexOrFn()) : Number(nextIndexOrFn);
      const safeIndex = Number.isFinite(nextIndex) ? ((nextIndex % leaders.length) + leaders.length) % leaders.length : 0;

      const nextLeader = leaders[safeIndex];
      const nextImg = nextLeader && nextLeader.img ? String(nextLeader.img) : "";

      const maxWait = new Promise((r) => setTimeout(r, 450));
      Promise.race([preloadLeaderImg(nextImg), maxWait]).then(() => {
        state.home.activeLeader = safeIndex;
        updateLeaderSliderDom(safeIndex);

        requestAnimationFrame(() => {
          leaderContent.classList.remove("opacity-0");
          leaderContent.classList.add("opacity-100");
        });

        state.home.isFading = false;
        leaderTransitionTimeout = null;
      });
    }, LEADER_FADE_MS);
  }

  function homeGoToLeader(index) {
    startLeaderTransition(index);
  }

  function homeNextLeader() {
    startLeaderTransition(() => {
      const leaders = homeLeaders();
      return (state.home.activeLeader + 1) % leaders.length;
    });
  }

  let homeInterval = null;
  function ensureHomeInterval() {
    if (homeInterval) clearInterval(homeInterval);
    homeInterval = setInterval(() => {
      const route = parseRoute();
      if (route.name !== "home") return;
      if (state.home.isPaused) return;
      if (state.home.isFading) return;
      homeNextLeader();
    }, LEADER_INTERVAL_MS);
  }

  function renderProposalModal() {
    if (!state.home.showProposal) return "";
    return `
      <div class="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-20">
        <div id="proposalBackdrop" class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10 max-w-xl w-[90vw]">
          <div class="absolute -top-10 right-0 flex items-center gap-3">
            <button id="closeProposal" type="button"
              class="text-sm text-white/80 hover:text-white underline underline-offset-4"
              style="font-family:Poppins, ui-sans-serif">
              Close
            </button>
          </div>

          <div class="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md" style="font-family:Poppins, ui-sans-serif">
            <h2 class="text-2xl font-semibold mb-6 text-gray-800">Submit a Proposal</h2>

            <form class="space-y-5" onsubmit="return false">
              ${renderInput("Project Title", "Enter your project title")}
              ${renderSelect()}
              ${renderTextarea("Project Description", "Describe your idea...")}
              ${renderFileUpload()}
              <button type="button" class="rounded-full bg-black text-white px-6 py-3 w-full hover:bg-gray-800 transition-colors">
                Submit Proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  function renderTermsModal() {
    if (!state.home.showTerms) return "";
    return `
      <div class="fixed inset-0 z-50 flex items-start justify-center pt-10 md:pt-16">
        <div id="termsBackdrop" class="absolute inset-0 bg-black/60"></div>
        <div class="relative z-10 max-w-3xl w-[92vw]">
          <div class="absolute -top-10 right-0 flex items-center gap-3">
            <button id="closeTerms" type="button"
              class="text-sm text-white/80 hover:text-white underline underline-offset-4"
              style="font-family:Poppins, ui-sans-serif">
              Close
            </button>
          </div>

          <div class="bg-white rounded-2xl shadow-md px-6 py-8 md:px-8 md:py-10">
            <h2 class="text-2xl md:text-3xl font-semibold text-gray-900" style="font-family:Poppins, ui-sans-serif">
              Digital Twins Projects Hub — Terms of Service
            </h2>
            <p class="mt-2 text-sm text-gray-500" style="font-family:Poppins, ui-sans-serif">
              Effective date: November 24, 2025
            </p>

            <div class="mt-6 space-y-4 text-gray-800 text-sm md:text-base" style="font-family:Poppins, ui-sans-serif">
              <p>
                Welcome to <strong>Digital Twins Projects Hub</strong> ("we", "us", "Platform"). These Terms explain the rules for using our platform...
              </p>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">1. Membership</h3>
                <p>The Platform is only for fellowship members. Only invited or approved members may register and access projects.</p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">2. Account &amp; Security</h3>
                <p>Keep your account details private. You are responsible for all activity under your account.</p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">3. User Content</h3>
                <p>Members can upload project ideas, code, 3D models, or other materials ("User Content"). You still own your work.</p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">4. Acceptable Use</h3>
                <p>Do not post illegal, harmful, or offensive content. Do not interfere with the Platform’s operation.</p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">9. Contact</h3>
                <p>Questions? Email us at <strong>support@digitaltwins.example</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderInput(label, placeholder) {
    return `
      <div>
        <label class="block text-gray-700 mb-1 font-medium">${escapeHtml(label)}</label>
        <input class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-black outline-none"
          placeholder="${escapeHtml(placeholder)}" />
      </div>
    `;
  }

  function renderTextarea(label, placeholder) {
    return `
      <div>
        <label class="block text-gray-700 mb-1 font-medium">${escapeHtml(label)}</label>
        <textarea rows="4"
          class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-black outline-none"
          placeholder="${escapeHtml(placeholder)}"></textarea>
      </div>
    `;
  }

  function renderSelect() {
    return `
      <div>
        <label class="block text-gray-700 mb-1 font-medium">Category</label>
        <select class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-black outline-none">
          <option>Select a category</option>
          <option>AI / Machine Learning</option>
          <option>Software Development</option>
          <option>3D / Architecture</option>
          <option>Data Science</option>
          <option>Research Study</option>
        </select>
      </div>
    `;
  }

  function renderFileUpload() {
    return `
      <div>
        <label class="block text-gray-700 mb-1 font-medium">Attach Files (optional)</label>
        <input type="file" class="w-full rounded-xl border border-gray-300 px-4 py-2" />
      </div>
    `;
  }

  // -----------------------------
  // Projects Page
  // -----------------------------
  function exportPDF(proj) {
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });

      const marginX = 40;
      const marginTop = 40;
      const lineHeight = 16;
      const pageWidth = doc.internal.pageSize.getWidth();
      const textWidth = pageWidth - marginX * 2;
      let y = marginTop;

      const addWrappedText = (text, options = {}) => {
        const { bold = false } = options;
        const content = text || "-";
        if (bold) doc.setFont(undefined, "bold");
        const lines = doc.splitTextToSize(content, textWidth);
        doc.text(lines, marginX, y);
        y += lines.length * lineHeight + 6;
        if (bold) doc.setFont(undefined, "normal");
      };

      const addSection = (label, value, mono = false) => {
        doc.setFontSize(11);
        doc.setFont(undefined, "bold");
        doc.text(String(label || "").toUpperCase(), marginX, y);
        doc.setFont(undefined, "normal");
        y += lineHeight;

        if (mono) doc.setFont("courier", "normal");
        doc.setFontSize(10);
        const text = value || "-";
        const lines = doc.splitTextToSize(text, textWidth);
        doc.text(lines, marginX, y);
        y += lines.length * lineHeight + 10;
        if (mono) doc.setFont("helvetica", "normal");
      };

      doc.setFontSize(18);
      doc.setFont(undefined, "bold");
      addWrappedText(proj.title || "Untitled Project");

      doc.setFontSize(11);
      doc.setFont(undefined, "normal");
      const metaParts = [proj.category || "", proj.owner || "", proj.status || ""].filter(Boolean);
      if (metaParts.length) addWrappedText(metaParts.join(" • "));

      if (proj.teamMemberFirstName) {
        let teamLine = `Team Member: ${proj.teamMemberFirstName} ${proj.teamMemberLastName || ""}`;
        if (proj.teamMemberRole) teamLine += ` • ${proj.teamMemberRole}`;
        addWrappedText(teamLine);
        if (proj.teamMemberDescription) addWrappedText(proj.teamMemberDescription);
      }

      y += 4;

      addSection("Goal", proj.goal);
      addSection("Structure & Capabilities", proj.structureCapabilities);
      addSection("Key Features", proj.keyFeatures);
      addSection("File Structure", proj.fileStructure, true);
      addSection("Modules", formatModulesValue(proj.modules));
      addSection("Module Functions", proj.moduleFunctions);
      addSection("Impact & Data", proj.impactData);
      addSection("Problem it Solves", proj.problem);
      addSection("Data Types", proj.dataTypes);
      addSection("Conclusion", proj.conclusion);

      doc.setFontSize(9);
      doc.setFont(undefined, "normal");
      doc.text(`Generated ${new Date().toLocaleString()}`, marginX, doc.internal.pageSize.getHeight() - marginTop);

      const safeTitle = (proj.title || "project").replace(/[^a-z0-9-]+/gi, "_");
      doc.save(`${safeTitle}.pdf`);

      toast("PDF Downloaded", `Proposal for "${proj.title || "Untitled Project"}" has been downloaded as a PDF.`, "success");
    } catch (e) {
      console.error("Export PDF error", e);
      toast("Export Failed", "There was a problem generating the PDF. Please check the console for details.", "error");
      alert("Could not export PDF in the browser. Please try again or check console for details.");
    }
  }

  function renderProjectsPage() {
    const mountedClass = state.projectsPage.mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
    const normalizedQuery = (state.projectsPage.searchTerm || "").trim().toLowerCase();

    const projects = Array.isArray(state.projects) ? state.projects : [];
    const filteredProjects = normalizedQuery
      ? projects.filter((p) => ((p.title || "").toLowerCase().includes(normalizedQuery) || (p.goal || "").toLowerCase().includes(normalizedQuery)))
      : projects;

    const flagship = filteredProjects.filter((p) => p.projectType === "flagship");
    const userProjects = filteredProjects.filter((p) => !p.projectType || p.projectType === "user");

    const members = Array.isArray(state.projectsPage.teamMembers) ? state.projectsPage.teamMembers : [];
    const filteredMembers = normalizedQuery
      ? members.filter((m) => ((m.name || "").toLowerCase().includes(normalizedQuery) || (m.role || "").toLowerCase().includes(normalizedQuery)))
      : [];

    const projectTeamById = (() => {
      const map = new Map();
      members.forEach((m) => {
        const memberName = String(m?.name || "").trim();
        if (!memberName) return;
        const projs = Array.isArray(m?.projects) ? m.projects : [];
        projs.forEach((mp) => {
          const pid = mp?.openPreviewId != null ? String(mp.openPreviewId).trim() : "";
          if (!pid) return;
          const list = map.get(pid) || [];
          list.push(memberName);
          map.set(pid, list);
        });
      });

      map.forEach((list, k) => {
        const seen = new Set();
        const deduped = [];
        list.forEach((name) => {
          const key = String(name).trim().toLowerCase();
          if (!key || seen.has(key)) return;
          seen.add(key);
          deduped.push(name);
        });
        map.set(k, deduped);
      });
      return map;
    })();

    state.projectsPage._projectTeamById = projectTeamById;

    appEl.innerHTML = `
      <div class="min-h-screen bg-[#DFDFDF] transition-all duration-500 ease-out ${mountedClass}">
        <style>
          .dtp-card{
            position: relative;
            border-radius: 28px;
            overflow: hidden;
            border: 1px solid rgba(0,0,0,0.08);
            background: rgba(255,255,255,0.72);
            box-shadow:
              0 26px 70px rgba(0,0,0,0.12),
              inset 0 4px 6px rgba(255,255,255,0.7);
            transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
          }

          .dtp-wrap{
            position: relative;
          }

          .dtp-tab{
            position: absolute;
            top: -14px;
            left: 18px;
            z-index: 3;
            max-width: calc(100% - 36px);
            padding: 10px 14px;
            border-radius: 16px;
            border: 1px solid rgba(0,0,0,0.10);
            background: rgba(255,255,255,0.92);
            color: rgba(0,0,0,0.92);
            box-shadow: 0 14px 40px rgba(0,0,0,0.14);
            font-size: 14px;
            font-weight: 700;
            letter-spacing: -0.01em;
            line-height: 1.2;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .dtp-card:hover{
            transform: translateY(-6px);
            border-color: rgba(0,0,0,0.14);
            box-shadow:
              0 34px 90px rgba(0,0,0,0.16),
              inset 0 4px 6px rgba(255,255,255,0.75);
          }

          .dtp-visual{
            position: absolute;
            inset: 0;
            background:
              linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.22)),
              radial-gradient(circle at top right, rgba(255,255,255,0.35), transparent 30%),
              radial-gradient(circle at 15% 80%, rgba(255,255,255,0.22), transparent 28%),
              linear-gradient(135deg, rgba(255,255,255,0.55), rgba(0,0,0,0.08) 70%);
            background-size: auto, auto, auto, cover;
            background-position: 0 0, 0 0, 0 0, center;
            background-repeat: no-repeat;
            filter: saturate(1.02);
          }

          .dtp-visual::before{
            content: "";
            position: absolute;
            inset: 18px;
            border: 1px solid rgba(0,0,0,0.10);
            border-radius: 22px;
            pointer-events: none;
          }

          .dtp-content{
            position: relative;
            z-index: 1;
            min-height: 420px;
            padding: 22px;
            padding-bottom: 56px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: 14px;
          }

          .dtp-title{
            font-size: 26px;
            line-height: 1.05;
            letter-spacing: -0.02em;
            font-weight: 700;
            color: rgba(0,0,0,0.92);
          }

          .dtp-meta{
            font-size: 12px;
            color: rgba(0,0,0,0.72);
          }

          .dtp-goal{
            font-size: 12px;
            color: rgba(0,0,0,0.78);
            line-height: 1.6;
          }

          .dtp-pill{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: 18px;
            right: 18px;
            border-radius: 999px;
            padding: clamp(4px, 0.45vw, 6px) clamp(8px, 0.75vw, 10px);
            font-size: clamp(8px, 0.70vw, 10px);
            letter-spacing: 0.08em;
            text-transform: uppercase;
            border: 1px solid rgba(0,0,0,0.10);
            background: rgba(255,255,255,0.55);
            color: rgba(0,0,0,0.78);
            backdrop-filter: blur(8px);
          }

          .dtp-teamline{
            position: absolute;
            left: 18px;
            bottom: 18px;
            z-index: 2;
            max-width: calc(100% - 160px);
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid rgba(0,0,0,0.10);
            background: rgba(255,255,255,0.65);
            color: rgba(0,0,0,0.78);
            backdrop-filter: blur(8px);
            font-size: 11px;
            line-height: 1.1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .dtp-btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            padding: 9px 12px;
            font-size: 11px;
            background: rgba(0,0,0,0.86);
            color: #fff;
          }

          .dtp-btn:hover{ background: rgba(0,0,0,0.95); }
        </style>

        <div class="max-w-7xl mx-auto px-6 py-10 relative">
          <h1 class="text-black text-4xl sm:text-5xl md:text-7xl"
              style="font-family:Taygiacs, Poppins, ui-sans-serif; font-weight:400; line-height:1">
            Projects
          </h1>

          <div class="mt-6 flex items-start justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center w-full max-w-md bg-white/40 rounded-full shadow-[inset_0_4px_6px_rgba(255,255,255,0.6)] px-5 py-3">
                <input id="projectsSearch" type="text" placeholder="Search projects & people"
                  class="bg-transparent placeholder-black/60 text-black w-full focus:outline-none"
                  style="font-family:Poppins, ui-sans-serif; font-size:18px"
                  value="${escapeHtml(state.projectsPage.searchTerm)}" />
              </div>

              ${
                normalizedQuery
                  ? `
                  <div class="mt-4 bg-white/70 rounded-2xl px-5 py-4 shadow-sm border border-black/5 max-w-md">
                    <div class="text-xs font-semibold tracking-wide uppercase text-black/70" style="font-family:Poppins, ui-sans-serif">
                      People
                    </div>
                    ${
                      filteredMembers.length === 0
                        ? `<div class="mt-2 text-xs text-black/60" style="font-family:Poppins, ui-sans-serif">No team members found.</div>`
                        : `
                        <div class="mt-2 flex flex-wrap gap-3">
                          ${filteredMembers
                            .map(
                              (m) => `
                              <a href="#/team/${encodeURIComponent(m.slug)}"
                                class="inline-flex items-center gap-2 rounded-full bg-black text-white px-3 py-1 text-xs hover:bg-black/90">
                                <span class="inline-block h-6 w-6 rounded-full bg-white/20"></span>
                                <span>${escapeHtml(m.name)}</span>
                                ${m.role ? `<span class="text-white/70">• ${escapeHtml(m.role)}</span>` : ""}
                              </a>
                            `
                            )
                            .join("")}
                        </div>
                      `
                    }
                  </div>
                `
                  : ""
              }
            </div>
          </div>

          <div class="mt-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              ${
                flagship.length
                  ? `
                    <div class="col-span-full mb-4">
                      <div class="text-3xl font-semibold tracking-wide text-black" style="font-family:Poppins, ui-sans-serif">
                        FLAGSHIP PROJECTS
                      </div>
                    </div>
                    ${flagship.map(renderProjectCard).join("")}
                  `
                  : ""
              }

              ${
                userProjects.length
                  ? `
                    <div class="col-span-full mt-10 mb-4">
                      <div class="text-3xl font-semibold tracking-wide text-black" style="font-family:Poppins, ui-sans-serif">
                        USER ADDED PROJECTS
                      </div>
                    </div>
                    ${userProjects.map(renderProjectCard).join("")}
                  `
                  : ""
              }

              ${
                flagship.length === 0 && userProjects.length === 0
                  ? `<div class="mt-4 text-xs text-black/60 col-span-full" style="font-family:Poppins, ui-sans-serif">No user added projects yet.</div>`
                  : ""
              }
            </div>
          </div>
        </div>

      </div>
    `;

    // Wire search input
    const search = document.getElementById("projectsSearch");
    search?.addEventListener("input", (e) => {
      state.projectsPage.searchTerm = e.target.value;
      render();
    });

    // Wire cards
    document.querySelectorAll("[data-open-preview]").forEach((el) => {
      el.addEventListener("click", () => {
        const pid = el.getAttribute("data-open-preview");
        if (!pid) return;
        window.location.hash = `#/projects/${encodeURIComponent(pid)}`;
      });
    });
  }

  function renderProjectCard(p) {
    const img = getProjectImage(p);
    const pid = p && p.id != null ? String(p.id) : "";

    const teamNames = (() => {
      const map = state.projectsPage?._projectTeamById;
      if (!map || !pid) return [];
      const v = map.get(pid);
      return Array.isArray(v) ? v : [];
    })();

    const teamPreviewMax = 3;
    const teamPreview = teamNames.slice(0, teamPreviewMax);
    const teamRemaining = Math.max(0, teamNames.length - teamPreview.length);
    const teamLine = teamPreview.length ? `Team: ${teamPreview.join(", ")}${teamRemaining ? ` +${teamRemaining} more` : ""}` : "";

    const imageUrl = img ? encodeURI(String(img)) : "";

    return `
      <div class="dtp-wrap">
        <div data-open-preview="${escapeHtml(String(p.id))}" class="dtp-tab cursor-pointer">${escapeHtml(p.title || "Untitled")}</div>
        <div data-open-preview="${escapeHtml(String(p.id))}" class="dtp-card cursor-pointer">
          <div class="dtp-visual" style="${imageUrl ? `background-image: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.22)), radial-gradient(circle at top right, rgba(255,255,255,0.35), transparent 30%), radial-gradient(circle at 15% 80%, rgba(255,255,255,0.22), transparent 28%), url('${escapeHtml(imageUrl)}');` : ""}"></div>
          <div class="dtp-content" style="font-family: Istok Web, Poppins, ui-sans-serif">
            <div data-open-preview="${escapeHtml(String(p.id))}" class="dtp-pill">Projects Detalis</div>
            ${teamLine ? `<div class="dtp-teamline">${escapeHtml(teamLine)}</div>` : ""}

            <div class="flex flex-wrap gap-2">
              ${
                p.repoUrl
                  ? `<a href="${escapeHtml(p.repoUrl)}" target="_blank" rel="noreferrer" class="dtp-btn" onclick="event.stopPropagation()">Open in Browser</a>`
                  : ""
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderProjectPreviewModal(p) {
    const img = getProjectImage(p);
    const pid = p && p.id != null ? String(p.id) : "";
    const embed = state.projectsPage.showEmbeddedProject && p.repoUrl;

    const previewSummary =
      (p && p.summary ? String(p.summary) : "") || (p && p.description ? String(p.description).split("\n")[0] : "");
    return `
      <div class="fixed inset-0 z-50 flex items-center justify-center">
        <div id="previewBackdrop" class="absolute inset-0 bg-black/60"></div>

        <div id="previewScroll"
          class="relative z-10 w-[98vw] max-w-7xl max-h-[95vh] bg-white rounded-2xl overflow-y-auto flex flex-col transform transition-transform duration-300 ease-out scale-100">

          <div class="bg-white/95 backdrop-blur border-b border-black/10">
            ${img ? `<div class="h-36 sm:h-44 lg:h-48 w-full overflow-hidden bg-black/5"><img src="${escapeHtml(img)}" class="w-full h-full object-cover" /></div>` : ""}

            <div class="px-5 py-4 md:px-7 md:py-5 lg:px-8 lg:py-6">
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                <div class="min-w-0">
                  <h3 id="previewTitle" tabindex="-1" class="text-2xl sm:text-3xl lg:text-4xl text-black font-semibold break-words" style="font-family:Poppins, ui-sans-serif">
                    ${escapeHtml(p.title || "")}
                  </h3>
                  <div class="text-sm sm:text-base text-black/70 mt-1">
                    ${escapeHtml(p.category || "")}${p.owner ? ` • ${escapeHtml(p.owner)}` : ""}
                  </div>

                  ${
                    p.repoUrl
                      ? `
                      <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:gap-3 text-xs sm:text-sm">
                        <a href="${escapeHtml(p.repoUrl)}" target="_blank" rel="noreferrer"
                           class="inline-flex items-center justify-center rounded-full bg-black text-white px-3 py-1 text-[11px] sm:text-xs hover:bg-black/90">
                          Open in Browser
                        </a>
                      </div>
                    `
                      : ""
                  }

                  ${
                    previewSummary
                      ? `<div class="mt-2 text-xs sm:text-sm text-black/80 leading-relaxed">
                          ${escapeHtml(previewSummary)}
                        </div>`
                      : ""
                  }

                  ${
                    p.teamMemberFirstName
                      ? `
                      <div class="mt-3 text-sm sm:text-base text-black/80" style="font-family:Poppins, ui-sans-serif">
                        <span class="font-semibold">Team Member:</span>
                        ${escapeHtml(p.teamMemberFirstName)} ${escapeHtml(p.teamMemberLastName || "")}
                        ${p.teamMemberRole ? ` • ${escapeHtml(p.teamMemberRole)}` : ""}
                        ${
                          p.teamMemberDescription
                            ? `<div class="mt-2 text-xs sm:text-sm text-black/70 whitespace-pre-wrap leading-relaxed">${escapeHtml(p.teamMemberDescription)}</div>`
                            : ""
                        }
                      </div>
                    `
                      : ""
                  }
                </div>

                <div class="flex flex-shrink-0 items-center gap-2 md:gap-3 self-start">
                  <button id="exportPdfBtn" class="rounded-full border border-black/15 px-3 py-1.5 text-xs sm:text-sm">Export PDF</button>
                  <button id="closePreview" class="rounded-full border border-black/15 px-3 py-1.5 text-xs sm:text-sm">Back to Projects</button>
                </div>
              </div>
            </div>
          </div>

          <div class="px-5 pb-5 pt-4 md:px-7 md:pt-5 md:pb-6 lg:px-8 lg:pt-6 lg:pb-7">
            <div class="mb-5 flex flex-wrap gap-2 text-[11px] sm:text-xs" style="font-family:Poppins, ui-sans-serif">
              <span class="px-3 py-1 rounded-full bg-black/5 text-black/70 border border-black/10">Overview</span>
              <span class="px-3 py-1 rounded-full bg-black/5 text-black/70 border border-black/10">Technical</span>
              <span class="px-3 py-1 rounded-full bg-black/5 text-black/70 border border-black/10">Data</span>
              <span class="px-3 py-1 rounded-full bg-black/5 text-black/70 border border-black/10">Impact</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 text-sm sm:text-base text-black" style="font-family:Poppins, ui-sans-serif">
              ${p.description ? previewCard("Overview", renderTextBlock(p.description)) : ""}
              ${p.goal ? previewCard("Goal", renderTextBlock(p.goal)) : ""}
              ${p.structureCapabilities ? previewCard("Structure & Capabilities", renderTextBlock(p.structureCapabilities)) : ""}

              ${
                p.videoEmbedUrl
                  ? previewCard(
                      "Video",
                      `<div class="aspect-video w-full overflow-hidden rounded-xl bg-black/5 border border-black/10">
                        ${(() => {
                          if (pid === "02") {
                            return `<video class="w-full h-full" autoplay muted loop playsinline controls>
                              <source src="Featured Projects/Baldwin Hills.mp4" type="video/mp4" />
                            </video>`;
                          }
                          if (isDriveUrl(p.videoEmbedUrl)) {
                            return driveOpenInNewTabCta(p.videoEmbedUrl);
                          }
                          const direct = driveDirectVideoUrl(p.videoEmbedUrl);
                          if (direct) {
                            return `<video class="w-full h-full" autoplay muted loop playsinline controls src="${escapeHtml(direct)}" data-embed-url="${escapeHtml(String(p.videoEmbedUrl))}" onloadstart="window.__dtVideoWatchdog(this)" onloadeddata="window.__dtVideoClearWatchdog(this)" oncanplay="window.__dtVideoClearWatchdog(this)" onerror="window.__dtVideoFallback(this)"></video>`;
                          }
                          return `<iframe class="w-full h-full" src="${escapeHtml(withAutoplayParam(String(p.videoEmbedUrl)))}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
                        })()}
                      </div>
                      ${
                        p.videoTitle
                          ? `<div class="mt-2 text-xs sm:text-sm text-black/70" style="font-family:Poppins, ui-sans-serif">
                              ${escapeHtml(String(p.videoTitle))}
                            </div>`
                          : ""
                      }
                      <a href="${escapeHtml(String(p.videoUrl || p.videoEmbedUrl))}" target="_blank" rel="noreferrer"
                        class="mt-2 inline-flex items-center text-sm text-black/70 hover:text-black underline-offset-4 hover:underline"
                        style="font-family:Poppins, ui-sans-serif">
                        Open video in new tab
                      </a>`
                    )
                  : ""
              }

              ${p.techStack ? previewCard("Technical Stack", renderTechStack(p.techStack)) : ""}
              ${Array.isArray(p.features) && p.features.length ? previewCard("Key Features", renderFeatures(p.features)) : ""}

              ${p.fileStructure ? previewCard("File Structure", `<div class=\"font-mono text-xs sm:text-sm\">${escapeHtml(p.fileStructure)}</div>`) : ""}
              ${p.modules ? previewCard("Modules", renderModules(p.modules)) : ""}
              ${p.moduleFunctions ? previewCard("Module Functions", renderTextBlock(p.moduleFunctions)) : ""}

              ${p.problem ? previewCard("Problem it Solves", renderTextBlock(p.problem)) : ""}
              ${p.impact ? previewCard("Impact", renderImpact(p.impact)) : ""}
              ${p.data ? previewCard("Data", renderData(p.data)) : ""}
              ${p.dataTypes ? previewCard("Data Types", renderTextBlock(p.dataTypes)) : ""}

              ${Array.isArray(p.roadmap) && p.roadmap.length ? previewCard("Roadmap", renderRoadmap(p.roadmap)) : ""}
              ${p.team ? previewCard("Team", renderTeam(p.team)) : ""}
              ${p.conclusion ? previewCard("Conclusion", renderTextBlock(p.conclusion)) : ""}
              ${p.health ? previewCard("Project Health", renderHealth(p.health)) : ""}
            </div>

            ${
              embed
                ? `
                <div class="mt-8">
                  <div class="mb-2 text-xs sm:text-sm text-black/70" style="font-family:Poppins, ui-sans-serif">
                    Embedded project view
                  </div>
                  <div class="border border-black/10 rounded-xl overflow-hidden h-[400px] sm:h-[500px] bg-black/2">
                    <iframe src="${escapeHtml(p.repoUrl)}" title="${escapeHtml(p.title || "Project")} view" class="w-full h-full border-0"></iframe>
                  </div>
                </div>
              `
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }

  function previewCard(title, bodyHtml) {
    return `
      <div class="bg-black/2 rounded-xl border border-black/5 p-4 break-inside-avoid mb-4">
        <div class="text-sm sm:text-base font-semibold tracking-wide uppercase text-black/80">${escapeHtml(title)}</div>
        <div class="mt-2 leading-relaxed">${bodyHtml || "-"}</div>
      </div>
    `;
  }

  function previewBlock(label, value, mono = false) {
    return `
      <div class="bg-black/2 rounded-xl border border-black/5 p-4">
        <div class="text-sm sm:text-base font-semibold tracking-wide uppercase text-black/80">${escapeHtml(label)}</div>
        <div class="mt-2 whitespace-pre-wrap leading-relaxed ${mono ? "font-mono text-xs sm:text-sm" : ""}">
          ${escapeHtml(value || "-")}
        </div>
      </div>
    `;
  }

  // -----------------------------
  // Project Detail Page
  // -----------------------------
  function renderProjectDetail(id) {
    const project = getProjectById(id);

    if (!project) {
      appEl.innerHTML = `
        <div class="min-h-screen bg-[#DFDFDF]">
          <div class="max-w-5xl mx-auto px-6 py-10">
            <h1 class="text-3xl font-semibold text-black" style="font-family:Poppins, ui-sans-serif">Project not found</h1>
            <p class="mt-2 text-black/70" style="font-family:Poppins, ui-sans-serif">
              We couldn't find a project with this ID. It may have been deleted or not saved yet.
            </p>
            <div class="mt-6">
              <a href="#/projects" class="inline-flex items-center rounded-full bg-black text-white px-5 py-2 text-sm" style="font-family:Poppins, ui-sans-serif">
                Back to Projects
              </a>
            </div>
          </div>
        </div>
      `;
      return;
    }

    const pid = project && project.id != null ? String(project.id) : "";
    const projectImage = project.image ? project.image.replace(/^\//, "") : (project.repoUrl ? getGitHubOgImage(project.repoUrl) : "");

    appEl.innerHTML = `
      <div class="min-h-screen bg-[#DFDFDF]">
        <div class="max-w-6xl mx-auto px-6 py-10">
          <div class="flex items-center justify-between gap-4 mb-6">
            <h1 id="projectDetailTitle" tabindex="-1" class="text-3xl sm:text-4xl md:text-5xl text-black font-semibold break-words" style="font-family:Poppins, ui-sans-serif">
              ${escapeHtml(project.title || "Untitled Project")}
            </h1>
            <a href="#/projects" class="shrink-0 rounded-full border border-black/15 px-4 py-2 text-xs sm:text-sm text-black"
               style="font-family:Poppins, ui-sans-serif">
              Back to Projects
            </a>
          </div>

          ${
            projectImage
              ? `<div class="mb-6 w-full overflow-hidden rounded-2xl bg-black/5">
                  <img src="${escapeHtml(projectImage)}" alt="${escapeHtml(project.title || "")}" class="w-full max-h-[360px] object-cover" />
                </div>`
              : ""
          }

          <div class="text-sm sm:text-base text-black/70 mb-2" style="font-family:Poppins, ui-sans-serif">
            ${escapeHtml(project.category || "")}${project.owner ? ` • ${escapeHtml(project.owner)}` : ""}
          </div>

          ${
            project.repoUrl
              ? `<div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:gap-3 text-xs sm:text-sm" style="font-family:Poppins, ui-sans-serif">
                  <a href="${escapeHtml(project.repoUrl)}" target="_blank" rel="noreferrer"
                    class="inline-flex items-center justify-center rounded-full bg-black text-white px-3 py-1 text-[11px] sm:text-xs hover:bg-black/90">
                    Open in Browser
                  </a>
                </div>`
              : ""
          }

          ${
            project.teamMemberFirstName
              ? `<div class="mb-8 text-sm sm:text-base text-black/80" style="font-family:Poppins, ui-sans-serif">
                  <span class="font-semibold">Team Member:</span>
                  ${escapeHtml(project.teamMemberFirstName)} ${escapeHtml(project.teamMemberLastName || "")}
                  ${project.teamMemberRole ? ` • ${escapeHtml(project.teamMemberRole)}` : ""}
                  ${
                    project.teamMemberDescription
                      ? `<div class="mt-2 text-xs sm:text-sm text-black/70 whitespace-pre-wrap leading-relaxed">
                          ${escapeHtml(project.teamMemberDescription)}
                        </div>`
                      : ""
                  }
                </div>`
              : ""
          }

          <div class="columns-1 md:columns-2 [column-gap:1rem] md:[column-gap:1.5rem] text-sm sm:text-base text-black" style="font-family:Poppins, ui-sans-serif">
            ${project.description ? detailCard("Overview", renderTextBlock(project.description)) : ""}
            ${project.goal ? detailCard("Goal", renderTextBlock(project.goal)) : ""}
            ${project.structureCapabilities ? detailCard("Structure & Capabilities", renderTextBlock(project.structureCapabilities)) : ""}

            ${
              project.videoEmbedUrl
                ? detailCard(
                    "Video",
                    `<div class="aspect-video w-full overflow-hidden rounded-xl bg-black/5 border border-black/10">
                      ${(() => {
                        if (pid === "02") {
                          return `<video class="w-full h-full" autoplay muted loop playsinline controls>
                            <source src="Featured Projects/Baldwin Hills.mp4" type="video/mp4" />
                          </video>`;
                        }
                        if (isDriveUrl(project.videoEmbedUrl)) {
                          return driveOpenInNewTabCta(project.videoEmbedUrl);
                        }
                        const direct = driveDirectVideoUrl(project.videoEmbedUrl);
                        if (direct) {
                          return `<video class="w-full h-full" autoplay muted loop playsinline controls src="${escapeHtml(direct)}" data-embed-url="${escapeHtml(String(project.videoEmbedUrl))}" onloadstart="window.__dtVideoWatchdog(this)" onloadeddata="window.__dtVideoClearWatchdog(this)" oncanplay="window.__dtVideoClearWatchdog(this)" onerror="window.__dtVideoFallback(this)"></video>`;
                        }
                        return `<iframe class="w-full h-full" src="${escapeHtml(withAutoplayParam(String(project.videoEmbedUrl)))}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
                      })()}
                    </div>
                    ${
                      project.videoTitle
                        ? `<div class="mt-2 text-xs sm:text-sm text-black/70" style="font-family:Poppins, ui-sans-serif">
                            ${escapeHtml(String(project.videoTitle))}
                          </div>`
                        : ""
                    }
                    <a href="${escapeHtml(String(project.videoUrl || project.videoEmbedUrl))}" target="_blank" rel="noreferrer"
                      class="mt-2 inline-flex items-center text-sm text-black/70 hover:text-black underline-offset-4 hover:underline"
                      style="font-family:Poppins, ui-sans-serif">
                      Open video in new tab
                    </a>`
                  )
                : ""
            }

            ${project.techStack ? detailCard("Technical Stack", renderTechStack(project.techStack)) : ""}
            ${Array.isArray(project.features) && project.features.length ? detailCard("Key Features", renderFeatures(project.features)) : ""}

            ${project.fileStructure ? detailCard("File Structure", `<div class=\"font-mono text-xs sm:text-sm\">${escapeHtml(project.fileStructure)}</div>`) : ""}
            ${project.modules ? detailCard("Modules", renderModules(project.modules)) : ""}
            ${project.moduleFunctions ? detailCard("Module Functions", renderTextBlock(project.moduleFunctions)) : ""}

            ${project.problem ? detailCard("Problem it Solves", renderTextBlock(project.problem)) : ""}
            ${project.impact ? detailCard("Impact", renderImpact(project.impact)) : ""}
            ${project.data ? detailCard("Data", renderData(project.data)) : ""}
            ${project.dataTypes ? detailCard("Data Types", renderTextBlock(project.dataTypes)) : ""}

            ${Array.isArray(project.roadmap) && project.roadmap.length ? detailCard("Roadmap", renderRoadmap(project.roadmap)) : ""}
            ${project.team ? detailCard("Team", renderTeam(project.team)) : ""}
            ${project.conclusion ? detailCard("Conclusion", renderTextBlock(project.conclusion)) : ""}
            ${project.health ? detailCard("Project Health", renderHealth(project.health)) : ""}
          </div>
        </div>
      </div>
    `;
  }

  function detailCard(title, bodyHtml) {
    return `
      <div class="bg-white rounded-xl border border-black/5 p-4 break-inside-avoid mb-4">
        <div class="text-sm sm:text-base font-semibold tracking-wide uppercase text-black/80">${escapeHtml(title)}</div>
        <div class="mt-2 leading-relaxed">${bodyHtml || "-"}</div>
      </div>
    `;
  }

  function renderTextBlock(value) {
    const raw = value == null ? "" : String(value);
    const paras = raw
      .split(/\n\s*\n/g)
      .map((p) => p.trim())
      .filter(Boolean);

    if (!paras.length) return "-";

    if (paras.length === 1) {
      return `<p class="text-black/80">${escapeHtml(paras[0]).replace(/\n/g, "<br />")}</p>`;
    }

    return `<div class="space-y-2">${paras
      .map((p) => `<p class="text-black/80">${escapeHtml(p).replace(/\n/g, "<br />")}</p>`)
      .join("")}</div>`;
  }

  function renderTechStack(techStack) {
    if (!techStack || typeof techStack !== "object") return "-";
    return Object.entries(techStack)
      .map(([k, v]) => `<div><span class="font-medium capitalize">${escapeHtml(k)}:</span> ${escapeHtml(Array.isArray(v) ? v.join(", ") : v)}</div>`)
      .join("");
  }

  function renderFeatures(features) {
    if (!Array.isArray(features)) return "-";
    return `<ul class="list-disc pl-5 space-y-1">${features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>`;
  }

  function renderModules(modules) {
    if (!modules || typeof modules !== "object") return "-";
    return Object.entries(modules)
      .map(([name, moduleData]) => {
        const desc = moduleData?.description || "";
        const comps = Array.isArray(moduleData?.components) ? moduleData.components : [];
        return `
          <div class="mb-4">
            <div class="font-medium capitalize">${escapeHtml(name)}</div>
            <div class="text-sm text-black/70">${escapeHtml(desc)}</div>
            ${comps.length ? `<ul class="list-disc pl-5 mt-1 text-sm">${comps.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>` : ""}
          </div>
        `;
      })
      .join("");
  }

  function renderImpact(impact) {
    if (!impact) return "-";
    const metrics = Array.isArray(impact.metrics) ? impact.metrics : [];
    const benefits = Array.isArray(impact.benefits) ? impact.benefits : [];
    return `
      <div class="space-y-4">
        <div>
          <div class="font-medium">Metrics:</div>
          <ul class="list-disc pl-5 mt-1">${metrics.map((m) => `<li>${escapeHtml(m)}</li>`).join("")}</ul>
        </div>
        <div>
          <div class="font-medium">Benefits:</div>
          <ul class="list-disc pl-5 mt-1">${benefits.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
        </div>
      </div>
    `;
  }

  function renderData(data) {
    if (!data) return "-";
    const sources = Array.isArray(data.sources) ? data.sources : [];
    const types = Array.isArray(data.types) ? data.types : [];
    return `
      <div class="space-y-4">
        <div>
          <div class="font-medium">Sources:</div>
          <ul class="list-disc pl-5 mt-1">${sources.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>
        </div>
        <div>
          <div class="font-medium">Types:</div>
          <div class="mt-1">${escapeHtml(types.join(", "))}</div>
        </div>
      </div>
    `;
  }

  function renderRoadmap(roadmap) {
    if (!Array.isArray(roadmap)) return "-";
    return `
      <div class="space-y-4">
        ${roadmap
          .map(
            (phase) => `
          <div class="border-l-2 pl-3 border-black/10">
            <div class="font-medium">${escapeHtml(phase.phase)} <span class="text-sm font-normal text-black/60">(${escapeHtml(phase.status)})</span></div>
            <ul class="list-disc pl-5 mt-1">
              ${(Array.isArray(phase.items) ? phase.items : []).map((i) => `<li class="text-sm">${escapeHtml(i)}</li>`).join("")}
            </ul>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  function renderTeam(team) {
    if (!team) return "-";
    const members = Array.isArray(team.members) ? team.members : [];
    const collab = Array.isArray(team.collaboration) ? team.collaboration : [];
    return `
      <div class="space-y-4">
        <div>
          <div class="font-medium">Team Members:</div>
          <ul class="mt-1 space-y-2">
            ${members.map((m) => `<li><span class="font-medium">${escapeHtml(m.name)}</span> • ${escapeHtml(m.role)}</li>`).join("")}
          </ul>
        </div>
        <div>
          <div class="font-medium">Collaboration:</div>
          <ul class="list-disc pl-5 mt-1">${collab.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>
        </div>
      </div>
    `;
  }

  function renderHealth(health) {
    if (!health) return "-";
    return `
      <div class="space-y-2">
        <div><span class="font-medium">Status:</span> ${escapeHtml(health.status)}</div>
        <div><span class="font-medium">Last Deployed:</span> ${escapeHtml(health.lastDeployed)}</div>
        <div><span class="font-medium">Open Issues:</span> ${escapeHtml(health.openIssues)}</div>
        <div><span class="font-medium">Test Coverage:</span> ${escapeHtml(health.testCoverage)}</div>
      </div>
    `;
  }

  // -----------------------------
  // Team Page + Member Page
  // -----------------------------
  function renderTeamPage() {
    const mountedClass = state.projectsPage.mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
    const members = Array.isArray(state.projectsPage.teamMembers) ? state.projectsPage.teamMembers : [];
    const filterKey = String(state.projectsPage.teamFilter || "all");
    const filterOptions = [
      { key: "all", label: "All" },
      { key: "cs", label: "Computer Science" },
      { key: "arch", label: "Architects" },
    ];

    const csSlugs = new Set(["meri-sargsian", "omid-ahmadi", "mario-chong-loo", "saron-feyisa", "michael-lee", "volodymyr-balan"]);
    const archSlugs = new Set(["monique-nogueira", "myisha-arellano", "yiceth-cosby", "monica-kaye", "brenda-cardoza", "eddie-cortez", "eden-olvera"]);
    const filteredMembers = members.filter((m) => {
      const slug = String(m?.slug || "");
      if (filterKey === "cs") return csSlugs.has(slug);
      if (filterKey === "arch") return archSlugs.has(slug);
      return true;
    });

    const sortedMembers = [...filteredMembers].sort((a, b) => {
      const aOrder = Number.isFinite(Number(a?.sortOrder)) ? Number(a.sortOrder) : Number.POSITIVE_INFINITY;
      const bOrder = Number.isFinite(Number(b?.sortOrder)) ? Number(b.sortOrder) : Number.POSITIVE_INFINITY;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return String(a?.name || "").localeCompare(String(b?.name || ""));
    });

    appEl.innerHTML = `
      <div class="min-h-screen bg-neutral-200 transition-all duration-500 ease-out ${mountedClass}">
        <div class="max-w-7xl mx-auto px-6 py-10 scroll-reveal">
          <div class="flex items-center justify-between gap-4">
            <h1 class="text-black text-3xl sm:text-4xl md:text-6xl" style="font-family:Poppins, ui-sans-serif; font-weight:400">
              Meet Our Team!
            </h1>
          </div>

          <div class="mt-10 flex items-center gap-4 justify-center">
            ${filterOptions
              .map(
                (opt) => `
              <button data-team-filter="${escapeHtml(opt.key)}"
                class="px-6 py-2 rounded-full ${opt.key === filterKey ? "bg-black text-white" : "bg-white/40 text-black"} shadow-[inset_0_4px_6px_rgba(255,255,255,0.6)]"
                style="font-family:Poppins, ui-sans-serif; font-size:20px">
                ${escapeHtml(opt.label)}
              </button>
            `
              )
              .join("")}
          </div>
        </div>

        <section class="w-full bg-black">
          <div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${sortedMembers
              .map(
                (m) => `
              <a href="#/team/${encodeURIComponent(m.slug)}" class="block scroll-reveal">
                <div class="group relative bg-white/5 rounded-3xl backdrop-blur-[1px] overflow-hidden transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img src="${escapeHtml(m.img)}" alt="${escapeHtml(m.name)}"
                    class="w-full h-60 object-cover transform scale-[0.9] transition-transform duration-500 group-hover:scale-[1.15]" style="object-position: ${escapeHtml(m.cardObjectPosition || "50% 20%")};" />
                  <div class="p-4">
                    <div class="text-white text-2xl" style="font-family:Poppins, ui-sans-serif">${escapeHtml(m.name)}</div>
                    <div class="text-white/60 text-base leading-8" style="font-family:Poppins, ui-sans-serif">${escapeHtml(m.role)}</div>
                    ${m.project ? `<div class="text-white/50 text-sm leading-6" style="font-family:Poppins, ui-sans-serif">Project: ${escapeHtml(m.project)}</div>` : ""}
                  </div>
                </div>
              </a>
            `
              )
              .join("")}
          </div>
        </section>
      </div>
    `;

    document.querySelectorAll("[data-team-filter]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const key = String(e.currentTarget?.getAttribute("data-team-filter") || "all");
        state.projectsPage.teamFilter = key;
        renderTeamPage();
      });
    });

    const revealTargets = Array.from(appEl.querySelectorAll(".scroll-reveal"));
    if (state.projectsPage._revealObserver) {
      try {
        state.projectsPage._revealObserver.disconnect();
      } catch (_) {
        // ignore
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    revealTargets.forEach((el) => observer.observe(el));
    state.projectsPage._revealObserver = observer;
  }

  function renderTeamMember(slug) {
    const members = state.projectsPage.teamMembers;
    const m = members.find((x) => x.slug === slug);

    if (!m) {
      appEl.innerHTML = `
        <div class="min-h-screen bg-neutral-200">
          <div class="max-w-5xl mx-auto px-6 py-10">
            <h1 class="text-3xl font-semibold text-black" style="font-family:Poppins, ui-sans-serif">Team member not found</h1>
            <a href="#/team" class="mt-6 inline-flex items-center rounded-full bg-black text-white px-5 py-2 text-sm" style="font-family:Poppins, ui-sans-serif">
              Back to Team
            </a>
          </div>
        </div>
      `;
      return;
    }

    const derivedProjects = (Array.isArray(state.projects) ? state.projects : [])
      .filter((p) => {
        const ownerRaw = String(p?.owner || "").trim();
        const byNameRaw = `${String(p?.teamMemberFirstName || "").trim()} ${String(p?.teamMemberLastName || "").trim()}`.trim();

        const teamMemberNames = (Array.isArray(p?.team?.members) ? p.team.members : [])
          .map((tm) => String(tm?.name || "").trim())
          .filter(Boolean);

        const owner = ownerRaw.toLowerCase();
        const byName = byNameRaw.toLowerCase();

        const needleFull = String(m.name || "").trim().toLowerCase();
        const needleParts = needleFull.split(/\s+/).filter(Boolean);
        const needleFirst = needleParts[0] || "";
        const needleLast = needleParts.length ? needleParts[needleParts.length - 1] : "";

        const ownerMatches =
          (owner && needleFull && owner === needleFull) ||
          (owner && needleFirst && owner === needleFirst) ||
          (owner && needleLast && owner === needleLast) ||
          (owner && needleFull && needleFull.includes(owner));

        const byNameMatches =
          (byName && needleFull && byName === needleFull) ||
          (byName && needleFirst && byName.includes(needleFirst)) ||
          (byName && needleLast && byName.includes(needleLast));

        const teamMembersMatch = teamMemberNames.some((nm) => {
          const n = nm.toLowerCase();
          return (
            (n && needleFull && n === needleFull) ||
            (n && needleFirst && n.includes(needleFirst)) ||
            (n && needleLast && n.includes(needleLast))
          );
        });

        return ownerMatches || byNameMatches || teamMembersMatch;
      })
      .map((p) => {
        const img = p?.image ? String(p.image).replace(/^\//, "") : "";
        return {
          title: p?.title ? String(p.title) : "Untitled",
          subtitle: `${String(p?.category || "Project")}`.trim(),
          img,
          href: p?.id ? `#/projects/${encodeURIComponent(String(p.id))}` : "#/projects",
        };
      });

    const projectsToShow = Array.isArray(m.projects) && m.projects.length ? m.projects : derivedProjects;

    appEl.innerHTML = `
      <div class="min-h-screen bg-black text-white">
        <div class="max-w-6xl mx-auto px-6 py-12">
          <div class="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-start">
            <div class="flex flex-col items-center lg:items-start gap-4">
              <div class="w-full max-w-[320px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
                <img src="${escapeHtml(m.img)}" alt="${escapeHtml(m.name)}" class="w-full h-auto max-h-[520px] object-contain" />
              </div>

              <div class="w-full max-w-[320px] flex items-center gap-3 text-white/80">
                ${m.githubUrl
                  ? `
                    <a href="${escapeHtml(m.githubUrl)}" target="_blank" rel="noreferrer" class="hover:text-white transition-colors" aria-label="GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 .5C5.73.5.75 5.67.75 12.06c0 5.1 3.32 9.43 7.93 10.96.58.11.79-.26.79-.57v-2.1c-3.22.72-3.9-1.41-3.9-1.41-.53-1.38-1.29-1.75-1.29-1.75-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.22 1.77 1.22 1.03 1.81 2.7 1.29 3.36.98.1-.77.4-1.29.72-1.59-2.57-.3-5.27-1.32-5.27-5.88 0-1.3.45-2.36 1.19-3.2-.12-.3-.52-1.52.11-3.17 0 0 .97-.32 3.18 1.22.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.54 3.17-1.22 3.17-1.22.64 1.65.24 2.87.12 3.17.74.84 1.18 1.9 1.18 3.2 0 4.57-2.7 5.58-5.28 5.88.41.37.78 1.08.78 2.18v3.23c0 .32.21.69.8.57 4.6-1.53 7.92-5.86 7.92-10.96C23.25 5.67 18.27.5 12 .5z"/>
                      </svg>
                    </a>
                  `
                  : ""}
                ${m.linkedinUrl
                  ? `
                    <a href="${escapeHtml(m.linkedinUrl)}" target="_blank" rel="noreferrer" class="hover:text-white transition-colors" aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M4.98 3.5C3.88 3.5 3 4.4 3 5.5s.88 2 1.98 2h.02C6.1 7.5 7 6.6 7 5.5S6.1 3.5 5 3.5h-.02zM3.5 8.75H6.5V21.5H3.5V8.75zM9 8.75h2.88v1.74h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.62 2.06 3.62 4.74v7.83h-3V14.4c0-1.67-.03-3.82-2.3-3.82-2.3 0-2.65 1.86-2.65 3.69v7.23H9V8.75z"/>
                      </svg>
                    </a>
                  `
                  : ""}
                ${m.websiteUrl
                  ? `
                    <a href="${escapeHtml(m.websiteUrl)}" target="_blank" rel="noreferrer" class="hover:text-white transition-colors" aria-label="Website">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M10.59 13.41a1.996 1.996 0 0 0 2.82 0l3.3-3.3a2 2 0 1 0-2.82-2.82l-.88.88-1.41-1.41.88-.88a4 4 0 0 1 5.66 5.66l-3.3 3.3a4 4 0 0 1-5.66 0l-.88-.88 1.41-1.41.88.86z"/>
                        <path d="M13.41 10.59a1.996 1.996 0 0 0-2.82 0l-3.3 3.3a2 2 0 0 0 2.82 2.82l.88-.88 1.41 1.41-.88.88a4 4 0 1 1-5.66-5.66l3.3-3.3a4 4 0 0 1 5.66 0l.88.88-1.41 1.41-.88-.86z"/>
                      </svg>
                    </a>
                  `
                  : ""}
              </div>

              <a href="#/team" class="mt-2 text-xs text-white/70 hover:text-white underline-offset-4 hover:underline" style="font-family:Poppins, ui-sans-serif">
                Back to team
              </a>
            </div>

            <div>
              <h1 class="text-3xl sm:text-4xl md:text-5xl" style="font-family:Poppins, ui-sans-serif; font-weight:600">
                ${escapeHtml(m.name)}
              </h1>
              ${m.role ? `<div class="mt-2 text-white/70" style="font-family:Poppins, ui-sans-serif">${escapeHtml(m.role)}</div>` : ""}

              ${m.bio
                ? `
                  <p class="mt-5 text-white/80 leading-relaxed" style="font-family:Poppins, ui-sans-serif, system-ui">
                    ${escapeHtml(m.bio)}
                  </p>
                `
                : ""}

              ${Array.isArray(m.highlights) && m.highlights.length
                ? `
                  <div class="mt-8">
                    <div class="text-sm font-semibold" style="font-family:Poppins, ui-sans-serif">Highlights</div>
                    <ul class="mt-3 space-y-1.5 text-white/80 text-sm leading-relaxed" style="font-family:Poppins, ui-sans-serif, system-ui">
                      ${m.highlights.map((h) => `<li class="flex gap-2"><span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/70"></span><span>${escapeHtml(h)}</span></li>`).join("")}
                    </ul>
                  </div>
                `
                : ""}

              ${Array.isArray(m.education) && m.education.length
                ? `
                  <div class="mt-8">
                    <div class="text-sm font-semibold" style="font-family:Poppins, ui-sans-serif">Education</div>
                    <ul class="mt-3 space-y-1.5 text-white/80 text-sm leading-relaxed" style="font-family:Poppins, ui-sans-serif, system-ui">
                      ${m.education.map((e) => `<li class="flex gap-2"><span class=\"mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/70\"></span><span>${escapeHtml(e)}</span></li>`).join("")}
                    </ul>
                  </div>
                `
                : ""}

              ${Array.isArray(m.skills) && m.skills.length
                ? `
                  <div class="mt-8">
                    <div class="text-sm font-semibold" style="font-family:Poppins, ui-sans-serif">Skills</div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      ${m.skills
                        .map(
                          (s) => `
                          <span class="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                            ${escapeHtml(s)}
                          </span>
                        `
                        )
                        .join("")}
                    </div>
                  </div>
                `
                : ""}

              ${Array.isArray(m.languages) && m.languages.length
                ? `
                  <div class="mt-8">
                    <div class="text-sm font-semibold" style="font-family:Poppins, ui-sans-serif">Languages</div>
                    <ul class="mt-3 space-y-1.5 text-white/80 text-sm leading-relaxed" style="font-family:Poppins, ui-sans-serif, system-ui">
                      ${m.languages.map((l) => `<li class="flex gap-2"><span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/70"></span><span>${escapeHtml(l)}</span></li>`).join("")}
                    </ul>
                  </div>
                `
                : ""}

              ${Array.isArray(projectsToShow) && projectsToShow.length
                ? `
                  <div class="mt-10">
                    <div class="text-sm font-semibold" style="font-family:Poppins, ui-sans-serif">Projects</div>
                    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      ${projectsToShow
                        .slice(0, 4)
                        .map((p) => {
                          const openPreviewId = p?.openPreviewId ? String(p.openPreviewId) : "";
                          const href = p && (p.href || p.url || p.demoUrl || p.repoUrl) ? String(p.href || p.url || p.demoUrl || p.repoUrl) : "";
                          const title = p && p.title ? String(p.title) : "Untitled";
                          const subtitle = p && p.subtitle ? String(p.subtitle) : "";
                          const img = p && (p.image || p.img) ? String(p.image || p.img) : "";
                          const teamLine = p?.teamLine ? String(p.teamLine) : "";
                          const browserUrl = p?.browserUrl ? String(p.browserUrl) : "";
                          const description = p?.description ? String(p.description) : "";

                          if (openPreviewId) {
                            return `
                              <div data-open-preview="${escapeHtml(openPreviewId)}" class="group relative rounded-2xl bg-white/60 backdrop-blur-sm overflow-hidden cursor-pointer transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl" style="box-shadow: inset 0 4px 6px rgba(255,255,255,0.6);">
                                <div class="h-44 w-full overflow-hidden bg-white/40 flex items-center justify-center text-black/50">
                                  ${img ? `<img src="${escapeHtml(img)}" alt="${escapeHtml(title)}" class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105">` : ""}
                                </div>
                                <div class="p-5">
                                  <div class="flex items-center justify-between gap-2">
                                    <div class="text-2xl font-bold text-black" style="font-family: Istok Web, Poppins, ui-sans-serif">
                                      ${escapeHtml(title)}
                                    </div>
                                  </div>
                                  ${subtitle ? `<div class="mt-1 text-sm text-black" style="font-family: Istok Web, Poppins, ui-sans-serif">${escapeHtml(subtitle)}</div>` : ""}
                                  ${teamLine ? `<div class="mt-1 text-xs text-black/70" style="font-family: Istok Web, Poppins, ui-sans-serif">${escapeHtml(teamLine)}</div>` : ""}
                                  ${browserUrl
                                    ? `
                                      <div class="mt-2 flex flex-col gap-1 text-xs">
                                        <a href="${escapeHtml(browserUrl)}" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-full bg-black text-white px-3 py-1 text-[11px] hover:bg-black/90" onclick="event.stopPropagation()">
                                          Open in Browser
                                        </a>
                                      </div>
                                    `
                                    : ""}
                                  ${description
                                    ? `<p class="mt-3 text-xs text-black" style="font-family: Istok Web, Poppins, ui-sans-serif">${escapeHtml(description)}</p>`
                                    : ""}
                                </div>
                              </div>
                            `;
                          }

                          const card = `
                            <div class="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                              <div class="aspect-[16/9] bg-white/10">
                                ${img ? `<img src="${escapeHtml(img)}" alt="${escapeHtml(title)}" class="w-full h-full object-cover" />` : ""}
                              </div>
                              <div class="p-4">
                                <div class="font-semibold text-white" style="font-family:Poppins, ui-sans-serif">${escapeHtml(title)}</div>
                                ${subtitle ? `<div class="mt-1 text-xs text-white/60" style="font-family:Poppins, ui-sans-serif">${escapeHtml(subtitle)}</div>` : ""}
                              </div>
                            </div>
                          `;
                          return href
                            ? `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer" class="block hover:translate-y-[-2px] transition-transform">${card}</a>`
                            : card;
                        })
                        .join("")}
                    </div>
                  </div>
                `
                : ""}

              ${m.experience
                ? `
                  <div class="mt-10">
                    <div class="text-sm font-semibold" style="font-family:Poppins, ui-sans-serif">Experience</div>
                    <div class="mt-3 text-white/80 text-sm leading-relaxed" style="font-family:Poppins, ui-sans-serif, system-ui">
                      ${Array.isArray(m.experience)
                        ? `<ul class="space-y-1.5">${m.experience.map((e) => `<li class="flex gap-2"><span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/70"></span><span>${escapeHtml(e)}</span></li>`).join("")}</ul>`
                        : `<p>${escapeHtml(m.experience)}</p>`}
                    </div>
                  </div>
                `
                : ""}

              ${Array.isArray(m.extracurriculars) && m.extracurriculars.length
                ? `
                  <div class="mt-10">
                    <div class="text-sm font-semibold" style="font-family:Poppins, ui-sans-serif">Extracurriculars</div>
                    <ul class="mt-3 space-y-1.5 text-white/80 text-sm leading-relaxed" style="font-family:Poppins, ui-sans-serif, system-ui">
                      ${m.extracurriculars.map((x) => `<li class="flex gap-2"><span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/70"></span><span>${escapeHtml(x)}</span></li>`).join("")}
                    </ul>
                  </div>
                `
                : ""}
            </div>
          </div>
        </div>
      </div>
    `;

    appEl.querySelectorAll("[data-open-preview]").forEach((card) => {
      card.addEventListener("click", (e) => {
        const id = String(e.currentTarget?.getAttribute("data-open-preview") || "").trim();
        if (!id) return;
        state.projectsPage.previewingId = id;
        state.projectsPage.showEmbeddedProject = false;
        window.location.hash = "#/projects";
        render();
      });
    });
  }

  // -----------------------------
  // Learning Hub
  // -----------------------------
  function initLearningData() {
    const savedSections = localStorage.getItem("learningHubSections");
    if (savedSections) {
      try {
        state.learning.sections = JSON.parse(savedSections);
      } catch {
        state.learning.sections = {};
      }
    } else {
      state.learning.sections = {
        courses: {
          title: "Courses / Workshops",
          description: "Organize short courses or workshops on digital twins, data, and tools for your class or lab.",
          items: [
            "1-week bootcamp: Intro to Digital Twins.",
            "Studio workshop: From GIS data to 3D twin.",
            "Guest lecture series with industry partners.",
          ],
        },
        videos: {
          title: "Video lessons",
          description: "Curate or embed video explainers that walk through core ideas and example digital twin builds.",
          items: [
            '"What is a Digital Twin?" concept video.',
            "Screen-recorded tutorial building a campus energy map.",
            "Walkthrough of a full student project presentation.",
            {
              title: "PUHC website walkthrough",
              url: "./assets/Learning%20Hub/puhc%20website%20walkthrough.mp4",
            },
          ],
        },
        tutorials: {
          title: "Step-by-step tutorials",
          description: "Build guided tutorials that students can follow at their own pace, from data import to dashboards.",
          items: [
            "Importing open data into QGIS and cleaning it.",
            "Connecting a live sensor feed to a simple dashboard.",
            "Publishing a web map of a neighborhood twin.",
          ],
        },
        labs: {
          title: "Hands-on labs",
          description: "Design labs where students work with real geospatial or sensor data to prototype digital twins.",
          items: [
            "Lab: Measure and map temperatures across a campus.",
            "Lab: Build a small traffic flow simulation for one street.",
            "Lab: Compare baseline vs. retrofitted building energy.",
          ],
        },
        templates: {
          title: "Student project templates",
          description: "Provide structured templates for student projects, including goals, data sources, and evaluation.",
          items: [
            "Template: Building energy and comfort twin.",
            "Template: Public space usage and mobility twin.",
            "Template: Environmental monitoring twin for air or water.",
          ],
        },
        caseStudies: {
          title: "Case Studies",
          description: "Explore real-world applications of digital twins across different industries and domains.",
          items: [
            "Smart city implementation in Singapore",
            "Predictive maintenance in manufacturing",
            "Healthcare digital twins for patient monitoring",
          ],
        },
      };
    }

    const puhcWalkthroughItem = {
      title: "PUHC website walkthrough",
      url: "./assets/Learning%20Hub/puhc%20website%20walkthrough.mp4",
    };

    const ytLessonItem = {
      title: "Digital Twin video lesson",
      url: "https://youtu.be/BaDAIZ9jpuI",
    };

    if (!state.learning.sections || typeof state.learning.sections !== "object") {
      state.learning.sections = {};
    }

    if (!state.learning.sections.videos || typeof state.learning.sections.videos !== "object") {
      state.learning.sections.videos = {
        title: "Video lessons",
        description: "Curate or embed video explainers that walk through core ideas and example digital twin builds.",
        items: [],
      };
    }

    if (!Array.isArray(state.learning.sections.videos.items) || state.learning.sections.videos.items.length === 0) {
      state.learning.sections.videos.items = [
        '"What is a Digital Twin?" concept video.',
        "Screen-recorded tutorial building a campus energy map.",
        "Walkthrough of a full student project presentation.",
        puhcWalkthroughItem,
        ytLessonItem,
      ];
    } else {
      const hasPuhc = state.learning.sections.videos.items.some(
        (it) =>
          it &&
          typeof it === "object" &&
          (String(it.title || "").trim().toLowerCase() === "puhc website walkthrough" ||
            String(it.url || "").includes("puhc%20website%20walkthrough.mp4"))
      );
      if (!hasPuhc) state.learning.sections.videos.items.push(puhcWalkthroughItem);

      const hasYtLesson = state.learning.sections.videos.items.some(
        (it) =>
          it &&
          typeof it === "object" &&
          (String(it.url || "").includes("youtu.be/BaDAIZ9jpuI") ||
            String(it.url || "").includes("youtube.com/watch") ||
            String(it.url || "").includes("youtube.com/embed/BaDAIZ9jpuI"))
      );
      if (!hasYtLesson) state.learning.sections.videos.items.push(ytLessonItem);
    }

    const savedPathways = localStorage.getItem("learningHubPathways");
    state.learning.pathways = savedPathways
      ? JSON.parse(savedPathways)
      : {
          gis: {
            title: "GIS Basics",
            description: "Learn how maps, layers, and spatial data work so you can bring real-world geography into your twins.",
            items: ["Reading shapefiles and GeoJSON.", "Understanding coordinate systems.", "Making your first styled map of a campus."],
          },
          python: {
            title: "Python for geospatial",
            description: "Use Python libraries to clean, join, and analyze spatial datasets.",
            items: ["Intro notebook: loading and plotting spatial data.", "Joining census and boundary data for a city.", "Simple spatial queries (buffers, intersections)."],
          },
          fundamentals: {
            title: "Digital Twin fundamentals",
            description: "Connect data, models, and visualization to create twins of buildings, campuses, or cities.",
            items: ["Conceptual model: physical system → data → virtual model.", "Examples of twins at different scales (room, building, city).", "How to scope a realistic student twin project."],
          },
          ai: {
            title: "AI for environmental modeling",
            description: "Apply machine learning to forecast energy use, emissions, or environmental indicators in your twins.",
            items: ["Predicting hourly energy consumption from weather data.", "Training a simple air quality prediction model.", "Comparing baseline vs. intervention scenarios with AI."],
          },
        };

    localStorage.setItem("learningHubSections", JSON.stringify(state.learning.sections));
    localStorage.setItem("learningHubPathways", JSON.stringify(state.learning.pathways));
  }

  function renderLearningHub() {
    const sections = state.learning.sections || {};
    const currentDetail = state.learning.currentDetail;
    const projects = Array.isArray(state.projects) ? state.projects : [];

    // Clean up any previous hero scroll handler (important when navigating between routes or detail views)
    if (state.learning._heroScrollHandler) {
      const prevTarget = state.learning._heroScrollTarget || window;
      try {
        if (prevTarget === window) window.removeEventListener("scroll", state.learning._heroScrollHandler);
        else prevTarget.removeEventListener("scroll", state.learning._heroScrollHandler);
      } catch (_) {
        // no-op
      }
      state.learning._heroScrollHandler = null;
      state.learning._heroScrollTarget = null;
    }

    if (state.learning._heroScrollLoopCancel) {
      try {
        state.learning._heroScrollLoopCancel();
      } catch (_) {
        // no-op
      }
      state.learning._heroScrollLoopCancel = null;
    }

    const learningCardMeta = {
      courses: { icon: "🐍", iconBg: "bg-blue-100 text-blue-700", barBg: "bg-blue-500", progress: 45 },
      videos: { icon: "🎥", iconBg: "bg-emerald-100 text-emerald-700", barBg: "bg-emerald-500", progress: 60 },
      tutorials: { icon: "📘", iconBg: "bg-indigo-100 text-indigo-700", barBg: "bg-indigo-500", progress: 35 },
      labs: { icon: "🧪", iconBg: "bg-amber-100 text-amber-700", barBg: "bg-amber-500", progress: 25 },
      templates: { icon: "🧩", iconBg: "bg-purple-100 text-purple-700", barBg: "bg-purple-500", progress: 50 },
      caseStudies: { icon: "📊", iconBg: "bg-slate-100 text-slate-700", barBg: "bg-slate-800", progress: 80 },
    };

    const learningPathKeys = ["caseStudies", "tutorials", "videos", "courses", "labs"];
    const learningPath = learningPathKeys.map((k) => ({
      key: k,
      title: (sections && sections[k] && sections[k].title) ? String(sections[k].title) : k,
    }));

    const caseStudyProjects = projects
      .filter((p) => p && p.caseStudyUrl)
      .map((p) => ({
        id: p.id,
        title: p.title,
        category: p.category,
        owner: p.owner,
        description: p.description || p.goal,
        image: p.image,
        caseStudyUrl: p.caseStudyUrl,
      }));

    const renderProjectCaseStudyCard = (p, idx) => {
      const title = escapeHtml(p?.title || "Untitled");
      const meta = [p?.category, p?.owner].filter(Boolean).map((x) => escapeHtml(x)).join(" • ");
      const img = p && p.image ? String(p.image).replace(/^\//, "") : "";
      const reverseClass = Number.isFinite(idx) && idx % 2 === 1 ? "md:flex-row-reverse" : "";
      const shapeClasses = [
        "rounded-[2.75rem]",
        "rounded-tl-[3.25rem] rounded-br-[3.25rem] rounded-tr-2xl rounded-bl-2xl",
        "rounded-tr-[3.25rem] rounded-bl-[3.25rem] rounded-tl-2xl rounded-br-2xl",
        "rounded-[1.75rem]",
      ];
      const shapeClass = shapeClasses[(Number.isFinite(idx) ? idx : 0) % shapeClasses.length];

      const rawDesc = p && p.description ? String(p.description) : "";
      const descLine = rawDesc
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean)[0] || "";
      const shortDesc = descLine.length > 140 ? `${descLine.slice(0, 137)}...` : descLine;

      const rawUrl = p && p.caseStudyUrl ? String(p.caseStudyUrl) : "";
      let embedUrl = "";
      const deckMatch = rawUrl.match(/docs\.google\.com\/presentation\/d\/([^/]+)/i);
      if (deckMatch && deckMatch[1]) {
        let slideFragment = "";
        const hashIdx = rawUrl.indexOf("#");
        if (hashIdx >= 0) {
          slideFragment = rawUrl.slice(hashIdx);
        } else {
          const slideQueryMatch = rawUrl.match(/[?&](slide=[^&#]+)/i);
          if (slideQueryMatch && slideQueryMatch[1]) slideFragment = `#${slideQueryMatch[1]}`;
        }

        embedUrl = `https://docs.google.com/presentation/d/${deckMatch[1]}/embed?start=false&loop=false&delayms=3000${slideFragment}`;
      }

      return `
        <div class="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
          <div class="flex flex-col md:flex-row ${reverseClass}">
            <div class="md:w-1/2">
              <div class="p-5 sm:p-8">
                <div class="aspect-[16/10] bg-black/20 overflow-hidden ${shapeClass}">
                  ${img ? `<img src="${escapeHtml(img)}" alt="${title}" class="w-full h-full object-cover" />` : ""}
                </div>
              </div>
            </div>

            <div class="md:w-1/2 flex flex-col justify-center p-5 sm:p-8">
              <h3 class="text-black text-3xl sm:text-4xl font-semibold leading-tight" style="font-family:Poppins, ui-sans-serif, system-ui">
                ${title}
              </h3>
              ${shortDesc ? `<p class="mt-4 text-black/80 text-sm sm:text-base leading-relaxed" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">${escapeHtml(shortDesc)}</p>` : ""}
              ${meta ? `<div class="mt-3 text-black/60 text-sm" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">${meta}</div>` : ""}

              <div class="mt-8 flex items-center gap-3">
                ${rawUrl ? `
                  <a href="${escapeHtml(rawUrl)}" target="_blank" rel="noreferrer"
                    class="inline-flex items-center justify-center rounded-full bg-white/95 text-black px-6 py-3 text-sm font-semibold hover:bg-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-[0.98] outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                    style="font-family:Poppins, ui-sans-serif">
                    Open
                  </a>
                ` : ""}
              </div>

              ${embedUrl ? `
                <div class="mt-8 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <div class="aspect-[16/9]">
                    <iframe
                      title="${title} case study preview"
                      src="${escapeHtml(embedUrl)}"
                      class="w-full h-full"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              ` : ""}
            </div>
          </div>
        </div>
      `;
    };

    const renderLearningDetailPage = (detail) => {
      const key = String(detail?.key || "");
      const s = sections[key] || {};
      const title = detail?.title || s?.title || "Untitled";
      const description = detail?.description || s?.description || "";
      const items = Array.isArray(detail?.items) ? detail.items : Array.isArray(s?.items) ? s.items : [];

      const videoItems = key === "videos" ? items.filter((it) => it && typeof it === "object" && it.url && it.title) : [];
      const textItems = key === "videos" ? items.filter((it) => typeof it === "string") : items;

      const selectedVideoUrlRaw = key === "videos" ? String(state.learning.selectedVideoUrl || "") : "";
      const selectedVideo =
        key === "videos"
          ? (videoItems.find((v) => String(v.url || "") === selectedVideoUrlRaw) || videoItems[0] || null)
          : null;

      const getYoutubeEmbedUrl = (rawUrl) => {
        const u = String(rawUrl || "").trim();
        if (!u) return "";
        const lower = u.toLowerCase();
        const isYt = lower.includes("youtube.com") || lower.includes("youtu.be");
        if (!isYt) return "";

        let id = "";
        try {
          if (lower.includes("youtu.be/")) {
            id = u.split("youtu.be/")[1]?.split(/[?&#]/)[0] || "";
          } else if (lower.includes("youtube.com/embed/")) {
            id = u.split("youtube.com/embed/")[1]?.split(/[?&#]/)[0] || "";
          } else {
            const parsed = new URL(u);
            id = parsed.searchParams.get("v") || "";
          }
        } catch (_) {
          id = "";
        }

        if (!id) return "";
        return `https://www.youtube.com/embed/${encodeURIComponent(id)}?rel=0`;
      };

      const getYoutubeThumbUrl = (rawUrl) => {
        const u = String(rawUrl || "").trim();
        if (!u) return "";
        const lower = u.toLowerCase();
        const isYt = lower.includes("youtube.com") || lower.includes("youtu.be");
        if (!isYt) return "";

        let id = "";
        try {
          if (lower.includes("youtu.be/")) {
            id = u.split("youtu.be/")[1]?.split(/[?&#]/)[0] || "";
          } else if (lower.includes("youtube.com/embed/")) {
            id = u.split("youtube.com/embed/")[1]?.split(/[?&#]/)[0] || "";
          } else {
            const parsed = new URL(u);
            id = parsed.searchParams.get("v") || "";
          }
        } catch (_) {
          id = "";
        }

        if (!id) return "";
        return `https://img.youtube.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;
      };

      const getYoutubeWatchUrl = (rawUrl) => {
        const u = String(rawUrl || "").trim();
        if (!u) return "";
        const lower = u.toLowerCase();
        const isYt = lower.includes("youtube.com") || lower.includes("youtu.be");
        if (!isYt) return "";

        let id = "";
        try {
          if (lower.includes("youtu.be/")) {
            id = u.split("youtu.be/")[1]?.split(/[?&#]/)[0] || "";
          } else if (lower.includes("youtube.com/embed/")) {
            id = u.split("youtube.com/embed/")[1]?.split(/[?&#]/)[0] || "";
          } else {
            const parsed = new URL(u);
            id = parsed.searchParams.get("v") || "";
          }
        } catch (_) {
          id = "";
        }

        if (!id) return "";
        return `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;
      };

      const getLearningVideoComments = (videoUrl) => {
        const storageKey = "learningHubVideoComments";
        let store = {};
        try {
          store = JSON.parse(localStorage.getItem(storageKey) || "{}");
        } catch {
          store = {};
        }
        const list = store && typeof store === "object" ? store[videoUrl] : null;
        return Array.isArray(list) ? list : [];
      };

      const renderLearningComments = (videoUrl) => {
        const url = String(videoUrl || "");
        if (!url) return "";
        const comments = getLearningVideoComments(url);
        const safeUrl = escapeHtml(url);
        const itemsHtml = comments
          .slice()
          .sort((a, b) => Number(b?.ts || 0) - Number(a?.ts || 0))
          .map((c) => {
            const txt = escapeHtml(String(c?.text || "").trim());
            if (!txt) return "";
            const d = new Date(Number(c?.ts || 0) || Date.now());
            const stamp = escapeHtml(d.toLocaleString());
            return `<div class="rounded-2xl border border-black/10 bg-white/70 p-3">
              <div class="text-sm text-gray-900" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">${txt}</div>
              <div class="mt-1 text-[11px] text-black/50" style="font-family:Poppins, ui-sans-serif">${stamp}</div>
            </div>`;
          })
          .filter(Boolean)
          .join("");

        return `
          <div class="mt-6">
            <div class="text-sm font-semibold text-gray-900" style="font-family:Poppins, ui-sans-serif">Comments</div>
            <div class="mt-2 rounded-3xl border border-black/10 bg-white/80 shadow-sm overflow-hidden">
              <div class="p-4">
                <div class="flex flex-col gap-3">
                  <textarea data-learning-video-comment-input="${safeUrl}" rows="3" class="w-full resize-none rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Add a comment..." style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"></textarea>
                  <div class="flex items-center justify-end">
                    <button type="button" data-learning-video-comment-submit="${safeUrl}" class="rounded-full bg-emerald-600 text-white px-4 py-2 text-xs hover:bg-emerald-700" style="font-family:Poppins, ui-sans-serif">Post comment</button>
                  </div>
                </div>
                <div data-learning-video-comments-list="${safeUrl}" class="mt-4 space-y-3">
                  ${itemsHtml || `<div class="text-sm text-black/50" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">No comments yet.</div>`}
                </div>
              </div>
            </div>
          </div>
        `;
      };

      const renderLearningItem = (it) => {
        if (!it) return "";
        if (typeof it === "string") return `<li>${escapeHtml(it)}</li>`;
        if (typeof it === "object" && it.url && it.title) {
          const url = String(it.url);
          const label = String(it.title);
          return `
            <li>
              <a href="${escapeHtml(url)}" target="_blank" rel="noreferrer" class="underline underline-offset-4">
                ${escapeHtml(label)}
              </a>
            </li>
          `;
        }
        return `<li>${escapeHtml(String(it))}</li>`;
      };

      return `
        <div class="space-y-6 relative p-6">
          <div class="pointer-events-none absolute inset-x-0 -top-10 bottom-0 -z-10 opacity-50">
            <div class="h-full w-full bg-gradient-to-br from-sky-200/40 via-emerald-200/40 to-purple-200/40 blur-3xl animate-pulse"></div>
          </div>

          <div class="flex items-center justify-between gap-4">
            <button id="learningBackBtn" class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm hover:bg-white"
              style="font-family:Poppins, ui-sans-serif">
              Back
            </button>
            <div class="flex-1"></div>
          </div>

          <div>
            <h1 class="text-3xl font-bold text-gray-900" style="font-family:Poppins, ui-sans-serif, system-ui">${escapeHtml(title)}</h1>
            ${description ? `<p class="mt-3 text-gray-700 text-sm" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">${escapeHtml(description)}</p>` : ""}
          </div>

          ${
            key === "caseStudies"
              ? `
                <section class="space-y-4">
                  <h2 class="text-2xl font-semibold text-gray-900" style="font-family:Poppins, ui-sans-serif, system-ui">Project Case Studies</h2>
                  <div class="space-y-10">
                    ${caseStudyProjects.map((p, idx) => renderProjectCaseStudyCard(p, idx)).join("")}
                  </div>
                </section>
              `
              : ""
          }

          ${
            items.length
              ? `
                <section class="space-y-3">
                  <h2 class="text-2xl font-semibold text-gray-900" style="font-family:Poppins, ui-sans-serif, system-ui">Overview</h2>

                  ${
                    key === "videos" && videoItems.length
                      ? `
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div class="md:col-span-1 space-y-3">
                            <div class="text-sm font-semibold text-gray-900" style="font-family:Poppins, ui-sans-serif">Playlist</div>
                            <div class="space-y-2">
                              ${videoItems
                                .map((v) => {
                                  const vTitle = escapeHtml(String(v.title || "Video"));
                                  const vUrl = escapeHtml(String(v.url || ""));
                                  const isActive = selectedVideo && String(v.url || "") === String(selectedVideo.url || "");
                                  const rawUrl = String(v.url || "");
                                  const thumbUrl = getYoutubeThumbUrl(rawUrl);
                                  return `
                                    <button type="button" data-learning-video-select="${vUrl}" class="w-full text-left rounded-2xl border ${isActive ? "border-emerald-600" : "border-black/10"} bg-white/80 hover:bg-white px-3 py-2 shadow-sm transition-colors">
                                      <div class="flex items-center gap-3">
                                        <div class="shrink-0 h-16 w-28 rounded-2xl bg-black border border-black/10 overflow-hidden">
                                          ${thumbUrl
                                            ? `<img src="${escapeHtml(thumbUrl)}" alt="${vTitle}" class="w-full h-full object-cover" loading="lazy" />`
                                            : `<video class="w-full h-full object-cover" muted playsinline preload="metadata" src="${vUrl}"></video>`}
                                        </div>
                                        <div class="min-w-0 flex-1">
                                          <div class="text-sm font-semibold text-gray-900 truncate" style="font-family:Poppins, ui-sans-serif">${vTitle}</div>
                                          <div class="mt-0.5 flex items-center justify-between gap-2">
                                            <div data-learning-video-label="${vUrl}" class="text-xs text-black/60" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">Not started</div>
                                            <div class="shrink-0 flex items-center gap-2">
                                              <span data-learning-video-watched-badge="${vUrl}" class="hidden rounded-full bg-emerald-600 px-2 py-0.5 text-[11px] font-semibold text-white" style="font-family:Poppins, ui-sans-serif">Watched</span>
                                              <span class="text-[11px] ${isActive ? "text-emerald-700" : "text-black/50"}" style="font-family:Poppins, ui-sans-serif">${isActive ? "Playing" : "Play"}</span>
                                            </div>
                                          </div>
                                          <div class="mt-2 h-2 w-full rounded-full bg-black/10 overflow-hidden">
                                            <div data-learning-video-progress="${vUrl}" class="h-full bg-emerald-600" style="width:0%"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                  `;
                                })
                                .join("")}
                            </div>
                          </div>

                          <div class="md:col-span-2 rounded-3xl overflow-hidden border border-black/10 bg-white/80 shadow-sm">
                            <div class="p-5">
                              <div class="flex items-start justify-between gap-3">
                                <div class="text-lg font-semibold text-gray-900" style="font-family:Poppins, ui-sans-serif">${escapeHtml(String(selectedVideo?.title || "Video"))}</div>
                                ${(() => {
                                  const vUrl = String(selectedVideo?.url || "");
                                  const ytWatch = getYoutubeWatchUrl(vUrl);
                                  if (!ytWatch) return "";
                                  return `<a class="shrink-0 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs text-gray-900 hover:bg-white" style="font-family:Poppins, ui-sans-serif" href="${escapeHtml(ytWatch)}" target="_blank" rel="noreferrer">Open on YouTube</a>`;
                                })()}
                              </div>
                            </div>
                            <div class="px-5 pb-6">
                              <div class="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black">
                                ${(() => {
                                  const vUrl = String(selectedVideo?.url || "");
                                  const yt = getYoutubeEmbedUrl(vUrl);
                                  if (yt) {
                                    return `<iframe class="w-full h-full" src="${escapeHtml(yt)}" title="${escapeHtml(String(selectedVideo?.title || "Video"))}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
                                  }
                                  return `<video data-learning-video="1" data-learning-video-url="${escapeHtml(vUrl)}" controls playsinline preload="metadata" class="w-full h-full" src="${escapeHtml(vUrl)}"></video>`;
                                })()}
                              </div>

                              <div class="mt-4">
                                <div class="h-2 w-full rounded-full bg-black/10 overflow-hidden">
                                  <div data-learning-video-progress="${escapeHtml(String(selectedVideo?.url || ""))}" class="h-full bg-emerald-600" style="width:0%"></div>
                                </div>
                                <div class="mt-3 flex items-center justify-between gap-3">
                                  <div data-learning-video-label="${escapeHtml(String(selectedVideo?.url || ""))}" class="text-xs text-black/60" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">Not started</div>
                                  <div class="flex items-center gap-2">
                                    <button type="button" data-learning-video-resume="${escapeHtml(String(selectedVideo?.url || ""))}" class="rounded-full bg-black text-white px-3 py-1.5 text-xs hover:bg-black/90" style="font-family:Poppins, ui-sans-serif">
                                      Resume
                                    </button>
                                    <button type="button" data-learning-video-watched="${escapeHtml(String(selectedVideo?.url || ""))}" class="rounded-full border border-black/20 bg-white/70 px-3 py-1.5 text-xs text-black hover:bg-white" style="font-family:Poppins, ui-sans-serif">
                                      Mark watched
                                    </button>
                                  </div>
                                </div>
                              </div>

                              ${renderLearningComments(String(selectedVideo?.url || ""))}
                            </div>
                          </div>
                        </div>
                      `
                      : ""
                  }

                  ${
                    textItems.length
                      ? `
                        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
                          ${textItems.map((it) => renderLearningItem(it)).join("")}
                        </ul>
                      `
                      : ""
                  }
                </section>
              `
              : ""
          }
        </div>
      `;
    };

    appEl.innerHTML = currentDetail
      ? renderLearningDetailPage(currentDetail)
      : `
        <div class="space-y-10 relative">
          <div class="pointer-events-none fixed inset-0 -z-10">
            <div class="absolute inset-0 bg-center bg-cover" style="background-image:url('./assets/Learning%20Hub/learning-hub-hero.jpg');"></div>
            <div class="absolute inset-0 bg-black/55"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/80"></div>
          </div>

          <section class="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen min-h-[100vh] overflow-hidden">
            <div class="relative h-full flex items-center">
              <div class="max-w-7xl mx-auto w-full px-6 py-20">
                <div class="max-w-4xl mx-auto flex flex-col items-center text-center">
                  <h1 class="text-4xl sm:text-5xl md:text-6xl font-semibold text-white" style="font-family:Poppins, ui-sans-serif, system-ui">
                    Learning Hub
                  </h1>
                  <div class="mt-10">
                    <button type="button" data-scroll-to="learning-cards" class="inline-flex items-center rounded-full bg-white/10 hover:bg-white/15 border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 active:translate-y-0 active:scale-[0.98] outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0" style="font-family:Poppins, ui-sans-serif">
                      Explore
                    </button>
                  </div>
                  <p id="learningHeroSentence" class="mt-12 max-w-4xl text-white/95 text-2xl sm:text-3xl md:text-4xl leading-snug text-center mx-auto origin-center" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; transform: scale(1); will-change: transform; transition: transform 120ms linear;">
                    Learning Hub — your space to explore resources, gain new skills, and grow your knowledge.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div id="learning-path" class="space-y-6 relative p-4 sm:p-6">
            <section class="text-white scroll-reveal">
              <div class="px-1 py-2 sm:px-1 sm:py-2">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <h2 class="text-xl sm:text-2xl font-semibold" style="font-family:Poppins, ui-sans-serif, system-ui">Learning Path</h2>
                  <p class="mt-2 text-white/70 text-sm" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
                    Explore sections in a suggested flow. Use the cards below to open any section.
                  </p>
                </div>
              </div>

              <div class="mt-6">
                <div class="relative h-[120px] sm:h-[140px]">
                    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 900 140" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id="learningWave" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0" stop-color="#f59e0b" />
                          <stop offset="0.5" stop-color="#eab308" />
                          <stop offset="1" stop-color="#f97316" />
                        </linearGradient>
                      </defs>
                      <path id="learningWavePathBase" d="M0,70 C110,10 210,10 320,70 C430,130 540,130 650,70 C760,10 840,10 900,70" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3" />
                      <path id="learningWavePath" d="M0,70 C110,10 210,10 320,70 C430,130 540,130 650,70 C760,10 840,10 900,70" fill="none" stroke="url(#learningWave)" stroke-width="4" stroke-linecap="round" />

                      <g id="learningWaveDots">
                        <circle data-wave-dot="0.10" r="7" fill="#fb923c" stroke="rgba(255,255,255,0.18)" stroke-width="6">
                          <animate attributeName="r" values="7;9;7" dur="2.8s" repeatCount="indefinite" begin="0s" />
                        </circle>
                        <circle data-wave-dot="0.30" r="7" fill="#fde047" stroke="rgba(255,255,255,0.18)" stroke-width="6">
                          <animate attributeName="r" values="7;9;7" dur="2.8s" repeatCount="indefinite" begin="0.2s" />
                        </circle>
                        <circle data-wave-dot="0.52" r="7" fill="#fdba74" stroke="rgba(255,255,255,0.18)" stroke-width="6">
                          <animate attributeName="r" values="7;9;7" dur="2.8s" repeatCount="indefinite" begin="0.4s" />
                        </circle>
                        <circle data-wave-dot="0.74" r="7" fill="#fde047" stroke="rgba(255,255,255,0.18)" stroke-width="6">
                          <animate attributeName="r" values="7;9;7" dur="2.8s" repeatCount="indefinite" begin="0.6s" />
                        </circle>
                        <circle data-wave-dot="0.92" r="7" fill="rgba(255,255,255,0.9)" stroke="rgba(255,255,255,0.18)" stroke-width="6">
                          <animate attributeName="r" values="7;9;7" dur="2.8s" repeatCount="indefinite" begin="0.8s" />
                        </circle>
                      </g>
                    </svg>

                    <button type="button" data-learning-wave="${escapeHtml(learningPath[0]?.key || "caseStudies")}" class="absolute left-[10%] top-[1px] -translate-x-1/2 px-4 sm:px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs sm:text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" style="font-family:Poppins, ui-sans-serif">
                      ${escapeHtml(learningPath[0]?.title || "")}
                    </button>
                    <button type="button" data-learning-wave="${escapeHtml(learningPath[1]?.key || "tutorials")}" class="absolute left-[30%] top-[62px] -translate-x-1/2 px-4 sm:px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs sm:text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" style="font-family:Poppins, ui-sans-serif">
                      ${escapeHtml(learningPath[1]?.title || "")}
                    </button>
                    <button type="button" data-learning-wave="${escapeHtml(learningPath[2]?.key || "videos")}" class="absolute left-[52%] top-[89px] -translate-x-1/2 px-4 sm:px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs sm:text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" style="font-family:Poppins, ui-sans-serif">
                      ${escapeHtml(learningPath[2]?.title || "")}
                    </button>
                    <button type="button" data-learning-wave="${escapeHtml(learningPath[3]?.key || "courses")}" class="absolute left-[75%] top-[66px] -translate-x-1/2 px-4 sm:px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs sm:text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" style="font-family:Poppins, ui-sans-serif">
                      ${escapeHtml(learningPath[3]?.title || "")}
                    </button>
                    <button type="button" data-learning-wave="${escapeHtml(learningPath[4]?.key || "labs")}" class="absolute left-[95%] top-[-25px] -translate-x-1/2 px-4 sm:px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs sm:text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" style="font-family:Poppins, ui-sans-serif">
                      ${escapeHtml(learningPath[4]?.title || "")}
                    </button>

                </div>
              </div>
            </div>
          </section>

          <section id="learning-cards" class="space-y-4 scroll-reveal">
            <h2 class="text-2xl font-semibold text-white" style="font-family:Poppins, ui-sans-serif, system-ui">Browse Learning Materials</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${(() => {
                const baseOrder = ["caseStudies", "videos", "tutorials", "labs", "templates", "courses"];
                const orderedKeys = [
                  ...baseOrder.filter((k) => sections && sections[k]),
                  ...Object.keys(sections || {}).filter((k) => !baseOrder.includes(k)),
                ];

                return orderedKeys
                .map((key) => {
                  const s = sections[key];
                  const meta = learningCardMeta[key] || { icon: "📚", iconBg: "bg-slate-100 text-slate-700", barBg: "bg-slate-800", progress: 40 };
                  const progress = Number.isFinite(meta.progress) ? Math.max(0, Math.min(100, meta.progress)) : 0;
                  return `
                    <div data-open-learning="${escapeHtml(key)}"
                      class="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6 space-y-4 relative group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-shadow">
                      <div>
                        <h2 class="text-xl font-semibold text-white" style="font-family:Poppins, ui-sans-serif, system-ui">
                          ${escapeHtml(s.title)}
                        </h2>
                        <p class="mt-2 text-white/70 text-sm" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
                          ${escapeHtml(s.description)}
                        </p>
                      </div>

                      <div class="space-y-3">
                        <div class="bg-white/10 h-2 rounded-full overflow-hidden">
                          <div class="h-full ${meta.barBg}" style="width:${progress}%;"></div>
                        </div>
                        <button type="button" data-open-learning-btn="${escapeHtml(key)}" class="w-full rounded-lg border border-white/15 bg-white/10 text-white px-4 py-2 text-sm font-semibold hover:bg-white/15 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/25 active:translate-y-0 active:scale-[0.98] outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                          style="font-family:Poppins, ui-sans-serif">
                          Open
                        </button>
                      </div>
                    </div>
                  `;
                })
                .join("");
              })()}
            </div>
          </section>
          </div>
        </div>
      `;

    if (!currentDetail) {
      const revealTargets = Array.from(appEl.querySelectorAll(".scroll-reveal"));

      if (state.learning._revealObserver) {
        try {
          state.learning._revealObserver.disconnect();
        } catch (_) {
          // ignore
        }
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            } else {
              entry.target.classList.remove("is-visible");
            }
          });
        },
        { threshold: 0.15 }
      );

      revealTargets.forEach((el) => observer.observe(el));
      state.learning._revealObserver = observer;

      appEl.querySelectorAll("[data-scroll-to]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-scroll-to");
          if (!id) return;
          const target = document.getElementById(id);
          if (!target) return;
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });

      // Scroll-driven hero sentence scale (re-initialized on each visit)
      const sentenceEl = document.getElementById("learningHeroSentence");
      if (sentenceEl) {
        let rafId = 0;

        const getScrollTarget = () => {
          const candidates = [
            document.scrollingElement,
            document.documentElement,
            document.body,
            document.querySelector("main"),
            appEl,
          ].filter(Boolean);

          for (const el of candidates) {
            try {
              if ((el.scrollHeight || 0) > (el.clientHeight || 0) + 2) return el;
            } catch (_) {
              // no-op
            }
          }
          return window;
        };

        const scrollTarget = getScrollTarget();

        const anchorEl = document.getElementById("learning-path") || sentenceEl;
        let anchorStartTop = 0;
        try {
          anchorStartTop = anchorEl.getBoundingClientRect().top;
        } catch (_) {
          anchorStartTop = 0;
        }

        const readScrollY = () => {
          try {
            const winY = Math.max(0, window.scrollY || window.pageYOffset || 0);
            if (winY) return winY;
          } catch (_) {
            // no-op
          }

          try {
            const se = document.scrollingElement;
            const seY = se ? Math.max(0, se.scrollTop || 0) : 0;
            if (seY) return seY;
          } catch (_) {
            // no-op
          }

          try {
            const mainEl = document.querySelector("main");
            const mainY = mainEl ? Math.max(0, mainEl.scrollTop || 0) : 0;
            if (mainY) return mainY;
          } catch (_) {
            // no-op
          }

          try {
            const appY = appEl ? Math.max(0, appEl.scrollTop || 0) : 0;
            if (appY) return appY;
          } catch (_) {
            // no-op
          }

          try {
            if (scrollTarget && scrollTarget !== window) return Math.max(0, scrollTarget.scrollTop || 0);
          } catch (_) {
            // no-op
          }

          return 0;
        };

        const readScrollYFromLayout = () => {
          try {
            const top = anchorEl.getBoundingClientRect().top;
            return Math.max(0, anchorStartTop - top);
          } catch {
            return 0;
          }
        };

        const update = () => {
          rafId = 0;
          const viewportH = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 1);
          let y = readScrollY();
          if (!y) y = readScrollYFromLayout();
          const progress = Math.max(0, Math.min(1, y / (viewportH * 1.1)));
          const scale = 1 + progress * 0.65;
          sentenceEl.style.transform = `scale(${scale.toFixed(3)})`;
        };

        const onScroll = () => {
          if (rafId) return;
          rafId = requestAnimationFrame(update);
        };

        state.learning._heroScrollHandler = onScroll;
        state.learning._heroScrollTarget = scrollTarget;
        try {
          if (scrollTarget === window) window.addEventListener("scroll", onScroll, { passive: true });
          else scrollTarget.addEventListener("scroll", onScroll, { passive: true });
        } catch (_) {
          window.addEventListener("scroll", onScroll, { passive: true });
          state.learning._heroScrollTarget = window;
        }

        let loopRaf = 0;
        const loop = () => {
          loopRaf = requestAnimationFrame(loop);
          update();
        };
        loopRaf = requestAnimationFrame(loop);
        state.learning._heroScrollLoopCancel = () => {
          if (loopRaf) cancelAnimationFrame(loopRaf);
          loopRaf = 0;
        };
      }
    }

    const positionWaveDots = () => {
      const path = appEl.querySelector("#learningWavePath");
      if (!path || typeof path.getTotalLength !== "function") return;
      const svg = path.ownerSVGElement;
      if (!svg) return;

      const total = path.getTotalLength();
      svg.querySelectorAll("circle[data-wave-dot]").forEach((c) => {
        const t = Number(c.getAttribute("data-wave-dot"));
        const clamped = Number.isFinite(t) ? Math.max(0, Math.min(1, t)) : 0;
        const pt = path.getPointAtLength(total * clamped);
        c.setAttribute("cx", String(pt.x));
        c.setAttribute("cy", String(pt.y));
      });
    };

    document.querySelectorAll("[data-open-learning]").forEach((el) => {
      el.addEventListener("click", () => {
        const key = el.getAttribute("data-open-learning");
        const s = state.learning.sections[key];
        state.learning.currentDetail = {
          key,
          title: s?.title || "Untitled",
          description: s?.description || "",
          items: Array.isArray(s?.items) ? s.items : [],
        };
        render();
      });
    });

    document.querySelectorAll("[data-open-learning-btn]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const key = btn.getAttribute("data-open-learning-btn");
        const s = state.learning.sections[key];
        state.learning.currentDetail = {
          key,
          title: s?.title || "Untitled",
          description: s?.description || "",
          items: Array.isArray(s?.items) ? s.items : [],
        };
        render();
      });
    });

    document.querySelectorAll("[data-learning-wave]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-learning-wave");
        const s = state.learning.sections[key];
        if (!s) return;
        state.learning.currentDetail = {
          key,
          title: s?.title || "Untitled",
          description: s?.description || "",
          items: Array.isArray(s?.items) ? s.items : [],
        };
        render();
      });
    });

    if (!currentDetail) {
      positionWaveDots();
      if (!state.learning._waveResizeBound) {
        state.learning._waveResizeBound = true;
        window.addEventListener("resize", () => {
          if (parseRoute().name !== "learning") return;
          positionWaveDots();
        });
      }
    }

    const updateLearningVideoUi = (videoUrl, progress) => {
      try {
        const progressEl = appEl.querySelector(`[data-learning-video-progress="${CSS.escape(videoUrl)}"]`);
        const labelEl = appEl.querySelector(`[data-learning-video-label="${CSS.escape(videoUrl)}"]`);
        const watchedBtn = appEl.querySelector(`[data-learning-video-watched="${CSS.escape(videoUrl)}"]`);
        const watchedBadgeEl = appEl.querySelector(`[data-learning-video-watched-badge="${CSS.escape(videoUrl)}"]`);

        const duration = Number(progress?.duration || 0);
        const currentTime = Number(progress?.currentTime || 0);
        const watched = !!progress?.watched;

        const pct = duration > 0 ? Math.max(0, Math.min(100, (currentTime / duration) * 100)) : 0;
        if (progressEl) progressEl.style.width = `${pct}%`;

        if (labelEl) {
          if (watched) labelEl.textContent = "Watched";
          else if (currentTime > 0 && duration > 0) labelEl.textContent = `Resume at ${Math.floor(currentTime / 60)}m ${Math.floor(currentTime % 60)}s`;
          else labelEl.textContent = "Not started";
        }

        if (watchedBtn) {
          watchedBtn.textContent = watched ? "Watched" : "Mark watched";
          watchedBtn.classList.toggle("bg-emerald-600", watched);
          watchedBtn.classList.toggle("text-white", watched);
          watchedBtn.classList.toggle("border-emerald-600", watched);
          watchedBtn.classList.toggle("bg-white/70", !watched);
          watchedBtn.classList.toggle("text-black", !watched);
          watchedBtn.classList.toggle("border-black/20", !watched);
        }

        if (watchedBadgeEl) {
          watchedBadgeEl.textContent = watched ? "Watched" : "";
          watchedBadgeEl.classList.toggle("hidden", !watched);
        }
      } catch (_) {
        // no-op
      }
    };

    const wireLearningVideosProgress = () => {
      if (!currentDetail || currentDetail.key !== "videos") return;

      const storageKey = "learningHubVideoProgress";
      let store = {};
      try {
        store = JSON.parse(localStorage.getItem(storageKey) || "{}");
      } catch {
        store = {};
      }

      const saveStore = () => {
        try {
          localStorage.setItem(storageKey, JSON.stringify(store));
        } catch (_) {
          // no-op
        }
      };

      appEl.querySelectorAll("video[data-learning-video='1']").forEach((videoEl) => {
        try {
          const url = String(videoEl.getAttribute("data-learning-video-url") || videoEl.currentSrc || videoEl.src || "");
          if (!url) return;

          if (!store[url] || typeof store[url] !== "object") store[url] = { currentTime: 0, duration: 0, watched: false };

          const stored = store[url];
          updateLearningVideoUi(url, stored);

          if (videoEl.dataset.progressWired === "1") return;
          videoEl.dataset.progressWired = "1";

          videoEl.addEventListener("loadedmetadata", () => {
            try {
              const dur = Number(videoEl.duration || 0);
              if (Number.isFinite(dur) && dur > 0) {
                store[url].duration = dur;
                updateLearningVideoUi(url, store[url]);
                saveStore();
              }

              const t = Number(store[url].currentTime || 0);
              if (Number.isFinite(t) && t > 0 && dur > 0) {
                videoEl.currentTime = Math.max(0, Math.min(dur - 0.25, t));
              }
            } catch (_) {
              // no-op
            }
          });

          let lastSavedAt = 0;
          videoEl.addEventListener("timeupdate", () => {
            try {
              const now = Date.now();
              if (now - lastSavedAt < 1000) return;
              lastSavedAt = now;

              const dur = Number(videoEl.duration || 0);
              const t = Number(videoEl.currentTime || 0);
              if (!Number.isFinite(t) || t < 0) return;

              store[url].currentTime = t;
              if (Number.isFinite(dur) && dur > 0) store[url].duration = dur;

              if (Number.isFinite(dur) && dur > 0 && t / dur >= 0.98) {
                store[url].watched = true;
              }

              updateLearningVideoUi(url, store[url]);
              saveStore();
            } catch (_) {
              // no-op
            }
          });

          videoEl.addEventListener("ended", () => {
            try {
              store[url].watched = true;
              updateLearningVideoUi(url, store[url]);
              saveStore();
            } catch (_) {
              // no-op
            }
          });
        } catch (_) {
          // no-op
        }
      });

      appEl.querySelectorAll("[data-learning-video-resume]").forEach((btn) => {
        if (String(btn?.tagName || "").toUpperCase() !== "BUTTON") return;
        btn.addEventListener("click", () => {
          const url = String(btn.getAttribute("data-learning-video-resume") || "");
          if (!url) return;
          const videoEl = appEl.querySelector(`video[data-learning-video-url="${CSS.escape(url)}"]`);
          if (!videoEl) return;
          try {
            const dur = Number(videoEl.duration || 0);
            const t = Number(store?.[url]?.currentTime || 0);
            if (Number.isFinite(dur) && dur > 0 && Number.isFinite(t) && t > 0) {
              videoEl.currentTime = Math.max(0, Math.min(dur - 0.25, t));
            }
            videoEl.play?.();
          } catch (_) {
            // no-op
          }
        });
      });

      appEl.querySelectorAll("[data-learning-video-watched]").forEach((btn) => {
        if (String(btn?.tagName || "").toUpperCase() !== "BUTTON") return;
        btn.addEventListener("click", () => {
          const url = String(btn.getAttribute("data-learning-video-watched") || "");
          if (!url) return;
          if (!store[url] || typeof store[url] !== "object") store[url] = { currentTime: 0, duration: 0, watched: false };
          store[url].watched = !store[url].watched;
          updateLearningVideoUi(url, store[url]);
          saveStore();
        });
      });
    };

    const wireLearningVideoComments = () => {
      if (!currentDetail || currentDetail.key !== "videos") return;

      const storageKey = "learningHubVideoComments";
      let store = {};
      try {
        store = JSON.parse(localStorage.getItem(storageKey) || "{}");
      } catch {
        store = {};
      }

      const saveStore = () => {
        try {
          localStorage.setItem(storageKey, JSON.stringify(store));
        } catch (_) {
          // no-op
        }
      };

      const renderListHtml = (videoUrl) => {
        const url = String(videoUrl || "");
        const list = store && typeof store === "object" ? store[url] : null;
        const comments = Array.isArray(list) ? list : [];
        const itemsHtml = comments
          .slice()
          .sort((a, b) => Number(b?.ts || 0) - Number(a?.ts || 0))
          .map((c) => {
            const txt = escapeHtml(String(c?.text || "").trim());
            if (!txt) return "";
            const d = new Date(Number(c?.ts || 0) || Date.now());
            const stamp = escapeHtml(d.toLocaleString());
            return `<div class="rounded-2xl border border-black/10 bg-white/70 p-3">
              <div class="text-sm text-gray-900" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">${txt}</div>
              <div class="mt-1 text-[11px] text-black/50" style="font-family:Poppins, ui-sans-serif">${stamp}</div>
            </div>`;
          })
          .filter(Boolean)
          .join("");

        return itemsHtml || `<div class="text-sm text-black/50" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">No comments yet.</div>`;
      };

      appEl.querySelectorAll("[data-learning-video-comment-submit]").forEach((btn) => {
        if (String(btn?.tagName || "").toUpperCase() !== "BUTTON") return;
        if (btn.dataset.commentWired === "1") return;
        btn.dataset.commentWired = "1";

        btn.addEventListener("click", () => {
          try {
            const url = String(btn.getAttribute("data-learning-video-comment-submit") || "");
            if (!url) return;

            const input = appEl.querySelector(`[data-learning-video-comment-input="${CSS.escape(url)}"]`);
            const listEl = appEl.querySelector(`[data-learning-video-comments-list="${CSS.escape(url)}"]`);
            if (!input || !listEl) return;

            const text = String(input.value || "").trim();
            if (!text) return;

            if (!store || typeof store !== "object") store = {};
            if (!Array.isArray(store[url])) store[url] = [];
            store[url].push({ text, ts: Date.now() });
            saveStore();

            input.value = "";
            listEl.innerHTML = renderListHtml(url);
          } catch (_) {
            // no-op
          }
        });
      });
    };

    appEl.querySelectorAll("[data-learning-video-select]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!currentDetail || currentDetail.key !== "videos") return;
        const url = String(btn.getAttribute("data-learning-video-select") || "");
        if (!url) return;
        state.learning.selectedVideoUrl = url;
        render();
      });
    });

    wireLearningVideosProgress();
    wireLearningVideoComments();

    document.getElementById("learningBackBtn")?.addEventListener("click", () => {
      state.learning.currentDetail = null;
      render();
    });
  }

  // -----------------------------
  // Contact Page (simple)
  // -----------------------------
  function renderContact() {
    appEl.innerHTML = `
      <div class="min-h-screen bg-gray-50">
        <div class="max-w-5xl mx-auto px-6 py-14">
          <div class="min-h-[62vh] flex flex-col justify-center text-center">
            <h1 class="text-5xl sm:text-6xl md:text-7xl text-black" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-weight:500; line-height:1.05">
              Our Mission
            </h1>
            <p class="mt-6 text-black/80 leading-relaxed text-base sm:text-lg md:text-xl max-w-4xl mx-auto" style="font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
              Our mission is to empower creators, students, and innovators by providing a unified digital space where ideas can grow into impactful projects. We aim to make collaboration seamless, project tracking transparent, and innovation accessible to everyone. By supporting diverse content—from code and AI models to 3D designs and research data—we strive to inspire cross-disciplinary learning and foster a community where knowledge is shared, creativity thrives, and every project has the tools it needs to succeed.
            </p>
          </div>

          <div class="mt-10">
            <h2 class="text-3xl md:text-4xl font-semibold text-black" style="font-family:Poppins, ui-sans-serif">Contact</h2>
            <p class="mt-3 text-black/70 text-base md:text-lg" style="font-family:Poppins, ui-sans-serif">
              Reach out to the coordinators for access, feedback, or publishing your project.
            </p>

            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm md:text-base">
              <div>
                <div class="text-black font-semibold" style="font-family:Poppins, ui-sans-serif">Email</div>
                <div class="mt-1 text-black/80" style="font-family:Poppins, ui-sans-serif, system-ui">DigitalTwinsHub@yahoo.com</div>
              </div>
              <div>
                <div class="text-black font-semibold" style="font-family:Poppins, ui-sans-serif">Slack</div>
                <div class="mt-1 text-black/80" style="font-family:Poppins, ui-sans-serif, system-ui">Digital Twins Fellowship</div>
              </div>
              <div>
                <div class="text-black font-semibold" style="font-family:Poppins, ui-sans-serif">Discord</div>
                <a class="mt-1 inline-block text-black/80 underline underline-offset-4 hover:text-black" href="https://discord.gg/nu6Vmjgd" target="_blank" rel="noreferrer"
                  style="font-family:Poppins, ui-sans-serif, system-ui">https://discord.gg/nu6Vmjgd</a>
              </div>
              <div>
                <div class="text-black font-semibold" style="font-family:Poppins, ui-sans-serif">YouTube</div>
                <a class="mt-1 inline-block text-black/80 underline underline-offset-4 hover:text-black" href="https://www.youtube.com/@DigitalTwinsProjects" target="_blank" rel="noreferrer"
                  style="font-family:Poppins, ui-sans-serif, system-ui">@DigitalTwinsProjects</a>
              </div>
              <div>
                <div class="text-black font-semibold" style="font-family:Poppins, ui-sans-serif">Maintainers</div>
                <div class="mt-1 text-black/80" style="font-family:Poppins, ui-sans-serif, system-ui">Project Office</div>
              </div>
              <div class="sm:col-span-2 lg:col-span-2">
                <div class="text-black font-semibold" style="font-family:Poppins, ui-sans-serif">Location</div>
                <div class="mt-1 text-black/80" style="font-family:Poppins, ui-sans-serif, system-ui">Los Angeles Trade Technical-College</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // -----------------------------
  // Main render()
  // -----------------------------
  let lastRenderedRouteName = null;
  function render() {
    renderNavbar();
    renderChatAssistant();

    const route = parseRoute();

    if (route.name !== "learning" && state.learning?._heroScrollHandler) {
      const prevTarget = state.learning._heroScrollTarget || window;
      try {
        if (prevTarget === window) window.removeEventListener("scroll", state.learning._heroScrollHandler);
        else prevTarget.removeEventListener("scroll", state.learning._heroScrollHandler);
      } catch (_) {
        // no-op
      }
      state.learning._heroScrollHandler = null;
      state.learning._heroScrollTarget = null;
    }

    if (route.name !== "learning" && state.learning?._heroScrollLoopCancel) {
      try {
        state.learning._heroScrollLoopCancel();
      } catch (_) {
        // no-op
      }
      state.learning._heroScrollLoopCancel = null;
    }

    if (!state.home.featuredProjects.length) initHomeData();
    if (!state.learning.sections) initLearningData();
    loadTeamMembers();

    // mark mounted states
    state.home.mounted = true;
    state.projectsPage.mounted = true;

    if (route.name === "home") renderHome();
    else if (route.name === "projects") renderProjectsPage();
    else if (route.name === "projectDetail") renderProjectDetail(route.id);
    else if (route.name === "team") renderTeamPage();
    else if (route.name === "teamMember") renderTeamMember(route.slug);
    else if (route.name === "learning") renderLearningHub();
    else if (route.name === "documentation") renderDocumentation();
    else if (route.name === "contact") renderContact();
    else renderHome();

    lastRenderedRouteName = route.name;
    ensureHomeInterval();

    wireVideoFallbacks(appEl);
  }

  let isTransitioning = false;
  async function renderWithTransition() {
    if (isTransitioning) return;
    isTransitioning = true;

    const nextRoute = parseRoute();
    const isHomeToOrFrom = lastRenderedRouteName === "home" || nextRoute.name === "home";

    if (appEl && !isHomeToOrFrom) appEl.classList.add("app-transitioning");

    if (!isHomeToOrFrom) await new Promise((r) => setTimeout(r, 120));
    render();

    applyEnterTextAnimations();

    requestAnimationFrame(() => {
      if (appEl) appEl.classList.remove("app-transitioning");
      setTimeout(() => {
        isTransitioning = false;
      }, 260);
    });
  }

  window.addEventListener("hashchange", renderWithTransition);
  window.addEventListener("load", render);

  // Initial kick
  render();
})();
