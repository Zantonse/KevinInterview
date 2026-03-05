// Seed data for Kevin Verzosa's Collibra Customer Engineer application
// Split into 4 normalized exports for the v3 data model

// ─── 1. Kevin's Profile ─────────────────────────────────────────

const RESUME_RAW = `Kevin Verzosa
Data & AI Enablement Leader | Enterprise Data Strategy | AI & Agent Governance
San Francisco, California | 500+ connections

EXPERIENCE

Data Enablement & Governance Manager — Pfizer (Aug 2021 - Aug 2025, 4 yrs)
- Led enterprise deployment of Collibra Data Intelligence Cloud across 10+ business units and 1,000+ active users, serving as internal product champion and primary escalation point for platform adoption
- Orchestrated migration from Alation to Collibra, managing data mapping, stakeholder communication, and zero-downtime cutover across 3 business units
- Grew platform adoption by 40% year-over-year through targeted training programs, executive sponsorship campaigns, and self-service governance workflows
- Integrated Collibra with Databricks Unity Catalog and Snowflake to create unified metadata lineage across the modern data stack
- Reduced metadata governance cycle time by 30% by redesigning stewardship workflows and automating data quality rule propagation
- Achieved 50% licensing cost reduction by consolidating redundant governance tooling (SAP BusinessObjects metadata, legacy catalog) into Collibra
- Reduced non-compliant events by 25% through governance of HIPAA/GDPR policies
- Managed team of developers and coordinated with project managers on governance initiatives

Sr. Associate RPA Governance, Security & Compliance — Pfizer (Jan 2020 - Aug 2021, 1.7 yrs)
- Liaised between technical and business teams as business analyst for RPA governance
- Ensured business requirements were understood by development teams
- Managed security and compliance for RPA implementations across enterprise

RPA Developer — Pfizer (Feb 2018 - Jan 2020, 2 yrs)
- Part of pilot program for robotic process automation of Excel reporting
- Developed automation scripts to save time on manual dashboard creation

Financial Planning Analyst — Pfizer (Sep 2015 - Feb 2018, 2.5 yrs)
- Created Excel dashboards and KPI reports for financial planning analysts
- Owned KPI dashboard tracking on-time and accuracy performance
- Built VBA-driven automated reporting

EDUCATION
- Management of Artificial Intelligence Certificate — Stevens Institute of Technology
- Master of Science, Management Information Systems — University of Memphis
- BBA, Information Technology Management — Saint Louis University

CERTIFICATIONS
- Certified Scrum Product Owner (CSPO) — Scrum Alliance, Apr 2023
- Team Leadership — McKinsey & Company, Sep 2024

SKILLS
Collibra DIC & Edge (Expert), Databricks Unity Catalog (Strong), Snowflake (Strong), Tableau (Moderate), Cloud APIs (Moderate), RPA Tools (Strong), Jira (Strong), SQL (Moderate), Java (Basic), Data Governance/Compliance (Expert)`

