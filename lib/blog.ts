export type BlogCategory =
  | "houses-of-worship"
  | "schools-education"
  | "physical-security"
  | "emergency-preparedness"
  | "training-tips"
  | "industry-news";

export const categoryLabels: Record<BlogCategory, string> = {
  "houses-of-worship": "Houses of Worship",
  "schools-education": "Schools & Education",
  "physical-security": "Physical Security",
  "emergency-preparedness": "Emergency Preparedness",
  "training-tips": "Training Tips",
  "industry-news": "Industry News",
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** Two-sentence direct answer shown under the title. */
  summary?: string;
  updatedAt?: string; // ISO date, when materially revised
  content: string; // Full HTML content
  featuredImage: string;
  category: BlogCategory;
  publishedAt: string; // ISO date
  readTime?: number; // minutes
  /** Questions people search for; rendered at the end of the post and emitted as FAQPage schema. */
  faqs?: Array<{ question: string; answer: string }>;
}

export const recentPosts: BlogPost[] = [
  {
    slug: "workplace-violence-risk-assessment",
    title: "What a Workplace Violence Risk Assessment Covers (and What OSHA Expects)",
    summary: "A workplace violence risk assessment identifies where staff are exposed to aggression from the public, clients, residents, or coworkers, by site and by role, and produces a written prevention plan with controls ranked by cost. OSHA has no general workplace violence standard, but it enforces the General Duty Clause against employers who knew of a recognized hazard and did not address it, and Connecticut requires health care employers with 50 or more staff to assess annually and keep a plan.",
    excerpt:
      "What the assessment looks at, who needs one, what OSHA and Connecticut actually require, and what the finished document contains.",
    featuredImage: "/assets/images/blog/img-1.jpg",
    category: "emergency-preparedness",
    publishedAt: "2026-11-10",
    readTime: 9,
    faqs: [
      { question: "Does OSHA require a workplace violence risk assessment?", answer: "There is no general OSHA workplace violence standard. OSHA enforces the General Duty Clause (Section 5(a)(1)), which requires employers to keep the workplace free of recognized hazards likely to cause death or serious harm. Workplace violence counts as a recognized hazard when there is a history of incidents, industry data, or employee complaints, and OSHA has cited employers in health care, social services, and late-night retail on that basis. A documented assessment and plan is the main evidence that you addressed the hazard." },
      { question: "Who is required to have a workplace violence prevention plan in Connecticut?", answer: "Connecticut requires health care employers with 50 or more employees (hospitals, nursing homes, home health agencies, behavioral health and substance treatment facilities, community health centers, and DDS-licensed residential facilities) to run a workplace safety committee, assess workplace violence risk annually, keep a prevention and response plan, record incidents by location, and report assaults to police within 24 hours. Other Connecticut employers are covered only by OSHA's General Duty Clause and their own negligence exposure." },
      { question: "What are the four types of workplace violence?", answer: "Type 1: criminal intent, where the offender has no relationship to the business (robbery). Type 2: customer or client, where the offender is someone the organization serves (a patient, resident, parent, applicant). Type 3: worker on worker. Type 4: personal relationship, where the offender has a relationship with an employee and follows them to work. Most incidents in nonprofits, housing, schools, and health care are Type 2." },
      { question: "How much does a workplace violence risk assessment cost?", answer: "For a single-site organization under about 100 employees, a consultant-led assessment with a written program typically runs $2,500 to $7,500 depending on the number of roles and sites. Most of the controls it recommends are procedural and cost staff time rather than money." },
    ],
    content: `
      <p>Most security assessments look at the building. A workplace violence risk assessment looks at the people who work in it: who they deal with, where they are alone, what happens when someone gets aggressive, and what the organization does afterward. This is what one covers, who needs one, and what you end up with.</p>

      <h2>Who this applies to</h2>
      <p>Any organization whose staff deal with the public, clients, patients, residents, or applicants, especially where those people may be in distress, under the influence, or being told no. In our practice that means housing providers and property managers, social service nonprofits, clinics and behavioral health, schools, houses of worship with public-facing staff, and municipal offices. If your staff ever work alone, visit homes, handle cash, or deliver bad news, this applies to you.</p>

      <h2>What OSHA actually expects</h2>
      <p>OSHA does not have a general workplace violence standard. What it has is the General Duty Clause, Section 5(a)(1) of the OSH Act, which requires employers to provide a workplace free of recognized hazards that are causing or likely to cause death or serious physical harm. OSHA treats workplace violence as a recognized hazard when:</p>
      <ul>
        <li>The organization has had incidents or threats before</li>
        <li>The industry has a known pattern (health care, social services, late-night retail, residential care)</li>
        <li>Employees have raised it</li>
      </ul>
      <p>In a General Duty citation, OSHA has to show the hazard was recognized and that feasible means to reduce it existed and were not used. A written assessment, a plan, training records, and incident logs are how an employer shows it did address the hazard. OSHA's published guidance for health care and social service workers (OSHA 3148) is the closest thing to a checklist and is useful for any organization with similar exposures.</p>

      <h2>What Connecticut requires</h2>
      <p>Connecticut goes further than OSHA for health care. Under Connecticut General Statutes 19a-490q through 19a-490s, health care employers with 50 or more employees, including hospitals, nursing homes, home health and home health aide agencies, behavioral health and substance use facilities, community health centers, and DDS-licensed residential facilities, must:</p>
      <ul>
        <li>Run a workplace safety committee, at least half non-management, meeting at least quarterly</li>
        <li>Assess workplace violence risk factors every year</li>
        <li>Develop and implement a prevention and response plan with the committee</li>
        <li>Keep records of incidents, including where in the facility each occurred, and report counts to the Department of Public Health annually</li>
        <li>Report acts that may constitute assault against an employee to local police within 24 hours</li>
      </ul>
      <p>If you are a Connecticut nonprofit, housing provider, or school, none of that applies to you by statute. Your exposure is the General Duty Clause, your insurer's expectations, and ordinary negligence if an employee is hurt by a foreseeable hazard you did nothing about. The assessment is the same; the paperwork is lighter.</p>

      <h2>What the assessment covers</h2>
      <h3>1. Exposure by role</h3>
      <p>For each role, not each person: who they interact with, how often, where, and what the interaction is about. A leasing agent delivering an eviction notice, a case manager doing a home visit, a school office manager handling an angry parent, a clinic receptionist managing a waiting room. The goal is a short list of the situations most likely to go wrong.</p>
      <h3>2. Exposure by place</h3>
      <p>Front desks and waiting areas (layout, escape route, line of sight, barriers), interview and meeting rooms (second exit, who sits where), parking and entrances (lighting, after-hours), and field locations (homes, vehicles, community sites). Most physical findings are layout and procedure, not construction.</p>
      <h3>3. Lone work and after-hours</h3>
      <p>Who is alone, when, and whether anyone knows. Check-in procedures, duress signals, and what happens when a check-in is missed. This is the most common gap we find and the cheapest to close.</p>
      <h3>4. History</h3>
      <p>Incident reports, near misses, staff survey responses, and the things people tell us that were never written down. The gap between reported incidents and what staff describe is itself a finding.</p>
      <h3>5. Current controls</h3>
      <p>Existing policies, training, reporting forms, and what staff actually do versus what the policy says. Panic buttons that nobody has tested. Scripts that exist in a binder and nowhere else.</p>
      <h3>6. Post-incident process</h3>
      <p>How incidents are reported, who reviews them, what support the employee gets, when police are called, and how the person who caused it is handled afterward (trespass notices, service restrictions, safety plans for future contact).</p>

      <h2>What you get</h2>
      <ul>
        <li>A risk assessment document, by site and by role, that you can show OSHA, your insurer, and your board</li>
        <li>A written workplace violence prevention program: policy, reporting procedure, response procedures for the top situations, post-incident process</li>
        <li>A ranked action list: what costs only staff time (most of it), what costs under $500, what is a capital item</li>
        <li>Training priorities by role, with the scenarios each role should practice</li>
        <li>For Connecticut health care employers, the committee structure, annual assessment cycle, and recordkeeping the statute requires</li>
      </ul>

      <h2>Common findings</h2>
      <table>
        <thead><tr><th>Finding</th><th>Typical fix</th><th>Cost</th></tr></thead>
        <tbody>
          <tr><td>Staff have no script or signal for an aggressive visitor</td><td>One-page script, a code word, who to call</td><td>Staff time</td></tr>
          <tr><td>Lone workers with no check-in</td><td>Scheduled check-ins, a buddy or app, a missed-check-in procedure</td><td>Staff time to $200/yr</td></tr>
          <tr><td>Front desk layout traps the employee</td><td>Rearrange so the employee can leave; move the visitor chair</td><td>Staff time</td></tr>
          <tr><td>Incidents not reported or not reviewed</td><td>Simple form, monthly review, one owner</td><td>Staff time</td></tr>
          <tr><td>Panic button untested or unknown</td><td>Monthly test; everyone knows where it is</td><td>Staff time</td></tr>
          <tr><td>No process after an incident</td><td>Debrief, employee support, trespass or service decision, documentation</td><td>Staff time</td></tr>
          <tr><td>Interview rooms with one exit, visitor between staff and door</td><td>Reconfigure; add a second exit where feasible</td><td>$0 to several thousand</td></tr>
        </tbody>
      </table>

      <h2>Where to start</h2>
      <p>If you have never done this, the free <a href="/assessment">security self-assessment</a> includes the people and interactions area and will tell you how far behind you are in 20 minutes. If you want the full assessment and program, that is our <a href="/services/workplace-violence-employee-safety">workplace violence risk assessment</a> service. Either way, the first three fixes are almost always a script for staff, a check-in for lone workers, and a reporting form someone actually reads.</p>
    `,
  },
  {
    slug: "access-control-for-commercial-buildings",
    title: "Access Control for Commercial Buildings: What to Install First",
    summary: "Start access control with the things that cost nothing: one controlled entrance during business hours, a key and code register, and a visitor procedure. Then add electronic locks at the main entrance and the few interior doors that matter, and only then consider a full card or fob system. Most small commercial buildings get 80 percent of the benefit from the first two steps.",
    excerpt:
      "The order to add access control in a small or mid-size commercial building, what each layer costs, and the mistakes that waste money.",
    featuredImage: "/assets/images/blog/img-2.jpg",
    category: "physical-security",
    publishedAt: "2026-11-10",
    readTime: 8,
    faqs: [
      { question: "How much does an access control system cost for a small commercial building?", answer: "A single electronic door with a keypad or fob reader, installed, runs about $1,500 to $4,000. A networked system covering four to eight doors with managed credentials typically costs $8,000 to $25,000 installed, plus $300 to $1,500 a year for software and support. Rekeying to a restricted key system for the same building is usually $1,000 to $5,000." },
      { question: "What is the best access control for a small office building?", answer: "For most buildings under about 50 occupants, a restricted key system plus one or two electronic doors at the main entrance and the server or records room. Full card access makes sense when you have frequent staff turnover, many tenants, or need to know who entered where and when." },
      { question: "Should tenants have keys or fobs?", answer: "Fobs or cards for anything shared (main entrance, common areas), because they can be cancelled when someone leaves without rekeying. Keys are acceptable for individual suites if the building uses a restricted keyway that cannot be copied at a hardware store." },
    ],
    content: `
      <p>Access control is the part of building security that most owners and property managers overspend on first and underuse afterward. A card reader on the front door does nothing if the side door is propped and the cleaning crew has a master key from 2014. This is the order that works for small and mid-size commercial buildings, including offices, medical and professional suites, mixed-use, and multi-tenant properties.</p>

      <h2>Layer 0: What costs nothing</h2>
      <ol>
        <li><strong>One entrance during business hours.</strong> Every other exterior door locked from outside and alarmed or at least checked. Most buildings have three or four ways in and control one.</li>
        <li><strong>A key and code register.</strong> A single list of every key and code, who has it, and when it was issued. If you cannot produce this, you do not control access to the building, whatever hardware is on the doors.</li>
        <li><strong>A visitor procedure.</strong> Who signs in, who escorts, how deliveries and contractors are handled. Written, one page, followed.</li>
        <li><strong>Door checks.</strong> Someone walks the exterior doors at close. Propped doors and failed latches are the most common access failure we find and cost nothing to fix.</li>
      </ol>
      <p>Do these before buying anything. They also reduce the size of the system you need.</p>

      <h2>Layer 1: Fix the locks you have</h2>
      <table>
        <thead><tr><th>Item</th><th>What it does</th><th>Typical cost</th></tr></thead>
        <tbody>
          <tr><td>Rekey to a restricted keyway</td><td>Keys cannot be copied at a hardware store; you regain control of who has keys</td><td>$1,000–$5,000 for a small building</td></tr>
          <tr><td>Door closers and latch repair</td><td>Doors actually close and lock behind people</td><td>$150–$400 per door</td></tr>
          <tr><td>Exterior door alarms (local or monitored)</td><td>You know when a secondary door is opened</td><td>$100–$500 per door</td></tr>
          <tr><td>Lighting at entrances</td><td>Deterrence and camera image quality</td><td>$200–$1,500</td></tr>
        </tbody>
      </table>
      <p>A rekey plus working closers solves the problem for many buildings under 20,000 square feet. If staff and tenants rarely change, stop here.</p>

      <h2>Layer 2: Electronic locks where turnover is the problem</h2>
      <p>Electronic access earns its cost when people come and go: tenants, employees, contractors, cleaners. The value is cancelling a credential in seconds instead of rekeying. Start with the doors where that matters:</p>
      <ul>
        <li><strong>Main entrance</strong> (keypad or fob reader, scheduled unlock during business hours if you want it open)</li>
        <li><strong>After-hours tenant entrance</strong> if different</li>
        <li><strong>Server, records, or pharmacy room</strong>: whatever single room would hurt most</li>
        <li><strong>Mechanical and roof access</strong> if contractors need it</li>
      </ul>
      <p>Cost: roughly $1,500 to $4,000 per door installed for standalone or small cloud-managed systems. Four doors on a managed cloud system is a common first project at $8,000 to $15,000. Interior suite doors can usually stay on restricted keys.</p>

      <h2>Layer 3: Full card access and integration</h2>
      <p>A building-wide system with a reader on most doors, managed credentials, audit logs, and integration with video and alarms. Appropriate for larger buildings, high tenant turnover, regulated tenants (medical, financial), or when you need to prove who entered where. Expect $2,000 to $4,000 per door at scale, plus annual software. The most common mistake at this layer is buying the system before writing the rules: who gets access to what, who approves it, who removes it when someone leaves, and who reviews the logs. Without those, the audit trail is just storage.</p>

      <h2>Mistakes that waste money</h2>
      <ul>
        <li><strong>Readers on the front door, keys everywhere else.</strong> The system is only as good as the weakest door.</li>
        <li><strong>No one owns credentials.</strong> Six months in, former tenants and employees still have working fobs.</li>
        <li><strong>Proprietary systems.</strong> Some vendors lock you into their hardware and their service plan. Ask what happens if you want to switch.</li>
        <li><strong>Ignoring the fire code.</strong> Egress doors must open freely from inside; locked-in configurations need fire marshal sign-off and often fail inspection. Involve the fire marshal before installation, not after.</li>
        <li><strong>Buying for the incident you fear instead of the ones you have.</strong> Most commercial building incidents are theft by people who had legitimate access, tailgating, and propped doors. None of them are solved by a more expensive reader.</li>
      </ul>

      <h2>Rhode Island, Connecticut, New York, Massachusetts</h2>
      <p>None of the four states require a specific access control standard for ordinary commercial buildings. What applies is the fire and building code adopted in each state (all based on the International Building Code and NFPA 101 with state amendments), local fire marshal review of any locking hardware on egress doors, and, for specific tenants, their own regulations (HIPAA for medical, state cannabis rules, federal requirements for certain contractors). We work across all four states; the <a href="/locations">service area pages</a> cover what differs.</p>

      <h2>Where to start</h2>
      <p>Walk every exterior door this week and write down what you find. Then do the key register. If you want a written plan with costs for your building, our <a href="/services/building-access-control">building access control review</a> produces one, and the free <a href="/assessment">self-assessment</a> covers access, keys, and visitor procedures in its physical security section. Cameras are a separate decision; <a href="/blog/security-guards-vs-cameras">guards vs. cameras</a> explains where they fit.</p>
    `,
  },
  {
    slug: "security-guards-vs-cameras",
    title: "Security Guards vs. Cameras: Which One Does Your Building Actually Need?",
    summary: "Cameras record and, if someone is watching, alert; a guard deters, observes, and acts, but only while on post. For most small organizations the right order is doors and lighting first, then cameras for coverage you cannot staff, then a guard for the specific hours and situations where a person needs to be present.",
    excerpt:
      "What each one does, what each one costs over five years, and a decision table for houses of worship, schools, housing, and nonprofits.",
    featuredImage: "/assets/images/blog/img-4.jpg",
    category: "physical-security",
    publishedAt: "2026-11-10",
    readTime: 8,
    faqs: [
      { question: "Are security cameras cheaper than a security guard?", answer: "Over five years, almost always. A professionally installed 8-camera system with recording costs roughly $6,000 to $15,000 plus a few hundred dollars a year; one unarmed contract guard for 40 hours a week costs $60,000 to $85,000 a year in Connecticut. They do different jobs, though, so cheaper is not the same as sufficient." },
      { question: "Do security cameras deter crime?", answer: "Visible cameras reduce some property crime, especially in parking areas, and help identify people after the fact. They do little to stop a person who is already inside and acting aggressively, which is where a trained person matters." },
      { question: "Can cameras replace a security guard?", answer: "For after-hours coverage of an empty building, usually yes, especially paired with monitored alarms. For hours when people are present and an incident needs a response within minutes, no. Many organizations use cameras for the empty hours and a guard or trained staff for the occupied ones." },
    ],
    content: `
      <p>This is the most common question we get from boards and property managers, and it is usually the wrong question. Guards and cameras do different jobs. The useful question is: what do you need to happen, and when?</p>

      <h2>What each one actually does</h2>
      <table>
        <thead><tr><th></th><th>Cameras</th><th>Guard</th></tr></thead>
        <tbody>
          <tr><td>Deters</td><td>Some property crime, mostly outdoors</td><td>Most opportunistic behavior while on post</td></tr>
          <tr><td>Observes</td><td>Everything in frame, 24/7, if the system works</td><td>What is in front of them, during the shift</td></tr>
          <tr><td>Responds</td><td>Only if monitored, and only by calling someone</td><td>Immediately: approach, de-escalate, call 911, direct people</td></tr>
          <tr><td>Records</td><td>Yes; the main value after an incident</td><td>Written reports, if required and supervised</td></tr>
          <tr><td>Fails when</td><td>Nobody checks footage; blind spots; system not maintained</td><td>Off shift; distracted; untrained for the situation</td></tr>
        </tbody>
      </table>

      <h2>What each one costs over five years</h2>
      <table>
        <thead><tr><th>Option</th><th>Up front</th><th>Per year</th><th>Five-year total</th></tr></thead>
        <tbody>
          <tr><td>8 cameras, recorder, professional install</td><td>$6,000–$15,000</td><td>$300–$1,200 (cloud storage, service)</td><td>$8,000–$21,000</td></tr>
          <tr><td>Same, with 24/7 remote monitoring</td><td>$6,000–$15,000</td><td>$1,500–$6,000</td><td>$14,000–$45,000</td></tr>
          <tr><td>Unarmed contract guard, 40 hrs/week</td><td>$0</td><td>$60,000–$85,000</td><td>$300,000–$425,000</td></tr>
          <tr><td>Unarmed contract guard, Sundays only (5 hrs)</td><td>$0</td><td>$9,000–$14,000</td><td>$45,000–$70,000</td></tr>
        </tbody>
      </table>
      <p>Connecticut guard rates and what drives them are in <a href="/blog/hiring-security-guards">how to hire security guards</a>. Camera figures assume commercial-grade equipment, not consumer kits; the reasons are in <a href="/blog/before-you-buy-cameras-apartment-buildings">before you buy cameras</a>.</p>

      <h2>Decision table by situation</h2>
      <table>
        <thead><tr><th>Situation</th><th>Start with</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>Break-ins or vandalism after hours</td><td>Lighting, door hardware, monitored alarm, cameras</td><td>Nobody is there to protect; you need detection and evidence</td></tr>
          <tr><td>Unwanted visitors during services or school hours</td><td>Visitor procedure, trained greeters or staff, then a guard for peak hours</td><td>You need a person; cameras only record it</td></tr>
          <tr><td>Aggressive people at a front desk or leasing office</td><td>Desk layout, a script and a signal for staff, panic button; guard only if incidents are frequent</td><td>Most incidents are resolved by trained staff; a guard is expensive for a weekly event</td></tr>
          <tr><td>Parking lot incidents</td><td>Lighting and cameras; guard or patrol only for specific event times</td><td>Outdoor cameras deter and identify; coverage is large and mostly empty</td></tr>
          <tr><td>Insurance or grant requirement</td><td>Read the requirement; it usually names cameras, access control, or training, not guards</td><td>Matching the requirement is cheaper than guessing</td></tr>
          <tr><td>A specific threat or recent incident</td><td>Guard or off-duty officer for a defined period, plus the fixes above</td><td>A person is the only thing that responds in minutes</td></tr>
        </tbody>
      </table>

      <h2>The order that usually works</h2>
      <ol>
        <li><strong>Fix what is free or cheap first.</strong> Doors that latch, keys accounted for, lights that work, one visitor entrance, staff who know what to do. These reduce what either a guard or a camera has to handle.</li>
        <li><strong>Add cameras for the hours and places you cannot staff.</strong> Entrances, parking, and after-hours. Decide who checks footage and how often, or they are decoration.</li>
        <li><strong>Add a person for the hours when people are present and an incident would need a response in minutes.</strong> That can be a contract guard, an off-duty officer, or trained volunteers with a clear plan, depending on your risk and budget.</li>
      </ol>
      <p>If you skip to step 3, you pay the highest price for the narrowest coverage. Our free <a href="/assessment">security self-assessment</a> scores all three layers and tells you which one is weakest. If you decide a guard is the answer, read <a href="/blog/armed-vs-unarmed-security-guards">armed vs. unarmed</a> before you request quotes.</p>
    `,
  },
  {
    slug: "security-guard-contract-checklist",
    title: "Security Guard Contract Checklist: 12 Things to Get in Writing",
    summary: "A security guard contract should spell out the hours and posts covered, the post orders, the named supervisor, replacement for no-shows, insurance with you as additional insured, incident reporting deadlines, and a 30-day cancellation right. If any of these are missing, you are buying hours, not a service.",
    excerpt:
      "The twelve clauses to check before signing with a security company, with the wording to ask for and the terms to strike.",
    featuredImage: "/assets/images/blog/img-5.jpg",
    category: "training-tips",
    publishedAt: "2026-11-10",
    readTime: 7,
    faqs: [
      { question: "What should be in a security guard contract?", answer: "Scope (hours, posts, locations), post orders as an attachment, licensing and registration of every officer, insurance with your organization as additional insured, a named supervisor and visit frequency, a replacement guarantee for no-shows, a dedicated-officer clause if you want the same person, incident reporting within a set time, use-of-force policy, pricing for holidays and short-notice changes, a 30-day cancellation right, and no automatic renewal." },
      { question: "How long should a security guard contract be?", answer: "One year with a 30-day cancellation right is reasonable. Avoid multi-year terms and automatic renewals with 60- or 90-day notice periods; they exist to make leaving a bad provider difficult." },
      { question: "Should the security company name us as additional insured?", answer: "Yes. Ask for a certificate of insurance showing general liability of at least $1 million per occurrence and workers' compensation, with your organization listed as additional insured, and require notice if coverage lapses." },
    ],
    content: `
      <p>Most security contracts are written by the security company. They are not written to protect you. Before signing, check for these twelve items. Each one has cost a client money or coverage when it was missing.</p>

      <h2>1. Scope: hours, posts, and locations</h2>
      <p>Every shift, with start and end times, days of the week, and the physical post. "Security services at the property" is not scope. If you have multiple buildings or entrances, name them. Add how changes are requested and how much notice is required.</p>

      <h2>2. Post orders attached to the contract</h2>
      <p>Post orders are the written instructions for your site: where the officer stands, what they check, who they call, what they do in the five most likely situations. They should be an exhibit to the contract, reviewed by you, and updated when things change. A company that has no post orders for your site is sending a person to stand somewhere.</p>

      <h2>3. Licensing and registration of every officer</h2>
      <p>The company must hold a Connecticut security service license, and every officer it sends must hold a state Security Officer Identification Card and be registered under the company's license. Require the company to confirm this in writing for each assigned officer and to notify you before placing anyone new. Details on what the state requires are in <a href="/blog/hiring-security-guards">how to hire security guards</a>.</p>

      <h2>4. Insurance, with you as additional insured</h2>
      <p>General liability of at least $1 million per occurrence, workers' compensation, and, if officers drive on your property or in your vehicles, auto liability. Your organization named as additional insured. A certificate delivered before the first shift and on each renewal, with 30 days' notice of cancellation. If the company is armed, confirm the policy does not exclude firearms.</p>

      <h2>5. A named supervisor and visit frequency</h2>
      <p>The name and phone number of the supervisor responsible for your account, and how often they will visit the site unannounced. Weekly is reasonable for a new account; monthly once it is running. Supervision is what separates a security program from a staffing agency.</p>

      <h2>6. Replacement guarantee for no-shows</h2>
      <p>If the scheduled officer does not arrive, the company provides a replacement within a set time (one hour is common), and you are not billed for uncovered time. Add a credit for repeated failures. Without this clause, a no-show is your problem and you still get the invoice.</p>

      <h2>7. Dedicated officer, if you are paying for one</h2>
      <p>If you want the same person every shift, say so, name them once assigned, and set what happens if they leave the company. Expect to pay a little more. Many clients assume they are getting a dedicated officer and discover a rotation on the second week.</p>

      <h2>8. Incident reporting</h2>
      <p>Any incident reported to your named contact by phone immediately and in writing within 24 hours, on a form you have seen. Daily activity logs available on request. You own the reports. This matters for insurance claims, police follow-up, and knowing whether the post is doing anything.</p>

      <h2>9. Use-of-force and conduct policy</h2>
      <p>The company's written use-of-force policy as an exhibit, and a statement of what officers are instructed to do at your site: observe and report, ask people to leave, or physically intervene. Most houses of worship, schools, and nonprofits want observe-and-report with de-escalation, and a guard who improvises beyond that creates liability for both of you.</p>

      <h2>10. Pricing: holidays, overtime, and short-notice changes</h2>
      <p>The hourly rate, the holiday rate and which days count, the overtime rule, the minimum shift length (usually 4 hours), and the surcharge for changes with less than a set notice. Also whether the rate is locked for the term or can rise, and by how much.</p>

      <h2>11. Term, cancellation, and renewal</h2>
      <p>One year, cancellable by you with 30 days' notice for any reason, and immediately for cause (uncovered shifts, unlicensed officer, misconduct). Strike automatic renewal, or limit it to month-to-month after the first term. Strike any 60- or 90-day notice requirement.</p>

      <h2>12. Confidentiality and data</h2>
      <p>Officers will see your members, residents, students, and incidents. The contract should say that information about your organization and the people in it is confidential, that officers are instructed not to post about the site, and what happens to logs and video access when the contract ends.</p>

      <h2>What to do with this list</h2>
      <p>Send it to the company before they send a contract and ask them to address each item. The response tells you a lot. Companies that handle this routinely will have language ready; companies that push back on items 4, 6, and 11 are companies to avoid. If you want a second set of eyes on a contract before you sign, that is part of our <a href="/services/security-personnel-management">security personnel management</a> service, and the free <a href="/assessment">self-assessment</a> will tell you whether a guard is the right spend in the first place.</p>
    `,
  },
  {
    slug: "armed-vs-unarmed-security-guards",
    title: "Armed vs. Unarmed Security Guards: When Each Makes Sense",
    summary: "Unarmed guards are the right choice for most houses of worship, schools, housing, and nonprofits: they deter, observe, de-escalate, and call police, at lower cost and lower liability. Armed guards make sense when there is a specific, credible threat, when the site holds something worth a violent attempt, or when your insurer or a grant condition requires it, and only with the training and policies to match.",
    excerpt:
      "The real differences in cost, liability, licensing, and what each can do, plus the questions to answer before choosing armed security.",
    featuredImage: "/assets/images/blog/img-6.jpg",
    category: "physical-security",
    publishedAt: "2026-11-10",
    readTime: 7,
    faqs: [
      { question: "How much more does an armed security guard cost?", answer: "In Connecticut, roughly $12 to $25 more per hour for contract armed guards ($40 to $65 versus $28 to $40 unarmed), driven by higher pay, insurance, and training. For a 40-hour weekly post that is $25,000 to $50,000 more per year." },
      { question: "What does an armed guard need in Connecticut?", answer: "Be at least 21, hold a Connecticut pistol permit, hold the standard Security Officer Identification Card, and hold a separate armed endorsement (blue card) from DESPP, which requires an 8-hour firearms course and an annual refresher. The company must also carry insurance that covers armed services." },
      { question: "Should a church or synagogue have armed security?", answer: "Some do, usually after a specific threat or because of their risk profile. Before deciding, answer what the guard would be expected to do, whether your insurer covers it, whether the congregation supports it, and whether the basics (locked doors, a visitor process, trained greeters, an emergency plan) are already in place. An armed guard without those is an expensive single point of failure." },
    ],
    content: `
      <p>Armed security is the first thing many boards ask about after a news event and the last thing we usually recommend. Not because it is never right, but because it is a decision with costs and consequences that most organizations have not worked through. Here is how to work through it.</p>

      <h2>What an unarmed guard can do</h2>
      <ul>
        <li>Be a visible presence that changes behavior at the door and in the lot</li>
        <li>Control access: greet, check, direct, and turn people away</li>
        <li>De-escalate verbal confrontations and ask people to leave</li>
        <li>Call 911 and give police accurate information fast</li>
        <li>Run your emergency procedures: lockdown, evacuation, medical</li>
        <li>Observe and report, with a record you can use</li>
      </ul>
      <p>This covers almost every incident a house of worship, school, housing provider, or nonprofit actually experiences: disruptive visitors, trespassing, theft, domestic situations that spill into the building, and medical emergencies.</p>

      <h2>What an armed guard adds</h2>
      <p>One thing: the ability to respond with force to a person using or about to use deadly force, in the minutes before police arrive. That is a real capability and in some situations the only one that matters. It is also the only thing the firearm adds. It does not make the guard better at access control, de-escalation, or reporting, and in many settings it makes people less willing to approach the guard at all.</p>

      <h2>Side by side</h2>
      <table>
        <thead><tr><th></th><th>Unarmed</th><th>Armed</th></tr></thead>
        <tbody>
          <tr><td>Connecticut contract rate</td><td>$28–$40/hr</td><td>$40–$65/hr</td></tr>
          <tr><td>State requirements</td><td>Age 18+, 8-hour course, guard card</td><td>Age 21+, pistol permit, guard card, armed endorsement, 8-hour firearms course, annual refresher</td></tr>
          <tr><td>Liability</td><td>Ordinary negligence exposure</td><td>Adds exposure for any use of the weapon, including accidental</td></tr>
          <tr><td>Insurance</td><td>Standard general liability</td><td>Must be specifically covered; some carriers exclude or surcharge</td></tr>
          <tr><td>Effect on atmosphere</td><td>Mostly neutral or reassuring</td><td>Varies; some communities welcome it, others find it alienating</td></tr>
          <tr><td>Best for</td><td>Access control, deterrence, de-escalation, procedures</td><td>Defined deadly-force threat; high-value targets; required by insurer or grant</td></tr>
        </tbody>
      </table>

      <h2>Five questions to answer before going armed</h2>
      <ol>
        <li><strong>What specifically would the guard be expected to do with the weapon, and when?</strong> If the answer is "respond to an active shooter," ask how often the guard will be on post during your occupied hours, where they will be standing, and whether they can reach the point of entry in time. A guard at the wrong door is no guard.</li>
        <li><strong>Are the basics already in place?</strong> Locked and latching doors, one controlled entrance during occupied hours, a visitor procedure, trained greeters or staff, an emergency plan people have practiced. Armed security added on top of open doors and no plan is an expensive single point of failure.</li>
        <li><strong>Does your insurer know, and does the policy cover it?</strong> Ask in writing. Some carriers require notice; some exclude armed security entirely; some require the contractor's insurance to meet specific limits.</li>
        <li><strong>Does your community support it?</strong> Congregations, parents, and residents have strong views. A decision made by three board members and announced afterward creates its own problem.</li>
        <li><strong>Is an off-duty police officer the better version?</strong> For worship services and events, many Connecticut towns allow hiring off-duty officers. They are armed, fully trained, covered by the department's policies, and known to the responding officers. The hourly rate is higher but the hours are usually few.</li>
      </ol>

      <h2>When armed is the right call</h2>
      <ul>
        <li>A specific, credible threat against your organization, confirmed with police</li>
        <li>A site that holds something worth a violent attempt (cash, pharmaceuticals, high-profile people or events)</li>
        <li>An insurer, lender, or grant condition that requires it</li>
        <li>A risk profile, confirmed by a vulnerability assessment, where the deadly-force scenario is realistic and the response time from police is long</li>
      </ul>
      <p>If you are in one of these situations, hire for it properly: a company with a written armed-services policy, officers with current endorsements you have seen, and post orders that say exactly where the officer is and what they do. Our <a href="/blog/security-guard-contract-checklist">contract checklist</a> covers the clauses that matter more for armed posts, and <a href="/blog/hiring-security-guards">how to hire security guards</a> covers vetting the company.</p>

      <h2>If you are not sure</h2>
      <p>Start unarmed, fix the basics, and get a <a href="/services/threat-vulnerability-assessment">threat and vulnerability assessment</a> that tells you whether your actual risk justifies the step up. The free <a href="/assessment">self-assessment</a> is the 20-minute version of that question.</p>
    `,
  },
  {
    slug: "emergency-response-planning-connecticut-synagogues",
    summary: "Connecticut synagogues should build their emergency response plan with the local fire marshal, EMS, and police before an incident, not after. This guide covers who to contact, what to agree on in advance, and how to document it so the plan holds up in a drill and in a Nonprofit Security Grant application.",
    title: "Emergency Response Planning for Connecticut Synagogues: Coordinating with Fire, EMS, and Police",
    excerpt:
      "How Connecticut synagogue leaders can set up emergency coordination with local police, fire, and EMS, and what changes when NSGP-funded equipment is in the building.",
    featuredImage: "/assets/images/blog/emergency-response-ct-synagogue.jpg",
    category: "emergency-preparedness",
    publishedAt: "2025-01-24",
    readTime: 10,
    content: `
      <p>A synagogue wants to be open and welcoming. It also has to be ready for a medical crisis during Shabbat services, a fire alarm during Hebrew school, or a threat to the building, each of which brings several agencies through the door at once. Your emergency response plan has to fit with what the local fire department, EMS, and police will do when they arrive.</p>

      <p>That takes more than a written plan. It takes relationships with those agencies, an understanding of their protocols, and people in your building who know their roles when seconds count.</p>

      <h2>Why Multi-Agency Coordination Matters for Connecticut Synagogues</h2>
      <p>Connecticut synagogues sit in very different towns, from New Haven and Hartford to Bloomfield, Stamford, and West Hartford. Each has its own response times, protocols, and resources. Your plan has to reflect the town you are in.</p>

      <p>Consider these scenarios:</p>
      <ul>
        <li>A congregant collapses during Yom Kippur services. Do your ushers know whether to call 911 first or attempt CPR? Does EMS know which entrance provides fastest access?</li>
        <li>A fire alarm triggers during a youth group event with 60 children in the building. Have you practiced coordinated evacuation with fire department input on assembly points?</li>
        <li>Local police receive a threatening call about your facility. Do they have updated floor plans, key holder contacts, and protocols for coordinating with your security volunteers?</li>
      </ul>

      <p>None of this can be worked out during the incident. The relationships and the practice have to come first.</p>

      <h2>Start with Your Local Public Safety Network</h2>
      <p>Connecticut synagogues have access to resources that many never use:</p>

      <h3>Regional Security Coordination</h3>
      <p>Organizations like the Secure Community Network (SCN) work directly with Connecticut Jewish communities to build relationships between synagogues and law enforcement. Michael Shanbrom, a retired FBI supervisory special agent serving as SCN's Regional Security Advisor, has worked extensively with Connecticut communities to strengthen these connections.</p>

      <p>If you have not yet connected with SCN or a similar regional security initiative, that is your first call. They can introduce you to the right local contacts and brief you on regional threat assessments.</p>

      <h3>Your Local Police Department</h3>
      <p>Schedule a non-emergency meeting with your local police department's community liaison or patrol supervisor. You are not asking for armed patrols. You are giving them information they will need and getting their input:</p>
      <ul>
        <li><strong>Provide facility information:</strong> Floor plans, emergency contacts, access points, security camera locations</li>
        <li><strong>Discuss response protocols:</strong> Where should officers respond? Who meets them? What's the communication plan?</li>
        <li><strong>Request input on your security plan:</strong> Most departments will gladly review your emergency procedures</li>
        <li><strong>Establish key holder protocols:</strong> Who can provide access after hours? How do police reach them?</li>
      </ul>

      <p>In larger cities such as New Haven, Hartford, and Bridgeport, ask about specialized units (community policing, school resource officers, emergency management coordinators) that can consult with you on an ongoing basis.</p>

      <h2>Fire Department and EMS Coordination</h2>
      <p>Fire departments and EMS need specific information about your building before they respond to it:</p>

      <h3>Conduct a Pre-Emergency Visit</h3>
      <p>Invite your local fire department for a walkthrough during a non-emergency period. Focus on:</p>
      <ul>
        <li><strong>Building access:</strong> Which doors remain unlocked during services? Where are keys/lockboxes located?</li>
        <li><strong>Fire safety systems:</strong> Location of fire alarm panels, sprinkler shut-offs, fire extinguishers</li>
        <li><strong>Occupancy patterns:</strong> When is the building most occupied? Where do large groups gather?</li>
        <li><strong>Vulnerable populations:</strong> Hebrew school locations, elder care programs, mobility-challenged congregants</li>
        <li><strong>Utility shut-offs:</strong> Where are the main gas, electric, and water shut-offs?</li>
      </ul>

      <h3>Share Critical Medical Information</h3>
      <p>Work with your local EMS coordinator to establish:</p>
      <ul>
        <li><strong>Fastest access routes:</strong> Which entrance provides quickest route to sanctuary, social hall, classrooms?</li>
        <li><strong>AED locations:</strong> Where are automated external defibrillators located? Who's trained to use them?</li>
        <li><strong>Medical response team:</strong> Do you have volunteers with medical training? How do they coordinate with arriving EMS?</li>
        <li><strong>Evacuation considerations:</strong> How do you evacuate congregants with mobility limitations?</li>
      </ul>

      <h2>NSGP Grant Coordination Requirements</h2>
      <p>If your synagogue has received Nonprofit Security Grant Program (NSGP) funding, whether a federal NSGP-S grant or Connecticut's state-funded CT-NSGP grant, your plan has to cover the equipment it paid for:</p>

      <h3>Grant-Funded Security Integration</h3>
      <p>Many Connecticut synagogues have used NSGP funds for security cameras, access control systems, or fencing. Your emergency response plan must address:</p>
      <ul>
        <li><strong>Camera access:</strong> Can police access camera footage during emergencies? What's the protocol?</li>
        <li><strong>Access control coordination:</strong> If you have electronic access control, how do first responders override it in emergencies?</li>
        <li><strong>Panic button protocols:</strong> If NSGP funds included panic buttons, who monitors them? What happens when activated?</li>
      </ul>

      <h3>Documenting Grant Impact</h3>
      <p>NSGP reporting asks you to show how grant-funded improvements fit into your wider emergency preparedness. Documented coordination with local first responders is the kind of evidence reviewers look for, and it strengthens the next application.</p>

      <h2>Building Your Internal Emergency Response Team</h2>
      <p>Coordination with outside agencies only works if a trained internal team is there to meet them:</p>

      <h3>Designate Clear Roles</h3>
      <ul>
        <li><strong>Emergency Coordinator:</strong> Primary decision-maker, coordinates with arriving responders</li>
        <li><strong>First Responder Liaison:</strong> Meets police/fire/EMS at designated entrance, provides facility information</li>
        <li><strong>Medical Response Lead:</strong> Trained in first aid/CPR/AED, provides initial care until EMS arrives</li>
        <li><strong>Evacuation Coordinator:</strong> Manages safe evacuation, ensures vulnerable populations assisted</li>
        <li><strong>Communication Lead:</strong> Calls 911, relays information to team, manages internal communication</li>
        <li><strong>Children's Safety Coordinator:</strong> Ensures Hebrew school/youth group safety during emergencies</li>
      </ul>

      <h3>Train Together When Possible</h3>
      <p>Ask your local fire department if your emergency response team can participate in:</p>
      <ul>
        <li>Community CPR/AED training sessions</li>
        <li>Active threat response training (many CT police departments offer this)</li>
        <li>Fire safety and evacuation planning workshops</li>
      </ul>

      <p>Training alongside first responders builds the relationships and teaches your team how the professionals work.</p>

      <h2>Create Scenario-Specific Coordination Protocols</h2>
      <p>Your plan should address coordination for specific scenarios common to congregational settings:</p>

      <h3>Medical Emergency During Services</h3>
      <p><strong>Internal response:</strong></p>
      <ol>
        <li>Medical Response Lead assesses situation, begins first aid/CPR/AED if needed</li>
        <li>Communication Lead calls 911, provides specific facility information</li>
        <li>First Responder Liaison moves to designated entrance to meet EMS</li>
        <li>Emergency Coordinator clears path to patient, maintains calm among congregants</li>
      </ol>

      <p><strong>EMS coordination:</strong></p>
      <ul>
        <li>Liaison guides EMS directly to patient via fastest route</li>
        <li>Medical Response Lead provides patient status update, hands off care</li>
        <li>Team clears area, maintains privacy, manages congregational concerns</li>
      </ul>

      <h3>Fire Alarm Activation</h3>
      <p><strong>Internal response:</strong></p>
      <ol>
        <li>Evacuation Coordinator initiates evacuation procedures</li>
        <li>Children's Safety Coordinator ensures Hebrew school/youth groups evacuate with staff</li>
        <li>Team members sweep building, assist mobility-challenged congregants</li>
        <li>All personnel move to designated assembly point</li>
      </ol>

      <p><strong>Fire department coordination:</strong></p>
      <ul>
        <li>First Responder Liaison meets fire department, provides building status</li>
        <li>Emergency Coordinator reports any occupants unaccounted for</li>
        <li>Team maintains congregants at assembly point, prevents re-entry</li>
        <li>No re-entry until fire department gives all-clear</li>
      </ul>

      <h3>Security Threat</h3>
      <p><strong>Internal response:</strong></p>
      <ol>
        <li>Emergency Coordinator assesses threat level, initiates lockdown if appropriate</li>
        <li>Communication Lead calls 911, provides threat description</li>
        <li>Team secures congregants in locked rooms, away from windows/doors</li>
        <li>Security volunteers maintain situational awareness, communicate via radio/text</li>
      </ol>

      <p><strong>Police coordination:</strong></p>
      <ul>
        <li>First Responder Liaison (or designee in secure location) coordinates with arriving officers</li>
        <li>Emergency Coordinator provides real-time information on threat location, occupant locations</li>
        <li>Team follows police instructions, maintains lockdown until given all-clear</li>
        <li>No attempts to confront the threat; that is law enforcement's role</li>
      </ul>

      <h2>Communication Systems That Work Under Pressure</h2>
      <p>Multi-agency coordination requires reliable communication:</p>

      <h3>Internal Communication</h3>
      <ul>
        <li><strong>Two-way radios:</strong> Consider FRS/GMRS radios for immediate team communication</li>
        <li><strong>Group text systems:</strong> For non-emergency coordination, updates during incidents</li>
        <li><strong>PA system protocols:</strong> Clear, scripted announcements for evacuation/lockdown</li>
      </ul>

      <h3>External Communication</h3>
      <ul>
        <li><strong>Emergency contact sheet:</strong> Laminated cards with direct lines to local police, fire, EMS</li>
        <li><strong>Key holder list:</strong> Shared with local police, updated quarterly</li>
        <li><strong>After-hours protocols:</strong> How do responders reach emergency contacts outside business hours?</li>
      </ul>

      <h2>Document and Drill Your Coordination Plans</h2>
      <p>Write the plan down, then practice it with the agencies named in it.</p>

      <h3>Create Quick Reference Guides</h3>
      <p>Develop laminated one-page guides for each scenario:</p>
      <ul>
        <li>Who does what</li>
        <li>Who calls 911 (and what information to provide)</li>
        <li>Where first responders should be met</li>
        <li>Communication protocols</li>
      </ul>

      <p>Post these in strategic locations: security desk, office, kitchen, classrooms.</p>

      <h3>Conduct Joint Drills</h3>
      <p>At least annually, conduct coordinated drills:</p>
      <ul>
        <li><strong>Fire evacuation drill:</strong> Invite fire department to observe, provide feedback</li>
        <li><strong>Medical emergency tabletop:</strong> Walk through response with EMS coordination</li>
        <li><strong>Lockdown drill:</strong> Practice with police input on procedures</li>
      </ul>

      <p>Schedule drills at times that match real conditions: during Hebrew school, before Shabbat services, during board meetings.</p>

      <h2>Update and Maintain Your Coordination Network</h2>
      <p>Emergency response coordination requires ongoing maintenance:</p>

      <h3>Quarterly Reviews</h3>
      <ul>
        <li>Update emergency contact lists (staff changes, new key holders)</li>
        <li>Review and refresh team training</li>
        <li>Check emergency equipment (AED batteries, fire extinguisher inspections)</li>
        <li>Update facility information shared with responders (renovations, new access points)</li>
      </ul>

      <h3>Annual Meetings with First Responders</h3>
      <p>Schedule annual check-ins with local police, fire, and EMS to:</p>
      <ul>
        <li>Review updated facility plans</li>
        <li>Discuss any changes in departmental protocols</li>
        <li>Refresh relationships as personnel change</li>
        <li>Request feedback on your emergency preparedness</li>
      </ul>

      <h2>Regional Resources in Connecticut</h2>
      <p>Several organizations in Connecticut already do part of this work:</p>
      <ul>
        <li><strong>Jewish Federation Association of Connecticut:</strong> Coordinates security resources, grant applications, training opportunities</li>
        <li><strong>Secure Community Network:</strong> Provides direct security consultation, law enforcement liaison</li>
        <li><strong>CT Division of Emergency Management and Homeland Security:</strong> Offers resources for faith-based organizations</li>
        <li><strong>Local emergency management directors:</strong> Many municipalities have EMDs who provide consultation to nonprofits</li>
      </ul>

      <p>Do not build the plan alone. These organizations exist to help with it.</p>

      <h2>Common Coordination Mistakes to Avoid</h2>
      <ul>
        <li><strong>Assuming first responders know your facility:</strong> They do not, so you have to provide the information before they need it.</li>
        <li><strong>Creating plans without first responder input:</strong> They respond to buildings like yours for a living, so ask for their input before you finalize anything.</li>
        <li><strong>Failing to update contact information:</strong> Outdated contacts waste critical seconds in emergencies.</li>
        <li><strong>Not practicing coordination:</strong> Meeting responders for the first time during a crisis is too late.</li>
        <li><strong>Overlooking volunteer security teams:</strong> If you have security volunteers, first responders need to know who they are and how they'll interact.</li>
      </ul>

      <h2>Where to Start</h2>
      <p>Three steps you can take this month:</p>
      <ol>
        <li><strong>Schedule meetings with your local police and fire departments</strong> to share facility information and discuss emergency response protocols</li>
        <li><strong>Create or update your internal emergency response team</strong> with clearly defined roles for coordinating with first responders</li>
        <li><strong>Develop scenario-specific coordination plans</strong> starting with your most likely emergencies (medical, fire, security threat)</li>
      </ol>

      <h2>Professional Support for Connecticut Synagogues</h2>
      <p>Civic Safety Advisors helps Connecticut religious institutions write emergency response plans that fit with what their local first responders will do. We know the towns, the NSGP coordination requirements, and the particular needs of Jewish organizations.</p>

      <p>Our services include:</p>
      <ul>
        <li>Facilitating initial meetings with local police, fire, and EMS</li>
        <li>Writing emergency response plans with multi-agency coordination protocols</li>
        <li>Training your internal emergency response teams</li>
        <li>Conducting coordinated emergency drills with first responder participation</li>
        <li>Supporting NSGP grant applications and compliance</li>
      </ul>

      <p><a href="/contact">Contact us</a> to talk about your coordination plan. We serve synagogues throughout Connecticut, including New Haven, Hartford, Stamford, West Hartford, Bloomfield, and surrounding communities.</p>
    `,
  },
  {
    slug: "before-you-buy-cameras-apartment-buildings",
    summary: "Cameras rarely stop incidents at apartment buildings; they record them. Before buying, fix door hardware, lighting, key control, and staff procedures, then decide whether cameras are still the best use of the money.",
    title: "Before You Buy Cameras for Your Apartment Buildings",
    excerpt:
      "Cameras are usually the first thing a property manager buys after an incident and the last thing that would have prevented it. What to fix first at a 30-unit building, and when cameras actually earn their cost.",
    featuredImage: "/assets/images/blog/cameras-apartment-building.jpg",
    category: "physical-security",
    publishedAt: "2025-01-18",
    readTime: 7,
    content: `
      <p>Something happens at one of your buildings. A resident's guest threatens the site manager in the parking lot. A stranger is found sleeping in a stairwell. A maintenance tech opens a unit for a work order and walks into a situation nobody warned him about. The next week, somebody on the ownership side asks the question property managers hear more than any other: "Can we get cameras in there?"</p>

      <p>Sometimes the answer is yes, but usually it is "not yet." At a 20-, 30-, or 50-unit building, the things that most reduce risk to your staff and residents cost far less than a camera system and get done in a week instead of a quarter. This post walks through what to fix first, then what cameras are actually good for, so that if you do spend the money you spend it once.</p>

      <h2>What a camera does and does not do</h2>
      <p>A camera records, and that is the whole job. It does not stop a confrontation in progress, it does not make a propped door close, and unless someone is watching the feed and can dispatch a response, it does not shorten the time between an incident starting and help arriving. At most small and mid-size residential properties nobody is watching the feed. The footage gets pulled afterward, if the system was working, if the angle was right, and if anyone knew how to export it.</p>

      <p>That makes cameras an investigative tool and sometimes a deterrent. Both are real benefits, but neither is a substitute for the procedural controls below, which address the moment the incident is happening.</p>

      <h2>Fix these first</h2>

      <h3>1. Key and code control</h3>
      <p>Walk the building and answer three questions. Who has a key or code to the front door, the mechanical rooms, and the office? When was the last time any of those were changed? What happens when an employee leaves or a resident moves out? At most properties nobody can answer the first question with confidence, and the answer to the second is "when we bought the building." Re-keying and rotating codes costs a few hundred dollars. Not knowing who can get into your building is the single most common finding in a residential security review, and no camera fixes it.</p>

      <h3>2. Doors that actually close</h3>
      <p>Propped doors, broken closers, and latches that do not catch are how unauthorized people get into buildings. Residents prop doors for convenience, deliveries, or a guest who does not have a key. Fixing closers and latches is a maintenance ticket, not a capital project. If the same door keeps getting propped, the fix is usually a procedural one: a sign, a conversation at the next resident meeting, and a consequence in the lease that management actually applies.</p>

      <h3>3. Exterior lighting</h3>
      <p>A dark parking lot or entry is where staff feel most exposed and where the incidents in your logs tend to cluster. Lighting is cheaper than cameras, works whether or not anyone is watching, and improves the footage if you add cameras later. Walk the property after dark with the site manager, note every spot where you would not want to be alone, and fix those spots first.</p>

      <h3>4. A rule for who goes into occupied units, and when</h3>
      <p>Maintenance staff enter occupied units every day, and most companies have no written rule about it. The rule should cover notice to the resident, what to do if the resident is not home and someone else answers, what to do if there are signs of a weapon, drugs, a hoarding condition, or a person in distress, and when a tech should leave and call for backup rather than finish the ticket. This is a page, not a manual, and it protects your people as much as it protects you.</p>

      <h3>5. A lone-worker check-in</h3>
      <p>At small buildings there is often one site manager, and at smaller ones a manager who covers several buildings on a rotation. If that person is confronted in the office or the lot, who knows? A simple check-in rule, a text to a supervisor at set times or when starting a lease enforcement conversation, costs nothing and tells you within the hour if something is wrong. Phone apps that do this automatically exist and are inexpensive, but the rule matters more than the tool.</p>

      <h3>6. A single incident reporting process</h3>
      <p>Ask your site managers how they report an incident. If the answers differ by building, you do not have a process. Pick one form, one definition of what counts as an incident, one threshold for calling the regional manager the same day, and one place the reports go. The point is not the paperwork but that a pattern at one building becomes visible to the people who can do something about it. Most companies discover they had five incidents involving the same resident only after the sixth one makes the news.</p>

      <h3>7. Office layout</h3>
      <p>Look at the leasing or management office from the point of view of a staff member alone with an angry visitor. Is there a second way out? Is the desk between the employee and the door, or between the employee and the wall? Can the office door be locked from inside quickly? Rearranging the furniture costs nothing, and while a second exit is sometimes a construction project, knowing you do not have one changes how you staff the office and when you schedule difficult conversations.</p>

      <h2>When cameras do earn their cost</h2>
      <p>After the items above are handled, cameras make sense in specific cases:</p>
      <ul>
        <li><strong>A recurring problem at a specific location.</strong> Repeated vandalism in one stairwell, dumping behind one building, or break-ins to one storage area. A camera on that spot, with a sign, usually ends it or identifies who is doing it.</li>
        <li><strong>Entry points, for after-the-fact identification.</strong> A camera on the front door and the parking lot entrance gives you a record of who came and went. That matters for a police report, an eviction case, or an insurance claim.</li>
        <li><strong>Disputes you expect to end up in front of a judge or an adjuster.</strong> A camera in the leasing office lobby or at the management office door protects staff from false accusations as much as it protects residents.</li>
        <li><strong>Properties where someone will actually watch.</strong> If you have a central office or a contracted monitoring service that will respond to what it sees, cameras become part of a response, not just a record.</li>
      </ul>

      <p>Before you sign, decide who is responsible for making sure the system is recording, who can export footage and how long it is kept, and what the policy is on sharing footage with residents and police. A system nobody maintains is worse than none, because people assume it works.</p>

      <h2>What this looks like at a real building</h2>
      <p>A 32-unit building with one part-time site manager. After a parking lot confrontation, ownership asked for a quote on cameras: eight exterior cameras, a recorder, installation, and a maintenance contract. Before spending that, the fixes that addressed the actual incident were: new exterior lighting on the lot, a written rule that guest parking enforcement happens in daylight with a second person or not at all, a check-in text to the regional manager before any enforcement conversation, and one incident form used across every building the company manages. Total cost was a fraction of the camera quote. Cameras went on the lot entrance later, for identification, once the lighting made the footage usable.</p>

      <h2>For nonprofit and affordable housing owners</h2>
      <p>Everything above applies with more force if you are a nonprofit housing provider or you manage affordable units. Budgets are tighter, buildings are often older, and your staff work with residents who may be in crisis more often than at a market-rate property. The procedural fixes are the ones you can afford, and they are the ones a funder, an insurance carrier, or a board will want to see documented. Cameras are a line item, while a written lone-worker policy and a working incident reporting process are a program a funder can recognize.</p>

      <h2>Where to start</h2>
      <p>Walk one building with the site manager and the list above, and write down what you find. If most of the seven items are already handled, you are in good shape and a camera conversation is reasonable. If they are not, you have your next month's work, and it will cost less than the camera quote on your desk.</p>

      <p>If you would rather have an outside set of eyes on it, <a href="/contact">contact us</a>. We assess employee safety and property security across a portfolio and tell you what to fix first, and what not to buy.</p>
    `,
  },
  {
    slug: "5-security-priorities-houses-of-worship",
    summary: "The five things every house of worship should settle first are a named security lead, a working relationship with local police, controlled doors during services, a greeter team that knows what to watch for, and a response plan people have practiced. None of them requires buying equipment.",
    title: "5 Security Priorities Every House of Worship Should Address",
    excerpt:
      "A practical starting point: the five areas that most often drive risk and quick wins.",
    featuredImage: "/assets/images/blog/img-2.jpg",
    category: "houses-of-worship",
    publishedAt: "2025-01-15",
    readTime: 6,
    content: `
      <p>You want the doors open and the congregation safe, and it is not obvious where to start.</p>

      <p>After dozens of assessments at churches, synagogues, mosques, and temples, these are the five areas where practical steps most consistently improve security.</p>

      <h2>1. Access Control and Visitor Management</h2>
      <p>Your facility likely has multiple entry points. Do you know who's entering your building during services and events?</p>

      <p><strong>Quick wins:</strong></p>
      <ul>
        <li>Designate one main entrance during services</li>
        <li>Position greeters at all open entrances</li>
        <li>Create a simple visitor check-in process</li>
        <li>Install signage directing visitors to the main entrance</li>
      </ul>

      <p>The goal is awareness, not barriers. Greeters do two jobs: hospitality and watching the room.</p>

      <h2>2. Children's Ministry Protection</h2>
      <p>Children's areas need particular attention, because parents are trusting you with their kids.</p>

      <p><strong>Essential steps:</strong></p>
      <ul>
        <li>Implement check-in/check-out procedures with matching tags</li>
        <li>Establish a two-adult rule (never one adult alone with children)</li>
        <li>Install windows or half-doors for visibility into classrooms</li>
        <li>Create clear volunteer screening procedures</li>
        <li>Designate separate restrooms or escort policies for children</li>
      </ul>

      <h2>3. Emergency Response Planning</h2>
      <p>Does your staff know what to do if a medical emergency occurs during services, if a fire breaks out, or if someone threatens the building?</p>

      <p><strong>Start here:</strong></p>
      <ul>
        <li>Create simple response procedures for common scenarios (medical emergency, fire, suspicious person, severe weather)</li>
        <li>Establish clear communication methods (radios, group text, hand signals)</li>
        <li>Identify and train key response team members</li>
        <li>Know where your AED is and who's trained to use it</li>
        <li>Schedule at least one walkthrough drill per year</li>
      </ul>

      <h2>4. Building Security Assessment</h2>
      <p>Walk your building with fresh eyes, or better, have someone else walk it.</p>

      <p><strong>Look for:</strong></p>
      <ul>
        <li>Unlocked or propped doors that should be secured</li>
        <li>Dark areas around the building perimeter</li>
        <li>Broken locks or doors that don't close properly</li>
        <li>Key control issues (too many people with keys, keys not tracked)</li>
        <li>Blind spots where someone could hide</li>
      </ul>

      <p>Many security vulnerabilities can be fixed with basic maintenance, better lighting, or simple procedural changes.</p>

      <h2>5. Safety Team Development</h2>
      <p>You do not need armed guards so much as aware people who know what to do.</p>

      <p><strong>Build a basic safety team:</strong></p>
      <ul>
        <li>Recruit 4-6 volunteers willing to be trained</li>
        <li>Define clear roles (medical response, building security, communication, children's protection)</li>
        <li>Provide basic training (first aid, situational awareness, de-escalation)</li>
        <li>Meet quarterly to review procedures and scenarios</li>
        <li>Make them visible but not intimidating</li>
      </ul>

      <h2>Where to Begin?</h2>
      <p>Start with children's ministry and emergency response planning. Both pay off right away and usually cost nothing beyond clear procedures and training.</p>

      <p>Then move to access control and building security. Finally, formalize a safety team to maintain and improve your security program over time.</p>

      <p>None of this requires a fortress. Awareness, a plan, and practice do most of the work, and your congregation should feel safer, not scared.</p>

      <h2>Need Help Getting Started?</h2>
      <p>We help houses of worship build security programs that fit the way they worship. <a href="/contact">Contact us</a> for a free consultation.</p>
    `,
  },
  {
    slug: "hiring-security-guards",
    title: "How to Hire Security Guards: What to Look For (and What It Costs)",
    summary: "To hire security guards, first write down what the guard is there to do, then choose between a licensed contract company and a direct hire, verify Connecticut licensing and insurance, and put post orders and reporting in a written agreement. Expect to pay roughly $28 to $40 per hour for an unarmed contract guard in Connecticut and $40 to $65 for armed.",
    excerpt:
      "A checklist for hiring security guards: what to decide first, what to verify, what it costs in Connecticut, and the questions that separate a good company from a bad one.",
    featuredImage: "/assets/images/blog/img-3.jpg",
    category: "training-tips",
    publishedAt: "2025-01-10",
    updatedAt: "2026-11-10",
    readTime: 11,
    faqs: [
      { question: "What should I look for when hiring a security company?", answer: "A current Connecticut security service license, every assigned guard registered with the state, general liability and workers' compensation insurance with you named as additional insured, written post orders for your site, a named supervisor, a replacement guarantee for no-shows, and references from clients similar to you. If the company cannot produce the license number and insurance certificate the same day, move on." },
      { question: "How much do security guards cost in Connecticut?", answer: "Contract unarmed guards in Connecticut generally bill between $28 and $40 per hour; armed guards between $40 and $65. A single unarmed guard for 40 hours a week costs roughly $5,000 to $7,000 a month. Direct-hire wages run about $18 to $24 per hour before payroll taxes, insurance, and training." },
      { question: "Do I need a security guard or cameras?", answer: "They do different jobs. Guards deter, observe, and respond while they are on post; cameras record and, if monitored, alert. Most small organizations get more from fixing doors, lighting, and procedures first, then adding a guard for the specific hours and situations where a person is needed." },
      { question: "Does a security guard need a license in Connecticut?", answer: "Yes. Every security officer must hold a Security Officer Identification Card from the Department of Emergency Services and Public Protection, which requires an approved 8-hour course, fingerprinting, and a background check. Armed officers must be 21 or older and hold a separate armed endorsement on top of a pistol permit. Companies must register each officer with the state." },
      { question: "Should I hire a security company or employ a guard directly?", answer: "Hire a company if you need coverage quickly, want someone else to handle licensing, scheduling, and replacements, or need fewer than about 60 hours a week. Employ directly if the guard is a permanent part of daily operations, you want control over who is on post, and you have the HR capacity to manage licensing, training, and liability yourself." },
    ],
    content: `
      <p>We do not sell guard services, so this is written from the side of the table that pays for them. It covers what to decide before you call anyone, how to tell a good company from a bad one, what guards cost in Connecticut, and what the state requires. If you are a house of worship, school, housing provider, or nonprofit, this is the process we walk clients through.</p>

      <h2>Step 1: Decide what the guard is for</h2>
      <p>Most bad guard contracts start with a vague goal ("we want someone at the door"). Before you request a quote, write one paragraph that answers:</p>
      <ol>
        <li><strong>What problem are you solving?</strong> Unwanted visitors during services, after-hours break-ins, aggressive people at the front desk, parking lot incidents, or a one-time event.</li>
        <li><strong>When does it happen?</strong> Specific days and hours. A guard for Sunday 8 a.m. to 1 p.m. costs a fraction of a guard for 24/7 coverage.</li>
        <li><strong>What do you want the guard to do when it happens?</strong> Observe and call 911, ask someone to leave, physically intervene, or something else. This decides armed vs. unarmed, training, and insurance.</li>
        <li><strong>Who does the guard report to on site?</strong> One named person, available during every shift.</li>
      </ol>
      <p>That paragraph becomes the first page of your post orders and the basis for every quote. Companies that quote without asking these questions are quoting hours, not a service.</p>

      <h2>Step 2: Contract company or direct hire?</h2>
      <table>
        <thead><tr><th></th><th>Contract security company</th><th>Direct hire</th></tr></thead>
        <tbody>
          <tr><td>Best for</td><td>Under 60 hours a week, event coverage, getting started</td><td>Permanent daily post, strong need for continuity</td></tr>
          <tr><td>Licensing, insurance, payroll</td><td>Handled by the company</td><td>You handle all of it</td></tr>
          <tr><td>Control over who is on post</td><td>Limited; ask for a dedicated assignment in the contract</td><td>Full</td></tr>
          <tr><td>No-shows</td><td>Company must replace (get it in writing)</td><td>Your problem</td></tr>
          <tr><td>Liability for guard conduct</td><td>Shared; the company's insurance responds first</td><td>Yours</td></tr>
          <tr><td>Typical cost in Connecticut</td><td>$28–$40/hr unarmed, $40–$65/hr armed</td><td>$18–$24/hr wage plus about 25–30% for taxes, insurance, and training</td></tr>
        </tbody>
      </table>
      <p>Most organizations should start with a contract company. Once you know the post works and what you need, direct hire becomes a reasonable second step.</p>

      <h2>Step 3: What security guards cost in Connecticut</h2>
      <p>These are planning ranges, not quotes. They are based on Bureau of Labor Statistics wage data for Connecticut metro areas (median security guard pay in the New Haven area was about $45,000 a year in the May 2025 data, roughly $21 an hour) and the 50 to 70 percent markup contract companies typically add for insurance, supervision, and overhead.</p>
      <table>
        <thead><tr><th>Arrangement</th><th>Hourly</th><th>Monthly, one post 40 hrs/week</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Contract, unarmed</td><td>$28–$40</td><td>$5,000–$7,000</td><td>Most common for worship, schools, nonprofits</td></tr>
          <tr><td>Contract, armed</td><td>$40–$65</td><td>$7,000–$11,500</td><td>Requires state armed endorsement; higher insurance</td></tr>
          <tr><td>Contract, event or short-notice</td><td>$35–$55</td><td>n/a</td><td>Usually a 4-hour minimum per shift</td></tr>
          <tr><td>Direct hire, unarmed</td><td>$18–$24 wage, $23–$31 loaded</td><td>$4,000–$5,500</td><td>Add licensing, uniforms, training time, and backup coverage</td></tr>
          <tr><td>Off-duty police officer</td><td>$60–$110</td><td>n/a</td><td>Arranged through the department; rates set by the town or union contract</td></tr>
        </tbody>
      </table>
      <p>Two things move the price more than anything else: hours per week (a guard company will discount a 40-hour post and charge a premium for a 4-hour Sunday shift) and whether you want the same person every time. Ask for both prices.</p>

      <h2>Step 4: Connecticut licensing, and how to verify it</h2>
      <p>Connecticut regulates both the company and the individual guard through the Special Licensing and Firearms Unit of the Department of Emergency Services and Public Protection (DESPP).</p>
      <ul>
        <li><strong>The company</strong> must hold a Connecticut security service license. Ask for the license number and confirm it with DESPP.</li>
        <li><strong>Each guard</strong> must hold a Security Officer Identification Card (often called the guard card). Getting it requires being at least 18, completing a state-approved 8-hour security officer course, fingerprinting, and a background check. The card is valid for five years. Felony convictions and certain other offenses are disqualifying.</li>
        <li><strong>Armed guards</strong> must be at least 21, hold a Connecticut pistol permit, and hold a separate armed endorsement (the blue card), which requires an 8-hour firearms course and an annual refresher.</li>
        <li><strong>The company must register</strong> every officer it places with the state and report departures within five business days. A company that lets unregistered officers work can lose its license.</li>
      </ul>
      <p>What this means for you: ask to see the guard card for every person assigned to your site, and ask the company to confirm in writing that each is registered under its license. A company that hesitates is telling you something. New York, Massachusetts, and Rhode Island have their own systems; if you are outside Connecticut, ask us or check your state's licensing agency.</p>

      <h2>Step 5: Vetting the company</h2>
      <p>Ask every company the same questions and write down the answers.</p>
      <h3>Documents to request</h3>
      <ul>
        <li>State security service license number</li>
        <li>Certificate of insurance showing general liability (ask for at least $1 million per occurrence) and workers' compensation, with your organization named as additional insured</li>
        <li>Sample post orders from a similar client</li>
        <li>Three references from clients similar to you, not their largest accounts</li>
        <li>Their training program for new officers and for your site specifically</li>
      </ul>
      <h3>Questions that matter</h3>
      <ul>
        <li>"Who is the supervisor for our site, and how often will they visit?"</li>
        <li>"What happens if the assigned guard does not show up?"</li>
        <li>"Will we have the same officer each shift? What does that cost?"</li>
        <li>"What is your use-of-force policy, and what are your officers told to do if someone refuses to leave?"</li>
        <li>"How do your officers report incidents to us, and how fast?"</li>
        <li>"What is your turnover rate?" (Anything above about 100% a year means a new face every few months.)</li>
      </ul>
      <h3>Red flags</h3>
      <ul>
        <li>Cannot produce license and insurance the same day</li>
        <li>Quotes before visiting your site</li>
        <li>Pushes armed guards without asking what you need them for</li>
        <li>No written post orders, or post orders that are not specific to your building</li>
        <li>Contract with automatic renewal and a long cancellation notice (90 days or more)</li>
        <li>Officers on their other sites look disengaged: on phones, seated, not in uniform</li>
      </ul>

      <h2>Step 6: Interviewing the people, not just the company</h2>
      <p>If you are hiring directly, or if the company will let you meet the assigned officer (ask), use scenario questions rather than generic ones. Listen for de-escalation, calling for help early, and following procedure over improvising.</p>
      <ul>
        <li>"A parent arrives late to pick up a child and gets angry when you ask who they are. What do you do?"</li>
        <li>"Someone is photographing children during a service. What are your first three actions?"</li>
        <li>"A regular attender is behaving erratically and making people uncomfortable. Walk me through your response."</li>
        <li>"How do you balance security with keeping this a welcoming place?"</li>
      </ul>
      <p>Walk away from anyone who talks mostly about weapons and force, dismisses your mission, or resists reporting to civilian leadership.</p>

      <h2>Step 7: Put it in writing</h2>
      <p>The agreement should include, at minimum: the hours and locations covered; the post orders as an attachment; the named supervisor; the replacement guarantee; insurance requirements; incident reporting within a set time; a dedicated-officer clause if you are paying for one; pricing for holidays and short-notice changes; and a 30-day cancellation right. Our <a href="/blog/security-guard-contract-checklist">security guard contract checklist</a> covers each of these.</p>

      <h2>The first 90 days</h2>
      <ul>
        <li>Walk the building with the officer and the supervisor on day one.</li>
        <li>Give the officer a one-page sheet: who to call, where the keys are, what to do in the five most likely situations.</li>
        <li>Check in weekly for the first month; then monthly.</li>
        <li>Ask staff and attendees how it is going. If the officer is invisible or unapproachable, fix it early.</li>
        <li>Review incident reports. If there are none after three months, either nothing is happening or nothing is being reported. Find out which.</li>
      </ul>

      <h2>Before you hire anyone</h2>
      <p>A guard is the most expensive line in most small organizations' security budgets, and often not the first thing that needs fixing. Doors that do not latch, poor lighting, no visitor procedure, and staff who do not know what to do in an incident are cheaper problems to solve and reduce what the guard has to handle. Our free <a href="/assessment">security self-assessment</a> takes 20 minutes and tells you where you stand across eight areas, including whether a guard is the right next step. Related reading: <a href="/blog/security-guards-vs-cameras">security guards vs. cameras</a> and <a href="/blog/armed-vs-unarmed-security-guards">armed vs. unarmed guards</a>.</p>
    `,
  },
  {
    slug: "emergency-response-plan-where-to-start",
    summary: "Start an emergency response plan by listing the five incidents most likely at your site and deciding who does what in the first ten minutes of each. Write that down, walk it with staff, and expand from there.",
    title: "Creating an Emergency Response Plan: Where to Start",
    excerpt:
      "A step-by-step approach for organizations that need a plan but don't know how to begin.",
    featuredImage: "/assets/images/blog/img-1.jpg",
    category: "emergency-preparedness",
    publishedAt: "2025-01-05",
    readTime: 7,
    content: `
      <p>Everyone says you need an emergency response plan, but when you sit down to create one, where do you actually start?</p>

      <p>Here is how to build one, in order, without getting buried.</p>

      <h2>Step 1: Identify Your Most Likely Scenarios</h2>
      <p>Don't try to plan for everything at once. Start with the most likely emergencies for your organization and location:</p>

      <h3>Common to Most Organizations:</h3>
      <ul>
        <li>Medical emergency (heart attack, fall, allergic reaction)</li>
        <li>Fire</li>
        <li>Severe weather (tornado, hurricane, etc., based on your region)</li>
        <li>Utility failure (power outage, gas leak)</li>
        <li>Suspicious person or threatening behavior</li>
      </ul>

      <h3>Consider Your Specific Context:</h3>
      <ul>
        <li>Are you in a flood zone?</li>
        <li>Do you have large gatherings?</li>
        <li>Do you serve vulnerable populations?</li>
        <li>Are there specific threats you've experienced or been warned about?</li>
      </ul>

      <p>Pick three to five scenarios to start, and add more later.</p>

      <h2>Step 2: Define Clear Response Procedures</h2>
      <p>For each scenario, document WHO does WHAT in simple, clear language.</p>

      <h3>Example: Medical Emergency During Service</h3>
      <ul>
        <li><strong>Anyone who witnesses:</strong> Immediately notify safety team member or staff (how: hand signal, radio, etc.)</li>
        <li><strong>Safety team member:</strong> Assess situation, call 911 if needed, retrieve AED/first aid kit, provide care</li>
        <li><strong>Designated staff person:</strong> Meet emergency responders at entrance, guide them to location</li>
        <li><strong>Minister/leader:</strong> Continue service if possible, maintain calm</li>
        <li><strong>After incident:</strong> Document what happened, follow up with family, debrief team</li>
      </ul>

      <p>Specific roles, specific actions, specific ways to communicate.</p>

      <h2>Step 3: Establish Communication Protocols</h2>
      <p>In an emergency, how do people communicate? Figure this out now, not during a crisis.</p>

      <h3>Internal Communication:</h3>
      <ul>
        <li>How do you alert your safety team? (radios, group text, hand signals)</li>
        <li>How do you communicate with people in different parts of the building?</li>
        <li>Who has authority to make emergency decisions?</li>
        <li>How do you notify everyone of an evacuation or lockdown?</li>
      </ul>

      <h3>External Communication:</h3>
      <ul>
        <li>Who calls 911? (Designate primary and backup)</li>
        <li>Who speaks to media if they arrive?</li>
        <li>How do you notify families of those affected?</li>
        <li>What's your social media policy during emergencies?</li>
      </ul>

      <h2>Step 4: Assign Roles and Responsibilities</h2>
      <p>Great plans fail because no one knows it's their job to execute them.</p>

      <h3>Create a Basic Response Team:</h3>
      <ul>
        <li><strong>Team Lead:</strong> Makes decisions, coordinates response</li>
        <li><strong>Medical Response:</strong> Handles medical emergencies (first aid/CPR trained)</li>
        <li><strong>Building Security:</strong> Secures access points, manages evacuation/lockdown</li>
        <li><strong>Communication:</strong> Calls 911, relays information to team</li>
        <li><strong>Children/Vulnerable Populations:</strong> Ensures safety of children and those who need assistance</li>
      </ul>

      <p>For smaller organizations, people can wear multiple hats. Just make sure everyone knows their role.</p>

      <h2>Step 5: Map Your Facility</h2>
      <p>Create or update floor plans showing:</p>

      <ul>
        <li>All exits</li>
        <li>Emergency equipment locations (AED, fire extinguishers, first aid kits, shut-off valves)</li>
        <li>Assembly points for evacuations</li>
        <li>Shelter locations for severe weather</li>
        <li>Lockdown rooms if applicable</li>
      </ul>

      <p>Post these maps in visible locations. Give copies to emergency responders (police, fire) during non-emergency visits.</p>

      <h2>Step 6: Build Your Emergency Kit</h2>
      <p>Have basic supplies readily accessible:</p>

      <h3>Medical:</h3>
      <ul>
        <li>First aid kit</li>
        <li>AED (if you don't have one, budget for one)</li>
        <li>Emergency medications for known conditions (if applicable)</li>
      </ul>

      <h3>Communication:</h3>
      <ul>
        <li>Two-way radios or backup phones</li>
        <li>Emergency contact list (key staff, local police/fire, utility companies)</li>
      </ul>

      <h3>Supplies:</h3>
      <ul>
        <li>Flashlights and batteries</li>
        <li>Water</li>
        <li>Emergency blankets</li>
      </ul>

      <h2>Step 7: Train Your People</h2>
      <p>What saves lives in the moment is not the plan on paper but the people who have trained on it.</p>

      <h3>Essential Training:</h3>
      <ul>
        <li><strong>All staff and volunteers:</strong> Basic awareness of procedures, how to report emergencies</li>
        <li><strong>Response team:</strong> Detailed training on their specific roles</li>
        <li><strong>Medical responders:</strong> First aid/CPR/AED certification (renew every 2 years)</li>
        <li><strong>Leadership:</strong> Decision-making protocols, communication strategies</li>
      </ul>

      <h3>Run Drills:</h3>
      <p>Schedule at least one drill per year for each scenario:</p>
      <ul>
        <li>Fire evacuation</li>
        <li>Severe weather shelter</li>
        <li>Medical emergency (tabletop)</li>
        <li>Lockdown (if applicable)</li>
      </ul>

      <p>Drills reveal the gaps in your plan, which is the point of running them.</p>

      <h2>Step 8: Document Everything Simply</h2>
      <p>Your plan should be:</p>
      <ul>
        <li><strong>Written:</strong> In clear, simple language</li>
        <li><strong>Accessible:</strong> Where people can find it quickly</li>
        <li><strong>Brief:</strong> People won't read a 50-page document in a crisis</li>
      </ul>

      <h3>Create Quick Reference Cards:</h3>
      <p>Laminated one-page cards for each scenario that anyone can follow. Post them in strategic locations.</p>

      <h2>Step 9: Review and Update Annually</h2>
      <p>Review the plan every year and after any incident:</p>

      <ul>
        <li>Have contact numbers changed?</li>
        <li>Have roles changed?</li>
        <li>Did drills reveal problems?</li>
        <li>Have new threats emerged?</li>
        <li>Have you renovated or changed building layout?</li>
      </ul>

      <h2>Step 10: Connect with Local Emergency Services</h2>
      <p>Don't wait for an emergency to build relationships:</p>

      <ul>
        <li>Invite local police/fire for facility tours</li>
        <li>Share your floor plans and emergency contact list</li>
        <li>Ask for their input on your plan</li>
        <li>Attend community emergency preparedness meetings</li>
      </ul>

      <h2>Don't Let Perfect Be the Enemy of Good</h2>
      <p>The best emergency response plan is the one you have and use, not the perfect one you never finish.</p>

      <p>Start with one scenario, write down the basic procedures, train a few people, and run one drill. Then build from there.</p>

      <h2>Need Professional Help?</h2>
      <p>We write emergency response plans that staff can follow under stress. <a href="/contact">Contact us</a> for a consultation.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return recentPosts.find((post) => post.slug === slug);
}
