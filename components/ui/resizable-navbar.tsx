"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
  visible?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

/* -------------------------------------------------------------------------- */
/*                                MAIN NAVBAR                                 */
/* -------------------------------------------------------------------------- */

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(true);

  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (currentY) => {
    if (currentY > lastY.current && currentY > 80) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    lastY.current = currentY;
  });

  return (
    <motion.div
      ref={ref}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.25 }}
      className={cn(
        "sticky inset-x-0 top-0 z-40 w-full backdrop-blur-sm",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 NAV BODY                                   */
/* -------------------------------------------------------------------------- */

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(0,0,0,0.4)"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      style={{ minWidth: "800px" }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
        visible && "bg-[#0D0D0D]/70",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                NAV ITEMS                                   */
/* -------------------------------------------------------------------------- */

export const NavItems = ({
  items,
  className,
  onItemClick,
  visible,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2 z-50",
        "text-[#F7F3E9]", // typography color
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={(e) => {
            e.preventDefault();
            const targetId = item.link.replace("#", "");
            const element = document.getElementById(targetId);
            if (element) element.scrollIntoView({ behavior: "smooth" });
            if (onItemClick) onItemClick();
          }}
          className="relative px-4 py-2 cursor-pointer"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-[#C9A857]/20"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              MOBILE NAV CONTAINER                          */
/* -------------------------------------------------------------------------- */

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible ? "0 0 24px rgba(0,0,0,0.4)" : "none",
        width: visible ? "90%" : "100%",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
        visible && "bg-[#0D0D0D]/70",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                           MOBILE NAV HEADER + MENU                         */
/* -------------------------------------------------------------------------- */

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => (
  <div className={cn("flex w-full flex-row items-center justify-between", className)}>
    {children}
  </div>
);

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-[#1A1A1A] px-4 shadow-lg",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* -------------------------------------------------------------------------- */
/*                              MOBILE NAV TOGGLE                             */
/* -------------------------------------------------------------------------- */

export const MobileNavToggle = ({
  isOpen,
  onClick,
  visible,
}: {
  isOpen: boolean;
  onClick: () => void;
  visible?: boolean;
}) => {
  return isOpen ? (
    <IconX
      className={cn("text-[#F7F3E9]")}
      onClick={onClick}
    />
  ) : (
    <IconMenu2
      className={cn("text-[#F7F3E9]")}
      onClick={onClick}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                                   LOGO                                     */
/* -------------------------------------------------------------------------- */

export const NavbarLogo = ({ visible }: { visible?: boolean }) => (
  <a
    href="#"
    className={cn(
      "relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal transition-colors",
      "text-[#F7F3E9]"
    )}
  >
    <img src="/LOGO_nk.png" alt="logo" width={30} height={30} />
    <span className="font-medium text-[#F7F3E9]">NKinteriors</span>
  </a>
);

/* -------------------------------------------------------------------------- */
/*                                  BUTTON                                    */
/* -------------------------------------------------------------------------- */

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
    | React.ComponentPropsWithoutRef<"a">
    | React.ComponentPropsWithoutRef<"button">
  )) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-[#C9A857] text-[#0D0D0D] font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary: "",
    secondary: "bg-transparent dark:text-[#F7F3E9]",
    dark: "bg-[#0D0D0D] text-[#F7F3E9]",
    gradient:
      "bg-gradient-to-b from-yellow-400 to-yellow-600 text-black",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
