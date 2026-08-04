import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { useScrollLock } from "../../hooks/use-scroll-lock";
import { useMediaQuery } from "../../hooks/hooks/use-media-query";

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  layoutId?: string;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function Dialog({
  open,
  onOpenChange,
  children,
  layoutId,
}: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onOpenChange(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables =
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [open, onOpenChange]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => onOpenChange(false)}
            aria-hidden="true"
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />

          {isDesktop ? (
            // ── Desktop: side panel, unchanged from what's already working ──
            <motion.div
              key="panel-desktop"
              role="dialog"
              aria-modal="true"
              layoutId={layoutId}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xl"
            >
              <div className="relative flex h-full min-w-0 flex-col overflow-y-auto overscroll-contain bg-background border-l border-border">
                <button
                  ref={closeButtonRef}
                  onClick={() => onOpenChange(false)}
                  aria-label="Close"
                  className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-background/95 text-muted backdrop-blur-md transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <X size={18} />
                </button>
                <div className="min-w-0 wrap-break-word px-8 pb-16 pt-16">
                  {children}
                </div>
              </div>
            </motion.div>
          ) : (
            // ── Mobile: full-screen bottom sheet, deliberately simple structure ──
            <motion.div
              key="panel-mobile"
              role="dialog"
              aria-modal="true"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 bg-background"
            >
              {/* Plain flex column: header in normal flow, content scrolls
                  below it. No sticky, no absolute overlap — nothing here
                  can reproduce the desktop-panel bug by construction. */}
              <div ref={panelRef} className="flex h-full flex-col">
                <div className="flex shrink-0 items-center justify-between px-5 py-4">
                  <span
                    aria-hidden="true"
                    className="h-1 w-9 rounded-full bg-border"
                  />
                  <button
                    ref={closeButtonRef}
                    onClick={() => onOpenChange(false)}
                    aria-label="Close"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="min-w-0 flex-1 overflow-y-auto overscroll-contain wrap-break-word px-5 pb-12">
                  {children}
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
