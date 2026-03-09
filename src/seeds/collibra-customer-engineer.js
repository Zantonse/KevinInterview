// Seed data for Kevin Verzosa's Collibra Customer Engineer application
// Split into 4 normalized exports for the v3 data model

// ─── 1. Kevin's Profile ─────────────────────────────────────────

const RESUME_RAW = `KEVIN VERZOSA
Email: KevinVerzosaWork@gmail.com

PROFESSIONAL EXPERIENCE

Data Enablement Manager
Pfizer Inc. | Memphis, TN | Aug 2021 – Aug 2025
- Led enterprise rollout and adoption of Collibra Data Intelligence Cloud across 10+ business units and 1,000+ users, establishing standardized stewardship models, metadata governance workflows, and operating model maturity.
- Partnered with business and technical stakeholders in structured discovery sessions to identify governance maturity gaps, define domain onboarding priorities, and map Collibra capabilities to enterprise use cases.
- Conducted tailored platform demonstrations and executive walkthroughs to showcase lineage, stewardship workflows, glossary alignment, and policy enforcement, driving stakeholder buy-in and 40% growth in platform adoption.
- Designed and executed phased domain onboarding pilots and governance playbooks, accelerating time-to-value and reducing metadata ingestion cycle time by 30%.
- Integrated Databricks Unity Catalog, Snowflake, and cloud platforms with Collibra, enabling cross-platform lineage visibility and enterprise metadata synchronization.
- Reduced metadata ingestion cycle time by 30% through streamlined Jira-based intake workflows and stewardship handoffs.
- Developed executive dashboards linking governance metrics to business impact, improving transparency and contributing to a 50% reduction in redundant licensing costs.
- Served as escalation point for platform-related technical inquiries, guiding engineering and analytics teams through lineage configuration, metadata modeling, and workflow design.

Senior Analyst – Data Governance & Security
Pfizer Inc. | Memphis, TN | Feb 2018 – Aug 2021
- Facilitated cross-functional requirements discovery between RPA engineering and business stakeholders, translating technical capabilities into scalable automation governance standards.
- Delivered structured enablement sessions and technical walkthroughs to global delivery teams, reducing onboarding time by 30% and increasing automation adoption.
- Analyzed 1,000+ automation exceptions to identify governance gaps, reducing root-cause investigation time by 40% and improving audit readiness.
- Collaborated with corporate audit to align digital automation controls with enterprise compliance requirements, achieving satisfactory audit outcomes.

Decision Support – Data Analyst
Pfizer Inc. | Memphis, TN | Sept 2015 – Feb 2018
- Delivered enterprise financial and operational reporting using SAP BusinessObjects, partnering with business leaders to define KPIs, governance standards, and validation requirements.
- Supported global operating model transitions by delivering in-person and virtual training, improving adoption of standardized reporting and governance practices.

EDUCATION
- Master of Science in Information Systems — University of Memphis
- Graduate Certificate in Management of Artificial Intelligence – Stevens Institute of Technology
- BS – Business Administration (IT Management) — Saint Louis University

Platforms: Collibra DIC & Edge • Databricks Unity Catalog • Snowflake • Tableau • Cloud APIs • RPA • Jira
Expertise: Governance Operating Models • Metadata Management • Taxonomy & Standards • Stewardship • Lineage • Data Quality • SOPs • Change Management • Audit Readiness • Cross-Functional Leadership`

export const kevinProfile = {
  name: "Kevin Verzosa",
  headline: "Data Enablement Manager | Enterprise Data Strategy | Governance Operating Models",
  location: "Memphis, Tennessee",
  resumeRaw: RESUME_RAW,
  careerSummary: "10-year Pfizer veteran who progressed from financial reporting analyst to enterprise data governance leader. Built and scaled Pfizer's Collibra Data Intelligence Cloud deployment across 10+ business units and 1,000+ users — one of the largest single-enterprise Collibra rollouts. Unique combination of deep product knowledge (4 years daily Collibra usage), cross-functional stakeholder management, and structured governance methodology. Now transitioning from internal platform champion to external-facing Customer Engineer at the company that built the product.",
  keyMetrics: [
    { value: "10+", label: "Years at Pfizer", detail: "Sept 2015 – Aug 2025" },
    { value: "10+", label: "Business Units", detail: "Collibra deployed across" },
    { value: "1,000+", label: "Active Users", detail: "On Collibra platform" },
    { value: "40%", label: "Adoption Growth", detail: "Year-over-year platform adoption" },
    { value: "30%", label: "Cycle Time Reduction", detail: "Metadata governance workflows" },
    { value: "50%", label: "Cost Reduction", detail: "Licensing consolidation savings" },
  ],
  careerArc: [
    {
      title: "Data Enablement Manager",
      company: "Pfizer Inc.",
      dates: "Aug 2021 – Aug 2025",
      bullets: [
        "Led enterprise rollout and adoption of Collibra Data Intelligence Cloud across 10+ business units and 1,000+ users, establishing standardized stewardship models, metadata governance workflows, and operating model maturity",
        "Partnered with business and technical stakeholders in structured discovery sessions to identify governance maturity gaps, define domain onboarding priorities, and map Collibra capabilities to enterprise use cases",
        "Conducted tailored platform demonstrations and executive walkthroughs to showcase lineage, stewardship workflows, glossary alignment, and policy enforcement, driving stakeholder buy-in and 40% growth in platform adoption",
        "Designed and executed phased domain onboarding pilots and governance playbooks, accelerating time-to-value and reducing metadata ingestion cycle time by 30%",
        "Integrated Databricks Unity Catalog, Snowflake, and cloud platforms with Collibra, enabling cross-platform lineage visibility and enterprise metadata synchronization",
        "Developed executive dashboards linking governance metrics to business impact, improving transparency and contributing to a 50% reduction in redundant licensing costs",
        "Served as escalation point for platform-related technical inquiries, guiding engineering and analytics teams through lineage configuration, metadata modeling, and workflow design",
      ],
    },
    {
      title: "Senior Analyst – Data Governance & Security",
      company: "Pfizer Inc.",
      dates: "Feb 2018 – Aug 2021",
      bullets: [
        "Facilitated cross-functional requirements discovery between RPA engineering and business stakeholders, translating technical capabilities into scalable automation governance standards",
        "Delivered structured enablement sessions and technical walkthroughs to global delivery teams, reducing onboarding time by 30% and increasing automation adoption",
        "Analyzed 1,000+ automation exceptions to identify governance gaps, reducing root-cause investigation time by 40% and improving audit readiness",
        "Collaborated with corporate audit to align digital automation controls with enterprise compliance requirements, achieving satisfactory audit outcomes",
      ],
    },
    {
      title: "Decision Support – Data Analyst",
      company: "Pfizer Inc.",
      dates: "Sept 2015 – Feb 2018",
      bullets: [
        "Delivered enterprise financial and operational reporting using SAP BusinessObjects, partnering with business leaders to define KPIs, governance standards, and validation requirements",
        "Supported global operating model transitions by delivering in-person and virtual training, improving adoption of standardized reporting and governance practices",
      ],
    },
  ],
  education: [
    { degree: "Master of Science in Information Systems", institution: "University of Memphis" },
    { degree: "Graduate Certificate in Management of Artificial Intelligence", institution: "Stevens Institute of Technology" },
    { degree: "BS – Business Administration (IT Management)", institution: "Saint Louis University" },
  ],
  skills: [
    "Collibra DIC & Edge",
    "Databricks Unity Catalog",
    "Snowflake",
    "Tableau",
    "Cloud APIs",
    "RPA",
    "Jira",
    "Governance Operating Models",
    "Metadata Management",
    "Taxonomy & Standards",
    "Stewardship",
    "Lineage",
    "Data Quality",
    "SOPs",
    "Change Management",
    "Audit Readiness",
    "Cross-Functional Leadership",
  ],
  strengths: [
    "4 years hands-on experience with the Collibra platform at Pfizer — direct product knowledge most candidates won't have",
    "Deep data governance and compliance expertise (HIPAA/GDPR policy enforcement, metadata governance)",
    "Master's degree in MIS plus AI Certificate — exceeds bachelor's requirement and demonstrates continuous learning",
    "Cross-functional communication: bridged technical and business teams as BA, governance lead, and RPA liaison",
    "CSPO certification demonstrates structured approach to requirements gathering and stakeholder management",
    "Operations optimizer across every role — Finance (decision support reporting), Digital Automation (RPA governance), Data Enablement (Collibra platform). The constant: find the right tool, configure it correctly, and make it work for the people who depend on it",
    "The 'systems person' — personally and professionally, Kevin's instinct is to evaluate tools, set them up properly, and ensure they work for non-technical people. At Pfizer this meant configuring governance workflows for business SMEs; at home this means being the family's go-to for setting up smart home systems, troubleshooting tech, and finding the right app or platform for any need",
    "Pattern of trust-building through transparency — security teams, resistant BU heads, skeptical Alation users all came around because Kevin leads with honest, specific answers rather than selling. This is the same instinct Christina praised as aligned with Collibra's 'be respectfully direct' value",
    "Translates between technical and non-technical audiences naturally — same governance capability explained differently to a data engineer, a business SME, and an executive. This is the core CE skill, and Kevin has been doing it for a decade without calling it 'presales'",
  ],
  professionalIdentity: {
    coreDNA: "Kevin is an operations optimizer and systems thinker. Across every role at Pfizer — finance reporting, RPA governance, data enablement — the pattern is identical: evaluate the landscape, find the right tool or platform, configure it for the specific context, and then make sure the people who depend on it can actually use it without friction. This isn't just a job skill — it's a personal wiring. He's the person friends and family call when they need tech set up, a system chosen, or a workflow designed for their lives.",
    professionalPattern: {
      label: "The Operations Optimizer",
      description: "In every role, Kevin followed the same cycle: (1) Assess — understand the current state, identify gaps and inefficiencies; (2) Select — evaluate tools and approaches, pick the right one for the context; (3) Configure — set it up properly with the right architecture, permissions, and workflows; (4) Enable — train the people, build adoption, make it stick. This is the exact cycle a Customer Engineer follows: discovery → solution mapping → demo/POC → enablement.",
      pfizerExamples: [
        "Finance: Assessed reporting gaps → Selected SAP BusinessObjects → Configured dashboards → Trained business leaders",
        "RPA: Assessed automation governance gaps → Evaluated frameworks → Built governance standards → Enabled global delivery teams (30% faster onboarding)",
        "Collibra: Assessed BU governance maturity → Selected Collibra configurations per domain → Architected stewardship models → Drove 40% adoption growth",
      ],
    },
    personalTechPattern: {
      label: "The Family & Friends Tech Person",
      description: "Outside work, Kevin applies the same evaluate → configure → enable pattern to everything. He manages all the phones for his family — researching plans, setting up devices, troubleshooting issues. He builds computers from components, spec'ing parts and assembling them himself. He's figured out the process for buying directly from Chinese wholesale sites to get better prices on gear and components. For hobbies, it's the same pattern: when he got into tennis, he didn't just buy a racket — he researched stringing machines, learned to string his own rackets, found the right string types, sourced the right shoes. Same with biking — he researches the gear, finds the best value, learns the maintenance. The instinct is always: don't just consume, understand the whole system and optimize it.",
      whyItMatters: "This personal pattern is why Kevin's Pfizer stakeholders trusted him. He doesn't just deploy a tool and walk away — he understands the entire system end-to-end and makes sure it works for the actual humans using it. That's the difference between a technical implementer and someone with CE instincts. CEs don't just prove the product works technically; they make customers believe they can succeed with it. Kevin has been doing this his entire life — from Collibra governance architectures to stringing tennis rackets.",
    },
    selfReflectionQuestions: [
      {
        topic: "How I Learn",
        question: "What's your pattern for ramping on a new domain? At Pfizer you went from finance reporting → RPA governance → Collibra platform expert → AI certification. Walk through one of those transitions: what did you do in the first week, the first month? How did you go from knowing nothing to being the person others came to? This 'learning how you learn' story is powerful in interviews because it proves you can ramp fast on the CE role — they don't expect you to know everything on day one, they expect you to learn it quickly.",
      },
      {
        topic: "Moments of Trust",
        question: "Think of 2-3 specific moments where a skeptical person came around because of how you handled the conversation. The security team PII story is great — you walked them through exactly what Collibra's connector retrieves and resolved the blocker. Are there more? A resistant BU head who became an advocate? A data steward who didn't want to migrate from Alation but changed their mind? These moments prove 'builds trust through transparency' with concrete evidence, not just a claim.",
      },
      {
        topic: "Translating for Different Audiences",
        question: "Pick one Collibra capability — say, data lineage — and think about how you'd explain it to three different people: a data engineer (technical depth), a business analyst (practical workflow impact), and a VP (business outcome and risk reduction). How do you shift your vocabulary, your examples, your level of detail? Being able to articulate this consciously — not just do it instinctively — is what separates a good CE from a great one. In interviews, they may ask you to explain a technical concept to a non-technical audience on the spot.",
      },
    ],
  },
  growthAreas: [
    "No formal sales or customer engineering experience — role requires 2-3 years in Sales/CE/Sales Consulting",
    "No product demonstration experience — never presented Collibra to external prospects",
    "No presales qualification or discovery call experience",
    "Enterprise architecture breadth — experience is governance-focused, not spanning integration, quality, and architecture holistically",
  ],
  storyBank: [
    {
      id: "story_seed_1",
      title: "Collibra Adoption at Pfizer — 40% Growth",
      themes: ["Adoption", "Change Management", "Leadership"],
      situation: "When I took over the Collibra governance program at Pfizer, adoption was stagnant at roughly 600 users across 7 business units. Leadership was questioning the ROI of the platform investment, and several BU heads — including key stakeholders in R&D and commercial data — were resistant to any top-down mandate. The platform had been deployed but wasn't being used to its potential.",
      task: "Grow active adoption by at least 30% within 12 months and shift the platform's perception from 'compliance overhead' to 'self-service data enablement' — without a mandate from above and without additional headcount.",
      action: "I started by identifying 3 champion users in high-visibility teams, including the Global Product Development Insights Platform (GPD-IP) domain which handled clinical, regulatory, and safety data in R&D. I co-created 'quick win' governance workflows with each champion that saved their teams measurable time — specifically, we built a custom approval workflow in Collibra to track changes to business standard definitions, which improved traceability and let business users review historical changes without filing formal requests. I used those wins in executive roadshows to build momentum. I also redesigned onboarding from a 2-hour passive lecture to a 20-minute hands-on lab where participants left with actual governance assets configured. Finally, I launched a 'Data Governance Office Hours' Slack channel for real-time help.",
      result: "Grew platform adoption 40% YoY — from ~600 users to 1,000+ across 10+ BUs. Three BU heads who were initially resistant became vocal advocates. The Slack channel averaged 15+ questions per week and became the model for other platform teams. Pfizer's implementation was featured as a case study at Collibra's Data Citizens '24 conference, with my director Michael Pagliorola and Deloitte presenting our enterprise-wide data excellence strategy, including our custom real-time metadata replication, lineage, and data freshness capabilities.",
    },
    {
      id: "story_seed_2",
      title: "Alation to Collibra Migration — Zero Downtime, 50% Cost Reduction",
      themes: ["Technical", "Problem Solving", "Communication"],
      situation: "Pfizer had several business units — including the GPD-IP R&D domain that manages clinical trial, regulatory, and safety data — running on Alation for data cataloging, while the rest of the enterprise had standardized on Collibra. The dual-platform approach was creating metadata silos, duplicating governance effort, and inflating licensing costs. In 2024, leadership asked me to lead a formal platform assessment: should we migrate everyone to Collibra, stay with Alation, or maintain both?",
      task: "Conduct a rigorous platform evaluation, build the business case, and if Collibra won, execute the migration with zero downtime and no data loss — while maintaining trust with teams who had been on Alation for years.",
      action: "I partnered closely with Divye Goel, who managed the GPD-IP domain, to run the 2024 assessment. We evaluated both platforms across data lineage depth, UI accessibility for business users, mass metadata upload/download capabilities, and total cost of ownership. Collibra won decisively on three criteria: significantly deeper data lineage visualization, a more intuitive UI for non-technical business users, and mass upload/download features that matched how our R&D stewards actually worked with large metadata sets. Once the decision was made, I mapped every Alation asset type to its Collibra equivalent — catalog assets, glossary terms, lineage relationships — and built a parallel-run period where both systems stayed synchronized. I created domain-specific migration guides and held weekly office hours with each team's data stewards during the 3-month transition, resolving concerns in real time.",
      result: "Completed the migration in 2025 with zero downtime and zero data loss. The GPD-IP domain is now fully on Collibra with its complete domain hierarchy — Rulebooks, Codelists, Logical and Physical Data Dictionaries, Glossary, and Technology Asset Domain — all governed under a 5-role stewardship model. User satisfaction surveys post-migration showed 85% positive sentiment. Licensing consolidation contributed to a 50% cost reduction. Divye Goel, who co-led the assessment and managed the R&D domain, has offered to serve as a reference and confirmed all outcomes in writing.",
    },
    {
      id: "story_seed_3",
      title: "Governance Architecture — GPD-IP Domain Buildout",
      themes: ["Technical", "Data Governance", "Architecture"],
      situation: "The Global Product Development Insights Platform (GPD-IP) domain at Pfizer handled some of the most sensitive data in the company: clinical trial data, study and site data, operational data, regulatory submissions, and safety data within R&D. This domain had no formal governance structure in Collibra — no defined asset taxonomy, no stewardship model, no approval workflows. Any metadata change was informal and untraceable, which created audit risk and made it impossible to demonstrate data lineage to regulators.",
      task: "Design and implement a complete governance architecture for the GPD-IP domain in Collibra: asset taxonomy, stewardship model, workflows, and Physical-to-Logical Data Dictionary mapping — all audit-ready.",
      action: "I worked with Divye Goel and the GPD-IP domain team to map their data landscape into Collibra's asset model. We set up a full domain hierarchy: multiple Rulebooks to codify business rules across data types, Codelists for controlled vocabularies, a Logical Data Dictionary for business definitions, a Physical Data Dictionary for technical metadata, a Technology Asset Domain for systems and integrations, and a Glossary for shared terminology. I then configured a 5-role stewardship model — Business Owner, Community Manager, Reviewer, Subject Matter Expert, and Technical Steward — with inherited permissions so governance responsibilities cascaded appropriately through the domain hierarchy. The most impactful piece was a custom approval workflow we built to control changes to business standard definitions: any proposed change by an SME would trigger a review chain, create an audit trail, and allow business users to review the full history of a standard's definition over time.",
      result: "The GPD-IP domain went from zero formal governance to a fully configured Collibra implementation: complete asset taxonomy, 5-role stewardship model with inherited permissions, Physical-to-Logical Data Dictionary mappings, and a custom approval workflow for business standards. The audit trail capability became a key compliance tool. This architecture became the reference model for onboarding subsequent domains at Pfizer.",
    },
    {
      id: "story_seed_4",
      title: "Metadata Governance Cycle Time — 30% Reduction",
      themes: ["Technical", "Innovation", "Process Improvement"],
      situation: "The metadata governance review cycle at Pfizer averaged 14 business days from submission to approval — a bottleneck that frustrated data producers and delayed time-to-insight for analytics teams. The root cause was largely manual: routing approvals by email, chasing SMEs for sign-off, and no visibility into where a request was in the queue. This was especially painful for high-velocity domains like R&D where data standards changed frequently.",
      task: "Reduce the governance cycle time by at least 25% without compromising compliance rigor or the audit trail integrity that regulatory submissions required.",
      action: "I analyzed 6 months of governance requests and found that 60% of the delay was in manual routing and approval queues. I redesigned the Collibra stewardship workflows to auto-route based on metadata domain and asset type, leveraging the 5-role model (Business Owner, SME, Technical Steward, Reviewer, Community Manager) I had already configured for GPD-IP. I added a tiered review system: low-risk changes to Codelists and Glossary terms were auto-approved with notifications, while changes to Rulebooks, Logical Data Dictionary definitions, and Physical Data Dictionary mappings required human review. I also built automated notifications so SMEs received a single daily digest instead of ad-hoc email chains.",
      result: "Reduced average cycle time from 14 to under 10 business days — a 30% improvement. Auto-approval handled 40% of routine changes, freeing Technical Stewards and Subject Matter Experts to focus on complex governance decisions. Audit compliance remained at 100%. The workflow design was later referenced by the Deloitte team in Pfizer's Data Citizens '24 conference presentation as an example of governance at scale.",
    },
    {
      id: "story_seed_5",
      title: "Collibra vs. Alation Platform Evaluation — Making the Business Case",
      themes: ["Problem Solving", "Communication", "Technical"],
      situation: "In 2024, Pfizer's data leadership needed to make a definitive platform decision: standardize entirely on Collibra, stay split between Collibra and Alation, or consolidate on Alation. Total annual governance tooling spend exceeded $2M. Teams that had been on Alation — particularly the GPD-IP R&D domain — had years of institutional comfort with the tool and were skeptical of migration. This was a politically sensitive evaluation with real budget and operational consequences.",
      task: "Lead a rigorous, defensible platform assessment with a clear recommendation and a migration path the business could actually execute — not a generic analyst comparison but a head-to-head evaluation grounded in Pfizer's actual use cases.",
      action: "I partnered with Divye Goel (GPD-IP domain lead) to structure the evaluation around the workflows our teams actually used daily, not feature checklists. We tested both platforms against 4 critical criteria: (1) data lineage depth and visualization — could the platform trace a clinical data field from source system through transformations to reporting? (2) UI accessibility for non-technical business SMEs who needed to manage definitions without IT support; (3) mass upload/download for bulk metadata operations, which R&D teams did frequently during domain migrations; and (4) total cost of ownership including licensing, implementation, and ongoing maintenance. I built a feature-mapping matrix showing which Alation capabilities Collibra could absorb and which would require new workflows.",
      result: "Collibra won on all four criteria that mattered most to our users: significantly deeper lineage visualization (Alation's was surface-level by comparison), a more intuitive UI that business SMEs could navigate without training, mass metadata upload/download that matched R&D's bulk-operation workflows, and a lower long-term TCO once migration costs were amortized. The recommendation was accepted by leadership. The migration was executed in 2025, resulting in a 50% licensing cost reduction. Divye Goel confirmed the assessment outcomes and has offered a reference if needed.",
    },
    {
      id: "story_seed_6",
      title: "About Me — Career Arc & CE Bridge",
      themes: ["About Me", "Career Arc", "CE Bridge"],
      situation: "I got my degree in Management Information Systems — a deliberately general degree that opened doors across business functions. Most of my career has been at Pfizer, where I ended up doing operations work across multiple departments: finance, digital automation, and data enablement. Each role was different, but the through line was always the same — using analytical skills and the right tools to improve how teams operated.",
      task: "Build a career that connects deep technical platform knowledge with cross-functional business impact, positioning for a transition from internal platform champion to customer-facing Customer Engineer at the company that built the product I deployed.",
      action: "I started in finance on the decision support side — using data to help finance leaders make better decisions. From there I moved into a digital automation team doing RPA, and eventually landed in data enablement, specifically working on Collibra implementations across different business units. At each step, the pattern was the same: find the right tool for the problem, set it up properly, and make sure the people using it could actually get value from it. The Collibra work opened my eyes to how central data trust is becoming — especially as organizations start feeding data into AI. If the data isn't governed and certified, you can't trust what the AI gives back. I saw that firsthand.",
      result: "10 years at Pfizer spanning three distinct operational domains, culminating in leading one of the largest single-enterprise Collibra deployments (10+ BUs, 1,000+ users). Now transitioning to take that implementation experience to the customer side — helping organizations get there faster than we did. The CE role at Collibra is the natural next step: doing at scale, for the company that built the product, what I did internally for one of their biggest customers.",
    },
  ],
}

