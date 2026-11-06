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
    shortDescription: "Align public safety resources and private security investments to reduce risk, eliminate redundancy, and ensure effective response before, during, and after incidents.",
    fullDescription: "We help organizations navigate the intersection between public safety resources and private security investments. Our approach ensures you understand what services are already available at no cost through local public safety agencies, when private security solutions are appropriate and cost-effective, and how to coordinate both without duplication, gaps, or wasted spend. This creates a clear, repeatable pathway for incident response, follow-up, and long-term security planning.",
    icon: "Network",
    category: "strategy",
    deliverables: [
      "Public Safety Navigation & Liaison: Guidance on when and how to engage law enforcement and emergency services, support during incident response and post-incident follow-up, assistance obtaining reports and required records",
      "Public–Private Role Definition: Clear delineation of responsibilities between staff, private security, and public responders, avoidance of overlapping services and unnecessary spend",
      "Security Spend Optimization: Evaluation of existing security contracts and services, identification of redundancy with public resources, budget-conscious recommendations aligned to real risk",
      "Incident Pathway Design: Step-by-step response pathways for common scenarios, clear escalation thresholds, defined decision points for staff and leadership"
    ],
    process: [
      "Assessment of current public safety relationships and private security arrangements",
      "Analysis of available public resources and response capabilities",
      "Identification of gaps, redundancies, and coordination opportunities",
      "Development of integrated response pathways and role definitions",
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
    fullDescription: "Comprehensive evaluation of your existing security documentation to ensure policies align with industry best practices and your organization's specific needs. We review all security-related policies, procedures, incident reporting and escalation procedures, and post orders to identify gaps, inconsistencies, and opportunities for improvement.",
    icon: "FileText",
    category: "policy",
    deliverables: [
      "Written assessment report with prioritized recommendations",
      "Gap analysis against industry best practices",
      "Updated policy templates and frameworks",
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
    shortDescription: "Navigate complex state and local security regulations with expert guidance.",
    fullDescription: "Expert analysis of applicable state and local regulations governing security operations. We help you understand licensing requirements, maintain compliance, and properly document all regulatory obligations for your security program.",
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
    shortDescription: "Expert guidance on hiring, retention, and management of security staff.",
    fullDescription: "Comprehensive support for building and managing an effective security team. From developing job descriptions to creating performance management frameworks, we help you attract, retain, and properly manage security personnel while maintaining compliance with all applicable laws.",
    icon: "Users",
    category: "policy",
    deliverables: [
      "Security personnel management guide",
      "Job descriptions and qualification standards",
      "Interview process and evaluation tools",
      "Performance management frameworks",
      "Termination procedures and documentation"
    ],
    process: [
      "Staffing needs assessment",
      "Development of hiring criteria",
      "Interview and evaluation process design",
      "Performance management system creation",
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
    fullDescription: "Comprehensive facility threat analysis to identify security vulnerabilities and prioritize mitigation strategies. Our assessments provide a clear understanding of your risk profile and actionable recommendations to strengthen your security posture. For organizations with multiple sites, we assess a representative sample or the full portfolio and deliver findings by property with portfolio-wide recommendations.",
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
    shortDescription: "Optimize entry points, visitor management, and secure area protection.",
    fullDescription: "Detailed evaluation of your facility's access control systems and procedures. We assess entry points, key control systems, visitor management processes, and secure area designations to ensure appropriate protection while maintaining operational efficiency.",
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
    shortDescription: "Enhance exterior security with proper lighting, surveillance, and access control.",
    fullDescription: "Comprehensive assessment of your facility's exterior security including parking areas, lighting adequacy, perimeter protection, and pedestrian safety. We identify vulnerabilities in your exterior spaces and recommend practical improvements.",
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
    shortDescription: "Evaluate and optimize your video surveillance systems.",
    fullDescription: "Comprehensive evaluation of existing camera systems, coverage areas, recording capabilities, and retention policies. We identify coverage gaps and provide recommendations for system upgrades and integration with other security measures.",
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
    shortDescription: "Comprehensive evaluation of access control, cameras, and lighting.",
    fullDescription: "Complete physical security assessment covering all aspects of your facility's protective measures. This holistic review examines access control, surveillance systems, lighting, perimeter security, and facility hardening opportunities.",
    icon: "ClipboardCheck",
    category: "physical",
    deliverables: [
      "Comprehensive physical security report",
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
    fullDescription: "Development of comprehensive emergency response plans tailored to your organization's specific needs. We create clear, actionable procedures for various emergency scenarios, establish communication protocols, and coordinate with local emergency services.",
    icon: "Siren",
    category: "emergency",
    deliverables: [
      "Comprehensive emergency response plan document",
      "Incident-specific response procedures",
      "Communication protocols and chains of command",
      "Coordination procedures with emergency services",
      "Plan testing and validation framework"
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
    shortDescription: "Ensure continuity of operations during and after emergencies.",
    fullDescription: "Comprehensive planning for maintaining critical operations during emergencies and recovering afterward. We help you identify essential functions, allocate resources, and develop procedures to ensure your organization can continue serving your community even during crisis situations.",
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
    shortDescription: "Build and train effective safety teams for your organization.",
    fullDescription: "Development of comprehensive training programs for your safety response teams. We help you structure your team, define roles, create training curricula, and establish ongoing development schedules to ensure your safety team is prepared and confident.",
    icon: "UserCheck",
    category: "emergency",
    deliverables: [
      "Safety team training program",
      "Team structure and role definitions",
      "Training curriculum and materials",
      "Skill assessment frameworks",
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
    shortDescription: "Establish clear procedures and protocols for safety teams.",
    fullDescription: "Development of detailed standard operating procedures for safety response teams. We create clear, actionable guidelines covering team activation, communication protocols, equipment usage, incident documentation, and coordination with other responders.",
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
      "Best practice research",
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
    shortDescription: "Equip all staff with security awareness and response skills.",
    fullDescription: "Comprehensive security awareness training for all staff members, volunteers, and team members. We develop and deliver training programs that cover security responsibilities, reporting procedures, de-escalation techniques, and emergency response basics appropriate for non-security personnel.",
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
    fullDescription: "Comprehensive active shooter and active threat preparedness training using evidence-based methodologies. We adapt Run-Hide-Fight principles to your specific facility, conduct scenario-based training, and prepare your team both practically and psychologically for these rare but critical situations.",
    icon: "AlertTriangle",
    category: "emergency",
    deliverables: [
      "Active shooter preparedness program",
      "Evidence-based response protocols",
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
