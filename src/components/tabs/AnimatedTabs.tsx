"use client";

import { useReducedMotion } from "framer-motion";
import { AnimatePresence, m } from "@/lib/motion";
import {
  Children,
  createContext,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useId,
  useState,
} from "react";

const TAB_EASE = [0.22, 1, 0.36, 1] as const;

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
  layoutId: string;
  reducedMotion: boolean | null;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab components must be used within <Tabs>");
  }
  return context;
}

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  layoutId?: string;
  className?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({
  defaultValue,
  children,
  layoutId,
  className = "",
  onValueChange,
}: TabsProps) {
  const [activeTab, setActiveTabState] = useState(defaultValue);
  const generatedId = useId();
  const reducedMotion = useReducedMotion();

  const setActiveTab = useCallback(
    (value: string) => {
      setActiveTabState(value);
      onValueChange?.(value);
    },
    [onValueChange],
  );

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
        layoutId: layoutId ?? `tab-indicator-${generatedId}`,
        reducedMotion,
      }}
    >
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}

export function TabsList({
  children,
  className = "",
  "aria-label": ariaLabel = "Tabs",
}: TabsListProps) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`flex gap-6 md:gap-10 border-b border-foreground/15 w-fit items-center ${className}`.trim()}
    >
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabsTrigger({
  value,
  children,
  className = "",
}: TabsTriggerProps) {
  const { activeTab, setActiveTab, layoutId, reducedMotion } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      id={`tab-${value}`}
      onClick={() => setActiveTab(value)}
      className={`relative pb-3 text-sm md:text-base font-light transition-colors duration-300 w-fit ${
        isActive ? "text-foreground opacity-100" : "text-gray1 opacity-60"
      } hover:opacity-100 ${className}`.trim()}
    >
      {children}
      {isActive && (
        <m.span
          layoutId={layoutId}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
          transition={
            reducedMotion ? { duration: 0 } : { duration: 0.45, ease: TAB_EASE }
          }
        />
      )}
    </button>
  );
}

interface TabsPanelsProps {
  children: ReactNode;
  className?: string;
}

export function TabsPanels({ children, className = "" }: TabsPanelsProps) {
  const { activeTab } = useTabsContext();

  const activePanel = Children.toArray(children).find(
    (child) =>
      isValidElement<TabsContentProps>(child) &&
      child.props.value === activeTab,
  ) as ReactElement<TabsContentProps> | undefined;

  return (
    <div className={className}>
      <AnimatePresence mode="wait">{activePanel}</AnimatePresence>
    </div>
  );
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabsContent({
  value,
  children,
  className = "",
}: TabsContentProps) {
  const { reducedMotion } = useTabsContext();

  return (
    <m.div
      key={value}
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: TAB_EASE }}
      className={className}
    >
      {children}
    </m.div>
  );
}
