import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// Any page that doesn't exist (unknown URL, or a page that called notFound())
// sends the visitor one level up: /vltd/rajasthan/nowhere -> /vltd/rajasthan.
// If the parent is missing too, it lands here again and goes up once more,
// so the visitor always ends on the nearest real page, or the home page.
//
// Temporary (307) on purpose: a missing city/RTO page may be added later, and
// browsers cache permanent redirects.
export default async function NotFound() {
  const pathname = (await headers()).get("x-pathname") || "";
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0) {
    segments.pop();
    redirect("/" + segments.join("/"));
  }

  // Only reached if the path is unknown (header missing) or "/" itself failed:
  // never redirect to "/" from "/", that would loop.
  return (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-2xl font-bold text-gray-900">This page isn&apos;t available</h1>
      <p className="mt-3 text-gray-600">The link may be old or mistyped.</p>
      <Link href="/" className="mt-6 inline-block bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
        Go to the home page
      </Link>
    </div>
  );
}
