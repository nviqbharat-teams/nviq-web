"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import logoImg from "@/app/logo.jpeg";
import { getPlayStoreUrl, getPlayStoreTestingUrl, DEFAULT_APP_ID } from "@/lib/playstore";

export default function InviteContent() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token") || "";
  const mobile = searchParams.get("mobile") || "";
  const caseId = searchParams.get("caseId") || "";
  const customAppId = searchParams.get("appId") || "";

  const appId = customAppId || DEFAULT_APP_ID;

  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate Play Store URL with URL-encoded referrer string
  const playStoreUrl = useMemo(() => {
    return getPlayStoreUrl({ token, mobile, caseId }, appId);
  }, [token, mobile, caseId, appId]);

  useEffect(() => {
    // Check device type after mount and trigger redirect
    const isAndroid = typeof navigator !== "undefined" && /android/i.test(navigator.userAgent);
    const isMobile = typeof navigator !== "undefined" && /iphone|ipad|ipod|android/i.test(navigator.userAgent);

    if (isAndroid || isMobile) {
      const timer = setTimeout(() => {
        setIsMobileDevice(true);
        window.location.href = playStoreUrl;
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [playStoreUrl]);

  const handleCopyCode = async () => {
    if (!token) return;
    try {
      await navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API fails
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background subtle radial gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs relative z-10 flex flex-col items-center text-center">
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src={logoImg}
            alt="NViQ Logo"
            width={44}
            height={44}
            className="rounded-xl object-cover border border-gray-100 shadow-2xs"
          />
          <div className="text-left">
            <span className="text-2xl font-black tracking-tight text-gray-900">
              NV<span className="text-blue-600">i</span>Q
            </span>
            <span className="block text-xs uppercase tracking-widest text-blue-600 font-semibold">
              RTO Partner
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Partner Portal Invitation
        </h1>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          {mobile ? (
            <>
              You’ve been invited to join the NViQ RTO Partner network for{" "}
              <span className="font-semibold text-gray-900">
                {mobile.startsWith("+") ? mobile : `+91 ${mobile}`}
              </span>
              .
            </>
          ) : (
            "You’ve been invited to join the NViQ RTO Partner network."
          )}
        </p>

        {/* Auto-redirect Status Badge */}
        {isMobileDevice ? (
          <div className="w-full bg-blue-50 border border-blue-200 rounded-xl p-3.5 mb-6 flex items-center justify-center gap-3 text-sm text-blue-700">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin shrink-0" />
            <span>Opening Google Play Store...</span>
          </div>
        ) : null}

        {/* Primary Action Button: Open Google Play */}
        <a
          href={playStoreUrl}
          className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-sm transition-all duration-200 transform active:scale-[0.98] mb-2"
        >
          {/* Google Play store icon */}
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.42V3.234c0-.55.23-1.05.609-1.42zm11.602 11.602l2.365-2.365-11.89-6.85 9.525 9.215zm2.365-2.365L20.25 12.5a1.1 1.1 0 0 1 0 1.9l-2.674 1.45-2.222-2.222 2.222-2.222zm-3.783 3.783l-9.525 9.215 11.89-6.85-2.365-2.365z" />
          </svg>
          <span>Install from Google Play</span>
        </a>

        {/* Internal Testing Opt-In Link */}
        <a
          href={getPlayStoreTestingUrl(appId)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 hover:text-blue-700 underline underline-offset-4 mb-4 transition-colors block"
        >
          Testing internal release? Join testing program
        </a>

        {/* Token Info & Copy Option */}
        {token && (
          <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 mb-4 flex items-center justify-between text-left">
            <div className="truncate mr-2">
              <span className="text-[11px] uppercase tracking-wider text-gray-500 block font-mono">
                Invitation Code
              </span>
              <span className="text-xs font-mono text-gray-800 font-semibold truncate block">
                {token}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyCode}
              className="shrink-0 px-3 py-1.5 bg-white border border-gray-200 hover:bg-gray-50 text-xs font-medium text-gray-700 rounded-lg transition-colors shadow-2xs"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        )}

        {/* Case ID badge if exists */}
        {caseId && (
          <div className="text-xs text-gray-500 mb-4">
            Case ID: <span className="font-mono text-gray-900 font-medium">{caseId}</span>
          </div>
        )}

        {/* Footer info note */}
        <p className="text-[12px] text-gray-500 mt-2">
          After installing the app, your invitation code will be applied automatically.
        </p>
      </div>

      <p className="text-xs text-gray-500 mt-6 text-center">
        © {new Date().getFullYear()} NVIQ BHARAT TECHNOLOGY PRIVATE LIMITED. All rights reserved.
      </p>
    </main>
  );
}
