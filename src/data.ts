import { ServiceItem, Partner, Article, FAQItem, TimelineEvent, CoreValue, Industry } from "./types";

export const FIRM_DETAILS = {
  name: "Agarwal & Jain",
  suffix: "Chartered Accountants",
  established: "20 January 2015",
  address: "Office No. 420, 4th Floor, Avadh Arena, Above Croma, VIP Road, Vesu, Surat, Gujarat, India - 395007",
  phone: "+91 96875 59363",
  email: "caagarwaljain@gmail.com",
  workingHours: "Monday – Saturday: 10:30 AM – 07:30 PM",
  registrationNoPlaceholder: "FRN: 139158W", // Factual standard representation or registered tag
  googleReviewsUrl: "https://maps.app.goo.gl/x1kQFxUyfFcjXQfn7",
  whatsappNumber: "919687559363", // E.164 without '+', used for wa.me links
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2015",
    title: "Firm Foundation",
    description: "Established on 20 January 2015 in Surat with a commitment to integrity and client excellence."
  },
  {
    year: "2017",
    title: "GST Transition Advisory",
    description: "Led extensive compliance restructuring and awareness campaigns for businesses during the GST rollout."
  },
  {
    year: "2019",
    title: "Insolvency & Debt Resolution",
    description: "Expanded strategic advisory capabilities with registered insolvency practice qualifications."
  },
  {
    year: "2021",
    title: "Technology Integration",
    description: "Transitioned to digital-first compliance, secure portal integrations, and virtual CFO frameworks."
  },
  {
    year: "2024",
    title: "Comprehensive Strategic Advisory",
    description: "Offering end-to-end audit, indirect & direct tax representations, and foreign trade advisory."
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity",
    description: "Upholding absolute moral and professional ethics in every service, ensuring complete trust.",
    iconName: "Shield"
  },
  {
    title: "Excellence",
    description: "Delivering precise, high-caliber financial solutions with rigorous attention to regulatory accuracy.",
    iconName: "Award"
  },
  {
    title: "Transparency",
    description: "Maintaining clear, timely, and honest communication regarding compliance and strategic matters.",
    iconName: "Eye"
  },
  {
    title: "Professionalism",
    description: "Representing clients with profound knowledge, decorum, and compliance with the ICAI code.",
    iconName: "Briefcase"
  },
  {
    title: "Innovation",
    description: "Leveraging state-of-the-art fintech tools to streamline processes, compliance, and reporting.",
    iconName: "Cpu"
  },
  {
    title: "Commitment",
    description: "Partnering in our clients' growth journey by maintaining a steadfast commitment to statutory deadlines.",
    iconName: "HeartHandshake"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Professionals",
    description: "Led by highly qualified partners with a collective background in diversified advisory, tax litigation, and regulatory frameworks."
  },
  {
    title: "Personalised Advisory",
    description: "Every business has unique complexities. We craft tailored structuring, taxation, and accounting solutions matching specific operating models."
  },
  {
    title: "Timely Compliance",
    description: "Our dedicated systems track global deadlines, statutory filings, and updates, ensuring your operations remain completely compliant."
  },
  {
    title: "Industry Expertise",
    description: "From large-scale textile manufacturers to exporters and tech startups, we possess practical regulatory experience across multiple sectors."
  },
  {
    title: "Technology Driven Processes",
    description: "We employ secure cloud collaboration platforms and bookkeeping automation to minimize manual errors and elevate precision."
  },
  {
    title: "Ethical ICAI-Compliant Practice",
    description: "Fully dedicated to the standards, guidelines, and ethics mandated by the Institute of Chartered Accountants of India."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    category: "Corporate Governance",
    description: "Independent audit and reporting solutions to verify financial accuracy and satisfy regulatory mandates.",
    details: [
      "Statutory Audit under Companies Act, 2013",
      "Internal Audit & Risk Advisory",
      "Tax Audit under Income Tax Act, 1961",
      "Management & Operational Audit"
    ]
  },
  {
    id: "direct-taxation",
    title: "Direct Taxation",
    category: "Tax & Advisory",
    description: "Strategic tax planning, statutory return filing, and legal advisory designed for individuals and corporate entities.",
    details: [
      "Corporate & Personal Tax Planning",
      "Tax Compliance & statutory return filings",
      "Advisory on complex direct tax matters",
      "Representation before Assessing Officers"
    ]
  },
  {
    id: "indirect-taxation",
    title: "Indirect Taxation (GST)",
    category: "Tax & Advisory",
    description: "Comprehensive Goods and Services Tax compliance, regular filings, litigation support, and strategic advisory.",
    details: [
      "GST Structuring & Implementation Advisory",
      "GST Registration & regular filings support",
      "Refund and Input Tax Credit (ITC) optimization",
      "GST Litigation support & representation"
    ]
  },
  {
    id: "corporate-compliance",
    title: "Corporate Compliance",
    category: "Secretarial Support",
    description: "Comprehensive assistance in navigating the statutory regulations under Ministry of Corporate Affairs and LLP Acts.",
    details: [
      "Company & LLP Incorporation and Setup",
      "ROC filings, annual returns, and secretarial records",
      "Advisory on corporate reorganizations and restructuring",
      "Secretarial audit support and advisory"
    ]
  },
  {
    id: "accounting-services",
    title: "Accounting Services",
    category: "Financial Operations",
    description: "End-to-end bookkeeping, payroll processing, and financial reporting solutions to maintain precise ledgers.",
    details: [
      "Cloud Bookkeeping & accounting records setup",
      "Preparation of Periodic Financial Statements",
      "Payroll assistance & regulatory payroll compliance",
      "Fixed asset accounting & depreciation tracking"
    ]
  },
  {
    id: "business-advisory",
    title: "Business Advisory",
    category: "Strategic Growth",
    description: "Strategic consulting to evaluate business models, optimize capital structure, and mitigate operational risks.",
    details: [
      "Business Structuring & formation advice",
      "Strategic Financial Planning & capital budgeting",
      "Growth Advisory and market entry studies",
      "Internal control evaluation and risk assessments"
    ]
  },
  {
    id: "project-finance",
    title: "Project Finance",
    category: "Strategic Growth",
    description: "Assisting enterprises in raising debt, formulating project reports, and securing bank loan allocations.",
    details: [
      "Formulation of Detailed Project Reports (DPR)",
      "Financial projections, forecasting & model preparation",
      "Bank Loan Assistance & liaison with financial institutions",
      "Working capital and term loan advisory"
    ]
  },
  {
    id: "fema-advisory",
    title: "FEMA Advisory",
    category: "International Trade",
    description: "Advising on cross-border transactions, inbound/outbound foreign direct investments, and RBI compliances.",
    details: [
      "Foreign Direct Investments (FDI) advisory",
      "External Commercial Borrowings (ECB) guidance",
      "RBI compliance filings, FC-GPR & FC-TRS assistance",
      "Structuring cross-border business arrangements"
    ]
  },
  {
    id: "representation",
    title: "Regulatory Representation",
    category: "Litigation & Dispute",
    description: "Strong, knowledgeable presentation of client matters before state, central, and appellate regulatory authorities.",
    details: [
      "Representation before Income Tax Authorities & CIT(A)",
      "Representation before GST Authorities and Appellate Panels",
      "Advisory on dispute resolution schemes",
      "Handling scrutiny, audits, and statutory enquiries"
    ]
  },
  {
    id: "virtual-cfo",
    title: "Virtual CFO Services",
    category: "Financial Operations",
    description: "Strategic executive financial leadership on a flexible basis to drive profitability and governance.",
    details: [
      "Advanced Management Information System (MIS) reports",
      "Cash Flow forecasting, planning & budget controls",
      "Review of internal controls & corporate governance",
      "Participation in board/executive strategy meetings"
    ]
  }
];

