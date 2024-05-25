import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { habit } from "@/data/habbit";
import { BG_COLORS, TEXT_COLORS } from "@/config/constant";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { TrackerData } from "../data/tracker";
import { Dayjs } from "dayjs";
import { Link } from "@tanstack/react-router";

type HabitCardProps = habit & { selectedDate: Dayjs };

const HabitCard = (props: HabitCardProps) => {
  const { title, id, color, total, icon, selectedDate } = props;
  const [counter, setCounter] = useState(0);

  const filterDataById = (id: number) => {
    return TrackerData.filter((data) => data.habit_id === id);
  };

  const filterDataByDate = (date: Dayjs) => {
    return TrackerData.filter(
      (data) => data.date.format("YYYY-MM-DD") === date.format("YYYY-MM-DD")
    );
  };

  const dataById = useMemo(() => filterDataById(id), [id]);
  const dataByDate = useMemo(
    () => filterDataByDate(selectedDate),
    [selectedDate]
  );
  console.log(dataByDate);

  return (
    <div className="flex justify-between rounded-lg bg-neutral-700 p-2 mb-4">
      <Link to={`detail/${id}`}>
        <div className="flex items-center">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${BG_COLORS[color]}`}
          >
            {icon}
          </div>
          <div className="ml-3 flex flex-col">
            <span className="text-xl font-bold text-neutral-200">
              {title.toUpperCase()}
            </span>
            <div className="flex gap-1 items-center">
              {dataById.map((item, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    "w-4 h-4 rounded-full",
                    item.count === 1 ? BG_COLORS[color] : "bg-neutral-500"
                  )}
                ></div>
              ))}
              {/* <div className={`w-4 h-4 rounded-full ${BG_COLORS[color]}`}></div>
              <div className={`w-4 h-4 rounded-full ${BG_COLORS[color]}`}></div>
              <div className={`w-4 h-4 rounded-full ${BG_COLORS[color]}`}></div>
              <div className={`w-4 h-4 rounded-full ${BG_COLORS[color]}`}></div>
              <div className={`w-4 h-4 rounded-full ${BG_COLORS[color]}`}></div>
              <div
                className={clsx(
                  'w-4 h-4 rounded-full',
                  counter === total ? BG_COLORS[color] : 'bg-neutral-500',
                )}
              ></div> */}
            </div>
          </div>
        </div>
      </Link>
      <div className="flex items-center">
        <p className="text-neutral-300 mr-1 text-sm">{counter + "/" + total}</p>
        {counter === total ? (
          <button>
            <CheckCircleIcon
              className={`font-bold w-12 ${TEXT_COLORS[color]}`}
            />
          </button>
        ) : (
          <button onClick={() => setCounter((prev) => prev + 1)}>
            <PlusCircleIcon
              className={`font-bold w-12 ${TEXT_COLORS[color]}`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default HabitCard;
