import { useEffect, useState } from "react";
import { navLinks } from "../../Data/Data";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  return (
    <header className="flex fixed top-0 left-0 backdrop-blur-sm flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-x-1">
          <Link
            to="/"
            className="flex-none font-bold text-xl text-violet-700 dark:text-violet-400"
          >
            <span className="text-violet-600">Mostafa</span> M.Ebrahim
          </Link>

          {/* زر القائمة للشاشات الصغيرة */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative size-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={3} x2={21} y1={6} y2={6} />
                <line x1={3} x2={21} y1={12} y2={12} />
                <line x1={3} x2={21} y1={18} y2={18} />
              </svg>
            )}
          </button>
        </div>

        {/* القائمة المنسدلة */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block w-full md:w-auto transition-all duration-300`}
        >
          <div className="overflow-y-auto max-h-[75vh] md:flex md:items-center md:gap-3">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 py-4 md:py-0">
              {pathname === "/" &&
                navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.path}
                    className="font-bold text-sm hover:text-violet-600 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-violet-600 after:scale-x-0 after:transition-transform hover:after:scale-x-100"
                  >
                    {link.title}
                  </a>
                ))}

              {/* زر الوضع الليلي/الفاتح */}
              <div className="flex flex-wrap gap-2 md:ml-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 py-2 px-3 rounded-full text-sm font-semibold text-violet-600 dark:hidden"
                  onClick={() => {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("theme", "dark");
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                </button>

                <button
                  type="button"
                  className="hidden dark:inline-flex items-center gap-x-2 py-2 px-3 rounded-full text-sm font-semibold text-violet-600"
                  onClick={() => {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("theme", "light");
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
