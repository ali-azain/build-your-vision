import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const navLinks = [
  { label: "Produkt", href: "/#product" },
  { label: "Preise", href: "/pricing" },
  { label: "Wie es funktioniert", href: "/#how-it-works" },
  { label: "Fallstudien", href: "/#case-studies" },
  { label: "Über uns", href: "/about" },
  { label: "Kontakt", href: "/contact" },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-display text-xl font-bold text-foreground">
            early<span className="text-gradient">build</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Produkt</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                      <ListItem href="/product" title="Produktübersicht">
                        Verschaffen Sie sich einen Überblick über unsere Funktionen.
                      </ListItem>
                      <ListItem href="/product#integrations" title="Integrationen">
                        Verbinden Sie sich mit Ihren bevorzugten Tools.
                      </ListItem>
                      <ListItem href="/product#templates" title="Vorlagen">
                        Starten Sie Ihre Projekte mit vorgefertigten Vorlagen.
                      </ListItem>
                      <ListItem href="/product#ai" title="KI">
                        Nutzen Sie die Kraft der künstlichen Intelligenz.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navLinks.filter(link => link.label !== "Product").map((link) => (
                  <NavigationMenuItem key={link.href}>
                    {link.href.startsWith("/#") ? (
                      <a
                        href={link.href}
                        className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className={cn(navigationMenuTriggerStyle(), "bg-transparent", location.pathname === link.href && "text-foreground font-medium")}>
                        {link.label}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="hero" size="sm">
              Demo anfragen
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <div className="font-medium px-2 py-2 text-foreground">Produkt</div>
              <div className="pl-4 border-l border-border/50 ml-2 space-y-2">
                <a href="/product" onClick={handleLinkClick} className="block text-sm text-muted-foreground hover:text-foreground">Produktübersicht</a>
                <a href="/product#integrations" onClick={handleLinkClick} className="block text-sm text-muted-foreground hover:text-foreground">Integrationen</a>
                <a href="/product#templates" onClick={handleLinkClick} className="block text-sm text-muted-foreground hover:text-foreground">Vorlagen</a>
                <a href="/product#ai" onClick={handleLinkClick} className="block text-sm text-muted-foreground hover:text-foreground">KI</a>
              </div>

              {navLinks.filter(link => link.label !== "Produkt").map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground py-2"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground py-2"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Button variant="hero" size="sm" className="mt-2">
                Demo anfragen
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
