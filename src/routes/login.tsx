import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div className="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto flex flex-col justify-start">
      <div className="flex flex-col justify-center items-center h-full">
        <main className="text-neutral-100 text-center">
          <div className="mt-10 grid grid-cols-1 gap-y-8">
            <div>
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-sm"
                placeholder="john@doe.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-sm"
                placeholder="password"
              />
            </div>
            <button className="py-2 bg-blue-500 rounded-md">Login</button>
          </div>
        </main>
      </div>
    </div>
  );
}