export const kevinProfile = {
  name: "Kevin Verzosa",
  headline: "Data & AI Enablement Leader | Enterprise Data Strategy | AI & Agent Governance",
  location: "San Francisco, California",
  resumeRaw: RESUME_RAW,
  careerArc: [
    {
      title: "Data Enablement & Governance Manager",
      company: "Pfizer",
      dates: "Aug 2021 - Aug 2025 (4 yrs)",
      bullets: [
        "Led enterprise deployment of Collibra Data Intelligence Cloud across 10+ business units and 1,000+ active users",
        "Orchestrated migration from Alation to Collibra — data mapping, stakeholder communication, zero-downtime cutover across 3 BUs",
        "Grew platform adoption by 40% year-over-year through targeted training and self-service governance workflows",
        "Integrated Collibra with Databricks Unity Catalog and Snowflake for unified metadata lineage",
        "Reduced metadata governance cycle time by 30% by redesigning stewardship workflows",
        "Achieved 50% licensing cost reduction by consolidating redundant governance tooling into Collibra",
        "Reduced non-compliant events by 25% through HIPAA/GDPR policy governance",
      ],
    },
    {
      title: "Sr. Associate RPA Governance, Security & Compliance",
      company: "Pfizer",
      dates: "Jan 2020 - Aug 2021 (1.7 yrs)",
      bullets: [
        "Liaised between technical and business teams as business analyst for RPA governance",
        "Managed security and compliance for RPA implementations across enterprise",
      ],
    },
    {
      title: "RPA Developer",
      company: "Pfizer",
      dates: "Feb 2018 - Jan 2020 (2 yrs)",
      bullets: [
        "Part of pilot program for robotic process automation of Excel reporting",
        "Developed automation scripts to save time on manual dashboard creation",
      ],
    },
    {
      title: "Financial Planning Analyst",
      company: "Pfizer",
      dates: "Sep 2015 - Feb 2018 (2.5 yrs)",
      bullets: [
        "Created Excel dashboards and KPI reports for financial planning",
        "Owned KPI dashboard tracking on-time and accuracy performance",
        "Built VBA-driven automated reporting",
      ],
    },
  ],
  education: [
    { degree: "Management of Artificial Intelligence Certificate", institution: "Stevens Institute of Technology" },
    { degree: "Master of Science, Management Information Systems", institution: "University of Memphis" },
    { degree: "BBA, Information Technology Management", institution: "Saint Louis University" },
    { degree: "Certified Scrum Product Owner (CSPO)", institution: "Scrum Alliance, Apr 2023" },
    { degree: "Team Leadership Certificate", institution: "McKinsey & Company, Sep 2024" },
  ],
  skills: [
    "Collibra DIC & Edge",
    "Databricks Unity Catalog",
    "Snowflake",
    "Tableau",
    "Cloud APIs",
    "RPA Tools",
    "Jira",
    "SQL",
    "Data Governance/Compliance",
    "HIPAA/GDPR",
  ],
  strengths: [
    "4 years hands-on experience with the Collibra platform at Pfizer — direct product knowledge most candidates won't have",
    "Deep data governance and compliance expertise (HIPAA/GDPR policy enforcement, metadata governance)",
    "Master's degree in MIS plus AI Certificate — exceeds bachelor's requirement and demonstrates continuous learning",
    "Cross-functional communication: bridged technical and business teams as BA, governance lead, and RPA liaison",
    "CSPO certification demonstrates structured approach to requirements gathering and stakeholder management",
  ],
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
      situation: "When I took over the Collibra governance program at Pfizer, adoption was stagnant at ~600 users across 7 business units. Leadership was questioning the ROI of the platform investment, and several BU heads were resistant to mandating its use.",
      task: "I needed to grow active adoption by at least 30% within 12 months while shifting perception from 'compliance overhead' to 'self-service data enablement' — without a mandate from above.",
      action: "I identified 3 champion users in high-visibility teams, co-created 'quick win' governance workflows that saved them measurable time, then used those success stories in executive road shows. I redesigned the onboarding training from a 2-hour lecture to a 20-minute hands-on lab. I also built a monthly 'Data Governance Office Hours' Slack channel where users could get real-time help.",
      result: "Grew platform adoption by 40% YoY to 1,000+ active users across 10+ BUs. Three BU heads who were initially resistant became vocal advocates. The Slack channel averaged 15+ questions per week and became the model for other platform teams.",
    },
    {
      id: "story_seed_2",
      title: "Alation to Collibra Migration — Zero Downtime",
      themes: ["Technical", "Problem Solving", "Communication"],
      situation: "Pfizer had 3 business units running on Alation for data cataloging while the rest of the enterprise was standardizing on Collibra. The dual-platform approach was creating metadata silos and doubling licensing costs.",
      task: "I was tasked with migrating all 3 BUs from Alation to Collibra with zero downtime and no data loss, while maintaining trust with users who were comfortable with their existing tool.",
      action: "I mapped every Alation asset to its Collibra equivalent, built a parallel-run period where both systems were synchronized, and created BU-specific migration guides. I held weekly office hours with each BU's data stewards during the 3-month transition, addressing concerns in real-time rather than through formal change requests.",
      result: "Completed migration across all 3 BUs with zero downtime and zero data loss. User satisfaction surveys post-migration showed 85% positive sentiment. Consolidated tooling resulted in 50% licensing cost reduction.",
    },
    {
      id: "story_seed_3",
      title: "Metadata Governance Cycle Time — 30% Reduction",
      themes: ["Technical", "Innovation", "Data Governance"],
      situation: "The metadata governance review cycle at Pfizer took an average of 14 business days from submission to approval, creating a bottleneck that frustrated data producers and slowed time-to-insight for analytics teams.",
      task: "Reduce the governance cycle time by at least 25% without sacrificing compliance rigor or audit trail integrity.",
      action: "I analyzed the existing workflow and found that 60% of the delay was in manual routing and approval queues. I redesigned the Collibra stewardship workflows to auto-route based on metadata domain, added automated data quality rule propagation for standard field types, and created a tiered review system (auto-approve for low-risk changes, human review for high-risk).",
      result: "Reduced cycle time from 14 to under 10 business days — a 30% improvement. Auto-approval handled 40% of routine changes, freeing stewards to focus on complex governance decisions. Audit compliance remained at 100%.",
    },
    {
      id: "story_seed_4",
      title: "Licensing Cost Consolidation — 50% Savings",
      themes: ["Problem Solving", "Leadership", "Communication"],
      situation: "Pfizer was paying for overlapping governance tooling: Collibra for metadata governance, Alation for 3 BUs' cataloging, SAP BusinessObjects for legacy metadata, plus several point solutions. Total annual spend exceeded $2M.",
      task: "Build the business case and execute a consolidation plan to reduce governance tooling spend by at least 30% while improving — not degrading — capability coverage.",
      action: "I audited every tool's feature usage against actual user workflows, identified which capabilities were redundant versus unique, and built a feature-mapping matrix showing Collibra could absorb 90% of the other tools' use cases. I presented the business case to the VP of Data Engineering with concrete ROI projections and a phased migration timeline.",
      result: "Achieved 50% licensing cost reduction — saving over $1M annually. Consolidated from 5 tools to 2 (Collibra + one specialized DQ tool). The VP cited this as a model for other platform rationalization efforts.",
    },
  ],
}

