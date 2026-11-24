import Link from "next/link";
import { relatedCaseStudies } from "@/data/case-studies";

/** "Success stories near you" — renders nothing until real case studies exist. Kit styling (ruled list, square edges). */
export default function CaseStudyStrip(props: { stateSlug?: string; segment?: string; rtoCode?: string; title?: string }) {
  const items = relatedCaseStudies(props);
  if (!items.length) return null;
  return (
    <div className="mt-14">
      <h3 className="font-display text-2xl font-semibold">{props.title ?? "Success stories near you"}</h3>
      <ul className="mt-5 grid border-t border-[#D9DEE6] sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
        {items.map((c) => (
          <li key={c.slug} className="border-b border-[#D9DEE6]">
            <Link href={`/case-studies/${c.slug}`} className="group block py-5">
              <span className="text-xs font-semibold text-[#1D5BD8]">
                {c.city}
                {c.rtoCode ? ` · ${c.rtoCode}` : ""} · {c.vehicles} vehicles
              </span>
              <span className="mt-1.5 block font-semibold leading-snug group-hover:text-[#1D5BD8] group-hover:underline group-hover:underline-offset-4">
                {c.title}
              </span>
              <span className="mt-1.5 block text-sm leading-relaxed text-slate-600 line-clamp-3">{c.result}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
