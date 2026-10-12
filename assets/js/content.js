/*
 * ============================================================
 *  PORTFOLIO CONTENT — edit this file to update the website.
 * ============================================================
 *  Everything shown on the site comes from this one object.
 *  - Change text between the quotes.
 *  - Add an item to a list by copying an existing { ... } block.
 *  - Any text wrapped in [square brackets] is shown as a
 *    highlighted placeholder so it's easy to spot what's missing.
 *  Source: Ayvon's CVs (SOC Analyst L1, IT Support, Cloud,
 *  Network Security, DevOps versions), October 2026.
 */
window.PORTFOLIO = {
  profile: {
    name: "Ayvon Joseph Biji",
    initials: "AJB",
    eyebrow: "IT Support · Networking · Cybersecurity",
    title: "Entry-level IT & Cybersecurity Professional",
    intro:
      "MSc Cybersecurity graduate (University of Aberdeen) with a B.Tech in Computer Science. I'm looking for entry-level, junior and internship opportunities in IT support, desktop support, networking, system administration and SOC analysis, and I bring internship and lab experience in troubleshooting, user and access support, log analysis and clear technical documentation.",
    location: "India",
    availability: "Immediate joiner",
    openTo: "Open to entry-level, junior and internship roles",
    relocation: "Open to relocation",
    shifts: "Available for rotational and night shifts",
    currentRole: "SOC Analyst & Cyber Security Defense Intern",
    currentOrg: "GROWAI EdTech Solution"
  },

  about: [
    "I'm an entry-level IT professional with a cybersecurity academic background. My MSc in Cybersecurity and B.Tech in Computer Science gave me the theory; internships at 1StopAI, Verzeo, Internshala Trainings and now GROWAI gave me practical exposure to troubleshooting user and system issues, Active Directory account and permission work, patch and backup checks, security monitoring and log analysis.",
    "Between my MSc and my current internship I spent two and a half years in full-time, customer-facing shift work in Scotland, including nights and weekends. It built the habits any IT team relies on: clear communication, following procedure, escalating through the right route, keeping accurate records and handing over cleanly.",
    "I'm interested in several areas of IT and happy to start at the entry level, learn on the job and grow with the team."
  ],

  // CAREER INTERESTS: shown in the About section.
  goals: {
    statement:
      "To start my career in an entry-level or junior IT role where I can apply my troubleshooting, networking and security knowledge, learn from experienced colleagues, and keep developing across IT support, infrastructure and cybersecurity.",
    targetRoles: [
      { role: "IT Support / Technical Support", icon: "headset" },
      { role: "Desktop Support / Desktop Engineering", icon: "monitor" },
      { role: "Network Support & Troubleshooting", icon: "network" },
      { role: "Junior System Administrator / IT Infrastructure", icon: "server" },
      { role: "Cybersecurity / SOC Analyst (L1)", icon: "shield" }
    ],
    openTo: ["Entry-level roles", "Junior positions", "Internships", "Rotational & night shifts", "Relocation"]
  },

  // RELEVANT EXPERIENCE BY AREA
  // Every item says where it comes from, so employment is never confused with study.
  // source: "internship" | "employment" | "lab" | "project" | "academic" | "knowledge"
  areas: [
    {
      area: "IT Support",
      icon: "headset",
      items: [
        { text: "Diagnosed user-reported software and application issues, reproducing faults before fixing them", source: "internship", where: "Internshala" },
        { text: "Investigated hardware, system and application issues; resolved routine incidents and escalated complex ones", source: "internship", where: "Verzeo" },
        { text: "Recorded technical steps and resolutions so tickets stayed useful to the next person", source: "internship", where: "Internshala" },
        { text: "Software installation, Windows 10/11, Microsoft 365 and remote support tools", source: "knowledge" }
      ]
    },
    {
      area: "Desktop Engineering",
      icon: "monitor",
      items: [
        { text: "Supported software updates and patching, and verified backup jobs completed", source: "internship", where: "Verzeo" },
        { text: "Assisted with software configuration and day-to-day operational support", source: "internship", where: "1StopAI" },
        { text: "Desktop and laptop configuration, printer and peripheral support, hardware troubleshooting", source: "knowledge" }
      ]
    },
    {
      area: "Networking",
      icon: "network",
      items: [
        { text: "Monitored network environments and investigated network issues by reviewing logs and configuration", source: "internship", where: "Internshala, Verzeo" },
        { text: "Cisco CCNA: Introduction to Networks", source: "academic", where: "Cisco course" },
        { text: "Network traffic analysis with Wireshark and SIEM integration", source: "project" },
        { text: "Wireless security protocol analysis, WEP to WPA3", source: "academic", where: "MSc, CS502B" },
        { text: "TCP/IP, OSI model, IP addressing, subnetting, DNS, DHCP, VLANs, routers and firewalls", source: "knowledge" }
      ]
    },
    {
      area: "Cybersecurity",
      icon: "shield",
      items: [
        { text: "L1 alert triage, log analysis, escalation and written investigation reports", source: "internship", where: "GROWAI" },
        { text: "Security monitoring, log correlation and false positive identification", source: "internship", where: "Internshala, Verzeo" },
        { text: "SIEM, incident response, cryptography and OWASP Top 10 rooms", source: "lab", where: "TryHackMe" },
        { text: "Phishing email detection and risk scoring system", source: "project" },
        { text: "Risk assessment, GDPR governance and security awareness planning", source: "academic", where: "MSc" }
      ]
    },
    {
      area: "System Administration",
      icon: "server",
      items: [
        { text: "Active Directory account setup, group membership and permission reviews against least privilege", source: "internship", where: "1StopAI" },
        { text: "Joiner and leaver handling and access validation during onboarding and offboarding", source: "internship", where: "1StopAI" },
        { text: "Python scripts to automate routine reporting; runbooks and SOPs", source: "internship", where: "1StopAI" },
        { text: "Windows Server, Entra ID / Azure AD, MFA and system configuration", source: "knowledge" }
      ]
    }
  ],

  // type: shown as a badge. current: true adds a "Current" marker.
  experience: [
    {
      role: "SOC Analyst & Cyber Security Defense Intern",
      org: "GROWAI EdTech Solution Pvt. Ltd.",
      place: "India (Remote)",
      dates: "Aug 2026 – Present",
      type: "Internship",
      current: true,
      summary:
        "A three-month SOC and cyber defence internship built around hands-on lab work in log analysis, endpoint security, operating systems and networking foundations.",
      responsibilities: [
        "Practise L1 alert triage: review alerts and activity records to establish what happened, in what order, and whether it is a genuine threat or ordinary activity.",
        "Decide whether findings warrant escalation, and document the response steps, evidence and timeline so a senior analyst can follow the reasoning end to end.",
        "Apply structured troubleshooting: gather the details, work out the cause, and record what resolved it.",
        "Work remotely to set deadlines with little supervision, submitting written investigation reports for review."
      ],
      skills: ["Alert triage", "Log analysis", "Endpoint security", "Escalation", "Investigation reports", "Remote working"]
    },
    {
      role: "Cybersecurity Trainee",
      org: "TryHackMe",
      place: "Online",
      dates: "Apr 2025 – Present",
      type: "Hands-on training",
      kind: "training", // listed under "Labs & training" instead of employment
      current: true,
      summary:
        "Ongoing self-directed practice on the TryHackMe platform, working through real-world scenarios in both defensive and offensive security.",
      responsibilities: [
        "Completed the SIEM room: security monitoring, incident response, log analysis and threat detection.",
        "Completed the Cryptography room: RSA, encryption fundamentals, Diffie-Hellman and post-quantum cryptography.",
        "Practise ethical hacking, network security, web application security and the OWASP Top 10.",
        "Learning penetration testing methodology, defensive security and threat analysis."
      ],
      skills: ["SIEM", "Incident response", "Cryptography", "OWASP Top 10", "Penetration testing"]
    },
    {
      role: "Domestic Assistant (Full-Time)",
      org: "Renaissance Care",
      place: "Scotland, United Kingdom",
      dates: "May 2023 – Dec 2025",
      type: "Full-time",
      summary:
        "Two and a half years of full-time, customer-facing work on rotating shifts. Not a technical role, but the working habits carry directly into 24/7 SOC and service desk operations.",
      responsibilities: [
        "Worked rotational shifts including nights, weekends and holidays, handing over cleanly between shifts and keeping accurate records.",
        "Spoke with residents, families and colleagues every day, handling people patiently and professionally.",
        "Managed several competing responsibilities each day under time pressure.",
        "Followed documented procedures and reported issues through set escalation routes until they were resolved."
      ],
      skills: ["Shift work (24/7)", "Shift handover", "Record keeping", "Escalation procedures", "Prioritisation", "Customer communication"]
    },
    {
      role: "Cyber Security Intern",
      org: "Internshala Trainings",
      place: "India",
      dates: "Sep 2021 – Oct 2021",
      type: "Internship",
      summary:
        "Security monitoring and user support under mentor guidance across Windows, Linux and network environments.",
      responsibilities: [
        "Monitored Windows, Linux and network environments, reviewing system and endpoint activity for security-relevant events.",
        "Analysed system logs, network activity and endpoint records, correlating sources to trace what happened and when.",
        "Separated ordinary activity from events worth investigating, the core of false positive identification.",
        "Diagnosed user-reported software and application issues by reproducing faults and running basic SQL queries to check whether the problem sat in the data or the application.",
        "Documented each case consistently and escalated to senior team members with supporting evidence attached; confirmed fixes with users before closing tickets."
      ],
      skills: ["Log correlation", "False positive identification", "SQL", "Ticket documentation", "Escalation"]
    },
    {
      role: "Cyber Security Intern",
      org: "Verzeo",
      place: "India",
      dates: "Jun 2020 – Jul 2020",
      type: "Internship",
      summary:
        "Routine security and system monitoring, troubleshooting, and patch and backup verification.",
      responsibilities: [
        "Reviewed security events and system performance during routine monitoring, building a sense of normal so anomalies stood out.",
        "Investigated hardware, system and network issues by reviewing logs and configuration, separating minor faults from findings that needed escalation.",
        "Supported patching and misconfiguration checks, confirming updates had applied and backup jobs had completed, and following up on anything missed.",
        "Maintained technical documentation and incident records, using Excel to organise information and produce reports."
      ],
      skills: ["Security monitoring", "Troubleshooting", "Patch validation", "Backup verification", "Documentation"]
    },
    {
      role: "Cyber Security Intern",
      org: "1StopAI",
      place: "India",
      dates: "Jun 2019 – Aug 2019",
      type: "Internship",
      summary:
        "Infrastructure monitoring, identity and access administration, and reporting automation.",
      responsibilities: [
        "Supported infrastructure and application monitoring, helping identify security and operational issues before they reached users.",
        "Administered Active Directory accounts: setup, group membership and permission reviews so each account held only the access its role required.",
        "Assisted with joiner and leaver handling and access validation during user onboarding and offboarding.",
        "Wrote Python scripts to automate routine security reporting, and maintained runbooks, troubleshooting guides and SOPs."
      ],
      skills: ["Active Directory", "Least privilege", "Access reviews", "Python automation", "Runbooks & SOPs"]
    }
  ],

  // TECHNICAL SKILLS: tags only, no proficiency levels. Add or remove freely.
  skills: [
    {
      group: "IT Support & Desktop Support",
      icon: "headset",
      items: ["Hardware & software troubleshooting", "Software installation", "Desktop & laptop configuration", "Printer & peripheral support", "Microsoft 365 / Office 365", "Outlook, Teams, SharePoint, OneDrive", "Remote support (RDP, TeamViewer, AnyDesk)", "Ticketing & SLAs", "Patch & update validation", "Backup verification", "Asset & inventory records"]
    },
    {
      group: "Networking Fundamentals",
      icon: "network",
      items: ["TCP/IP", "OSI model", "IP addressing", "Subnetting", "DNS", "DHCP", "VLAN", "VPN", "LAN / WAN / Wi-Fi", "Routers & switches", "Firewall basics", "Connectivity troubleshooting"]
    },
    {
      group: "Cybersecurity Fundamentals",
      icon: "shield",
      items: ["Alert triage & log analysis", "Incident response concepts", "Phishing analysis", "Risk assessment & GRC", "Security awareness", "Endpoint security", "MITRE ATT&CK", "OWASP Top 10", "IDS/IPS concepts", "Cryptography basics", "GDPR / PCI DSS"]
    },
    {
      group: "Operating Systems & System Administration",
      icon: "server",
      items: ["Windows 10/11", "Windows Server", "Linux (Ubuntu, Kali)", "macOS", "Active Directory", "Entra ID / Azure AD", "User account management", "Permissions & least privilege", "MFA", "VMware", "Hyper-V"]
    },
    {
      group: "Tools & Technologies",
      icon: "tool",
      items: ["Splunk", "ELK Stack", "Wazuh", "Microsoft Defender", "Wireshark", "Burp Suite", "Jira", "Confluence", "Python", "PowerShell", "Bash", "SQL / MySQL", "AWS (EC2, S3, IAM, VPC)", "Azure fundamentals"]
    },
    {
      group: "Troubleshooting & Problem-Solving",
      icon: "search",
      items: ["Structured troubleshooting", "Reproducing faults", "Root cause analysis", "Log & configuration review", "Escalation with evidence", "Documentation & SOPs", "Knowledge base articles"]
    }
  ],

  // SOFT SKILLS: each has a short, real example from my experience.
  softSkills: [
    { name: "Communication", icon: "chat", note: "Spoke with residents, families and colleagues daily; write investigation reports others can follow." },
    { name: "Teamwork & Collaboration", icon: "users", note: "Worked with mentors to test fixes, and handed over cleanly between shifts." },
    { name: "Problem-Solving", icon: "puzzle", note: "Gather the details, find the cause, record what fixed it." },
    { name: "Adaptability", icon: "refresh", note: "Moved between care work in the UK and IT and security work in India, on site and remote." },
    { name: "Willingness to Learn", icon: "book", note: "Ongoing TryHackMe labs and certification study alongside my internship." },
    { name: "Time Management", icon: "clock", note: "Handled competing responsibilities under time pressure and met remote deadlines." },
    { name: "Attention to Detail", icon: "target", note: "Accurate records, evidence and timelines in every case I document." },
    { name: "Critical Thinking", icon: "bulb", note: "Separating genuine threats from ordinary activity during alert triage." },
    { name: "Flexibility & Open-Mindedness", icon: "compass", note: "Open to rotational and night shifts, relocation, and different IT domains." }
  ],

  // CONTINUOUS LEARNING: add new courses, certifications, labs or technologies here.
  // type: "Certification" | "Course" | "Lab" | "Technology"
  // status: "In progress" | "Planned" | "Ongoing" | "Completed"
  learning: {
    intro:
      "I am a motivated entry-level IT professional who enjoys learning new technologies, solving technical problems, and continuously developing my skills across IT support, networking, and cybersecurity.",
    items: [
      { name: "CompTIA Security+ exam", type: "Certification", area: "Cybersecurity", status: "In progress" },
      { name: "Microsoft MS-900 & MD-102", type: "Certification", area: "IT Support", status: "In progress" },
      { name: "CCNA 200-301", type: "Certification", area: "Networking", status: "In progress" },
      { name: "Cisco Endpoint Security", type: "Course", area: "Cybersecurity", status: "In progress" },
      { name: "ITIL Foundation & ServiceNow", type: "Course", area: "IT Support", status: "In progress" },
      { name: "Microsoft Sentinel & KQL", type: "Technology", area: "Cybersecurity", status: "In progress" },
      { name: "Office 365 admin & Windows registry", type: "Technology", area: "System Administration", status: "In progress" },
      { name: "TryHackMe practical labs", type: "Lab", area: "Cybersecurity", status: "Ongoing" }
    ]
  },

  // categories: used by the project filter: "cybersecurity", "networking", "it-systems", "academic"
  // context: small label above the title, e.g. "MSc Dissertation"
  // featured: true shows the project larger at the top
  projects: [
    {
      title: "Anonymous VPN Browser Extension",
      context: "MSc Dissertation",
      categories: ["networking", "cybersecurity", "academic"],
      featured: true,
      summary:
        "Cross-platform browser extension for stronger user privacy, giving each tab a randomised VPN connection. Includes a full UI with country selection, random server choice and connection status indicators, backed by research into OpenVPN, IPsec and WireGuard.",
      result: "",
      tags: ["JavaScript", "HTML", "CSS", "Chrome Extension APIs", "VPN"],
      links: { code: "", demo: "" } // add a GitHub URL to show a "Code" link
    },
    {
      title: "FinAccess Security Assurance Program",
      context: "CS552H Academic Project",
      categories: ["cybersecurity", "academic"],
      featured: true,
      summary:
        "Security assurance framework for a financial inclusion platform serving 10M+ users. Built GDPR, PSD2 and PCI DSS compliance into every SDLC phase, designed a microservices architecture with continuous testing (unit, integration, penetration), and set monitoring and incident response protocols using MITRE ATT&CK.",
      result: "",
      tags: ["GDPR", "PSD2", "PCI DSS", "Secure SDLC", "MITRE ATT&CK"],
      links: { code: "", demo: "" }
    },
    {
      title: "Wireless Security Protocol Analysis",
      context: "CS502B Academic Project",
      categories: ["networking", "cybersecurity", "academic"],
      summary:
        "Analysis of WEP, WPA, WPA2 and WPA3 covering encryption mechanisms and known vulnerabilities, with documented protocol evolution, security improvements and enterprise implementation best practices.",
      result: "",
      tags: ["Wi-Fi security", "WPA3", "Cryptography"],
      links: { code: "", demo: "" }
    },
    {
      title: "GDPR Compliance & Data Protection Governance",
      context: "Academic Assignment",
      categories: ["cybersecurity", "academic"],
      summary:
        "Case analysis of the Company W data breach (£8.7M ICO fine, 5M citizens affected). Produced a data protection governance framework, GDPR implementation roadmap, security awareness training, encryption and access control strategies, and privacy audit procedures.",
      result: "",
      tags: ["GDPR", "Governance", "Risk & compliance"],
      links: { code: "", demo: "" }
    },
    {
      title: "IoT-Based Monitoring System with SCADA",
      context: "Bachelor's Final Project",
      categories: ["networking", "academic"],
      summary:
        "IoT-enabled nutrient management system for shrimp aquaculture using a SCADA architecture, with real-time data collection, wireless sensor networks, automated monitoring and alerting.",
      result: "",
      tags: ["IoT", "SCADA", "Sensor networks"],
      links: { code: "", demo: "" }
    },
    {
      title: "Website Penetration Testing: SQL Injection",
      context: "Security testing",
      categories: ["cybersecurity"],
      summary:
        "Black-box testing of a live web application with Burp Suite. Documented each finding with exploitation scenarios, remediation recommendations and security patches.",
      result: "3 critical SQL injection flaws found · attack exposure cut by 80% after fixes",
      tags: ["Burp Suite", "SQL injection", "OWASP"],
      links: { code: "", demo: "" }
    },
    {
      title: "Network Traffic Analysis & Monitoring System",
      context: "Network security",
      categories: ["networking", "cybersecurity"],
      summary:
        "Real-time network traffic monitoring with Wireshark and SIEM integration, using automated packet inspection to flag security incidents and network anomalies.",
      result: "Threat detection improved by 20% · 1,000+ packets analysed daily",
      tags: ["Wireshark", "SIEM", "Packet analysis"],
      links: { code: "", demo: "" }
    },
    {
      title: "Secure Email Platform Implementation",
      context: "Data protection",
      categories: ["it-systems", "cybersecurity"],
      summary:
        "Secure email system using Microsoft Purview encryption, with industry-standard security protocols and authentication mechanisms.",
      result: "100% compliance with internal DLP policies · 100+ communications protected end to end",
      tags: ["Microsoft Purview", "DLP", "Encryption"],
      links: { code: "", demo: "" }
    },
    {
      title: "Security Log Monitoring & Incident Detection Tool",
      context: "Automation",
      categories: ["cybersecurity", "it-systems"],
      summary:
        "Python tool that reads sign-in and system event logs, detects brute-force attempts and unusual login activity, and writes incident reports without manual review.",
      result: "Monitoring efficiency improved by 30%",
      tags: ["Python", "Log analysis", "Detection"],
      links: { code: "", demo: "" }
    },
    {
      title: "Phishing Email Detection & Risk Assessment System",
      context: "Machine learning",
      categories: ["cybersecurity"],
      summary:
        "Python system using the Gmail API with rule-based checks, URL analysis and a machine learning model to give each inbound email a documented risk verdict.",
      result: "",
      tags: ["Python", "Gmail API", "Machine learning"],
      links: { code: "", demo: "" }
    }
  ],

  education: [
    {
      degree: "MSc Cybersecurity",
      school: "University of Aberdeen",
      place: "United Kingdom",
      years: "2022 – 2023"
    },
    {
      degree: "B.Tech, Computer Science & Engineering",
      school: "Karunya Institute of Technology & Sciences",
      place: "Coimbatore, India",
      years: "2018 – 2022"
    }
  ],

  certifications: [
    { name: "CCNA: Introduction to Networks", issuer: "Cisco", status: "" },
    { name: "CompTIA Security+ (SY0-601) Training", issuer: "Udemy", status: "Exam in preparation" },
    { name: "Endpoint Security", issuer: "Cisco", status: "In progress" },
    { name: "Cybersecurity Governance, Risk & Compliance", issuer: "LinkedIn", status: "" },
    { name: "Introduction to IoT", issuer: "Cisco", status: "" },
    { name: "Practical security labs", issuer: "TryHackMe", status: "Ongoing" }
  ],

  // Shown in the Contact section. There is no public resume download.
  resumeRequest: "Interested in my professional background? Please contact me to request my resume.",

  contact: {
    email: "ayvonjosephbiji00@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayvonjosephbiji",
    github: "https://github.com/ayvonbiji",
    phone: "+91 8075356297",
    showPhone: false // set to true to show your mobile number publicly
  }
};
