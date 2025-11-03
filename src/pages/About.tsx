import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ===== ABOUT THE WEBSITE ===== */}
        <section className="text-center animate-fadeIn">
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
        <section className="relative bg-white/60 backdrop-blur-xl border border-blue-200 shadow-xl rounded-3xl p-10 md:p-14 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* FOTO PROFIL */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 opacity-70 blur-md group-hover:opacity-90 transition duration-500"></div>
              <img
                src="/picture.jpeg"
                alt="Foto Pembuat Website"
                className="relative w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* DESKRIPSI PROFIL */}
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-blue-700 animate-slideUp">
                Brainer Mundung
              </h2>
              <p className="text-gray-700 leading-relaxed animate-fadeIn delay-100">
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
                      className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium shadow hover:from-blue-200 hover:to-blue-300 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              {/* KONTAK */}
              <div className="pt-6 space-y-2 text-sm md:text-base animate-fadeIn delay-200">
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
                    href="BrainerMundung@email.com"
                    className="text-blue-700 hover:text-blue-900 hover:underline transition"
                  >
                    BrainerMundung@Gmail.com
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