// ─── 2. Collibra Company ─────────────────────────────────────────

export const collibraCompany = {
  name: "Collibra",
  companyProfile: {
    summary: "Collibra is a late-stage private SaaS unicorn (valued at $5.25B) that builds the leading enterprise platform for data and AI governance. Founded in May 2008 in Brussels by Felix Van de Maele and Stijn Christiaens (based on semantic web research at VU Brussels), they now serve 1,000+ enterprise customers globally — including 100+ Fortune 500 companies like Toyota, Heineken, BNY Mellon, Siemens, McDonald's, and Pfizer — from dual headquarters in New York and Brussels. Approximately 1,000–1,100 employees. Total funding: $596M across 9 rounds (Series A in 2012 through Series G at $250M in Nov 2021). Key investors: Sequoia Capital Global Equities, Sofina, CapitalG (Alphabet), Snowflake (strategic), ICONIQ, Tiger Global. Forbes Cloud 100 #56 (2025). Customers report $9.1M average annual benefit and 484% three-year ROI (Forrester TEI study).",
    mission: "Collibra's mission is 'Data Confidence' — enabling every organization to trust the data and AI they use. They position themselves as the leader in unified governance for data and AI, making trusted, AI-ready data accessible to all 'Data Citizens' across an organization. The strategic pivot since 2024 has been from 'data governance vendor' to 'unified governance platform for data AND AI' — covering structured data, unstructured data, and AI model governance under one roof.",
    productsServices: "The Collibra Platform (built on a Semantic Knowledge Graph) includes 9 core modules: Data Governance (Business Glossary, Policy Manager, Stewardship, no-code Workflow Designer), Data Catalog (metadata harvesting, profiling, classification, AI Copilot), Data Lineage (end-to-end technical and business lineage, supports OpenLineage), Data Quality & Observability (automated rule creation, anomaly detection), Data Privacy (GDPR/CCPA compliance, RoPA, PII discovery, DSAR workflows), AI Governance (model/agent registries, risk assessments, EU AI Act compliance templates — GA 2024), Data Marketplace (consumer portal for data product discovery), Unstructured AI (via Deasy Labs acquisition, GA Oct 2025 — discovers and enriches PDFs, transcripts, emails for GenAI workflows), and Data Access Governance (via Raito acquisition, June 2025 — controls access for users and AI agents). Also: Collibra Everywhere browser extension, Collibra Edge agent for hybrid deployment. 100+ native integrations with Databricks, Snowflake, BigQuery, SAP, Azure, Tableau, Salesforce, dbt, Airflow, and more. Enterprise pricing: base starts ~$170K/year, typical deals range $500K–$2M+ annually.",
    culture: "Collibra brands itself around the 'Data Citizen' concept — democratizing data access for everyone. They received Great Place to Work certification in 2022. Glassdoor reviews (3.2/5 stars) highlight smart colleagues, a strong product, and decent compensation as positives. However, a ~7% workforce reduction in 2022 and subsequent understaffing have impacted the culture — recent reviews cite 'badly understaffed,' management friction, and multiple restructurings. April 2025 cultural framework reset suggests leadership is aware and attempting a course correction. The company is transitioning from hypergrowth mode to efficient, execution-focused growth. Typical of late-stage unicorns pushing toward profitability.",
    keyFacts: [
      "Named Leader in the Gartner Magic Quadrant for Data & Analytics Governance Platforms in both 2025 and 2026 — the only vendor to hold this position since the category was created",
      "Total funding: $596M across 9 rounds. Investors include Sequoia Capital Global Equities, Sofina, CapitalG (Alphabet), Snowflake (strategic investment in 2022), ICONIQ, Tiger Global. Reached unicorn status in Jan 2019",
      "Data governance market sized at $3.8B–$5.1B (2025), growing at 16–20% CAGR to ~$16B by 2032. Collibra is positioned to capture significant share as AI governance demand accelerates",
      "Acquired Deasy Labs (July 2025) to extend governance to unstructured data for GenAI, and Raito (June 2025) for data access management — signaling aggressive TAM expansion beyond traditional governance",
      "MAJOR competitive shift: Salesforce acquired Informatica for $8B (closed Nov 2025). This reshapes the legacy competitive landscape — Informatica may become Salesforce-centric, potentially opening enterprise accounts for Collibra",
      "Atlan moved from Visionary to Leader in the 2026 Gartner MQ in just one year — the fastest-growing AI-native challenger with a metadata lakehouse architecture and faster time-to-value",
      "Launched MCP Server (Nov 2025) — first governance vendor to ship a Model Context Protocol server, letting AI agents (Claude, ChatGPT) access governed metadata. Also: Data Contracts, Semantic Mapping, Data Recommender all shipped Nov 2025",
      "First data governance vendor to achieve ISO 42001 AI management system certification and launch EU AI Act compliance tooling (January 2025)",
      "Named Google Cloud Data & Analytics Partner of the Year for Governance (2025) and Partner of the Year by both Databricks and Snowflake (2024). Key GSI partners: Deloitte (Global SI of the Year), Accenture, PwC, EY",
      "Customers report $9.1M average annual benefit and 484% three-year ROI (Forrester TEI study). Key verticals: financial services (strongest), healthcare, retail/CPG, energy, government",
    ],
    interviewTips: [
      "Reference your direct experience with the Collibra platform at Pfizer — you're one of the rare candidates who has been a power user of the product you'd be selling. Mention specific features you used (metadata governance, workflows, data cataloging, lineage, stewardship models)",
      "Frame it as 'Unified Governance for Data AND AI' — not just data governance. Mention the Deasy Labs acquisition (unstructured data is 90% of enterprise data) and the MCP Server (agentic AI governance). This shows you track their late-2025 roadmap",
      "Bring up the Gartner Magic Quadrant Leader position, but also acknowledge Atlan's rise to Leader — shows you have an honest competitive awareness, not just Collibra-centric thinking. Position Collibra as the only choice for complex, federated, enterprise-wide workflow automation and regulatory compliance",
      "The Salesforce–Informatica acquisition ($8B, Nov 2025) is the biggest competitive shift in years. Frame it as an opportunity: 'Informatica customers who don't want to be locked into Salesforce's ecosystem now have a reason to evaluate Collibra'",
      "Reference the ISO 42001 certification and EU AI Act tooling when discussing AI governance — this is a major competitive differentiator. Know the EU AI Act risk tiers: unacceptable, high, limited, minimal",
      "Use the phrase 'Data Citizens' and 'Data Confidence' naturally in conversation — these are core to Collibra's identity. Build a 'Common Business Language' (like Heineken did across 80 countries and 85K employees)",
      "In the Partner/AVP round, emphasize the GSI ecosystem (Deloitte, Accenture, PwC) — Collibra's $500K–$2M+ deals are rarely closed without partner involvement. Show you understand enterprise deal mechanics",
      "Know the customer ROI story: $9.1M average annual benefit, 484% three-year ROI. Heineken achieved 7x productivity gain across 80 countries. McDonald's did a 60-day Rapid Start deployment across 95 markets including AI governance for connected kitchens",
    ],
  },
}

// ─── 3. Collibra CE Role ─────────────────────────────────────────

const JOB_DESCRIPTION_RAW = `Customer Engineer - Remote, Central USA

Joining Collibra's Customer Engineering team

We're shaping the way some of the largest organizations in the world manage data by helping customers connect the right data and insights for all Data Citizens. We are building a team of exceptional people to help us deliver on that promise. As a Customer Engineer, you are the guiding force behind bringing Collibra's product and vision to customers and prospects. Customer Engineers establish knowledgeable and trusted relationships from day one and serve as thoughtful technical advisors. As a Customer Engineer at Collibra, you will be responsible for the technical relationship with the customer throughout the entire customer journey both pre- and post-sale. You will fill an essential and highly respected role in the sales organization at Collibra.

Customer Engineers at Collibra are responsible for:
- Mapping solutions to value across large and dynamic organizations, bridging both business and technical requirements.
- Participating in discovery and driving qualification of new opportunities.
- Preparing and conducting product demonstrations, highlighting how Collibra's Platform can support our Enterprise customer's needs.
- Advising and supporting customers' technical stakeholders to accelerate Collibra adoption and value realization, i.e. be the primary point of contact for technical and product related queries.
- Identifying, evaluating, recommending, and executing value-based workshops and proof of concepts/values.
- Building and maintaining strong relationships by acting as a reliable technical subject matter expert for existing customers. This is to ensure product adoption, increase customer satisfaction, and drive renewals.

You have:
- 2-3 years in a Sales or Customer Engineering or Sales Consulting role.
- Good understanding and interest in various data management areas, such as cataloging, governance, integration, data quality, data and/or enterprise architecture.
- Experience in the data space is required.
- A bachelor's degree or equivalent related working experience is required.
- This position is not eligible for visa sponsorship.

You are:
- An effective communicator.
- A sales- and customer-focused self-starter with enthusiasm, flexibility, motivation and curiosity.
- A trusted partner to customers, helping them solve complex challenges through thoughtful technical solutions.
- A collaborative team-player who enjoys working across teams to drive results.
- Confident in dispensing knowledge to a highly skilled and experienced audience.
- Excited about continuous learning and development, and demonstrates the ability to thoroughly understand business needs and align them with technical capabilities.
- Willing to travel up to 30% within the region.

Compensation for this role is a base salary of $140,000 - $175,000 and is eligible for additional commission-based compensation. Additionally, this position is eligible for bonus potential, equity for eligible roles, a Flex Fund monthly stipend, pension/401k plans, and health benefits, all subject to eligibility requirements.

Measures of success:
- Within your first month, you will gain a solid foundation by completing onboarding, understanding Collibra's platform and value propositions, and beginning to build relationships with your assigned Account Executives and regional team members.
- Within your third month, you will be actively contributing to customer and prospect engagements—leading discovery sessions, conducting product demonstrations, and supporting ongoing customer conversations. You will be ramping into your assigned territory and starting to build trusted relationships with key technical stakeholders.
- Within your fifth month, you will be independently managing your pre-sale technical responsibilities within your assigned territory—from discovery through proof of concepts—while also proactively advising existing customers to accelerate adoption and value realization. You'll be a recognized contributor within the team and a trusted technical partner to your customers.

Benefits at Collibra:
Collibra recognizes and values that everyone is different. We offer a Flex Fund stipend your monthly allowance to help pay for things that matter most to you. Whether it is wellness, pet care, childcare, or something else, you decide! In addition to other standard benefits, a sampling of what we provide includes 401(k) with employer matching, comprehensive health coverage, flexible PTO, and more.`

