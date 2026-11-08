export interface Location {
  slug: string;
  name: string;
  abbreviation: string;
  description: string;
  /** Two-sentence direct answer shown first; written to be quoted by search and AI engines. */
  answer?: string;
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
    answer: "Civic Safety Advisors is based in Branford, Connecticut and serves houses of worship, schools, property managers, and nonprofits across the state with on-site security assessments, emergency plans, and training. We prepare the vulnerability assessments that the federal Nonprofit Security Grant Program and the Connecticut NSGP require.",
    name: "Connecticut",
    abbreviation: "CT",
    description: "Connecticut is home. We work with municipalities, nonprofits, schools, houses of worship, and housing providers across the state.",
    localContext: "Connecticut runs its nonprofit security grants through DESPP's Division of Emergency Management and Homeland Security, and it relies on municipal police and fire departments whose resources and response times differ from New Haven and Hartford to the suburbs and small towns. We know those agencies and those programs, and we build plans around what your town will actually do when called.",
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
        description: "What your town's police, fire, and emergency management already provide, and what you still need to arrange yourself.",
        serviceSlug: "security-strategy-coordination"
      },
      {
        title: "Emergency Response Planning",
        description: "Response procedures for each type of incident, coordinated with your local departments and DEMHS guidance.",
        serviceSlug: "emergency-response-plans"
      },
      {
        title: "Threat & Vulnerability Assessment",
        description: "Site assessments written to the format the federal NSGP and the Connecticut NSGP require.",
        serviceSlug: "threat-vulnerability-assessment"
      },
      {
        title: "Staff Training Programs",
        description: "Security awareness training for nonprofit, school, and municipal staff, on site anywhere in the state.",
        serviceSlug: "staff-training"
      },
      {
        title: "Policy & Procedure Review",
        description: "A read of your policies, incident forms, and post orders against Connecticut law and how your building actually runs.",
        serviceSlug: "policy-procedure-review"
      }
    ]
  },
  {
    slug: "new-york",
    answer: "We serve New York organizations from Westchester and the Hudson Valley to New York City with on-site security assessments, emergency planning, and staff training. Work is coordinated with local police and fire departments and written to support New York's NSGP applications.",
    name: "New York",
    abbreviation: "NY",
    description: "We work with New York municipalities, nonprofits, schools, houses of worship, and healthcare facilities, from Westchester and the Hudson Valley to New York City.",
    localContext: "A plan that works for a congregation in New York City will not work unchanged for a school district upstate. Response times, the agencies involved, and the security grant programs differ. We write each plan for the police department and emergency management office that will actually respond, and we prepare assessments in the format New York's NSGP applications require.",
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
        description: "What your local agencies already provide, and where private security is worth paying for.",
        serviceSlug: "security-strategy-coordination"
      },
      {
        title: "Emergency Operations Planning",
        description: "How your organization keeps running, or gets running again, after an incident.",
        serviceSlug: "emergency-operations-plans"
      },
      {
        title: "Physical Security Review",
        description: "A walk-through of doors, locks, lighting, cameras, and alarms, with findings ranked by cost and risk.",
        serviceSlug: "physical-security-review"
      },
      {
        title: "Safety Response Team Training",
        description: "Training for volunteer and staff safety teams at schools, houses of worship, and community organizations.",
        serviceSlug: "safety-team-training"
      },
      {
        title: "Building Access Control",
        description: "Doors, keys, codes, and visitor check-in for buildings the public walks into every day.",
        serviceSlug: "building-access-control"
      }
    ]
  },
  {
    slug: "massachusetts",
    answer: "We serve Massachusetts houses of worship, schools, housing providers, and nonprofits with security assessments, emergency plans, and training, on site in the Boston area and western Massachusetts and virtually statewide. Reports are written to support the state's NSGP and insurer requirements.",
    name: "Massachusetts",
    abbreviation: "MA",
    description: "We work with Massachusetts municipalities, schools, nonprofits, houses of worship, and healthcare organizations, on site in the Boston area and western Massachusetts and remotely statewide.",
    localContext: "Massachusetts has well-resourced public safety agencies and an active emergency management structure, which means an organization may be paying privately for something its town already provides. We start by finding those overlaps, then identify the private measures that would reduce risk, and we write reports to support the state's NSGP applications and insurer requirements.",
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
        description: "What your town already provides, and where private security is worth the cost.",
        serviceSlug: "security-strategy-coordination"
      },
      {
        title: "Emergency Response Planning",
        description: "Response procedures for each type of incident, coordinated with your local police and fire departments.",
        serviceSlug: "emergency-response-plans"
      },
      {
        title: "Threat & Vulnerability Assessment",
        description: "Site assessments with findings ranked by cost and risk, written to support grant and insurance applications.",
        serviceSlug: "threat-vulnerability-assessment"
      },
      {
        title: "Staff Training Programs",
        description: "Security awareness training for staff and volunteers, on site or remote.",
        serviceSlug: "staff-training"
      },
      {
        title: "Video Systems Review",
        description: "Whether your cameras cover the right places, record usable footage, and are ever watched.",
        serviceSlug: "video-systems-review"
      }
    ]
  },
  {
    slug: "rhode-island",
    answer: "We serve Rhode Island organizations statewide with security assessments, emergency planning, and training delivered on site. Reports are written to support NSGP applications administered by the Rhode Island Emergency Management Agency.",
    name: "Rhode Island",
    abbreviation: "RI",
    description: "We work with Rhode Island municipalities, nonprofits, schools, houses of worship, and community organizations statewide, on site.",
    localContext: "Rhode Island is small, and its municipal police, fire, and emergency management offices work closely with one another. We build plans around the people who will actually show up, and we write assessments to support NSGP applications administered by the Rhode Island Emergency Management Agency.",
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
        description: "What your town already provides, and what you still need to arrange yourself.",
        serviceSlug: "security-strategy-coordination"
      },
      {
        title: "Emergency Operations Planning",
        description: "How your organization keeps running, or gets running again, after an incident.",
        serviceSlug: "emergency-operations-plans"
      },
      {
        title: "Physical Security Review",
        description: "A walk-through of doors, locks, lighting, cameras, and alarms, with findings ranked by cost and risk.",
        serviceSlug: "physical-security-review"
      },
      {
        title: "Safety Response Team Training",
        description: "Training for volunteer and staff safety teams at schools, nonprofits, and community organizations.",
        serviceSlug: "safety-team-training"
      },
      {
        title: "Policy & Procedure Review",
        description: "A read of your policies, incident forms, and post orders against Rhode Island law and how your building actually runs.",
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
