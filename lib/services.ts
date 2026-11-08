export type ServiceCategory = "strategy" | "policy" | "physical" | "emergency";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  /** Two-sentence direct answer shown first on the page; written to be quoted by search and AI engines. */
  answer?: string;
  fullDescription: string;
  icon: "Network" | "FileText" | "Users" | "Shield" | "Cctv" | "Siren" | "GraduationCap" | "Scale" | "ClipboardCheck" | "Building" | "Video" | "AlertTriangle" | "Briefcase" | "UserCheck";
  category: ServiceCategory;
  deliverables: string[];
  process: string[];
  relatedServices: string[]; // slugs
}

export const services: Service[] = [
  // CATEGORY 0: STRATEGY & COORDINATION
  {
    slug: "security-strategy-coordination",
    answer: "Security strategy coordination is a review of what your local police, fire, and emergency management agencies already provide, matched against what you are paying for privately. The result is a written plan that removes overlap, fills real gaps, and names who does what before, during, and after an incident.",
    title: "Security Strategy & Public Safety Coordination",
    shortDescription: "Find out what local police, fire, and emergency management already provide, decide what private security you still need, and settle who does what during an incident.",
    fullDescription: "Most organizations pay for some security privately without knowing what their local public safety agencies already provide for free. We map the two against each other: which services police, fire, and emergency management will deliver, where private security is worth the cost, and how to coordinate both so nothing is duplicated and nothing falls through. You end up with a written pathway for incident response, follow-up, and the next budget cycle.",
    icon: "Network",
    category: "strategy",
    deliverables: [
      "Public Safety Liaison: When and how to bring in law enforcement and emergency services, support during an incident and in the follow-up, help obtaining reports and required records",
      "Public–Private Role Definition: Who is responsible for what among staff, private security, and public responders, so you are not paying twice for the same thing",
      "Security Spend Review: A look at your existing security contracts and services, where they overlap with public resources, and recommendations sized to your budget and your risk",
      "Incident Pathway Design: Step-by-step response pathways for common scenarios, with escalation thresholds and decision points for staff and leadership"
    ],
    process: [
      "Assessment of current public safety relationships and private security arrangements",
      "Analysis of available public resources and response capabilities",
      "Identification of gaps, overlaps, and places to coordinate",
      "Written response pathways and role definitions",
      "Implementation support and ongoing advisory"
    ],
    relatedServices: ["policy-procedure-review", "threat-vulnerability-assessment", "emergency-response-plans"]
  },

  // CATEGORY 1: POLICY & COMPLIANCE
  {
    slug: "workplace-violence-employee-safety",
    answer: "A workplace violence and employee safety assessment identifies where your staff are exposed to aggression from the public, clients, or residents, including lone work, home visits, and front-desk interactions. You get written procedures, a reporting process, and training priorities that satisfy OSHA's general duty expectations and your insurer's questions.",
    title: "Workplace Violence & Employee Safety Assessment",
    shortDescription: "Assess the risks your staff face from the public, clients, and residents, including lone-worker exposure, and build the procedures to manage them.",
    fullDescription: "Most security assessments focus on the building. This one focuses on the people who work in it. We evaluate how your staff interact with the public, clients, residents, and applicants; where and when they work alone; what happens after hours; how incidents are reported and escalated; and what training and procedures exist today. The result is a written workplace violence prevention program sized to your organization, with recommendations ranked by cost and impact, written so it can be shared with leadership, your board, and your insurance broker.",
    icon: "UserCheck",
    category: "policy",
    deliverables: [
      "Workplace violence risk assessment by site and by role",
      "Lone-worker and field-staff exposure evaluation with specific controls",
      "Review of incident reporting procedures and escalation thresholds",
      "Written workplace violence prevention program and policy templates",
      "30-60-90 day action list ranked by cost and impact",
      "Leadership or board readout"
    ],
    process: [
      "Scoping call to confirm sites, roles, known concerns, and timeline",
      "Review of policies, incident history, staffing patterns, and site layouts",
      "Site visits and interviews with front-line staff, managers, and leadership",
      "Analysis and recommendations",
      "Report delivery, readout, and optional training"
    ],
    relatedServices: ["threat-vulnerability-assessment", "policy-procedure-review", "staff-training"]
  },
  {
    slug: "policy-procedure-review",
    answer: "A policy and procedure review reads your existing security policies, incident reporting forms, and post orders against how your building actually operates. We return a marked-up set with the gaps closed and the language made usable by the people who have to follow it.",
    title: "Review of Policies, Procedures & Post Orders",
    shortDescription: "Evaluate and strengthen your security policies, incident reporting procedures, and post orders.",
    fullDescription: "We read every security-related policy, procedure, incident reporting form, escalation procedure, and post order you have, and compare them with how your building actually operates and with what comparable organizations do. The review finds gaps, contradictions between documents, and language nobody follows, and returns a marked-up set your staff can use.",
    icon: "FileText",
    category: "policy",
    deliverables: [
      "Written assessment report with prioritized recommendations",
      "Gap analysis against current standards and comparable organizations",
      "Updated policy templates",
      "Post order development and refinement",
      "Incident reporting form and escalation procedure"
    ],
    process: [
      "Document collection and review",
      "Stakeholder interviews",
      "Gap analysis and benchmarking",
      "Draft recommendations",
      "Final report delivery and consultation"
    ],
    relatedServices: ["state-licensing", "security-personnel-management"]
  },
  {
    slug: "state-licensing",
    answer: "State licensing guidance tells you which security activities in Connecticut, New York, Massachusetts, and Rhode Island require licensed personnel or registered companies, and how to stay compliant when you hire guards or run your own safety team. It prevents the common mistake of paying for a service the vendor is not licensed to provide.",
    title: "State Licensing and Permit Requirements",
    shortDescription: "We tell you which security activities need a license in your state and how to stay compliant when you hire guards or run your own team.",
    fullDescription: "We identify the state and local rules that apply to your security program, explain what has to be licensed or registered, and set up the documentation that proves you are compliant. This matters most when you hire a guard company or ask staff or volunteers to take on security duties.",
    icon: "Scale",
    category: "policy",
    deliverables: [
      "Compliance checklist and action plan",
      "Regulatory requirement documentation",
      "Permit application assistance",
      "Ongoing compliance guidance"
    ],
    process: [
      "Jurisdiction analysis",
      "Requirement identification",
      "Compliance gap assessment",
      "Action plan development",
      "Implementation support"
    ],
    relatedServices: ["policy-procedure-review", "security-personnel-management"]
  },
  {
    slug: "security-personnel-management",
    answer: "Security personnel management covers how to specify, hire, supervise, and evaluate guards, whether contracted or in-house. We write the post orders and performance standards so the guard contract delivers what you are paying for.",
    title: "Hiring, Retention, and Termination of Security Guards",
    shortDescription: "We help you specify, hire, supervise, and evaluate security staff, contracted or in-house.",
    fullDescription: "We help you build and run a security team: job descriptions, interview questions, performance standards, supervision, and the documentation to terminate someone properly when that becomes necessary. Everything is written to comply with the employment and licensing laws in your state.",
    icon: "Users",
    category: "policy",
    deliverables: [
      "Security personnel management guide",
      "Job descriptions and qualification standards",
      "Interview process and evaluation tools",
      "Performance standards and review process",
      "Termination procedures and documentation"
    ],
    process: [
      "Staffing needs assessment",
      "Development of hiring criteria",
      "Interview and evaluation process design",
      "Performance standards and review process",
      "Documentation and training delivery"
    ],
    relatedServices: ["policy-procedure-review", "training-programs"]
  },

  // CATEGORY 2: PHYSICAL SECURITY ASSESSMENT
  {
    slug: "threat-vulnerability-assessment",
    answer: "A threat and vulnerability assessment is a site-specific review of the threats your organization faces and the physical, procedural, and staffing weaknesses that would let them succeed. It produces a prioritized, costed list of fixes and satisfies the assessment requirement for federal and Connecticut Nonprofit Security Grant Program applications.",
    title: "Threat & Vulnerability Assessment",
    shortDescription: "Identify risks and vulnerabilities before they become incidents.",
    fullDescription: "We walk the site, review your procedures and incident history, and identify the threats that apply to you and the weaknesses that would let them succeed. You get a ranked list of fixes with cost estimates and a report written for your board, insurer, or grant reviewer. For organizations with multiple sites, we assess a representative sample or the full portfolio and report findings by property with portfolio-wide recommendations.",
    icon: "Shield",
    category: "physical",
    deliverables: [
      "Detailed threat assessment report",
      "Vulnerability identification and analysis",
      "Risk prioritization matrix",
      "Mitigation strategy recommendations",
      "Executive summary for leadership"
    ],
    process: [
      "Initial consultation and scope definition",
      "On-site facility assessment",
      "Threat and vulnerability analysis",
      "Risk prioritization",
      "Report delivery and action planning"
    ],
    relatedServices: ["physical-security-review", "workplace-violence-employee-safety", "emergency-response-plans"]
  },
  {
    slug: "building-access-control",
    answer: "A building access control review looks at every way people get into and move through your building: doors, keys, codes, visitor check-in, and secured interior areas. Most findings are procedural and cost little; hardware recommendations come only where they change the outcome.",
    title: "Building Access Control and Security",
    shortDescription: "We review doors, keys, codes, visitor check-in, and the interior areas that should be locked.",
    fullDescription: "We look at every way people get into and move through your building: entry points, key and code control, visitor check-in, and which interior areas are secured. The recommendations keep the building usable for the people who work there while closing the ways in that nobody is watching.",
    icon: "Building",
    category: "physical",
    deliverables: [
      "Access control improvement plan",
      "Entry point security evaluation",
      "Key control and access management recommendations",
      "Visitor management procedure design",
      "Technology integration options"
    ],
    process: [
      "Current system assessment",
      "Entry point evaluation",
      "Technology review",
      "Procedure development",
      "Implementation roadmap"
    ],
    relatedServices: ["physical-security-review", "video-systems-review"]
  },
  {
    slug: "parking-lot-security",
    answer: "A parking lot security review covers lighting levels, sightlines, camera coverage, access points, and the walk between cars and doors, especially for staff leaving after dark. Lighting and landscaping fixes usually do more than cameras.",
    title: "Parking Lot Security, Lighting & Perimeter",
    shortDescription: "We check lighting, sightlines, cameras, and the walk from the car to the door.",
    fullDescription: "We assess the outside of your facility: parking areas, lighting, the perimeter, and the routes people walk between cars and doors, including after dark. Most of the fixes are lighting, landscaping, and procedure rather than hardware.",
    icon: "Cctv",
    category: "physical",
    deliverables: [
      "Exterior security recommendations",
      "Lighting adequacy evaluation",
      "Surveillance coverage analysis",
      "Traffic flow and pedestrian safety review",
      "Perimeter security plan"
    ],
    process: [
      "Site walk-through and documentation",
      "Lighting assessment (day and night)",
      "Coverage gap identification",
      "Safety and security analysis",
      "Recommendation delivery"
    ],
    relatedServices: ["physical-security-review", "video-systems-review"]
  },
  {
    slug: "video-systems-review",
    answer: "A video systems review checks whether your cameras cover the right places, record at usable quality, retain footage long enough, and are monitored or reviewed by someone. It tells you what to fix before you add more cameras.",
    title: "Review of Video Systems & Security Cameras",
    shortDescription: "We check whether your cameras cover the right places, record usable footage, and are ever watched.",
    fullDescription: "We review your existing cameras, what they cover, how well they record, how long footage is kept, and who can export it. You get a list of coverage gaps and a recommendation on what to fix or add, and whether the system should tie into your alarms and access control.",
    icon: "Video",
    category: "physical",
    deliverables: [
      "Video system assessment report",
      "Coverage gap analysis",
      "Technology upgrade recommendations",
      "Recording and retention policy review",
      "System integration roadmap"
    ],
    process: [
      "Current system inventory",
      "Coverage analysis",
      "Technology evaluation",
      "Gap identification",
      "Upgrade and integration planning"
    ],
    relatedServices: ["building-access-control", "physical-security-review"]
  },
  {
    slug: "physical-security-review",
    answer: "A physical security review is a walk-through of doors, locks, lighting, cameras, alarms, and layout, scored against your actual risks. It is the foundation for grant applications, insurance conversations, and capital planning.",
    title: "Physical Security Review",
    shortDescription: "We walk through doors, locks, lighting, cameras, and alarms and score them against your risks.",
    fullDescription: "A full review of the physical measures protecting your building: access control, cameras, lighting, the perimeter, and where the structure itself could be hardened. Findings are ranked so you know what to do first and what can wait for the next budget.",
    icon: "ClipboardCheck",
    category: "physical",
    deliverables: [
      "Written physical security report",
      "Multi-layer security analysis",
      "Technology and procedure recommendations",
      "Prioritized improvement roadmap",
      "Budget planning guidance"
    ],
    process: [
      "Facility assessment and documentation",
      "System and procedure evaluation",
      "Gap analysis",
      "Recommendation development",
      "Report delivery and consultation"
    ],
    relatedServices: ["threat-vulnerability-assessment", "building-access-control", "video-systems-review"]
  },

  // CATEGORY 3: EMERGENCY PREPAREDNESS & TRAINING
  {
    slug: "emergency-response-plans",
    answer: "An emergency response plan says who does what in the first minutes of a specific incident: fire, medical emergency, hostile intruder, severe weather, bomb threat, or utility failure. We write plans your staff can follow under stress and coordinate them with local police and fire.",
    title: "Emergency Response Plans",
    shortDescription: "Develop incident-specific response procedures for your facility.",
    fullDescription: "We write the emergency response plan for your building: what staff do in the first minutes of a fire, medical emergency, hostile intruder, severe weather, bomb threat, or utility failure, how they communicate, and how the plan lines up with what local police and fire will do when they arrive.",
    icon: "Siren",
    category: "emergency",
    deliverables: [
      "Written emergency response plan",
      "Incident-specific response procedures",
      "Communication protocols and chains of command",
      "Coordination procedures with emergency services",
      "Drill schedule and test plan"
    ],
    process: [
      "Risk and scenario identification",
      "Response procedure development",
      "Stakeholder consultation",
      "Communication protocol design",
      "Plan testing and refinement"
    ],
    relatedServices: ["emergency-operations-plans", "safety-team-training"]
  },
  {
    slug: "emergency-operations-plans",
    answer: "An emergency operations plan covers how your organization keeps running or recovers after an incident: communications, decision authority, relocation, and return to normal. It fills the gap between an evacuation plan and the next business day.",
    title: "Emergency Operations Plans",
    shortDescription: "We plan how your organization keeps running, or gets running again, after an incident.",
    fullDescription: "An evacuation plan ends when everyone is outside. This plan covers what happens next: which functions have to keep running, who has authority to decide, where people relocate, how you communicate, and how you get back to normal. We write it with the people who would have to carry it out.",
    icon: "Briefcase",
    category: "emergency",
    deliverables: [
      "Emergency operations plan document",
      "Continuity of operations planning",
      "Resource allocation and logistics plans",
      "Recovery procedures",
      "Stakeholder communication strategies"
    ],
    process: [
      "Essential function identification",
      "Resource assessment",
      "Procedure development",
      "Testing and validation",
      "Plan finalization and training"
    ],
    relatedServices: ["emergency-response-plans", "safety-team-training"]
  },
  {
    slug: "safety-team-training",
    answer: "Safety team training prepares a volunteer or staff team to observe, de-escalate, direct people, and work with responders during an incident. Training is built around your building and your plan, not a generic curriculum.",
    title: "Safety Response Team Training Plans",
    shortDescription: "Train a volunteer or staff safety team around your building and your plan.",
    fullDescription: "We help you decide how the team is structured, what each position does, and what they need to know, then build the training around your building and your emergency plan rather than a generic curriculum. The program includes a schedule for refreshers so the training holds up after the first year.",
    icon: "UserCheck",
    category: "emergency",
    deliverables: [
      "Safety team training program",
      "Team structure and role definitions",
      "Training curriculum and materials",
      "Skills checklists for each role",
      "Ongoing training schedules"
    ],
    process: [
      "Team needs assessment",
      "Role and responsibility definition",
      "Curriculum development",
      "Training delivery",
      "Ongoing support and updates"
    ],
    relatedServices: ["safety-team-procedures", "staff-training"]
  },
  {
    slug: "safety-team-procedures",
    answer: "Safety team procedures define the team's authority, positions, communication, and response steps in writing so volunteers act consistently and within the law. They are the document that makes safety team training stick.",
    title: "Safety Response Team Procedures",
    shortDescription: "We write the procedures that tell your safety team what they may do, and how.",
    fullDescription: "We write the standard operating procedures for your safety team: when the team activates, how members communicate, what equipment they carry and how they use it, how incidents get documented, and how they hand off to police, fire, and EMS. Written procedures are what keep volunteers consistent and inside the law.",
    icon: "ClipboardCheck",
    category: "emergency",
    deliverables: [
      "Safety team procedures manual",
      "Standard operating procedures",
      "Communication and coordination protocols",
      "Equipment and resource guidelines",
      "Incident documentation requirements"
    ],
    process: [
      "Current procedure review",
      "Review of current standards and peer procedures",
      "Procedure development",
      "Team review and feedback",
      "Finalization and training"
    ],
    relatedServices: ["safety-team-training", "emergency-response-plans"]
  },
  {
    slug: "staff-training",
    answer: "Staff security awareness training teaches every employee how to spot concerning behavior, handle an aggressive visitor, report an incident, and follow the emergency plan. Sessions are short, practical, and tied to your procedures.",
    title: "Staff Training",
    shortDescription: "Security awareness training for staff and volunteers who are not security professionals.",
    fullDescription: "Security awareness training for every employee and volunteer, not just the safety team. Sessions cover what each role is responsible for, how to report a concern, how to handle an aggressive visitor, and the basics of your emergency plan, at a level that makes sense for people whose job is not security.",
    icon: "GraduationCap",
    category: "emergency",
    deliverables: [
      "Staff training program and materials",
      "Role-specific security responsibilities",
      "Reporting procedures and communication",
      "De-escalation and conflict resolution training",
      "Training completion documentation"
    ],
    process: [
      "Training needs assessment",
      "Curriculum development",
      "Training delivery (in-person or virtual)",
      "Skills practice and reinforcement",
      "Follow-up and refresher planning"
    ],
    relatedServices: ["active-shooter-training", "safety-team-training"]
  },
  {
    slug: "active-shooter-training",
    answer: "Active threat response training teaches staff the run, hide, fight decision, how lockdown and lockout differ, and what to expect from arriving police. It is delivered without theatrics and built on current law enforcement guidance.",
    title: "Active Shooter Training",
    shortDescription: "Evidence-based active threat response training for your organization.",
    fullDescription: "Active threat training built on current law enforcement guidance and delivered without theatrics. We adapt Run-Hide-Fight to your actual building, walk through scenarios in the spaces where they would happen, and prepare people for what arriving police will do and expect. The training is honest about how rare these events are and takes them seriously anyway.",
    icon: "AlertTriangle",
    category: "emergency",
    deliverables: [
      "Active shooter preparedness program",
      "Response protocols based on current law enforcement guidance",
      "Facility-specific scenario planning",
      "Hands-on drills and exercises",
      "Psychological preparedness resources"
    ],
    process: [
      "Facility vulnerability assessment",
      "Scenario development",
      "Training delivery",
      "Drill facilitation",
      "After-action review and improvement"
    ],
    relatedServices: ["staff-training", "emergency-response-plans"]
  }
];

// Filtered lists for homepage - lead with strategy, mix of policy/physical/emergency (exclude active shooter)
export const homeServices = [
  services[0],  // security-strategy-coordination (STRATEGY)
  services[1],  // policy-procedure-review (POLICY)
  services[4],  // threat-vulnerability-assessment (PHYSICAL)
  services[7],  // emergency-response-plans (EMERGENCY)
  services[5],  // building-access-control (PHYSICAL)
  services[11], // staff-training (EMERGENCY)
];

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}

export function getRelatedServices(serviceSlug: string): Service[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];

  return service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => s !== undefined);
}

export const categoryLabels: Record<ServiceCategory, string> = {
  strategy: "Security Strategy & Coordination",
  policy: "Policy & Compliance",
  physical: "Physical Security Assessment",
  emergency: "Emergency Preparedness & Training",
};
