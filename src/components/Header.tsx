import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  UserPlus,
  CalendarClock,
  GraduationCap,
  ClipboardList,
  PhoneCall,
  PanelsTopLeft,
  FileText,
  Info,
  PlugZap,
  Newspaper,
  Mail,
  Menu,
  X,
  BookOpen, // Added for Case Studies
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PlaybookModal from "./PlaybookModal";

interface HeaderProps {
  onBookDemo?: () => void;
}

const Header = ({ onBookDemo }: HeaderProps) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = document.querySelector("nav");
    const offset = (nav?.clientHeight ?? 80) + 12;
    const targetTop = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  const [playbookOpen, setPlaybookOpen] = useState(false);

  return (
    <>
      <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
      <nav className="fixed top-2.5 left-0 right-0 z-50 will-change-transform">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-[#6366f1]/90 backdrop-blur-md shadow-xl px-4 md:px-6 py-3">
            {/* Left side - Logo + Resources */}
            <div className="flex items-center gap-6">
              <div
                className="text-2xl font-bold tracking-tight cursor-pointer transition-transform duration-200 hover:scale-[1.02] text-white"
                onClick={() => {
                  navigate("/");
                  scrollToSection("hero");
                }}
              >
                Breeh <span className="font-extrabold text-white">AI</span>
              </div>

              {/* Resources Dropdown - Desktop */}
              <div className="hidden md:flex">
                <NavigationMenu>
                  <NavigationMenuList className="gap-2">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:text-white/80 focus:text-white data-[state=open]:text-white font-medium tracking-wide px-2 py-1 h-auto border-none shadow-none hover:bg-transparent focus:bg-transparent">
                        Resources
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[280px] bg-[#4f46e5] rounded-xl shadow-2xl border border-white/20 overflow-hidden">
                          {/* Featured Item */}
                          <button
                            onClick={() => setPlaybookOpen(true)}
                            className="w-full flex items-center gap-3 px-5 py-4 bg-[#3730a3] hover:bg-[#312e81] transition-all text-left group"
                          >
                            <span className="px-2 py-0.5 bg-yellow-400 text-[10px] font-black uppercase tracking-wider text-black rounded">NEW</span>
                            <span className="text-white font-semibold text-sm">Dental Profit Playbook</span>
                          </button>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <a href="#case-studies" className="group inline-flex h-auto w-max items-center justify-center rounded-md bg-transparent px-2 py-1 text-sm font-medium tracking-wide text-white transition-colors hover:text-white/80 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        Case Studies
                      </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <a href="/blog" className="group inline-flex h-auto w-max items-center justify-center rounded-md bg-transparent px-2 py-1 text-sm font-medium tracking-wide text-white transition-colors hover:text-white/80 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        Blog
                      </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <a href="/about" className="group inline-flex h-auto w-max items-center justify-center rounded-md bg-transparent px-2 py-1 text-sm font-medium tracking-wide text-white transition-colors hover:text-white/80 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        About
                      </a>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            {/* Right-side CTAs */}
            <div className="hidden md:flex items-center gap-5">
              <Button
                variant="outline"
                className="hidden md:inline-flex rounded-full px-4 py-2 text-sm font-medium border-white/20 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 bg-transparent text-white hover:!bg-white/10 hover:!text-white"
                onClick={() => scrollToSection("faq")}
              >
                FAQ
              </Button>
              <Button
                onClick={onBookDemo}
                className="rounded-full bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 font-bold"
              >
                BOOK DEMO
              </Button>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                size="sm"
                variant="outline"
                className="rounded-full px-3 h-8 text-xs font-medium"
                onClick={() => scrollToSection("faq")}
              >
                FAQ
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-9 w-9 rounded-full"
                onClick={() => setMobileOpen((open) => !open)}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile nav panel */}
          {mobileOpen && (
            <div className="mt-3 md:hidden rounded-2xl border bg-popover/95 shadow-lg p-4 space-y-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span className="font-medium">Navigation</span>
                <button
                  type="button"
                  className="px-2 py-1 rounded-full border border-border/70 hover:bg-muted/70 text-[11px]"
                  onClick={() => setMobileOpen(false)}
                >
                  Close
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 hover:bg-muted/70 transition-colors text-left bg-indigo-50/50"
                  onClick={() => {
                    setMobileOpen(false);
                    setPlaybookOpen(true);
                  }}
                >
                  <span className="font-bold text-primary flex items-center gap-2"><BookOpen className="w-4 h-4" /> Dental Profit Playbook</span>
                </button>

                <a
                  href="#case-studies"
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 hover:bg-muted/70 transition-colors text-left"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Case Studies</span>
                </a>

                <a
                  href="/blog"
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 hover:bg-muted/70 transition-colors text-left"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Blog</span>
                </a>

                <a
                  href="/about"
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 hover:bg-muted/70 transition-colors text-left"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>About</span>
                </a>

                <button
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 hover:bg-muted/70 transition-colors text-left border-t border-border/50 pt-4 mt-2"
                  onClick={() => {
                    setMobileOpen(false);
                    scrollToSection("faq");
                  }}
                >
                  <span>FAQ</span>
                </button>
                <button
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-primary hover:bg-muted/70 transition-colors text-left"
                  onClick={() => {
                    setMobileOpen(false);
                    onBookDemo?.();
                  }}
                >
                  <span>BOOK DEMO</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
