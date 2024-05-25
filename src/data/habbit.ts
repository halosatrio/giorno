import { type ITEM_COLORS } from '@/config/constant';
import { ReactNode } from 'react';

export type habit = {
  title: string;
  id: number;
  color: ITEM_COLORS;
  isChecked?: boolean;
  count?: number;
  total: number;
  icon?: ReactNode;
};

export const habitData: { [key: string]: habit } = {
  '1': {
    title: 'read',
    id: 1,
    color: 'rose',
    isChecked: true,
    count: 1,
    total: 1,
    icon: 'book',
  },
  '2': {
    title: 'code',
    id: 2,
    color: 'sky',
    isChecked: false,
    count: 0,
    total: 1,
    icon: 'book',
  },
  '3': {
    title: 'workout',
    id: 3,
    color: 'yellow',
    isChecked: false,
    count: 0,
    total: 1,
    icon: 'book',
  },
  '4': {
    title: 'learn spanish',
    id: 4,
    color: 'lime',
    isChecked: true,
    count: 1,
    total: 1,
    icon: 'book',
  },
};
