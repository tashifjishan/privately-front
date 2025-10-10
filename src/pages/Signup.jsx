export default function Signup() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-gray-100">
      <div className="flex flex-col gap-10 items-center p-10 rounded-2xl backdrop-blur-lg bg-white/30 [box-shadow:0_4px_10px_#a0aec0] max-w-sm w-full">
        <h1 className="text-3xl font-bold text-indigo-500">SIGN UP</h1>

        <form className="flex flex-col gap-4">
          <input
            className="bg-transparent border-[1px] border-white focus:outline-indigo-500 py-2 px-4 w-72 border-[1px] rounded-lg"
            type="text"
            name="name"
            placeholder="Full Name"
          />


          <input
            className="bg-transparent border-[1px] border-white focus:outline-indigo-500 py-2 px-4 w-72 border-[1px] rounded-lg"
            type="email"
            name="email"
            placeholder="Email Address"
          />

          <input
            className="bg-transparent border-[1px] border-white focus:outline-indigo-500 py-2 px-4 w-72 border-[1px] rounded-lg"
            type="email"
            name="email"
            placeholder="Phone"
          />

          <input
            className="bg-transparent border-[1px] border-white focus:outline-indigo-500 py-2 px-4 w-72 border-[1px] rounded-lg"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg">
            Signup
          </button>
        </form>

        <p>
         Already Have an account?{" "}
          <a className="text-indigo-500 underline">Login</a>
        </p>
      </div>
    </div>
  );
}
