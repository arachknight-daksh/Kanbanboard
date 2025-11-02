import { Theme } from '../types';

export const themes: Theme[] = [
  {
    name: 'Ocean Blue',
    primary: '#0ea5e9',
    secondary: '#38bdf8',
    accent: '#0284c7',
    background: '#f0f9ff',
    cardBg: '#ffffff',
    columnBg: '#e0f2fe',
    textPrimary: '#111827',
    textSecondary: '#4b5563'
  },
  {
    name: 'Forest Green',
    primary: '#10b981',
    secondary: '#34d399',
    accent: '#059669',
    background: '#f0fdf4',
    cardBg: '#ffffff',
    columnBg: '#dcfce7',
    textPrimary: '#111827',
    textSecondary: '#4b5563'
  },
  {
    name: 'Sunset Orange',
    primary: '#f97316',
    secondary: '#fb923c',
    accent: '#ea580c',
    background: '#fff7ed',
    cardBg: '#ffffff',
    columnBg: '#ffedd5',
    textPrimary: '#111827',
    textSecondary: '#4b5563'
  },
  {
    name: 'Purple Dream',
    primary: '#a855f7',
    secondary: '#c084fc',
    accent: '#9333ea',
    background: '#faf5ff',
    cardBg: '#ffffff',
    columnBg: '#f3e8ff',
    textPrimary: '#111827',
    textSecondary: '#4b5563'
  },
  {
    name: 'Rose Pink',
    primary: '#ec4899',
    secondary: '#f472b6',
    accent: '#db2777',
    background: '#fdf2f8',
    cardBg: '#ffffff',
    columnBg: '#fce7f3',
    textPrimary: '#111827',
    textSecondary: '#4b5563'
  },
  {
    name: 'Modern Dark',
    primary: '#818cf8',
    secondary: '#a5b4fc',
    accent: '#6366f1',
    background: '#0f172a',
    cardBg: '#1e293b',
    columnBg: '#334155',
    textPrimary: '#f1f5f9',
    textSecondary: '#cbd5e1'
  },
  {
    name: 'Midnight Blue',
    primary: '#60a5fa',
    secondary: '#93c5fd',
    accent: '#3b82f6',
    background: '#0c1222',
    cardBg: '#1a2332',
    columnBg: '#2a3547',
    textPrimary: '#f1f5f9',
    textSecondary: '#cbd5e1'
  },
  {
    name: 'Slate',
    primary: '#64748b',
    secondary: '#94a3b8',
    accent: '#475569',
    background: '#f8fafc',
    cardBg: '#ffffff',
    columnBg: '#f1f5f9',
    textPrimary: '#111827',
    textSecondary: '#4b5563'
  },
  {
    name: 'Teal Wave',
    primary: '#14b8a6',
    secondary: '#2dd4bf',
    accent: '#0d9488',
    background: '#f0fdfa',
    cardBg: '#ffffff',
    columnBg: '#ccfbf1',
    textPrimary: '#111827',
    textSecondary: '#4b5563'
  },
  {
    name: 'Dark Emerald',
    primary: '#34d399',
    secondary: '#6ee7b7',
    accent: '#10b981',
    background: '#0a1612',
    cardBg: '#1a2e23',
    columnBg: '#234534',
    textPrimary: '#f1f5f9',
    textSecondary: '#cbd5e1'
  }
];

export const getTheme = (themeName: string): Theme => {
  return themes.find(t => t.name === themeName) || themes[0];
};
