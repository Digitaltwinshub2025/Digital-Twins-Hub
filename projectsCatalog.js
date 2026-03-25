window.PROJECTS_CATALOG = [
  {
    id: '01',
    title: 'USGBC Resilient & Rebuilding Guide',
    category: 'Computer Science',
    owner: 'Mario',
    teamMemberFirstName: 'Mario',
    teamMemberLastName: '',
    teamMemberRole: 'Software Engineer',
    repoUrl: 'https://digitaltwinshub2025.github.io/USGBC/',
    demoUrl: 'https://digitaltwinshub2025.github.io/USGBC/',
    caseStudyUrl: 'https://docs.google.com/presentation/d/1YuVNdtQKuQmZMVu-KDavVDxwae6hEi7JCUUqQqzyH84/edit?slide=id.g3a7397fbdee_0_0#slide=id.g3a7397fbdee_0_0',
    goal:
      'To create a practical, interactive digital twin guide that distills resilience and rebuilding strategies into clear, actionable steps, helping communities and planners understand risk, prioritize investments, and integrate sustainable design principles into recovery and long-term resilience workflows. This digital guide supports holistic planning by combining risk assessment, infrastructure considerations, equity measures, and green rebuilding best practices in one platform.',
    image: '/gitlogos/USGBC.png',
    status: 'In Progress',
    projectType: 'flagship',
    lastUpdated: '2024-01-01',
    
    // Detailed Project Description
    description:
      'The USGBC Resilient & Rebuilding Guide Digital Twin is an interactive, data-informed guide aligned with U.S. Green Building Council (USGBC) principles, focused on helping communities plan and implement resilient, equitable, and sustainable rebuilding — especially in the context of wildfire risk, recovery, and long-term community resilience.\n\nThe platform combines narrative guidance, visual tools, and interactive checklists to support home hardening, water and energy resilience, equity-focused housing strategies, mobility continuity, and adaptive monitoring — making complex resilience planning more actionable for communities and stakeholders.',
    structureCapabilities:
      'An interactive digital guide that blends narrative guidance, checklists, embedded tools, and spatial visualization to support resilience and equitable rebuilding workflows (risk assessment, prioritization, infrastructure considerations, equity measures, and green rebuilding best practices).',
    
    // Technical Specifications
    techStack: {
      frontend: ['React', 'D3.js', 'Mapbox GL'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB', 'PostGIS'],
      devOps: ['Docker', 'GitHub Actions', 'AWS']
    },
    
    // Key Features
    features: [
      'Resilience & Rebuilding Guide Sections: organized content covering recovery hubs, equity, water resilience, mobility, and green rebuild strategies.',
      'Risk & Damage Prioritization: tools and narrative to help identify high-risk areas and immediate actions.',
      'Interactive Tools: embedded tools such as a 3D story viewer and wildfire safety checkers to visualize and test scenarios.',
      'Checklists & Practical Resources: actionable lists and planning aids for home hardening, ADU exploration, and resilient design strategies.',
      'Mapping & Simulation: embedded maps with hazard overlays and recovery nodes for geographic context.',
    ],
    keyFeatures:
      'Resilience & Rebuilding Guide Sections: organized content covering recovery hubs, equity, water resilience, mobility, and green rebuild strategies.\n' +
      'Risk & Damage Prioritization: tools and narrative to help identify high-risk areas and immediate actions.\n' +
      'Interactive Tools: embedded tools such as a 3D story viewer and wildfire safety checkers to visualize and test scenarios.\n' +
      'Checklists & Practical Resources: actionable lists and planning aids for home hardening, ADU exploration, and resilient design strategies.\n' +
      'Mapping & Simulation: embedded maps with hazard overlays and recovery nodes for geographic context.',
    fileStructure:
      '/index.html                 — main project interface and navigation\n' +
      '/sections/                 — structured guide sections (Risk, Recovery, Water, etc.)\n' +
      '/assets/                   — images, 3D models, visualization assets\n' +
      '/scripts/                  — JavaScript for maps, tools, and interactivity\n' +
      '/styles/                  — CSS for layout and design\n' +
      '/tools/                   — embedded utility tools and checklists',
    
    // Project Modules
    modules: {
      guidanceContent: {
        description: 'Text, checklists, and strategy explanations tied to resilience themes.',
        components: ['Delivers structured resilience and rebuilding best practices'],
      },
      interactiveTools: {
        description: '3D viewers, risk checkers, and planning aids.',
        components: ['Lets users engage with 3D scenarios and tool-based assessments (e.g., wildfire safety rating)'],
      },
      mappingVisualization: {
        description: 'Spatial context for risk zones, hubs, and infrastructure.',
        components: ['Displays maps and layout elements to support spatial understanding of resources, risk, and recovery hubs'],
      },
      dataIntegration: {
        description: 'Pulls demographic, hazard, and infrastructure data into narrative context.',
        components: ['Synthesizes risk indicators, demographic insights, and infrastructure layers for evidence-based planning'],
      },
    },
    moduleFunctions:
      'Guidance Content: Delivers structured resilience and rebuilding best practices.\n' +
      'Interactive Tools: Lets users engage with 3D scenarios and tool-based assessments (e.g., wildfire safety rating).\n' +
      'Visualization: Displays maps and layout elements to support spatial understanding of resources, risk, and recovery hubs.\n' +
      'Data Integration: Synthesizes risk indicators, demographic insights, and infrastructure layers for evidence-based planning.',
    
    // Project Impact
    impact: {
      metrics: ['Breaks complex resilience and rebuilding planning into actionable strategies', 'Supports prioritization of interventions for recovery and long-term resilience'],
      benefits: ['Centralizes guidance, tools, and spatial context in one platform', 'Supports equitable and sustainable rebuilding decisions'],
    },
    impactData:
      'Risk & Hazard Data: wildfire risk, heat exposure, and vulnerability profiles.\n' +
      'Infrastructure Data: locations of recovery hubs, transit nodes, and critical services.\n' +
      'Household & Demographic Data: vulnerability profiles, housing status, and equity metrics.\n' +
      'Interactive Tool Outputs: scenario results from wildfire safety testers, 3D viewers, and checklists.',
    problem:
      'Communities recovering from natural disasters such as wildfires face complex decisions involving infrastructure resilience, housing equity, water security, and mobility continuity. The USGBC Resilient & Rebuilding Guide digital twin provides a centralized, interactive resource that breaks these challenges into actionable strategies, helping planners and residents prioritize interventions and integrate resilience into design and policy.',
    
    // Data Management
    data: {
      sources: ['Risk and hazard datasets (wildfire, heat exposure)', 'Infrastructure layers (recovery hubs, transit nodes, critical services)', 'Household and demographic datasets (vulnerability, equity metrics)', 'Interactive tool outputs (checklists, safety testers, 3D viewer scenarios)'],
      types: ['Risk & Hazard Data', 'Infrastructure Data', 'Household & Demographic Data', 'Interactive Tool Outputs'],
    },
    dataTypes:
      'Risk & Hazard Data: wildfire risk, heat exposure, and vulnerability profiles.\n' +
      'Infrastructure Data: locations of recovery hubs, transit nodes, and critical services.\n' +
      'Household & Demographic Data: vulnerability profiles, housing status, and equity metrics.\n' +
      'Interactive Tool Outputs: scenario results from wildfire safety testers, 3D viewers, and checklists.',
    conclusion:
      'The USGBC Resilient & Rebuilding Guide Digital Twin is a comprehensive, interactive planning and guidance platform tailored for resilience and equitable recovery. By blending narrative guidance, interactive tools, spatial visualization, and practical checklists, the project supports communities and decision-makers in designing resilient, equitable, and sustainable post-disaster futures.',
    
    // Project Roadmap
    roadmap: [
      { phase: 'Phase 1', status: 'Completed', items: ['Core platform development', 'Basic visualization'] },
      { phase: 'Phase 2', status: 'In Progress', items: ['Advanced analytics', 'Mobile optimization'] },
      { phase: 'Phase 3', status: 'Planned', items: ['AI predictions', 'Blockchain verification'] }
    ],
    
    // Team and Collaboration
    team: {
      members: [
        { name: 'Mario', role: 'Lead Developer' },
        { name: 'Monique Nogueira', role: 'Architecture & Interior Design' },
        { name: 'Design Team', role: 'UI/UX Design' },
        { name: 'Data Science', role: 'Analytics' }
      ],
      collaboration: [
        'USGBC Technical Committee',
        'Sustainability Consultants',
        'Building Owners and Operators'
      ]
    },
    
    // Additional Metadata
    tags: ['sustainability', 'leed', 'green-building', 'data-visualization'],
    license: 'MIT',
    documentation: '',
    demoUrl: 'https://digitaltwinshub2025.github.io/USGBC/',
    
    // Project Health
    health: {
      status: 'active',
      lastDeployed: '2024-01-10',
      openIssues: 5,
      testCoverage: '85%'
    }
  },
  {
    id: '02',
    title: 'Baldwin Hills 6-Mile Corridor Initiative',
    category: 'Digital Twin Project',
    owner: 'Omid Ahmadi',
    teamMemberFirstName: 'Omid',
    teamMemberLastName: 'Ahmadi',
    teamMemberRole: 'Software Engineer',
    repoUrl: 'https://digitaltwinshub.github.io/Baldwin/',
    demoUrl: 'https://digitaltwinshub.github.io/Baldwin/',
    caseStudyUrl: 'https://docs.google.com/presentation/d/1z8uyGmwZGCtqGBg7ekWhlDwHqartNv4AzphWol4LibY/edit',
    videoUrl: 'https://drive.google.com/file/d/1Mtr_PEtuTASlkRgcPuQJc0BHIPHrg0j4/view?usp=sharing',
    videoEmbedUrl: 'https://drive.google.com/file/d/1Mtr_PEtuTASlkRgcPuQJc0BHIPHrg0j4/preview',
    description:
      'The Baldwin Hills 6-Mile Corridor Initiative is a digital twin project focused on modeling and visualizing the Baldwin Hills 6-Mile Corridor — a significant urban and environmental area in Los Angeles County. The initiative creates a spatially informed digital representation that supports planning, analysis, and community engagement by integrating environmental, social, and built-environment characteristics of the corridor.\n\nDigital twin technology enables a dynamic digital representation of real-world systems that can simulate conditions, analyze performance, and support data-driven decision-making using real datasets, analytical models, and interactive visualization tools.',
    goal:
      'To build a digital twin of the Baldwin Hills 6-Mile Corridor that serves as an interactive, data-rich platform for stakeholders — including planners, engineers, policymakers, and community members — to explore spatial dynamics, evaluate scenarios, and better understand environmental and urban conditions affecting the corridor.',
    image: '/gitlogos/Baldwin%20hills%206%20Miles.png?v=3',
    status: 'Active / Evolving Prototype',
    projectType: 'flagship',
    structureCapabilities:
      'A spatially informed digital twin platform combining interactive mapping and layered datasets to support exploration, analysis, and scenario evaluation for the Baldwin Hills 6-Mile Corridor.',
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript'],
      mappingGis: ['Leaflet', 'Mapbox GL JS', 'GeoJSON'],
      visualization: ['Interactive maps', 'D3.js / Chart.js'],
      dataProcessing: ['JavaScript-based spatial filtering and analysis'],
      dataSources: ['Open geospatial, environmental, and census datasets'],
      hosting: ['GitHub Pages'],
      versionControl: ['Git', 'GitHub'],
    },
    features: [
      'Spatial Mapping & Visualization: maps and layered data contextualizing the corridor’s built and natural environment.',
      'Integrated Data Layers: environmental, demographic, transportation, land use, and infrastructure information.',
      'Interactive Interface: tools for exploration and analysis.',
      'Scenario Analysis: supports testing planning interventions or environmental scenarios.',
    ],
    keyFeatures:
      'Spatial Mapping & Visualization: maps and layered data contextualizing the corridor’s built and natural environment.\n' +
      'Integrated Data Layers: environmental, demographic, transportation, land use, and infrastructure information.\n' +
      'Interactive Interface: tools for exploration and analysis.\n' +
      'Scenario Analysis: supports testing planning interventions or environmental scenarios.',
    fileStructure:
      '/index.html             — main landing page\n' +
      '/assets/                — visual and mapping assets\n' +
      '/styles/                — CSS and layout\n' +
      '/scripts/               — JavaScript for maps and interactivity\n' +
      '/data/                  — datasets or geoJSON layers\n' +
      '/docs/                  — documentation, metadata, README',
    modules: {
      spatialData: {
        description: 'Hosts the core GIS layers for the corridor',
        components: ['Organizes and serves geographic and environmental datasets'],
      },
      visualization: {
        description: 'Renders interactive maps and graphical outputs',
        components: ['Translates spatial data into clear visual insights (maps, charts)'],
      },
      analysis: {
        description: 'Provides tools for interpreting corridor conditions (heat, land use, transportation)',
        components: ['Runs computations and filters to analyze spatial patterns and trends'],
      },
      userInteraction: {
        description: 'Enables stakeholders to manipulate views and switch data layers',
        components: ['Facilitates exploration and scenario comparison'],
      },
    },
    moduleFunctions:
      'Spatial Data Module: Organizes and serves geographic and environmental datasets for the corridor.\n' +
      'Visualization Module: Translates spatial data into interactive visual insights (e.g., maps, charts).\n' +
      'Analysis Module: Runs computations or filters to analyze patterns and trends across the corridor.\n' +
      'User Interaction Module: Facilitates stakeholder exploration and scenario comparison.',
    impact: {
      metrics: ['Consolidates diverse corridor datasets into a single interactive model', 'Improves scenario exploration and stakeholder understanding'],
      benefits: ['Supports data-backed decisions related to equity, resilience, and infrastructure investment', 'Enables clearer visualization of spatial interdependencies'],
    },
    impactData:
      'Geospatial Data: maps, boundaries, topography, and corridor layouts.\n' +
      'Environmental Data: climate indicators, land cover, heat profiles, etc.\n' +
      'Demographic Data: population, economic, and social characteristics.\n' +
      'Infrastructure & Land Use Data: transit routes, building footprints, zoning.',
    problem:
      'Urban corridors like Baldwin Hills encompass complex interplays between built elements, ecological systems, transportation networks, and social factors. A digital twin consolidates these disparate data sources into a single interactive model, helping stakeholders visualize spatial interdependencies, anticipate planning outcomes, and support data-backed decisions related to equity, resilience, and infrastructure investment.',
    data: {
      sources: ['Geospatial layers for corridor context', 'Environmental indicators and land cover', 'Demographic and socioeconomic datasets', 'Infrastructure and land-use datasets'],
      types: ['Geospatial Data', 'Environmental Data', 'Demographic Data', 'Infrastructure & Land Use Data'],
    },
    dataTypes:
      'Geospatial Data: maps, boundaries, topography, and corridor layouts.\n' +
      'Environmental Data: climate indicators, land cover, heat profiles, etc.\n' +
      'Demographic Data: population, economic, and social characteristics.\n' +
      'Infrastructure & Land Use Data: transit routes, building footprints, zoning.',
    conclusion:
      'The Baldwin Hills 6-Mile Corridor Initiative Digital Twin is an interactive spatial platform that brings together diverse urban and environmental data to support planning, analysis, and community engagement. By creating a digital reflection of the corridor, it empowers users to explore patterns, model scenarios, and make informed decisions about future development and policy.',

    roadmap: [
      { phase: 'Phase 1', status: 'Completed', items: ['Core GIS integration and base corridor mapping'] },
      { phase: 'Phase 2', status: 'In Progress', items: ['Environmental, land-use, and transportation analysis layers'] },
      { phase: 'Phase 3', status: 'Planned', items: ['Scenario comparison tools and community-facing dashboards'] },
      { phase: 'Phase 4', status: 'Planned', items: ['Expanded datasets, storytelling tools, and near-real-time data integration'] },
    ],

    team: {
      members: [
        { name: 'Omid Ahmadi', role: 'Software Engineer — Digital twin architecture, GIS integration, data visualization, and interactive systems' },
        { name: 'Myisha Arellano', role: 'Architecture — Urban and architectural design concepts, spatial planning, and built-environment interpretation' },
      ],
      collaboration: [],
    },

    health: {
      status: 'Active / Evolving Prototype (Stable, modular, and extensible)',
      lastDeployed: 'N/A',
      openIssues: 'N/A',
      testCoverage: 'N/A',
    },
  },
  {
    id: '03',
    title: 'Shade LA',
    category: 'Urban Heat Mitigation',
    owner: 'Saron',
    teamMemberFirstName: 'Saron',
    teamMemberLastName: '',
    teamMemberRole: 'Software Engineer',
    repoUrl: 'https://digitaltwinshub2025.github.io/Shade-LA/',
    demoUrl: 'https://digitaltwinshub2025.github.io/Shade-LA/',
    caseStudyUrl: 'https://docs.google.com/presentation/d/1nZ0VBAGkZIK4jP_zb61AQJDliu4HEjdDzAS4ATf1EzI/edit?usp=sharing',
    videoUrl: 'https://youtu.be/M01xOyR6grI',
    videoEmbedUrl: 'https://www.youtube.com/embed/M01xOyR6grI',
    videoTitle: 'Shade LA — Project Video',
    goal: 'To demonstrate and communicate effective shade planning strategies in Los Angeles by using interactive maps, 3D simulations, and data analytics that support informed decision-making for urban heat mitigation.',
    image: '/gitlogos/ShadeLA.png',
    status: 'In Progress',
    projectType: 'flagship',
    description:
      'Shade LA is an interactive, design-driven project focused on addressing urban heat and lack of shade in Los Angeles. The platform combines spatial mapping, 3D visualization, parametric design, and data dashboards to explore how shade structures and trees can improve thermal comfort, public health, and climate resilience in urban environments. The project integrates visual and analytical tools to help stakeholders understand the impact of shade interventions across public spaces.',
    structureCapabilities:
      'Shade LA combines interactive spatial mapping, 3D visualization, parametric design previews, and analytics dashboards to help stakeholders visualize, analyze, and communicate shade interventions and their impacts across public spaces in Los Angeles.',
    features: [
      'Interactive area map showing geographic context and shade focus areas',
      'Unreal Engine 3D visualizations simulating shaded urban environments',
      'Grasshopper parametric previews for shade and canopy design exploration',
      'Visual galleries of canopy and tree designs',
      'Embedded Power BI dashboard for environmental and planning analytics',
    ],
    keyFeatures:
      'Interactive area map showing geographic context and shade focus areas\n' +
      'Unreal Engine 3D visualizations simulating shaded urban environments\n' +
      'Grasshopper parametric previews for shade and canopy design exploration\n' +
      'Visual galleries of canopy and tree designs\n' +
      'Embedded Power BI dashboard for environmental and planning analytics',
    fileStructure:
      '/index.html        — main project interface\n' +
      '/assets            — styles, scripts, embeds\n' +
      '/images            — canopy, tree, and render visuals\n' +
      '/scripts           — map and dashboard integrations\n' +
      '/docs              — supporting materials and references',
    modules: {
      spatialMapping: {
        description: 'Displays the project area and spatial context.',
        components: ['Identifies areas where shade interventions are analyzed'],
      },
      visualization3d: {
        description: 'Unreal Engine simulations for shade impact.',
        components: ['Simulates environmental conditions with added shade'],
      },
      parametricDesign: {
        description: 'Grasshopper models for adaptable shade forms.',
        components: ['Explores scalable and customizable canopy structures'],
      },
      analytics: {
        description: 'Power BI dashboards presenting key metrics.',
        components: ['Communicates insights through interactive charts and data views'],
      },
    },
    moduleFunctions:
      'Mapping: Identifies areas where shade interventions are analyzed\n' +
      '3D Visualization: Simulates environmental conditions with added shade\n' +
      'Parametric Design: Explores scalable and customizable canopy structures\n' +
      'Analytics: Communicates insights through interactive charts and data views',
    impact: {
      metrics: ['Improves communication of shade planning strategies', 'Supports urban heat mitigation planning with interactive visual tools'],
      benefits: ['Bridges design concepts and data-driven planning', 'Helps stakeholders evaluate shade interventions for public health and resilience'],
    },
    impactData:
      'Geospatial Data – maps and site context\n' +
      '3D Model Data – Unreal Engine and Grasshopper outputs\n' +
      'Environmental & Planning Metrics – visualized through Power BI dashboards',
    problem:
      'Los Angeles faces increasing heat stress due to climate change and limited shade infrastructure. Shade LA helps bridge the gap between design concepts and data-driven planning, making it easier to visualize, analyze, and communicate shade solutions that improve urban livability and public health.',
    data: {
      sources: ['Geospatial datasets (maps and site context)', '3D model outputs (Unreal Engine and Grasshopper)', 'Environmental and planning metrics (Power BI dashboards)'],
      types: ['Geospatial Data', '3D Model Data', 'Environmental & Planning Metrics'],
    },
    dataTypes:
      'Geospatial Data – maps and site context\n' +
      '3D Model Data – Unreal Engine and Grasshopper outputs\n' +
      'Environmental & Planning Metrics – visualized through Power BI dashboards',
    team: {
      members: [
        { name: 'Saron Feyisa', role: 'Software Engineer — platform development, mapping, and integration' },
        { name: 'Monica Kaye', role: 'UX & Visual Design — research-driven interface and communication design' },
        { name: 'Volodymyr Balan', role: 'Backend Software Engineer — APIs, database modeling, and performance optimization' },
        { name: 'Eden Olvera', role: 'Architectural & computational design — parametric modeling, GIS, and generative systems' },
      ],
      collaboration: [],
    },
    conclusion:
      'Shade LA is a multidisciplinary platform that merges software engineering, spatial analysis, and design visualization to support urban shade planning. By presenting complex data and design concepts in an accessible, interactive format, the project contributes to climate-resilient and people-centered urban environments.',
  },
  {
    id: '04',
    title: 'Pando Populus',
    category: 'Resilience Intelligence',
    owner: 'Ed',
    teamMemberFirstName: 'Ed',
    teamMemberLastName: '',
    teamMemberRole: 'Engineer',
    repoUrl: 'https://digitaltwinshub2025.github.io/Pando/',
    demoUrl: 'https://digitaltwinshub2025.github.io/Pando/',
    caseStudyUrl: 'https://docs.google.com/presentation/d/1xXRyw32_jODa1bqK6QqQS9SeV5uj-Fq_x9mVV-mM9Qc/edit?usp=sharing',
    goal: 'Provide clear, data-driven insights that help communities understand local climate and social risks and support planning decisions that enhance environmental and social resilience.',
    image: '/gitlogos/Pando.jpeg',
    status: 'In Progress',
    projectType: 'flagship',
    description:
      'Pando Populus is a place-based resilience intelligence platform that turns environmental, infrastructure, and social data into actionable insights to support climate resilience, community awareness, and planning for local neighborhoods.',
    structureCapabilities: 'Pando Populus is a place-based resilience intelligence platform that turns environmental, infrastructure, and social data into actionable insights to support climate resilience, community awareness, and planning for local neighborhoods.',
    features: [
      'Spatial integration of environmental and demographic data.',
      'Identification of climate hazards (heat, air quality, flood, wildfire).',
      'Presentation of risks and opportunities for resilient infrastructure and land use.',
      'Support for community planning and decision-making.',
    ],
    keyFeatures:
      'Spatial integration of environmental and demographic data.\n' +
      'Identification of climate hazards (heat, air quality, flood, wildfire).\n' +
      'Presentation of risks and opportunities for resilient infrastructure and land use.\n' +
      'Support for community planning and decision-making.',
    fileStructure:
      '/data             — raw & processed datasets\n' +
      '/src              — analysis & visualization scripts\n' +
      '/notebooks        — exploratory analyses\n' +
      '/docs             — documentation & metadata\n' +
      '/index.html       — web UI entry point\n' +
      '/assets           — images, stylesheets, config',
    modules: {
      dataIngestion: {
        description: 'Loads census, environmental, risk, and planning datasets.',
        components: ['Harmonizes multiple open datasets'],
      },
      riskAnalysis: {
        description: 'Model engine that computes local risk layers (heat, air, flood, wildfire).',
        components: ['Computes spatial risk indicators for hazards'],
      },
      visualization: {
        description: 'Maps, charts, and dashboards for community interpretation.',
        components: ['Generates interactive maps/graphs'],
      },
      insightsRecommendations: {
        description: 'Suggests resilience strategies based on risk outputs.',
        components: ['Highlights multi-benefit solutions'],
      },
    },
    moduleFunctions:
      'Data Ingestion: Harmonizes multiple open datasets.\n' +
      'Risk Analysis: Computes spatial risk indicators for hazards.\n' +
      'Visualization: Generates interactive maps/graphs.\n' +
      'Insights & Recommendations: Highlights multi-benefit solutions.',
    impact: {
      metrics: ['Improves community awareness of local climate and social risks', 'Supports data-backed resilience planning'],
      benefits: ['Consolidates disparate datasets into actionable insights', 'Enables more equitable preparedness and planning decisions'],
    },
    impactData:
      'Demographic Data – census population, age, socioeconomic indicators.\n' +
      'Environmental Data – heat, air quality indices.\n' +
      'Climate Risk Models – flood and wildfire risk layers.\n' +
      'Infrastructure Data – built environment, transit, open space.',
    problem:
      'Communities and planners often struggle to interpret disparate environmental and social datasets. Pando Populus consolidates this information into a cohesive, actionable picture — enabling better preparedness and equitable resilience planning.',
    data: {
      sources: ['Census and demographic datasets', 'Environmental indices (heat, air quality)', 'Climate risk layers (flood, wildfire)', 'Infrastructure and land-use datasets'],
      types: ['Demographic Data', 'Environmental Data', 'Climate Risk Models', 'Infrastructure Data'],
    },
    dataTypes:
      'Demographic Data – census population, age, socioeconomic indicators.\n' +
      'Environmental Data – heat, air quality indices.\n' +
      'Climate Risk Models – flood and wildfire risk layers.\n' +
      'Infrastructure Data – built environment, transit, open space.',
    team: {
      members: [
        { name: 'Ed', role: 'Engineer' },
        { name: 'Eddie Cortez', role: 'Architectural Technology Designer' },
        { name: 'Eden Olvera', role: 'Architectural & computational design — parametric modeling, GIS, and generative systems' },
      ],
      collaboration: [],
    },
    conclusion:
      'Pando Populus is a robust digital twin platform tailored to environmental and community resilience. By synthesizing complex datasets into digestible insights, it empowers communities and planners to evaluate and address climate-related challenges with data-backed strategies.',
  },
  {
    id: '05',
    title: 'ASU Reclamation ',
    category: 'Architecture & Community Design',
    owner: 'Nancy',
    teamMemberFirstName: 'Nancy',
    teamMemberLastName: '',
    teamMemberRole: 'Architecture Engineer',
    repoUrl: 'https://sites.google.com/view/asureclamationproject/home?authuser=2',
    demoUrl: 'https://sites.google.com/view/asureclamationproject/home?authuser=2',
    caseStudyUrl: 'https://docs.google.com/presentation/d/1vvPeb8UAam5diOklqXiCtg_gKmWP0W-ja35KHTXteA0/edit?usp=sharing',
    videoTitle: 'ASU Reclamation — Project Video',
    videoUrl: 'https://youtu.be/QvzXpVYJPtc',
    videoEmbedUrl: 'https://www.youtube.com/embed/QvzXpVYJPtc',
    goal: 'To reclaim and repurpose urban spaces in Los Angeles by integrating architecture, environmental design, and community engagement, ultimately enhancing local ecology and social wellbeing through meaningful public space interventions.',
    image: '/gitlogos/ASU%20RECLAMATION.png',
    status: 'In Progress',
    projectType: 'flagship',
    description:
      'The ASU Reclamation Project is a community-centered initiative developed by the California Center for Climate Change Education in collaboration with Arizona State University. It focuses on transforming underused urban spaces in Los Angeles into vibrant living gardens and public places that reconnect people, nature, and community through design, art, storytelling, and digital tools like 3D modeling and XR (extended reality).',
    structureCapabilities:
      'Transforms underused urban spaces through architectural and environmental design, supported by site analysis, community engagement, and digital twin/XR tools for visualization and stakeholder participation.',
    features: [
      'Urban Reclamation Design – Architectural transformation of underutilized city spaces.',
      'Site Analysis & Context – Understanding physical, cultural, and environmental conditions before design.',
      'Digital Twin & XR Integration – Use of 3D modeling and extended reality tools to visualize design alternatives and engage stakeholders.',
      'Community Engagement – Storytelling and participatory design to involve local residents.',
    ],
    keyFeatures:
      'Urban Reclamation Design – Architectural transformation of underutilized city spaces.\n' +
      'Site Analysis & Context – Understanding physical, cultural, and environmental conditions before design.\n' +
      'Digital Twin & XR Integration – Use of 3D modeling and extended reality tools to visualize design alternatives and engage stakeholders.\n' +
      'Community Engagement – Storytelling and participatory design to involve local residents.',
    fileStructure:
      '/index.html                — main site homepage\n' +
      '/sections/                 — major site sections (Project, Analysis, XR, Community)\n' +
      '/assets/                   — images, 3D models, XR files\n' +
      '/docs/                     — background reports and references',
    modules: {
      projectDefinition: {
        description: 'Establishes vision and objectives for site reclamation.',
        components: ['Frames the reclamation goals and criteria for success'],
      },
      siteAnalysisContext: {
        description: 'Collects and interprets environmental and urban data for design decisions.',
        components: ['Maps existing conditions and constraints to inform design'],
      },
      digitalTwinXr: {
        description: 'Generates immersive digital experiences to explore conceptual designs and real-world impacts.',
        components: ['Builds virtual and augmented reality representations to visualize change'],
      },
      community: {
        description: 'Engages stakeholders through storytelling, workshops, and participatory feedback.',
        components: ['Creates channels for narratives, needs, and input from local residents'],
      },
    },
    moduleFunctions:
      'Project Definition: Frames the reclamation goals and criteria for success.\n' +
      'Site Analysis & Context: Maps existing conditions and constraints to inform design.\n' +
      'Digital Twin & XR: Builds virtual and augmented reality representations to visualize change.\n' +
      'Community: Creates channels for narratives, needs, and input from local residents.',
    impact: {
      metrics: ['Transforms neglected spaces into meaningful public landscapes', 'Supports equitable and community-centered urban transformation'],
      benefits: ['Reconnects residents with nature and community life', 'Balances technical analysis with social values using 3D/XR engagement'],
    },
    impactData:
      'Spatial & Environmental Data – site conditions, existing vegetation, urban context.\n' +
      '3D & XR Models – digital twin files and immersive visualizations.\n' +
      'Community Input & Storytelling – qualitative data from stakeholders and community members.',
    problem:
      'Urban environments often contain neglected spaces that disconnect residents from nature and community life. The ASU Reclamation Project addresses this urban fragmentation by blending design, ecology, and technology to transform these areas into meaningful public landscapes while enhancing social and environmental outcomes.',
    data: {
      sources: ['Site conditions and environmental context', '3D digital twin and XR artifacts', 'Community storytelling and participatory feedback'],
      types: ['Spatial & Environmental Data', '3D & XR Models', 'Community Input & Storytelling'],
    },
    dataTypes:
      'Spatial & Environmental Data – site conditions, existing vegetation, urban context.\n' +
      '3D & XR Models – digital twin files and immersive visualizations.\n' +
      'Community Input & Storytelling – qualitative data from stakeholders and community members.',
    team: {
      members: [
        { name: 'Nancy', role: 'Architecture Engineer' },
        { name: 'Yiceth Cosby', role: 'XR & Digital Twin Modeling' },
      ],
      collaboration: [],
    },
    conclusion:
      'The ASU Reclamation Project is a collaborative initiative combining architecture, landscape design, community engagement, and digital technologies to reclaim urban spaces in Los Angeles. It balances technical analysis with social values, using 3D simulations and XR tools to guide equitable and inspiring urban transformation.',
  },
  {
    id: '06',
    title: 'Alley Bloom — Water Alley ',
    category: 'Urban Climate Resilience',
    owner: 'Michael',
    teamMemberFirstName: 'Michael',
    teamMemberLastName: '',
    teamMemberRole: 'Software Engineer',
    repoUrl: 'https://digitaltwinshub2025.github.io/ALLEY-BLOOM/',
    demoUrl: 'https://digitaltwinshub2025.github.io/ALLEY-BLOOM/',
    caseStudyUrl: 'https://docs.google.com/presentation/d/1s2cBJ4kS-AP2XAa2YtcGM4tVV9qV2JvCfkdn-R9tq-g/edit?usp=sharing',
    goal:
      'To visualize and communicate how data-informed design strategies—such as shade infrastructure, public art, and urban agriculture—can improve environmental performance, social use, and overall quality of life within dense urban alleyways.',
    image: '/gitlogos/Alley%20Bloom.png',
    status: 'In Progress',
    projectType: 'flagship',
    description:
      'Alley Bloom is an interactive digital twin prototype focused on Innovation Alley 3 (Water Alley) in the Pico-Union neighborhood of Los Angeles. The project uses real spatial data, weather inputs, and immersive visualization to represent existing alley conditions and explore how targeted design interventions can transform underutilized urban space into a climate-adaptive, community-centered environment.',
    structureCapabilities:
      'An interactive digital twin visualization that uses real spatial and weather inputs to represent existing alley conditions and explore scenario-based design interventions (shade, art, and food) through immersive 3D views and before/after comparisons.',
    features: [
      'Interactive digital twin visualization of Water Alley',
      'Before and after comparisons of existing and proposed conditions',
      'Shade intervention: cooling structures to reduce heat stress',
      'Art intervention: murals reflecting local culture and water awareness',
      'Food intervention: urban farming elements supporting food access',
      'Integration of real location and weather data to simulate environmental conditions',
    ],
    keyFeatures:
      'Interactive digital twin visualization of Water Alley\n' +
      'Before and after comparisons of existing and proposed conditions\n' +
      'Shade intervention: cooling structures to reduce heat stress\n' +
      'Art intervention: murals reflecting local culture and water awareness\n' +
      'Food intervention: urban farming elements supporting food access\n' +
      'Integration of real location and weather data to simulate environmental conditions',
    fileStructure:
      '/index.html             — main project interface\n' +
      '/assets                — 3D models and visuals\n' +
      '/scripts               — interactivity and data logic\n' +
      '/styles                — layout and UI styling\n' +
      '/data                  — spatial and environmental inputs\n' +
      '/docs                  — project background and references',
    modules: {
      spatialData: {
        description: 'Loads real-world alley location and baseline data.',
        components: ['Geospatial context and baseline alley conditions'],
      },
      visualization3d: {
        description: 'Renders immersive alley scenarios.',
        components: ['3D scene rendering for existing and proposed alley conditions'],
      },
      interventions: {
        description: 'Allows exploration of shade, art, and food concepts.',
        components: ['Scenario toggles for shade, murals, and urban agriculture elements'],
      },
      comparison: {
        description: 'Displays side-by-side before/after views.',
        components: ['Clear comparison of existing vs proposed transformations'],
      },
    },
    moduleFunctions:
      'Visualize current alley conditions\n' +
      'Simulate environmental and social impacts of design changes\n' +
      'Enable user-driven exploration of alternative scenarios\n' +
      'Communicate transformation outcomes clearly and intuitively',
    impactData:
      'Geospatial location data\n' +
      'Weather and environmental data\n' +
      '3D design and intervention models\n' +
      'Scenario comparison outputs',
    problem:
      'Urban alleys are often overlooked despite their potential to support cooling, community gathering, and local food systems. Alley Bloom demonstrates how digital twins and design visualization can help reimagine these spaces to address climate stress, social equity, and environmental resilience.',
    data: {
      sources: ['Geospatial location data', 'Weather and environmental data', '3D design and intervention models', 'Scenario comparison outputs'],
      types: ['Geospatial location data', 'Weather and environmental data', '3D design and intervention models', 'Scenario comparison outputs'],
    },
    dataTypes:
      'Geospatial location data\n' +
      'Weather and environmental data\n' +
      '3D design and intervention models\n' +
      'Scenario comparison outputs',
    conclusion:
      'Alley Bloom showcases how an interactive digital twin can turn a neglected urban alley into a data-driven vision for community resilience. By blending real-world data with human-centered design concepts, the project provides a compelling framework for rethinking small urban spaces with big impact.',

    team: {
      members: [
        { name: 'Michael Lee', role: 'Project Lead' },
        { name: 'Brenda Cardoza', role: 'Interior design student — design concepts, digital modeling, and site analysis' },
        { name: 'Eden Olvera', role: 'Architectural & computational design — parametric modeling, GIS, and generative systems' },
      ],
      collaboration: [],
    },
  },
];

window.getAllProjects = function () {
  return window.PROJECTS_CATALOG;
};

window.getProjectById = function (id) {
  return window.PROJECTS_CATALOG.find(
    (p) => String(p.id) === String(id)
  ) || null;
};
