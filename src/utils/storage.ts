import { BoardData, Task } from '../types';

const STORAGE_KEY = 'taskflow-board-data';
const THEME_KEY = 'taskflow-theme';

// Migrate old data to include priority field
const migrateTaskData = (data: BoardData): BoardData => {
  const migratedTasks: { [key: string]: Task } = {};
  
  Object.keys(data.tasks).forEach((taskId) => {
    const task = data.tasks[taskId];
    migratedTasks[taskId] = {
      ...task,
      // Add priority if it doesn't exist
      priority: task.priority || 'medium'
    };
  });

  return {
    ...data,
    tasks: migratedTasks
  };
};

export const saveBoardData = (data: BoardData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save board data:', error);
  }
};

export const loadBoardData = (): BoardData | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    
    const parsedData = JSON.parse(data);
    // Migrate data to ensure all tasks have priority
    return migrateTaskData(parsedData);
  } catch (error) {
    console.error('Failed to load board data:', error);
    return null;
  }
};

export const saveTheme = (themeName: string): void => {
  try {
    localStorage.setItem(THEME_KEY, themeName);
  } catch (error) {
    console.error('Failed to save theme:', error);
  }
};

export const loadTheme = (): string | null => {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch (error) {
    console.error('Failed to load theme:', error);
    return null;
  }
};
