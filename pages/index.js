import Layout from '@/components/Layout'
import Experience from '@/components/Experience'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <section className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2"
        >
          Nicolas Lopez de Lerma Lopez
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Full Stack Developer &amp; Technology Leader with extensive experience in mobile and web development. I create scalable solutions with a keen eye for detail and user experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <Experience title="CTO" company="Laurel Gaming" period="10-2024 - Present">
          <ul className="list-disc list-inside space-y-1">
            <li>Led mobile app development using React Native with monorepo architecture.</li>
            <li>Implemented predictive notifications and gamification to improve engagement.</li>
            <li>Oversaw admin panel and landing built with Next.js.</li>
          </ul>
        </Experience>
        <Experience title="Full Stack Developer - Team Lead" company="Fundecyt PCTEX" period="04-2024 - Present">
          <ul className="list-disc list-inside space-y-1">
            <li>Developed employee management tools with Laravel and React Native.</li>
            <li>Introduced REST APIs and clean code practices to improve productivity.</li>
          </ul>
        </Experience>
        <Experience title="Full Stack Developer" company="Grupo Blendio" period="09-2023 - 10-2024">
          <ul className="list-disc list-inside space-y-1">
            <li>Created management tools and mobile apps with Laravel and React Native.</li>
            <li>Implemented OTA updates and secure API Gateway for 600+ employees.</li>
          </ul>
        </Experience>
        <Experience title="Full Stack Developer" company="WealtyApp" period="01-2023 - 06-2023">
          <ul className="list-disc list-inside space-y-1">
            <li>Led platform development with Next.js and React Native.</li>
            <li>Integrated payment systems and automated deployments.</li>
          </ul>
        </Experience>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Universidad de Extremadura - Computer Software Engineering</h3>
            <p className="text-sm text-gray-500">Research project BigData I3Lab, focus on Python, Java, UX, databases and algorithms.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Autodidact</h3>
            <p className="text-sm text-gray-500">Self-learning various languages and frameworks including Laravel, Next.js, React Native and more.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">I.E.S Maestro Domingo Cáceres - Bachelor of Science</h3>
            <p className="text-sm text-gray-500">Specialization in Mathematics and Physics.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
