import { motion } from "framer-motion";

const SkillProgress = ({ percentage, skillIcon }) => {
  const radius = 40; // Jari-jari lingkaran
  const circumference = 2 * Math.PI * radius; // Keliling lingkaran
  const progressOffset = circumference - (percentage / 100) * circumference; // Hitung progress


  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background Lingkaran */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb" // Warna abu-abu untuk background
          strokeWidth="8"
          fill="transparent"
        />
        {/* Progress Lingkaran */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="rgb(59, 130, 246)" // Warna biru
          strokeWidth="8"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference} // Mulai dari 0
          animate={{ strokeDashoffset: progressOffset }} // Animasi berjalan ke progress
          transition={{ duration: 3, ease: "easeOut" }} // Durasi animasi
        />
      </svg>

      {/* Ikon Skill di Tengah */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="text-2xl">
        {skillIcon}
        </div>
        <div className="text-xs">
        {percentage}
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;
