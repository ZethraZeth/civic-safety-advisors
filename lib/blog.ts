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
}

export const recentPosts: BlogPost[] = [
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
        <li><strong>Assuming first responders know your facility:</strong> They don't. You must provide information proactively.</li>
        <li><strong>Creating plans without first responder input:</strong> They respond to buildings like yours for a living. Ask them.</li>
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

      <p>Sometimes the answer is yes. Usually it is "not yet." At a 20-, 30-, or 50-unit building, the things that most reduce risk to your staff and residents cost far less than a camera system and get done in a week instead of a quarter. This post walks through what to fix first, then what cameras are actually good for, so that if you do spend the money you spend it once.</p>

      <h2>What a camera does and does not do</h2>
      <p>A camera records. That is the whole job. It does not stop a confrontation in progress, it does not make a propped door close, and unless someone is watching the feed and can dispatch a response, it does not shorten the time between an incident starting and help arriving. At most small and mid-size residential properties nobody is watching the feed. The footage gets pulled afterward, if the system was working, if the angle was right, and if anyone knew how to export it.</p>

      <p>That makes cameras an investigative tool and sometimes a deterrent. Both are real benefits. Neither is a substitute for the procedural controls below, which address the moment the incident is happening.</p>

      <h2>Fix these first</h2>

      <h3>1. Key and code control</h3>
      <p>Walk the building and answer three questions. Who has a key or code to the front door, the mechanical rooms, and the office? When was the last time any of those were changed? What happens when an employee leaves or a resident moves out? At most properties nobody can answer the first question with confidence, and the answer to the second is "when we bought the building." Re-keying and rotating codes costs a few hundred dollars. Not knowing who can get into your building is the single most common finding in a residential security review, and no camera fixes it.</p>

      <h3>2. Doors that actually close</h3>
      <p>Propped doors, broken closers, and latches that do not catch are how unauthorized people get into buildings. Residents prop doors for convenience, deliveries, or a guest who does not have a key. Fixing closers and latches is a maintenance ticket, not a capital project. If the same door keeps getting propped, the fix is usually a procedural one: a sign, a conversation at the next resident meeting, and a consequence in the lease that management actually applies.</p>

      <h3>3. Exterior lighting</h3>
      <p>A dark parking lot or entry is where staff feel most exposed and where the incidents in your logs tend to cluster. Lighting is cheaper than cameras, works whether or not anyone is watching, and improves the footage if you add cameras later. Walk the property after dark with the site manager and note every spot where you would not want to be alone. Then fix those.</p>

      <h3>4. A rule for who goes into occupied units, and when</h3>
      <p>Maintenance staff enter occupied units every day. Most companies have no written rule about it. Write one. It should cover notice to the resident, what to do if the resident is not home and someone else answers, what to do if there are signs of a weapon, drugs, a hoarding condition, or a person in distress, and when a tech should leave and call for backup rather than finish the ticket. This is a page, not a manual. It protects your people and it protects you.</p>

      <h3>5. A lone-worker check-in</h3>
      <p>At small buildings there is often one site manager, and at smaller ones a manager who covers several buildings on a rotation. If that person is confronted in the office or the lot, who knows? A simple check-in rule, a text to a supervisor at set times or when starting a lease enforcement conversation, costs nothing and tells you within the hour if something is wrong. Phone apps that do this automatically exist and are inexpensive, but the rule matters more than the tool.</p>

      <h3>6. A single incident reporting process</h3>
      <p>Ask your site managers how they report an incident. If the answers differ by building, you do not have a process. Pick one form, one definition of what counts as an incident, one threshold for calling the regional manager the same day, and one place the reports go. The point is not paperwork. It is that a pattern at one building becomes visible to the people who can do something about it. Most companies discover they had five incidents involving the same resident only after the sixth one makes the news.</p>

      <h3>7. Office layout</h3>
      <p>Look at the leasing or management office from the point of view of a staff member alone with an angry visitor. Is there a second way out? Is the desk between the employee and the door, or between the employee and the wall? Can the office door be locked from inside quickly? Rearranging furniture is free. A second exit is sometimes a construction project, but knowing you do not have one changes how you staff the office and when you schedule difficult conversations.</p>

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
      <p>Everything above applies with more force if you are a nonprofit housing provider or you manage affordable units. Budgets are tighter, buildings are often older, and your staff work with residents who may be in crisis more often than at a market-rate property. The procedural fixes are the ones you can afford, and they are the ones a funder, an insurance carrier, or a board will want to see documented. Cameras are a line item. A written lone-worker policy and a working incident reporting process are a program.</p>

      <h2>Where to start</h2>
      <p>Walk one building with the site manager and the list above. Write down what you find. If most of the seven items are already handled, you are in good shape and a camera conversation is reasonable. If they are not, you have your next month's work, and it will cost less than the camera quote on your desk.</p>

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
      <p>You want the doors open and the congregation safe. Where do you start?</p>

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
      <p>Children's areas need particular attention. Parents are trusting you with their kids.</p>

      <p><strong>Essential steps:</strong></p>
      <ul>
        <li>Implement check-in/check-out procedures with matching tags</li>
        <li>Establish a two-adult rule (never one adult alone with children)</li>
        <li>Install windows or half-doors for visibility into classrooms</li>
        <li>Create clear volunteer screening procedures</li>
        <li>Designate separate restrooms or escort policies for children</li>
      </ul>

      <h2>3. Emergency Response Planning</h2>
      <p>Does your staff know what to do if a medical emergency occurs during services? What about a fire? An active threat?</p>

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
      <p>You don't need armed guards. You need aware people who know what to do.</p>

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
    summary: "A security guard is only as useful as the post orders, supervision, and training behind them. Before hiring, define what the guard is there to do, confirm state licensing and insurance, and put the expectations in writing.",
    title: "What to Look for When Hiring Security Guards for Your Organization",
    excerpt:
      "Qualifications, interview questions, and red flags to avoid costly mistakes.",
    featuredImage: "/assets/images/blog/img-3.jpg",
    category: "training-tips",
    publishedAt: "2025-01-10",
    readTime: 8,
    content: `
      <p>Hiring security personnel for your house of worship, school, or nonprofit is a big decision. The wrong hire creates liability, damages your reputation, and can make you less safe than you were before.</p>

      <p>Here is what to check before you make an offer.</p>

      <h2>Start with State Requirements</h2>
      <p>Before you interview anyone, understand your state's requirements:</p>

      <ul>
        <li><strong>Licensing:</strong> Most states require security guards to be licensed. Verify candidates hold current, valid licenses.</li>
        <li><strong>Training minimums:</strong> States mandate different training hours. Know what's required in your jurisdiction.</li>
        <li><strong>Firearms:</strong> If you're considering armed security, additional permits and training are always required.</li>
        <li><strong>Background checks:</strong> Some states have specific requirements for types of background checks.</li>
      </ul>

      <p>Never assume a candidate meets requirements. Verify everything.</p>

      <h2>Essential Qualifications</h2>
      <p>Look for these baseline qualifications:</p>

      <h3>Required:</h3>
      <ul>
        <li>Valid state security license</li>
        <li>Clean criminal background check</li>
        <li>Reliable transportation</li>
        <li>Professional references from previous security positions</li>
        <li>Current first aid/CPR certification (or willingness to obtain)</li>
      </ul>

      <h3>Strongly Preferred:</h3>
      <ul>
        <li>Previous experience in similar settings (worship, education, nonprofit)</li>
        <li>De-escalation training</li>
        <li>Experience with diverse populations</li>
        <li>Customer service background</li>
        <li>Understanding of your organization's mission</li>
      </ul>

      <h2>Interview Questions That Matter</h2>
      <p>Skip the generic questions. Focus on scenarios and judgment:</p>

      <h3>Situational Questions:</h3>
      <ul>
        <li>"A parent arrives late to pick up their child from Sunday school and becomes angry when questioned. How do you handle it?"</li>
        <li>"You notice someone taking photos of children during a service. What do you do?"</li>
        <li>"A regular attender exhibits erratic behavior and is making others uncomfortable. Walk me through your response."</li>
        <li>"During a service, you receive a report of a suspicious package left in a hallway. What are your first three actions?"</li>
      </ul>

      <p>Listen for: measured responses, de-escalation instincts, communication with leadership, and following procedures.</p>

      <h3>Mission Alignment Questions:</h3>
      <ul>
        <li>"What do you know about our organization?"</li>
        <li>"How do you balance security with creating a welcoming environment?"</li>
        <li>"Describe a time you had to make a decision that prioritized someone's dignity over strict rule enforcement."</li>
      </ul>

      <p>For a mission-driven organization, fit matters. You need someone who understands that security works for the mission, not the other way around.</p>

      <h2>Red Flags to Watch For</h2>
      <p>Walk away from candidates who exhibit these warning signs:</p>

      <ul>
        <li><strong>Gaps in employment history they can't or won't explain</strong></li>
        <li><strong>Inability to provide references from previous security positions</strong></li>
        <li><strong>Overly aggressive or confrontational demeanor</strong></li>
        <li><strong>Talking extensively about weapons or use of force</strong></li>
        <li><strong>Dismissive of your organization's mission or values</strong></li>
        <li><strong>Resistance to following procedures or reporting to civilian leadership</strong></li>
        <li><strong>Exaggerating credentials or experience</strong></li>
        <li><strong>Poor communication skills</strong></li>
      </ul>

      <p>Trust your instincts. If something feels off during the interview, it won't improve after hiring.</p>

      <h2>The Background Check Process</h2>
      <p>Never skip background checks, even for volunteers. At minimum, conduct:</p>

      <ul>
        <li><strong>Criminal background check</strong> (state and federal)</li>
        <li><strong>Sex offender registry search</strong></li>
        <li><strong>Professional reference checks</strong> (actually call them)</li>
        <li><strong>Driving record</strong> (if driving is part of duties)</li>
        <li><strong>License verification</strong> (security license, firearms permit if applicable)</li>
      </ul>

      <p>For positions involving children, many states have additional requirements. Check with your state attorney general's office.</p>

      <h2>Setting Clear Expectations</h2>
      <p>Before making an offer, ensure candidates understand:</p>

      <ul>
        <li><strong>Scope of authority:</strong> What they can and cannot do</li>
        <li><strong>Reporting structure:</strong> Who they report to (and it should be civilian leadership)</li>
        <li><strong>Appearance standards:</strong> Uniform requirements, name tags, visibility</li>
        <li><strong>Prohibited conduct:</strong> Use of force policies, interaction limits, confidentiality</li>
        <li><strong>Training requirements:</strong> Ongoing training expectations</li>
      </ul>

      <h2>Consider Contract Security vs. Direct Hire</h2>
      <p>You have options:</p>

      <h3>Contract Security Companies:</h3>
      <p><strong>Pros:</strong> Handle licensing, insurance, background checks, scheduling, and replacement if someone doesn't work out.</p>
      <p><strong>Cons:</strong> Less control over who's assigned, may lack mission alignment, higher hourly cost.</p>

      <h3>Direct Hire:</h3>
      <p><strong>Pros:</strong> More control, better cultural fit, builds relationships with congregation/community.</p>
      <p><strong>Cons:</strong> More administrative burden, liability considerations, must handle all HR functions.</p>

      <p>Many organizations start with contract security to understand their needs, then transition to direct hire once they know what they're looking for.</p>

      <h2>First 90 Days Are Critical</h2>
      <p>Once you hire:</p>

      <ul>
        <li>Give a full orientation to your facility, staff, and procedures</li>
        <li>Assign a point person they can contact with questions</li>
        <li>Schedule weekly check-ins for the first month</li>
        <li>Observe them in action during services/events</li>
        <li>Solicit feedback from staff and congregation</li>
        <li>Document everything</li>
      </ul>

      <p>Don't be afraid to make a change if it's not working. Better to restart the search than keep the wrong person.</p>

      <h2>Need Help With Your Hiring Process?</h2>
      <p>We help organizations write guard hiring procedures, job descriptions, interview questions, and evaluation criteria. <a href="/contact">Contact us</a> to talk about your staffing.</p>
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
      <p>You know you need an emergency response plan. Everyone says you need one. But when you sit down to create it, where do you actually start?</p>

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

      <p>Pick 3-5 scenarios to start. You can always add more later.</p>

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
      <p>A plan on paper doesn't save lives. Training does.</p>

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

      <p>Drills reveal gaps in your plan. That's the point.</p>

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
      <p>Your plan isn't static. Review it every year and after any incident:</p>

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

      <p>Start with one scenario. Document basic procedures. Train a few people. Run one drill. Then build from there.</p>

      <h2>Need Professional Help?</h2>
      <p>We write emergency response plans that staff can follow under stress. <a href="/contact">Contact us</a> for a consultation.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return recentPosts.find((post) => post.slug === slug);
}
