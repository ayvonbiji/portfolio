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
    headline: "SOC Analyst · IT Support · Cybersecurity",
    intro:
      "Computer Science graduate with an MSc in Cybersecurity, currently working as a SOC Analyst & Cyber Security Defense Intern. I triage alerts, analyse logs, support users and systems, and write things up so the next person can follow them.",
    location: "India",
    availability: "Immediate joiner · Open to relocation",
    currentRole: "SOC Analyst & Cyber Security Defense Intern",
    currentOrg: "GROWAI EdTech Solution",
    learning: "Microsoft Sentinel & KQL · Security+ exam",
    photo: "" // optional: "assets/img/profile.jpg"
  },

  about: [
    "I hold a B.Tech in Computer Science & Engineering from Karunya Institute of Technology & Sciences and an MSc in Cybersecurity from the University of Aberdeen. Across internships at 1StopAI, Verzeo, Internshala Trainings and now GROWAI, I've worked on alert triage, log analysis, Active Directory access reviews, patch and backup verification, and support documentation.",
    "Between my MSc and my current internship I spent two and a half years in full-time, customer-facing shift work in Scotland, including nights and weekends. It taught me to stay calm under pressure, follow procedure, hand over cleanly and see an issue through until it is closed.",
    "I'm looking for an L1 SOC, incident analyst or IT support role where I can keep building depth in Microsoft Sentinel, KQL and Defender, and grow towards L2 SOC and incident response."
  ],

  experience: [
    {
      role: "SOC Analyst & Cyber Security Defense Intern",
      org: "GROWAI EdTech Solution Pvt. Ltd.",
      place: "India (Remote)",
      dates: "Aug 2026 – Present",
      current: true,
      points: [
        "Three-month SOC and cyber defence internship built around hands-on labs in log analysis, endpoint security, operating systems and networking.",
        "Practising L1 alert triage: working out what happened, in what order, and whether activity is genuine or benign.",
        "Deciding when findings need escalation and documenting evidence, timeline and response steps for senior review."
      ]
    },
    {
      role: "Domestic Assistant (Full-Time)",
      org: "Renaissance Care",
      place: "Scotland, United Kingdom",
      dates: "May 2023 – Dec 2025",
      points: [
        "Two and a half years of rotational shift work including nights, weekends and holidays, with clean handovers and accurate records.",
        "Followed documented procedures and escalated issues through set routes until resolved."
      ]
    },
    {
      role: "Cyber Security / IT Support Intern",
      org: "Internshala Trainings",
      place: "India",
      dates: "Sep 2021 – Oct 2021",
      points: [
        "Monitored Windows, Linux and network environments and analysed system, network and endpoint logs to support initial investigations.",
        "Diagnosed user-reported issues, reproduced faults and used SQL to check whether a problem sat in the data or the application.",
        "Documented each case consistently and escalated with supporting evidence attached."
      ]
    },
    {
      role: "Cyber Security / IT Support Intern",
      org: "Verzeo",
      place: "India",
      dates: "Jun 2020 – Jul 2020",
      points: [
        "Reviewed security events and system performance as part of routine monitoring.",
        "Supported patching and misconfiguration checks and verified backup jobs completed as expected."
      ]
    },
    {
      role: "Cyber Security / IT Support Intern",
      org: "1StopAI",
      place: "India",
      dates: "Jun 2019 – Aug 2019",
      points: [
        "Reviewed Active Directory accounts and permissions against least privilege and assisted with joiner and leaver access.",
        "Wrote Python scripts to automate routine security reporting and maintained runbooks and SOPs."
      ]
    }
  ],

  skills: [
    {
      group: "Security operations",
      items: ["Alert triage (L1)", "Log analysis & correlation", "False positive identification", "Incident documentation", "Escalation to L2/L3", "MITRE ATT&CK", "Detection rule tuning", "OWASP Top 10"]
    },
    {
      group: "SIEM & security tools",
      items: ["Splunk", "ELK Stack", "Wazuh", "Microsoft Defender", "Wireshark", "Burp Suite", "IDS/IPS concepts"]
    },
    {
      group: "Identity & Microsoft 365",
      items: ["Active Directory", "Entra ID / Azure AD", "MFA", "Least privilege", "Microsoft 365", "Exchange Online", "Teams", "SharePoint"]
    },
    {
      group: "Networking",
      items: ["TCP/IP", "DNS", "DHCP", "VPN", "VLAN", "LAN / WAN", "Firewall basics", "Connectivity troubleshooting"]
    },
    {
      group: "Systems & cloud",
      items: ["Windows 10/11", "Windows Server", "Linux (Ubuntu, Kali)", "macOS", "AWS (EC2, S3, IAM, VPC)", "Azure fundamentals", "VMware", "Hyper-V"]
    },
    {
      group: "IT support & service desk",
      items: ["Desktop & hardware support", "Remote support", "Ticketing & SLAs", "Patch & backup verification", "Jira", "Confluence", "Knowledge base & SOPs"]
    },
    {
      group: "Scripting & data",
      items: ["Python", "PowerShell", "Bash", "SQL / MySQL", "Pandas", "Scikit-learn"]
    }
  ],

  projects: [
    {
      title: "Security Log Monitoring & Incident Detection Tool",
      summary:
        "Python tool that reads sign-in and system event logs, detects brute-force attempts and unusual login activity, and writes incident reports without manual review.",
      result: "Improved monitoring efficiency by 30%",
      tags: ["Python", "Log analysis", "Detection"],
      links: { code: "", demo: "" } // add a GitHub URL to show a "Code" link
    },
    {
      title: "Network Traffic Analysis & Monitoring System",
      summary:
        "Real-time monitoring with Wireshark and SIEM integration, capturing packets and examining traffic at protocol level with anomaly rules.",
      result: "Detection accuracy up 20%, mostly by cutting false positives",
      tags: ["Wireshark", "SIEM", "Networking"],
      links: { code: "", demo: "" }
    },
    {
      title: "Phishing Email Detection & Risk Assessment System",
      summary:
        "Python system using the Gmail API with rule-based checks, URL analysis and a machine learning model to give each inbound email a documented risk verdict.",
      result: "",
      tags: ["Python", "Gmail API", "Machine learning"],
      links: { code: "", demo: "" }
    },
    {
      title: "Web Application Penetration Testing (SQL Injection)",
      summary:
        "Structured black-box testing with Burp Suite, with each finding documented with reproduction steps, severity and remediation guidance.",
      result: "Identified 3 critical vulnerabilities",
      tags: ["Burp Suite", "SQL injection", "Reporting"],
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

  resume: {
    file: "assets/resume/Ayvon_Joseph_Biji_CV.pdf",
    note: "SOC Analyst L1 version. Tailored CVs for IT Support, Cloud & Systems, Network Security and DevOps roles are available on request."
  },

  contact: {
    email: "ayvonjosephbiji00@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayvonjosephbiji",
    github: "https://github.com/ayvonbiji",
    phone: "+91 8075356297",
    showPhone: false // set to true to show your mobile number publicly
  }
};
