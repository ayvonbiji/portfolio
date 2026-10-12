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
      role: "Cybersecurity Trainee",
      org: "TryHackMe",
      place: "Online, hands-on labs",
      dates: "Apr 2025 – Present",
      current: true,
      points: [
        "Building practical cybersecurity skills through hands-on TryHackMe rooms based on real-world scenarios.",
        "Completed the SIEM room: security monitoring, incident response, log analysis and threat detection.",
        "Completed the Cryptography room: RSA, encryption fundamentals, Diffie-Hellman and post-quantum cryptography.",
        "Practising ethical hacking, network security, web application security and the OWASP Top 10.",
        "Learning penetration testing methodology, defensive security and threat analysis."
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

  // category: "academic" or "hands-on" (used by the project filter)
  // context: small label above the title, e.g. "MSc Dissertation"
  // featured: true shows the project larger at the top
  projects: [
    {
      title: "Anonymous VPN Browser Extension",
      context: "MSc Dissertation",
      category: "academic",
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
      category: "academic",
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
      category: "academic",
      summary:
        "Analysis of WEP, WPA, WPA2 and WPA3 covering encryption mechanisms and known vulnerabilities, with documented protocol evolution, security improvements and enterprise implementation best practices.",
      result: "",
      tags: ["Wi-Fi security", "WPA3", "Cryptography"],
      links: { code: "", demo: "" }
    },
    {
      title: "GDPR Compliance & Data Protection Governance",
      context: "Academic Assignment",
      category: "academic",
      summary:
        "Case analysis of the Company W data breach (£8.7M ICO fine, 5M citizens affected). Produced a data protection governance framework, GDPR implementation roadmap, security awareness training, encryption and access control strategies, and privacy audit procedures.",
      result: "",
      tags: ["GDPR", "Governance", "Risk & compliance"],
      links: { code: "", demo: "" }
    },
    {
      title: "IoT-Based Monitoring System with SCADA",
      context: "Bachelor's Final Project",
      category: "academic",
      summary:
        "IoT-enabled nutrient management system for shrimp aquaculture using a SCADA architecture, with real-time data collection, wireless sensor networks, automated monitoring and alerting.",
      result: "",
      tags: ["IoT", "SCADA", "Sensor networks"],
      links: { code: "", demo: "" }
    },
    {
      title: "Website Penetration Testing: SQL Injection",
      context: "Security testing",
      category: "hands-on",
      summary:
        "Black-box testing of a live web application with Burp Suite. Documented each finding with exploitation scenarios, remediation recommendations and security patches.",
      result: "3 critical SQL injection flaws found · attack exposure cut by 80% after fixes",
      tags: ["Burp Suite", "SQL injection", "OWASP"],
      links: { code: "", demo: "" }
    },
    {
      title: "Network Traffic Analysis & Monitoring System",
      context: "Network security",
      category: "hands-on",
      summary:
        "Real-time network traffic monitoring with Wireshark and SIEM integration, using automated packet inspection to flag security incidents and network anomalies.",
      result: "Threat detection improved by 20% · 1,000+ packets analysed daily",
      tags: ["Wireshark", "SIEM", "Packet analysis"],
      links: { code: "", demo: "" }
    },
    {
      title: "Secure Email Platform Implementation",
      context: "Data protection",
      category: "hands-on",
      summary:
        "Secure email system using Microsoft Purview encryption, with industry-standard security protocols and authentication mechanisms.",
      result: "100% compliance with internal DLP policies · 100+ communications protected end to end",
      tags: ["Microsoft Purview", "DLP", "Encryption"],
      links: { code: "", demo: "" }
    },
    {
      title: "Security Log Monitoring & Incident Detection Tool",
      context: "Automation",
      category: "hands-on",
      summary:
        "Python tool that reads sign-in and system event logs, detects brute-force attempts and unusual login activity, and writes incident reports without manual review.",
      result: "Monitoring efficiency improved by 30%",
      tags: ["Python", "Log analysis", "Detection"],
      links: { code: "", demo: "" }
    },
    {
      title: "Phishing Email Detection & Risk Assessment System",
      context: "Machine learning",
      category: "hands-on",
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
