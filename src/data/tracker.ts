import dayjs, { Dayjs } from 'dayjs';

type TrackerObject = {
  habit_id: number;
  date: Dayjs;
  count: number;
};

export const TrackerData: TrackerObject[] = [
  // 1
  {
    habit_id: 1,
    date: dayjs('2023-08-13'),
    count: 1,
  },
  {
    habit_id: 1,
    date: dayjs('2023-08-14'),
    count: 1,
  },
  {
    habit_id: 1,
    date: dayjs('2023-08-15'),
    count: 1,
  },
  {
    habit_id: 1,
    date: dayjs('2023-08-16'),
    count: 1,
  },
  {
    habit_id: 1,
    date: dayjs('2023-08-17'),
    count: 1,
  },
  {
    habit_id: 1,
    date: dayjs('2023-08-18'),
    count: 1,
  },
  {
    habit_id: 1,
    date: dayjs('2023-08-19'),
    count: 0,
  },

  // 2
  {
    habit_id: 2,
    date: dayjs('2023-08-13'),
    count: 1,
  },
  {
    habit_id: 2,
    date: dayjs('2023-08-14'),
    count: 1,
  },
  {
    habit_id: 2,
    date: dayjs('2023-08-15'),
    count: 1,
  },
  {
    habit_id: 2,
    date: dayjs('2023-08-16'),
    count: 1,
  },
  {
    habit_id: 2,
    date: dayjs('2023-08-17'),
    count: 1,
  },
  {
    habit_id: 2,
    date: dayjs('2023-08-18'),
    count: 1,
  },
  {
    habit_id: 2,
    date: dayjs('2023-08-19'),
    count: 0,
  },

  // 3
  {
    habit_id: 3,
    date: dayjs('2023-08-13'),
    count: 1,
  },
  {
    habit_id: 3,
    date: dayjs('2023-08-14'),
    count: 0,
  },
  {
    habit_id: 3,
    date: dayjs('2023-08-15'),
    count: 0,
  },
  {
    habit_id: 3,
    date: dayjs('2023-08-16'),
    count: 1,
  },
  {
    habit_id: 3,
    date: dayjs('2023-08-17'),
    count: 1,
  },
  {
    habit_id: 3,
    date: dayjs('2023-08-18'),
    count: 1,
  },
  {
    habit_id: 3,
    date: dayjs('2023-08-19'),
    count: 0,
  },

  // 4
  {
    habit_id: 4,
    date: dayjs('2023-08-13'),
    count: 0,
  },
  {
    habit_id: 4,
    date: dayjs('2023-08-14'),
    count: 1,
  },
  {
    habit_id: 4,
    date: dayjs('2023-08-15'),
    count: 1,
  },
  {
    habit_id: 4,
    date: dayjs('2023-08-16'),
    count: 1,
  },
  {
    habit_id: 4,
    date: dayjs('2023-08-17'),
    count: 1,
  },
  {
    habit_id: 4,
    date: dayjs('2023-08-18'),
    count: 1,
  },
  {
    habit_id: 4,
    date: dayjs('2023-08-19'),
    count: 0,
  },
];
