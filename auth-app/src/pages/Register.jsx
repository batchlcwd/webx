import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-gray-900 text-white px-6">
      {/* Card */}
      <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center">
          Create an Account
        </h1>
        <p className="text-gray-300 text-center mt-2">
          Sign up to begin your journey
        </p>

        {/* Form */}
        <form className="mt-10 space-y-6">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-cyan-400 outline-none"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email Address</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-purple-400 outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-cyan-400 outline-none"
              placeholder="••••••••"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="text-sm text-gray-300">Date of Birth</label>
            <input
              type="date"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-purple-400 outline-none"
            />
          </div>

          {/* City */}
          <div>
            <label className="text-sm text-gray-300">City</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-cyan-400 outline-none"
              placeholder="Mumbai, Delhi, etc."
            />
          </div>

          {/* Other */}
          <div>
            <label className="text-sm text-gray-300">Other Information</label>
            <textarea
              rows="3"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-purple-400 outline-none"
              placeholder="Any additional details..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        {/* Social Login */}
        <div className="space-y-4">
          <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition">
            Continue with Google
          </button>
          <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition">
            Continue with GitHub
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-gray-400 text-sm mt-8">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
