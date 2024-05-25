import { Link, createFileRoute } from "@tanstack/react-router";

import {
  MinusCircleIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

export const Route = createFileRoute("/setting/sort")({
  component: SortItem,
});

function SortItem() {
  return (
    <div className="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto py-4 pl-2 pr-4">
      {/* <!-- header --> */}
      <header className="flex justify-between mb-6">
        <Link to="/setting" className="flex items-center">
          <ChevronLeftIcon className="h-8 text-neutral-100 mr-2" />
          <span className="text-zinc-100 text-xl">Settings</span>
        </Link>
        <div>
          <span className="text-zinc-100 text-xl">Done</span>
        </div>
      </header>

      {/* <!-- main --> */}
      <main className="pl-2">
        {/* <!-- title --> */}
        <h2 className="text-4xl text-zinc-100 font-bold mb-4">Sort Habits</h2>

        {/* <!-- sort item --> */}
        <div className="rounded-xl bg-zinc-700 pl-4 py-2">
          <div className="flex py-1">
            <MinusCircleIcon className="h-8 text-red-500 mr-2 mb-3" />
            <div className="flex justify-between w-full items-center border-b border-neutral-600 pb-3">
              <p className="text-zinc-100 text-xl">Read</p>
              <ChevronDownIcon className="h-8 text-red-500 pr-4" />
            </div>
          </div>
          <div className="flex py-1">
            <MinusCircleIcon className="h-8 text-red-500 mr-2 mb-3" />
            <div className="flex justify-between w-full items-center border-b border-neutral-600 pb-3">
              <p className="text-zinc-100 text-xl">Code</p>
              <div className="flex">
                <ChevronUpIcon className="h-8 text-red-500 pr-4" />
                <ChevronDownIcon className="h-8 text-red-500 pr-4" />
              </div>
            </div>
          </div>
          <div className="flex py-1">
            <MinusCircleIcon className="h-8 text-red-500 mr-2 mb-3" />
            <div className="flex justify-between w-full items-center border-b border-neutral-600 pb-3">
              <p className="text-zinc-100 text-xl">Workout</p>
              <div className="flex">
                <ChevronUpIcon className="h-8 text-red-500 pr-4" />
                <ChevronDownIcon className="h-8 text-red-500 pr-4" />
              </div>
            </div>
          </div>
          <div className="flex py-1">
            <MinusCircleIcon className="h-8 text-red-500 mr-2" />
            <div className="flex justify-between w-full items-center">
              <p className="text-zinc-100 text-xl">Learn Spanish</p>
              <ChevronUpIcon className="h-8 text-red-500 pr-4" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
