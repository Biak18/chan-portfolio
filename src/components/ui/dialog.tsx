import * as RadixDialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode } from "react";

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  layoutId?: string;
};

export function Dialog({
  open,
  onOpenChange,
  children,
  layoutId,
}: DialogProps) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <RadixDialog.Portal forceMount>
            <RadixDialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              />
            </RadixDialog.Overlay>

            <RadixDialog.Content asChild forceMount>
              {/* This element owns ONLY positioning + the slide transform.
                  No overflow, no flex, no sticky descendants — keeps it
                  isolated from the sticky/transform interaction bug. */}
              <motion.div
                layoutId={layoutId}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-y-0 right-0 z-50 w-full max-w-full sm:max-w-xl"
              >
                {/* Scroll + sticky live here instead — a plain, untransformed
                    element, so `position: sticky` resolves normally. */}
                <div className="flex h-full min-w-0 flex-col overflow-y-auto overscroll-contain bg-background sm:border-l sm:border-border">
                  <div className="sticky top-0 z-10 flex shrink-0 justify-end bg-background/95 p-4 backdrop-blur-md">
                    <RadixDialog.Close
                      aria-label="Close"
                      className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <X size={18} />
                    </RadixDialog.Close>
                  </div>
                  <div className="min-w-0 wrap-break-word px-6 pb-12 sm:px-8">
                    {children}
                  </div>
                </div>
              </motion.div>
            </RadixDialog.Content>
          </RadixDialog.Portal>
        )}
      </AnimatePresence>
    </RadixDialog.Root>
  );
}
