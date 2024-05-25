import { Link, createFileRoute } from "@tanstack/react-router";

import { BG_COLORS, TEXT_COLORS } from "@/config/constant";
import { habitData, type habit } from "@/data/habbit";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import dayjs from "dayjs";
import { useMemo } from "react";

export const Route = createFileRoute("/detail/$habitId")({
  component: DetailHabit,
});

function DetailHabit() {
  const { habitId } = Route.useParams();

  const getDetail = (item: string | undefined): habit | undefined => {
    if (item !== undefined) {
      return habitData[item];
    }
    return undefined;
  };

  const habitDetail = useMemo(() => getDetail(habitId), [habitId]);

  return (
    <div className="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto flex flex-col justify-between">
      <main>
        {/* <!-- header --> */}
        <section
          className={clsx(
            "flex justify-between h-20 px-5",
            habitDetail !== undefined ? BG_COLORS[habitDetail.color] : null
          )}
        >
          <div className="flex items-center">
            <div className="w-12 h-12 flex bg-neutral-200 items-center justify-center rounded-full">
              <BookOpenIcon
                className={clsx(
                  "w-8",
                  habitDetail !== undefined
                    ? TEXT_COLORS[habitDetail.color]
                    : null
                )}
              />
            </div>
            <span className="ml-3 text-2xl font-bold text-neutral-200">
              {habitDetail !== undefined ? habitDetail.title.toUpperCase() : ""}
            </span>
          </div>
          <button>
            <Link to="/">
              <XCircleIcon className="h-8 text-neutral-100" />
            </Link>
          </button>
        </section>

        {/* <!-- section 1 --> */}
        <section className="p-4">
          <div className="rounded-xl bg-zinc-700 px-2 py-3 grid grid-cols-3 mb-4">
            <div className="border-r pr-1 border-neutral-600 flex flex-col items-center">
              <p className="text-rose-500 font-bold">
                {dayjs().format("MMM DD, YYYY")}
              </p>
              <p className="text-neutral-400 text-xs">STARTED</p>
            </div>
            <div className="border-r border-neutral-600 flex flex-col items-center">
              <p className="text-rose-500 font-bold">1x</p>
              <p className="text-neutral-400 text-xs">PER DAY</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-rose-500 font-bold">7 days</p>
              <p className="text-neutral-400 text-xs">PER WEEK</p>
            </div>
          </div>

          {/* <!-- section 2 --> */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="rounded-xl bg-zinc-700 py-2 px-3">
              <p className="text-neutral-200 font-bold">Score</p>
              <p className="text-rose-500 mt-4">LINE GRAPH</p>
            </div>
            <div className="rounded-xl bg-zinc-700 py-2 px-3">
              <p className="text-neutral-200 font-bold">Best Day</p>
              <p className="text-rose-500 mt-4">BAR GRAPH</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="rounded-xl bg-zinc-700 py-2 px-3">
              <p className="text-neutral-200 font-bold mb-4">Goal Reached</p>
              <span className="text-rose-500 font-bold text-4xl">263</span>
              <span className="text-neutral-200 ml-1 text-xl font-bold">
                days
              </span>
            </div>
            <div className="rounded-xl bg-zinc-700 py-2 px-3">
              <p className="text-neutral-200 font-bold mb-4">Daily Average</p>
              <span className="text-rose-500 font-bold text-4xl">0.9</span>
              <span className="text-neutral-200 ml-1 text-xl font-bold">
                times
              </span>
            </div>
          </div>

          {/* <!-- section 4: calendar --> */}
          <div className="rounded-xl bg-zinc-700 py-3 px-4 mb-4 h-56">
            <p className="text-neutral-200 font-bold mb-4">Calendar</p>
          </div>
        </section>
      </main>

      {/* <!-- footer save button --> */}
      <div className="px-4 pt-4 pb-8 border-t border-neutral-600">
        <Link to="/edit/1">
          <button className="bg-rose-500 text-neutral-50 py-4 w-full rounded-lg mx-auto">
            EDIT
          </button>
        </Link>
      </div>
    </div>
  );
}
