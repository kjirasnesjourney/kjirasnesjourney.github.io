import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProgressBar from "@/components/ProgressBar";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_0_calc(1.125*16px)_rgba(0,0,0,0.15)]" : ""
      }`}
      style={{ height: "144px", backgroundColor: "#e4dbd0" }}
    >
      <div className="h-full px-6 md:px-[calc(18vw-10rem)]">
        <div className="flex items-center justify-between h-full max-w-[138rem] mx-auto">
          <Link to="/" aria-label="Kjira's SNES Journey - Home">
            <img src={logo} alt="Kjira's SNES Journey" className="h-[128px] w-auto" />
          </Link>

          <ProgressBar />

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="flex items-center gap-2 p-2 text-foreground hover:text-muted-foreground transition-colors"
                aria-label="Open menu"
              >
                <span className="font-pixel text-[24px] leading-none">Menu</span>
                <div className="w-12 flex flex-col gap-[7px] items-center justify-center mt-[5px]">
                  <span className="w-[20px] h-[2px] bg-current block"></span>
                  <span className="w-[20px] h-[2px] bg-current block"></span>
                </div>
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-background">
              <nav className="flex flex-col justify-center h-full px-12 gap-8">
                {navLinks.map(({ to, label }, i) => (
                  <Link
                    key={to}
                    to={to}
                    className="font-pixel text-[3.6rem] inline-block [transition:background-position_600ms_cubic-bezier(0.45,0,0.55,1)] animate-in fade-in slide-in-from-right-4 bg-current [background-image:linear-gradient(90deg,rgba(203,48,223,0.5)_0%,rgba(254,44,85,0.5)_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent hover:bg-[position:0%_0]"
                    style={{ animationDelay: `${i * 150}ms`, animationFillMode: "backwards" }}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
