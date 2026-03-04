// Seed data for Collibra Customer Engineer role
// Usage: import and call seedCollibraJob(store, createJob) or load via localStorage directly

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

const RESUME_RAW = `Kevin Verzosa
Data & AI Enablement Leader | Enterprise Data Strategy | AI & Agent Governance
San Francisco, California | 500+ connections

EXPERIENCE

Data Enablement & Governance Manager — Pfizer (Aug 2021 - Aug 2025, 4 yrs)
- Reduced non-compliant events by 25% through governance of HIPAA/GDPR policies
- Managed metadata governance using Collibra Data Intelligence platform
- SQL troubleshooting for data ingestion and ETL pipeline validation
- Managed team of developers and coordinated with project managers

Sr. Associate RPA Governance, Security & Compliance — Pfizer (Jan 2020 - Aug 2021, 1.7 yrs)
- Liaised between technical and business teams as business analyst
- Ensured business requirements were understood by development teams
- Managed security and compliance for RPA implementations

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
- BBA, Information Technology Management

CERTIFICATIONS
- Certified Scrum Product Owner (CSPO) — Scrum Alliance, Apr 2023
- Team Leadership — McKinsey & Company, Sep 2024

SKILLS
Excel/VBA (Strong), SQL (Moderate), Collibra Data Intelligence (Strong), Tableau (Basic), RPA Tools (Strong), Java (Basic), Data Governance/Compliance (Strong)`

export const collibraJobData = {
  company: "Collibra",
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
  ],
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
