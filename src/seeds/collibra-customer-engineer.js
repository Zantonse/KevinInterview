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
      result: "Grew platform adoption by 40% YoY to 1,000+ active users across 10+ BUs. Three BU heads who were initially resistant became vocal advocates. The Slack channel averaged 15+ questions per week and became the model for other platform teams. Pfizer's Collibra implementation (led by Director of Data Enablement Michael Pagliorola, my director) was featured as a case study at Collibra's Data Citizens '24 conference, showcasing our enterprise-wide data excellence strategy and use of custom real-time metadata replication, lineage, and data freshness capabilities.",
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
      interviewerName: "Ralf Strichau",
      interviewerRole: "Enterprise Customer Engineering Lead — Hiring Manager Round (45min)",
      scheduledAt: "2026-03-13",
      interviewerNotes: "Ralf Strichau — Enterprise Customer Engineering Lead at Collibra (promoted Jan 2025, previously Sr. Manager Customer Success 3.5yrs, Manager CS 1yr, Enterprise CSM 3yrs). Total ~8 years at Collibra. Based in Greater Chicago Area, remote. MBA Finance from University of Bayreuth (Germany). Certified Collibra Ranger (3 Stars). Previously 12 years at Accenture as Senior Manager. Bilingual English/German. Active on LinkedIn — posts about data governance, AI governance, SAP data integration, and Collibra events. Organized CE team offsite in Nashville (Nov 2025) — mentioned team members by name including Laura F. (Director, Customer Engineering — his boss?). Reposted Laura F.'s hiring post for CE Product roles (EST/CST, remote US/Canada, $104-130K range — note this is a different CE track than Kevin's). Key themes from his posts: 'Data Confidence™', governance as foundation for AI/data products, Siemens as customer example, SAP Platform & Data Summit. He came from Customer Success (not sales engineering) — this is relevant because Kevin is also transitioning from a non-SE background.",
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
