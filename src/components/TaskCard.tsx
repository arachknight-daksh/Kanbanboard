import { Task } from '../types';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MoreVertical, Pencil, Trash2, Flag } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { priorityConfig } from '../utils/priority';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  isDragging?: boolean;
}

export function TaskCard({ task, onEdit, onDelete, isDragging }: TaskCardProps) {
  // Fallback to 'medium' if priority is undefined (for backward compatibility)
  const priority = priorityConfig[task.priority || 'medium'];
  
  return (
    <Card
      className={`p-3 sm:p-4 mb-2 sm:mb-3 cursor-grab active:cursor-grabbing transition-all duration-200 hover:shadow-md ${
        isDragging ? 'opacity-50 rotate-2 scale-105' : ''
      }`}
      style={{ 
        backgroundColor: 'var(--card-bg)',
        border: '1px solid rgba(0,0,0,0.1)'
      }}
    >
      <div className="flex justify-between items-start gap-2 mb-2">
        <Badge className={`${priority.color} text-xs px-1.5 sm:px-2 py-0.5`}>
          <Flag className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
          <span className="hidden xs:inline">{priority.label}</span>
          <span className="xs:hidden">{priority.icon}</span>
        </Badge>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 w-7 sm:h-8 sm:w-8 p-0 shrink-0 hover:bg-black/5"
              style={{ color: 'var(--text-secondary)' }}
            >
              <MoreVertical className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(task)}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onDelete(task.id)}
              className="text-red-600 dark:text-red-400"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="mb-1 truncate text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>{task.title}</h3>
        {task.description && (
          <p className="text-xs sm:text-sm line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
            {task.description}
          </p>
        )}
      </div>
    </Card>
  );
}
