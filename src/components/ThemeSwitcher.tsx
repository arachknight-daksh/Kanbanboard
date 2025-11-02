import { Palette } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { themes } from '../utils/themes';

interface ThemeSwitcherProps {
  currentTheme: string;
  onThemeChange: (themeName: string) => void;
}

export function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 sm:h-10 px-2 sm:px-3">
          <Palette className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 sm:w-48">
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.name}
            onClick={() => onThemeChange(theme.name)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2 sm:gap-3 w-full">
              <div
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shrink-0"
                style={{ backgroundColor: theme.primary }}
              />
              <span className="flex-1 text-sm">{theme.name}</span>
              {currentTheme === theme.name && (
                <span className="text-xs">✓</span>
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
