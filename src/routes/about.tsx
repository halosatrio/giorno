import { ChevronLeftIcon, HeartIcon } from "@heroicons/react/24/solid";

import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto px-4 pt-4">
      <div className="flex flex-col justify-between h-full">
        {/* <!-- header --> */}
        <header className="flex justify-between mb-6 -ml-2">
          <Link to="/setting" className="flex items-center">
            <ChevronLeftIcon className="h-8 text-neutral-100 mr-2" />
            <span className="text-zinc-100 text-xl">Settings</span>
          </Link>
        </header>

        <main className="text-neutral-100 text-center">
          i build this app to practice and to replace my main habit tracker
          apps. thanks to Forte - habit tracker apps by Collin Daugherty
        </main>

        {/* <!-- footer --> */}
        <footer className="px-4 pt-4 pb-8">
          <p className="text-neutral-50 text-center text-sm font-bold">
            CREATED WITH <HeartIcon className="h-4 text-rose-600 inline" /> BY
            <a
              href="https://bayubit.dev"
              target="_blank"
              className="text-sky-500"
            >
              {" "}
              SATRIO BAYU
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
