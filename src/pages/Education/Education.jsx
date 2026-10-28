import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
  ExternalLink,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  education as educationData,
  achievements,
  certificates,
} from "@/data/portfolio";

const isImage = (file) => /\.(png|jpe?g|webp|gif|svg)$/i.test(file || "");

const CertificateCard = ({ cert }) => {
  const href = cert.link || cert.file;
  const hasImage = isImage(cert.file);

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-blue-400/20 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-teal-500 hover:scale-[1.02]">
      {hasImage ? (
        <a
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white"
        >
          <img
            src={cert.file}
            alt={`${cert.title} certificate`}
            loading="lazy"
            className="w-full aspect-[4/3] object-contain"
          />
        </a>
      ) : (
        <div className="flex items-center justify-center aspect-[4/3] bg-gradient-to-br from-blue-500/10 via-teal-500/10 to-purple-500/10">
          {cert.file ? (
            <FileText className="w-14 h-14 text-teal-400" />
          ) : (
            <Award className="w-14 h-14 text-teal-400" />
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
        <p className="text-sm text-gray-400">
          {cert.issuer}
          {cert.date ? ` · ${cert.date}` : ""}
        </p>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
          >
            {cert.link
              ? "View credential"
              : isImage(cert.file)
              ? "View certificate"
              : "View PDF"}
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden pt-40 pb-28 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Education & Certifications
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            My academic background, achievements and certifications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                {edu.description && (
                  <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                    {edu.description}
                  </p>
                )}

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(edu.skills || []).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Trophy className="w-7 h-7 text-yellow-400" />
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-yellow-500/20 bg-gray-900/50 backdrop-blur-sm p-6 hover:border-yellow-400/50 transition-colors"
              >
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="text-sm text-gray-400 mt-2">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-24" id="certificates">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <BadgeCheck className="w-7 h-7 text-teal-400" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <CertificateCard key={`${cert.title}-${cert.issuer}-${i}`} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
