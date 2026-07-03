"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { LeadModal, type LeadPlan } from "@/components/lead-modal";

interface LeadModalContextType {
  openLeadModal: (plan?: LeadPlan) => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState<LeadPlan>("starter");

  const openLeadModal = useCallback((selectedPlan: LeadPlan = "starter") => {
    setPlan(selectedPlan);
    setIsOpen(true);
  }, []);

  const closeLeadModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <LeadModalContext.Provider value={{ openLeadModal }}>
      {children}
      <LeadModal open={isOpen} plan={plan} onClose={closeLeadModal} />
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
