import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white">
      <HeroSection />
      <FeatureSection />
      <CtaSection />
      <OtherImportantSection />
    </div>
  );
}

/* ---------------- HERO ---------------- */

function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />

      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Shivag Store
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-300">
        A next-generation e-commerce platform built for speed, security, and
        seamless shopping.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="/signup"
          className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500 transition"
        >
          Get Started
        </a>
        <a
          href="#features"
          className="rounded-xl border border-neutral-700 px-6 py-3 text-neutral-300 hover:bg-neutral-900 transition"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */

function FeatureSection() {
  return (
    <section id="features" className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center">
        Why Choose <span className="text-indigo-400">Shivag Store</span>
      </h2>

      <p className="mt-4 text-center text-neutral-400 max-w-2xl mx-auto">
        Everything you need to sell and shop online — built with modern
        technology.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <FeatureCard
          title="Easy to Use"
          desc="A clean and intuitive interface designed for everyone."
        />
        <FeatureCard
          title="Fast Shipping"
          desc="Optimized logistics ensure lightning-fast delivery."
        />
        <FeatureCard
          title="Secure Payments"
          desc="Industry-grade security for safe and trusted transactions."
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur hover:border-indigo-500 transition">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_70%)]" />
      <h3 className="relative text-xl font-semibold">{title}</h3>
      <p className="relative mt-3 text-neutral-400">{desc}</p>
    </div>
  );
}

/* ---------------- CTA ---------------- */

function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-800 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-12 text-center backdrop-blur">
        <h2 className="text-4xl font-bold">Start Selling Smarter Today</h2>
        <p className="mt-4 text-neutral-300 text-lg">
          Launch your online store in minutes with powerful tools and analytics.
        </p>

        <a
          href="/signup"
          className="mt-8 inline-block rounded-xl bg-indigo-600 px-8 py-3 font-semibold hover:bg-indigo-500 transition"
        >
          Create Your Account
        </a>
      </div>
    </section>
  );
}

/* ---------------- EXTRA SECTION ---------------- */

function OtherImportantSection() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center">Built for the Future</h2>

      <p className="mt-6 text-center text-neutral-400 max-w-3xl mx-auto">
        Add testimonials, FAQs, analytics, AI-powered recommendations, and more.
        Shivag Store scales as your business grows.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <InfoBox title="Scalable Architecture" />
        <InfoBox title="Analytics & Insights" />
        <InfoBox title="24/7 Support" />
      </div>
    </section>
  );
}

function InfoBox({ title }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center hover:border-indigo-500 transition">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}

export default HomePage;
