import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import Experience from '@/components/Experience'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import { motion } from 'framer-motion'
import Reveal from '@/components/Reveal'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Work Experience Section */}
      <Reveal
        as="section"
        id="experience"
        y={60}
        className="py-20 my-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60"
        aria-labelledby="experience-heading"
        threshold={0.25}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold text-apple-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-apple-600 max-w-2xl mx-auto">
              A timeline of growth, innovation, and impact across leading technology companies.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Experience 
              title="CTO" 
              company="Laurel Gaming" 
              period="10-2024 - Present"
              icon="🎮"
            >
              <ul className="space-y-3 text-apple-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Technical Leadership:</strong> Leading technological development strategy for React Native mobile gaming app (iOS/Android) with monorepo architecture, Firebase + Google Cloud backend using Node.js and Prisma with DDD/TDD principles.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Team Management:</strong> Managing multidisciplinary team (design, product, marketing, QA) ensuring efficient deliveries aligned with business goals.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>AI & Gamification:</strong> Implemented custom AI system with fine-tuning for predictive notifications and robust gamification system, significantly improving user retention.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Game Development:</strong> Built games with MatterJs graphics engine and native element rendering with React Native Skia.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Business Impact:</strong> Contributed to App Store positioning and increased app listing value while reducing user inactivity through personalized AI-generated notifications.</span>
                </li>
              </ul>
            </Experience>

            <Experience 
              title="Systems Architect" 
              company="Enterprise LLM Multi-Agent Platform" 
              period="04-2024 - Present"
              icon="🤖"
            >
              <ul className="space-y-3 text-apple-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>On-Prem LLM Infrastructure:</strong> Designed a secure, self-managed LLM platform ensuring data sovereignty and compliance.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Multi-Agent Orchestration:</strong> Built a specialized agent system for ERP/CRM operations through a natural language interface.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>RAG Pipelines:</strong> Implemented guardrails and retrieval pipelines for context-aware, role-based responses.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Impact:</strong> Reduced data retrieval time by 70% while increasing adoption of ERP/CRM features.</span>
                </li>
              </ul>
            </Experience>

            <Experience 
              title="Full Stack Developer - Team Lead (Freelance)" 
              company="Fundecyt PCTEX" 
              period="04-2024 - Present"
              icon="🏢"
            >
              <ul className="space-y-3 text-apple-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Scrum Master:</strong> Leading integration of developers into Scrum and Kanban methodologies, fostering structured workflow within monorepository architecture.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Mobile Development:</strong> Spearheaded React Native apps for employee work hour tracking and project management visualization across teams.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Integration Expert:</strong> Integrated external tools (Jira, Tempo, Synergy, Microsoft Teams) and automated deployment with Docker and Bitbucket.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Architecture:</strong> Championed REST APIs, Clean Code practices, SOLID principles, reducing resource expenditure significantly.</span>
                </li>
              </ul>
            </Experience>

            <Experience 
              title="Full Stack Developer" 
              company="Grupo Blendio" 
              period="09-2023 - 10-2024"
              icon="💼"
            >
              <ul className="space-y-3 text-apple-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Multi-Platform Development:</strong> Led development of Bitool, SalesTool, Blendio Logistics, and PostSales solutions using Laravel 10, Livewire, Alpine.js, and React Native.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Mobile Apps at Scale:</strong> Developed 4 React Native/Expo apps serving 10.000+ employees with custom "Over The Air" real-time update system.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>API Gateway Architecture:</strong> Built company's Intranet as central API Gateway with Laravel Passport, managing permissions, usage statistics, and error tracking.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Advanced Patterns:</strong> Implemented Hexagonal Architecture, DDD, Clean Code, and Component-Oriented Programming with Scrum-Ban methodology.</span>
                </li>
              </ul>
            </Experience>

            <Experience 
              title="Full Stack Developer" 
              company="WealtyApp" 
              period="01-2023 - 06-2023"
              icon="💰"
            >
              <ul className="space-y-3 text-apple-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>FinTech Platform:</strong> Led complete WealtyApp platform development including business interfaces, admin panel, mobile apps, and landing pages.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Payment Systems:</strong> Integrated MangoPay and Tink for secure payment processing and transaction tracking across web and mobile platforms.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>React Ecosystem:</strong> Built flexible, reusable components with Redux Toolkit state management and automated Firebase deployment for iOS/Android.</span>
                </li>
              </ul>
            </Experience>

            <Experience 
              title="Full Stack Developer (Freelance)" 
              company="IoT Home Automation Mobile App" 
              period="2020 - 2021"
              icon="🏡"
            >
              <ul className="space-y-3 text-apple-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Smart Home Control:</strong> Built a React Native app to monitor and control IoT devices (lights, sensors, AC, blinds, irrigation) in real time.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Native Integrations:</strong> Leveraged device APIs for low-latency interactions and optimized performance.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Security:</strong> Implemented secure communication and data handling for home automation workflows.</span>
                </li>
              </ul>
            </Experience>

            <Experience 
              title="Freelance Full Stack Developer" 
              company="Various Clients" 
              period="2018 - 2024"
              icon="🚀"
            >
              <ul className="space-y-3 text-apple-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>ERP Systems:</strong> Developed comprehensive ERP for Celmet S.L. with signature system, payment processing, and invoice generation using Laravel and REST APIs.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Sports Management:</strong> Led development of competition management applications for tennis, cycling, and racing with advanced design patterns.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Restaurant Platform:</strong> Project Manager & Developer for Next.js/React Native restaurant management system with Java SpringBoot API (Universidad de Extremadura research).</span>
                </li>
              </ul>
            </Experience>
          </div>
        </div>
  </Reveal>

      {/* Skills Section */}
      <SkillsSection />

      {/* Key Achievements Section */}
      <Reveal
        as="section"
        id="achievements"
        y={60}
        className="py-20 my-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60"
        aria-labelledby="achievements-heading"
        threshold={0.25}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="achievements-heading" className="text-4xl md:text-5xl font-bold text-apple-900 mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-apple-600 max-w-2xl mx-auto">
              Transforming businesses through technology leadership and innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🤖",
                title: "LLM Multi-Agent Platform",
                description: "Designed on-premise LLM infrastructure with multi-agent orchestration and RAG pipelines for ERP/CRM operations.",
                color: "from-blue-500 to-purple-600"
              },
              {
                icon: "📈",
                title: "Scaled 10K+ Users",
                description: "Delivered mobile platforms and OTA updates serving thousands of users across enterprise environments.",
                color: "from-green-500 to-blue-500"
              },
              {
                icon: "🏗️",
                title: "Monorepo & Microservices",
                description: "Built scalable monorepo architectures that improved collaboration and deployment velocity.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "⚡",
                title: "Performance Optimization",
                description: "Reduced deployment time by 60% and elevated app responsiveness with clean architecture practices.",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "🎮",
                title: "Game Engine Integration",
                description: "Shipped high-performance game experiences using MatterJs and React Native Skia.",
                color: "from-teal-500 to-cyan-500"
              },
              {
                icon: "💰",
                title: "FinTech & Payments",
                description: "Integrated MangoPay and Tink for secure transactions across web and mobile channels.",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-apple text-center relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color}`}></div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                >
                  {achievement.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-apple-900 mb-3">{achievement.title}</h3>
                <p className="text-apple-600 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
  </Reveal>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Education Section */}
      <Reveal
        as="section"
        id="education"
        y={60}
        className="py-20 my-8 bg-gradient-to-br from-apple-50 to-blue-50 rounded-2xl shadow-xl border border-white/60"
        aria-labelledby="education-heading"
        threshold={0.25}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="education-heading" className="text-4xl md:text-5xl font-bold text-apple-900 mb-4">
              Education & Learning
            </h2>
            <p className="text-xl text-apple-600 max-w-2xl mx-auto">
              Continuous learning and growth through formal education and self-directed study.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Universidad de Extremadura",
                subtitle: "Software Engineering (2019 - 2024)",
                description: "Research project BigData I3Lab (Quercus). Specialized in Python, Java, design patterns, UX, databases, testing, algorithms, and LLM foundations.",
                icon: "🎓",
                color: "from-blue-500 to-purple-600"
              },
              {
                title: "International University of Valencia",
                subtitle: "AI & Data Science Engineering (2025 - Present)",
                description: "Advanced studies in AI, data science, and engineering, focused on applied machine learning, analytics, and scalable systems.",
                icon: "🧠",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Independent Research & Self-Learning",
                subtitle: "Continuous Mastery",
                description: "Autodidact focus on Laravel, Next.js, React Native, DDD/TDD, cybersecurity, cloud platforms, and automation workflows.",
                icon: "📚",
                color: "from-green-500 to-blue-500"
              }
            ].map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-apple text-center relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`}></div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                >
                  {edu.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-apple-900 mb-2">{edu.title}</h3>
                <h4 className="text-blue-600 font-semibold mb-3">{edu.subtitle}</h4>
                <p className="text-apple-600 leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-apple-900 mb-8">Languages</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Spanish", level: "Native", flag: "🇪🇸" },
                { name: "English", level: "Fluent", flag: "🇺🇸" },
                { name: "Portuguese", level: "Fluent", flag: "🇵🇹" }
              ].map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-apple-200 shadow-sm hover:shadow-md transition-all duration-200 min-w-[120px]"
                >
                  <div className="text-2xl mb-2">{language.flag}</div>
                  <div className="font-semibold text-apple-900">{language.name}</div>
                  <div className="text-sm text-apple-600">{language.level}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
  </Reveal>
    </Layout>
  )
}
