import { Link, createFileRoute } from "@tanstack/react-router";

import { XCircleIcon } from "@heroicons/react/24/outline";
import {
  RectangleStackIcon,
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export const Route = createFileRoute("/setting/")({
  component: Setting,
});

function Setting() {
  return (
    <div className="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto px-4 pt-6">
      <header className="flex justify-between mb-8">
        {/* <!-- title --> */}
        <h2 className="text-4xl text-zinc-100 font-bold">Settings</h2>

        <Link to="/">
          <XCircleIcon className="h-8 text-neutral-100 mr-2" />
        </Link>
      </header>

      {/* <!-- main --> */}
      <main>
        <div className="rounded-xl bg-zinc-700 pl-4 py-4">
          <Link to="/setting/sort" className="flex w-full mb-4">
            <div className="w-8 h-8 bg-zinc-500 mr-3 rounded-md p-1">
              <RectangleStackIcon className="h-6 text-zinc-100" />
            </div>
            <div className="flex justify-between w-full items-center border-b border-neutral-600 pb-4 mt-0.5">
              <p className="text-zinc-100 text-xl">Sort Habits</p>
              <ChevronRightIcon className="h-7 text-zinc-100 pr-2" />
            </div>
          </Link>
          <Link to="/about" className="flex w-full">
            <div className="w-8 h-8 bg-zinc-500 mr-3 rounded-md p-1">
              <InformationCircleIcon className="h-6 text-zinc-100" />
            </div>
            <div className="flex justify-between w-full items-center mt-0.5">
              <p className="text-zinc-100 text-xl">About</p>
              <ChevronRightIcon className="h-7 text-zinc-100 pr-2" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
