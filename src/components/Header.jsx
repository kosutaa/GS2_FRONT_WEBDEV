import ToggleDark from './ToggleDark';

function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          GS-Perfis
        </h1>
        <ToggleDark />
      </nav>
    </header>
  );
}

export default Header;