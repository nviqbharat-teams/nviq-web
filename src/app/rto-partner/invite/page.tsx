import { Metadata } from "next";
import { Suspense } from "react";
import InviteContent from "./invite-content";

export const metadata: Metadata = {
  title: "RTO Partner Invitation | NViQ",
  description: "Accept your NViQ RTO Partner invitation and get started on the NViQ platform.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RtoPartnerInvitePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-gray-500 font-medium">Loading invitation...</p>
          </div>
        </div>
      }
    >
      <InviteContent />
    </Suspense>
  );
}
