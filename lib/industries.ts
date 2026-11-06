export interface Industry {
  slug: string;
  title: string;
  description: string;
  /** Two-sentence direct answer shown first; written to be quoted by search and AI engines. */
  answer?: string;
  challenges: string[];
  keyServices: string[]; // service slugs
  image: string;
}

export const industries: Industry[] = [
  {
    slug: "houses-of-worship",
    answer: "Houses of worship need security that keeps the doors open and the greeting warm while giving a few trained people a plan for the rare bad day. We assess the building, train a volunteer safety team, write the response plan, and prepare the vulnerability assessment that federal and Connecticut security grants require.",
    title: "Houses of Worship",
    description:
      "Churches, synagogues, mosques, temples, and other faith communities face unique security challenges. Your doors are open to all, your congregations include vulnerable populations, and your mission is one of peace and welcome—not suspicion and barriers. We help houses of worship develop security programs that protect without compromising the welcoming atmosphere essential to your mission.",
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
  },
  {
    slug: "schools-education",
    answer: "Schools and colleges need security that works alongside learning: controlled entry, staff who know the plan, drills that do not frighten students, and coordination with local police. We review the building and the procedures together and produce a plan the administration can defend to parents and the board.",
    title: "Schools & Educational Institutions",
    description:
      "From elementary schools to universities, educational institutions must balance safety with an environment conducive to learning. Overly restrictive security measures can create anxiety; insufficient measures put students and staff at risk. We help schools develop comprehensive, age-appropriate security programs that protect without creating a fortress mentality.",
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
  },
  {
    slug: "nonprofits-public-organizations",
    answer: "Nonprofits, libraries, community centers, and social service agencies serve the public in open buildings with small staffs and tight budgets. We find the low-cost procedural fixes first, then help you make the case for grants and capital when hardware is warranted.",
    title: "Nonprofits & Public Organizations",
    description:
      "Community centers, libraries, social service agencies, and other public organizations serve diverse populations—often including vulnerable individuals. Your facilities may host public meetings, provide services to at-risk populations, and operate with limited budgets and staff. We help public organizations implement practical, cost-effective security measures that protect staff, clients, and facilities.",
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
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
