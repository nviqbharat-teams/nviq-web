import { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ALL_INDIA_RTOS } from "@/data/india-rto-master";
import { rtoAgentHref } from "@/lib/rto-agent";
import { getRtoOfficeDetails } from "@/data/rto-office-details";
import QuickLeadForm from "@/components/quick-lead-form";
import {
  KitPage,
  PageHero,
  Section,
  SectionHead,
  LinkRows,
  FaqSection,
  FinalCta,
  DirectoryBand,
  textLink,
} from "@/components/landing/kit";
import {
  findRtoByCodeParam,
  rtoCodeSlug,
  spokenCode,
  rtosInDistrict,
  rtosInState,
  neighbourCodes,
  partnerHref,
  officeName,
  officeLocality,
  officeTitle,
  compactCode,
} from "@/lib/rto-code";
import { getRtoService } from "@/data/rto-services";

const BASE = "https://www.naviqbharat.com";

type Props = { params: Promise<{ code: string }> };

export const dynamicParams = true;

export async function generateStaticParams() {
  return ALL_INDIA_RTOS.map((r) => ({ code: rtoCodeSlug(r.code) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const rto = findRtoByCodeParam(code);
  if (!rto) return { title: "RTO code not found | NViQ" };

  const spoken = spokenCode(rto.code);
  const area = rto.isUt ? "union territory" : "district";
  const details = getRtoOfficeDetails(rto.code);
  const locality = officeLocality(rto, details);
  const others = rtosInDistrict(rto).filter((r) => r.code !== rto.code);
  const heading = officeTitle(rto, locality);
  const compact = compactCode(rto.code);
  const have = [details?.address && "Address", details?.phone && "Phone", details?.timings && "Timings"].filter(Boolean) as string[];
  const title = details?.address
    ? `${heading} (${spoken}): ${have.length > 1 ? `${have.slice(0, -1).join(", ")} & ${have[have.length - 1]}` : have[0]}`
    : `${heading} ${spoken}: Which District, Passing & Code`;
  const description = details?.address
    ? `${heading} (${spoken}), ${rto.cityName}: ${details.address}${details.pincode ? ` ${details.pincode}` : ""}.${
        details.phone ? ` Phone ${details.phone}.` : ""
      } Timings, vehicle passing, AIS 140 GPS and other ${rto.cityName} RTO codes.`
    : `${spoken} (${compact}) is the code of ${rto.rtoName}, ${rto.cityName} ${area}, ${rto.stateName}. Vehicle passing steps, documents, AIS 140 GPS portal${
        others.length ? ` and other ${rto.cityName} codes: ${others.slice(0, 4).map((r) => spokenCode(r.code)).join(", ")}` : ""
      }.`;
  const url = `${BASE}/rto-code/${rtoCodeSlug(rto.code)}`;

  return {
    title,
    description,
    keywords: [
      ...(locality
        ? [`${locality.toLowerCase()} rto office`, `${locality.toLowerCase()} rto`, `rto office ${locality.toLowerCase()}`, `${locality.toLowerCase()} rto office address`, `${locality.toLowerCase()} rto timings`]
        : []),
      `${heading.toLowerCase()}`,
      `rto office ${officeTitle(rto, locality).split(" RTO")[0].toLowerCase()}`,
      `${compact.toLowerCase()} passing`,
      `${spoken.toLowerCase()} passing`,
      `ais 140 portal ${rto.cityName.toLowerCase()}`,
      `${spoken.toLowerCase()} which district`,
      `${spoken.toLowerCase()} rto`,
      `${rto.code.toLowerCase()} rto code`,
      `${rto.code.toLowerCase().replace("-", "")} rto`,
      `${spoken.toLowerCase()} district`,
      `${spoken.toLowerCase()} number plate`,
      `${rto.cityName.toLowerCase()} rto code`,
    ],
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "NViQ Bharat", locale: "en_IN", type: "article" },
  };
}

export default async function RtoCodePage({ params }: Props) {
  const { code } = await params;
  const rto = findRtoByCodeParam(code);
  if (!rto) notFound();

  const canonical = rtoCodeSlug(rto.code);
  if (code !== canonical) permanentRedirect(`/rto-code/${canonical}`);

  const spoken = spokenCode(rto.code);
  const [stateCode, num] = rto.code.split("-");
  const area = rto.isUt ? "union territory" : "district";
  const office = officeName(rto);
  const details = getRtoOfficeDetails(rto.code);
  const locality = officeLocality(rto, details);
  const fullAddress = details?.address ? `${details.address}${details.pincode ? ` ${details.pincode}` : ""}, ${rto.stateName}` : undefined;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${rto.rtoName} ${fullAddress ?? `${rto.cityName} ${rto.stateName}`}`)}`;
  const label = officeTitle(rto, locality);
  const compact = compactCode(rto.code);
  const fitness = getRtoService("fitness-certificate");
  const districtRtos = rtosInDistrict(rto);
  const otherInDistrict = districtRtos.filter((r) => r.code !== rto.code);
  const neighbours = neighbourCodes(rto);
  const stateRtos = rtosInState(rto.stateSlug);
  const partner = partnerHref(rto);
  const url = `${BASE}/rto-code/${canonical}`;

  const answer = `${spoken} is the RTO code of ${rto.rtoName}, in ${rto.cityName} ${area}, ${rto.stateName}. Vehicles with a number plate starting "${spoken}" were registered at this office.`;

  const officeFaqs = [
    ...(fullAddress ? [{ q: `What is the address of ${label}?`, a: `${label} (${spoken}) is at ${fullAddress}.` }] : []),
    ...(details?.phone
      ? [{ q: `What is the phone number of ${label}?`, a: `The office landline is ${details.phone}${details.email ? `, and the email is ${details.email}` : ""}.` }]
      : []),
    ...(details?.timings ? [{ q: `What are the timings of ${label}?`, a: details.timings }] : []),
    ...(details?.jurisdiction?.length
      ? [{ q: `Which areas come under ${label}?`, a: `${label} covers ${details.jurisdiction.join(", ")}.` }]
      : []),
  ];

  const passingFaqs = [
    {
      q: `How do I get vehicle passing done at ${spoken} (${compact})?`,
      a: `Passing at ${rto.rtoName} is the fitness inspection for commercial vehicles (or the inspection of a new vehicle). Keep RC, insurance, PUC, tax receipt and permit ready, and for buses, taxis, school vehicles and national-permit trucks an active AIS 140 VLTD on Vahan. Book the slot on Vahan, then take the vehicle for inspection.`,
    },
    {
      q: `Is there an AIS 140 (VLTD) portal for ${rto.cityName} / ${spoken}?`,
      a: `There is no separate portal for the vehicle owner. After an approved AIS 140 VLTD is fitted, the device maker's dealer activates it and updates the fitment on Vahan 4.0, where ${rto.rtoName} sees it during passing. NViQ fits the device and updates Vahan in about an hour.`,
    },
  ];

  const faqs = [
    ...officeFaqs,
    ...passingFaqs,
    { q: `${spoken} which district?`, a: answer },
    {
      q: `What does "${stateCode}" in ${spoken} mean?`,
      a: `"${stateCode}" is the state code for ${rto.stateName}, and "${num}" is the number given to ${rto.rtoName}. Together, ${spoken} identifies the RTO where the vehicle was registered.`,
    },
    otherInDistrict.length
      ? {
          q: `Which other RTO codes are in ${rto.cityName} ${area}?`,
          a: `Besides ${spoken} (${rto.rtoName}), ${rto.cityName} also has ${otherInDistrict.map((r) => `${spokenCode(r.code)} (${r.rtoName})`).join(", ")}.`,
        }
      : {
          q: `Is ${spoken} the only RTO code in ${rto.cityName}?`,
          a: `Yes. In our list, ${spoken} (${rto.rtoName}) is the only RTO code for ${rto.cityName} ${area}, ${rto.stateName}.`,
        },
    {
      q: `How is a ${spoken} number plate written?`,
      a: `As ${spoken} followed by a series and a number, for example ${spoken} AB 1234. The first part (${spoken}) always shows the registering RTO.`,
    },
    {
      q: `Does a ${spoken} commercial vehicle need an AIS 140 GPS (VLTD)?`,
      a: `Public service vehicles (buses, school buses, taxis) and national-permit goods vehicles registered at ${spoken} need an AIS 140 VLTD with emergency panic buttons, active on Vahan 4.0, before fitness or permit work at the RTO.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "RTO Codes", item: `${BASE}/rto-code` },
          { "@type": "ListItem", position: 3, name: `${rto.stateName} RTO codes`, item: `${BASE}/rto-code#${rto.stateSlug}` },
          { "@type": "ListItem", position: 4, name: locality ? `${locality} (${spoken})` : spoken, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "GovernmentOffice",
        name: rto.rtoName,
        alternateName: locality ? `${locality} RTO Office` : undefined,
        identifier: rto.code,
        telephone: details?.phone,
        email: details?.email,
        hasMap: fullAddress ? mapsHref : undefined,
        address: {
          "@type": "PostalAddress",
          streetAddress: details?.address,
          postalCode: details?.pincode,
          addressLocality: rto.cityName,
          addressRegion: rto.stateName,
          addressCountry: "IN",
        },
      },
    ],
  };

  const facts: [string, string][] = [
    ["RTO code", spoken],
    ["RTO office", rto.rtoName],
    ...(locality ? ([["Area", locality]] as [string, string][]) : []),
    [rto.isUt ? "Union territory" : "District", rto.cityName],
    ["State", `${rto.stateName} (${stateCode})`],
    ["Number plate format", `${spoken} AB 1234`],
  ];

  return (
    <KitPage>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "RTO Codes", href: "/rto-code" },
          { name: rto.stateName, href: `/rto-code#${rto.stateSlug}` },
          { name: locality ? `${locality} (${spoken})` : spoken },
        ]}
        eyebrow={`${rto.stateName} RTO code`}
        title={`${label} (${spoken}), ${rto.cityName} ${area}`}
        highlight={label}
        intro={fullAddress ? `${label} is at ${fullAddress}.${details?.phone ? ` Phone: ${details.phone}.` : ""} ${answer}` : answer}
        points={[`Office: ${office}`, `${area[0].toUpperCase()}${area.slice(1)}: ${rto.cityName}`, `State: ${rto.stateName}`, `${districtRtos.length} RTO code${districtRtos.length > 1 ? "s" : ""} in ${rto.cityName}`]}
      >
        <QuickLeadForm
          variant="kit"
          heading={`Vehicle registered at ${spoken}?`}
          subheading="Need AIS 140 GPS, fitness passing or permit help? Share your number and we call back."
          topic={`RTO services for ${spoken} (${rto.cityName}, ${rto.stateName})`}
          source={`rto_code_${canonical}`}
          productOfInterest="ais_140_vltd"
        />
      </PageHero>

      {details && (fullAddress || details.phone || details.timings) && (
        <Section labelledBy="contact-title">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <SectionHead id="contact-title" title={`${label}: address and contact`} sub={`Government RTO office for ${spoken}.`} />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 items-center justify-center bg-[#18202E] px-7 text-base font-bold text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8]"
                >
                  Open in Google Maps
                </a>
                {details.phone && (
                  <a
                    href={`tel:${details.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex h-14 items-center justify-center border border-[#C9D0DB] px-7 text-base font-bold hover:border-[#1D5BD8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8]"
                  >
                    Call the office
                  </a>
                )}
              </div>
            </div>
            <div>
              <dl className="border-t-2 border-[#18202E]">
                {(
                  [
                    ["Address", fullAddress],
                    ["Phone", details.phone],
                    ["Email", details.email],
                    ["Timings", details.timings],
                    ["Areas covered", details.jurisdiction?.join(", ")],
                  ] as [string, string | undefined][]
                )
                  .filter(([, v]) => v)
                  .map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] gap-6 border-b border-[#D9DEE6] py-4">
                      <dt className="font-semibold text-slate-500">{k}</dt>
                      <dd className="font-semibold break-words">{v}</dd>
                    </div>
                  ))}
              </dl>
              <p className="mt-4 text-sm text-slate-500">
                Details of the government RTO office, for reference{details.checked ? ` (last checked ${details.checked})` : ""}. NViQ is a private
                service provider, not the RTO.
              </p>
            </div>
          </div>
        </Section>
      )}

      <Section tone="grey" labelledBy="facts-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHead id="facts-title" title={`${spoken} at a glance`} sub={`Registration details for the ${spoken} RTO code.`} />
          <dl className="border-t-2 border-[#18202E]">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-6 border-b border-[#D9DEE6] py-4">
                <dt className="font-semibold text-slate-500">{k}</dt>
                <dd className="font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section labelledBy="district-title">
        <SectionHead
          id="district-title"
          title={`RTO codes in ${rto.cityName} ${area}`}
          sub={otherInDistrict.length ? `${rto.cityName} has ${districtRtos.length} RTO codes.` : `${spoken} is the only RTO code for ${rto.cityName}.`}
        />
        <div className="mt-10">
          <LinkRows
            cols={districtRtos.length > 4 ? 3 : 2}
            items={districtRtos.map((r) => ({
              href: `/rto-code/${rtoCodeSlug(r.code)}`,
              name: r.rtoName,
              tag: spokenCode(r.code),
              strong: true,
              current: r.code === rto.code,
            }))}
          />
        </div>
        {neighbours.length > 0 && (
          <>
            <h3 className="mt-14 font-display text-2xl font-semibold">Nearby codes in {rto.stateName}</h3>
            <div className="mt-5">
              <LinkRows
                cols={3}
                items={neighbours.map((r) => ({
                  href: `/rto-code/${rtoCodeSlug(r.code)}`,
                  name: `${spokenCode(r.code)}: ${r.cityName}`,
                  tag: r.rtoName,
                }))}
              />
            </div>
          </>
        )}
      </Section>

      <Section tone="grey" labelledBy="passing-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHead
              id="passing-title"
              title={`Vehicle passing at ${spoken} (${compact})`}
              sub={`"Passing" at ${rto.rtoName} is the fitness inspection for commercial vehicles, or the inspection of a new vehicle before registration.`}
            />
            <div className="mt-8 border-l-4 border-[#1D5BD8] bg-white p-6">
              <h3 className="font-display text-xl font-semibold">AIS 140 GPS (VLTD) portal</h3>
              <p className="mt-2 leading-relaxed text-slate-700">
                Buses, taxis, school vehicles and national-permit trucks need an active AIS 140 VLTD on Vahan before passing at {spoken}. There is no
                separate owner portal: the approved dealer fits the device and updates Vahan 4.0. We do this in about an hour.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={rtoAgentHref(rto.stateSlug, rto.citySlug)}
                className="flex h-14 items-center justify-center bg-[#1D5BD8] px-7 text-base font-bold text-white hover:bg-[#164BB5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18202E]"
              >
                Get passing done at {spoken}
              </Link>
              <Link
                href="/rto-services/fitness-certificate"
                className="flex h-14 items-center justify-center border border-[#C9D0DB] bg-white px-7 text-base font-bold hover:border-[#1D5BD8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8]"
              >
                Fitness certificate guide
              </Link>
            </div>
          </div>
          {fitness && (
            <div>
              <h3 className="font-display text-2xl font-semibold">Documents for passing</h3>
              <ul className="mt-5 border-t border-[#D9DEE6]">
                {fitness.documents.map((d) => (
                  <li key={d} className="border-b border-[#D9DEE6] py-3.5 leading-relaxed">
                    {d}
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 font-display text-2xl font-semibold">Steps</h3>
              <ol className="mt-5 space-y-3">
                {fitness.steps.map((st, i) => (
                  <li key={st} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#18202E] text-sm font-bold text-[#60A5FA]">{i + 1}</span>
                    <span className="leading-relaxed">{st}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </Section>

      <Section labelledBy="help-title">
        <SectionHead
          id="help-title"
          title={`Help for vehicles registered at ${spoken}`}
          sub="For commercial vehicle owners and RTO agents in this jurisdiction."
        />
        <ul className="mt-8 space-y-4 text-lg">
          <li>
            <Link href={rtoAgentHref(rto.stateSlug, rto.citySlug)} className={textLink}>
              RTO agent in {rto.cityName}
            </Link>{" "}
            for fitness, permit, RC transfer or NOC, with the total cost told upfront.
          </li>
          <li>
            <Link href="/vltd" className={textLink}>
              AIS 140 VLTD (GPS) fitment
            </Link>{" "}
            with the certificate on Vahan 4.0 in about an hour.
          </li>
          <li>
            <Link href="/rto-services" className={textLink}>
              RTO services
            </Link>{" "}
            : fitness passing, permits and related paperwork.
          </li>
          <li>
            <Link href={partner} className={textLink}>
              RTO agent or consultant at {spoken}?
            </Link>{" "}
            Get dealer rates and issue certificates from your phone.
          </li>
        </ul>
      </Section>

      <FaqSection faqs={faqs} title={`${label} (${spoken}): questions`} track="rto_code_faq_call" />

      <FinalCta
        title={`Commercial vehicle registered at ${spoken}?`}
        sub="AIS 140 GPS, fitness passing and permit help. Message us on WhatsApp."
        whatsappMessage={`Hi NViQ, my vehicle is registered at ${spoken} (${rto.cityName}, ${rto.stateName}). I need help with AIS 140 GPS / fitness passing.`}
        track="rto_code_final"
      />

      <DirectoryBand title={`All RTO codes in ${rto.stateName}`} sub={`${stateRtos.length} codes`}>
        <ul className="grid border-t border-[#D9DEE6] sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
          {stateRtos.map((r) => {
            const current = r.code === rto.code;
            return (
              <li key={r.code} className="border-b border-[#D9DEE6]">
                <Link
                  href={`/rto-code/${rtoCodeSlug(r.code)}`}
                  aria-current={current ? "page" : undefined}
                  className="group flex items-baseline gap-3 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5BD8]"
                >
                  <span className={`w-14 shrink-0 font-display text-lg font-bold ${current ? "text-[#1D5BD8]" : "text-[#18202E]"}`}>
                    {spokenCode(r.code)}
                  </span>
                  <span className="min-w-0">
                    <span className={`block font-semibold leading-snug group-hover:text-[#1D5BD8] group-hover:underline group-hover:underline-offset-4 ${current ? "text-[#1D5BD8]" : ""}`}>
                      {r.rtoName}
                    </span>
                    {r.cityName && !r.rtoName.toLowerCase().includes(r.cityName.toLowerCase()) && (
                      <span className="block text-sm text-slate-500">{r.cityName} district</span>
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-8">
          <Link href="/rto-code" className={textLink}>
            RTO codes for every state
          </Link>
        </p>
      </DirectoryBand>
    </KitPage>
  );
}
