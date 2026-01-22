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
  content: string; // Full HTML content
  featuredImage: string;
  category: BlogCategory;
  publishedAt: string; // ISO date
  readTime?: number; // minutes
}

export const recentPosts: BlogPost[] = [
  {
    slug: "5-security-priorities-houses-of-worship",
    title: "5 Security Priorities Every House of Worship Should Address",
    excerpt:
      "A practical starting point: the five areas that most often drive risk and quick wins.",
    featuredImage: "/assets/images/blog/img-2.jpg",
    category: "houses-of-worship",
    publishedAt: "2025-01-15",
    readTime: 6,
    content: `
      <p>Houses of worship face unique security challenges. You want to maintain an open, welcoming environment while ensuring the safety of your congregation. Where do you start?</p>

      <p>After conducting dozens of assessments for churches, synagogues, mosques, and temples, we've identified five priority areas that consistently provide the greatest security improvements with practical, achievable steps.</p>

      <h2>1. Access Control and Visitor Management</h2>
      <p>Your facility likely has multiple entry points. Do you know who's entering your building during services and events?</p>

      <p><strong>Quick wins:</strong></p>
      <ul>
        <li>Designate one main entrance during services</li>
        <li>Position greeters at all open entrances</li>
        <li>Create a simple visitor check-in process</li>
        <li>Install signage directing visitors to the main entrance</li>
      </ul>

      <p>This isn't about creating barriers—it's about creating awareness. Your greeters serve dual purposes: hospitality and situational awareness.</p>

      <h2>2. Children's Ministry Protection</h2>
      <p>Your children's areas require special attention. Parents entrust their most precious to your care.</p>

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
      <p>Walk your building with fresh eyes—or better yet, have someone else walk it.</p>

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
      <p>Start with children's ministry and emergency response planning. These provide immediate value and typically require minimal budget—just clear procedures and training.</p>

      <p>Then move to access control and building security. Finally, formalize a safety team to maintain and improve your security program over time.</p>

      <p>Remember: security isn't about creating a fortress. It's about creating awareness, having a plan, and being prepared. Your congregation should feel safer, not scared.</p>

      <h2>Need Help Getting Started?</h2>
      <p>We specialize in helping houses of worship develop practical security programs that align with your mission and culture. <a href="/contact">Contact us</a> for a free consultation to discuss your specific needs.</p>
    `,
  },
  {
    slug: "hiring-security-guards",
    title: "What to Look for When Hiring Security Guards for Your Organization",
    excerpt:
      "Qualifications, interview questions, and red flags to avoid costly mistakes.",
    featuredImage: "/assets/images/blog/img-3.jpg",
    category: "training-tips",
    publishedAt: "2025-01-10",
    readTime: 8,
    content: `
      <p>Hiring security personnel for your house of worship, school, or nonprofit is a significant decision. The wrong hire can create liability, damage your reputation, and ironically—make you less safe.</p>

      <p>Here's what you need to know to make informed hiring decisions.</p>

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

      <p>For mission-driven organizations, cultural fit is critical. You need someone who understands that security serves your mission—not the other way around.</p>

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
        <li>Provide comprehensive orientation to your facility, staff, and procedures</li>
        <li>Assign a point person they can contact with questions</li>
        <li>Schedule weekly check-ins for the first month</li>
        <li>Observe them in action during services/events</li>
        <li>Solicit feedback from staff and congregation</li>
        <li>Document everything</li>
      </ul>

      <p>Don't be afraid to make a change if it's not working. Better to restart the search than keep the wrong person.</p>

      <h2>Need Help With Your Hiring Process?</h2>
      <p>We assist organizations in developing security guard hiring procedures, job descriptions, interview questions, and evaluation criteria. <a href="/contact">Contact us</a> to discuss your staffing needs.</p>
    `,
  },
  {
    slug: "emergency-response-plan-where-to-start",
    title: "Creating an Emergency Response Plan: Where to Start",
    excerpt:
      "A step-by-step approach for organizations that need a plan but don't know how to begin.",
    featuredImage: "/assets/images/blog/img-1.jpg",
    category: "emergency-preparedness",
    publishedAt: "2025-01-05",
    readTime: 7,
    content: `
      <p>You know you need an emergency response plan. Everyone says you need one. But when you sit down to create it, where do you actually start?</p>

      <p>This step-by-step guide will help you build a practical emergency response plan for your organization without getting overwhelmed.</p>

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

      <p>Notice: Specific roles, specific actions, specific communication methods. No ambiguity.</p>

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
      <p>The best emergency response plan is the one you actually have and use—not the perfect plan you never finish.</p>

      <p>Start with one scenario. Document basic procedures. Train a few people. Run one drill. Then build from there.</p>

      <h2>Need Professional Help?</h2>
      <p>We help organizations develop customized emergency response plans that are practical, comprehensive, and actually usable. <a href="/contact">Contact us</a> for a consultation.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return recentPosts.find((post) => post.slug === slug);
}
