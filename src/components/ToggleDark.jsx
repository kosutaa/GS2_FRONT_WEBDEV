import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function ToggleDark() {
  const [isDark, setIsDark] = useState(() => {
    if (localStorage.theme === 'dark') {
      return true;
    }
    if (localStorage.theme === 'light') {
      return false;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      html.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  const toggle = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      ) : (
        <MoonIcon className="h-6 w-6 text-blue-500" />
      )}
    </button>
  );
}

export default ToggleDark;