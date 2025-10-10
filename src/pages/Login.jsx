export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-gray-100">
      <div className="flex flex-col gap-10 items-center p-10 rounded-2xl backdrop-blur-lg bg-white/30 [box-shadow:0_4px_10px_#a0aec0] max-w-sm w-full">
        <h1 className="text-4xl font-bold text-indigo-800 tracking-wide ">Login</h1>

        <form className="flex flex-col gap-4 w-full">
          <input
            className="bg-transparent py-2 px-4 w-full border border-gray-300 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="bg-transparent py-2 px-4 w-full border border-gray-300 rounded-md bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white py-2 px-4 rounded-md font-semibold">
            Login
          </button>
        </form>

        <p className="text-sm text-gray-700">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
