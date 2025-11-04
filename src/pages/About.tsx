import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-animated text-gray-800 py-16 px-6 animate-fadeIn">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ===== ABOUT THE WEBSITE ===== */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">
            About This Website
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Website ini dibuat sebagai latihan dalam memahami{" "}
            <strong>React Router</strong> dan penggunaan{" "}
            <strong>NavLink</strong> untuk navigasi halaman secara dinamis.
            Proyek ini bertujuan membantu pengguna mempelajari konsep routing,
            komponen, dan desain antarmuka modern menggunakan{" "}
            <strong>Tailwind CSS</strong>.
          </p>
        </section>

        {/* ===== ABOUT THE DEVELOPER ===== */}
        <section
          className="relative bg-white/70 backdrop-blur-xl border border-blue-200 shadow-xl rounded-3xl 
          p-10 md:p-14 transition-transform duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* FOTO PROFIL */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-blue-400/40 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <img
                src="/picture.jpeg"
                alt="Foto Mahasiswa"
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-blue-400 shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* DESKRIPSI PROFIL */}
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-blue-700">
                Brainer Keneth Mundung
              </h2>

              <div className="flex flex-col items-center md:items-start text-gray-700 space-y-1">
                <p><strong>ID / NIM:</strong> 105022310127</p>
                <p><strong>Jurusan:</strong> Informatika</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Halo! Saya seorang <strong>Front-End Developer</strong> yang
                menyukai teknologi web modern seperti React dan Tailwind CSS.  
                Saya membuat proyek ini untuk mengasah keterampilan saya dalam
                membangun antarmuka interaktif, kreatif, dan efisien.
              </p>

              {/* SKILLS */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-3">
                {["React", "Tailwind CSS", "JavaScript", "Git & GitHub"].map(
                  (skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-100 to-sky-200 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium shadow 
                      hover:scale-110 hover:from-blue-200 hover:to-sky-300 hover:shadow-lg transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              {/* KONTAK */}
              <div className="pt-6 space-y-2 text-sm md:text-base">
                <p>
                  🌐 <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/BrainerM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 hover:underline transition"
                  >
                    github.com/BrainerM
                  </a>
                </p>
                <p>
                  💼 <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://linkedin.com/in/Brainer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 hover:underline transition"
                  >
                    linkedin.com/in/Brainer
                  </a>
                </p>
                <p>
                  📧 <strong>Email:</strong>{" "}
                  <a
                    href="mailto:BrainerMundung@gmail.com"
                    className="text-blue-700 hover:text-blue-900 hover:underline transition"
                  >
                    BrainerMundung@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
