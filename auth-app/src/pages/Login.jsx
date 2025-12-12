import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-gray-900 text-white px-6">
      {/* Card */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center">Welcome Back</h1>
        <p className="text-gray-300 text-center mt-2">
          Login to access your account
        </p>

        {/* Form */}
        <form className="mt-10 space-y-6">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-cyan-400 outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-purple-400 outline-none"
              placeholder="••••••••"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        {/* Social Buttons */}
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
          Don't have an account?{" "}
          <a href="/signup" className="text-cyan-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