export const INDUSTRIES: Industry[] = [
  {
    title: "Manufacturing",
    description: "Assisting Surat's premier textile, diamond, and heavy machinery production units in cost audit, GST compliance, and working capital optimization.",
    iconName: "Factory"
  },
  {
    title: "Exporters & Importers",
    description: "Advising on foreign exchange regulations, FEMA compliances, duty drawbacks, and international trade direct taxation policies.",
    iconName: "Ship"
  },
  {
    title: "Healthcare",
    description: "Ensuring proper corporate structure, tax planning, and statutory audit compliance for hospital groups, clinical centers, and medical professionals.",
    iconName: "Activity"
  },
  {
    title: "Construction & Real Estate",
    description: "Navigating RERA compliance, joint venture tax planning, GST implications on works contracts, and structural project finance advisory.",
    iconName: "Home"
  },
  {
    title: "Retail & E-commerce",
    description: "Streamlining omni-channel GST registration, automated invoice reconciliation, multi-state tax compliance, and payroll setups.",
    iconName: "ShoppingBag"
  },
  {
    title: "Hospitality",
    description: "Enabling comprehensive internal controls, revenue audits, luxury and service tax resolution, and cash flow planning for hotels and chains.",
    iconName: "Utensils"
  },
  {
    title: "Technology & Startups",
    description: "Providing capital structuring, virtual CFO leadership, valuation certificates, ESOP planning, and startup tax exemptions compliance.",
    iconName: "Terminal"
  },
  {
    title: "Educational Institutions",
    description: "Assisting trusts, societies, and universities in maintaining 12A/80G status, direct tax audits, and ethical financial governance.",
    iconName: "GraduationCap"
  }
];

