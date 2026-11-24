// Hindi names for states / UTs (by slug). City and RTO names stay in English
// (as printed on RC and Vahan), which is also how most users type them.

export const STATE_NAMES_HI: Record<string, string> = {
  "andhra-pradesh": "आंध्र प्रदेश",
  "arunachal-pradesh": "अरुणाचल प्रदेश",
  assam: "असम",
  bihar: "बिहार",
  chhattisgarh: "छत्तीसगढ़",
  goa: "गोवा",
  gujarat: "गुजरात",
  haryana: "हरियाणा",
  "himachal-pradesh": "हिमाचल प्रदेश",
  jharkhand: "झारखंड",
  karnataka: "कर्नाटक",
  kerala: "केरल",
  "madhya-pradesh": "मध्य प्रदेश",
  maharashtra: "महाराष्ट्र",
  manipur: "मणिपुर",
  meghalaya: "मेघालय",
  mizoram: "मिज़ोरम",
  nagaland: "नागालैंड",
  odisha: "ओडिशा",
  punjab: "पंजाब",
  rajasthan: "राजस्थान",
  sikkim: "सिक्किम",
  "tamil-nadu": "तमिलनाडु",
  telangana: "तेलंगाना",
  tripura: "त्रिपुरा",
  "uttar-pradesh": "उत्तर प्रदेश",
  uttarakhand: "उत्तराखंड",
  "west-bengal": "पश्चिम बंगाल",
  "andaman-and-nicobar-islands": "अंडमान और निकोबार",
  chandigarh: "चंडीगढ़",
  "dadra-and-nagar-haveli-and-daman-and-diu": "दादरा नगर हवेली और दमन दीव",
  delhi: "दिल्ली",
  "jammu-and-kashmir": "जम्मू और कश्मीर",
  ladakh: "लद्दाख",
  lakshadweep: "लक्षद्वीप",
  puducherry: "पुडुचेरी",
};

export function stateHi(slug: string, fallback: string): string {
  return STATE_NAMES_HI[slug] || fallback;
}
