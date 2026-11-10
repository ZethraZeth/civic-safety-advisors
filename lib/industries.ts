export interface Industry {
  slug: string;
  title: string;
  description: string;
  /** Two-sentence direct answer shown first; written to be quoted by search and AI engines. */
  answer?: string;
  challenges: string[];
  keyServices: string[]; // service slugs
  image: string;
  /** H1 on the dedicated page. */
  heading: string;
  /** Short page title; the site name is appended by the layout. */
  metaTitle: string;
  /** Search result description, about 155 characters. */
  metaDescription: string;
  /** Plain-language name for the audience, used in structured data. */
  audience: string;
  /** Kinds of organization in this group. */
  whoWeWorkWith: string[];
  /** How the work usually runs for this kind of organization. */
  approach: Array<{ title: string; text: string }>;
  /** Shown on the page and marked up as FAQPage. */
  faqs: Array<{ question: string; answer: string }>;
  /** Blog post slugs worth reading next. */
  relatedPosts: string[];
  /** Show the link to the Nonprofit Security Grant guide. */
  grantGuide?: boolean;
}

export const industries: Industry[] = [
  {
    slug: "houses-of-worship",
    answer: "Houses of worship need security that keeps the doors open and the greeting warm while giving a few trained people a plan for the rare bad day. We assess the building, train a volunteer safety team, write the response plan, and prepare the vulnerability assessment that federal and Connecticut security grants require.",
    title: "Houses of Worship",
    description:
      "Churches, synagogues, mosques, temples, and other faith communities keep their doors open to anyone, gather children and older adults in the same building, and exist to welcome people rather than screen them. We help houses of worship build security programs that protect the congregation without changing what it feels like to walk in.",
    challenges: [
      "Balancing openness with security",
      "Volunteer security team development",
      "Large gathering and special event security",
      "Protecting children's ministry and youth programs",
      "Addressing threats while maintaining pastoral care",
    ],
    keyServices: [
      "threat-vulnerability-assessment",
      "safety-team-training",
      "active-shooter-training",
      "emergency-response-plans",
    ],
    image: "/assets/images/industries/worship.jpg",
    heading: "Security Consulting for Houses of Worship",
    metaTitle: "Security Consulting for Houses of Worship",
    metaDescription: "Security assessments, volunteer safety team training, and emergency plans for churches, synagogues, mosques, and temples in CT, NY, MA, and RI.",
    audience: "Houses of worship and faith communities",
    whoWeWorkWith: [
      "Churches and parishes",
      "Synagogues and Jewish community organizations",
      "Mosques and Islamic centers",
      "Temples and other faith communities",
      "Religious schools and childcare programs run by a congregation",
    ],
    approach: [
      {
        title: "Walk the building with the people who run it",
        text: "A threat and vulnerability assessment looks at doors, sightlines, parking, the children's wing, and how services and events actually run. You get a prioritized, costed list of fixes, and most of the early ones are procedural and cost little.",
      },
      {
        title: "Put the safety team's role in writing",
        text: "Written procedures define the team's authority, positions, communication, and response steps, so volunteers act consistently and within the law.",
      },
      {
        title: "Train the team and the staff in your own building",
        text: "Training covers how to observe, de-escalate, direct people, and work with arriving responders. It is built around your building and your plan and is delivered without theatrics.",
      },
      {
        title: "Write the emergency plan and share it with responders",
        text: "The plan says who does what in the first minutes of a fire, a medical emergency, a hostile intruder, or severe weather, and it is coordinated with your local police and fire departments.",
      },
    ],
    faqs: [
      {
        question: "Will security make our congregation feel less welcoming?",
        answer: "It should not. Most of what we recommend is procedural: where greeters stand, which doors stay locked during services, who watches the parking lot, and what the safety team does if something looks wrong. Hardware comes only where it changes the outcome.",
      },
      {
        question: "Do we need to hire security guards?",
        answer: "Not necessarily. Many congregations rely on a trained volunteer safety team with written procedures. If you do hire guards, we explain the licensing rules in your state and write the post orders and performance standards so the contract delivers what you are paying for.",
      },
      {
        question: "Can you prepare the vulnerability assessment for a Nonprofit Security Grant application?",
        answer: "Yes. Our threat and vulnerability assessment is written to satisfy the assessment requirement for the federal Nonprofit Security Grant Program and the Connecticut state program. The assessment has to be site-specific and dated within the past three years, and the grant does not reimburse its cost.",
      },
      {
        question: "Do you sell cameras, alarms, or guard services?",
        answer: "No. We do not sell guards, cameras, or alarm systems, so our recommendations are not tied to anything we would profit from installing.",
      },
    ],
    relatedPosts: ["5-security-priorities-houses-of-worship", "emergency-response-planning-connecticut-synagogues"],
    grantGuide: true,
  },
  {
    slug: "schools-education",
    answer: "Schools and colleges need security that works alongside learning: controlled entry, staff who know the plan, drills that do not frighten students, and coordination with local police. We review the building and the procedures together and produce a plan the administration can defend to parents and the board.",
    title: "Schools & Educational Institutions",
    description:
      "From elementary schools to universities, schools have to keep students safe without making the building feel like a place where something is about to go wrong. Too much visible security frightens students; too little leaves them exposed. We help schools build age-appropriate security programs that the administration can explain to parents and the board.",
    challenges: [
      "Campus access control",
      "Visitor management",
      "Lockdown and evacuation procedures",
      "Staff training and student awareness",
      "Coordination with school resource officers and local law enforcement",
    ],
    keyServices: [
      "building-access-control",
      "emergency-operations-plans",
      "staff-training",
      "active-shooter-training",
    ],
    image: "/assets/images/industries/school.jpg",
    heading: "Security Consulting for Schools and Colleges",
    metaTitle: "School Security Consulting",
    metaDescription: "Access control reviews, emergency operations plans, and staff training for K-12 schools, colleges, and childcare programs in CT, NY, MA, and RI.",
    audience: "Schools, colleges, and other educational institutions",
    whoWeWorkWith: [
      "Public and private K-12 schools",
      "Independent and religious schools",
      "Colleges and universities",
      "Preschools and childcare programs",
      "After-school and youth programs",
    ],
    approach: [
      {
        title: "Review how people get in and move around",
        text: "A building access control review looks at doors, keys, codes, visitor check-in, and secured interior areas. Most findings are procedural, and hardware recommendations come only where they change the outcome.",
      },
      {
        title: "Read the plans against how the school actually runs",
        text: "We review lockdown, lockout, and evacuation procedures alongside the building itself, then write or revise the emergency plans so staff can follow them under stress.",
      },
      {
        title: "Train the adults",
        text: "Staff training covers how to spot concerning behavior, handle an aggressive visitor, report an incident, and follow the emergency plan. Sessions are short, practical, and tied to your procedures.",
      },
      {
        title: "Coordinate with the school resource officer and local police",
        text: "Plans are written for the police and fire departments that will actually respond, so the school and its responders are working from the same document.",
      },
    ],
    faqs: [
      {
        question: "Can drills be run without frightening students?",
        answer: "Yes. A drill should teach the steps and leave the simulated threat out. We help schools plan age-appropriate drills and make sure the adults know the plan well enough to lead students through it calmly.",
      },
      {
        question: "Will you work with our school resource officer and local police?",
        answer: "Yes. Coordinating with the agencies that will respond is part of the work. We review what your local police, fire, and emergency management agencies already provide and write the plan around it.",
      },
      {
        question: "Are schools eligible for the Nonprofit Security Grant Program?",
        answer: "It depends on the program. Applicants must be 501(c)(3) nonprofits at heightened risk, and public schools are not eligible for the Connecticut state program. Private nonprofit schools should check the current rules, which our grant guide summarizes.",
      },
      {
        question: "Do you sell or install cameras, door hardware, or alarm systems?",
        answer: "No. We do not sell equipment or guard contracts, so our recommendations are not tied to a product. Where hardware is warranted, we say what it needs to do and leave the purchase to you.",
      },
    ],
    relatedPosts: ["emergency-response-plan-where-to-start", "hiring-security-guards"],
  },
  {
    slug: "property-management-housing",
    answer: "Property managers and housing providers face two security problems at once: protecting residents and buildings, and protecting staff who work alone, enter occupied units, and handle angry people at the front desk. We assess both and return procedures, training priorities, and building fixes ranked by impact and cost.",
    title: "Property Management & Housing Providers",
    description:
      "Property management companies, affordable housing organizations, and nonprofit landlords run a workforce that is spread across sites, often alone, and in constant contact with residents and applicants. Lease enforcement, rent collection, unit inspections, and after-hours maintenance calls can turn confrontational. Unit turnovers bring biohazard exposure. Older buildings make access control hard to maintain. We assess workplace violence risk, lone-worker exposure, office and property security, and incident reporting and emergency response procedures across a portfolio, and deliver recommendations ranked by cost so you can act on the highest-impact items first.",
    challenges: [
      "Staff working alone at small or remote sites",
      "Confrontational resident and applicant interactions during lease enforcement and intake",
      "Maintenance staff entering occupied units and handling turnovers after a death, overdose, or hoarding",
      "Unauthorized access, propped doors, and shared key codes in older buildings",
      "Inconsistent incident reporting across properties and regional managers",
      "Newly acquired properties with unknown security conditions",
    ],
    keyServices: [
      "workplace-violence-employee-safety",
      "threat-vulnerability-assessment",
      "policy-procedure-review",
      "staff-training",
    ],
    image: "/assets/images/industries/property.jpg",
    heading: "Security Consulting for Property Managers and Housing Providers",
    metaTitle: "Security Consulting for Property Managers",
    metaDescription: "Workplace violence assessments, lone-worker safety, and building security reviews for property managers and housing providers in CT, NY, MA, and RI.",
    audience: "Property management companies and housing providers",
    whoWeWorkWith: [
      "Property management companies",
      "Affordable housing organizations",
      "Nonprofit landlords and supportive housing providers",
      "Housing authorities",
      "Owners of apartment buildings and mixed-use properties",
    ],
    approach: [
      {
        title: "Assess where staff are exposed",
        text: "A workplace violence and employee safety assessment identifies where staff face aggression from residents, applicants, or the public, including lone work, entry into occupied units, and front-desk interactions.",
      },
      {
        title: "Review the buildings",
        text: "We look at access control, keys and codes, lighting, parking, and camera coverage at each site. Lighting and procedural fixes usually do more than adding cameras.",
      },
      {
        title: "Make reporting and response consistent",
        text: "A policy and procedure review reads your incident reporting forms and procedures against how your properties actually operate, and closes the gaps between sites and regional managers.",
      },
      {
        title: "Rank the fixes by impact and cost",
        text: "You get procedures, training priorities, and building fixes ranked so that you can act on the highest-impact items first across the portfolio.",
      },
    ],
    faqs: [
      {
        question: "What does a workplace violence assessment cover for property management staff?",
        answer: "It covers the situations where staff are most exposed: working alone at small sites, entering occupied units, lease enforcement and rent collection, and front-desk contact with residents and applicants. You get written procedures, a reporting process, and training priorities.",
      },
      {
        question: "Should we add more cameras to our buildings?",
        answer: "Check what you have first. A video systems review tells you whether your cameras cover the right places, record at usable quality, keep footage long enough, and are reviewed by someone. It shows what to fix before you buy more.",
      },
      {
        question: "Can you assess a whole portfolio, including newly acquired properties?",
        answer: "Yes. We assess workplace violence risk, lone-worker exposure, office and property security, and incident reporting across a portfolio, and deliver recommendations ranked by cost. Newly acquired properties with unknown conditions are a common starting point.",
      },
      {
        question: "Can you help us manage a security guard contract?",
        answer: "Yes. We write the post orders and performance standards and help you specify, hire, supervise, and evaluate guards, whether contracted or in-house. We do not sell guard services ourselves.",
      },
    ],
    relatedPosts: ["before-you-buy-cameras-apartment-buildings", "hiring-security-guards"],
  },
  {
    slug: "nonprofits-public-organizations",
    answer: "Nonprofits, libraries, community centers, and social service agencies serve the public in open buildings with small staffs and tight budgets. We find the low-cost procedural fixes first, then help you make the case for grants and capital when hardware is warranted.",
    title: "Nonprofits & Public Organizations",
    description:
      "Community centers, libraries, social service agencies, and other public organizations serve whoever walks in, including people in crisis. The buildings host public meetings, the staff are small, and the budgets are tight. We find the procedural fixes that cost little, then help you make the case for grants and capital when hardware is warranted.",
    challenges: [
      "Limited security budgets",
      "High-traffic public access areas",
      "Protection of sensitive client information",
      "Staff safety during client interactions",
      "After-hours and special event security",
    ],
    keyServices: [
      "policy-procedure-review",
      "physical-security-review",
      "staff-training",
      "emergency-response-plans",
    ],
    image: "/assets/images/industries/nonprofit.jpg",
    heading: "Security Consulting for Nonprofits and Public Organizations",
    metaTitle: "Security Consulting for Nonprofits",
    metaDescription: "Low-cost security fixes, staff training, emergency plans, and grant-ready assessments for nonprofits, libraries, and community centers in CT, NY, MA, and RI.",
    audience: "Nonprofits, libraries, community centers, and public organizations",
    whoWeWorkWith: [
      "Community centers",
      "Public libraries",
      "Social service agencies",
      "Shelters and food pantries",
      "Municipal departments and other public organizations",
    ],
    approach: [
      {
        title: "Start with what costs little",
        text: "A policy and procedure review reads your existing policies and incident forms against how the building actually operates. The first fixes are usually procedural and need no capital.",
      },
      {
        title: "Walk the building",
        text: "A physical security review is a walk-through of doors, locks, lighting, cameras, alarms, and layout, scored against your actual risks. It is the foundation for grant applications, insurance conversations, and capital planning.",
      },
      {
        title: "Train the staff who meet the public",
        text: "Staff training covers how to spot concerning behavior, handle an aggressive visitor, report an incident, and follow the emergency plan.",
      },
      {
        title: "Make the case for funding",
        text: "Where hardware is warranted, we help you make the case for grants and capital, with an assessment that the items you request trace back to.",
      },
    ],
    faqs: [
      {
        question: "We have almost no security budget. Where do we start?",
        answer: "Start with procedures, because they cost the least. Our free self-assessment takes about 20 minutes, scores eight security areas, and returns a prioritized action list. From there we find the low-cost fixes first and save hardware for where it is warranted.",
      },
      {
        question: "Can security grants pay for improvements to our building?",
        answer: "Often, yes. 501(c)(3) organizations at heightened risk can apply to the federal Nonprofit Security Grant Program and, in Connecticut, the state program. The federal program covers property you own or lease, the state program requires that you own the building, and neither reimburses the cost of the assessment.",
      },
      {
        question: "How do we keep front-desk staff safe when a visitor becomes aggressive?",
        answer: "With training and a written procedure. Staff learn how to spot concerning behavior, handle an aggressive visitor, and report what happened, and a workplace violence assessment identifies where the building or the process leaves them exposed.",
      },
      {
        question: "Do you work with libraries and municipal departments?",
        answer: "Yes. We work with libraries, community centers, social service agencies, and municipal departments in Connecticut, New York, Massachusetts, and Rhode Island, and remotely elsewhere in the United States.",
      },
    ],
    relatedPosts: ["emergency-response-plan-where-to-start", "hiring-security-guards"],
    grantGuide: true,
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
