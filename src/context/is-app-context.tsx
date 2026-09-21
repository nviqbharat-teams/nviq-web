"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  Suspense,
} from "react";
import { useSearchParams } from "next/navigation";

interface IsAppContextType {
  isApp: boolean;
}

const IsAppContext = createContext<IsAppContextType>({ isApp: false });

function SearchParamsWatcher({
  onParamChange,
}: {
  onParamChange: (val: boolean) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const isAppParam = searchParams.get("isApp") ?? searchParams.get("isapp");
    if (isAppParam !== null) {
      const lower = isAppParam.trim().toLowerCase();
      if (lower === "true" || lower === "1") {
        onParamChange(true);
      } else if (lower === "false" || lower === "0") {
        onParamChange(false);
      }
    }
  }, [searchParams, onParamChange]);

  return null;
}

export function IsAppProvider({ children }: { children: React.ReactNode }) {
  const [isApp, setIsApp] = useState(false);

  // Sync state with URL or sessionStorage on mount
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const isAppParam = params.get("isApp") ?? params.get("isapp");

      if (isAppParam !== null) {
        const lower = isAppParam.trim().toLowerCase();
        if (lower === "true" || lower === "1") {
          sessionStorage.setItem("isApp", "true");
          document.documentElement.classList.add("is-app");
          setIsApp(true);
          return;
        } else if (lower === "false" || lower === "0") {
          sessionStorage.removeItem("isApp");
          document.documentElement.classList.remove("is-app");
          setIsApp(false);
          return;
        }
      }

      if (sessionStorage.getItem("isApp") === "true") {
        document.documentElement.classList.add("is-app");
        setIsApp(true);
      }
    } catch {
      // Handle environments without sessionStorage
    }
  }, []);

  const handleParamChange = useCallback((val: boolean) => {
    try {
      if (val) {
        sessionStorage.setItem("isApp", "true");
        document.documentElement.classList.add("is-app");
      } else {
        sessionStorage.removeItem("isApp");
        document.documentElement.classList.remove("is-app");
      }
    } catch {
      // Handle environments without sessionStorage
    }
    setIsApp(val);
  }, []);

  return (
    <IsAppContext.Provider value={{ isApp }}>
      <Suspense fallback={null}>
        <SearchParamsWatcher onParamChange={handleParamChange} />
      </Suspense>
      {children}
    </IsAppContext.Provider>
  );
}

export function useIsApp(): boolean {
  const context = useContext(IsAppContext);
  return context ? context.isApp : false;
}
