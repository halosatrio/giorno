import { CogIcon } from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  BookOpenIcon,
  CodeBracketIcon,
  FireIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import dayjs, { type Dayjs } from "dayjs";
import { useMemo, useState } from "react";
import HabitCard from "@/components/HabitCard";
import { habit } from "@/data/habbit";
import { Link, createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const habitItems: habit[] = [
  {
    title: "read",
    id: 1,
    color: "rose",
    isChecked: true,
    count: 1,
    total: 1,
    icon: <BookOpenIcon className="w-8 text-neutral-200" />,
  },
  {
    title: "code",
    id: 2,
    color: "sky",
    isChecked: false,
    count: 0,
    total: 1,
    icon: <CodeBracketIcon className="w-8 text-neutral-200" />,
  },
  {
    title: "workout",
    id: 3,
    color: "yellow",
    isChecked: false,
    count: 0,
    total: 1,
    icon: <FireIcon className="w-8 text-neutral-200" />,
  },
  {
    title: "learn spanish",
    id: 4,
    color: "lime",
    isChecked: true,
    count: 1,
    total: 1,
    icon: <AcademicCapIcon className="w-8 text-neutral-200" />,
  },
];

function Index() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const today = dayjs();

  const apiUrl = import.meta.env.VITE_BASE_API_URL;

  let token = "hehe";

  const { data, isLoading } = useQuery({
    queryKey: ["get-habits"],
    queryFn: () => {
      axios.get(`${apiUrl}/habits`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    },
  });

  const calculateLast7Days = () => {
    const today = dayjs();
    const res = [today];
    for (let i = 1; i < 7; i++) {
      const temp = today.subtract(i, "day");
      res.push(temp);
    }
    return res;
  };

  const last7days = useMemo(calculateLast7Days, []);

  const compareToday = (today: Dayjs, select: Dayjs) => {
    if (today.format("YYYY-MM-DD") === select.format("YYYY-MM-DD")) {
      return "border-2 border-yellow-400";
    } else {
      return "";
    }
  };

  const compareSelected = (item: Dayjs, select: Dayjs) => {
    if (select.format("YYYY-MM-DD") === item.format("YYYY-MM-DD")) {
      return "bg-yellow-400";
    } else {
      return "bg-neutral-700";
    }
  };

  console.log("habitsData", data);
  console.log("isLoading", isLoading);

  return (
    <div className="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto pt-4 px-4 pb-16">
      {/* header */}
      <header className="flex justify-between">
        <div className="flex">
          <Link to="/setting">
            <CogIcon className="h-8 text-neutral-500 mr-2" />
          </Link>
          <span className="text-zinc-100 text-2xl font-bold">TODAY</span>
        </div>
        <Link to="/add">
          <PlusCircleIcon className="h-8 text-rose-600" />
        </Link>
      </header>

      {/* last 7 days section */}
      <div className="mt-4 flex flex-row-reverse justify-between">
        {last7days.length !== 0
          ? last7days.map((item, idx) => (
              <button
                onClick={() => setSelectedDate(item)}
                className={`rounded-lg py-1 flex flex-col items-center w-11 
                  ${compareToday(today, item)} ${compareSelected(item, selectedDate)}
                `}
                key={idx}
              >
                <h4
                  className={`text-xl font-bold ${
                    selectedDate.format("YYYY-MM-DD") ===
                    item.format("YYYY-MM-DD")
                      ? "text-neutral-700"
                      : "text-neutral-100"
                  }`}
                >
                  {item.format("D")}
                </h4>
                <p
                  className={`text-sm text-neutral-200 ${
                    selectedDate.format("YYYY-MM-DD") ===
                    item.format("YYYY-MM-DD")
                      ? "text-neutral-700"
                      : "text-neutral-200"
                  }`}
                >
                  {item.format("ddd")}
                </p>
              </button>
            ))
          : null}
      </div>

      {/* main section */}
      <main className="mt-8">
        {habitItems.map((habit) => (
          <HabitCard
            key={habit.id}
            title={habit.title}
            id={habit.id}
            icon={habit.icon}
            color={habit.color}
            isChecked={habit.isChecked}
            count={habit.count}
            total={habit.total}
            selectedDate={selectedDate}
          />
        ))}
      </main>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});
