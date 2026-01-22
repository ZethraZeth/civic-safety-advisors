export type ServiceCategory = "policy" | "physical" | "emergency";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: "FileText" | "Users" | "Shield" | "Cctv" | "Siren" | "GraduationCap" | "Scale" | "ClipboardCheck" | "Building" | "Video" | "AlertTriangle" | "Briefcase" | "UserCheck";
  category: ServiceCategory;
  deliverables: string[];
  process: string[];
  relatedServices: string[]; // slugs
}

export const services: Service[] = [
  // CATEGORY 1: POLICY & COMPLIANCE
  {
    slug: "policy-procedure-review",
    title: "Review of Policies, Procedures & Post Orders",
    shortDescription: "Evaluate and strengthen your security policies, procedures, and post orders.",
    fullDescription: "Comprehensive evaluation of your existing security documentation to ensure policies align with industry best practices and your organization's specific needs. We review all security-related policies, procedures, and post orders to identify gaps, inconsistencies, and opportunities for improvement.",
    icon: "FileText",
    category: "policy",
    deliverables: [
      "Written assessment report with prioritized recommendations",
      "Gap analysis against industry best practices",
      "Updated policy templates and frameworks",
      "Post order development and refinement"
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
    title: "Threat & Vulnerability Assessment",
    shortDescription: "Identify risks and vulnerabilities before they become incidents.",
    fullDescription: "Comprehensive facility threat analysis to identify security vulnerabilities and prioritize mitigation strategies. Our assessments provide a clear understanding of your risk profile and actionable recommendations to strengthen your security posture.",
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
    relatedServices: ["physical-security-review", "emergency-planning"]
  },
  {
    slug: "building-access-control",
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

// Filtered lists for homepage
export const homeServices = services.slice(0, 6);

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
  policy: "Policy & Compliance",
  physical: "Physical Security Assessment",
  emergency: "Emergency Preparedness & Training",
};
