import Modal from "@/components/Modal";
import { TEXT_COLORS } from "@/config/constant";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import {
  ArrowPathRoundedSquareIcon,
  FireIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
import { Link, createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { useState } from "react";
import DatePicker from "react-datepicker";

await import("react-datepicker/dist/react-datepicker.css");

export const Route = createFileRoute("/add")({
  component: AddHabitView,
});

function AddHabitView() {
  const [habitName, setHabitName] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [perDayCounter, setPerDayCounter] = useState(1);
  const [daysPerCounter, setDaysPerCounter] = useState(1);

  return (
    <div className="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto flex flex-col justify-start">
      {/* <!-- header back navigation --> */}
      <header className="pt-4 mb-8 ml-2">
        <Link to="/" className="flex items-center">
          <ChevronLeftIcon className="h-8 text-neutral-100 mr-2" />
          <span className="text-zinc-100 text-xl">Back</span>
        </Link>
      </header>

      {/* <!-- main layout --> */}
      <main className="flex flex-col justify-between h-full">
        {/* <!-- main content --> */}
        <div className="px-4">
          {/* section title and icon */}
          <div className="flex mb-10">
            <Modal>
              <QuestionMarkCircleIcon
                className={clsx("w-8", TEXT_COLORS["red"])}
              />
            </Modal>
            <input
              className="rounded-lg bg-neutral-700 px-4 text-neutral-200 text-lg w-full"
              onChange={(e) => setHabitName(e.target.value)}
              value={habitName}
            />
          </div>

          {/* section frequency */}
          <div className="py-4 pl-4 rounded-lg bg-neutral-700 w-full">
            <div className="flex items-center">
              <div className="mr-4 p-1 mb-4 rounded-md bg-amber-500">
                <FireIcon className="w-6 text-red-600" />
              </div>
              <div className="w-full flex justify-between text-neutral-50 pb-4 border-b border-neutral-600 items-center">
                <p>{perDayCounter}x per day</p>
                <div className="flex px-1 py-2 bg-neutral-500 rounded-md mr-2">
                  <button
                    onClick={() => setPerDayCounter((prev) => prev - 1)}
                    disabled={perDayCounter === 1}
                  >
                    <MinusIcon className="w-4 text-neutral-50 mx-3" />
                  </button>
                  <div className="border-r border-neutral-600"></div>
                  <button
                    onClick={() => setPerDayCounter((prev) => prev + 1)}
                    disabled={perDayCounter === 10}
                  >
                    <PlusIcon className="w-4 text-neutral-50 mx-3" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex mt-3 items-center">
              <div className="mr-4 p-1 rounded-md bg-violet-600">
                <ArrowPathRoundedSquareIcon className="w-6 text-neutral-50" />
              </div>
              <div className="w-full flex justify-between text-neutral-50 items-center">
                <p>{daysPerCounter} days per week</p>
                <div className="flex px-1 py-2 bg-neutral-500 rounded-md mr-2">
                  <button
                    onClick={() => setDaysPerCounter((prev) => prev - 1)}
                    disabled={daysPerCounter === 1}
                  >
                    <MinusIcon className="w-4 text-neutral-50 mx-3" />
                  </button>
                  <div className="border-r border-neutral-600"></div>
                  <button
                    onClick={() => setDaysPerCounter((prev) => prev + 1)}
                    disabled={daysPerCounter === 7}
                  >
                    <PlusIcon className="w-4 text-neutral-50 mx-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg mr-4 bg-neutral-700 w-full mt-8">
            <div className="flex justify-start items-center">
              <div className="mr-4 p-1 rounded-md bg-blue-600">
                <CalendarDaysIcon className="w-6 text-neutral-50 inline" />
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-neutral-50">Start Date</p>
                <div className="w-32">
                  <DatePicker
                    selected={startDate}
                    dateFormat="dd MMM yyyy"
                    onChange={(date) => setStartDate(date)}
                    className="w-full text-center px-2 py-1 rounded-lg bg-neutral-500 text-neutral-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- footer save button --> */}
        <div className="px-4 pt-4 pb-8 border-t border-neutral-600">
          <button className="bg-rose-500 text-neutral-50 py-4 w-full rounded-lg">
            <p className="mx-auto">SAVE</p>
          </button>
        </div>
      </main>
    </div>
  );
}