export const collibraRole = {
  roleTitle: "Customer Engineer",
  jobDescriptionRaw: JOB_DESCRIPTION_RAW,
  resumeRaw: RESUME_RAW,
  requirements: [
    { skill: "2-3 years in Sales/Customer Engineering/Sales Consulting", priority: "Required" },
    { skill: "Data management knowledge (cataloging, governance, integration, quality)", priority: "High" },
    { skill: "Experience in the data space", priority: "Required" },
    { skill: "Product demonstration and technical advisory skills", priority: "High" },
    { skill: "Solution mapping across business and technical requirements", priority: "High" },
    { skill: "Proof of concept/value workshop execution", priority: "High" },
    { skill: "Effective communicator to highly skilled audiences", priority: "High" },
    { skill: "Bachelor's degree or equivalent experience", priority: "Required" },
    { skill: "Willingness to travel up to 30%", priority: "Medium" },
  ],
  responsibilities: [
    "Mapping solutions to value across large and dynamic organizations, bridging both business and technical requirements",
    "Participating in discovery and driving qualification of new opportunities",
    "Preparing and conducting product demonstrations highlighting how Collibra's Platform supports enterprise customer needs",
    "Advising and supporting customers' technical stakeholders to accelerate Collibra adoption and value realization",
    "Identifying, evaluating, recommending, and executing value-based workshops and proof of concepts/values",
    "Building and maintaining strong relationships as a reliable technical subject matter expert for existing customers",
    "Serving as the primary point of contact for technical and product-related queries throughout the entire customer journey",
  ],
  gapAnalysis: {
    strongMatch: [
      "4 years hands-on experience with the Collibra platform at Pfizer — direct product knowledge that most candidates won't have",
      "Deep data governance and compliance expertise (HIPAA/GDPR policy enforcement, metadata governance)",
      "Master's degree in MIS plus AI Certificate — exceeds bachelor's requirement and demonstrates continuous learning",
      "Cross-functional communication: bridged technical and business teams as BA, governance lead, and RPA liaison at Pfizer",
      "CSPO certification demonstrates structured approach to requirements gathering and stakeholder management",
    ],
    partialMatch: [
      "Customer-facing experience — Kevin led internal stakeholders (developers, PMs, business partners) but not external customers/prospects in a sales context",
      "Data cataloging and data quality — governed metadata in Collibra but may not have deep hands-on catalog configuration or DQ rule authoring experience",
      "Solution selling — has not formally been in a Sales Engineering or presales role; would need to develop demo and POC delivery skills",
      "Workshop facilitation — coordinated governance rollouts but not structured customer workshops or proof-of-value exercises",
    ],
    gap: [
      "No formal sales or customer engineering experience — the role requires 2-3 years in a Sales/CE/Sales Consulting role",
      "No product demonstration experience — never presented Collibra (or any product) to external prospects",
      "No presales qualification or discovery call experience",
      "No enterprise architecture breadth — experience is governance-focused, not spanning integration, quality, and architecture holistically",
      "Travel requirement (30%) — current role appears fully remote/office-based with no travel component mentioned",
    ],
  },
  interviewNarratives: {
    aboutMe: {
      version: "V4 — Current Best (75 seconds spoken)",
      text: "I got my degree in Management Information Systems, which is a pretty general degree — and that's actually what shaped my career. It opened doors across a lot of different functions, and most of that career has been at Pfizer, where I ended up doing operations work across multiple departments.\n\nI started in finance on the decision support side — using data to help finance leaders make better decisions. From there I moved into a digital automation team doing RPA, and eventually landed in data enablement, specifically working on Collibra implementations across different business units. Different departments, but the through line was always the same: using analytical skills to improve how teams operated.\n\nWhat the Collibra work opened my eyes to was how central data trust is becoming — especially as organizations start feeding data into AI. If the data isn't governed and certified, you can't trust what the AI gives back. I saw that firsthand. And what I want to do now is take that implementation experience and bring it to the customer side — helping organizations get there faster than we did.",
      notes: "Opens with MIS degree as narrative setup — explains how you ended up across departments without sounding scattered. 'Operations across multiple departments' connects Finance → RPA → Data Enablement. AI angle woven into close. Ends with strong CE bridge.",
    },
    fullStory: {
      version: "Technical Deep Dive (when asked to elaborate)",
      text: "My background is in enterprise data platform implementation. At Pfizer, I was part of the team responsible for deploying Collibra across business units — specifically working on the technical integration side, connecting data sources like Snowflake and Amazon S3 into the Collibra platform.\n\nWhat that actually meant in practice was navigating three things at once: the technical requirements of the Collibra platform, the security constraints of the business's data infrastructure, and the needs of the end users who were going to govern that data.\n\nOn the technical side, I worked with the data platform teams to establish the connections — Snowflake through JDBC, Amazon S3 through Collibra's metadata API connector. I made sure the right access protocols were in place so the metadata ingestion could run cleanly.\n\nOn the security side, I regularly sat with security teams who had legitimate concerns about what Collibra was accessing. One example: when connecting Amazon S3 for the People Experience team, the data security team was concerned about PII exposure. I walked them through exactly what Collibra's metadata connector retrieves — table names, column names, schema names, nothing from inside the rows — and that resolved the blocker.\n\nOn the stakeholder side, I worked across teams with very different contexts — HR operations, data engineering, cloud platform teams, enterprise data platform teams — and each one had different concerns and different levels of technical fluency. Learning how to translate the same technical fact into different conversations was a big part of the job.\n\nWhat I want to bring to a Customer Engineer role is that firsthand understanding of what the customer experience actually feels like. I know where the confusion happens. I know what questions the security team will ask. I know why implementation stalls. I want to be on the other side of that now — the person who shows up and makes it go faster.",
      notes: "Use when asked to go deeper on your Collibra experience. Covers technical (JDBC, REST APIs), security (PII resolution), and stakeholder management. The three-things-at-once framing is strong.",
    },
    interviewReadyAnswers: [
      { question: "Walk me through your experience with Collibra.", answer: "I was on the implementation side at Pfizer, working on technical deployment — specifically integrating data sources into Collibra and coordinating the access and security work needed to make that happen. I worked with Snowflake, Amazon S3, and HR platforms, and I interfaced with multiple business teams across the enterprise. My focus was getting the pipeline established so that metadata could flow into Collibra and the business teams could start governing their data." },
      { question: "What makes you a good fit for a Customer Engineer role?", answer: "I've been the customer. I know what the implementation experience feels like from the inside — the security reviews, the cross-team coordination, the moments where a POC stalls because no one knows who owns the Snowflake access. I want to be the CE who already anticipates those moments and has a plan for them before they become blockers." },
      { question: "What do you know about Collibra's product?", answer: "Collibra is an enterprise data intelligence platform. The core value is Data Trust — it doesn't store data, it governs the meaning, ownership, lineage, and policy of data across an organization's systems. It connects technical metadata from sources like Snowflake, S3, and Databricks into a single platform where business users can discover datasets, understand data lineage, certify data quality, and assign ownership. The AI angle is increasingly important: trusted, governed data is the prerequisite for any reliable AI output." },
      { question: "What's a technical challenge you solved?", answer: "When connecting Amazon S3 for the People Experience Operations team at Pfizer, the data security team blocked the integration due to concerns about PII. I reviewed Collibra's documentation on what the metadata connector actually retrieves and walked the security team through it in detail — table names, column names, schema names only. No row-level data, no personally identifiable information. Once they understood the scope of access, they approved it and the integration moved forward." },
      { question: "Tell me about working with cross-functional teams.", answer: "At Pfizer, a single integration touched multiple teams: the business team that owned the data, the platform team that managed the warehouse, the security team that controlled access, and our internal Collibra implementation team. Each group had different knowledge, different concerns, and different approval processes. My job was to be the person who understood enough of each world to move the conversation forward — I wasn't the deepest technical expert in any one of those rooms, but I could bridge between them." },
    ],
    emphasisStrategy: [
      { topic: "Implementation / technical deployment", approach: "lead", notes: "This is your real experience. Lead with it." },
      { topic: "Cross-functional coordination", approach: "lead", notes: "Name-drop teams: People Experience Operations, Cloud Platform Team, Enterprise Data Platform Team, Data Security Team. Tell the Amazon S3 PII story." },
      { topic: "Security and access management", approach: "lead", notes: "You've done this hands-on — coordinating JDBC access, REST API authorization, walking security teams through metadata scope." },
      { topic: "Collibra platform knowledge", approach: "honest", notes: "Solid on governance concepts and metadata. Be honest about not doing glossary/mapping work yourself — the business teams handled that." },
      { topic: "Pre-sales / demos", approach: "bridge", notes: "Frame as: 'I've seen what customers need — I want to build on that.' Don't claim demo experience you don't have." },
      { topic: "Sales experience", approach: "deflect", notes: "Don't claim it. Position the CE role as where your technical empathy turns into customer value." },
    ],
  },
  technicalStudyGuide: [
    {
      domain: "Collibra Platform Architecture",
      depth: "deep",
      kevinLevel: "strong",
      topics: [
        { topic: "Semantic Knowledge Graph — Collibra's core data model (asset types, domains, communities, attributes, relations)", status: "know", notes: "Kevin used this daily at Pfizer. Review developer.collibra.com to refresh on the full type hierarchy." },
        { topic: "Workflow Engine (BPMN) — how stewardship, approval, and policy enforcement workflows are configured and triggered", status: "know", notes: "Built custom approval workflows at Pfizer for business standard definitions. Can speak to this from practitioner experience." },
        { topic: "REST & GraphQL APIs — Core API, Import API, Search API, Catalog API, Data Quality API", status: "study", notes: "You coordinated REST API connections for Amazon S3 metadata ingestion and JDBC for Snowflake at Pfizer — but your team handled the actual connector configuration. Know the API structure well enough to explain how integrations work: JDBC for databases (runs SQL against metadata tables), REST API for cloud platforms (S3, Databricks Unity Catalog). Study developer.collibra.com for the full reference." },
        { topic: "Collibra Edge — on-premise metadata ingestion agent for hybrid deployments", status: "study", notes: "Edge lets cloud Collibra reach systems inside a corporate firewall. You may not have used Edge at Pfizer but know the architecture: Edge sits inside the firewall, establishes an outbound connection to cloud Collibra, so no inbound firewall rules needed. CEs need to know when to recommend Edge vs. cloud-native ingestion." },
        { topic: "Active Metadata Graph — what makes Collibra's catalog 'active' vs. a passive data dictionary (Forrester's terminology)", status: "study", notes: "Understand the distinction: active metadata automates workflows, triggers alerts, and drives policy enforcement. Passive catalogs are just searchable inventories." },
      ],
    },
    {
      domain: "Data Catalog & Lineage",
      depth: "deep",
      kevinLevel: "strong",
      topics: [
        { topic: "Data Catalog — metadata harvesting, profiling, classification, AI Copilot search", status: "know", notes: "Core Pfizer experience. Be ready to explain how cataloging works for both technical metadata (schemas, tables) and business metadata (glossary terms, policies)." },
        { topic: "Business Glossary — creating a 'common business language' across the enterprise", status: "know", notes: "Important nuance: at Pfizer, the business teams owned glossary definitions — you didn't set up business glossary mappings yourself (that's the business's job, they know their own tables and definitions). But you understand the concept deeply and facilitated the process. Reference Heineken's 80-country glossary standardization as a customer story." },
        { topic: "Data Lineage — end-to-end technical and business lineage, column-level tracing, OpenLineage support", status: "know", notes: "Integrated Databricks Unity Catalog and Snowflake lineage at Pfizer. Can speak to cross-platform lineage visibility." },
        { topic: "Lineage harvesting — how Collibra discovers lineage from BI tools (Tableau, Power BI), ETL (dbt, Airflow, AWS Glue), and databases", status: "study", notes: "Kevin's experience was with Databricks/Snowflake. Study how lineage is harvested from the full connector ecosystem to answer broader questions." },
      ],
    },
    {
      domain: "Data Governance & Stewardship",
      depth: "deep",
      kevinLevel: "strong",
      topics: [
        { topic: "Policy Manager — defining and enforcing data governance policies across the organization", status: "know", notes: "Core competency from Pfizer. Built policy enforcement workflows, stewardship models, and approval chains." },
        { topic: "Stewardship model design — roles (Business Owner, SME, Reviewer, Technical Steward, Community Manager), inherited permissions", status: "know", notes: "Designed the 5-role stewardship model for GPD-IP at Pfizer. This is Kevin's strongest technical talking point." },
        { topic: "Metadata vs. data distinction — Collibra pulls metadata only (structure), NOT actual data rows. PII is not a concern at the ingestion layer", status: "know", notes: "Critical for security conversations. You've done this: walked Pfizer's Data Security Team through exactly what Collibra retrieves (table names, column names, schema names, data types, ownership info) vs. what it does NOT retrieve (values inside columns, actual PII). This distinction resolves the most common security blocker in implementations." },
        { topic: "Governance operating model maturity — how to assess a customer's governance maturity and build a roadmap", status: "know", notes: "Ran maturity assessments at Pfizer across 10+ BUs. Frame this as consultative discovery — exactly what CEs do with customers." },
        { topic: "Governance boards — how to set up and participate in cross-functional governance councils", status: "know", notes: "Participated in governance boards at Pfizer. Senior CE job posting explicitly lists this as a requirement." },
      ],
    },
    {
      domain: "AI Governance",
      depth: "conceptual",
      kevinLevel: "gap",
      topics: [
        { topic: "AI model catalog — registering, documenting, and tracking AI/ML models in Collibra", status: "study", notes: "New module (GA 2024). Study productresources.collibra.com/ai-governance. Know what model metadata is tracked: owner, training data, performance metrics, risk tier." },
        { topic: "EU AI Act compliance — risk-tier classification (unacceptable, high, limited, minimal), compliance requirements, Collibra's assessment templates", status: "study", notes: "Critical differentiator. Know the 4 risk tiers and which AI use cases fall into each. Collibra's EU AI Act Assessment Tool automates classification." },
        { topic: "ISO 42001 — AI Management Systems certification. What it certifies, why CISOs care, how Collibra achieved it", status: "study", notes: "Collibra was first data governance vendor to achieve this (Jan 2025). Know the headline: it proves Collibra practices what it preaches on AI governance." },
        { topic: "Agent governance / MCP Server — how AI agents (Claude, ChatGPT) access governed metadata via the Model Context Protocol", status: "study", notes: "Shipped Nov 2025. First governance vendor to offer this. Understand the use case: AI agents query Collibra for governed context instead of hallucinating. Available in Databricks Marketplace." },
        { topic: "Bias/drift monitoring — how Collibra tracks model performance degradation and data drift over time", status: "study", notes: "Understand conceptually. CEs don't need to configure this but need to position it against MLOps tools (MLflow, W&B) — Collibra is governance-layer, not training-layer." },
      ],
    },
    {
      domain: "Data Quality & Observability",
      depth: "conceptual",
      kevinLevel: "gap",
      topics: [
        { topic: "Data Quality rules — how to define, test, and enforce quality rules in Collibra", status: "study", notes: "New unified DQ module (Q4 2024). Study the difference between Collibra DQ and Classic DQ. Know the key quality dimensions: completeness, accuracy, timeliness, consistency, uniqueness." },
        { topic: "Anomaly detection — automated alerts when data quality degrades or patterns change", status: "study", notes: "Understand conceptually. CEs position this to data engineering teams who need proactive monitoring, not reactive firefighting." },
        { topic: "DQ-to-governance linkage — how quality rules tie back to business policies and stewardship workflows", status: "study", notes: "This is Collibra's differentiation over standalone DQ tools (Talend, Great Expectations). Quality issues trigger governance workflows — a connected system, not a point solution." },
      ],
    },
    {
      domain: "Data Privacy & Compliance",
      depth: "conceptual",
      kevinLevel: "partial",
      topics: [
        { topic: "GDPR/CCPA compliance automation — Records of Processing Activities (RoPA), Data Protection Impact Assessments (DPIA)", status: "study", notes: "Know what RoPA and DPIA are and how Collibra automates them. CISO persona cares deeply about this." },
        { topic: "PII discovery and classification — how Collibra identifies sensitive data across the estate", status: "study", notes: "Automated scanning + classification rules. Understand the difference between discovery (finding PII) and protection (masking/encrypting PII)." },
        { topic: "Collibra Protect — data masking and access governance. Distinct from the governance catalog", status: "study", notes: "Protect is the access control layer — dynamic data masking, role-based access policies. Enhanced by the Raito acquisition (June 2025) for AI agent access governance." },
        { topic: "DSAR workflows — Data Subject Access Requests, how Collibra automates the right-to-be-forgotten process", status: "study", notes: "Understand the workflow: subject requests deletion → Collibra traces all systems containing their data via lineage → stewardship workflow routes to each system owner for action." },
      ],
    },
    {
      domain: "Integration Ecosystem",
      depth: "broad",
      kevinLevel: "partial",
      topics: [
        { topic: "Snowflake integration — JDBC connection, SQL queries against metadata tables, lineage", status: "know", notes: "Coordinated JDBC access and read-only authorization with the Enterprise Data Platform Team at Pfizer. Know that Collibra connects via JDBC and runs SQL queries against Snowflake's metadata tables — it pulls table names, column names, schemas, data types, not actual data rows." },
        { topic: "Databricks Unity Catalog — REST API integration, complementary positioning, lineage interop (enhanced Jan 2025)", status: "know", notes: "Integrated at Pfizer via REST API (Unity Catalog). Key competitive angle: Unity Catalog is Databricks-native, Collibra is enterprise-wide." },
        { topic: "Amazon S3 — REST API + metadata ingestion connector, coordinating security access", status: "know", notes: "Direct experience: coordinated with the Cloud Platform Team for S3 authorization. Key story: resolved the PII concern with the Data Security Team by explaining that Collibra's metadata connector retrieves table/column/schema names only — no row-level data. This is your strongest technical-credibility story." },
        { topic: "Cloud platforms — AWS (Glue, Redshift), Azure (Synapse, ADLS, Purview interop), GCP (BigQuery)", status: "study", notes: "Know the major connectors at headline level. CEs don't configure them but need to say 'yes, we integrate with X' with confidence." },
        { topic: "BI tools — Tableau, Power BI, Looker lineage harvesting", status: "study", notes: "Understand that Collibra traces lineage from BI reports back to source systems. This is high-value for data analysts who want to know 'where does this number come from?'" },
        { topic: "SAP integration — S/4HANA, BTP. Ralf posts about SAP frequently", status: "study", notes: "Collibra won SAP Global Tech Partner of the Year. Kevin doesn't need SAP depth but should know the partnership exists and that Collibra governs SAP metadata." },
      ],
    },
    {
      domain: "Demo & Presentation Skills",
      depth: "applied",
      kevinLevel: "gap",
      topics: [
        { topic: "Demo narrative structure — problem → capability → outcome. Lead with pain, not product", status: "study", notes: "Watch the YouTube demos playlist. Study how Collibra's own team structures the narrative. Your demo is 50% of the grade." },
        { topic: "Mixed audience communication — demoing to business and technical stakeholders simultaneously", status: "study", notes: "The literally documented Glassdoor question: 'Can you effectively demo software to a mixed audience?' Practice shifting between business value and technical architecture mid-sentence." },
        { topic: "Live Q&A handling — fielding curveball questions during or after a demo without losing composure", status: "study", notes: "Panel will throw objections during your demo. Practice the three-step pattern: acknowledge → ask for context → reframe with a Collibra capability." },
        { topic: "Data governance diagramming — whiteboard/diagram exercises drawing governance architectures", status: "study", notes: "Confirmed in Glassdoor panel interviews. Practice drawing: data sources → catalog → lineage → governance policies → quality rules → business users. Use the GPD-IP domain architecture you built at Pfizer." },
      ],
    },
    {
      domain: "Sales Methodology & Commercial Instincts",
      depth: "conceptual",
      kevinLevel: "gap",
      topics: [
        { topic: "MEDDPICC framework — Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition", status: "study", notes: "Enterprise sales standard. CEs own the technical side of MEDDPICC — especially Decision Criteria, Identify Pain, and Competition. Structure all deal stories around these pillars." },
        { topic: "Discovery call structure — open questions, qualifying pain, stakeholder mapping, next-step determination", status: "study", notes: "Practice a 30-minute discovery framework: pain → current state → stakeholder map → success criteria → next steps." },
        { topic: "POC/POV execution — how to scope, run, and close a proof of concept/proof of value", status: "study", notes: "Explicitly listed as a CE responsibility. Understand: define success criteria upfront, time-box to 4-6 weeks, involve the champion, document outcomes for economic buyer." },
        { topic: "Land-and-expand motion — how CEs drive initial deployment into broader platform adoption", status: "study", notes: "Kevin literally did this at Pfizer: started with 3 BUs, expanded to 10+. Frame your Pfizer story in land-and-expand language." },
        { topic: "Value realization — helping customers achieve measurable business outcomes, not just technical deployment", status: "study", notes: "The CE job posting uses this phrase explicitly. Prepare 2-3 Pfizer examples: 40% adoption growth, 30% cycle time reduction, 50% licensing cost savings." },
      ],
    },
  ],
  questionsToAsk: [
    {
      round: "Hiring Manager (Ralf)",
      why: "Show you're evaluating Collibra as seriously as they're evaluating you. Ralf came from CS and values consultative, thoughtful questions. Ask about team dynamics, what success looks like, and where the CE org is heading.",
      questions: [
        { question: "You made the transition from Customer Success to CE leadership — what's the biggest difference in how the two functions drive customer value?", tip: "This mirrors his own journey and signals you've done your research. It also gives you intel on how he thinks about the CE-to-CS handoff." },
        { question: "What does the first 90 days look like for a new CE on your team? What would make you confident I'm ramping successfully?", tip: "Shows you're already thinking about execution, not just getting the offer. Ralf will appreciate the specificity — it's how he'd evaluate a customer onboarding." },
        { question: "How does the CE team interact with Product? When a CE identifies a feature gap during a customer engagement, what's the feedback loop?", tip: "This signals you're thinking beyond sales — you want to influence the product. It also reveals whether Collibra has a mature CE-to-Product pathway." },
        { question: "What's the biggest challenge CEs on your team face right now — is it competitive pressure, deal complexity, customer maturity, or something else?", tip: "Open-ended question that reveals the real state of the team. Listen carefully — the answer tells you what to prepare for and whether the challenges energize you." },
        { question: "Collibra has made aggressive moves this year — Deasy Labs, Raito, the MCP server, ISO 42001. How is the CE team adapting to position these new capabilities in customer conversations?", tip: "Proves you track Collibra's strategy and think about how product changes affect field execution. This is exactly the kind of question a strong CE candidate asks." },
      ],
    },
    {
      round: "Peer CE",
      why: "The peer interview is about fit and authenticity. Christina said this is 'the most important step' — they're checking if you'd be a good teammate. Ask honest, practical questions about daily life.",
      questions: [
        { question: "Walk me through a typical week — how do you split time between pre-sale work (discovery, demos, POCs) and post-sale work (adoption, renewals)?", tip: "Shows you understand the hybrid nature of Collibra's CE role. The 70/30 or 60/40 split will tell you what the job actually feels like day-to-day." },
        { question: "What's the most common objection you hear from customers, and how has your approach to handling it evolved?", tip: "Peer CEs love talking about craft. This gives you real competitive intel and shows you're already thinking about objection handling as a skill to develop." },
        { question: "What do you wish someone had told you in your first month as a CE at Collibra?", tip: "Authentic question that invites candor. The answer will reveal onboarding gaps, cultural nuances, or operational realities that won't show up in job descriptions." },
        { question: "How much autonomy do CEs have in how they run demos and POCs? Is there a standard playbook, or do you build your own narrative?", tip: "You're trying to understand the operating model — rigid vs. flexible. If they give CEs creative freedom, your Pfizer storytelling background is a huge asset." },
      ],
    },
    {
      round: "Partner/AVP (Sales Leadership)",
      why: "AVPs care about revenue, territory, and whether you'll be a force multiplier for their AEs. Ask commercial and strategic questions.",
      questions: [
        { question: "What does the ideal CE-AE partnership look like on your team? How often do they sync, and how do you handle territory coverage when a CE is spread across multiple AEs?", tip: "Shows you understand the CE-AE dynamic and are thinking about workload management. The 2 CE : 2-3 AE ratio Christina mentioned means you'll juggle multiple relationships." },
        { question: "How does Collibra typically land in new accounts — is it usually governance-first, catalog-first, or driven by a compliance event like the EU AI Act?", tip: "This reveals the dominant sales motion and where your Pfizer governance background fits in. If governance is the wedge, you're perfectly positioned." },
        { question: "With the Salesforce-Informatica acquisition reshaping the market, are you seeing more competitive displacement opportunities from Informatica customers?", tip: "Shows commercial awareness and strategic thinking. This is a timely, specific question that an AVP will appreciate — it's exactly what their pipeline strategy depends on." },
        { question: "What separates your top-performing CEs from average ones? Is it technical depth, deal instincts, customer relationships, or something else?", tip: "Direct question that tells you what to optimize for. Listen for whether they value technical skill or commercial instinct more — it shapes how you'd ramp." },
      ],
    },
    {
      round: "Demo Round",
      why: "During Q&A after your demo, ask questions that show you're already thinking like a CE — how demos translate to deals, how the panel evaluates candidate demos, and how Collibra's demo motion works.",
      questions: [
        { question: "In a real customer demo, how much do you tailor the narrative based on what comes out of discovery vs. using a standard demo flow?", tip: "Shows you understand that great demos are built on great discovery. You're not just presenting — you're solving a specific customer's problem." },
        { question: "What's the most common mistake CEs make during demos with enterprise prospects?", tip: "Invites the panel to coach you, which is a positive dynamic. The answer gives you real-time feedback on what to avoid — feature dumping, ignoring the audience, going too deep too fast." },
      ],
    },
    {
      round: "General (Any Round)",
      why: "Keep these in your back pocket for any round. They signal strategic thinking, cultural alignment, and genuine interest in Collibra's trajectory.",
      questions: [
        { question: "Collibra's strategic narrative has shifted from 'data governance' to 'unified governance for data and AI.' How far along is that transition in how customers actually perceive and buy the platform?", tip: "Tests whether the aspirational positioning matches market reality. The answer reveals whether AI governance is driving real pipeline or is still early-stage." },
        { question: "How does Collibra think about the relationship between the partner ecosystem (Deloitte, Accenture) and the CE team? Are partners delivery-focused, or do they also influence pre-sale positioning?", tip: "GSIs are critical to Collibra's go-to-market. Understanding this relationship tells you how much of your job involves partner coordination." },
        { question: "What's the biggest product gap or customer request that CEs are hearing right now that hasn't been addressed yet?", tip: "Shows intellectual honesty — you know no product is perfect. The answer gives you insight into where Collibra is headed and what pain points CEs currently navigate around." },
      ],
    },
  ],
  prepFocus: [
    "Prepare a compelling narrative for why you're transitioning from internal data governance to customer-facing technical advisory — frame your Collibra platform expertise as a rare differentiator",
    "Study Collibra's current product suite deeply: Data Catalog, Data Lineage, AI Governance, Data Quality & Observability, Data Marketplace, and the new Unstructured AI capabilities from the Deasy Labs acquisition",
    "Practice delivering a mock product demo of Collibra to a non-technical audience — this is the core of the CE role and your biggest gap",
    "Prepare specific examples of how you translated complex technical concepts for business stakeholders at Pfizer — this directly maps to the communication skills they value",
    "Research Collibra's competitive landscape (vs. Informatica, Alation, Atlan, Microsoft Purview) and articulate why Collibra wins",
  ],
  commonQuestions: [
    {
      question: "Tell me about a time you had to explain a complex technical concept to a non-technical stakeholder and drive them toward a decision.",
      why: "The CE role is fundamentally about translating Collibra's technical capabilities into business value for enterprise customers. They need to see you can bridge the gap between product features and customer outcomes — this is the #1 skill they're hiring for.",
      starPrompt: {
        situation: "Describe the context — who was the stakeholder, what was the technical topic, and what was at stake?",
        task: "What decision needed to be made, and why did it require your translation between technical and business perspectives?",
        action: "How did you simplify the concept? What analogies, visuals, or frameworks did you use? How did you tailor the message?",
        result: "What decision was made? What was the business impact? How did the stakeholder respond?",
      },
    },
    {
      question: "Why are you transitioning from an internal governance role to a customer-facing sales engineering role? What makes you ready?",
      why: "Your biggest gap is the lack of formal CE/presales experience. They will ask this directly. You need a tight, confident answer that reframes your background as an advantage, not a liability.",
      starPrompt: {
        situation: "Frame your career arc — 10 years at Pfizer progressing from analyst to governance manager, including 4 years on the Collibra platform.",
        task: "Explain what drew you to the customer-facing side — what specifically about the CE role excites you?",
        action: "Describe moments where you were already doing CE-like work: training teams on Collibra, advocating for the platform internally, consulting with business units on governance adoption.",
        result: "Connect it to your AI Certificate and continuous learning — you're intentionally building toward this next step, not randomly applying.",
      },
    },
    {
      question: "Walk me through how you would conduct a discovery call with a prospect who is evaluating data governance solutions for the first time.",
      why: "Discovery and qualification are explicitly listed responsibilities. They want to see if you have a structured approach to understanding customer needs before jumping to a demo. This tests your consultative instincts.",
      starPrompt: {
        situation: "Set the scene — imagine a mid-market company with 500 employees, no formal data governance in place, and growing compliance pressure.",
        task: "Your goal is to understand their pain points, current state, and decision criteria within a 30-minute call.",
        action: "Walk through your discovery framework: who are the stakeholders, what's driving the urgency, what tools do they have today, what does success look like for them, what's their timeline?",
        result: "Explain how you'd synthesize findings into a recommendation — when to proceed to demo, when to recommend a workshop, when to qualify out.",
      },
    },
    {
      question: "Describe a situation where you drove adoption of a tool or process across a resistant organization. How did you get buy-in?",
      why: "Post-sale adoption is half the CE role. Collibra's platform is complex and requires organizational change management. Your Collibra rollout experience at Pfizer is directly relevant here — lean into it hard.",
      starPrompt: {
        situation: "Describe the Collibra adoption challenge at Pfizer — what was the resistance? Who were the skeptics?",
        task: "What was your mandate? What level of adoption were you targeting?",
        action: "How did you build champions, create training materials, run workshops, or demonstrate quick wins to build momentum?",
        result: "What adoption metrics improved? How did you measure success? What would you do differently?",
      },
    },
    {
      question: "How would you handle a proof of concept where the customer's technical team is pushing back on Collibra's approach and advocating for a competitor?",
      why: "CEs regularly face competitive situations during POCs. They need someone who can stay composed, address objections with product knowledge, and differentiate Collibra without disparaging competitors. Your deep platform knowledge is an asset here.",
      starPrompt: {
        situation: "Describe a competitive or pushback scenario — either from your experience or a hypothetical POC situation.",
        task: "What was the objection? What competitor or alternative approach was being proposed?",
        action: "How did you listen first, acknowledge the concern, then reframe the conversation around the customer's actual business outcomes rather than feature-for-feature comparison?",
        result: "What was the outcome? How did you turn the objection into an opportunity to demonstrate Collibra's differentiation?",
      },
    },
    {
      question: "Tell me about a time you identified a new opportunity or upsell while working with an existing stakeholder or customer.",
      why: "CEs are expected to participate in discovery and drive qualification of new opportunities — not just support existing deals. They want to see commercial instincts alongside technical depth.",
      starPrompt: {
        situation: "Describe a scenario where you were working with a team on one initiative and noticed an adjacent problem or opportunity.",
        task: "What was the additional need you identified? Why wasn't it on anyone's radar?",
        action: "How did you surface it? Who did you bring in? How did you frame the value?",
        result: "What happened — did it lead to expanded scope, new project, or new stakeholder engagement?",
      },
    },
    {
      question: "What do you know about Collibra's product portfolio beyond data governance? How would you position our AI Governance capabilities to a CISO?",
      why: "Collibra has expanded aggressively into AI governance, data quality, data marketplace, and unstructured data. They want to see that you understand the full platform, not just the governance module you used at Pfizer. Positioning to a CISO tests your ability to tailor messaging by persona.",
      starPrompt: {
        situation: "Frame your knowledge of the Collibra platform — what you used at Pfizer and what you've learned about the broader suite.",
        task: "A CISO cares about risk, compliance, and security — not data cataloging. How do you position AI Governance for their priorities?",
        action: "Walk through the key value props: ISO 42001 certification, EU AI Act compliance tooling, model cataloging, bias/drift monitoring, and agent governance. Tie each to risk reduction.",
        result: "End with a concrete recommendation — what would you propose as a first step for a CISO evaluating AI governance?",
      },
    },
    {
      question: "How do you stay current on the data and AI landscape? What trends are you following right now?",
      why: "The role requires continuous learning and the ability to be a trusted advisor. They want to see genuine intellectual curiosity about the space — not rehearsed buzzwords. Your AI Certificate from Stevens is a strong signal here.",
      starPrompt: {
        situation: "Describe your learning habits — what do you read, who do you follow, what communities are you part of?",
        task: "Name 2-3 specific trends you're tracking right now (e.g., agentic AI governance, data mesh, semantic layers, EU AI Act implementation).",
        action: "For each trend, explain why it matters to Collibra's customers specifically — not just the industry in general.",
        result: "Connect it back to why you're pursuing this role — your learning is intentional and aligned with where the market is heading.",
      },
    },
  ],
  cultureValues: [
    {
      name: "Data Citizens",
      description: "Collibra's core identity revolves around making data accessible and governable for everyone — technical and non-technical alike. In your answers, frame your experience in terms of empowering 'data citizens' across the organization, not just serving data engineers.",
    },
    {
      name: "Customer-Centric Technical Advisory",
      description: "CEs are described as 'trusted technical advisors' and 'guiding forces' — not salespeople. Position yourself as someone who leads with solving the customer's problem first, with the sale as a natural outcome of trust and value delivery.",
    },
    {
      name: "Continuous Learning and Curiosity",
      description: "The job posting explicitly calls out 'excited about continuous learning and development.' Reference your AI Certificate, CSPO, McKinsey Leadership certification — show a pattern of intentional skill-building, not just job experience.",
    },
    {
      name: "Collaboration Across Teams",
      description: "CEs work across sales, product, engineering, and customer success. Emphasize your cross-functional experience at Pfizer — liaising between developers, business partners, and project managers. Show you thrive at intersections, not in silos.",
    },
    {
      name: "Bridge Business and Technical",
      description: "The first listed responsibility is 'mapping solutions to value across large organizations, bridging business and technical requirements.' This is your superpower from the governance role — make it the throughline of every answer.",
    },
    {
      name: "Be Respectfully Direct",
      description: "Christina Olson highlighted this as a core Collibra value during the recruiter screen. Collibra values candor and transparency — they want people who can give honest assessments to customers and colleagues. Frame your governance experience as requiring exactly this: telling business units what they needed to hear about compliance, not what they wanted to hear.",
    },
  ],
  demoPrep: {
    overview: {
      title: "Demo Round — What You Need to Know",
      format: "1 hour, panel evaluation",
      weight: "~50% of your overall interview grade (per Christina Olson)",
      whatIsEvaluated: [
        "Presentation skills — can you command a room and tell a compelling story?",
        "Customer empathy — do you lead with the problem or the product?",
        "Technical depth — can you go beyond surface-level features into real architecture?",
        "Q&A handling — can you think on your feet when the panel throws curveballs?",
        "Persona tailoring — can you adjust the narrative for different audiences?",
        "Competitive awareness — do you know where Collibra wins and where it's challenged?",
      ],
      keyIntel: "Christina will provide a blank deck template. You don't have to use it, but having a structured slide framework signals professionalism. Build your demo as a narrative, not a feature tour.",
    },
    narrative: [
      {
        section: "Opening Hook",
        description: "Set the scene with a customer problem that resonates. Don't start with 'Collibra is a platform that...' — start with the pain.",
        prompt: "Draft your opening 60-second hook. Example: 'Imagine you're a CDO at a mid-market company. You just got a board mandate to comply with the EU AI Act by Q3. Your data is spread across Snowflake, Databricks, and 50 legacy systems. Nobody knows what models are in production or what data feeds them. Where do you start?'",
      },
      {
        section: "Problem Frame",
        description: "Expand the pain into 3-4 concrete challenges the customer faces. Make the audience nod along before you show any product.",
        prompt: "List the 3-4 problems you'll frame before showing Collibra. Examples: metadata silos, compliance risk, no lineage visibility, data team bottleneck.",
      },
      {
        section: "Platform Walkthrough",
        description: "Map each problem to a Collibra capability. Show the platform solving the problems you just described, in order. Use the catalog → lineage → governance → AI governance flow.",
        prompt: "Outline your platform walkthrough: which screens/features will you show, and what customer problem does each solve?",
      },
      {
        section: "Customer Outcome",
        description: "Close with measurable impact — what does life look like after Collibra? Use your Pfizer metrics as proof points.",
        prompt: "Draft your closing: tie back to the opening problem and show the resolution. Include 2-3 quantified outcomes (adoption growth, time savings, cost reduction, compliance achievement).",
      },
    ],
    audiencePersonas: [
      {
        persona: "CDO / VP of Data",
        cares: "Data strategy, organizational alignment, proving ROI to the board, modernization roadmap",
        emphasize: "Catalog as single source of truth, governance operating model, executive dashboards, time-to-value metrics. They want to see Collibra as the backbone of their data strategy, not just a compliance tool.",
        avoid: "Don't get lost in technical integration details — CDOs delegate that. Keep it strategic.",
      },
      {
        persona: "CISO / Head of Compliance",
        cares: "Regulatory risk, audit readiness, data privacy, AI governance, incident response",
        emphasize: "ISO 42001 certification, EU AI Act compliance, automated policy enforcement, data privacy module, lineage for audit trails. Frame everything through the lens of risk reduction.",
        avoid: "Don't lead with cataloging or data discovery — CISOs don't care about data democratization, they care about not getting fined.",
      },
      {
        persona: "Data Engineer / Architect",
        cares: "Integration complexity, API flexibility, not adding another tool to maintain, lineage accuracy, automation",
        emphasize: "100+ native integrations (Snowflake, Databricks, BigQuery, SAP), REST APIs, Edge for hybrid deployment, automated lineage harvesting, custom workflow extensibility. Show them it fits into their stack, not around it.",
        avoid: "Don't oversell governance benefits to technical audiences — they want to know it works with their tools and doesn't create overhead.",
      },
    ],
    objections: [
      {
        objection: "We already have Databricks Unity Catalog — why do we need Collibra?",
        response: "Unity Catalog is excellent for Databricks-native governance. But most enterprises have data in Snowflake, SAP, cloud storage, and legacy systems too. Collibra is the enterprise governance layer that connects all of these — including Databricks — under one policy framework. That's why Databricks is both a partner and an investor in Collibra. They see it as complementary, not competitive.",
        source: "Collibra-Databricks partnership, Snowflake strategic investment",
      },
      {
        objection: "Informatica already does this and we're already paying for it.",
        response: "Informatica was strong in data integration and ETL — that's their heritage. But Salesforce acquired Informatica for $8B in November 2025, and the strategic direction is increasingly Salesforce-centric. If your data estate extends beyond Salesforce — Snowflake, Databricks, SAP, multi-cloud — you need a governance platform that's vendor-neutral. Collibra is purpose-built for governance and is the only vendor that's been Gartner MQ Leader since the category was created. For governance-first, multi-cloud strategies, Collibra delivers deeper capability and true platform independence.",
        source: "Salesforce-Informatica acquisition (Nov 2025), Gartner MQ 2025 & 2026",
      },
      {
        objection: "What about Atlan? They just became a Gartner Leader too and they're more modern.",
        response: "Atlan is a great tool — they moved from Visionary to Leader in the Gartner MQ in one year, which is impressive. Their metadata lakehouse architecture is modern and fast to deploy. Where Collibra differentiates is in enterprise-grade complexity: deep policy workflow automation, federated governance across 100+ business units, regulatory compliance tooling (EU AI Act, ISO 42001), and the maturity to handle the most regulated industries — financial services, healthcare, government. If you're a mid-market team looking for quick catalog deployment, Atlan is strong. If you need enterprise-wide governance that scales across business and technical domains with audit-ready compliance, Collibra is the standard.",
        source: "Gartner MQ 2026 — Atlan as Leader, Collibra differentiation analysis",
      },
      {
        objection: "We tried data governance before and it failed — why would this be different?",
        response: "Most governance programs fail because they mandate compliance without delivering value. Collibra's approach is different: start with a catalog people actually want to use, layer governance as guardrails, and connect to the tools your teams already work in. At Pfizer, we didn't mandate — we made governance the path of least resistance and grew adoption 40% year-over-year because users saw immediate value.",
        source: "Kevin's Pfizer experience, Collibra adoption methodology",
      },
      {
        objection: "This seems expensive for what it does. Can we build something in-house?",
        response: "You absolutely could build a basic catalog. But you'd be maintaining it forever while Collibra ships 100+ integrations, AI governance, quality monitoring, and regulatory compliance tooling. At Pfizer, we evaluated the build-vs-buy math — the TCO of maintaining an in-house solution exceeded Collibra's cost within 18 months, and it couldn't match the pace of product innovation. Data governance is Collibra's entire business — it's a feature for an in-house team.",
        source: "Pfizer TCO analysis, enterprise build-vs-buy patterns",
      },
      {
        objection: "Our team doesn't have capacity to implement another platform right now.",
        response: "That's actually a strong argument for Collibra, not against it. Collibra's professional services and partner ecosystem (Deloitte, Accenture, EY) handle implementation so your team doesn't have to build expertise from scratch. At Pfizer, we started with a focused pilot in one business unit, proved value in 60 days, then expanded. You don't have to boil the ocean — start small, prove value, scale.",
        source: "Collibra implementation methodology, Pfizer phased rollout",
      },
    ],
    referenceMaterials: [
      {
        title: "Pfizer's Data Citizens '24 Session",
        description: "Michael Pagliorola (Kevin's director) and Deloitte presented Pfizer's enterprise Collibra strategy — cataloging, data standards, custom real-time metadata replication, lineage, and data freshness. This is YOUR story — reference it.",
        url: "https://www.collibra.com/us/en/resources/deloitte-collibra-s-journey-at-pfizer",
      },
      {
        title: "Collibra YouTube — Product Demos & Webinars",
        description: "Study the narrative structure of official Collibra demos. Notice how they lead with the business problem, not the product. Model your demo after their approach.",
        url: "https://www.youtube.com/@Collibra",
      },
      {
        title: "Gartner MQ for Data & Analytics Governance (2025 & 2026)",
        description: "Collibra is the only vendor named Leader in both years since the category was created. Use this as a credibility anchor in your demo — 'independent validation from the industry's most trusted analyst firm.'",
        url: "",
      },
      {
        title: "Collibra AI Governance & ISO 42001",
        description: "First data governance vendor to achieve ISO 42001 AI management system certification. EU AI Act compliance tooling launched January 2025. This is a major differentiator for CISO-facing demos.",
        url: "https://www.collibra.com/us/en/products/ai-governance",
      },
      {
        title: "Collibra MCP Server — Agentic AI Governance",
        description: "Collibra's Model Context Protocol server lets AI agents access governed metadata. This is cutting-edge and shows you understand where the industry is heading.",
        url: "",
      },
    ],
  },
  // Updated interview process based on Christina Olson's confirmed structure
  seedInterviews: [
    {
      interviewerName: "Christina Olson",
      interviewerRole: "Talent Acquisition — Recruiter Screen (30min)",
      scheduledAt: null,
      studyPlan: {
        generatedAt: 1741132800000,
        target: "Ralf Strichau — March 13",
        daysAvailable: 8,
        totalHours: 14,
        overview: "Technical + behavioral round with your future direct manager. Ralf came from Accenture consulting and made the same CS-to-CE transition you're making — he will probe adoption stories, consultative instincts, and platform depth. This plan front-loads platform knowledge and STAR story sharpening, then transitions to live practice and confidence-building in the final 2 days.",
        days: [
          {
            dayLabel: "Day 1 — Today (Thu Mar 5)",
            hours: 2,
            theme: "Know what you're walking into",
            tasks: [
              {
                label: "Hour 1",
                text: "Open the app, go to the Collibra role → Preparation tab. Read every predicted question for Ralf's round (Interview 2 tab). Don't answer yet — just absorb what he's probing for. Pay special attention to the 'Data Confidence' question and the Unity Catalog competitive positioning question. These are the two most Ralf-specific items.",
              },
              {
                label: "Hour 2",
                text: "Research Ralf on LinkedIn: read his last 10 posts. Look for patterns — SAP, Siemens, 'Data Confidence', Nashville CE offsite. Write 3 bullet points in the Interview 2 interviewer notes box summarizing his worldview. You'll use these to mirror his language in the interview.",
              },
            ],
          },
          {
            dayLabel: "Day 2 — Fri Mar 6",
            hours: 2,
            theme: "Lock in your origin story",
            tasks: [
              {
                label: "Hour 1",
                text: "Write your career narrative for 'Walk me through your background and why you're making this move.' Target: 90 seconds spoken. Cover: 10 years at Pfizer → Collibra power user → CE instincts without the title → intentional move to do this at scale externally. Mirror Ralf's own CS-to-CE transition — he made the same jump and will recognize the pattern.",
              },
              {
                label: "Hour 2",
                text: "Read Christina's interview analysis in the app (Interview 1 tab, scroll to the analysis section). Pull the specific improvement areas she flagged. For each one, write one sentence on how you'll address it with Ralf. Ralf will have Christina's debrief — he'll be probing the same spots she flagged.",
              },
            ],
          },
          {
            dayLabel: "Day 3 — Sat Mar 7",
            hours: 2,
            theme: "Platform depth — beyond the governance module",
            tasks: [
              {
                label: "Hour 1",
                text: "Study the Collibra product suite beyond what you used at Pfizer: AI Governance (ISO 42001, EU AI Act, model cataloging, bias/drift), Data Quality & Observability, Data Marketplace, and the Deasy Labs acquisition for unstructured data. For each: what problem does it solve, what customer persona cares most, and what's one strong demo talking point.",
              },
              {
                label: "Hour 2",
                text: "Watch one Collibra product demo on YouTube (youtube.com/@Collibra). Study the narrative structure: problem → capability → outcome. Note how they transition from business pain to product screen. You need to internalize this flow — Ralf will expect you to talk about the platform like a CE, not an end user.",
              },
            ],
          },
          {
            dayLabel: "Day 4 — Sun Mar 8",
            hours: 2,
            theme: "Sharpen your three core STAR stories",
            tasks: [
              {
                label: "Hour 1",
                text: "In the Interview Guide tab, find the adoption question. Draft your full STAR for the Collibra 40% adoption growth story. Lead with metrics from sentence one: '600 users to 1,000+, 7 BUs to 10+, 40% YoY growth.' Then the how: champion users, quick-win workflows, redesigned training, governance office hours. Practice out loud — aim for 90 seconds.",
              },
              {
                label: "Hour 2",
                text: "Draft your STAR for the Alation → Collibra migration (50% cost reduction, zero downtime). Write it in the Story Bank tab. Then draft the Metadata Cycle Time story (14 days → 10 days, 30% reduction). Both answer Ralf's consultative leadership question and prove you've been in the trenches with the product he sells.",
              },
            ],
          },
          {
            dayLabel: "Day 5 — Mon Mar 9",
            hours: 1.5,
            theme: "Competitive positioning and 'Data Confidence'",
            tasks: [
              {
                label: "45 min",
                text: "Build your answers to the two hardest Ralf questions: (1) Unity Catalog objection — use the 'and not or' framing from the Company tab. Practice it out loud until it's natural. (2) 'What does Data Confidence mean to you?' — make it personal with the Pfizer story: a business leader pulling a report and trusting the numbers without calling your team. That's Data Confidence operationally.",
              },
              {
                label: "45 min",
                text: "Review the Gartner MQ positioning, the Deasy Labs and Raito acquisitions, and the ISO 42001 cert from the Company tab. Know the one-line headline for each: why it matters, one sentence. You don't need to be encyclopedic — you need to signal you've done your homework and understand where Collibra is heading strategically.",
              },
            ],
          },
          {
            dayLabel: "Day 6 — Tue Mar 10",
            hours: 1.5,
            theme: "Mock Q&A — full run",
            tasks: [
              {
                label: "60 min",
                text: "Do a full mock Q&A using all 6 predicted questions in Ralf's tab (Interview 2). Answer each out loud as if he's on Zoom across from you. Record yourself on your phone. Don't read from notes. Complete all 6 in under 60 minutes — the interview is 45 minutes and he'll go off-script.",
              },
              {
                label: "30 min",
                text: "Play back the recording. Grade yourself on: (1) Did you lead with metrics in every story? (2) Did you use 'Data Confidence' naturally, not robotically? (3) Did you mirror his CS-to-CE background in the career narrative? Write down the 2-3 answers to tighten.",
              },
            ],
          },
          {
            dayLabel: "Day 7 — Wed Mar 11",
            hours: 1,
            theme: "Tighten and refine",
            tasks: [
              {
                label: "60 min",
                text: "Re-run only the 2-3 answers you flagged from yesterday's recording. Don't try to rebuild everything. Check the Company tab for any recent Collibra news. Check if Ralf posted anything new on LinkedIn — look for signal about what he's been thinking about. Update the interviewer notes in the app if you find anything useful.",
              },
            ],
          },
          {
            dayLabel: "Day 8 — Thu Mar 12 (Day Before)",
            hours: 2,
            theme: "Logistics, confidence, light review",
            tasks: [
              {
                label: "Hour 1",
                text: "Light review only: skim the predicted questions, your three STAR stories, and the Data Confidence framing. Do not try to learn new material today. Set up your interview space: test audio/video if Zoom, have water nearby, close unnecessary browser tabs. Confirm the interview time (12pm CDT = 1pm EDT — verify your local time) and dial-in details.",
              },
              {
                label: "Hour 2",
                text: "Spend 30 minutes reading the Pfizer Collibra case study from Data Citizens '24 (link in Demo Prep → Reference Materials). Then sit quietly for a few minutes. Remind yourself: you are one of the most knowledgeable Collibra practitioners in the world. You built the program that Collibra uses as a case study. Walk into this interview from a position of earned confidence, not anxiety.",
              },
            ],
          },
        ],
      },
    },
    {
      interviewerName: "Ralf Strichau",
      interviewerRole: "Enterprise Customer Engineering Lead — Hiring Manager Round (45min)",
      scheduledAt: "2026-03-13",
      interviewerNotes: "Ralf Strichau — Enterprise Customer Engineering Lead at Collibra (promoted Jan 2025, previously Sr. Manager Customer Success 3.5yrs, Manager CS 1yr, Enterprise CSM 3yrs). Total ~8 years at Collibra. Based in Greater Chicago Area, remote. MBA Finance from University of Bayreuth (Germany). Certified Collibra Ranger (3 Stars). Previously 12 years at Accenture as Senior Manager. Bilingual English/German. Active on LinkedIn — posts about data governance, AI governance, SAP data integration, and Collibra events. Organized CE team offsite in Nashville (Nov 2025) — mentioned team members by name including Laura F. (Director, Customer Engineering — his boss?). Reposted Laura F.'s hiring post for CE Product roles (EST/CST, remote US/Canada, $104-130K range — note this is a different CE track than Kevin's). Key themes from his posts: 'Data Confidence™', governance as foundation for AI/data products, Siemens as customer example, SAP Platform & Data Summit. He came from Customer Success (not sales engineering) — this is relevant because Kevin is also transitioning from a non-SE background.",
      predictedQuestions: [
        {
          question: "Walk me through your career and why you're making the move from internal governance to customer-facing CE work.",
          why: "Ralf himself transitioned from Customer Success to CE leadership — he'll be evaluating whether Kevin's pivot is intentional and well-reasoned, not just a shot in the dark. He knows non-traditional paths can work because he lived one.",
          prepTip: "Mirror Ralf's own trajectory. Say: 'I noticed you came from CS into CE leadership — I see a similar thread in my path. I've been doing CE work without the title: training users, advocating for the platform, solving adoption challenges. Now I want to do it at scale for the company that built the product.'",
        },
        {
          question: "How would you describe your leadership style when working with customers who have competing priorities?",
          why: "Ralf spent 12 years at Accenture managing enterprise clients before Collibra. He values structured, consultative leadership. His LinkedIn posts emphasize 'Data Confidence' as a guiding principle — expect him to probe how you'd bring order to chaotic customer environments.",
          prepTip: "Use your Pfizer onboarding story: multiple BUs, each with different governance maturity. Show how you prioritized, sequenced pilots, and brought resistant stakeholders along. Frame it as consultative — you listened first, then prescribed.",
        },
        {
          question: "Tell me about a time you drove adoption of a platform across users who didn't initially see the value.",
          why: "Adoption is the lifeblood of the CE role post-sale. Ralf's CS background means he's deeply attuned to churn risk and value realization. Your Pfizer rollout from 600 to 1,000+ users is exactly the kind of story he wants to hear.",
          prepTip: "Lead with metrics: '600 users to 1,000+, 7 BUs to 10+, 40% YoY adoption growth.' Then explain the how: champion users, quick-win workflows, redesigned training, governance office hours. End with: 'Three BU heads who were initially resistant became vocal advocates.'",
        },
        {
          question: "How familiar are you with Collibra's product capabilities beyond governance — AI Governance, Data Quality, Data Marketplace?",
          why: "Ralf posts about Collibra's full platform vision (AI governance, SAP integration, data products). He'll want to know if Kevin's Collibra knowledge extends beyond the governance module he used at Pfizer. CEs need to position the entire platform.",
          prepTip: "Show breadth: 'At Pfizer I was deep in governance and lineage, but I've studied the full platform — AI Governance with ISO 42001 compliance, the Data Quality & Observability module, the new Unstructured AI capabilities from Deasy Labs, and the Data Access Governance from the Raito acquisition. I'm particularly excited about the MCP server for agentic AI governance — it's the first governance vendor to ship that, and it positions Collibra as the trust layer for the AI agent ecosystem.'",
        },
        {
          question: "How would you position Collibra to a prospect who says 'we already have Databricks Unity Catalog for governance'?",
          why: "This is a real objection CEs face daily. Ralf's posts reference both SAP and Databricks partnerships. He'll test whether Kevin can handle competitive positioning diplomatically — complementary framing, not combative.",
          prepTip: "Frame it as 'and' not 'or': 'Unity Catalog is excellent for Databricks-native governance. Collibra extends governance across your entire data estate — Snowflake, SAP, cloud APIs, unstructured data. It's the enterprise governance layer that connects all your platforms, including Databricks, under one policy framework.'",
        },
        {
          question: "What does 'Data Confidence' mean to you, and how would you bring that to customer conversations?",
          why: "Ralf uses 'Data Confidence™' frequently in his LinkedIn posts — it's Collibra's brand promise. This tests cultural alignment and whether Kevin can articulate the company's value proposition in his own words, not just recite the website.",
          prepTip: "Make it personal: 'At Pfizer, data confidence meant a business leader could pull a report and trust the numbers without calling my team to verify. That's what Collibra delivers — not just metadata, but the trust layer that lets everyone from the CDO to a business analyst act on data decisively. As a CE, my job would be to help customers build that confidence from day one.'",
        },
      ],
    },
    {
      interviewerName: "Peer CE",
      interviewerRole: "Customer Engineer — Peer Technical Round",
      scheduledAt: null,
      predictedQuestions: [
        {
          question: "Walk me through how you'd run a discovery call with a new prospect evaluating data governance for the first time.",
          why: "Peer CEs want to know you understand the sales motion. Discovery is where deals are won or lost — a bad discovery means a misaligned demo. They'll assess your consultative instincts.",
          prepTip: "Show a framework: 'I'd start with pain — what's driving the urgency? Then current state — what tools do they have, what's manual? Then stakeholder map — who cares about governance and who's resistant? Then success criteria — what does winning look like in 6 months? I'd end with next steps: demo, workshop, or POV depending on where they are.'",
        },
        {
          question: "Describe a typical day or week in your current role that's most similar to CE work.",
          why: "They're assessing whether you understand the CE lifestyle: context-switching between customers, juggling prep and delivery, handling ad-hoc technical questions while running strategic engagements. They want to see you've already been operating this way.",
          prepTip: "Paint the picture from Pfizer: 'Monday I might be onboarding a new BU onto Collibra — running a discovery session to understand their metadata landscape. Tuesday I'm building a custom lineage configuration for a data engineering team. Wednesday I'm presenting governance metrics to an executive sponsor. Thursday I'm troubleshooting a workflow issue and fielding Slack questions in the governance office hours. It's exactly the CE mix of strategic and tactical.'",
        },
        {
          question: "How do you handle a situation where a customer's technical team pushes back on your recommendation during a live demo or workshop?",
          why: "This is the reality of CE work — you will face pushback from smart, opinionated technical stakeholders. The peer wants to see composure, curiosity, and the ability to turn objections into deeper discovery.",
          prepTip: "Show the three-step pattern: 'First, I acknowledge — their concern is valid and I want to understand it. Second, I ask — what specific requirement drives that concern? Third, I reframe — here's how Collibra addresses that use case, or here's how other customers have solved this.' Use the Alation migration as an example: BU data stewards were attached to their tool, and you won them over through parallel-run and personalized office hours.",
        },
        {
          question: "How deep is your technical knowledge of Collibra's integration ecosystem — APIs, Edge, Databricks/Snowflake connectors?",
          why: "CEs need to go deep in technical conversations. The peer is checking whether your Collibra experience includes hands-on integration work or if it was purely governance/workflow configuration. Honest depth assessment matters.",
          prepTip: "Be specific about what you touched: 'I integrated Databricks Unity Catalog and Snowflake with Collibra for cross-platform lineage at Pfizer. I worked with the metadata ingestion APIs and built custom workflows in Collibra. I'm less experienced with Edge deployments and the newer Data Quality module — but I learn product features fast because I already understand the data model and architecture underneath.'",
        },
        {
          question: "What's the hardest objection you've ever had to overcome when getting someone to adopt a new tool or process?",
          why: "Adoption stories reveal grit and emotional intelligence. The peer has faced this with customers and wants to know you won't crumble when a stakeholder says 'I don't want to use this.'",
          prepTip: "Tell the Alation migration story as a full STAR: 3 BUs comfortable with Alation, dual-platform creating silos and doubling costs. You mapped every asset, ran a parallel period, held weekly office hours. Zero downtime, zero data loss, 85% positive sentiment, 50% cost reduction. The key was empathy — you didn't mandate, you listened and built trust.",
        },
      ],
    },
    {
      interviewerName: "Partner/AVP",
      interviewerRole: "Sales Leadership — Partner or AVP Round",
      scheduledAt: null,
      predictedQuestions: [
        {
          question: "How do you think about the commercial side of the CE role — quota, pipeline, expansion revenue?",
          why: "AVPs live and die by their number. They need CEs who understand that great technical work should translate to revenue. They'll probe whether Kevin has commercial instincts or is purely technical.",
          prepTip: "Connect your Pfizer work to revenue language: 'My governance rollout directly influenced Pfizer's Collibra renewal and expansion decisions. When I grew adoption from 600 to 1,000+ users and consolidated 5 tools to 2, that was expansion revenue for Collibra's account team — even though I was on the customer side. I understand that every successful POV and adoption win is a renewal or upsell opportunity.'",
        },
        {
          question: "Tell me about a time you identified a new opportunity or expanded scope while working with a stakeholder.",
          why: "Partners want CEs who can spot land-and-expand opportunities. They don't just want someone who executes on what's scoped — they want someone who sees the adjacent play and flags it to the AE.",
          prepTip: "Use the multi-BU expansion story: 'After successfully onboarding the first 3 BUs, I proactively identified 4 more that had similar metadata governance gaps. I built the business case for each, presented it to their BU leadership, and expanded the program from 7 to 10+ BUs. In a CE context, that's exactly the kind of expansion opportunity I'd surface to the AE.'",
        },
        {
          question: "How would you handle a situation where the customer's champion leaves mid-deal or mid-deployment?",
          why: "Champion risk is one of the biggest deal-killers in enterprise sales. The AVP wants to know you can multi-thread relationships, not depend on a single contact.",
          prepTip: "Show multi-threading instincts: 'At Pfizer, I never relied on a single champion per BU. I built relationships with the BU lead, the data steward, and at least one hands-on analyst. When a key steward rotated to another team, the program didn't skip a beat because we had depth. As a CE, I'd apply the same principle — map the power base early and build technical champions at multiple levels.'",
        },
        {
          question: "How comfortable are you with travel — visiting customers on-site, attending QBRs, running workshops in person?",
          why: "AVPs are rebuilding the field motion. Christina said travel is 'picking up.' The partner wants to confirm Kevin is genuinely willing, not just saying yes to get through the screen.",
          prepTip: "Be concrete: 'Absolutely. I'm based in Memphis with easy access to Central hubs — Dallas, Chicago, Atlanta. I've spent 10 years in enterprise work and I know the value of being in the room. Some of my best adoption wins at Pfizer happened because I was physically present with the BU teams, not on a Zoom call.'",
        },
        {
          question: "What's your understanding of how CEs and AEs work together? What makes that partnership successful?",
          why: "The AVP manages AEs and wants to know the CE will be a true partner, not a demo jockey. They want to hear about shared strategy, deal qualification, and mutual accountability.",
          prepTip: "Frame it as a partnership: 'The AE owns the relationship and the commercial strategy. The CE owns the technical narrative and the proof of value. The best partnerships I've seen — and experienced as an internal stakeholder — work when both sides share context freely. I'd want regular syncs with my AEs, joint account planning, and the freedom to flag technical risks that could derail a deal.'",
        },
      ],
    },
    {
      interviewerName: "Demo Round",
      interviewerRole: "Product Demo Presentation (1hr, ~50% of grade)",
      scheduledAt: null,
      predictedQuestions: [
        {
          question: "Why did you choose this specific use case and narrative for your demo?",
          why: "The panel wants to see intentionality — did you pick a use case that maps to real customer pain, or did you just demo features? Your narrative choice reveals how you think about customer problems.",
          prepTip: "Anchor to a real scenario: 'I chose a CDO at a mid-market company with no governance program because that's the highest-value entry point for Collibra. Every feature I showed maps to a pain point: metadata chaos, compliance risk, siloed data knowledge. I wanted to show Collibra solving a problem, not just existing as a product.'",
        },
        {
          question: "How would you adjust this demo if the audience was a CISO instead of a CDO?",
          why: "Persona-tailoring is a core CE skill. They want to see you can pivot on the fly — same product, different value narrative depending on who's in the room.",
          prepTip: "Show the pivot: 'For a CISO, I'd lead with risk — regulatory exposure, AI model governance, access controls. I'd highlight the ISO 42001 certification, EU AI Act compliance tooling, and data privacy automation. The lineage story becomes about audit trail and incident response, not discovery and cataloging. Same platform, completely different emphasis.'",
        },
        {
          question: "A customer in the audience says: 'We tried data governance before and it failed — why would this be different?'",
          why: "This is the most common real-world objection. The panel is testing your ability to handle curveballs with empathy and substance, not defensiveness.",
          prepTip: "Acknowledge, then differentiate: 'That's incredibly common — most governance programs fail because they mandate compliance without delivering value. Collibra's approach is different: it starts with a catalog that people actually want to use, layers in governance as guardrails, and connects to the tools your teams already work in. I saw this at Pfizer — we didn't mandate, we made governance the path of least resistance.'",
        },
        {
          question: "What competitive alternatives would this customer likely be evaluating alongside Collibra?",
          why: "They want to know you understand the competitive landscape and can position Collibra honestly without badmouthing competitors.",
          prepTip: "Name them confidently: 'In this scenario — mid-market, first-time governance — they'd likely evaluate Alation (catalog-first, strong UX), Atlan (AI-native metadata lakehouse, fast to deploy — they just made Gartner Leader), and possibly Microsoft Purview if they're Azure-native. Informatica used to be the legacy incumbent, but the Salesforce acquisition in November 2025 means their strategic direction is shifting — that may actually push some prospects toward vendor-neutral options like Collibra. Collibra wins on breadth — it's not just a catalog, it's governance, quality, lineage, privacy, and AI governance in one platform. The Gartner MQ Leader position gives procurement teams confidence.'",
        },
      ],
    },
  ],
  learningGuide: [
    {
      category: "Presales & Discovery Skills",
      urgency: "critical",
      why: "The #1 requirement is 2-3 years in Sales/CE/Sales Consulting — Kevin has zero. Every interviewer will probe this. He needs to demonstrate he understands the mechanics of a sales cycle even without the title.",
      items: [
        "Learn the MEDDPICC or MEDDIC sales qualification framework — this is the standard enterprise sales methodology. Understand what each letter stands for and how a CE contributes to each stage (Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition)",
        "Study how discovery calls work: the difference between open and closed questions, how to qualify pain vs. interest, when to advance to demo vs. when to slow down. Watch 3-5 YouTube walkthroughs of real SE/CE discovery calls",
        "Understand the difference between a Customer Engineer, Sales Engineer, Solutions Architect, and Solutions Consultant — Collibra will expect Kevin to articulate why he wants the CE role specifically, not just 'something technical and customer-facing'",
        "Learn what a POC (proof of concept) and POV (proof of value) look like in enterprise SaaS — the structure, success criteria, timeline, and how a CE runs one. Collibra explicitly lists this as a responsibility",
      ],
    },
    {
      category: "Product Demo Delivery",
      urgency: "critical",
      why: "Kevin used Collibra as an internal admin/governance user at Pfizer. He has never presented Collibra to an external prospect. Demos are the single most visible thing a CE does — he needs to practice this before the interview. Christina confirmed the demo round is ~50% of the grade.",
      items: [
        "Watch Collibra's official product demos and webinars on their YouTube channel and website — study the narrative structure, not just the features. Notice how they lead with the business problem, not the product",
        "Watch Pfizer's Data Citizens '24 session (collibra.com/resources/deloitte-collibra-s-journey-at-pfizer) where Michael Pagliorola (Director of Data Enablement — Kevin's director) and Deloitte presented Pfizer's enterprise-wide Collibra strategy. Study how they positioned the use cases: cataloging, data standards, custom real-time metadata replication, lineage, and data freshness. This is Kevin's own organization's public case study — he can reference it credibly in interviews",
        "Build a 10-minute mock demo narrative: 'If I were showing Collibra to a Chief Data Officer at a mid-market company with no governance program, here is the story I would tell.' Practice it out loud 3+ times",
        "Learn the Collibra Platform beyond governance: Data Catalog, Data Lineage, Data Quality & Observability, AI Governance, Data Marketplace, and the new Unstructured AI capabilities. Kevin's Pfizer experience was deep but narrow — he needs to show breadth",
        "Understand Collibra's integration ecosystem — how it connects to Snowflake, Databricks, BigQuery, SAP, Azure, and Tableau. A CE needs to position Collibra within the customer's existing data stack, not in isolation",
      ],
    },
    {
      category: "Competitive Landscape",
      urgency: "high",
      why: "CEs face competitive objections in every POC. Kevin needs to know who Collibra competes against and articulate differentiation without disparaging competitors — this is a core CE skill.",
      items: [
        "Study the top 5 competitors deeply: Informatica (acquired by Salesforce for $8B in Nov 2025 — becoming Salesforce-centric, opening opportunities for vendor-neutral customers), Alation (catalog-first approach, Forrester Leader), Atlan (AI-native metadata lakehouse — jumped from Visionary to Gartner Leader in one year, fastest-growing challenger), Microsoft Purview (bundled with Azure, struggles outside Azure ecosystem), OneTrust (privacy-first, expanding into AI governance). For each, know their positioning, strengths, and where Collibra wins",
        "Read the Gartner Magic Quadrant for Data & Analytics Governance Platforms (2025 and 2026) — understand why Collibra is positioned as Leader, why Atlan also achieved Leader status in 2026, and what the evaluation criteria are. Be ready to honestly acknowledge Atlan's strengths while articulating Collibra's enterprise differentiation",
        "Learn the Databricks Unity Catalog competitive angle — Databricks customers often ask 'why do I need Collibra when I have Unity Catalog?' despite Snowflake and Databricks both being Collibra partners. Key answer: Unity Catalog is excellent for Databricks-native governance, but Collibra is the enterprise governance layer across your entire multi-cloud data estate",
        "Prepare a clean 30-second answer for 'Why Collibra over [competitor]?' that focuses on customer outcomes, not feature checklists. Key differentiators: deepest workflow automation, semantic knowledge graph, 100+ integrations, regulatory compliance (EU AI Act, ISO 42001), and enterprise-grade federated governance",
      ],
    },
    {
      category: "AI Governance & Regulatory Landscape",
      urgency: "high",
      why: "Collibra has made a major strategic bet on AI governance. Kevin's AI Certificate from Stevens is a signal, but he needs to connect it to Collibra's specific product capabilities and the regulatory environment driving demand.",
      items: [
        "Study the EU AI Act — understand the risk classification tiers (unacceptable, high, limited, minimal), the compliance requirements for high-risk AI systems, and the timeline for enforcement. Collibra has built tooling specifically for this",
        "Learn what Collibra AI Governance actually does: model cataloging, bias/drift monitoring, AI use case assessment, and agent governance. Understand how it differs from MLOps tools like MLflow or Weights & Biases",
        "Understand ISO 42001 (AI Management Systems) at a high level — Collibra achieved this certification in January 2025 and treats it as a major differentiator. Know what it certifies and why a CISO would care",
        "Be ready to discuss agentic AI governance — Collibra launched an MCP (Model Context Protocol) server so AI agents can access governed metadata. This is cutting-edge and shows you understand where the industry is heading",
      ],
    },
    {
      category: "Customer Success & Adoption Storytelling",
      urgency: "high",
      why: "Half the CE role is post-sale: driving adoption, reducing churn, expanding accounts. Kevin's Collibra rollout at Pfizer is his strongest story here, but he needs to frame it in customer success language, not internal project language.",
      items: [
        "Reframe the Pfizer Collibra story using customer success metrics: adoption rate, time-to-value, user satisfaction, governance coverage percentage. Even rough numbers are better than 'we rolled it out and people used it'. Reference the Data Citizens '24 session where Pfizer's Data Enablement org (Kevin's team) presented their Collibra journey alongside Deloitte — this proves the work had strategic visibility",
        "Learn the concept of 'value realization' — the CE job posting uses this phrase explicitly. It means helping customers achieve measurable business outcomes from the product, not just technical deployment. Prepare 2-3 examples of value you helped realize at Pfizer",
        "Study common Collibra adoption blockers: metadata fatigue, steward burnout, lack of executive sponsorship, governance perceived as overhead. Kevin likely encountered these at Pfizer — prepare stories about how he overcame them",
        "Understand net revenue retention (NRR) and why it matters to a SaaS company. CEs directly impact NRR through adoption and expansion. Be ready to discuss how your post-sale work would affect Collibra's business metrics",
      ],
    },
    {
      category: "The Transition Narrative",
      urgency: "critical",
      why: "Kevin is making a career pivot from internal governance manager to external-facing CE. Every interviewer will ask 'why this role?' and 'are you ready for customer-facing work?' He needs a polished, confident 90-second narrative that makes this feel intentional, not desperate.",
      items: [
        "Craft the narrative arc: 'I spent 4 years as a power user of Collibra at Pfizer. I became the person my business partners came to when they needed to understand what the platform could do. I realized I was already doing CE work — advocating for the product, training users, solving adoption challenges — but for an internal audience. Now I want to do it at scale, for the company that built the product I believe in.'",
        "Prepare specific 'proto-CE moments' from Pfizer: times you demoed a feature to a business unit, trained a new team on Collibra, solved a technical problem for a non-technical stakeholder, or expanded usage to a new department. These are your CE experience — you just didn't have the title",
        "Address the sales objection head-on: 'I know I don't have a traditional presales background. What I have is something harder to teach — deep product intuition from 4 years as a daily user, combined with the business acumen to connect product capabilities to stakeholder outcomes. The sales methodology I can learn in 90 days. Product conviction takes years.'",
        "Research the typical CE career path at Collibra specifically — if possible, find CEs on LinkedIn who transitioned from non-sales backgrounds. This proves it's a viable path and shows you've done your homework",
      ],
    },
    {
      category: "Hands-On Platform Depth (Free Resources)",
      urgency: "high",
      why: "Kevin has 4 years of Collibra governance experience at Pfizer, but interviewers will probe whether his knowledge extends to modules he didn't use (AI Governance, Data Quality, Marketplace) and whether he can talk about the platform like a CE, not an end user. There is no free sandbox or trial — but these public resources build real technical depth.",
      items: [
        "Register for Collibra University (university.collibra.com) — 200+ free self-paced courses covering the operating model, data stewardship, catalog concepts, and workflow basics. No customer license required for the free tier. Take the foundational courses on governance operating model and platform overview first",
        "Study the Developer Portal (developer.collibra.com) — fully public, no login needed. This is the most technically valuable resource: complete REST API reference (Core, Import, Search, Catalog, Data Quality APIs), GraphQL Knowledge Graph API, BPMN workflow engine documentation, and Groovy scripting guides. Understanding the data model (asset types, domains, communities, attributes) and API structure lets you speak about Collibra's architecture with confidence",
        "Read the Product Documentation (productresources.collibra.com) — publicly accessible, covers every module including AI Governance, Data Quality & Observability, Data Privacy, Lineage, and Workflow Designer. Focus on the modules you didn't use at Pfizer: AI Governance (model registries, EU AI Act assessment tool), Data Quality (automated rule creation, anomaly detection), and Data Marketplace (consumer portal, data product publishing)",
        "Watch the YouTube Product Demos playlist (youtube.com/@Collibra) — 18 videos, ~50 minutes total, updated Feb 2026. Shows the actual UI for glossary creation, lineage visualization, data profiling, and quality rules. Study the narrative structure: how Collibra's own team leads with the business problem, not the feature. This is the fastest way to build visual familiarity with screens you haven't used",
        "Browse the Collibra Community (community.collibra.com) — 11,000+ members, 60+ forums, open registration. Read 10-15 recent threads to absorb practitioner vocabulary, common implementation challenges, and the kinds of questions real customers ask. This is the closest you'll get to hearing customer pain points before being in the field",
        "Explore the Marketplace (marketplace.collibra.com) — publicly browsable integration catalog showing every connector (Databricks, Snowflake, SAP, Tableau, Power BI, AWS SageMaker, Alteryx) and workflow template. Know the breadth of the ecosystem — CEs need to position Collibra within a customer's existing data stack",
        "Know the Ranger certification system — Ralf is a 'Certified Collibra Ranger (3 Stars)' which means he completed 3 separate hands-on project-based exams (40-60 hours each, reviewed by a committee). Stars accumulate by passing different Ranger specialization tracks. The Ranger cert requires the Solution Architect cert first. Mentioning that you'd pursue Ranger certification after joining shows commitment to deep product mastery",
      ],
    },
  ],

  // ─── SE Skills Guide ────────────────────────────────────────────
  seSkillsGuide: [
    {
      title: "Discovery & Qualification",
      icon: "🔍",
      overview: "Discovery is the foundation of every SE engagement. Before you demo, before you scope a POC, you need to deeply understand the customer's current state, desired state, and the gap between them. Great discovery isn't interrogation — it's a guided conversation where you earn the right to propose a solution by first proving you understand the problem.",
      kevinBridge: "At Pfizer, you ran structured discovery sessions with BU stakeholders to identify governance maturity gaps, define domain onboarding priorities, and map Collibra capabilities to use cases. That IS discovery — you were qualifying internal 'customers' before proposing solutions. The difference in SE work is that you're doing this with external prospects who haven't committed yet, and your discovery directly impacts whether a deal moves forward.",
      concepts: [
        {
          term: "Open vs. Closed Questions",
          definition: "Open questions ('Tell me about your current data governance process') invite narrative and uncover latent pain. Closed questions ('Do you use Snowflake?') confirm facts. Great discovery uses 80% open, 20% closed. Open questions at the start, closed questions to confirm and sharpen.",
        },
        {
          term: "BANT Basics",
          definition: "Budget, Authority, Need, Timeline — the four pillars of traditional qualification. Is there money allocated? Are you talking to the decision-maker? Is there a real business pain? Is there urgency? CEs focus most on Need (technical validation) and help AEs validate Budget/Authority/Timeline.",
        },
        {
          term: "Pain vs. Interest",
          definition: "Interest is 'we're looking at data governance tools.' Pain is 'our CFO got embarrassed in a board meeting because two teams reported different revenue numbers.' Pain drives urgency and budget. Always dig for the pain behind the interest — who's affected, what's the cost of inaction, what happens if they don't solve this in 6 months?",
        },
        {
          term: "The Discovery Framework",
          definition: "Current State → Desired State → Gap → Impact → Timeline. Start with where they are today, understand where they want to be, identify what's preventing them from getting there, quantify the business impact of the gap, and establish urgency. This is the same structure you used mapping BU governance maturity at Pfizer.",
        },
        {
          term: "Multi-Threading",
          definition: "Never rely on a single champion. Discovery should map the full buying committee: economic buyer, technical evaluators, end users, and potential blockers. At Pfizer you navigated BU heads, data engineers, security teams, and business SMEs — that's multi-threading within an org.",
        },
      ],
      exercises: [
        "Write out the discovery questions you'd ask a prospect who says 'we're evaluating data catalog tools.' Start broad, then funnel down to specific pain, impact, and timeline. Aim for 15 questions.",
        "Take your Pfizer BU onboarding process and reframe it as a discovery-to-proposal flow: what questions did you ask each BU before designing their governance rollout? Write these down — they're your discovery muscle memory.",
        "Practice the 'tell me more' technique: for any answer a prospect gives, your next question should be a variant of 'can you help me understand that better?' or 'what does that look like in practice?' Record yourself doing this for 5 minutes.",
      ],
    },
    {
      title: "MEDDPICC Framework",
      icon: "📋",
      overview: "MEDDPICC is the enterprise sales qualification framework used by most B2B SaaS companies including Collibra's sales org. It stands for Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition. CEs don't own every element — AEs drive the deal — but CEs contribute to almost all of them through technical discovery, POCs, and stakeholder relationships.",
      kevinBridge: "You've already touched most MEDDPICC pillars at Pfizer without knowing the framework. You identified governance maturity gaps (Pain), built business cases with ROI metrics like 50% cost reduction (Metrics), navigated multiple decision-makers across BUs (Decision Process), and created champions who advocated for Collibra adoption (Champion). Learning the framework just gives you a shared vocabulary with the sales team.",
      concepts: [
        {
          term: "Metrics",
          definition: "Quantifiable business outcomes the customer wants to achieve. 'Reduce time-to-insight by 40%' or 'eliminate $2M in redundant licensing.' CEs help identify and validate these during discovery and POCs. Your Pfizer metrics (40% adoption growth, 30% cycle time reduction, 50% cost savings) are perfect examples.",
        },
        {
          term: "Economic Buyer",
          definition: "The person who can say yes when everyone else says no — typically a VP or C-level. They care about business outcomes, not features. CEs rarely present to the EB directly but must ensure the narrative reaches them. At Pfizer, these were your BU heads and data leadership.",
        },
        {
          term: "Decision Criteria",
          definition: "The formal and informal criteria the customer uses to evaluate vendors. Technical fit, integration capability, TCO, vendor support, security compliance. CEs directly influence this through demos and POCs. Your Alation-vs-Collibra evaluation (lineage depth, UI accessibility, mass operations, TCO) was exactly this.",
        },
        {
          term: "Decision Process",
          definition: "The steps, timeline, and stakeholders involved in making the purchase decision. Who evaluates? Who approves? Is there a formal RFP? Legal review? Security audit? Understanding this prevents deals from stalling. At Pfizer, you navigated exactly this when getting BU sign-off for Collibra adoption.",
        },
        {
          term: "Paper Process",
          definition: "The procurement and legal steps after a verbal 'yes' — MSA negotiation, security review, procurement approval, legal sign-off. Deals can die here if not managed. CEs support by providing security documentation, architecture diagrams, and technical compliance responses.",
        },
        {
          term: "Identify Pain",
          definition: "The core business problem driving the evaluation. Not 'we need a data catalog' (that's a solution) but 'our analysts spend 30% of their time finding and validating data' (that's pain). CEs must connect product capabilities to specific, quantified pain points.",
        },
        {
          term: "Champion",
          definition: "An internal advocate who has power, influence, and a personal reason to want Collibra to win. They sell internally when you're not in the room. CEs build champions by making them look good — giving them presentation materials, helping them build the internal business case, making their evaluation a success.",
        },
        {
          term: "Competition",
          definition: "Understanding who else is being evaluated and positioning against them. CEs must know competitive strengths and weaknesses cold. For Collibra, the main competitors are Alation, Informatica (now Salesforce), Atlan, and cloud-native tools (Databricks Unity Catalog, Google Dataplex).",
        },
      ],
      exercises: [
        "Take your Pfizer Collibra deployment and map it to every MEDDPICC letter. For each, write one sentence about what you did that corresponds to that element. This is your interview ammunition.",
        "For the Alation-to-Collibra migration story, identify: who was the Economic Buyer? What were the Decision Criteria? Who was your Champion? What was the Competition? This reframes a technical story in sales language.",
        "Read 3-5 MEDDPICC blog posts from Winning by Design or Force Management. Note how the framework applies to enterprise data governance deals specifically.",
      ],
    },
    {
      title: "Demo & Presentation Craft",
      icon: "🎬",
      overview: "A great demo is not a feature tour — it's a narrative that connects the customer's specific pain to your product's capabilities to a measurable business outcome. The structure is always: Problem → Capability → Outcome. Every click should have a reason. Every screen should advance the story. Christina told you the demo is ~50% of your evaluation at Collibra, so this is the highest-leverage skill to develop.",
      kevinBridge: "You conducted tailored platform demonstrations and executive walkthroughs at Pfizer to showcase lineage, stewardship workflows, glossary alignment, and policy enforcement. You've done internal demos that drove 40% adoption growth. The difference with external demos is the audience hasn't committed yet — you're persuading, not training. But your instinct for tailoring the demo to the audience and leading with business value (not features) is the right foundation.",
      concepts: [
        {
          term: "Problem → Capability → Outcome",
          definition: "The universal demo narrative structure. Start with the customer's stated pain ('Your analysts can't find trusted data'). Show the capability that addresses it ('Here's how Collibra's catalog lets them search, see lineage, and check certification status'). End with the outcome ('This reduces data discovery time from hours to minutes'). Never show a feature without connecting it to a problem and an outcome.",
        },
        {
          term: "Mixed Audience Technique",
          definition: "Enterprise demos often have technical evaluators, business stakeholders, and executives in the same room. Address each: 'For your data engineers, here's the API integration' → 'For your business users, here's the self-service portal' → 'For leadership, here's the governance dashboard showing compliance status.' Signal each transition so everyone knows when to pay attention.",
        },
        {
          term: "The 'Day in the Life' Narrative",
          definition: "Instead of showing features, walk through a persona's actual workflow. 'Sarah is a data analyst. She needs to build a report for the CFO. She opens Collibra, searches for revenue data, sees the lineage showing it comes from Snowflake, checks the certification status, and confidently builds her report.' This makes the product tangible and relatable.",
        },
        {
          term: "Handling Q&A Mid-Demo",
          definition: "Questions during a demo are buying signals — embrace them. If a question is on-topic, answer it immediately. If it's off-topic, acknowledge it and park it: 'Great question — I'll cover that in the lineage section, or we can circle back at the end.' Never dismiss a question. Never let one person's deep-dive derail the narrative for everyone else.",
        },
        {
          term: "Common Demo Mistakes",
          definition: "Feature dumping (showing everything instead of what matters). Not personalizing (generic data instead of industry-relevant examples). Going too deep too fast (showing API docs to a business audience). Not leaving time for Q&A. Not having a clear call-to-action at the end ('Based on what you've seen, does a POC make sense as a next step?').",
        },
      ],
      exercises: [
        "Build a 10-minute mock demo narrative for Collibra using the Problem → Capability → Outcome structure. Pick a persona (data analyst at a healthcare company) and walk through their 'day in the life.' Write the script, then practice delivering it to a mirror or camera.",
        "Watch 3 Collibra YouTube product demos and deconstruct them: What's the narrative structure? Where do they lead with business value vs. features? What would you change? Take notes on transitions between sections.",
        "Practice the 'mixed audience pivot' — take one Collibra capability (e.g., data lineage) and prepare three 30-second explanations: one for a CDO, one for a data engineer, and one for a business analyst. The same feature, framed three different ways.",
        "Record yourself delivering a 5-minute demo of any product you know well. Watch it back and note: filler words, pacing, screen transitions, whether you connected features to outcomes. This is uncomfortable but invaluable.",
      ],
    },
    {
      title: "POC/POV Execution",
      icon: "🧪",
      overview: "A Proof of Concept (POC) or Proof of Value (POV) is a time-boxed engagement where the customer validates that Collibra works in their environment with their data. It's the most technical phase of the sales cycle and where CEs have the most direct influence on the deal outcome. A well-run POC converts at 70-80%. A poorly scoped one wastes everyone's time.",
      kevinBridge: "Your phased domain onboarding pilots at Pfizer were essentially POCs — you scoped the work, defined success criteria (governance assets configured, stewardship model working, metadata flowing), time-boxed each phase, involved the right stakeholders, and measured outcomes. The GPD-IP domain buildout is a perfect example: you took a domain from zero governance to full Collibra implementation with a defined architecture and measurable results. That's POC execution.",
      concepts: [
        {
          term: "Scoping",
          definition: "Define exactly what will be demonstrated during the POC. Too broad = impossible to succeed. Too narrow = doesn't prove value. A good Collibra POC typically covers: one data domain, 2-3 data sources, governance workflow configuration, lineage visualization, and a specific business metric improvement. Agree on scope IN WRITING before starting.",
        },
        {
          term: "Success Criteria",
          definition: "Before the POC starts, both sides must agree on what 'success' looks like. These should be measurable and specific: 'Collibra can ingest metadata from our Snowflake instance within 4 hours' or 'Business users can find and understand data assets without IT assistance.' Vague criteria ('we'll know it when we see it') kill POCs.",
        },
        {
          term: "Time-Boxing",
          definition: "POCs should be 2-4 weeks maximum. Longer POCs lose momentum and executive attention. Build a week-by-week plan: Week 1 = environment setup + data source connection, Week 2 = governance configuration + workflow setup, Week 3 = user testing + refinement, Week 4 = results presentation + next steps.",
        },
        {
          term: "Stakeholder Involvement",
          definition: "The right people must be engaged at the right times. Technical team for setup, business users for validation, executives for the results presentation. The biggest POC risk is doing great technical work that no one with budget authority ever sees. Schedule the exec readout at the START, not the end.",
        },
        {
          term: "Closing the POC",
          definition: "A POC should end with a clear recommendation and next step. Present results against success criteria, quantify value demonstrated, and propose the path to production. 'We validated all 5 success criteria. Based on this, we recommend a 6-month implementation starting with your finance and compliance domains. Here's what that looks like.'",
        },
      ],
      exercises: [
        "Take your GPD-IP domain buildout and rewrite it as a POC proposal: scope document, success criteria, timeline, stakeholder plan, and closeout presentation. This reframes your best technical story in POC language.",
        "Design a mock 3-week Collibra POC for a fictional healthcare company that wants to govern their clinical trial data. Define: scope (which domains), success criteria (5 measurable items), weekly milestones, and the stakeholder engagement plan.",
        "Study Collibra's POV methodology if available in their documentation. Many vendors publish POV guides — search for 'data governance proof of value template' to understand common structures.",
      ],
    },
    {
      title: "Objection Handling",
      icon: "🛡️",
      overview: "Objections are not rejection — they're requests for more information. Every objection is a signal that the prospect is engaged enough to push back. The best SEs welcome objections because handling them well builds trust and advances the deal. The core pattern is: Acknowledge → Ask → Reframe.",
      kevinBridge: "At Pfizer, you regularly handled 'objections' from resistant BU heads, security teams concerned about PII exposure, and stakeholders comfortable with Alation who didn't want to migrate. When you walked the security team through exactly what Collibra's metadata connector retrieves (table names, column names — not row data), you were doing textbook objection handling: acknowledging the concern, providing specific evidence, and reframing the conversation. You've been doing this; now learn the formal patterns.",
      concepts: [
        {
          term: "Acknowledge → Ask → Reframe",
          definition: "Step 1: Acknowledge the concern genuinely ('I understand why that's a concern — data security is critical'). Step 2: Ask a clarifying question ('Can you help me understand specifically what data you're worried about being exposed?'). Step 3: Reframe with evidence ('Collibra's connector only reads metadata — table and column names — never the actual data in the rows. Here's the architecture diagram showing the data flow.'). This pattern works for 90% of objections.",
        },
        {
          term: "Turning Objections into Discovery",
          definition: "Every objection reveals something about the customer's priorities, fears, or past experiences. 'We tried a data catalog before and it failed' tells you they have scar tissue — dig into what went wrong and position Collibra differently. 'Our team won't adopt another tool' tells you adoption is the real concern, not the technology.",
        },
        {
          term: "Competitive Objections",
          definition: "When a prospect says 'Alation/Informatica/Atlan does this too,' don't trash the competitor. Instead: acknowledge ('They're a solid product'), differentiate on facts ('Where Collibra differs is in the depth of our lineage visualization and our unified governance across data AND AI'), and bridge to value ('Let me show you specifically how that difference would affect your workflow'). See Demo Prep for Collibra-specific competitive positioning.",
        },
        {
          term: "The 'Feel, Felt, Found' Pattern",
          definition: "For emotional or experiential objections: 'I understand how you feel — several customers we work with felt the same way initially. What they found was [specific outcome].' This validates the concern while providing social proof. Use sparingly — it can feel formulaic if overused.",
        },
        {
          term: "Knowing When Not to Handle",
          definition: "Some objections are legitimate deal-breakers. If Collibra genuinely can't do what the customer needs, say so. 'That's not something we support today, but here's what's on our roadmap' builds more trust than a workaround that won't hold. Christina praised your transparency about the demo gap — that instinct serves you well in objection handling.",
        },
      ],
      exercises: [
        "List the 5 most common objections you heard from Pfizer stakeholders during the Collibra rollout. For each, write out the Acknowledge → Ask → Reframe response you used (or wish you had used).",
        "For each Collibra competitor (Alation, Informatica/Salesforce, Atlan, Databricks Unity Catalog), write a 2-sentence differentiator and a bridge statement. Practice saying them out loud until they feel natural.",
        "Role-play: have a friend (or record yourself) play a skeptical prospect. They say 'we already have Databricks Unity Catalog — why do we need Collibra on top of it?' Practice handling this without trashing Databricks.",
      ],
    },
    {
      title: "Commercial Awareness",
      icon: "📊",
      overview: "CEs are technical sellers. You don't carry a quota directly, but your work drives pipeline, accelerates deals, and expands accounts. Understanding how revenue works in enterprise SaaS — pipeline stages, ARR, NRR, land-and-expand — makes you a better partner to your AE and a more strategic CE. Collibra's CE compensation is 70/30 (base/variable), meaning 30% of your pay is tied to deal outcomes.",
      kevinBridge: "You drove measurable business outcomes at Pfizer that map directly to commercial language: 40% adoption growth is 'expansion within an existing account,' 50% licensing cost reduction from Alation consolidation is 'competitive displacement,' and onboarding new BUs is 'land-and-expand.' You already think in terms of business impact — now learn to express it in the vocabulary your AE and sales leadership use.",
      concepts: [
        {
          term: "Pipeline & Stages",
          definition: "Enterprise deals move through stages: Prospect → Discovery → Demo → POC → Proposal → Negotiation → Closed Won/Lost. CEs are most active in Discovery through POC. Understanding where a deal is in the pipeline helps you prioritize your time — a deal in POC stage needs more of your attention than one in early Discovery.",
        },
        {
          term: "ARR / NRR",
          definition: "Annual Recurring Revenue (ARR) is the total annualized subscription revenue. Net Revenue Retention (NRR) measures expansion within existing customers. NRR > 100% means existing customers are spending more over time. Collibra's enterprise pricing starts at ~$170K/year with typical deals at $500K-$2M+. CEs influence both new ARR (new logos) and expansion ARR (upselling modules to existing customers).",
        },
        {
          term: "Land and Expand",
          definition: "Win a focused initial deal (land) then grow the account over time (expand). A customer might start with Data Governance and Data Catalog, then add Data Quality, AI Governance, and Data Privacy in subsequent years. This is exactly what you did at Pfizer — starting with core governance and expanding to lineage, quality, and cross-platform integration.",
        },
        {
          term: "CE Contribution to Revenue",
          definition: "CEs influence revenue through: (1) discovery that qualifies real opportunities vs. tire-kickers, (2) demos that build executive conviction, (3) POCs that prove technical fit and value, (4) technical close plans that remove blockers, and (5) post-sale advisory that drives expansion. Collibra's 30% variable comp reflects this direct impact on deal outcomes.",
        },
        {
          term: "Forecasting & CRM",
          definition: "Sales teams forecast revenue using CRM data (Salesforce). CEs contribute by updating technical win/loss status, POC outcomes, and deal risks. Knowing how to log your activities and flag risks in the CRM makes you a trustworthy team member. 'The POC went well but the security review is blocked on a compliance question' is the kind of signal that helps AEs manage the forecast.",
        },
      ],
      exercises: [
        "Rewrite your top 3 Pfizer achievements in commercial language: What was the 'deal' (BU onboarding)? What was the 'ARR' equivalent (platform licensing allocated to that BU)? What was the 'expansion' (additional modules or capabilities deployed)?",
        "Study Collibra's pricing model: base platform ~$170K/year, typical enterprise deals $500K-$2M+. What modules would you recommend for a land deal vs. an expand deal? How would you size a POC to demonstrate value that justifies the price?",
        "Read 2-3 articles on 'CE/SE quota attainment' and 'how SEs are compensated.' Understanding the 70/30 split and what drives the variable component helps you prioritize your work on high-impact activities.",
      ],
    },
    {
      title: "Learning Resources",
      icon: "📚",
      overview: "You don't need years of SE experience to interview well — you need to demonstrate that you understand the role, can learn fast, and have transferable skills. These resources will help you build SE fluency before your interviews and accelerate your ramp if you get the job.",
      kevinBridge: "Your learning trajectory at Pfizer — from financial analyst to data governance leader to Collibra platform expert — proves you can ramp on complex domains quickly. The same learning approach applies here: structured self-study, hands-on practice, and learning from practitioners. You've already done the hardest part (learning the product). Now learn the sales motion around it.",
      concepts: [
        {
          term: "Books",
          definition: "• 'Mastering Technical Sales' by John Care & Aron Bohlig — the definitive SE handbook, covers discovery, demos, POCs, and career development. Read chapters 1-5 before your interviews.\n• 'The Challenger Sale' by Dixon & Adamson — the mindset that top sellers teach customers something new, not just respond to needs. Relevant to how CEs add value beyond product knowledge.\n• 'SPIN Selling' by Neil Rackham — the research behind why Situation, Problem, Implication, Need-Payoff questions outperform traditional selling. Foundational for discovery skills.",
        },
        {
          term: "YouTube & Podcasts",
          definition: "• 'We the Sales Engineers' podcast — real SEs discussing daily work, career paths, and skill development. Start with episodes on 'transitioning into SE from technical roles.'\n• 'PreSales Collective' YouTube channel — demo best practices, discovery techniques, and career advice from SE leaders.\n• John Barrows / JB Sales on YouTube — tactical sales skills that apply to CEs. His discovery and objection handling videos are excellent.\n• Watch Collibra's own YouTube demos (18 videos, ~50 min total) to study how their team presents the product.",
        },
        {
          term: "MEDDPICC Materials",
          definition: "• Force Management blog (forcemanagement.com) — the company that created MEDDPICC. Free articles explaining each element with enterprise examples.\n• 'MEDDICC' by Andy Whyte — the definitive book on the framework. Short read, very practical.\n• Winning by Design (winningbydesign.com) — excellent free resources on recurring revenue sales methodology including MEDDPICC applications.",
        },
        {
          term: "Collibra-Specific",
          definition: "• Collibra University (university.collibra.com) — 200+ free courses. Take the foundational governance and platform overview courses.\n• Collibra Developer Portal (developer.collibra.com) — public REST API docs, data model reference, workflow engine docs.\n• Collibra Community (community.collibra.com) — 11,000+ members, read recent threads to absorb practitioner vocabulary.\n• Collibra YouTube Product Demos — study the narrative structure of how Collibra's own team presents.",
        },
        {
          term: "Communities & Networking",
          definition: "• PreSales Collective (presalescollective.com) — largest SE community, free Slack workspace, job boards, and events. Join and introduce yourself.\n• Sales Engineering subreddit (r/salesengineers) — candid discussions about the role, compensation, and career transitions.\n• LinkedIn: Follow SE leaders like John Care, Chris White, and Collibra's own CE team members. Engage with their content.",
        },
      ],
      exercises: [
        "Order or download 'Mastering Technical Sales' by John Care. Read chapters 1-5 (The Role, Discovery, Presentations, Demos, POCs) before your hiring manager interview. Take notes on anything that maps to your Pfizer experience.",
        "Join the PreSales Collective Slack community and read 10 recent threads. Note the vocabulary, common challenges, and how experienced SEs describe their work. This builds conversational fluency.",
        "Complete 3 Collibra University foundational courses. Screenshot your completion certificates — mentioning these in interviews shows initiative and commitment to ramping quickly.",
      ],
    },
  ],
}

