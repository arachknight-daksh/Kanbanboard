import { BoardData } from '../types';

export const initialData: BoardData = {
  tasks: {
    'task-1': { 
      id: 'task-1', 
      title: 'Design landing page', 
      description: 'Create wireframes and mockups for the new landing page',
      columnId: 'column-1',
      createdAt: new Date().toISOString(),
      priority: 'high'
    },
    'task-2': { 
      id: 'task-2', 
      title: 'Setup project repository', 
      description: 'Initialize Git repo and configure CI/CD pipeline',
      columnId: 'column-1',
      createdAt: new Date().toISOString(),
      priority: 'medium'
    },
    'task-3': { 
      id: 'task-3', 
      title: 'Implement authentication', 
      description: 'Build login and registration functionality',
      columnId: 'column-2',
      createdAt: new Date().toISOString(),
      priority: 'urgent'
    },
    'task-4': { 
      id: 'task-4', 
      title: 'Write unit tests', 
      description: 'Add test coverage for core components',
      columnId: 'column-2',
      createdAt: new Date().toISOString(),
      priority: 'low'
    },
    'task-5': { 
      id: 'task-5', 
      title: 'Deploy to production', 
      description: 'Deploy the application to the production server',
      columnId: 'column-3',
      createdAt: new Date().toISOString(),
      priority: 'high'
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2']
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3', 'task-4']
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-5']
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
};
