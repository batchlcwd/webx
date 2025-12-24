import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-900 text-white">
      {/* ------------------- HERO SECTION ------------------- */}
      <section className="px-6 py-24 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Welcome to
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            {" "}
            AuthVerse
          </span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A futuristic authentication platform designed with next-gen UI,
          ultra-secure access, and lightning-fast performance.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/login"
            className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 text-cyan-300 rounded-xl hover:bg-cyan-500/30 transition"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-6 py-3 bg-purple-500/20 border border-purple-400 text-purple-300 rounded-xl hover:bg-purple-500/30 transition"
          >
            Sign Up
          </a>
        </div>
      </section>

      {/* ------------------- FEATURES SECTION ------------------- */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why AuthVerse?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Next-Gen UI",
              desc: "A clean futuristic design with neon accents and smooth gradients.",
            },
            {
              title: "Ultra Secure",
              desc: "Advanced JWT, OAuth, and encryption to keep data 100% safe.",
            },
            {
              title: "Fast & Reliable",
              desc: "Optimized authentication requests with near-zero latency.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------- HOW IT WORKS SECTION ------------------- */}
      <section className="px-6 md:px-20 py-20 bg-neutral-950/40">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Create your account in seconds.",
            "Login using email or social providers.",
            "Access dashboard with futuristic UI.",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-xl border border-white/10 text-center"
            >
              <h4 className="text-5xl font-extrabold text-purple-400 mb-4">
                {i + 1}
              </h4>
              <p className="text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------- SECURITY SECTION ------------------- */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Security You Can Trust
          </h2>
          <p className="text-gray-300">
            Built with industry-leading authentication standards, multi-layer
            encryption, bot protection, OAuth2, and more — ensuring your data is
            protected at all times.
          </p>
        </div>
      </section>

      {/* ------------------- CTA SECTION ------------------- */}
      <section className="px-6 md:px-20 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Join thousands of users already using AuthVerse to manage their
          authentication securely.
        </p>

        <a
          href="/signup"
          className="inline-block mt-8 px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          Get Started
        </a>
      </section>



      {/* ------------------- FOOTER ------------------- */}
      <footer className="py-6 text-center text-gray-400 border-t border-white/10">
        <p>© {new Date().getFullYear()} AuthVerse. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
