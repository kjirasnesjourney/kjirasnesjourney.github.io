import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="border-t border-border mt-24">
      <div className="py-12 px-6 md:px-[calc(18vw-10rem)]">
        <div className="max-w-[138rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Column 1: Theme Toggle */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[1.4rem] tracking-wider mb-1">
                Select a color scheme preference
              </h3>
              <div className="flex gap-6">
                <button
                  onClick={() => setTheme("light")}
                  className={`text-[1.4rem] font-medium transition-colors ${
                    theme === "light"
                      ? "text-foreground underline decoration-2 underline-offset-4"
                      : "text-muted-foreground"
                  }`}
                  aria-label="Light mode"
                >
                  Light
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`text-[1.4rem] font-medium transition-colors ${
                    theme === "dark"
                      ? "text-foreground underline decoration-2 underline-offset-4"
                      : "text-muted-foreground"
                  }`}
                  aria-label="Dark mode"
                >
                  Dark
                </button>
                <button
                  onClick={() => setTheme("system")}
                  className={`text-[1.4rem] font-medium transition-colors ${
                    theme === "system"
                      ? "text-foreground underline decoration-2 underline-offset-4"
                      : "text-muted-foreground"
                  }`}
                  aria-label="System theme"
                >
                  Auto
                </button>
              </div>
            </div>

            {/* Column 2: Pages */}
            <nav className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-[1.4rem] inline-block [transition:background-position_600ms_cubic-bezier(0.45,0,0.55,1)] bg-current [background-image:linear-gradient(90deg,rgba(203,48,223,0.5)_0%,rgba(254,44,85,0.5)_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent hover:bg-[position:0%_0]"
              >
                About
              </Link>
            </nav>

            {/* Column 3: Legal */}
            <nav className="flex flex-col gap-3">
              <Link
                to="/privacy"
                className="text-[1.4rem] inline-block [transition:background-position_600ms_cubic-bezier(0.45,0,0.55,1)] bg-current [background-image:linear-gradient(90deg,rgba(203,48,223,0.5)_0%,rgba(254,44,85,0.5)_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent hover:bg-[position:0%_0]"
              >
                Credits & Disclaimers
              </Link>
            </nav>
          </div>
          <p className="text-[1.4rem] text-muted-foreground text-center mt-12">
            Developed by Ney Almeida
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
