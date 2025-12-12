import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-900 text-white px-6 py-28">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            AuthVerse
          </span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          A futuristic authentication platform engineered to deliver secure,
          reliable, and next-gen user experiences.
        </p>
      </div>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto mt-20 grid md:grid-cols-2 gap-10">
        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-cyan-300">Our Mission</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            At AuthVerse, our mission is to redefine the future of user
            authentication by combining futuristic UI with ultra-secure backend
            technology. Whether you’re logging in or signing up, every action
            should feel smooth, modern, and lightning-fast.
          </p>
        </div>

        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-purple-300">
            Why We Built This
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Traditional auth systems feel outdated and slow. We built AuthVerse
            to provide a premium experience—quick authentication, clean UI,
            strong encryption, and zero-compromise security.
          </p>
        </div>
      </section>

      {/* Features / Highlights */}
      <section className="max-w-5xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Makes AuthVerse Different?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Next-Gen UI",
              desc: "Neon accents, glassmorphism, responsive layouts, and a modern futuristic aesthetic.",
            },
            {
              title: "Built for Developers",
              desc: "Simple integration, flexible APIs, and clean architecture that scales.",
            },
            {
              title: "Security First",
              desc: "Modern encryption, OAuth, JWT, bot protection, and zero-trust authentication.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-300">{f.title}</h3>
              <p className="text-gray-300 mt-3">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-5xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          To empower developers and users with an authentication system that is
          fast, futuristic, secure, and effortless. We believe the future of web
          authentication should be elegant—not complicated.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center mt-24">
        <h2 className="text-4xl font-bold">Ready to Join AuthVerse?</h2>
        <p className="text-gray-300 mt-3">
          Experience the next era of authentication today.
        </p>
        <a
          href="/signup"
          className="inline-block mt-8 px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:opacity-90 transition text-white"
        >
          Get Started Now
        </a>
      </section>
    </div>
  );
}

export default About;
