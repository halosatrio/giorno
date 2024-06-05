import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const apiUrl = import.meta.env.VITE_BASE_API_URL;

  const { mutate: triggerLogin } = useMutation({
    mutationFn: () =>
      axios.post(`${apiUrl}/auth`, {
        email: email,
        password: password,
      }),
    onSuccess: () =>
      navigate({
        to: "/",
      }),
  });

  return (
    <div className="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto flex flex-col justify-start">
      <div className="flex flex-col justify-center items-center h-full">
        <main className="text-neutral-100 text-center">
          <div className="mt-10 grid grid-cols-1 w-72 gap-y-8">
            <div>
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="w-full border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-sm"
                placeholder="john@doe.com"
                onChange={(e) => setEmail(e.target.value)}
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
                className="w-full border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-sm"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="py-2 bg-blue-500 rounded-md"
              onClick={() => triggerLogin()}
            >
              Login
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/login")({
  component: Login,
});
