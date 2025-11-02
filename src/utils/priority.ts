import { Priority } from '../types';

export const priorityConfig = {
  urgent: {
    label: 'Urgent',
    color: 'bg-red-500 hover:bg-red-500 text-white',
    textColor: 'text-red-600 dark:text-red-400',
    icon: '🔥',
    order: 0
  },
  high: {
    label: 'High',
    color: 'bg-orange-500 hover:bg-orange-500 text-white',
    textColor: 'text-orange-600 dark:text-orange-400',
    icon: '⚠️',
    order: 1
  },
  medium: {
    label: 'Medium',
    color: 'bg-yellow-500 hover:bg-yellow-500 text-white',
    textColor: 'text-yellow-600 dark:text-yellow-400',
    icon: '▶️',
    order: 2
  },
  low: {
    label: 'Low',
    color: 'bg-blue-500 hover:bg-blue-500 text-white',
    textColor: 'text-blue-600 dark:text-blue-400',
    icon: '▽',
    order: 3
  }
};

export const priorityOptions = [
  { value: 'low' as Priority, ...priorityConfig.low },
  { value: 'medium' as Priority, ...priorityConfig.medium },
  { value: 'high' as Priority, ...priorityConfig.high },
  { value: 'urgent' as Priority, ...priorityConfig.urgent },
];
