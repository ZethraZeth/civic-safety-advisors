export interface Location {
  slug: string;
  name: string;
  abbreviation: string;
  description: string;
  localContext: string;
  metaDescription: string;
  whoWeServe: string[];
  keyServices: Array<{
    title: string;
    description: string;
    serviceSlug: string;
  }>;
}

export const locations: Location[] = [
  {
    slug: "connecticut",
    name: "Connecticut",
    abbreviation: "CT",
    description: "Civic Safety Advisors provides comprehensive public safety consulting services to Connecticut organizations, from municipalities implementing Vision Zero initiatives to nonprofits strengthening emergency preparedness programs.",
    localContext: "Connecticut organizations face unique public safety challenges—from urban centers managing traffic safety programs to suburban communities coordinating emergency response, and nonprofits serving vulnerable populations. We work with Connecticut decision-makers to develop practical, budget-conscious safety strategies that protect people while respecting organizational missions.",
    metaDescription: "Public safety consulting in Connecticut. Serving municipalities, nonprofits, schools, and healthcare organizations across CT with training, audits, and emergency planning.",
    whoWeServe: [
      "Connecticut municipalities and local government agencies",
      "Nonprofit organizations serving Connecticut communities",
      "K-12 schools, colleges, and universities in Connecticut",
      "Healthcare facilities and medical centers",
      "Faith-based organizations and houses of worship",
      "Community centers and social service agencies"
    ],
    keyServices: [
      {
        title: "Security Strategy & Public Safety Coordination",
        description: "Navigate the intersection between municipal resources and organizational security needs across Connecticut.",
        serviceSlug: "security-strategy-coordination"
      },
      {
        title: "Emergency Response Planning",
        description: "Develop incident-specific response procedures aligned with Connecticut emergency management standards.",
        serviceSlug: "emergency-response-plans"
      },
      {
        title: "Threat & Vulnerability Assessment",
        description: "Comprehensive facility assessments for Connecticut organizations seeking to identify and prioritize security improvements.",
        serviceSlug: "threat-vulnerability-assessment"
      },
      {
        title: "Staff Training Programs",
        description: "Practical security awareness training designed for Connecticut nonprofits, schools, and municipal staff.",
        serviceSlug: "staff-training"
      },
      {
        title: "Policy & Procedure Review",
        description: "Evaluate and strengthen security policies for Connecticut organizations to ensure compliance and effectiveness.",
        serviceSlug: "policy-procedure-review"
      }
    ]
  },
  {
    slug: "new-york",
    name: "New York",
    abbreviation: "NY",
    description: "Civic Safety Advisors serves New York organizations with strategic public safety consulting—helping municipalities, nonprofits, schools, and healthcare facilities develop effective security programs that align with local resources and organizational missions.",
    localContext: "New York's diverse communities—from upstate municipalities to suburban nonprofits and urban institutions—require tailored public safety approaches. We help New York organizations navigate complex safety challenges while coordinating effectively with local law enforcement and emergency management agencies.",
    metaDescription: "Public safety consulting in New York. Serving NY municipalities, nonprofits, schools, and healthcare with training, emergency planning, and security assessments.",
    whoWeServe: [
      "New York municipalities and local government",
      "Nonprofit organizations serving New York communities",
      "Schools, colleges, and universities across New York",
      "Healthcare facilities and medical providers",
      "Religious institutions and faith communities",
      "Social service agencies and community organizations"
    ],
    keyServices: [
      {
        title: "Security Strategy & Public Safety Coordination",
        description: "Align public safety resources with private security investments for New York organizations.",
        serviceSlug: "security-strategy-coordination"
      },
      {
        title: "Emergency Operations Planning",
        description: "Ensure continuity of operations during emergencies for New York municipalities and nonprofits.",
        serviceSlug: "emergency-operations-plans"
      },
      {
        title: "Physical Security Review",
        description: "Comprehensive facility security assessments for New York organizations seeking practical improvements.",
        serviceSlug: "physical-security-review"
      },
      {
        title: "Safety Response Team Training",
        description: "Build and train effective safety teams for New York schools, houses of worship, and community organizations.",
        serviceSlug: "safety-team-training"
      },
      {
        title: "Building Access Control",
        description: "Optimize entry points and visitor management for New York facilities serving public populations.",
        serviceSlug: "building-access-control"
      }
    ]
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbreviation: "MA",
    description: "Civic Safety Advisors provides public safety consulting throughout Massachusetts, helping municipalities, educational institutions, nonprofits, and healthcare organizations develop strategic security programs grounded in local partnerships and practical implementation.",
    localContext: "Massachusetts organizations benefit from strong public safety resources and collaborative emergency management structures. We help Massachusetts decision-makers leverage these existing relationships while identifying when additional private security measures genuinely reduce risk—avoiding redundant spending and maximizing coordination with local agencies.",
    metaDescription: "Public safety consulting in Massachusetts. Serving MA municipalities, nonprofits, schools, and healthcare with emergency planning, training, and security strategy.",
    whoWeServe: [
      "Massachusetts municipalities and local agencies",
      "Nonprofit organizations throughout Massachusetts",
      "Educational institutions across Massachusetts",
      "Healthcare facilities and medical organizations",
      "Faith-based organizations and religious communities",
      "Community centers and social service providers"
    ],
    keyServices: [
      {
        title: "Security Strategy & Public Safety Coordination",
        description: "Navigate public-private security partnerships for Massachusetts organizations.",
        serviceSlug: "security-strategy-coordination"
      },
      {
        title: "Emergency Response Planning",
        description: "Develop incident-specific response procedures for Massachusetts facilities and organizations.",
        serviceSlug: "emergency-response-plans"
      },
      {
        title: "Threat & Vulnerability Assessment",
        description: "Identify and prioritize security improvements for Massachusetts nonprofits, schools, and municipalities.",
        serviceSlug: "threat-vulnerability-assessment"
      },
      {
        title: "Staff Training Programs",
        description: "Practical security awareness training for Massachusetts organizational staff and volunteers.",
        serviceSlug: "staff-training"
      },
      {
        title: "Video Systems Review",
        description: "Evaluate and optimize surveillance systems for Massachusetts facilities seeking coverage improvements.",
        serviceSlug: "video-systems-review"
      }
    ]
  },
  {
    slug: "rhode-island",
    name: "Rhode Island",
    abbreviation: "RI",
    description: "Civic Safety Advisors serves Rhode Island organizations with strategic public safety consulting—helping municipalities, nonprofits, schools, and community organizations develop effective security programs that coordinate with local resources and respect budget realities.",
    localContext: "Rhode Island's close-knit communities and strong municipal partnerships create opportunities for effective public safety coordination. We help Rhode Island organizations leverage existing relationships with local law enforcement and emergency management while identifying practical security improvements that genuinely reduce risk without unnecessary expense.",
    metaDescription: "Public safety consulting in Rhode Island. Serving RI municipalities, nonprofits, schools, and healthcare with training, planning, and security coordination.",
    whoWeServe: [
      "Rhode Island municipalities and local government",
      "Nonprofit organizations serving Rhode Island communities",
      "Schools and educational institutions in Rhode Island",
      "Healthcare providers and medical facilities",
      "Houses of worship and faith communities",
      "Community organizations and social service agencies"
    ],
    keyServices: [
      {
        title: "Security Strategy & Public Safety Coordination",
        description: "Align public safety resources with organizational security needs for Rhode Island institutions.",
        serviceSlug: "security-strategy-coordination"
      },
      {
        title: "Emergency Operations Planning",
        description: "Develop continuity plans for Rhode Island organizations to maintain operations during emergencies.",
        serviceSlug: "emergency-operations-plans"
      },
      {
        title: "Physical Security Review",
        description: "Comprehensive facility assessments for Rhode Island organizations seeking security improvements.",
        serviceSlug: "physical-security-review"
      },
      {
        title: "Safety Response Team Training",
        description: "Build effective safety teams for Rhode Island schools, nonprofits, and community organizations.",
        serviceSlug: "safety-team-training"
      },
      {
        title: "Policy & Procedure Review",
        description: "Strengthen security policies for Rhode Island organizations to ensure effectiveness and compliance.",
        serviceSlug: "policy-procedure-review"
      }
    ]
  }
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export const locationSummaries = locations.map(loc => ({
  slug: loc.slug,
  name: loc.name,
  abbreviation: loc.abbreviation,
  description: loc.description
}));
