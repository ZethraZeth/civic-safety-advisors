/** Single source of truth for entity facts. Keep these identical everywhere (site, GBP, LinkedIn, directories). */
export const SITE_URL = "https://www.civicsafetyadvisors.com";
export const SITE_NAME = "Civic Safety Advisors";
export const TAGLINE = "Protecting What Matters Most";
export const PHONE = "(203) 676-8193";
export const PHONE_E164 = "+12036768193";
export const EMAIL = "info@civicsafetyadvisors.com";
export const CITY = "Branford";
export const STATE = "CT";
export const SERVICE_STATES = ["Connecticut", "New York", "Massachusetts", "Rhode Island"];
/** Public (teaser) assessment start page, served on this domain and proxied to the assessment app. */
export const ASSESS_URL = "/assessment/start";
/** Where the assessment app actually runs; the proxy in next.config.mjs points here. */
export const ASSESS_ORIGIN = "https://assess.civicsafetyadvisors.com";
export const OG_IMAGE = "/og.jpg";

export const FOUNDER = {
  name: "Seth Hershman",
  title: "Founder and Principal Consultant",
  credentials: "Former Yale University Police detective and Connecticut DESPP policy advisor; M.S. in Investigations, University of New Haven",
  shortCredentials: "Former Yale Police detective, former CT DESPP policy advisor",
  image: "/assets/images/team/seth-hershman.jpg",
  linkedin: "https://www.linkedin.com/in/seth-hershman-08606045/",
};

export const DESCRIPTION =
  "Civic Safety Advisors is a security consulting firm in Branford, Connecticut. We assess risk, write emergency plans, and train staff for houses of worship, schools, property managers, nonprofits, and public organizations in Connecticut, New York, Massachusetts, and Rhode Island.";

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
