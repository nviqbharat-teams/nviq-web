import { Metadata } from "next";
import { Suspense } from "react";
import InviteContent from "./invite-content";

export const metadata: Metadata = {
  title: "RTO Partner Invitation | NViQ",
  description: "Accept your NViQ RTO Partner invitation and get started on the NViQ platform.",
};

export default function RtoPartnerInvitePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-gray-400">Loading invitation...</p>
          </div>
        </div>
      }
    >
      <InviteContent />
    </Suspense>
  );
}