export const PARTNERS: Partner[] = [
  {
    name: "CA Sachin D. Jain",
    designation: "FCA, Partner",
    membershipNo: "130248",
    membershipTimeline: "ACA since 28 August 2008 · FCA since 28 August 2013",
    certificateOfPracticeSince: "2008",
    languages: ["English", "Hindi", "Gujarati"],
    qualifications: [
      "Fellow Chartered Accountant (FCA), ICAI",
      "DISA Qualified (Diploma in Information Systems Audit, ICAI)",
      "Registered Insolvency Professional"
    ],
    highlights: [
      "Leads the firm's audit, taxation, FEMA, insolvency, and representation practice with a Certificate of Practice held since 2008.",
      "Specialized in FEMA regulations, RBI liaisoning, cross-border corporate structure advisory, and project funding structures."
    ],
    areasOfExpertise: [
      "Audit and assurance",
      "Direct and indirect taxation",
      "Corporate laws",
      "FEMA compliance",
      "Insolvency professional services",
      "Project finance and representation matters"
    ],
    bio: "CA Sachin D. Jain is a founding partner of Agarwal & Jain, bringing rigorous analytical precision and professional leadership. A Fellow member of the ICAI holding a Certificate of Practice since 2008, his work covers statutory and tax audits, direct and indirect taxation, representation before tax and appellate authorities, FEMA and RBI matters, project finance, and assignments under the insolvency framework.",
    imageUrl: "sachin_jain"
  },
  {
    name: "CA Shilpa Saurabh Agrawal",
    designation: "FCA, Partner",
    membershipNo: "153488",
    membershipTimeline: "ACA since 18 October 2012 · FCA since 16 December 2019",
    certificateOfPracticeSince: "2012",
    languages: ["English", "Hindi", "Gujarati"],
    qualifications: [
      "Fellow Chartered Accountant (FCA), ICAI",
      "Partner since the firm's establishment in 2015",
      "Certificate of Practice holder since 2012"
    ],
    highlights: [
      "A partner since the firm's establishment in 2015, leading accounting and statutory compliance, direct taxation, and GST compliance.",
      "Recognized for audit support and firm administration built on accuracy and well-organised client records."
    ],
    areasOfExpertise: [
      "Accounting and statutory compliance",
      "Direct taxation",
      "GST compliance",
      "Audit support",
      "Firm administration and client documentation"
    ],
    bio: "CA Shilpa Saurabh Agrawal is a Fellow member of the ICAI and a partner since the firm's establishment in 2015, holding a Certificate of Practice since 2012. She leads accounting and statutory compliance, direct taxation and GST compliance, audit support, and firm administration and client documentation, with a focus on accuracy and well-organised records.",
    imageUrl: "shilpa_agrawal"
  }
];

