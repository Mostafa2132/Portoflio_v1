import { Link } from "react-router-dom";
import { footerLinks } from "../../Data/Data";

export default function Footer() {
  return (
    <>
      {/* ========== FOOTER ========== */}
      <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div>
              <p className="text-xs text-gray-600 dark:text-neutral-400">
                © {new Date().getFullYear()} Mostafa M. Ebrahem. 🚀💕
              </p>
            </div>
            {/* End Col */}
            {/* List */}
            <ul className="flex flex-wrap items-center">
              {footerLinks.map((link, index) => (
                <li key={index} className="inline-block pe-4 text-xs">
                  <Link
                    target="_blank"
                    className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                    to={link.path}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}

              {/*  Dark Mode */}
              <li className="inline-block">
                {/* Dark Mode */}
                <button
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("dark");
                    localStorage.setItem(
                      "theme",
                      document.documentElement.classList.contains("dark")
                        ? "dark"
                        : "light"
                    );
                  }}
                  className="hs-dark-mode hs-dark-mode-active:hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-theme-click-value="dark"
                >
                  <span className="sr-only">Dark</span>
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    document.documentElement.classList.toggle("dark");
                    localStorage.setItem(
                      "theme",
                      document.documentElement.classList.contains("dark")
                        ? "dark"
                        : "light"
                    );
                  }}
                  type="button"
                  className="hs-dark-mode hs-dark-mode-active:flex hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-theme-click-value="light"
                >
                  <span className="sr-only">Light</span>
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={4} />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                </button>
                {/* End Dark Mode */}
              </li>
              <li
                onClick={() => window.scrollTo(0, 0)}
                className="top size-7  ms-2  animate-float cursor-pointer flex items-center justify-center bg-violet-800/20 rounded-full "
              >
                <i className="fa-solid fa-arrow-up"></i>
              </li>
            </ul>
            {/* End List */}
          </div>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </>
  );
}