// ─── 2. Collibra Company ─────────────────────────────────────────

export const collibraCompany = {
  name: "Collibra",
  companyProfile: {
    summary: "Collibra is a late-stage private SaaS unicorn (valued at $5.25B) that builds the leading enterprise platform for data and AI governance. Founded in 2008 in Brussels, Belgium, they now serve 1,000+ enterprise customers globally — including Toyota, Heineken, BNY Mellon, Siemens, and McDonald's — from dual headquarters in New York and Brussels. They have approximately 1,080 employees.",
    mission: "Collibra's mission is 'Data Confidence' — enabling every organization to trust the data and AI they use. They position themselves as the leader in unified governance for data and AI, making trusted, AI-ready data accessible to all 'Data Citizens' across an organization.",
    productsServices: "The Collibra Platform includes: Data Governance (policy and stewardship workflows), Data Catalog (asset discovery across the enterprise), Data Lineage (automated relationship mapping), Data Quality & Observability (monitoring and anomaly detection), Data Privacy (GDPR and regulatory compliance automation), AI Governance (model cataloging, bias/drift monitoring, EU AI Act compliance), and Data Marketplace (internal marketplace for trusted data products). They also recently added Unstructured AI capabilities through the Deasy Labs acquisition to govern documents, emails, and contracts for GenAI workflows. The platform has 100+ native integrations with Databricks, Snowflake, Google BigQuery, SAP, Azure, Tableau, and Salesforce.",
    culture: "Collibra brands itself around the 'Data Citizen' concept — democratizing data access for everyone. They received Great Place to Work certification in 2022. Glassdoor reviews (3.2/5 stars) highlight smart colleagues, a strong product, and decent compensation as positives, but note that multiple rounds of layoffs since 2022 and leadership changes have impacted the once-strong culture. The company is transitioning from hypergrowth mode to efficient, execution-focused growth.",
    keyFacts: [
      "Named Leader in the inaugural Gartner Magic Quadrant for Data & Analytics Governance Platforms in both 2025 and 2026 — the only vendor to hold this position since the category was created",
      "Snowflake, Google's CapitalG, Sequoia, and Tiger Global are investors. Snowflake made a direct strategic investment in 2022, underscoring the partnership depth",
      "Acquired Deasy Labs (July 2025) to extend governance to unstructured data for GenAI, and Raito (June 2025) for data access management — signaling aggressive expansion beyond traditional governance",
      "Named Google Cloud Data & Analytics Partner of the Year for Governance (2025) and Partner of the Year by both Databricks and Snowflake (2024)",
      "First data governance vendor to achieve ISO 42001 AI management system certification and launch EU AI Act compliance tooling (January 2025)",
    ],
    interviewTips: [
      "Reference your direct experience with the Collibra platform at Pfizer — you're one of the rare candidates who has been a power user of the product you'd be selling. Mention specific features you used (metadata governance, workflows, data cataloging)",
      "Mention the Deasy Labs acquisition and Collibra's expansion into unstructured data governance — this shows you follow the company's strategy beyond the job posting",
      "Bring up the Gartner Magic Quadrant Leader position and how it differentiates Collibra from competitors like Informatica and Alation in customer conversations",
      "Reference the ISO 42001 certification and EU AI Act tooling when discussing AI governance — this is a major competitive differentiator that Collibra is proud of",
      "Use the phrase 'Data Citizens' naturally in conversation — it's core to Collibra's identity and shows cultural alignment",
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

Compensation: $140,000 - $175,000 base + commission + equity`

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
  // Updated interview process based on Christina Olson's confirmed structure
  seedInterviews: [
    {
      interviewerName: "Christina Olson",
      interviewerRole: "Talent Acquisition — Recruiter Screen (30min)",
      scheduledAt: null,
    },
    {
      interviewerName: "Hiring Manager",
      interviewerRole: "CE Manager — Hiring Manager Round (45min)",
      scheduledAt: null,
    },
    {
      interviewerName: "Peer CE",
      interviewerRole: "Customer Engineer — Peer Technical Round",
      scheduledAt: null,
    },
    {
      interviewerName: "Partner/AVP",
      interviewerRole: "Sales Leadership — Partner or AVP Round",
      scheduledAt: null,
    },
    {
      interviewerName: "Demo Round",
      interviewerRole: "Product Demo Presentation (1hr, ~50% of grade)",
      scheduledAt: null,
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
        "Study the top 4 competitors deeply: Informatica (legacy enterprise incumbent), Alation (catalog-first approach), Atlan (modern/AI-native UX), Microsoft Purview (bundled with Azure). For each, know their positioning, strengths, and where Collibra wins",
        "Read the Gartner Magic Quadrant for Data & Analytics Governance Platforms (2025 and 2026) — understand why Collibra is positioned as Leader and what the evaluation criteria are. Be able to reference this in the interview",
        "Learn the Databricks Unity Catalog competitive angle — Databricks customers often ask 'why do I need Collibra when I have Unity Catalog?' despite Snowflake and Databricks both being Collibra partners. Understand the complementary vs. competitive positioning",
        "Prepare a clean 30-second answer for 'Why Collibra over [competitor]?' that focuses on customer outcomes, not feature checklists",
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
        "Reframe the Pfizer Collibra story using customer success metrics: adoption rate, time-to-value, user satisfaction, governance coverage percentage. Even rough numbers are better than 'we rolled it out and people used it'",
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
  ],
}

// ─── 4. Christina Olson Recruiter Screen (Pre-Analyzed) ──────────

export const christinaInterview = {
  interviewerName: "Christina Olson",
  interviewerRole: "Talent Acquisition — Recruiter Screen (30min)",
  scheduledAt: null,
  transcriptRaw: `Recruiter Screen — Christina Olson, Collibra Talent Acquisition
Date: February 2026 | Duration: ~30 minutes

Christina: Hi Kevin, thanks for taking the time today. I'm Christina, I'm on the talent acquisition team here at Collibra. I've been with the company for about two years now. I wanted to connect with you about the Customer Engineer role — I saw your background and thought it was really interesting. Tell me a little bit about yourself and what drew you to this role.

Kevin: Absolutely, thanks Christina. So I've been at Pfizer for about 10 years, most recently as a Data Enablement and Governance Manager. The interesting thing is I've been working with Collibra for the last 4 years — I led the deployment across 10 plus business units and about 1,000 active users. I also managed our migration from Alation to Collibra. What drew me to this role is that I've essentially been doing customer engineering work internally — training teams, advocating for the platform, solving adoption challenges — and I want to do it at scale for the company that built the product I believe in.

Christina: Oh wow, so you've actually used the product. That's rare — most of our CE candidates come from other SE roles but haven't actually been in the product day to day. That's a great foundation. Let me tell you a bit about the role and our process. So the Customer Engineer role at Collibra is pre- and post-sale. You'd be working with about 2-3 Account Executives, and the ratio is typically 2 CEs for every 2-3 AEs in a given territory. The role is about 60% pre-sale and 40% post-sale. You'd be doing discovery calls, running demos, POCs, and then post-sale you're helping drive adoption and value realization.

Kevin: That breakdown is really helpful. The post-sale adoption piece is where I think I can hit the ground running — at Pfizer I grew Collibra adoption by 40% year over year, and I've seen firsthand what drives adoption versus what creates resistance.

Christina: Love that. So let me walk you through our interview process. After this call, if we move forward, the next step would be a 45-minute conversation with the hiring manager — that's the CE Manager for your region. Then you'd have a peer round with one of our current Customer Engineers. After that, there's a round with one of our Partners or AVPs on the sales side. And then the final round is the demo — you'd prepare a product demonstration, it's about an hour, and I'll be honest, it's probably about 50% of the overall assessment. We really weight the demo heavily because it's the core of what CEs do every day.

Kevin: That's good to know about the demo weighting. I appreciate the transparency. I should be honest that I haven't done formal product demos to external audiences, but I've presented Collibra capabilities to business unit leaders at Pfizer many times. I'd want to practice and prepare specifically for that round.

Christina: I appreciate you being upfront about that. One of our core values here is "be respectfully direct" and you just demonstrated that perfectly. We'd rather someone be honest about where they need to develop than oversell themselves.

Kevin: I really resonate with that value. In governance work, you have to be direct — telling a business unit they're not compliant isn't fun, but it's necessary. I think that translates well.

Christina: It does. Let me ask about compensation expectations. The role is $140 to $175 base, and then there's a commission component — the split is roughly 70/30, so 70% base and 30% variable. We also offer RSUs that vest over 4 years. Does that range work for you?

Kevin: Yes, that range works well for me. I appreciate the transparency on the comp structure.

Christina: Great. A few more things — the role is remote but you'd need to be in the Central US region for territory alignment. Travel is up to 30%, mostly for customer meetings and quarterly team gatherings. We're organized vertically by industry in some regions, so you might focus on specific verticals. How does the travel piece sound?

Kevin: The travel works for me. I'm based in San Francisco but I'm flexible on relocation if needed for territory alignment. And I actually think the vertical structure is interesting — my Pfizer experience gives me deep pharma and life sciences context that could be valuable if there's alignment there.

Christina: Good point, I'll flag that for the hiring manager. One last thing — do you have any questions for me about Collibra or the role?

Kevin: Two questions. First, what's the biggest challenge CEs are facing right now? And second, what does the onboarding look like for someone coming from a non-traditional CE background?

Christina: Great questions. On challenges — the AI governance space is moving incredibly fast, and our CEs are having to stay ahead of customer questions about things like the EU AI Act and agentic AI. It's exciting but intense. On onboarding, we have a structured CE bootcamp that's about 6 weeks, covers product, sales methodology, and demo skills. We've had people come from non-SE backgrounds before and succeed — the product knowledge you already have would give you a huge head start.

Kevin: That's really encouraging. The AI governance angle is actually why I pursued my AI Certificate from Stevens — I wanted to understand the technical and regulatory landscape specifically because I saw it becoming central to data governance work.

Christina: That's great alignment. Kevin, I really enjoyed this conversation. I think your Collibra experience is genuinely differentiating, and I'd like to move you forward to the hiring manager round. I'll send you an email with next steps and availability. Sound good?

Kevin: Absolutely, I'm excited. Thanks Christina, I really appreciate your time and the thorough overview.

Christina: Of course. Talk soon!`,
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
  interviewerNotes: "Christina Olson — Collibra Talent Acquisition, ~2 years at company. Warm and transparent. Key intel: demo round is ~50% of assessment, 70/30 comp split, RSU 4yr vest, 2 CE per 2-3 AE ratio, vertical structure in some regions, 'be respectfully direct' is core value. She's clearly an internal advocate — advanced to HM round on the spot.",
}