export const KNOWLEDGE_CENTRE: Article[] = [
  {
    id: "gst-input-tax-credit",
    category: "Goods & Services Tax",
    title: "Understanding Input Tax Credit (ITC) Reconciliation under GSTR-2B",
    summary: "A statutory overview of GSTR-2B compliance guidelines, matching mechanisms, and mitigation steps to prevent ITC lockups.",
    content: "Maintaining strict reconciliation between GSTR-2B and purchase registers is a crucial compliance mandate under GST law. Discrepancies can lead to statutory interest liabilities and temporary ITC suspension. This overview outlines the mandatory invoice audit patterns, vendor coordination protocols, and the role of tech-enabled ERP controls to safeguard financial margins.",
    publishDate: "July 10, 2026",
    readTime: "5 min read",
    author: "CA Shilpa S. Agrawal",
    imageUrl: "gst_article"
  },
  {
    id: "income-tax-audit-changes",
    category: "Income Tax",
    title: "Key Amendments in Form 3CD for Corporate Tax Audits",
    summary: "Critical breakdown of reporting amendments under Section 44AB of the Income Tax Act and updated filing standards.",
    content: "Corporate statutory filings under Section 44AB require detailed disclosure in Form 3CD. Recent amendments highlight deep reviews of transaction records, cross-border payments disclosures, and related-party transfers. Keeping ahead of these regulations prevents scrutiny and optimizes statutory compliance timelines.",
    publishDate: "June 25, 2026",
    readTime: "7 min read",
    author: "CA Sachin D. Jain",
    imageUrl: "it_article"
  },
  {
    id: "startup-exemptions-india",
    category: "Business Structure",
    title: "Statutory Tax Incentives for DPIIT Registered Startups",
    summary: "An analytical review of Section 80-IAC tax holidays, angel tax regulations, and capital structuring benefits under Indian laws.",
    content: "Startups in Surat and across India can unlock substantial regulatory growth by acquiring DPIIT registrations. From corporate income tax exemptions under Section 80-IAC to simplified compliance procedures, understanding the eligibility benchmarks is key to securing growth and ensuring correct capitalization structures.",
    publishDate: "May 18, 2026",
    readTime: "6 min read",
    author: "CA Sachin D. Jain",
    imageUrl: "startup_article"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What primary professional services does your firm offer?",
    answer: "Agarwal & Jain provides a comprehensive suite of professional solutions including Statutory & Tax Audits, Direct and Indirect Taxation (GST) Advisory, ROC/Corporate Compliance, FEMA Advisory, Project Finance support, Regulatory Representation, and Virtual CFO services."
  },
  {
    question: "How can a business schedule an initial professional consultation?",
    answer: "You can easily schedule a consultation by using our digital booking form in the contact section, emailing us at caagarwaljain@gmail.com, or calling our Surat head office directly at +91 96875 59363. We hold virtual sessions as well as in-person meetings at our VIP Road office."
  },
  {
    question: "Do you assist early-stage startups and MSMEs with registration and structuring?",
    answer: "Yes, we work extensively with growing startups and MSMEs. We assist in entity structuring (Private Limited, LLP, Partnership), DPIIT registration, GST setup, capital planning, bookkeeping, and setting up initial statutory compliance systems."
  },
  {
    question: "How does the firm manage representations before Income Tax and GST authorities?",
    answer: "Our senior partners, including registered professionals and fellowship members, personally draft legal submissions, prepare statutory documentations, and represent client matters before the Income Tax, GST, and Appellate Authorities, ensuring an ethical and compliant defense."
  },
  {
    question: "What are your standard working hours and meeting protocols?",
    answer: "Our office operates from Monday to Saturday, between 10:30 AM and 07:30 PM. To maintain professional quality, we encourage scheduling appointments in advance, allowing our partners to prepare a thorough, dedicated analysis of your requirements."
  }
];
