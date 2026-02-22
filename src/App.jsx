import React, { useState } from 'react';
import { 
  Menu, X, Database, BarChart3, Code, BrainCircuit, 
  Mail, MapPin, Phone, Github, Linkedin, ExternalLink, 
  ChevronRight, TerminalSquare, GraduationCap
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home', 'About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full glass-nav z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            
            {/* The "M" Trend-Line Logo (Blue/Teal Theme) */}
            <a href="#home" className="flex items-center gap-3 group cursor-pointer">
              
              <div className="relative flex items-center justify-center">
                {/* Soft glowing blue/teal backlight */}
                <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-md group-hover:bg-teal-500/40 transition-all duration-300"></div>
                
                {/* SVG Trend Line / M shape */}
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="relative z-10 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)] group-hover:scale-110 transition-transform duration-300"
                >
                  <defs>
                    {/* Blue to Teal Gradient */}
                    <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" />  {/* sky-500 */}
                      <stop offset="50%" stopColor="#2dd4bf" /> {/* teal-400 */}
                      <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
                    </linearGradient>
                  </defs>
                  
                  {/* The Connecting Line (Traces an 'M') */}
                  <path 
                    d="M 3 17 L 8 6 L 12 13 L 16 6 L 21 17" 
                    stroke="url(#blue-grad)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  
                  {/* The Data Nodes (Dots on the line) */}
                  <circle cx="3" cy="17" r="2" fill="#0ea5e9" />
                  {/* Glowing top peaks */}
                  <circle cx="8" cy="6" r="2.5" fill="#ccfbf1" className="drop-shadow-[0_0_3px_#5eead4]" />
                  <circle cx="12" cy="13" r="2" fill="#2dd4bf" />
                  {/* Glowing top peaks */}
                  <circle cx="16" cy="6" r="2.5" fill="#ccfbf1" className="drop-shadow-[0_0_3px_#5eead4]" />
                  <circle cx="21" cy="17" r="2" fill="#3b82f6" />
                </svg>
              </div>

              {/* Clean Typography */}
              <div className="flex flex-col justify-center">
                <span className="text-xl font-extrabold text-white tracking-wide group-hover:text-teal-50 transition-colors duration-300">
                  Madhav<span className="text-teal-400">.</span>
                </span>
              </div>
            </a>

          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-300 hover:text-teal-400 transition-colors text-sm font-semibold tracking-wide">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-teal-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-teal-400 hover:bg-white/5 rounded-lg transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Hello, I am <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 drop-shadow-lg">
                Madhav Limbasiya
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-300">
              Technical Data Analyst | Bridging Data Integrity with Business Intelligence
            </h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Passionate about transforming complex datasets into compelling strategic narratives. With a strong foundation in database administration, SQL, Python, and Tableau, I deliver actionable insights that drive business decisions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="inline-flex items-center px-8 py-3.5 text-base font-bold rounded-xl text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300 hover:-translate-y-1">
                View Projects
              </a>
             
  <a 
    href="./Madhav_Limbasiya_Resume.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center px-8 py-3.5 border border-white/20 text-base font-bold rounded-xl text-white bg-white/5 backdrop-blur-md hover:border-teal-400 hover:bg-white/10 transition-all duration-300 group"
  >
    <span>Download CV</span>
    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400 to-cyan-500 blur-2xl opacity-50"></div>
              <div className="relative w-full h-full rounded-full border-2 border-white/20 bg-slate-900/50 backdrop-blur-sm shadow-2xl overflow-hidden p-2">
                <img 
                  src="./profile.jpg" 
                  alt="Madhav Limbasiya" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">About Me</h2>
        <div className="glass-card rounded-3xl p-8 md:p-12">
          {/* Subtle reflection overlay for glass */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>
          <p className="text-lg text-slate-300 leading-relaxed font-medium relative z-10">
            Technical Data Analyst skilled in data architecture, large-scale databases (MySQL, MongoDB), Tableau, and Power BI. I have hands-on experience analyzing complex datasets to uncover supply chain profitability and revenue trends. By focusing on robust automated analytical pipelines and advanced data extraction techniques, I bridge the gap between backend data integrity and frontend business intelligence to solve complex organizational challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
  {
    role: "Junior Database Administrator",
    company: "Asquare Tech Lab LLP",
    date: "05/2023 - 07/2024",
    points: [
      "Optimized data architecture for high-volume datasets (100GB+), improving data extraction efficiency for downstream business intelligence reporting by 30%.",
      "Automated data validation pipelines using SQL, maintaining 99.9% data integrity across production environments and reducing manual audit time by 15 hours/week.",
      "Engineered complex SQL indexing strategies that reduced query latency for critical financial reports, enabling faster executive decision-making."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "SVIQ Solution LLP",
    date: "01/2023 - 04/2023",
    points: [
      "Analyzed user interaction patterns and web telemetry data to identify navigation bottlenecks, resulting in a 20% increase in user engagement scores.",
      "Maintained back-end SQL database connections, troubleshooting data-flow issues to ensure 100% uptime for client-facing features.",
      "Collaborated with cross-functional teams to translate user behavior data into technical requirements for UI/UX improvements."
    ]
  }
];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center tracking-tight">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 md:p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-teal-400 font-bold text-lg">{exp.company}</p>
                </div>
                <span className="mt-4 md:mt-0 inline-block bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                  {exp.date}
                </span>
              </div>
              <ul className="mt-4 space-y-3 relative z-10">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <span className="text-slate-300 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center tracking-tight">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-400/20 rounded-xl shadow-[0_0_15px_rgba(45,212,191,0.2)] border border-teal-400/30 mr-4">
                <GraduationCap className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">Master of Science,<br/>Computer Science</h3>
            </div>
            <p className="text-lg text-slate-200 font-semibold mb-1">Texas State University</p>
            <p className="text-slate-400 mb-6 font-medium">San Marcos, Texas</p>
            <span className="inline-block bg-teal-400/20 border border-teal-400/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
              GPA: 3.36/4
            </span>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-400/20 rounded-xl shadow-[0_0_15px_rgba(45,212,191,0.2)] border border-teal-400/30 mr-4">
                <GraduationCap className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">Bachelor of Engineering,<br/>Computer Science</h3>
            </div>
            <p className="text-lg text-slate-200 font-semibold mb-1">ITM (SLS) Baroda University</p>
            <p className="text-slate-400 mb-6 font-medium">Vadodara, India</p>
            <span className="inline-block bg-teal-400/20 border border-teal-400/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
              GPA: 7.72/10
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Data & Databases",
      icon: <Database className="w-6 h-6 text-teal-400" />,
      skills: ["MySQL", "MongoDB", "Oracle Database", "SQL Architecture"]
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      skills: ["Tableau", "Power BI", "Dashboards", "Reporting"]
    },
    {
      title: "Programming",
      icon: <Code className="w-6 h-6 text-teal-400" />,
      skills: ["Python", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Advanced Analytics",
      icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
      skills: ["Predictive Modeling", "Data Wrangling", "Statistical Analysis"]
    },
    {
      title: "Tools & Soft Skills",
      icon: <TerminalSquare className="w-6 h-6 text-teal-400" />,
      skills: ["Git/GitHub", "VS Code", "Analytical Thinking", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center tracking-tight">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <div key={index} className="glass-card rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <div className="bg-white/5 p-3 rounded-xl mr-4 border border-white/10 shadow-inner">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-900/50 border border-white/10 text-slate-300 text-sm font-medium rounded-lg shadow-sm hover:border-teal-400/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
  {
    title: "Supply Chain Intelligence Suite",
    description: [
      <li key="1"><b>Situation:</b> Global supply chain lacked visibility into localized profitability and demand shifts.</li>,
      <li key="2"><b>Action:</b> Developed an end-to-end Tableau suite integrating SQL-extracted data to visualize revenue trends and forecast demand.</li>,
      <li key="3"><b>Result:</b> Identified high-cost hotspots, providing actionable insights for strategic resource allocation.</li>
    ],
    tags: ["Tableau", "SQL", "Demand Forecasting"],
    link: "https://public.tableau.com/app/profile/madhav.limbasiya/viz/DataCoSupplyChainIntelligenceSuite/01_Performance_Pulse#1", 
    github: "https://github.com/MadhavLimbasiya"
  },
  {
    title: "Restaurant Management Analytics",
    description: [
      <li key="1"><b>Situation:</b> Inefficient manual tracking led to operational bottlenecks and delayed performance reviews.</li>,
      <li key="2"><b>Action:</b> Built an end-to-end system integrating a real-time analytics dashboard using SQL to evaluate sales, feedback sentiment, and staff performance.</li>,
      <li key="3"><b>Result:</b> Streamlined operations by 40% and improved data-driven decision-making for management.</li>
    ],
    tags: ["SQL", "Analytics", "Performance Metrics", "Full-Stack"],
    link: "https://github.com/MadhavLimbasiya", // Replace with live link if you have one deployed
    github: "https://github.com/MadhavLimbasiya"
  },
  {
    title: "Medical Image Segmentation (U-Net)",
    description: [
      <li key="1"><b>Situation:</b> Manual lesion detection in medical scans was time-intensive and prone to human error.</li>,
      <li key="2"><b>Action:</b> Built a U-Net Deep Learning model using Python and CNNs to automate gastro-intestinal segmentation.</li>,
      <li key="3"><b>Result:</b> Achieved 85% Dice accuracy, significantly accelerating the diagnostic pipeline for clinical review.</li>
    ],
    tags: ["Python", "Deep Learning", "CNNs"],
    link: "https://github.com/MadhavLimbasiya", // Replace with a link to a demo or paper if available
    github: "https://github.com/MadhavLimbasiya"
  }
];

return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center tracking-tight">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-2xl flex flex-col h-full group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>
              
              <div className="p-8 flex-grow relative z-10">
                <div className="flex justify-between items-start mb-6">
                  {/* Reduced title text size slightly to prevent awkward wrapping in 3 columns */}
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors pr-2">{project.title}</h3>
                  <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-teal-400 cursor-pointer transition-colors flex-shrink-0" />
                </div>
                
                {/* CHANGED: Replaced <p> with <ul> to support your <li> description array */}
                <ul className="text-slate-300 mb-6 text-sm leading-relaxed font-medium space-y-3">
                  {project.description}
                </ul>
              </div>

              {/* CHANGED: Added flex-col and gap-5 to stack tags and buttons */}
              <div className="px-8 pb-8 pt-0 mt-auto relative z-10 flex flex-col gap-5">
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-bold rounded-lg shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  // return (
  //   <section id="projects" className="py-20 relative">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  //       <h2 className="text-3xl font-extrabold text-white mb-12 text-center tracking-tight">Featured Projects</h2>
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //         {projects.map((project, index) => (
  //           <div key={index} className="glass-card rounded-2xl flex flex-col h-full group">
  //             <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>
              
  //             <div className="p-8 flex-grow relative z-10">
  //               <div className="flex justify-between items-start mb-6">
  //                 <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors pr-2">{project.title}</h3>
  //                 <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-teal-400 cursor-pointer transition-colors flex-shrink-0" />
  //               </div>
                
  //               <ul className="text-slate-300 mb-6 text-sm leading-relaxed font-medium space-y-3">
  //                 {project.description}
  //               </ul>
  //             </div>

  //             <div className="px-8 pb-8 pt-0 mt-auto relative z-10 flex flex-col gap-5">
                
  //               <div className="flex flex-wrap gap-2">
  //                 {project.tags.map((tag, i) => (
  //                   <span key={i} className="px-3 py-1 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-bold rounded-lg shadow-sm">
  //                     {tag}
  //                   </span>
  //                 ))}
  //               </div>

  //               {/* ONLY show buttons for the very first project (Supply Chain) */}
  //               {index === 0 && (
  //                 <div className="flex gap-3">
  //                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 bg-teal-400 text-slate-950 text-xs font-bold rounded-lg hover:bg-teal-300 transition-colors shadow-sm">
  //                     View Project
  //                   </a>
  //                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 border border-white/20 text-white text-xs font-bold rounded-lg hover:bg-white/10 transition-colors shadow-sm">
  //                     View Code
  //                   </a>
  //                 </div>
  //               )}

  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );


  // return (
  //   <section id="projects" className="py-20 relative">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  //       <h2 className="text-3xl font-extrabold text-white mb-12 text-center tracking-tight">Featured Projects</h2>
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //         {projects.map((project, index) => (
  //           <div key={index} className="glass-card rounded-2xl flex flex-col h-full group">
  //             <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>
              
  //             <div className="p-8 flex-grow relative z-10">
  //               <div className="flex justify-between items-start mb-6">
  //                 <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors pr-2">{project.title}</h3>
  //                 <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-teal-400 cursor-pointer transition-colors flex-shrink-0" />
  //               </div>
                
  //               <ul className="text-slate-300 mb-6 text-sm leading-relaxed font-medium space-y-3">
  //                 {project.description}
  //               </ul>
  //             </div>

  //             <div className="px-8 pb-8 pt-0 mt-auto relative z-10 flex flex-col gap-5">
                
  //               <div className="flex flex-wrap gap-2">
  //                 {project.tags.map((tag, i) => (
  //                   <span key={i} className="px-3 py-1 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-bold rounded-lg shadow-sm">
  //                     {tag}
  //                   </span>
  //                 ))}
  //               </div>

  //               {/* ONLY show the View Project button for the first project */}
  //               {index === 0 && (
  //                 <div className="flex gap-3">
  //                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-teal-400 text-slate-950 text-xs font-bold rounded-lg hover:bg-teal-300 transition-colors shadow-sm">
  //                     View Project
  //                   </a>
  //                 </div>
  //               )}

  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "6fe96070-18d6-49bd-b677-cec7271b3fc1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center tracking-tight">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <div className="space-y-8 glass-card p-8 md:p-10 rounded-3xl">
            <h3 className="text-3xl font-bold text-white mb-8">Let's talk about data.</h3>
            
            <div className="flex items-center space-x-5 text-slate-300">
              <div className="bg-white/5 p-3.5 rounded-xl shadow-inner border border-white/10">
                <Mail className="w-6 h-6 text-teal-400" />
              </div>
              <span className="text-lg font-medium tracking-wide">madhavlimbasiya1433@gmail.com</span>
            </div>
            
            <div className="flex items-center space-x-5 text-slate-300">
              <div className="bg-white/5 p-3.5 rounded-xl shadow-inner border border-white/10">
                <MapPin className="w-6 h-6 text-teal-400" />
              </div>
              <span className="text-lg font-medium tracking-wide">San Marcos, TX, 78666</span>
            </div>
            
            <div className="flex items-center space-x-5 text-slate-300">
              <div className="bg-white/5 p-3.5 rounded-xl shadow-inner border border-white/10">
                <Phone className="w-6 h-6 text-teal-400" />
              </div>
              <span className="text-lg font-medium tracking-wide">+1 737-424-7756</span>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-slate-500 font-bold mb-4 uppercase tracking-widest">Find me online</p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/madhav-limbasiya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 p-4 rounded-xl text-slate-300 hover:text-white hover:bg-teal-500 hover:border-teal-400 transition-all duration-300 shadow-lg border border-white/10 hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/MadhavLimbasiya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 p-4 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 shadow-lg border border-white/10 hover:-translate-y-1"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-10">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2">Name</label>
                <input required type="text" name="name" id="name" className="w-full px-5 py-4 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-slate-900/50 backdrop-blur-md shadow-inner text-white placeholder-slate-500 transition-all outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2">Email</label>
                <input required type="email" name="email" id="email" className="w-full px-5 py-4 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-slate-900/50 backdrop-blur-md shadow-inner text-white placeholder-slate-500 transition-all outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2">Message</label>
                <textarea required name="message" id="message" rows="4" className="w-full px-5 py-4 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-slate-900/50 backdrop-blur-md shadow-inner text-white placeholder-slate-500 transition-all outline-none resize-none" placeholder="How can we work together?"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-teal-400 text-slate-950 font-extrabold text-lg py-4 px-4 rounded-xl hover:bg-teal-300 transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] hover:-translate-y-1">
                Send Message
              </button>

              {result && (
                <p className={`text-center font-bold mt-4 ${result.includes("success") ? "text-teal-400" : "text-red-400"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950/80 backdrop-blur-xl py-8 text-center text-slate-500 border-t border-white/5 relative z-10">
    <p className="text-sm font-medium tracking-wide">© {new Date().getFullYear()} Madhav Limbasiya. All rights reserved.</p>
  </footer>
);

export default function App() {
  return (
    <div className="relative font-sans text-slate-200 min-h-screen selection:bg-teal-400/30 selection:text-teal-200 overflow-hidden bg-slate-950">
      
      {/* VIBRANT ANIMATED BACKGROUND BLOBS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Purple/Indigo Blob */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        {/* Bright Cyan Blob */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        {/* Rich Teal Blob */}
        <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-teal-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}