// ─── 4. Christina Olson Recruiter Screen (Pre-Analyzed) ──────────

export const christinaInterview = {
  interviewerName: "Christina Olson",
  interviewerRole: "Talent Acquisition — Recruiter Screen (30min)",
  scheduledAt: null,
  transcriptRaw: `Recruiter Screen — Christina Olson, Collibra Talent Acquisition
(Voice-to-text transcript — raw, unedited)

This is the Calibra customer engineer role, speaking with Christina Olson. She should be calling shortly.ly. Hello? Hey, this is Kevin? Yeah, this is he. Hey there, Christina from K. How are you? Hi, I'm doing well. How are you? good. I just left you an email and disregard that. I was able to hunt down your phone number that you sent me in in the confirmation email. It wasn't I don't know why sometimes it doesn't carry over in Greenhouse, and it didn't, so I was like panicking. I'm like, oh, no, don't have this number. No worries. in here. I found it. You don't have to respond. Good. Awesome. Is you having a good day? I am. How's yours going? Yeah, yeah, super, super full, as usual. on Friday, I always think I'm under the delusion that it's going to be like an easy, relaxing day, and then it ends up being like, nope, five million things. We got to clean up, clean it from the week, right? It's just it's just very real. But it's nice weather outside, which I'm super excited about. It feels like spring spring has arrived. Yes, I'm hoping for it. Right? It's real. It's very real. Where are you at? I forget where you're at. I know Troy recommended you. Yeah, currently located in Memphis. Oh, are you? Okay. So, yeah, you're super, well, not not super near me, but near enough. I'm in kind of outside Chattanooga area. Oh, okay, yeah. It's an amazing area. Yeah, yeah. So, yeah, but kind of kind of close, but not really. Same state,s. Yeah, same state, right? We just it's so long. There was like a few people that were throwing me off when I first moved here. I moved from kind of outside of Atlanta.anta area, like one of the S of Atlanta. I lived there for like the last eight years and I moved up here. And that's a long story, which I won't go into. Basically, I'm moved up here and people are like, okay, so I need to call you at Central Tim, right? And I'm like, "No, I'm still, I'm still Eastern Standard Time. They're like, "No, you're not. Like we've gotten to like, "Are you miss me? They're like, Tennessee,?ee is in, you know, Central. And I'm like, part of it is it's a very wide, long state. So half of it probably is in Central and half of it's probably in East Coast. And it just like blew everybody's minds. Like they just wouldn't, they wouldn't believe me. And I'm like, no, it's a really long state. I don't know what to tell you. Well, I know exactly what you're talking about. Yeah. It't you central? I am central, yeah. I think it's somewhere like if you're heading east, a little past Nashville, is the time zone line. Oh, is that the line? Yeah, yeah, yeah. Okay, that's the line. Yeah, okay, so that helps me, because I think when I went up to Nashville for the first time, I believe they're also on Central, at least parts to where we were. They were on Central Standard Time. So, anywho, so why why are you wanting to do this position? Like, why are you wanting to interview here? I know Troy recommended you, but, you know, what's drawing you to kind of the role here at Kibra as a CE, because you're kind of coming from, you know, a different, a different background working at Pfizer and all that, still doing data governance, but I'd like to hear from you kind of a little bit of a summary, which be great. Sure, of course. Yeah, so, you know, I've spent the last several years at Pfizer. I was leading their Enterprise Calibra deployment along with their migration from Elation, another, another.. Yes. Another catalog, migrating it over to Calibra. And so, from there, you know, I was supporting many different users across many different business units. And so with that, you know, I was responsible for onboarding, lineage integration, and mainly driving platform adoption. So through that work, you know, I found, I really enjoyed bridging that business and technical teams and helping those stakeholders understand how governance translates business value to them. So that's kind of what drew me to the customer engineering role. I feel like I would be applying that experience across multiple organizations as opposed to just one enterprise. I got you, yeah, no, 100%. That's super cool. I didn't realize that you were working with those integr, so that's going to give you a different, little bit of a different perspective, which will be probably exciting for the team. So to kind of give you an idea, Troy won't be on the c, I think I think he's traveling or attitude, but the rest of the team will. and kind of how we're doing this is we have the last couple of roles that the team, the team's team in the field. They've shifted some people around to different teams. And so it's kind of changed a little bit. So what we're doing is at our meetings that we have, and we're going to have it here in a little bit, like in about an hour. And we go through the resume and they decide, you know, which hiring manager would be best for you to speak with first, right? And so more than likely won't be Troy since he recommended you, but the team will kind of give me an idea of the path that they're kind of seeing. You go through, right, here at Calibra. So kind of the the routine that we do or we try to do it this way is you talk with obviously a recruiter, then from there you go to the hiring manager, the rest of the rounds, including the hiring manager round, will all be 45 minute Zoom interviews, right? And then if you pass the hiring manager round, you go to what I call the panel. It's's not a panel interview, though. It's just confines of multiple interviews, so a peer, a partner, another manager. Sometimes they move the partner and the manager role to after the demo, the demo will be like pretty much, I like to just share with people. It's kind of like in our school reports, right? Where the teacher is say this is like 50% of your grade or whatever. It kind of seems like that with the demo because they just want to make sure people can kind of adjust talking the customers, doing Q&As, your presentation skills, all these types of things. I'll give you all the information you're going to need in order to complete data, including with like a blank deck to use if you want to use that for your your demo. And that will be an hour long. I'll give you all the instructions for that. But sometimes they kind of shift around those last steps. The most important step I feel like is the interview with the peer because they're doing the same exact job you're going to be doing and just bring a ton of questions, right? I mean, just bring everything that you want to know, all the ins and outs, the day and the lives of the customer engineer here at Calibra, and they'll be able to get clarity, if you will, on what you're going to be measured against, right? So that's kind of why we have that measure the success section also on our job descriptions, you go, okay, like in one, two, three months, this is what I'm going to be doing and what I'm going to be measured against, which I just, that's how my brain works. I like to know. So I just feel like it's super, super helpful. Any questions around any of that? No, no, thank you for that. That is very helpful. You did mention a panel interview, but it's not a panel interview. I didn't quite understand that. Yeah, so it it's not all one energy, right? With like three different people. So it's all separate interviews. You'll be with like a peer and a separate interview. It'll be 45 minutes Zoom. Then there'll be a partner. Usually usually an AVP of the territritory that you would be supporting, right? So you'd meet with one of them. So one of the sales folks, and then another manager, if they need to think about shifting you over to a different territory or your team, then they kind of loop in another manager round, and then that demo that you'd have as well is kind of a separate, the last one of the last steps. Is that clear? Yeah, that is clear to me. Okay, okay, awesome. And I'll let you know prior to, like I usually, as much as I can, I try to send you know, who you're going to be interviewing with, right? So you can kind of look them up on LinkedIn, right, and like formulate your questions around around that. You have some kind of starting point, at least with within the interviews and stuff like that. Questions go really the long way here. I Cleaver, because one of our core values, they just recently changed them all. They still kept my favorite one from when I worked here years ago, and now it is be respectfully direct, which I just really appreciate, because you see that in the interview process. Everybody tries to be very transparent, giving you an opportunity to ask all your questions so you know exactly what Khaliper's about, what the team's about, that you'd be working on, right, like leadership styles, all that kind of stuff. Yes. Okay, great. Yeah. And, you know, I love that core value. A value at Pfizer was called Straight Talk, so I feel like it's we're in the same alignment. Yeah., I just it's like my favorite I feel like I just cuts all of the bowls, right? And you can just get right down to what needs to happen, right? And like, let's just be super transparent. We make sure that this works for both sides, right? You know? So it just, I feel like it saves tons of time. Now, as far as location, we already talked about that you're in Memphis, Central Standard Time, which is great because we have a need for central folks. I know that we have quite a few roles. I think we have one in East Coast, and then the rest are all going to be in that central. So that's perfect. And then as far as verticals, like what, again, you're coming from a different experience. Like, have you guys broken it up like that? Were you work strictly with certain verticals, or how was that kind of structured? Um, yeah, my reporting structure, I was sort of what we call a digital organization. And Okay. It depended on our internal customer's needs. I was I was placed in like the people experiences or HR function and that's kind of like where I was, but, you know, it all depended on the customer's needs and the bandwidth of the team. Yeah. Yeah, obviously.. Okay, I just kind of figured it would be a little bit different. So, like, for here at Calibra, we haven't kind of broken up, you know, obviously, all of government, federal, public sectors sled, all of those things are treated kind of separately as far as vertical vertical wise. And then we have healthcare as a separate healthcare like fin is separate, and then also usually financial is kind of a separate vertical, and then everything else is kind of spare game within these regular enterprise roles. We're only really tapping into the Enterprise markets and things like that. And there is a little bit of travel. I like to make sure people know this, too, on the first call is there is a little bit of travel, so I asked Rece, he's kind of the main leader for for the whole CE team. He said, it's not, it isn't anywhere near 30%. He said, butut it is picking up and it could be just let people know that it is up to 30% of travel, make sure people are good with that. Is that feasible for you for you in this role? Yeah, you know, I saw the 30% in the job posting, and you know, I was comfortable with that. Yeah. Okay, okay, perfect. like checking in. And then when are you looking to make a move? Like, why are you looking? What is your ideal timeline? Tell me a little bit about that? Yeah, I know, that's a great question. You know, I think it depends on, you know, the flexibility of the team and the culture and the fit. You know, right now, I want to make sure, transitions go well within you know, my current position and then see how it goes from there. You know, after you know, I meet with the team and able to ask them my questions. And but you know, I'm flexible to the current timeline. Yeah, awesome. Perfect. And then did you see the comp band on the job description? Do you have a certain number you're trying to target? Again, I know it's going to be a little bit different because you're kind of going from a different title and all that, but is there a certain number you you're trying to target on your next move? Yeah, so I did see the conversation range. You know, I'm aligned with like the upper half of that posted range, you know, kind of given my direct Kibra experience as a customer of Kibra. But that's, you know, having said that, you know, I'm open to understanding the full compensation structure. Yeah. Yeah, so we're kind to be it's pretty standard kind of in our industry that it's like a 7030 split, right, for customer engineers, so 70% based 30% based on commissions. The team can kind of go into the commission structure better We just, you know, recruiters, we don't know how that's kind of all broken down, how you get to that 30%. But basically it's a 7030 split, then there's all the other standard stuff. There's R1k, right, a health benefit start on D1. There's an RSU package also, so depending on level and rule and all that, the board has basically determined certain RSU levels for each one of those. So we'll go into that further in the process, too, but that's part of the package. Again, super standard for your vesting, right, through that through that packageage. So that pretty much kind of wraps it up in a nutshell, just the generalities. And then, as far out could go, Hold hold on, Christina, you're breaking up a little bit.. Could you repeat that? Yeah, yeah, yeah. What did you hear last? Nothing in the past 30 seconds. Oh, gotcha. Okay. So can you hear me okay? Yes. Okay. So basically 7030 split, and that is kind of broken up. The team can kind of go into what the 30% is for the customer engineers how you, you know, attain that. And then for us, it's basically the 70% is obviously the base. So that number you see on the job description is what that 70% is, right? It's not the total OTE package. And then there's RSU package that's given. That's determined from the board. And basically we can go into that more detail, but there is a four-year vest, pre-standards four-year vest with that. And then all the standard stuff, like 401k medical benefits start on day one, unlimited paid time off, you know, all that kind of stuff. We have a whole packet that you'll receive with the offer letter, right? So you can kind of go through all of that. I usually get on the phone with people and just go over anything that's kind of pressing. At that stage, right, we can kind of talk through things in more detail, but anything kind of top of mind for you that you'd like to know further. I guess, you know, how is the customer engineer team structured? I know you said there's different hiring managers, you know, that will be kind of a thought out process, you know, next after this call. But Yeah. I guess in terms of like a a number, like how many, how many customer engineers per per manager So the team, and can you hear me, feel because it's definitely going like long delays on my end. I don't know if that was happening for you. I can hear you perfectly fine. Okay, okay, perfect. It's like these long delays, so I don't know if there's like a disconnect with the call that I need to call you back or something. He basically ask the hiring manager when he talks to them because with all the shifting, we don't know exactly how many are on each team. I do know that they always, a Kibra of the standard, is always kind of two customer engineers are funneling into usually two to three AEs, right? So that's kind of the ratio of the team. But definitely for each territory, it's going to be slightly different. So when you talk to the hiring manager, bring that question because they'll be able to answer it like authentically of what's actually happening on their team. Yeah. Okay, well, thank you. I appreciate that. Yeah. Yeah. totally. And then I guess we are good. So what I'm going to do is get on with the team in a little while and go through, you know, all the new people that were kind of referred in and see where they're thinking people should be moved onto for their first firing manager round. And then I will circle back with you this afternoon. Any other questions, though, that I can answer before that? No, I think that's it. Thank you very much. Okay, perfect. Yeah, no, thank you. And then then I will absolutely let everybody know by the end of today after the meeting. So imagine before 5 p.m. Eastern Standard Time today, I'll let you know, it'll be allford Greenhhouse., very similar, right? Scheduling. And then I've been telling people, I do most of my own scheduling as well just because I like to do that because I feel like it makes things go quicker, but I am going to be out of office Thursday and Friday of next week, so I am going to be whooping in the other recruiter, which is Rebecca, and then Mohammad he's been helping her with with scheduling. So you may see correspondence from them and to kind of keep things moving through those few days. Yeah. Okay, that sounds good. Perfect. Thanks, Kevin. Have a good rest of the day. Hey, thank you and have a good weekend as well. Thank you so much. Bye bye. Bye.`,
  status: "analyzed",
  analysis: {
    overallTone: "Warm, encouraging, and informative. Christina was clearly impressed by Kevin's direct Collibra experience and conducted the call more as a mutual exploration than a screen. She shared significant process intel unprompted, which is a positive buying signal.",
    summary: "This was a strong recruiter screen. Kevin effectively positioned his unusual background (internal Collibra power user transitioning to external CE) as a differentiator rather than a liability. Christina explicitly flagged his honesty about the demo gap as aligned with Collibra's 'be respectfully direct' value. She advanced him to the hiring manager round on the spot.",
    questionsAsked: [
      {
        question: "Tell me about yourself and what drew you to this role.",
        myResponse: "Kevin led with his 10-year Pfizer tenure, 4 years of Collibra platform experience across 10+ BUs and 1,000 users, and the Alation-to-Collibra migration. Framed the transition as wanting to do CE work 'at scale for the company that built the product.'",
        assessment: "strong",
        notes: "Excellent framing. The 'internal CE transitioning to external CE' narrative landed perfectly. Christina's response ('that's rare — most CE candidates come from other SE roles') confirmed this differentiation. For the HM round, add specific metrics earlier: '40% adoption growth, 50% licensing cost reduction.' Numbers build credibility faster than narratives.",
      },
      {
        question: "How do you feel about the demo component being weighted at ~50%?",
        myResponse: "Kevin acknowledged he hasn't done formal external demos, but referenced internal presentations to BU leaders. Said he'd want to 'practice and prepare specifically.'",
        assessment: "strong",
        notes: "This was the pivotal moment. Kevin could have bluffed or deflected, but chose transparency. Christina explicitly praised this as demonstrating 'be respectfully direct.' For the HM round, go further: 'I've already started building a 10-minute mock demo narrative and I'm studying your YouTube demos for structure.' Show preparation, not just honesty.",
      },
      {
        question: "Does the compensation range work? ($140-175K base, 70/30 split, RSUs over 4yr)",
        myResponse: "Kevin confirmed the range works and appreciated the transparency.",
        assessment: "adequate",
        notes: "Fine for a recruiter screen — you don't negotiate here. But note the intel: 70/30 base/variable split and 4-year RSU vesting. Use this in later stages if comp comes up again. The total comp with OTE could be $200-250K+.",
      },
      {
        question: "How does up to 30% travel sound?",
        myResponse: "Kevin said travel works, mentioned SF base but flexibility to relocate, and proactively connected his pharma vertical experience to territory alignment.",
        assessment: "strong",
        notes: "Good strategic move connecting pharma experience to potential vertical alignment. Christina flagged it for the hiring manager, which means it'll be part of her debrief notes. Repeat this in the HM round — it's a genuine differentiator for pharma/life sciences accounts.",
      },
      {
        question: "Do you have any questions for me?",
        myResponse: "Asked about biggest CE challenges and onboarding for non-traditional backgrounds.",
        assessment: "strong",
        notes: "Both questions were strategic and showed self-awareness. The AI governance challenge question gave Kevin an opening to mention his Stevens AI Certificate, which he used well. For the HM round, prepare deeper questions: 'What does the first 90 days look like for a CE? What separates your top performers from average ones? How does the CE team interact with Product?'",
      },
    ],
    strengths: [
      "The 'internal CE to external CE' narrative is compelling and differentiated — Christina validated it explicitly",
      "Radical transparency about the demo experience gap turned a potential weakness into evidence of cultural fit",
      "Proactive connection of pharma vertical experience to territory strategy shows commercial thinking",
      "Natural mention of AI Certificate in context (not forced) demonstrated genuine intellectual curiosity",
      "Asked questions that revealed self-awareness about gaps while projecting confidence about strengths",
      "Picked up on Christina's 'be respectfully direct' value mention and immediately demonstrated it with the governance compliance example",
    ],
    areasForImprovement: [
      "Lead with quantified impact sooner — the 40% adoption growth and 50% cost reduction numbers came mid-conversation instead of in the opening pitch",
      "The Alation migration story was mentioned but not developed — for the HM round, be ready to tell this as a full STAR story with metrics",
      "Didn't ask about the team structure, current CE team size, or who he'd be working with — these show you're evaluating them too",
      "Could have asked about the specific customers or use cases CEs handle in the Central region to show territory awareness",
      "The relocation mention was slightly premature — Christina didn't ask about it and it could signal uncertainty about current location fit",
    ],
    interviewerSignals: [
      "Christina shared the full interview process unprompted — this is a strong positive signal, means she's already selling you on the role",
      "She said 'I think your Collibra experience is genuinely differentiating' — this will be in her debrief notes to the HM",
      "She disclosed the 50% demo weighting and comp structure transparently — recruiter trust signals that she sees Kevin as a real candidate",
      "The 'be respectfully direct' value call-out was both a test and a coaching moment — Christina was telling Kevin what Collibra values most",
      "She mentioned 'we've had people come from non-SE backgrounds before and succeed' — this is her pre-handling the objection for internal stakeholders",
      "Immediate advancement to HM round (no 'we'll be in touch') shows high conviction",
    ],
    postReflection: "",
    nextSteps: [
      "Build the 10-minute mock Collibra demo NOW — the demo round is 50% of the grade. Watch at least 3 Collibra demo videos on YouTube and model their narrative structure",
      "Quantify everything for the HM round: 10+ BUs, 1,000 users, 40% adoption growth, 50% cost reduction, 30% cycle time improvement, 25% compliance improvement. Lead with numbers.",
      "Prepare the Alation-to-Collibra migration as a full STAR story — this is your best 'I've been in the trenches with this product' proof point",
      "Research the CE Manager for the Central region on LinkedIn — understand their background and what they might prioritize",
      "Prepare 3-5 deeper questions for the HM round: team structure, 90-day plan, top performer traits, CE-to-Product feedback loop, territory specifics",
    ],
  },
  interviewerNotes: "Christina Olson — Collibra Talent Acquisition, near Chattanooga area (moved from Atlanta). Troy recommended Kevin (internal referral). Key intel: demo round ~50% of grade, peer interview 'most important step', 70/30 comp split (JD number = 70% base, not total OTE), RSU 4yr vest, 401k + health day 1 + unlimited PTO, 2 CE per 2-3 AE ratio, travel 'isn't anywhere near 30%' per Rece (CE team leader) but picking up. Verticals: gov/fed/SLED separate, healthcare separate, financial separate, rest is enterprise. Core value: 'be respectfully direct' (recently changed values, kept this one). Process: recruiter → HM (45min Zoom) → panel (separate interviews: peer, partner/AVP, possibly another manager) → demo (1hr). Christina OOO Thu/Fri next week — Rebecca and Mohammad handling scheduling via Greenhouse.",
}
