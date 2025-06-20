// src/App.jsx
import React from 'react';
import './App.css'; // Import your Tailwind CSS styles

function App() {
  return (
    <div className="bg-dark text-light font-sans">

      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-petronas">Hi, I'm Tristan Nafi Agung Kurniawan</h1>
        <p className="mt-4 text-lg text-gray-300">Data Science Enthusiast | Software Developer | Computer Science Student</p>
      </section>

      {/* About Me */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-20">
        <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-xl">
          <img src="/your-photo.png" alt="Your photo" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#4F46E5] mb-4">| About Me</h2>
          <p className="text-gray-300 mb-4">
            I'm Tristan, an undergraduate in Computer Science deeply passionate about Data Science and Software Development. I'm fascinated by the intersection of machine learning, clean code, and real-world impact.
          </p>
          <p className="text-gray-300 mb-4">
            Over the last 3+ years, I’ve worked with
            <a href="#" className="text-indigo-500 hover:underline"> React/Vite</a>,
            <a href="#" className="text-blue-500 hover:underline"> Next.js</a>,
            <a href="#" className="text-cyan-500 hover:underline"> Tailwind CSS</a>, and
            <a href="#" className="text-purple-500 hover:underline"> T3 Stack</a>, building modern, fast, and scalable applications.
          </p>
          <p className="text-gray-300 mb-6">
            Outside of coding, I enjoy contributing to developer communities, exploring AI trends, and continuously learning new tech tools.
          </p>
          <a href="https://drive.google.com/file/d/YOUR_CV_ID/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-block border border-indigo-500 text-indigo-500 px-6 py-2 rounded-full hover:bg-indigo-500 hover:text-white transition">
            CV Download
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-petronas mb-12 text-center">Skills & Tools</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative flex-1 overflow-hidden">
              <div className="flex animate-scroll gap-6 whitespace-nowrap">
                <span className="skill-item">Python</span>
                <span className="skill-item">Pandas</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">React</span>
                <span className="skill-item">Tailwind CSS</span>
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Git & GitHub</span>
                <span className="skill-item">SQL</span>
                <span className="skill-item">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-petronas mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
              <img src="project1.jpg" alt="Feedback AI" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-petronas">Performance & Feedback AI</h3>
                <p className="mt-2 text-gray-300 text-sm">
                  A performance management app with AI-powered analysis for employee feedback. Built with React, Tailwind, and a custom LLM backend.
                </p>
                <a href="#" className="inline-block mt-4 text-petronas hover:underline text-sm">View Project →</a>
              </div>
            </div>
            <div className="bg-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
              <img src="project2.jpg" alt="Nutrition Vision" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-petronas">Nutrition Vision</h3>
                <p className="mt-2 text-gray-300 text-sm">
                  A computer vision tool that identifies raw ingredients from webcam input and returns nutritional composition. Uses TensorFlow, FastAPI, and OpenCV.
                </p>
                <a href="#" className="inline-block mt-4 text-petronas hover:underline text-sm">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-dark text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-petronas mb-6">Let's Connect</h2>
          <p className="text-gray-300 mb-8">
            Whether it's a collaboration, project, or just a chat—feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 text-light text-lg">
            <a href="mailto:tristan.nafi@example.com" className="contact-link">Email</a>
            <a href="https://linkedin.com/in/tristan-nafi" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
            <a href="https://github.com/tristan-nafi" target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500 bg-dark">
        © 2025 Tristan Nafi Agung Kurniawan. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
