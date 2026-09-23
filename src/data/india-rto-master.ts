// Master Database of All 28 States, 8 Union Territories, and 1,000+ RTO Offices across India.
// Sourced from Ministry of Road Transport and Highways (MoRTH) Parivahan Sewa vehicle registration codes.

export interface MasterRtoOffice {
  code: string;
  slug: string;
  name: string;
}

export interface MasterCity {
  name: string;
  slug: string;
  rtos: MasterRtoOffice[];
}

export interface MasterState {
  name: string;
  slug: string;
  code: string;
  capital: string;
  type: "state" | "union-territory";
  cities: MasterCity[];
}

export interface FlattenedRto {
  code: string;
  slug: string;
  rtoName: string;
  cityName: string;
  citySlug: string;
  stateName: string;
  stateSlug: string;
  stateCode: string;
  isUt: boolean;
}

export const ALL_INDIA_STATES: MasterState[] = [
  {
    "name": "Andhra Pradesh",
    "code": "AP",
    "capital": "Amaravati",
    "type": "state",
    "cities": [
      {
        "name": "Anantapur",
        "rtos": [
          {
            "code": "AP-02",
            "slug": "ap-02",
            "name": "Anantapur RTO"
          }
        ],
        "slug": "anantapur"
      },
      {
        "name": "Chittoor",
        "rtos": [
          {
            "code": "AP-03",
            "slug": "ap-03",
            "name": "Chittoor RTO"
          }
        ],
        "slug": "chittoor"
      },
      {
        "name": "Kadapa",
        "rtos": [
          {
            "code": "AP-04",
            "slug": "ap-04",
            "name": "Kadapa RTO"
          }
        ],
        "slug": "kadapa"
      },
      {
        "name": "Kakinada",
        "rtos": [
          {
            "code": "AP-05",
            "slug": "ap-05",
            "name": "Kakinada RTO"
          }
        ],
        "slug": "kakinada"
      },
      {
        "name": "Amalapuram",
        "rtos": [
          {
            "code": "AP-06",
            "slug": "ap-06",
            "name": "Amalapuram RTO"
          }
        ],
        "slug": "amalapuram"
      },
      {
        "name": "Guntur",
        "rtos": [
          {
            "code": "AP-07",
            "slug": "ap-07",
            "name": "Guntur RTO"
          },
          {
            "code": "AP-08",
            "slug": "ap-08",
            "name": "Guntur Rural RTO"
          }
        ],
        "slug": "guntur"
      },
      {
        "name": "Visakhapatnam",
        "rtos": [
          {
            "code": "AP-31",
            "slug": "ap-31",
            "name": "Visakhapatnam Central RTO"
          },
          {
            "code": "AP-32",
            "slug": "ap-32",
            "name": "Madhavadhara RTO"
          },
          {
            "code": "AP-33",
            "slug": "ap-33",
            "name": "Gajuwaka RTO"
          },
          {
            "code": "AP-34",
            "slug": "ap-34",
            "name": "Anakapalli RTO"
          }
        ],
        "slug": "visakhapatnam"
      },
      {
        "name": "Vijayawada",
        "rtos": [
          {
            "code": "AP-16",
            "slug": "ap-16",
            "name": "Vijayawada Central RTO"
          },
          {
            "code": "AP-17",
            "slug": "ap-17",
            "name": "Vijayawada Rural RTO"
          }
        ],
        "slug": "vijayawada"
      },
      {
        "name": "Kurnool",
        "rtos": [
          {
            "code": "AP-21",
            "slug": "ap-21",
            "name": "Kurnool RTO"
          }
        ],
        "slug": "kurnool"
      },
      {
        "name": "Nandyal",
        "rtos": [
          {
            "code": "AP-22",
            "slug": "ap-22",
            "name": "Nandyal RTO"
          }
        ],
        "slug": "nandyal"
      },
      {
        "name": "Nellore",
        "rtos": [
          {
            "code": "AP-26",
            "slug": "ap-26",
            "name": "Nellore RTO"
          }
        ],
        "slug": "nellore"
      },
      {
        "name": "Ongole",
        "rtos": [
          {
            "code": "AP-27",
            "slug": "ap-27",
            "name": "Ongole (Prakasam) RTO"
          }
        ],
        "slug": "ongole"
      },
      {
        "name": "Rajahmundry",
        "rtos": [
          {
            "code": "AP-28",
            "slug": "ap-28",
            "name": "Rajahmundry RTO"
          }
        ],
        "slug": "rajahmundry"
      },
      {
        "name": "Srikakulam",
        "rtos": [
          {
            "code": "AP-30",
            "slug": "ap-30",
            "name": "Srikakulam RTO"
          }
        ],
        "slug": "srikakulam"
      },
      {
        "name": "Vizianagaram",
        "rtos": [
          {
            "code": "AP-35",
            "slug": "ap-35",
            "name": "Vizianagaram RTO"
          }
        ],
        "slug": "vizianagaram"
      },
      {
        "name": "Eluru",
        "rtos": [
          {
            "code": "AP-37",
            "slug": "ap-37",
            "name": "Eluru RTO"
          }
        ],
        "slug": "eluru"
      },
      {
        "name": "Bhimavaram",
        "rtos": [
          {
            "code": "AP-38",
            "slug": "ap-38",
            "name": "Bhimavaram (West Godavari) RTO"
          }
        ],
        "slug": "bhimavaram"
      },
      {
        "name": "Tirupati",
        "rtos": [
          {
            "code": "AP-39",
            "slug": "ap-39",
            "name": "Tirupati RTO"
          }
        ],
        "slug": "tirupati"
      }
    ],
    "slug": "andhra-pradesh"
  },
  {
    "name": "Arunachal Pradesh",
    "code": "AR",
    "capital": "Itanagar",
    "type": "state",
    "cities": [
      {
        "name": "Itanagar",
        "rtos": [
          {
            "code": "AR-01",
            "slug": "ar-01",
            "name": "Itanagar State Capital RTO"
          },
          {
            "code": "AR-02",
            "slug": "ar-02",
            "name": "Itanagar Commercial RTO"
          }
        ],
        "slug": "itanagar"
      },
      {
        "name": "Tawang",
        "rtos": [
          {
            "code": "AR-03",
            "slug": "ar-03",
            "name": "Tawang DTO"
          }
        ],
        "slug": "tawang"
      },
      {
        "name": "Bomdila",
        "rtos": [
          {
            "code": "AR-04",
            "slug": "ar-04",
            "name": "Bomdila (West Kameng) DTO"
          }
        ],
        "slug": "bomdila"
      },
      {
        "name": "Seppa",
        "rtos": [
          {
            "code": "AR-05",
            "slug": "ar-05",
            "name": "Seppa (East Kameng) DTO"
          }
        ],
        "slug": "seppa"
      },
      {
        "name": "Ziro",
        "rtos": [
          {
            "code": "AR-06",
            "slug": "ar-06",
            "name": "Ziro (Lower Subansiri) DTO"
          }
        ],
        "slug": "ziro"
      },
      {
        "name": "Daporijo",
        "rtos": [
          {
            "code": "AR-07",
            "slug": "ar-07",
            "name": "Daporijo (Upper Subansiri) DTO"
          }
        ],
        "slug": "daporijo"
      },
      {
        "name": "Along",
        "rtos": [
          {
            "code": "AR-08",
            "slug": "ar-08",
            "name": "Along (West Siang) DTO"
          }
        ],
        "slug": "along"
      },
      {
        "name": "Pasighat",
        "rtos": [
          {
            "code": "AR-09",
            "slug": "ar-09",
            "name": "Pasighat (East Siang) DTO"
          }
        ],
        "slug": "pasighat"
      },
      {
        "name": "Anini",
        "rtos": [
          {
            "code": "AR-10",
            "slug": "ar-10",
            "name": "Anini (Dibang Valley) DTO"
          }
        ],
        "slug": "anini"
      },
      {
        "name": "Tezu",
        "rtos": [
          {
            "code": "AR-11",
            "slug": "ar-11",
            "name": "Tezu (Lohit) DTO"
          }
        ],
        "slug": "tezu"
      },
      {
        "name": "Changlang",
        "rtos": [
          {
            "code": "AR-12",
            "slug": "ar-12",
            "name": "Changlang DTO"
          }
        ],
        "slug": "changlang"
      },
      {
        "name": "Khonsa",
        "rtos": [
          {
            "code": "AR-13",
            "slug": "ar-13",
            "name": "Khonsa (Tirap) DTO"
          }
        ],
        "slug": "khonsa"
      },
      {
        "name": "Yingkiong",
        "rtos": [
          {
            "code": "AR-14",
            "slug": "ar-14",
            "name": "Yingkiong (Upper Siang) DTO"
          }
        ],
        "slug": "yingkiong"
      },
      {
        "name": "Koloriang",
        "rtos": [
          {
            "code": "AR-15",
            "slug": "ar-15",
            "name": "Koloriang (Kurung Kumey) DTO"
          }
        ],
        "slug": "koloriang"
      },
      {
        "name": "Roing",
        "rtos": [
          {
            "code": "AR-16",
            "slug": "ar-16",
            "name": "Roing (Lower Dibang Valley) DTO"
          }
        ],
        "slug": "roing"
      },
      {
        "name": "Hawai",
        "rtos": [
          {
            "code": "AR-17",
            "slug": "ar-17",
            "name": "Hawai (Anjaw) DTO"
          }
        ],
        "slug": "hawai"
      },
      {
        "name": "Palin",
        "rtos": [
          {
            "code": "AR-19",
            "slug": "ar-19",
            "name": "Palin (Kra Daadi) DTO"
          }
        ],
        "slug": "palin"
      },
      {
        "name": "Namsai",
        "rtos": [
          {
            "code": "AR-20",
            "slug": "ar-20",
            "name": "Namsai DTO"
          }
        ],
        "slug": "namsai"
      }
    ],
    "slug": "arunachal-pradesh"
  },
  {
    "name": "Assam",
    "code": "AS",
    "capital": "Dispur",
    "type": "state",
    "cities": [
      {
        "name": "Guwahati",
        "rtos": [
          {
            "code": "AS-01",
            "slug": "as-01",
            "name": "Guwahati (Kamrup Metro) DTO"
          },
          {
            "code": "AS-24",
            "slug": "as-24",
            "name": "Kamrup Rural DTO"
          }
        ],
        "slug": "guwahati"
      },
      {
        "name": "Nagaon",
        "rtos": [
          {
            "code": "AS-02",
            "slug": "as-02",
            "name": "Nagaon DTO"
          }
        ],
        "slug": "nagaon"
      },
      {
        "name": "Jorhat",
        "rtos": [
          {
            "code": "AS-03",
            "slug": "as-03",
            "name": "Jorhat DTO"
          }
        ],
        "slug": "jorhat"
      },
      {
        "name": "Sivasagar",
        "rtos": [
          {
            "code": "AS-04",
            "slug": "as-04",
            "name": "Sivasagar DTO"
          }
        ],
        "slug": "sivasagar"
      },
      {
        "name": "Golaghat",
        "rtos": [
          {
            "code": "AS-05",
            "slug": "as-05",
            "name": "Golaghat DTO"
          }
        ],
        "slug": "golaghat"
      },
      {
        "name": "Dibrugarh",
        "rtos": [
          {
            "code": "AS-06",
            "slug": "as-06",
            "name": "Dibrugarh DTO"
          }
        ],
        "slug": "dibrugarh"
      },
      {
        "name": "Tinsukia",
        "rtos": [
          {
            "code": "AS-07",
            "slug": "as-07",
            "name": "Tinsukia DTO"
          }
        ],
        "slug": "tinsukia"
      },
      {
        "name": "Dima Hasao",
        "rtos": [
          {
            "code": "AS-08",
            "slug": "as-08",
            "name": "Haflong (Dima Hasao) DTO"
          }
        ],
        "slug": "dima-hasao"
      },
      {
        "name": "Karbi Anglong",
        "rtos": [
          {
            "code": "AS-09",
            "slug": "as-09",
            "name": "Diphu (Karbi Anglong) DTO"
          }
        ],
        "slug": "karbi-anglong"
      },
      {
        "name": "Karimganj",
        "rtos": [
          {
            "code": "AS-10",
            "slug": "as-10",
            "name": "Karimganj DTO"
          }
        ],
        "slug": "karimganj"
      },
      {
        "name": "Silchar",
        "rtos": [
          {
            "code": "AS-11",
            "slug": "as-11",
            "name": "Silchar (Cachar) DTO"
          }
        ],
        "slug": "silchar"
      },
      {
        "name": "Tezpur",
        "rtos": [
          {
            "code": "AS-12",
            "slug": "as-12",
            "name": "Tezpur (Sonitpur) DTO"
          }
        ],
        "slug": "tezpur"
      },
      {
        "name": "Darrang",
        "rtos": [
          {
            "code": "AS-13",
            "slug": "as-13",
            "name": "Mangaldai (Darrang) DTO"
          }
        ],
        "slug": "darrang"
      },
      {
        "name": "Nalbari",
        "rtos": [
          {
            "code": "AS-14",
            "slug": "as-14",
            "name": "Nalbari DTO"
          }
        ],
        "slug": "nalbari"
      },
      {
        "name": "Barpeta",
        "rtos": [
          {
            "code": "AS-15",
            "slug": "as-15",
            "name": "Barpeta DTO"
          }
        ],
        "slug": "barpeta"
      },
      {
        "name": "Kokrajhar",
        "rtos": [
          {
            "code": "AS-16",
            "slug": "as-16",
            "name": "Kokrajhar DTO"
          }
        ],
        "slug": "kokrajhar"
      },
      {
        "name": "Dhubri",
        "rtos": [
          {
            "code": "AS-17",
            "slug": "as-17",
            "name": "Dhubri DTO"
          }
        ],
        "slug": "dhubri"
      },
      {
        "name": "Goalpara",
        "rtos": [
          {
            "code": "AS-18",
            "slug": "as-18",
            "name": "Goalpara DTO"
          }
        ],
        "slug": "goalpara"
      },
      {
        "name": "Bongaigaon",
        "rtos": [
          {
            "code": "AS-19",
            "slug": "as-19",
            "name": "Bongaigaon DTO"
          }
        ],
        "slug": "bongaigaon"
      },
      {
        "name": "Charaideo",
        "rtos": [
          {
            "code": "AS-21",
            "slug": "as-21",
            "name": "Charaideo (Sonari) DTO"
          }
        ],
        "slug": "charaideo"
      },
      {
        "name": "Hojai",
        "rtos": [
          {
            "code": "AS-22",
            "slug": "as-22",
            "name": "Hojai (Sankardev Nagar) DTO"
          }
        ],
        "slug": "hojai"
      },
      {
        "name": "Chirang",
        "rtos": [
          {
            "code": "AS-26",
            "slug": "as-26",
            "name": "Chirang (Kajalgaon) DTO"
          }
        ],
        "slug": "chirang"
      },
      {
        "name": "Morigaon",
        "rtos": [
          {
            "code": "AS-25",
            "slug": "as-25",
            "name": "Morigaon DTO"
          }
        ],
        "slug": "morigaon"
      },
      {
        "name": "Udalguri",
        "rtos": [
          {
            "code": "AS-27",
            "slug": "as-27",
            "name": "Udalguri DTO"
          }
        ],
        "slug": "udalguri"
      },
      {
        "name": "Baksa",
        "rtos": [
          {
            "code": "AS-28",
            "slug": "as-28",
            "name": "Baksa (Mushalpur) DTO"
          }
        ],
        "slug": "baksa"
      },
      {
        "name": "Majuli",
        "rtos": [
          {
            "code": "AS-29",
            "slug": "as-29",
            "name": "Majuli (Garamur) DTO"
          }
        ],
        "slug": "majuli"
      },
      {
        "name": "Biswanath",
        "rtos": [
          {
            "code": "AS-30",
            "slug": "as-30",
            "name": "Biswanath Chariali DTO"
          }
        ],
        "slug": "biswanath"
      },
      {
        "name": "Dhemaji",
        "rtos": [
          {
            "code": "AS-31",
            "slug": "as-31",
            "name": "Dhemaji DTO"
          }
        ],
        "slug": "dhemaji"
      },
      {
        "name": "South Salmara",
        "rtos": [
          {
            "code": "AS-32",
            "slug": "as-32",
            "name": "Hatsingimari DTO"
          }
        ],
        "slug": "south-salmara"
      },
      {
        "name": "Bajali",
        "rtos": [
          {
            "code": "AS-33",
            "slug": "as-33",
            "name": "Bajali (Pathsala) DTO"
          }
        ],
        "slug": "bajali"
      },
      {
        "name": "Tamulpur",
        "rtos": [
          {
            "code": "AS-34",
            "slug": "as-34",
            "name": "Tamulpur DTO"
          }
        ],
        "slug": "tamulpur"
      }
    ],
    "slug": "assam"
  },
  {
    "name": "Bihar",
    "code": "BR",
    "capital": "Patna",
    "type": "state",
    "cities": [
      {
        "name": "Patna",
        "rtos": [
          {
            "code": "BR-01",
            "slug": "br-01",
            "name": "Patna Central DTO"
          }
        ],
        "slug": "patna"
      },
      {
        "name": "Gaya",
        "rtos": [
          {
            "code": "BR-02",
            "slug": "br-02",
            "name": "Gaya DTO"
          }
        ],
        "slug": "gaya"
      },
      {
        "name": "Bhojpur",
        "rtos": [
          {
            "code": "BR-03",
            "slug": "br-03",
            "name": "Ara (Bhojpur) DTO"
          }
        ],
        "slug": "bhojpur"
      },
      {
        "name": "Saran",
        "rtos": [
          {
            "code": "BR-04",
            "slug": "br-04",
            "name": "Chhapra (Saran) DTO"
          }
        ],
        "slug": "saran"
      },
      {
        "name": "Motihari",
        "rtos": [
          {
            "code": "BR-05",
            "slug": "br-05",
            "name": "Motihari (East Champaran) DTO"
          }
        ],
        "slug": "motihari"
      },
      {
        "name": "Muzaffarpur",
        "rtos": [
          {
            "code": "BR-06",
            "slug": "br-06",
            "name": "Muzaffarpur DTO"
          }
        ],
        "slug": "muzaffarpur"
      },
      {
        "name": "Darbhanga",
        "rtos": [
          {
            "code": "BR-07",
            "slug": "br-07",
            "name": "Darbhanga DTO"
          }
        ],
        "slug": "darbhanga"
      },
      {
        "name": "Munger",
        "rtos": [
          {
            "code": "BR-08",
            "slug": "br-08",
            "name": "Munger DTO"
          }
        ],
        "slug": "munger"
      },
      {
        "name": "Begusarai",
        "rtos": [
          {
            "code": "BR-09",
            "slug": "br-09",
            "name": "Begusarai DTO"
          }
        ],
        "slug": "begusarai"
      },
      {
        "name": "Bhagalpur",
        "rtos": [
          {
            "code": "BR-10",
            "slug": "br-10",
            "name": "Bhagalpur DTO"
          }
        ],
        "slug": "bhagalpur"
      },
      {
        "name": "Purnia",
        "rtos": [
          {
            "code": "BR-11",
            "slug": "br-11",
            "name": "Purnia DTO"
          }
        ],
        "slug": "purnia"
      },
      {
        "name": "Saharsa",
        "rtos": [
          {
            "code": "BR-19",
            "slug": "br-19",
            "name": "Saharsa DTO"
          }
        ],
        "slug": "saharsa"
      },
      {
        "name": "Nalanda",
        "rtos": [
          {
            "code": "BR-21",
            "slug": "br-21",
            "name": "Bihar Sharif (Nalanda) DTO"
          }
        ],
        "slug": "nalanda"
      },
      {
        "name": "Bettiah",
        "rtos": [
          {
            "code": "BR-22",
            "slug": "br-22",
            "name": "Bettiah (West Champaran) DTO"
          }
        ],
        "slug": "bettiah"
      },
      {
        "name": "Dehri",
        "rtos": [
          {
            "code": "BR-24",
            "slug": "br-24",
            "name": "Dehri on Sone (Rohtas) DTO"
          }
        ],
        "slug": "dehri"
      },
      {
        "name": "Jehanabad",
        "rtos": [
          {
            "code": "BR-25",
            "slug": "br-25",
            "name": "Jehanabad DTO"
          }
        ],
        "slug": "jehanabad"
      },
      {
        "name": "Aurangabad",
        "rtos": [
          {
            "code": "BR-26",
            "slug": "br-26",
            "name": "Aurangabad DTO"
          }
        ],
        "slug": "aurangabad"
      },
      {
        "name": "Nawada",
        "rtos": [
          {
            "code": "BR-27",
            "slug": "br-27",
            "name": "Nawada DTO"
          }
        ],
        "slug": "nawada"
      },
      {
        "name": "Gopalganj",
        "rtos": [
          {
            "code": "BR-28",
            "slug": "br-28",
            "name": "Gopalganj DTO"
          }
        ],
        "slug": "gopalganj"
      },
      {
        "name": "Siwan",
        "rtos": [
          {
            "code": "BR-29",
            "slug": "br-29",
            "name": "Siwan DTO"
          }
        ],
        "slug": "siwan"
      },
      {
        "name": "Sitamarhi",
        "rtos": [
          {
            "code": "BR-30",
            "slug": "br-30",
            "name": "Sitamarhi DTO"
          }
        ],
        "slug": "sitamarhi"
      },
      {
        "name": "Vaishali",
        "rtos": [
          {
            "code": "BR-31",
            "slug": "br-31",
            "name": "Hajipur (Vaishali) DTO"
          }
        ],
        "slug": "vaishali"
      },
      {
        "name": "Madhubani",
        "rtos": [
          {
            "code": "BR-32",
            "slug": "br-32",
            "name": "Madhubani DTO"
          }
        ],
        "slug": "madhubani"
      },
      {
        "name": "Samastipur",
        "rtos": [
          {
            "code": "BR-33",
            "slug": "br-33",
            "name": "Samastipur DTO"
          }
        ],
        "slug": "samastipur"
      },
      {
        "name": "Khagaria",
        "rtos": [
          {
            "code": "BR-34",
            "slug": "br-34",
            "name": "Khagaria DTO"
          }
        ],
        "slug": "khagaria"
      },
      {
        "name": "Kishanganj",
        "rtos": [
          {
            "code": "BR-37",
            "slug": "br-37",
            "name": "Kishanganj DTO"
          }
        ],
        "slug": "kishanganj"
      },
      {
        "name": "Araria",
        "rtos": [
          {
            "code": "BR-38",
            "slug": "br-38",
            "name": "Araria DTO"
          }
        ],
        "slug": "araria"
      },
      {
        "name": "Katihar",
        "rtos": [
          {
            "code": "BR-39",
            "slug": "br-39",
            "name": "Katihar DTO"
          }
        ],
        "slug": "katihar"
      },
      {
        "name": "Madhepura",
        "rtos": [
          {
            "code": "BR-43",
            "slug": "br-43",
            "name": "Madhepura DTO"
          }
        ],
        "slug": "madhepura"
      },
      {
        "name": "Buxar",
        "rtos": [
          {
            "code": "BR-44",
            "slug": "br-44",
            "name": "Buxar DTO"
          }
        ],
        "slug": "buxar"
      },
      {
        "name": "Kaimur",
        "rtos": [
          {
            "code": "BR-45",
            "slug": "br-45",
            "name": "Bhabua (Kaimur) DTO"
          }
        ],
        "slug": "kaimur"
      },
      {
        "name": "Jamui",
        "rtos": [
          {
            "code": "BR-46",
            "slug": "br-46",
            "name": "Jamui DTO"
          }
        ],
        "slug": "jamui"
      },
      {
        "name": "Supaul",
        "rtos": [
          {
            "code": "BR-50",
            "slug": "br-50",
            "name": "Supaul DTO"
          }
        ],
        "slug": "supaul"
      },
      {
        "name": "Banka",
        "rtos": [
          {
            "code": "BR-51",
            "slug": "br-51",
            "name": "Banka DTO"
          }
        ],
        "slug": "banka"
      },
      {
        "name": "Sheikhpura",
        "rtos": [
          {
            "code": "BR-52",
            "slug": "br-52",
            "name": "Sheikhpura DTO"
          }
        ],
        "slug": "sheikhpura"
      },
      {
        "name": "Lakhisarai",
        "rtos": [
          {
            "code": "BR-53",
            "slug": "br-53",
            "name": "Lakhisarai DTO"
          }
        ],
        "slug": "lakhisarai"
      },
      {
        "name": "Sheohar",
        "rtos": [
          {
            "code": "BR-55",
            "slug": "br-55",
            "name": "Sheohar DTO"
          }
        ],
        "slug": "sheohar"
      },
      {
        "name": "Arwal",
        "rtos": [
          {
            "code": "BR-56",
            "slug": "br-56",
            "name": "Arwal DTO"
          }
        ],
        "slug": "arwal"
      },
      {
        "name": "Sasaram",
        "rtos": [
          {
            "code": "BR-57",
            "slug": "br-57",
            "name": "Sasaram DTO"
          }
        ],
        "slug": "sasaram"
      }
    ],
    "slug": "bihar"
  },
  {
    "name": "Chhattisgarh",
    "code": "CG",
    "capital": "Raipur",
    "type": "state",
    "cities": [
      {
        "name": "Raipur",
        "rtos": [
          {
            "code": "CG-04",
            "slug": "cg-04",
            "name": "Raipur RTO"
          }
        ],
        "slug": "raipur"
      },
      {
        "name": "Dhamtari",
        "rtos": [
          {
            "code": "CG-05",
            "slug": "cg-05",
            "name": "Dhamtari DTO"
          }
        ],
        "slug": "dhamtari"
      },
      {
        "name": "Mahasamund",
        "rtos": [
          {
            "code": "CG-06",
            "slug": "cg-06",
            "name": "Mahasamund DTO"
          }
        ],
        "slug": "mahasamund"
      },
      {
        "name": "Durg",
        "rtos": [
          {
            "code": "CG-07",
            "slug": "cg-07",
            "name": "Durg (Bhilai) RTO"
          }
        ],
        "slug": "durg"
      },
      {
        "name": "Rajnandgaon",
        "rtos": [
          {
            "code": "CG-08",
            "slug": "cg-08",
            "name": "Rajnandgaon DTO"
          }
        ],
        "slug": "rajnandgaon"
      },
      {
        "name": "Kawardha",
        "rtos": [
          {
            "code": "CG-09",
            "slug": "cg-09",
            "name": "Kabirdham (Kawardha) DTO"
          }
        ],
        "slug": "kawardha"
      },
      {
        "name": "Bilaspur",
        "rtos": [
          {
            "code": "CG-10",
            "slug": "cg-10",
            "name": "Bilaspur RTO"
          }
        ],
        "slug": "bilaspur"
      },
      {
        "name": "Janjgir-Champa",
        "rtos": [
          {
            "code": "CG-11",
            "slug": "cg-11",
            "name": "Janjgir-Champa DTO"
          }
        ],
        "slug": "janjgir-champa"
      },
      {
        "name": "Korba",
        "rtos": [
          {
            "code": "CG-12",
            "slug": "cg-12",
            "name": "Korba (Mining Hub) DTO"
          }
        ],
        "slug": "korba"
      },
      {
        "name": "Raigarh",
        "rtos": [
          {
            "code": "CG-13",
            "slug": "cg-13",
            "name": "Raigarh DTO"
          }
        ],
        "slug": "raigarh"
      },
      {
        "name": "Jashpur",
        "rtos": [
          {
            "code": "CG-14",
            "slug": "cg-14",
            "name": "Jashpur Nagar DTO"
          }
        ],
        "slug": "jashpur"
      },
      {
        "name": "Surguja",
        "rtos": [
          {
            "code": "CG-15",
            "slug": "cg-15",
            "name": "Ambikapur (Surguja) DTO"
          }
        ],
        "slug": "surguja"
      },
      {
        "name": "Baikunthpur",
        "rtos": [
          {
            "code": "CG-16",
            "slug": "cg-16",
            "name": "Koriya (Baikunthpur) DTO"
          }
        ],
        "slug": "baikunthpur"
      },
      {
        "name": "Jagdalpur",
        "rtos": [
          {
            "code": "CG-17",
            "slug": "cg-17",
            "name": "Jagdalpur (Bastar) RTO"
          }
        ],
        "slug": "jagdalpur"
      },
      {
        "name": "Dantewada",
        "rtos": [
          {
            "code": "CG-18",
            "slug": "cg-18",
            "name": "Dantewada DTO"
          }
        ],
        "slug": "dantewada"
      },
      {
        "name": "Kanker",
        "rtos": [
          {
            "code": "CG-19",
            "slug": "cg-19",
            "name": "Kanker (North Bastar) DTO"
          }
        ],
        "slug": "kanker"
      },
      {
        "name": "Bijapur",
        "rtos": [
          {
            "code": "CG-20",
            "slug": "cg-20",
            "name": "Bijapur DTO"
          }
        ],
        "slug": "bijapur"
      },
      {
        "name": "Narayanpur",
        "rtos": [
          {
            "code": "CG-21",
            "slug": "cg-21",
            "name": "Narayanpur DTO"
          }
        ],
        "slug": "narayanpur"
      },
      {
        "name": "Baloda Bazar",
        "rtos": [
          {
            "code": "CG-22",
            "slug": "cg-22",
            "name": "Baloda Bazar DTO"
          }
        ],
        "slug": "baloda-bazar"
      },
      {
        "name": "Gariaband",
        "rtos": [
          {
            "code": "CG-23",
            "slug": "cg-23",
            "name": "Gariaband DTO"
          }
        ],
        "slug": "gariaband"
      },
      {
        "name": "Balod",
        "rtos": [
          {
            "code": "CG-24",
            "slug": "cg-24",
            "name": "Balod DTO"
          }
        ],
        "slug": "balod"
      },
      {
        "name": "Bemetara",
        "rtos": [
          {
            "code": "CG-25",
            "slug": "cg-25",
            "name": "Bemetara DTO"
          }
        ],
        "slug": "bemetara"
      },
      {
        "name": "Sukma",
        "rtos": [
          {
            "code": "CG-26",
            "slug": "cg-26",
            "name": "Sukma DTO"
          }
        ],
        "slug": "sukma"
      },
      {
        "name": "Kondagaon",
        "rtos": [
          {
            "code": "CG-27",
            "slug": "cg-27",
            "name": "Kondagaon DTO"
          }
        ],
        "slug": "kondagaon"
      },
      {
        "name": "Mungeli",
        "rtos": [
          {
            "code": "CG-28",
            "slug": "cg-28",
            "name": "Mungeli DTO"
          }
        ],
        "slug": "mungeli"
      },
      {
        "name": "Surajpur",
        "rtos": [
          {
            "code": "CG-29",
            "slug": "cg-29",
            "name": "Surajpur DTO"
          }
        ],
        "slug": "surajpur"
      },
      {
        "name": "Balrampur",
        "rtos": [
          {
            "code": "CG-30",
            "slug": "cg-30",
            "name": "Balrampur-Ramanujganj DTO"
          }
        ],
        "slug": "balrampur"
      }
    ],
    "slug": "chhattisgarh"
  },
  {
    "name": "Goa",
    "code": "GA",
    "capital": "Panaji",
    "type": "state",
    "cities": [
      {
        "name": "Panaji",
        "rtos": [
          {
            "code": "GA-01",
            "slug": "ga-01",
            "name": "Panaji (North Goa) RTO"
          },
          {
            "code": "GA-07",
            "slug": "ga-07",
            "name": "Panaji Central RTO"
          }
        ],
        "slug": "panaji"
      },
      {
        "name": "Margao",
        "rtos": [
          {
            "code": "GA-02",
            "slug": "ga-02",
            "name": "Margao (South Goa) RTO"
          },
          {
            "code": "GA-08",
            "slug": "ga-08",
            "name": "Margao Commercial RTO"
          }
        ],
        "slug": "margao"
      },
      {
        "name": "Mapusa",
        "rtos": [
          {
            "code": "GA-03",
            "slug": "ga-03",
            "name": "Mapusa (Bardez) RTO"
          }
        ],
        "slug": "mapusa"
      },
      {
        "name": "Bicholim",
        "rtos": [
          {
            "code": "GA-04",
            "slug": "ga-04",
            "name": "Bicholim RTO"
          }
        ],
        "slug": "bicholim"
      },
      {
        "name": "Ponda",
        "rtos": [
          {
            "code": "GA-05",
            "slug": "ga-05",
            "name": "Ponda RTO"
          }
        ],
        "slug": "ponda"
      },
      {
        "name": "Vasco da Gama",
        "rtos": [
          {
            "code": "GA-06",
            "slug": "ga-06",
            "name": "Vasco da Gama (Mormugao) RTO"
          }
        ],
        "slug": "vasco-da-gama"
      },
      {
        "name": "Quepem",
        "rtos": [
          {
            "code": "GA-09",
            "slug": "ga-09",
            "name": "Quepem RTO"
          }
        ],
        "slug": "quepem"
      },
      {
        "name": "Canacona",
        "rtos": [
          {
            "code": "GA-10",
            "slug": "ga-10",
            "name": "Canacona RTO"
          }
        ],
        "slug": "canacona"
      },
      {
        "name": "Pernem",
        "rtos": [
          {
            "code": "GA-11",
            "slug": "ga-11",
            "name": "Pernem RTO"
          }
        ],
        "slug": "pernem"
      },
      {
        "name": "Dharbandora",
        "rtos": [
          {
            "code": "GA-12",
            "slug": "ga-12",
            "name": "Dharbandora RTO"
          }
        ],
        "slug": "dharbandora"
      }
    ],
    "slug": "goa"
  },
  {
    "name": "Gujarat",
    "code": "GJ",
    "capital": "Gandhinagar",
    "type": "state",
    "cities": [
      {
        "name": "Ahmedabad",
        "rtos": [
          {
            "code": "GJ-01",
            "slug": "gj-01",
            "name": "Ahmedabad West (Subhash Bridge) RTO"
          },
          {
            "code": "GJ-27",
            "slug": "gj-27",
            "name": "Ahmedabad East (Vastral) RTO"
          },
          {
            "code": "GJ-38",
            "slug": "gj-38",
            "name": "Bavla RTO"
          }
        ],
        "slug": "ahmedabad"
      },
      {
        "name": "Mehsana",
        "rtos": [
          {
            "code": "GJ-02",
            "slug": "gj-02",
            "name": "Mehsana RTO"
          }
        ],
        "slug": "mehsana"
      },
      {
        "name": "Rajkot",
        "rtos": [
          {
            "code": "GJ-03",
            "slug": "gj-03",
            "name": "Rajkot RTO"
          }
        ],
        "slug": "rajkot"
      },
      {
        "name": "Bhavnagar",
        "rtos": [
          {
            "code": "GJ-04",
            "slug": "gj-04",
            "name": "Bhavnagar RTO"
          }
        ],
        "slug": "bhavnagar"
      },
      {
        "name": "Surat",
        "rtos": [
          {
            "code": "GJ-05",
            "slug": "gj-05",
            "name": "Surat City RTO"
          },
          {
            "code": "GJ-28",
            "slug": "gj-28",
            "name": "Surat Rural (Pal) RTO"
          }
        ],
        "slug": "surat"
      },
      {
        "name": "Vadodara",
        "rtos": [
          {
            "code": "GJ-06",
            "slug": "gj-06",
            "name": "Vadodara Central RTO"
          },
          {
            "code": "GJ-29",
            "slug": "gj-29",
            "name": "Vadodara Rural (Darjipura) RTO"
          }
        ],
        "slug": "vadodara"
      },
      {
        "name": "Kheda",
        "rtos": [
          {
            "code": "GJ-07",
            "slug": "gj-07",
            "name": "Nadiad (Kheda) RTO"
          }
        ],
        "slug": "kheda"
      },
      {
        "name": "Banaskantha",
        "rtos": [
          {
            "code": "GJ-08",
            "slug": "gj-08",
            "name": "Palanpur (Banaskantha) RTO"
          }
        ],
        "slug": "banaskantha"
      },
      {
        "name": "Sabarkantha",
        "rtos": [
          {
            "code": "GJ-09",
            "slug": "gj-09",
            "name": "Himmatnagar (Sabarkantha) RTO"
          }
        ],
        "slug": "sabarkantha"
      },
      {
        "name": "Jamnagar",
        "rtos": [
          {
            "code": "GJ-10",
            "slug": "gj-10",
            "name": "Jamnagar RTO"
          }
        ],
        "slug": "jamnagar"
      },
      {
        "name": "Junagadh",
        "rtos": [
          {
            "code": "GJ-11",
            "slug": "gj-11",
            "name": "Junagadh RTO"
          }
        ],
        "slug": "junagadh"
      },
      {
        "name": "Kutch",
        "rtos": [
          {
            "code": "GJ-12",
            "slug": "gj-12",
            "name": "Bhuj (Kutch) RTO"
          }
        ],
        "slug": "kutch"
      },
      {
        "name": "Surendranagar",
        "rtos": [
          {
            "code": "GJ-13",
            "slug": "gj-13",
            "name": "Surendranagar RTO"
          }
        ],
        "slug": "surendranagar"
      },
      {
        "name": "Amreli",
        "rtos": [
          {
            "code": "GJ-14",
            "slug": "gj-14",
            "name": "Amreli RTO"
          }
        ],
        "slug": "amreli"
      },
      {
        "name": "Valsad",
        "rtos": [
          {
            "code": "GJ-15",
            "slug": "gj-15",
            "name": "Valsad RTO"
          }
        ],
        "slug": "valsad"
      },
      {
        "name": "Bharuch",
        "rtos": [
          {
            "code": "GJ-16",
            "slug": "gj-16",
            "name": "Bharuch RTO"
          }
        ],
        "slug": "bharuch"
      },
      {
        "name": "Panchmahal",
        "rtos": [
          {
            "code": "GJ-17",
            "slug": "gj-17",
            "name": "Godhra (Panchmahal) RTO"
          }
        ],
        "slug": "panchmahal"
      },
      {
        "name": "Gandhinagar",
        "rtos": [
          {
            "code": "GJ-18",
            "slug": "gj-18",
            "name": "Gandhinagar RTO"
          }
        ],
        "slug": "gandhinagar"
      },
      {
        "name": "Navsari",
        "rtos": [
          {
            "code": "GJ-19",
            "slug": "gj-19",
            "name": "Navsari RTO"
          }
        ],
        "slug": "navsari"
      },
      {
        "name": "Dahod",
        "rtos": [
          {
            "code": "GJ-20",
            "slug": "gj-20",
            "name": "Dahod RTO"
          }
        ],
        "slug": "dahod"
      },
      {
        "name": "Tapi",
        "rtos": [
          {
            "code": "GJ-21",
            "slug": "gj-21",
            "name": "Vyara (Tapi) RTO"
          }
        ],
        "slug": "tapi"
      },
      {
        "name": "Narmada",
        "rtos": [
          {
            "code": "GJ-22",
            "slug": "gj-22",
            "name": "Rajpipla (Narmada) RTO"
          }
        ],
        "slug": "narmada"
      },
      {
        "name": "Anand",
        "rtos": [
          {
            "code": "GJ-23",
            "slug": "gj-23",
            "name": "Anand RTO"
          }
        ],
        "slug": "anand"
      },
      {
        "name": "Patan",
        "rtos": [
          {
            "code": "GJ-24",
            "slug": "gj-24",
            "name": "Patan RTO"
          }
        ],
        "slug": "patan"
      },
      {
        "name": "Porbandar",
        "rtos": [
          {
            "code": "GJ-25",
            "slug": "gj-25",
            "name": "Porbandar RTO"
          }
        ],
        "slug": "porbandar"
      },
      {
        "name": "Dang",
        "rtos": [
          {
            "code": "GJ-26",
            "slug": "gj-26",
            "name": "Ahwa (Dang) RTO"
          }
        ],
        "slug": "dang"
      },
      {
        "name": "Aravalli",
        "rtos": [
          {
            "code": "GJ-30",
            "slug": "gj-30",
            "name": "Modasa (Aravalli) RTO"
          }
        ],
        "slug": "aravalli"
      },
      {
        "name": "Mahisagar",
        "rtos": [
          {
            "code": "GJ-31",
            "slug": "gj-31",
            "name": "Lunawada (Mahisagar) RTO"
          }
        ],
        "slug": "mahisagar"
      },
      {
        "name": "Gir Somnath",
        "rtos": [
          {
            "code": "GJ-32",
            "slug": "gj-32",
            "name": "Veraval (Gir Somnath) RTO"
          }
        ],
        "slug": "gir-somnath"
      },
      {
        "name": "Botad",
        "rtos": [
          {
            "code": "GJ-33",
            "slug": "gj-33",
            "name": "Botad RTO"
          }
        ],
        "slug": "botad"
      },
      {
        "name": "Chhota Udaipur",
        "rtos": [
          {
            "code": "GJ-34",
            "slug": "gj-34",
            "name": "Chhota Udaipur RTO"
          }
        ],
        "slug": "chhota-udaipur"
      },
      {
        "name": "Devbhoomi Dwarka",
        "rtos": [
          {
            "code": "GJ-35",
            "slug": "gj-35",
            "name": "Khambhalia (Devbhoomi Dwarka) RTO"
          }
        ],
        "slug": "devbhoomi-dwarka"
      },
      {
        "name": "Morbi",
        "rtos": [
          {
            "code": "GJ-36",
            "slug": "gj-36",
            "name": "Morbi Ceramic Hub RTO"
          }
        ],
        "slug": "morbi"
      }
    ],
    "slug": "gujarat"
  },
  {
    "name": "Haryana",
    "code": "HR",
    "capital": "Chandigarh",
    "type": "state",
    "cities": [
      {
        "name": "Ambala",
        "rtos": [
          {
            "code": "HR-01",
            "slug": "hr-01",
            "name": "Ambala City SDM"
          },
          {
            "code": "HR-04",
            "slug": "hr-04",
            "name": "Naraingarh SDM"
          },
          {
            "code": "HR-37",
            "slug": "hr-37",
            "name": "Ambala Cantt SDM"
          }
        ],
        "slug": "ambala"
      },
      {
        "name": "Yamunanagar",
        "rtos": [
          {
            "code": "HR-02",
            "slug": "hr-02",
            "name": "Yamunanagar SDM"
          },
          {
            "code": "HR-58",
            "slug": "hr-58",
            "name": "Yamunanagar Commercial RTA"
          },
          {
            "code": "HR-92",
            "slug": "hr-92",
            "name": "Radaur SDM"
          }
        ],
        "slug": "yamunanagar"
      },
      {
        "name": "Panchkula",
        "rtos": [
          {
            "code": "HR-03",
            "slug": "hr-03",
            "name": "Panchkula SDM"
          },
          {
            "code": "HR-49",
            "slug": "hr-49",
            "name": "Kalka SDM"
          },
          {
            "code": "HR-68",
            "slug": "hr-68",
            "name": "Panchkula Commercial RTA"
          }
        ],
        "slug": "panchkula"
      },
      {
        "name": "Karnal",
        "rtos": [
          {
            "code": "HR-05",
            "slug": "hr-05",
            "name": "Karnal SDM"
          },
          {
            "code": "HR-40",
            "slug": "hr-40",
            "name": "Assandh SDM"
          },
          {
            "code": "HR-45",
            "slug": "hr-45",
            "name": "Karnal Commercial RTA"
          },
          {
            "code": "HR-83",
            "slug": "hr-83",
            "name": "Gharaunda SDM"
          }
        ],
        "slug": "karnal"
      },
      {
        "name": "Panipat",
        "rtos": [
          {
            "code": "HR-06",
            "slug": "hr-06",
            "name": "Panipat SDM"
          },
          {
            "code": "HR-60",
            "slug": "hr-60",
            "name": "Samalkha SDM"
          },
          {
            "code": "HR-67",
            "slug": "hr-67",
            "name": "Panipat Commercial RTA"
          },
          {
            "code": "HR-96",
            "slug": "hr-96",
            "name": "Israna SDM"
          }
        ],
        "slug": "panipat"
      },
      {
        "name": "Kurukshetra",
        "rtos": [
          {
            "code": "HR-07",
            "slug": "hr-07",
            "name": "Kurukshetra SDM"
          },
          {
            "code": "HR-41",
            "slug": "hr-41",
            "name": "Pehowa SDM"
          },
          {
            "code": "HR-65",
            "slug": "hr-65",
            "name": "Kurukshetra Commercial RTA"
          },
          {
            "code": "HR-78",
            "slug": "hr-78",
            "name": "Shahabad SDM"
          },
          {
            "code": "HR-97",
            "slug": "hr-97",
            "name": "Ladwa SDM"
          }
        ],
        "slug": "kurukshetra"
      },
      {
        "name": "Kaithal",
        "rtos": [
          {
            "code": "HR-08",
            "slug": "hr-08",
            "name": "Kaithal SDM"
          },
          {
            "code": "HR-09",
            "slug": "hr-09",
            "name": "Guhla SDM"
          },
          {
            "code": "HR-64",
            "slug": "hr-64",
            "name": "Kaithal Commercial RTA"
          },
          {
            "code": "HR-82",
            "slug": "hr-82",
            "name": "Kalayat SDM"
          }
        ],
        "slug": "kaithal"
      },
      {
        "name": "Sonipat",
        "rtos": [
          {
            "code": "HR-10",
            "slug": "hr-10",
            "name": "Sonipat SDM"
          },
          {
            "code": "HR-11",
            "slug": "hr-11",
            "name": "Gohana SDM"
          },
          {
            "code": "HR-42",
            "slug": "hr-42",
            "name": "Ganaur SDM"
          },
          {
            "code": "HR-69",
            "slug": "hr-69",
            "name": "Sonipat Commercial RTA"
          },
          {
            "code": "HR-79",
            "slug": "hr-79",
            "name": "Kharkhoda SDM"
          }
        ],
        "slug": "sonipat"
      },
      {
        "name": "Rohtak",
        "rtos": [
          {
            "code": "HR-12",
            "slug": "hr-12",
            "name": "Rohtak SDM"
          },
          {
            "code": "HR-15",
            "slug": "hr-15",
            "name": "Meham SDM"
          },
          {
            "code": "HR-46",
            "slug": "hr-46",
            "name": "Rohtak Commercial RTA"
          },
          {
            "code": "HR-95",
            "slug": "hr-95",
            "name": "Sampla SDM"
          }
        ],
        "slug": "rohtak"
      },
      {
        "name": "Jhajjar",
        "rtos": [
          {
            "code": "HR-13",
            "slug": "hr-13",
            "name": "Bahadurgarh SDM"
          },
          {
            "code": "HR-14",
            "slug": "hr-14",
            "name": "Jhajjar SDM"
          },
          {
            "code": "HR-63",
            "slug": "hr-63",
            "name": "Jhajjar Commercial RTA"
          },
          {
            "code": "HR-77",
            "slug": "hr-77",
            "name": "Beri SDM"
          },
          {
            "code": "HR-94",
            "slug": "hr-94",
            "name": "Badli SDM"
          }
        ],
        "slug": "jhajjar"
      },
      {
        "name": "Bhiwani",
        "rtos": [
          {
            "code": "HR-16",
            "slug": "hr-16",
            "name": "Bhiwani SDM"
          },
          {
            "code": "HR-17",
            "slug": "hr-17",
            "name": "Siwani SDM"
          },
          {
            "code": "HR-18",
            "slug": "hr-18",
            "name": "Loharu SDM"
          },
          {
            "code": "HR-48",
            "slug": "hr-48",
            "name": "Tosham SDM"
          },
          {
            "code": "HR-61",
            "slug": "hr-61",
            "name": "Bhiwani Commercial RTA"
          }
        ],
        "slug": "bhiwani"
      },
      {
        "name": "Charkhi Dadri",
        "rtos": [
          {
            "code": "HR-19",
            "slug": "hr-19",
            "name": "Charkhi Dadri SDM"
          },
          {
            "code": "HR-84",
            "slug": "hr-84",
            "name": "Charkhi Dadri Commercial RTA"
          },
          {
            "code": "HR-87",
            "slug": "hr-87",
            "name": "Badhra SDM"
          }
        ],
        "slug": "charkhi-dadri"
      },
      {
        "name": "Hisar",
        "rtos": [
          {
            "code": "HR-20",
            "slug": "hr-20",
            "name": "Hisar SDM"
          },
          {
            "code": "HR-21",
            "slug": "hr-21",
            "name": "Hansi SDM"
          },
          {
            "code": "HR-39",
            "slug": "hr-39",
            "name": "Hisar Commercial RTA"
          },
          {
            "code": "HR-80",
            "slug": "hr-80",
            "name": "Barwala SDM"
          },
          {
            "code": "HR-86",
            "slug": "hr-86",
            "name": "Narnaund SDM"
          }
        ],
        "slug": "hisar"
      },
      {
        "name": "Fatehabad",
        "rtos": [
          {
            "code": "HR-22",
            "slug": "hr-22",
            "name": "Fatehabad SDM"
          },
          {
            "code": "HR-23",
            "slug": "hr-23",
            "name": "Tohana SDM"
          },
          {
            "code": "HR-62",
            "slug": "hr-62",
            "name": "Fatehabad Commercial RTA"
          }
        ],
        "slug": "fatehabad"
      },
      {
        "name": "Sirsa",
        "rtos": [
          {
            "code": "HR-24",
            "slug": "hr-24",
            "name": "Sirsa SDM"
          },
          {
            "code": "HR-25",
            "slug": "hr-25",
            "name": "Mandi Dabwali SDM"
          },
          {
            "code": "HR-44",
            "slug": "hr-44",
            "name": "Ellenabad SDM"
          },
          {
            "code": "HR-89",
            "slug": "hr-89",
            "name": "Kalanwali SDM"
          }
        ],
        "slug": "sirsa"
      },
      {
        "name": "Gurugram",
        "rtos": [
          {
            "code": "HR-26",
            "slug": "hr-26",
            "name": "Gurugram North RTA"
          },
          {
            "code": "HR-55",
            "slug": "hr-55",
            "name": "Gurugram Commercial RTA"
          },
          {
            "code": "HR-72",
            "slug": "hr-72",
            "name": "Gurugram South RTA"
          },
          {
            "code": "HR-76",
            "slug": "hr-76",
            "name": "Pataudi SDM"
          },
          {
            "code": "HR-85",
            "slug": "hr-85",
            "name": "Manesar SDM"
          },
          {
            "code": "HR-98",
            "slug": "hr-98",
            "name": "Badshahpur SDM"
          },
          {
            "code": "HR-99",
            "slug": "hr-99",
            "name": "Gurugram East RTA"
          }
        ],
        "slug": "gurugram"
      },
      {
        "name": "Nuh",
        "rtos": [
          {
            "code": "HR-27",
            "slug": "hr-27",
            "name": "Nuh (Mewat) SDM"
          },
          {
            "code": "HR-28",
            "slug": "hr-28",
            "name": "Ferozepur Jhirka SDM"
          },
          {
            "code": "HR-74",
            "slug": "hr-74",
            "name": "Nuh Commercial RTA"
          }
        ],
        "slug": "nuh"
      },
      {
        "name": "Faridabad",
        "rtos": [
          {
            "code": "HR-29",
            "slug": "hr-29",
            "name": "Ballabgarh SDM"
          },
          {
            "code": "HR-38",
            "slug": "hr-38",
            "name": "Faridabad Commercial RTA"
          },
          {
            "code": "HR-51",
            "slug": "hr-51",
            "name": "Faridabad Central SDM"
          },
          {
            "code": "HR-88",
            "slug": "hr-88",
            "name": "Badkhal SDM"
          }
        ],
        "slug": "faridabad"
      },
      {
        "name": "Palwal",
        "rtos": [
          {
            "code": "HR-30",
            "slug": "hr-30",
            "name": "Palwal SDM"
          },
          {
            "code": "HR-50",
            "slug": "hr-50",
            "name": "Hodal SDM"
          },
          {
            "code": "HR-52",
            "slug": "hr-52",
            "name": "Hathin SDM"
          },
          {
            "code": "HR-73",
            "slug": "hr-73",
            "name": "Palwal Commercial RTA"
          }
        ],
        "slug": "palwal"
      },
      {
        "name": "Jind",
        "rtos": [
          {
            "code": "HR-31",
            "slug": "hr-31",
            "name": "Jind SDM"
          },
          {
            "code": "HR-32",
            "slug": "hr-32",
            "name": "Narwana SDM"
          },
          {
            "code": "HR-33",
            "slug": "hr-33",
            "name": "Safidon SDM"
          },
          {
            "code": "HR-90",
            "slug": "hr-90",
            "name": "Uchana SDM"
          },
          {
            "code": "HR-93",
            "slug": "hr-93",
            "name": "Julana SDM"
          }
        ],
        "slug": "jind"
      },
      {
        "name": "Mahendragarh",
        "rtos": [
          {
            "code": "HR-34",
            "slug": "hr-34",
            "name": "Mahendragarh SDM"
          },
          {
            "code": "HR-35",
            "slug": "hr-35",
            "name": "Narnaul SDM"
          },
          {
            "code": "HR-66",
            "slug": "hr-66",
            "name": "Narnaul Commercial RTA"
          }
        ],
        "slug": "mahendragarh"
      },
      {
        "name": "Rewari",
        "rtos": [
          {
            "code": "HR-36",
            "slug": "hr-36",
            "name": "Rewari SDM"
          },
          {
            "code": "HR-43",
            "slug": "hr-43",
            "name": "Kosli SDM"
          },
          {
            "code": "HR-47",
            "slug": "hr-47",
            "name": "Rewari Commercial RTA"
          },
          {
            "code": "HR-81",
            "slug": "hr-81",
            "name": "Bawal Industrial SDM"
          }
        ],
        "slug": "rewari"
      }
    ],
    "slug": "haryana"
  },
  {
    "name": "Himachal Pradesh",
    "code": "HP",
    "capital": "Shimla",
    "type": "state",
    "cities": [
      {
        "name": "Shimla",
        "rtos": [
          {
            "code": "HP-01",
            "slug": "hp-01",
            "name": "Shimla Urban RTO"
          },
          {
            "code": "HP-02",
            "slug": "hp-02",
            "name": "Shimla Tourist RTO"
          },
          {
            "code": "HP-03",
            "slug": "hp-03",
            "name": "Shimla Urban SDM"
          },
          {
            "code": "HP-07",
            "slug": "hp-07",
            "name": "Shimla RTO"
          },
          {
            "code": "HP-08",
            "slug": "hp-08",
            "name": "Chaupal RTO"
          },
          {
            "code": "HP-09",
            "slug": "hp-09",
            "name": "Theog RTO"
          },
          {
            "code": "HP-10",
            "slug": "hp-10",
            "name": "Rohru RTO"
          },
          {
            "code": "HP-51",
            "slug": "hp-51",
            "name": "Shimla Rural SDM"
          },
          {
            "code": "HP-52",
            "slug": "hp-52",
            "name": "Shimla Rural RTO"
          },
          {
            "code": "HP-62",
            "slug": "hp-62",
            "name": "Dodra Kwar RTO"
          },
          {
            "code": "HP-63",
            "slug": "hp-63",
            "name": "Shimla Commercial RTO"
          },
          {
            "code": "HP-79",
            "slug": "hp-79",
            "name": "Kotkhai RTO"
          },
          {
            "code": "HP-85",
            "slug": "hp-85",
            "name": "Kupvi RTO"
          },
          {
            "code": "HP-95",
            "slug": "hp-95",
            "name": "Kumarsain RTO"
          }
        ],
        "slug": "shimla"
      },
      {
        "name": "Dharamshala",
        "rtos": [
          {
            "code": "HP-04",
            "slug": "hp-04",
            "name": "Dharamshala RTO"
          },
          {
            "code": "HP-36",
            "slug": "hp-36",
            "name": "Dehra RTO"
          },
          {
            "code": "HP-37",
            "slug": "hp-37",
            "name": "Palampur RTO"
          },
          {
            "code": "HP-38",
            "slug": "hp-38",
            "name": "Jawali RTO"
          },
          {
            "code": "HP-39",
            "slug": "hp-39",
            "name": "Dharamshala SDM"
          },
          {
            "code": "HP-40",
            "slug": "hp-40",
            "name": "Kangra RTO"
          },
          {
            "code": "HP-53",
            "slug": "hp-53",
            "name": "Baijnath RTO"
          },
          {
            "code": "HP-54",
            "slug": "hp-54",
            "name": "Jawalamukhi RTO"
          },
          {
            "code": "HP-56",
            "slug": "hp-56",
            "name": "Jaisinghpur RTO"
          },
          {
            "code": "HP-68",
            "slug": "hp-68",
            "name": "Dharamshala Commercial RTO"
          },
          {
            "code": "HP-84",
            "slug": "hp-84",
            "name": "Indora RTO"
          },
          {
            "code": "HP-88",
            "slug": "hp-88",
            "name": "Fatehpur RTO"
          },
          {
            "code": "HP-90",
            "slug": "hp-90",
            "name": "Shahpur RTO"
          },
          {
            "code": "HP-94",
            "slug": "hp-94",
            "name": "Nagrota Bagwan RTO"
          }
        ],
        "slug": "dharamshala"
      },
      {
        "name": "Mandi",
        "rtos": [
          {
            "code": "HP-05",
            "slug": "hp-05",
            "name": "Mandi RTO"
          },
          {
            "code": "HP-28",
            "slug": "hp-28",
            "name": "Sarkaghat RTO"
          },
          {
            "code": "HP-29",
            "slug": "hp-29",
            "name": "Jogindernagar RTO"
          },
          {
            "code": "HP-30",
            "slug": "hp-30",
            "name": "Karsog RTO"
          },
          {
            "code": "HP-31",
            "slug": "hp-31",
            "name": "Sundernagar RTO"
          },
          {
            "code": "HP-32",
            "slug": "hp-32",
            "name": "Gohar RTO"
          },
          {
            "code": "HP-33",
            "slug": "hp-33",
            "name": "Mandi SDM"
          },
          {
            "code": "HP-65",
            "slug": "hp-65",
            "name": "Mandi Commercial RTO"
          },
          {
            "code": "HP-76",
            "slug": "hp-76",
            "name": "Paddar RTO"
          },
          {
            "code": "HP-86",
            "slug": "hp-86",
            "name": "Dharampur RTO"
          },
          {
            "code": "HP-87",
            "slug": "hp-87",
            "name": "Janjehli RTO"
          }
        ],
        "slug": "mandi"
      },
      {
        "name": "Kullu",
        "rtos": [
          {
            "code": "HP-06",
            "slug": "hp-06",
            "name": "Kullu RTO"
          },
          {
            "code": "HP-34",
            "slug": "hp-34",
            "name": "Kullu SDM"
          },
          {
            "code": "HP-35",
            "slug": "hp-35",
            "name": "Anni RTO"
          },
          {
            "code": "HP-49",
            "slug": "hp-49",
            "name": "Banjar RTO"
          },
          {
            "code": "HP-58",
            "slug": "hp-58",
            "name": "Manali Tourist RTO"
          },
          {
            "code": "HP-66",
            "slug": "hp-66",
            "name": "Kullu Commercial RTO"
          }
        ],
        "slug": "kullu"
      },
      {
        "name": "Solan",
        "rtos": [
          {
            "code": "HP-11",
            "slug": "hp-11",
            "name": "Arki RTO"
          },
          {
            "code": "HP-12",
            "slug": "hp-12",
            "name": "Nalagarh Industrial RTO"
          },
          {
            "code": "HP-13",
            "slug": "hp-13",
            "name": "Kandaghat RTO"
          },
          {
            "code": "HP-14",
            "slug": "hp-14",
            "name": "Solan RTO"
          },
          {
            "code": "HP-15",
            "slug": "hp-15",
            "name": "Parwanoo Industrial RTO"
          },
          {
            "code": "HP-64",
            "slug": "hp-64",
            "name": "Solan Commercial RTO"
          },
          {
            "code": "HP-92",
            "slug": "hp-92",
            "name": "Kasauli RTO"
          },
          {
            "code": "HP-93",
            "slug": "hp-93",
            "name": "Darlaghat Cement Hub RTO"
          },
          {
            "code": "HP-97",
            "slug": "hp-97",
            "name": "Baddi Industrial Hub RTO"
          }
        ],
        "slug": "solan"
      },
      {
        "name": "Sirmaur",
        "rtos": [
          {
            "code": "HP-16",
            "slug": "hp-16",
            "name": "Rajgarh RTO"
          },
          {
            "code": "HP-17",
            "slug": "hp-17",
            "name": "Paonta Sahib RTO"
          },
          {
            "code": "HP-18",
            "slug": "hp-18",
            "name": "Nahan RTO"
          },
          {
            "code": "HP-71",
            "slug": "hp-71",
            "name": "Nahan Commercial RTO"
          },
          {
            "code": "HP-77",
            "slug": "hp-77",
            "name": "Shillai RTO"
          },
          {
            "code": "HP-78",
            "slug": "hp-78",
            "name": "Sangrah RTO"
          }
        ],
        "slug": "sirmaur"
      },
      {
        "name": "Una",
        "rtos": [
          {
            "code": "HP-19",
            "slug": "hp-19",
            "name": "Amb RTO"
          },
          {
            "code": "HP-20",
            "slug": "hp-20",
            "name": "Una RTO"
          },
          {
            "code": "HP-70",
            "slug": "hp-70",
            "name": "Una Commercial RTO"
          },
          {
            "code": "HP-80",
            "slug": "hp-80",
            "name": "Haroli RTO"
          },
          {
            "code": "HP-83",
            "slug": "hp-83",
            "name": "Bangana RTO"
          }
        ],
        "slug": "una"
      },
      {
        "name": "Hamirpur",
        "rtos": [
          {
            "code": "HP-21",
            "slug": "hp-21",
            "name": "Barsar RTO"
          },
          {
            "code": "HP-22",
            "slug": "hp-22",
            "name": "Hamirpur RTO"
          },
          {
            "code": "HP-55",
            "slug": "hp-55",
            "name": "Nadaun RTO"
          },
          {
            "code": "HP-67",
            "slug": "hp-67",
            "name": "Hamirpur Commercial RTO"
          },
          {
            "code": "HP-74",
            "slug": "hp-74",
            "name": "Bhoranj RTO"
          },
          {
            "code": "HP-82",
            "slug": "hp-82",
            "name": "Sujanpur RTO"
          }
        ],
        "slug": "hamirpur"
      },
      {
        "name": "Bilaspur",
        "rtos": [
          {
            "code": "HP-23",
            "slug": "hp-23",
            "name": "Ghumarwin RTO"
          },
          {
            "code": "HP-24",
            "slug": "hp-24",
            "name": "Bilaspur RTO"
          },
          {
            "code": "HP-69",
            "slug": "hp-69",
            "name": "Bilaspur Commercial RTO"
          },
          {
            "code": "HP-89",
            "slug": "hp-89",
            "name": "Jhandutta RTO"
          },
          {
            "code": "HP-91",
            "slug": "hp-91",
            "name": "Naina Devi RTO"
          }
        ],
        "slug": "bilaspur"
      },
      {
        "name": "Kinnaur",
        "rtos": [
          {
            "code": "HP-25",
            "slug": "hp-25",
            "name": "Kalpa (Kinnaur) RTO"
          },
          {
            "code": "HP-26",
            "slug": "hp-26",
            "name": "Nichar (Bhabanagar) RTO"
          },
          {
            "code": "HP-27",
            "slug": "hp-27",
            "name": "Pooh RTO"
          }
        ],
        "slug": "kinnaur"
      },
      {
        "name": "Lahaul and Spiti",
        "rtos": [
          {
            "code": "HP-41",
            "slug": "hp-41",
            "name": "Kaza RTO"
          },
          {
            "code": "HP-42",
            "slug": "hp-42",
            "name": "Keylong (Lahaul) RTO"
          },
          {
            "code": "HP-43",
            "slug": "hp-43",
            "name": "Udaipur RTO"
          }
        ],
        "slug": "lahaul-and-spiti"
      },
      {
        "name": "Chamba",
        "rtos": [
          {
            "code": "HP-44",
            "slug": "hp-44",
            "name": "Churah RTO"
          },
          {
            "code": "HP-45",
            "slug": "hp-45",
            "name": "Pangi RTO"
          },
          {
            "code": "HP-46",
            "slug": "hp-46",
            "name": "Bharmour RTO"
          },
          {
            "code": "HP-47",
            "slug": "hp-47",
            "name": "Dalhousie RTO"
          },
          {
            "code": "HP-48",
            "slug": "hp-48",
            "name": "Chamba RTO"
          },
          {
            "code": "HP-57",
            "slug": "hp-57",
            "name": "Chowari RTO"
          },
          {
            "code": "HP-73",
            "slug": "hp-73",
            "name": "Chamba Commercial RTO"
          },
          {
            "code": "HP-81",
            "slug": "hp-81",
            "name": "Salooni RTO"
          }
        ],
        "slug": "chamba"
      }
    ],
    "slug": "himachal-pradesh"
  },
  {
    "name": "Jharkhand",
    "code": "JH",
    "capital": "Ranchi",
    "type": "state",
    "cities": [
      {
        "name": "Ranchi",
        "rtos": [
          {
            "code": "JH-01",
            "slug": "jh-01",
            "name": "Ranchi Central DTO"
          }
        ],
        "slug": "ranchi"
      },
      {
        "name": "Hazaribagh",
        "rtos": [
          {
            "code": "JH-02",
            "slug": "jh-02",
            "name": "Hazaribagh DTO"
          }
        ],
        "slug": "hazaribagh"
      },
      {
        "name": "Daltonganj",
        "rtos": [
          {
            "code": "JH-03",
            "slug": "jh-03",
            "name": "Daltonganj (Palamu) DTO"
          }
        ],
        "slug": "daltonganj"
      },
      {
        "name": "Dumka",
        "rtos": [
          {
            "code": "JH-04",
            "slug": "jh-04",
            "name": "Dumka DTO"
          }
        ],
        "slug": "dumka"
      },
      {
        "name": "Jamshedpur",
        "rtos": [
          {
            "code": "JH-05",
            "slug": "jh-05",
            "name": "Jamshedpur (East Singhbhum) DTO"
          }
        ],
        "slug": "jamshedpur"
      },
      {
        "name": "Chaibasa",
        "rtos": [
          {
            "code": "JH-06",
            "slug": "jh-06",
            "name": "Chaibasa (West Singhbhum) DTO"
          }
        ],
        "slug": "chaibasa"
      },
      {
        "name": "Gumla",
        "rtos": [
          {
            "code": "JH-07",
            "slug": "jh-07",
            "name": "Gumla DTO"
          }
        ],
        "slug": "gumla"
      },
      {
        "name": "Lohardaga",
        "rtos": [
          {
            "code": "JH-08",
            "slug": "jh-08",
            "name": "Lohardaga DTO"
          }
        ],
        "slug": "lohardaga"
      },
      {
        "name": "Bokaro",
        "rtos": [
          {
            "code": "JH-09",
            "slug": "jh-09",
            "name": "Bokaro Steel City DTO"
          }
        ],
        "slug": "bokaro"
      },
      {
        "name": "Dhanbad",
        "rtos": [
          {
            "code": "JH-10",
            "slug": "jh-10",
            "name": "Dhanbad Coal Mining Hub DTO"
          }
        ],
        "slug": "dhanbad"
      },
      {
        "name": "Giridih",
        "rtos": [
          {
            "code": "JH-11",
            "slug": "jh-11",
            "name": "Giridih DTO"
          }
        ],
        "slug": "giridih"
      },
      {
        "name": "Koderma",
        "rtos": [
          {
            "code": "JH-12",
            "slug": "jh-12",
            "name": "Koderma DTO"
          }
        ],
        "slug": "koderma"
      },
      {
        "name": "Chatra",
        "rtos": [
          {
            "code": "JH-13",
            "slug": "jh-13",
            "name": "Chatra DTO"
          }
        ],
        "slug": "chatra"
      },
      {
        "name": "Garhwa",
        "rtos": [
          {
            "code": "JH-14",
            "slug": "jh-14",
            "name": "Garhwa DTO"
          }
        ],
        "slug": "garhwa"
      },
      {
        "name": "Deoghar",
        "rtos": [
          {
            "code": "JH-15",
            "slug": "jh-15",
            "name": "Deoghar DTO"
          }
        ],
        "slug": "deoghar"
      },
      {
        "name": "Pakur",
        "rtos": [
          {
            "code": "JH-16",
            "slug": "jh-16",
            "name": "Pakur DTO"
          }
        ],
        "slug": "pakur"
      },
      {
        "name": "Godda",
        "rtos": [
          {
            "code": "JH-17",
            "slug": "jh-17",
            "name": "Godda DTO"
          }
        ],
        "slug": "godda"
      },
      {
        "name": "Sahibganj",
        "rtos": [
          {
            "code": "JH-18",
            "slug": "jh-18",
            "name": "Sahibganj DTO"
          }
        ],
        "slug": "sahibganj"
      },
      {
        "name": "Latehar",
        "rtos": [
          {
            "code": "JH-19",
            "slug": "jh-19",
            "name": "Latehar DTO"
          }
        ],
        "slug": "latehar"
      },
      {
        "name": "Simdega",
        "rtos": [
          {
            "code": "JH-20",
            "slug": "jh-20",
            "name": "Simdega DTO"
          }
        ],
        "slug": "simdega"
      },
      {
        "name": "Jamtara",
        "rtos": [
          {
            "code": "JH-21",
            "slug": "jh-21",
            "name": "Jamtara DTO"
          }
        ],
        "slug": "jamtara"
      },
      {
        "name": "Saraikela",
        "rtos": [
          {
            "code": "JH-22",
            "slug": "jh-22",
            "name": "Saraikela-Kharsawan DTO"
          }
        ],
        "slug": "saraikela"
      },
      {
        "name": "Khunti",
        "rtos": [
          {
            "code": "JH-23",
            "slug": "jh-23",
            "name": "Khunti DTO"
          }
        ],
        "slug": "khunti"
      },
      {
        "name": "Ramgarh",
        "rtos": [
          {
            "code": "JH-24",
            "slug": "jh-24",
            "name": "Ramgarh DTO"
          }
        ],
        "slug": "ramgarh"
      }
    ],
    "slug": "jharkhand"
  },
  {
    "name": "Karnataka",
    "code": "KA",
    "capital": "Bengaluru",
    "type": "state",
    "cities": [
      {
        "name": "Bengaluru",
        "rtos": [
          {
            "code": "KA-01",
            "slug": "ka-01",
            "name": "Bengaluru Central (Koramangala) RTO"
          },
          {
            "code": "KA-02",
            "slug": "ka-02",
            "name": "Bengaluru West (Rajajinagar) RTO"
          },
          {
            "code": "KA-03",
            "slug": "ka-03",
            "name": "Bengaluru East (Indiranagar) RTO"
          },
          {
            "code": "KA-04",
            "slug": "ka-04",
            "name": "Bengaluru North (Yeshwanthpur) RTO"
          },
          {
            "code": "KA-05",
            "slug": "ka-05",
            "name": "Bengaluru South (Jayanagar) RTO"
          },
          {
            "code": "KA-41",
            "slug": "ka-41",
            "name": "Bengaluru West (Kengeri / Jnanabharathi) RTO"
          },
          {
            "code": "KA-50",
            "slug": "ka-50",
            "name": "Bengaluru North (Yelahanka) RTO"
          },
          {
            "code": "KA-51",
            "slug": "ka-51",
            "name": "Bengaluru South (Electronics City) RTO"
          },
          {
            "code": "KA-53",
            "slug": "ka-53",
            "name": "Bengaluru East (K.R. Puram) RTO"
          },
          {
            "code": "KA-57",
            "slug": "ka-57",
            "name": "Bengaluru Central (Shantinagar) RTO"
          },
          {
            "code": "KA-58",
            "slug": "ka-58",
            "name": "Bengaluru South (Banashankari) RTO"
          },
          {
            "code": "KA-59",
            "slug": "ka-59",
            "name": "Bengaluru (Chandapura) RTO"
          }
        ],
        "slug": "bengaluru"
      },
      {
        "name": "Tumkur",
        "rtos": [
          {
            "code": "KA-06",
            "slug": "ka-06",
            "name": "Tumkur RTO"
          },
          {
            "code": "KA-44",
            "slug": "ka-44",
            "name": "Tiptur RTO"
          },
          {
            "code": "KA-64",
            "slug": "ka-64",
            "name": "Madhugiri RTO"
          }
        ],
        "slug": "tumkur"
      },
      {
        "name": "Kolar",
        "rtos": [
          {
            "code": "KA-07",
            "slug": "ka-07",
            "name": "Kolar RTO"
          },
          {
            "code": "KA-08",
            "slug": "ka-08",
            "name": "K.G.F. RTO"
          }
        ],
        "slug": "kolar"
      },
      {
        "name": "Mysuru",
        "rtos": [
          {
            "code": "KA-09",
            "slug": "ka-09",
            "name": "Mysuru West RTO"
          },
          {
            "code": "KA-45",
            "slug": "ka-45",
            "name": "Hunsur RTO"
          },
          {
            "code": "KA-55",
            "slug": "ka-55",
            "name": "Mysuru East RTO"
          }
        ],
        "slug": "mysuru"
      },
      {
        "name": "Chamarajanagar",
        "rtos": [
          {
            "code": "KA-10",
            "slug": "ka-10",
            "name": "Chamarajanagar RTO"
          }
        ],
        "slug": "chamarajanagar"
      },
      {
        "name": "Mandya",
        "rtos": [
          {
            "code": "KA-11",
            "slug": "ka-11",
            "name": "Mandya RTO"
          },
          {
            "code": "KA-54",
            "slug": "ka-54",
            "name": "Nagamangala RTO"
          }
        ],
        "slug": "mandya"
      },
      {
        "name": "Madikeri",
        "rtos": [
          {
            "code": "KA-12",
            "slug": "ka-12",
            "name": "Madikeri (Kodagu) RTO"
          }
        ],
        "slug": "madikeri"
      },
      {
        "name": "Hassan",
        "rtos": [
          {
            "code": "KA-13",
            "slug": "ka-13",
            "name": "Hassan RTO"
          },
          {
            "code": "KA-46",
            "slug": "ka-46",
            "name": "Sakleshpur RTO"
          }
        ],
        "slug": "hassan"
      },
      {
        "name": "Shivamogga",
        "rtos": [
          {
            "code": "KA-14",
            "slug": "ka-14",
            "name": "Shivamogga RTO"
          },
          {
            "code": "KA-15",
            "slug": "ka-15",
            "name": "Sagar RTO"
          }
        ],
        "slug": "shivamogga"
      },
      {
        "name": "Chitradurga",
        "rtos": [
          {
            "code": "KA-16",
            "slug": "ka-16",
            "name": "Chitradurga RTO"
          }
        ],
        "slug": "chitradurga"
      },
      {
        "name": "Davanagere",
        "rtos": [
          {
            "code": "KA-17",
            "slug": "ka-17",
            "name": "Davanagere RTO"
          }
        ],
        "slug": "davanagere"
      },
      {
        "name": "Chikkamagaluru",
        "rtos": [
          {
            "code": "KA-18",
            "slug": "ka-18",
            "name": "Chikkamagaluru RTO"
          },
          {
            "code": "KA-66",
            "slug": "ka-66",
            "name": "Tarikere RTO"
          }
        ],
        "slug": "chikkamagaluru"
      },
      {
        "name": "Mangaluru",
        "rtos": [
          {
            "code": "KA-19",
            "slug": "ka-19",
            "name": "Mangaluru RTO"
          },
          {
            "code": "KA-21",
            "slug": "ka-21",
            "name": "Puttur RTO"
          },
          {
            "code": "KA-70",
            "slug": "ka-70",
            "name": "Bantwal RTO"
          }
        ],
        "slug": "mangaluru"
      },
      {
        "name": "Udupi",
        "rtos": [
          {
            "code": "KA-20",
            "slug": "ka-20",
            "name": "Udupi RTO"
          },
          {
            "code": "KA-71",
            "slug": "ka-71",
            "name": "Kundapura RTO"
          }
        ],
        "slug": "udupi"
      },
      {
        "name": "Belagavi",
        "rtos": [
          {
            "code": "KA-22",
            "slug": "ka-22",
            "name": "Belagavi RTO"
          },
          {
            "code": "KA-23",
            "slug": "ka-23",
            "name": "Chikkodi RTO"
          },
          {
            "code": "KA-24",
            "slug": "ka-24",
            "name": "Bailhongal RTO"
          },
          {
            "code": "KA-49",
            "slug": "ka-49",
            "name": "Gokak RTO"
          },
          {
            "code": "KA-69",
            "slug": "ka-69",
            "name": "Ramdurg RTO"
          }
        ],
        "slug": "belagavi"
      },
      {
        "name": "Dharwad",
        "rtos": [
          {
            "code": "KA-25",
            "slug": "ka-25",
            "name": "Dharwad RTO"
          },
          {
            "code": "KA-63",
            "slug": "ka-63",
            "name": "Hubballi RTO"
          }
        ],
        "slug": "dharwad"
      },
      {
        "name": "Gadag",
        "rtos": [
          {
            "code": "KA-26",
            "slug": "ka-26",
            "name": "Gadag RTO"
          }
        ],
        "slug": "gadag"
      },
      {
        "name": "Haveri",
        "rtos": [
          {
            "code": "KA-27",
            "slug": "ka-27",
            "name": "Haveri RTO"
          },
          {
            "code": "KA-68",
            "slug": "ka-68",
            "name": "Ranebennur RTO"
          }
        ],
        "slug": "haveri"
      },
      {
        "name": "Vijayapura",
        "rtos": [
          {
            "code": "KA-28",
            "slug": "ka-28",
            "name": "Vijayapura (Bijapur) RTO"
          }
        ],
        "slug": "vijayapura"
      },
      {
        "name": "Bagalkot",
        "rtos": [
          {
            "code": "KA-29",
            "slug": "ka-29",
            "name": "Bagalkot RTO"
          },
          {
            "code": "KA-48",
            "slug": "ka-48",
            "name": "Jamkhandi RTO"
          }
        ],
        "slug": "bagalkot"
      },
      {
        "name": "Karwar",
        "rtos": [
          {
            "code": "KA-30",
            "slug": "ka-30",
            "name": "Karwar (Uttara Kannada) RTO"
          },
          {
            "code": "KA-31",
            "slug": "ka-31",
            "name": "Sirsi RTO"
          },
          {
            "code": "KA-47",
            "slug": "ka-47",
            "name": "Honnavar RTO"
          },
          {
            "code": "KA-65",
            "slug": "ka-65",
            "name": "Dandeli RTO"
          }
        ],
        "slug": "karwar"
      },
      {
        "name": "Kalaburagi",
        "rtos": [
          {
            "code": "KA-32",
            "slug": "ka-32",
            "name": "Kalaburagi (Gulbarga) RTO"
          }
        ],
        "slug": "kalaburagi"
      },
      {
        "name": "Yadgir",
        "rtos": [
          {
            "code": "KA-33",
            "slug": "ka-33",
            "name": "Yadgir RTO"
          }
        ],
        "slug": "yadgir"
      },
      {
        "name": "Ballari",
        "rtos": [
          {
            "code": "KA-34",
            "slug": "ka-34",
            "name": "Ballari (Bellary) RTO"
          },
          {
            "code": "KA-35",
            "slug": "ka-35",
            "name": "Hosapete (Vijayanagara) RTO"
          }
        ],
        "slug": "ballari"
      },
      {
        "name": "Raichur",
        "rtos": [
          {
            "code": "KA-36",
            "slug": "ka-36",
            "name": "Raichur RTO"
          }
        ],
        "slug": "raichur"
      },
      {
        "name": "Koppal",
        "rtos": [
          {
            "code": "KA-37",
            "slug": "ka-37",
            "name": "Koppal RTO"
          }
        ],
        "slug": "koppal"
      },
      {
        "name": "Bidar",
        "rtos": [
          {
            "code": "KA-38",
            "slug": "ka-38",
            "name": "Bidar RTO"
          },
          {
            "code": "KA-39",
            "slug": "ka-39",
            "name": "Bhalki RTO"
          },
          {
            "code": "KA-56",
            "slug": "ka-56",
            "name": "Basavakalyan RTO"
          }
        ],
        "slug": "bidar"
      },
      {
        "name": "Chikkaballapur",
        "rtos": [
          {
            "code": "KA-40",
            "slug": "ka-40",
            "name": "Chikkaballapur RTO"
          },
          {
            "code": "KA-67",
            "slug": "ka-67",
            "name": "Chintamani RTO"
          }
        ],
        "slug": "chikkaballapur"
      },
      {
        "name": "Ramanagara",
        "rtos": [
          {
            "code": "KA-42",
            "slug": "ka-42",
            "name": "Ramanagara RTO"
          }
        ],
        "slug": "ramanagara"
      },
      {
        "name": "Devanahalli",
        "rtos": [
          {
            "code": "KA-43",
            "slug": "ka-43",
            "name": "Devanahalli (Bengaluru Rural) RTO"
          },
          {
            "code": "KA-52",
            "slug": "ka-52",
            "name": "Nelamangala RTO"
          }
        ],
        "slug": "devanahalli"
      },
      {
        "name": "Vijayanagara",
        "rtos": [
          {
            "code": "KA-72",
            "slug": "ka-72",
            "name": "Kudligi (Vijayanagara) RTO"
          }
        ],
        "slug": "vijayanagara"
      }
    ],
    "slug": "karnataka"
  },
  {
    "name": "Kerala",
    "code": "KL",
    "capital": "Thiruvananthapuram",
    "type": "state",
    "cities": [
      {
        "name": "Thiruvananthapuram",
        "rtos": [
          {
            "code": "KL-01",
            "slug": "kl-01",
            "name": "Thiruvananthapuram Central RTO"
          },
          {
            "code": "KL-16",
            "slug": "kl-16",
            "name": "Attingal SRTO"
          },
          {
            "code": "KL-19",
            "slug": "kl-19",
            "name": "Parassala SRTO"
          },
          {
            "code": "KL-20",
            "slug": "kl-20",
            "name": "Neyyattinkara SRTO"
          },
          {
            "code": "KL-21",
            "slug": "kl-21",
            "name": "Nedumangad SRTO"
          },
          {
            "code": "KL-22",
            "slug": "kl-22",
            "name": "Kazhakoottam SRTO"
          },
          {
            "code": "KL-74",
            "slug": "kl-74",
            "name": "Kattakkada SRTO"
          },
          {
            "code": "KL-81",
            "slug": "kl-81",
            "name": "Varkala SRTO"
          }
        ],
        "slug": "thiruvananthapuram"
      },
      {
        "name": "Kollam",
        "rtos": [
          {
            "code": "KL-02",
            "slug": "kl-02",
            "name": "Kollam Central RTO"
          },
          {
            "code": "KL-23",
            "slug": "kl-23",
            "name": "Karunagappally SRTO"
          },
          {
            "code": "KL-24",
            "slug": "kl-24",
            "name": "Kottarakkara SRTO"
          },
          {
            "code": "KL-25",
            "slug": "kl-25",
            "name": "Punalur SRTO"
          },
          {
            "code": "KL-61",
            "slug": "kl-61",
            "name": "Kunnathur SRTO"
          },
          {
            "code": "KL-82",
            "slug": "kl-82",
            "name": "Chadayamangalam SRTO"
          },
          {
            "code": "KL-83",
            "slug": "kl-83",
            "name": "Pathanapuram SRTO"
          }
        ],
        "slug": "kollam"
      },
      {
        "name": "Pathanamthitta",
        "rtos": [
          {
            "code": "KL-03",
            "slug": "kl-03",
            "name": "Pathanamthitta RTO"
          },
          {
            "code": "KL-26",
            "slug": "kl-26",
            "name": "Adoor SRTO"
          },
          {
            "code": "KL-27",
            "slug": "kl-27",
            "name": "Thiruvalla SRTO"
          },
          {
            "code": "KL-28",
            "slug": "kl-28",
            "name": "Mallappally SRTO"
          },
          {
            "code": "KL-62",
            "slug": "kl-62",
            "name": "Ranni SRTO"
          },
          {
            "code": "KL-80",
            "slug": "kl-80",
            "name": "Konni SRTO"
          }
        ],
        "slug": "pathanamthitta"
      },
      {
        "name": "Alappuzha",
        "rtos": [
          {
            "code": "KL-04",
            "slug": "kl-04",
            "name": "Alappuzha Central RTO"
          },
          {
            "code": "KL-29",
            "slug": "kl-29",
            "name": "Kayamkulam SRTO"
          },
          {
            "code": "KL-30",
            "slug": "kl-30",
            "name": "Chengannur SRTO"
          },
          {
            "code": "KL-31",
            "slug": "kl-31",
            "name": "Mavelikkara SRTO"
          },
          {
            "code": "KL-32",
            "slug": "kl-32",
            "name": "Cherthala SRTO"
          },
          {
            "code": "KL-66",
            "slug": "kl-66",
            "name": "Kuttanad SRTO"
          }
        ],
        "slug": "alappuzha"
      },
      {
        "name": "Kottayam",
        "rtos": [
          {
            "code": "KL-05",
            "slug": "kl-05",
            "name": "Kottayam Central RTO"
          },
          {
            "code": "KL-33",
            "slug": "kl-33",
            "name": "Changanassery SRTO"
          },
          {
            "code": "KL-34",
            "slug": "kl-34",
            "name": "Kanjirappally SRTO"
          },
          {
            "code": "KL-35",
            "slug": "kl-35",
            "name": "Pala SRTO"
          },
          {
            "code": "KL-36",
            "slug": "kl-36",
            "name": "Vaikom SRTO"
          },
          {
            "code": "KL-67",
            "slug": "kl-67",
            "name": "Uzhavoor SRTO"
          }
        ],
        "slug": "kottayam"
      },
      {
        "name": "Idukki",
        "rtos": [
          {
            "code": "KL-06",
            "slug": "kl-06",
            "name": "Idukki (Painavu) RTO"
          },
          {
            "code": "KL-37",
            "slug": "kl-37",
            "name": "Peerumedu SRTO"
          },
          {
            "code": "KL-38",
            "slug": "kl-38",
            "name": "Thodupuzha SRTO"
          },
          {
            "code": "KL-68",
            "slug": "kl-68",
            "name": "Devikulam SRTO"
          },
          {
            "code": "KL-69",
            "slug": "kl-69",
            "name": "Udumbanchola SRTO"
          }
        ],
        "slug": "idukki"
      },
      {
        "name": "Ernakulam",
        "rtos": [
          {
            "code": "KL-07",
            "slug": "kl-07",
            "name": "Ernakulam (Kochi) RTO"
          },
          {
            "code": "KL-17",
            "slug": "kl-17",
            "name": "Muvattupuzha RTO"
          },
          {
            "code": "KL-39",
            "slug": "kl-39",
            "name": "Tripunithura SRTO"
          },
          {
            "code": "KL-40",
            "slug": "kl-40",
            "name": "Perumbavoor SRTO"
          },
          {
            "code": "KL-41",
            "slug": "kl-41",
            "name": "Aluva SRTO"
          },
          {
            "code": "KL-42",
            "slug": "kl-42",
            "name": "North Paravur SRTO"
          },
          {
            "code": "KL-43",
            "slug": "kl-43",
            "name": "Mattancherry SRTO"
          },
          {
            "code": "KL-44",
            "slug": "kl-44",
            "name": "Kothamangalam SRTO"
          },
          {
            "code": "KL-63",
            "slug": "kl-63",
            "name": "Angamaly SRTO"
          },
          {
            "code": "KL-75",
            "slug": "kl-75",
            "name": "Thrikkakara SRTO"
          }
        ],
        "slug": "ernakulam"
      },
      {
        "name": "Thrissur",
        "rtos": [
          {
            "code": "KL-08",
            "slug": "kl-08",
            "name": "Thrissur Central RTO"
          },
          {
            "code": "KL-45",
            "slug": "kl-45",
            "name": "Irinjalakuda SRTO"
          },
          {
            "code": "KL-46",
            "slug": "kl-46",
            "name": "Guruvayur SRTO"
          },
          {
            "code": "KL-47",
            "slug": "kl-47",
            "name": "Kodungallur SRTO"
          },
          {
            "code": "KL-48",
            "slug": "kl-48",
            "name": "Wadakkancherry SRTO"
          },
          {
            "code": "KL-64",
            "slug": "kl-64",
            "name": "Chalakudy SRTO"
          }
        ],
        "slug": "thrissur"
      },
      {
        "name": "Palakkad",
        "rtos": [
          {
            "code": "KL-09",
            "slug": "kl-09",
            "name": "Palakkad Central RTO"
          },
          {
            "code": "KL-49",
            "slug": "kl-49",
            "name": "Alathur SRTO"
          },
          {
            "code": "KL-50",
            "slug": "kl-50",
            "name": "Mannarkkad SRTO"
          },
          {
            "code": "KL-51",
            "slug": "kl-51",
            "name": "Ottapalam SRTO"
          },
          {
            "code": "KL-52",
            "slug": "kl-52",
            "name": "Pattambi SRTO"
          },
          {
            "code": "KL-70",
            "slug": "kl-70",
            "name": "Chittur SRTO"
          }
        ],
        "slug": "palakkad"
      },
      {
        "name": "Malappuram",
        "rtos": [
          {
            "code": "KL-10",
            "slug": "kl-10",
            "name": "Malappuram Central RTO"
          },
          {
            "code": "KL-53",
            "slug": "kl-53",
            "name": "Perinthalmanna SRTO"
          },
          {
            "code": "KL-54",
            "slug": "kl-54",
            "name": "Ponnani SRTO"
          },
          {
            "code": "KL-55",
            "slug": "kl-55",
            "name": "Tirur SRTO"
          },
          {
            "code": "KL-65",
            "slug": "kl-65",
            "name": "Tirurangadi SRTO"
          },
          {
            "code": "KL-71",
            "slug": "kl-71",
            "name": "Nilambur SRTO"
          },
          {
            "code": "KL-84",
            "slug": "kl-84",
            "name": "Kondotty SRTO"
          }
        ],
        "slug": "malappuram"
      },
      {
        "name": "Kozhikode",
        "rtos": [
          {
            "code": "KL-11",
            "slug": "kl-11",
            "name": "Kozhikode Central RTO"
          },
          {
            "code": "KL-18",
            "slug": "kl-18",
            "name": "Vadakara RTO"
          },
          {
            "code": "KL-56",
            "slug": "kl-56",
            "name": "Koyilandy SRTO"
          },
          {
            "code": "KL-57",
            "slug": "kl-57",
            "name": "Koduvally SRTO"
          },
          {
            "code": "KL-76",
            "slug": "kl-76",
            "name": "Nanminda SRTO"
          },
          {
            "code": "KL-77",
            "slug": "kl-77",
            "name": "Perambra SRTO"
          },
          {
            "code": "KL-85",
            "slug": "kl-85",
            "name": "Feroke SRTO"
          }
        ],
        "slug": "kozhikode"
      },
      {
        "name": "Wayanad",
        "rtos": [
          {
            "code": "KL-12",
            "slug": "kl-12",
            "name": "Wayanad (Kalpetta) RTO"
          },
          {
            "code": "KL-72",
            "slug": "kl-72",
            "name": "Mananthavady SRTO"
          },
          {
            "code": "KL-73",
            "slug": "kl-73",
            "name": "Sulthan Bathery SRTO"
          }
        ],
        "slug": "wayanad"
      },
      {
        "name": "Kannur",
        "rtos": [
          {
            "code": "KL-13",
            "slug": "kl-13",
            "name": "Kannur Central RTO"
          },
          {
            "code": "KL-58",
            "slug": "kl-58",
            "name": "Thalassery SRTO"
          },
          {
            "code": "KL-59",
            "slug": "kl-59",
            "name": "Thaliparamba SRTO"
          },
          {
            "code": "KL-78",
            "slug": "kl-78",
            "name": "Iritty SRTO"
          },
          {
            "code": "KL-86",
            "slug": "kl-86",
            "name": "Payyanur SRTO"
          }
        ],
        "slug": "kannur"
      },
      {
        "name": "Kasaragod",
        "rtos": [
          {
            "code": "KL-14",
            "slug": "kl-14",
            "name": "Kasaragod Central RTO"
          },
          {
            "code": "KL-60",
            "slug": "kl-60",
            "name": "Kanhangad SRTO"
          },
          {
            "code": "KL-79",
            "slug": "kl-79",
            "name": "Vellarikundu SRTO"
          }
        ],
        "slug": "kasaragod"
      }
    ],
    "slug": "kerala"
  },
  {
    "name": "Madhya Pradesh",
    "code": "MP",
    "capital": "Bhopal",
    "type": "state",
    "cities": [
      {
        "name": "Bhopal",
        "rtos": [
          {
            "code": "MP-04",
            "slug": "mp-04",
            "name": "Bhopal Central RTO"
          }
        ],
        "slug": "bhopal"
      },
      {
        "name": "Hoshangabad",
        "rtos": [
          {
            "code": "MP-05",
            "slug": "mp-05",
            "name": "Narmadapuram (Hoshangabad) DTO"
          }
        ],
        "slug": "hoshangabad"
      },
      {
        "name": "Morena",
        "rtos": [
          {
            "code": "MP-06",
            "slug": "mp-06",
            "name": "Morena DTO"
          }
        ],
        "slug": "morena"
      },
      {
        "name": "Gwalior",
        "rtos": [
          {
            "code": "MP-07",
            "slug": "mp-07",
            "name": "Gwalior RTO"
          }
        ],
        "slug": "gwalior"
      },
      {
        "name": "Guna",
        "rtos": [
          {
            "code": "MP-08",
            "slug": "mp-08",
            "name": "Guna DTO"
          }
        ],
        "slug": "guna"
      },
      {
        "name": "Indore",
        "rtos": [
          {
            "code": "MP-09",
            "slug": "mp-09",
            "name": "Indore Central RTO"
          }
        ],
        "slug": "indore"
      },
      {
        "name": "Khargone",
        "rtos": [
          {
            "code": "MP-10",
            "slug": "mp-10",
            "name": "Khargone (West Nimar) DTO"
          }
        ],
        "slug": "khargone"
      },
      {
        "name": "Dhar",
        "rtos": [
          {
            "code": "MP-11",
            "slug": "mp-11",
            "name": "Dhar DTO"
          }
        ],
        "slug": "dhar"
      },
      {
        "name": "Khandwa",
        "rtos": [
          {
            "code": "MP-12",
            "slug": "mp-12",
            "name": "Khandwa (East Nimar) DTO"
          }
        ],
        "slug": "khandwa"
      },
      {
        "name": "Ujjain",
        "rtos": [
          {
            "code": "MP-13",
            "slug": "mp-13",
            "name": "Ujjain RTO"
          }
        ],
        "slug": "ujjain"
      },
      {
        "name": "Mandsaur",
        "rtos": [
          {
            "code": "MP-14",
            "slug": "mp-14",
            "name": "Mandsaur DTO"
          }
        ],
        "slug": "mandsaur"
      },
      {
        "name": "Sagar",
        "rtos": [
          {
            "code": "MP-15",
            "slug": "mp-15",
            "name": "Sagar RTO"
          }
        ],
        "slug": "sagar"
      },
      {
        "name": "Chhatarpur",
        "rtos": [
          {
            "code": "MP-16",
            "slug": "mp-16",
            "name": "Chhatarpur DTO"
          }
        ],
        "slug": "chhatarpur"
      },
      {
        "name": "Rewa",
        "rtos": [
          {
            "code": "MP-17",
            "slug": "mp-17",
            "name": "Rewa RTO"
          }
        ],
        "slug": "rewa"
      },
      {
        "name": "Shahdol",
        "rtos": [
          {
            "code": "MP-18",
            "slug": "mp-18",
            "name": "Shahdol DTO"
          }
        ],
        "slug": "shahdol"
      },
      {
        "name": "Satna",
        "rtos": [
          {
            "code": "MP-19",
            "slug": "mp-19",
            "name": "Satna Cement Hub DTO"
          }
        ],
        "slug": "satna"
      },
      {
        "name": "Jabalpur",
        "rtos": [
          {
            "code": "MP-20",
            "slug": "mp-20",
            "name": "Jabalpur RTO"
          }
        ],
        "slug": "jabalpur"
      },
      {
        "name": "Katni",
        "rtos": [
          {
            "code": "MP-21",
            "slug": "mp-21",
            "name": "Katni Mineral Hub DTO"
          }
        ],
        "slug": "katni"
      },
      {
        "name": "Seoni",
        "rtos": [
          {
            "code": "MP-22",
            "slug": "mp-22",
            "name": "Seoni DTO"
          }
        ],
        "slug": "seoni"
      },
      {
        "name": "Chhindwara",
        "rtos": [
          {
            "code": "MP-28",
            "slug": "mp-28",
            "name": "Chhindwara DTO"
          }
        ],
        "slug": "chhindwara"
      },
      {
        "name": "Bhind",
        "rtos": [
          {
            "code": "MP-30",
            "slug": "mp-30",
            "name": "Bhind DTO"
          }
        ],
        "slug": "bhind"
      },
      {
        "name": "Sheopur",
        "rtos": [
          {
            "code": "MP-31",
            "slug": "mp-31",
            "name": "Sheopur DTO"
          }
        ],
        "slug": "sheopur"
      },
      {
        "name": "Datia",
        "rtos": [
          {
            "code": "MP-32",
            "slug": "mp-32",
            "name": "Datia DTO"
          }
        ],
        "slug": "datia"
      },
      {
        "name": "Shivpuri",
        "rtos": [
          {
            "code": "MP-33",
            "slug": "mp-33",
            "name": "Shivpuri DTO"
          }
        ],
        "slug": "shivpuri"
      },
      {
        "name": "Damoh",
        "rtos": [
          {
            "code": "MP-34",
            "slug": "mp-34",
            "name": "Damoh DTO"
          }
        ],
        "slug": "damoh"
      },
      {
        "name": "Panna",
        "rtos": [
          {
            "code": "MP-35",
            "slug": "mp-35",
            "name": "Panna Mining Hub DTO"
          }
        ],
        "slug": "panna"
      },
      {
        "name": "Tikamgarh",
        "rtos": [
          {
            "code": "MP-36",
            "slug": "mp-36",
            "name": "Tikamgarh DTO"
          }
        ],
        "slug": "tikamgarh"
      },
      {
        "name": "Sehore",
        "rtos": [
          {
            "code": "MP-37",
            "slug": "mp-37",
            "name": "Sehore DTO"
          }
        ],
        "slug": "sehore"
      },
      {
        "name": "Raisen",
        "rtos": [
          {
            "code": "MP-38",
            "slug": "mp-38",
            "name": "Raisen (Mandideep) DTO"
          }
        ],
        "slug": "raisen"
      },
      {
        "name": "Rajgarh",
        "rtos": [
          {
            "code": "MP-39",
            "slug": "mp-39",
            "name": "Rajgarh (Biaora) DTO"
          }
        ],
        "slug": "rajgarh"
      },
      {
        "name": "Vidisha",
        "rtos": [
          {
            "code": "MP-40",
            "slug": "mp-40",
            "name": "Vidisha DTO"
          }
        ],
        "slug": "vidisha"
      },
      {
        "name": "Dewas",
        "rtos": [
          {
            "code": "MP-41",
            "slug": "mp-41",
            "name": "Dewas DTO"
          }
        ],
        "slug": "dewas"
      },
      {
        "name": "Shajapur",
        "rtos": [
          {
            "code": "MP-42",
            "slug": "mp-42",
            "name": "Shajapur DTO"
          }
        ],
        "slug": "shajapur"
      },
      {
        "name": "Ratlam",
        "rtos": [
          {
            "code": "MP-43",
            "slug": "mp-43",
            "name": "Ratlam DTO"
          }
        ],
        "slug": "ratlam"
      },
      {
        "name": "Neemuch",
        "rtos": [
          {
            "code": "MP-44",
            "slug": "mp-44",
            "name": "Neemuch DTO"
          }
        ],
        "slug": "neemuch"
      },
      {
        "name": "Jhabua",
        "rtos": [
          {
            "code": "MP-45",
            "slug": "mp-45",
            "name": "Jhabua DTO"
          }
        ],
        "slug": "jhabua"
      },
      {
        "name": "Barwani",
        "rtos": [
          {
            "code": "MP-46",
            "slug": "mp-46",
            "name": "Barwani DTO"
          }
        ],
        "slug": "barwani"
      },
      {
        "name": "Harda",
        "rtos": [
          {
            "code": "MP-47",
            "slug": "mp-47",
            "name": "Harda DTO"
          }
        ],
        "slug": "harda"
      },
      {
        "name": "Betul",
        "rtos": [
          {
            "code": "MP-48",
            "slug": "mp-48",
            "name": "Betul DTO"
          }
        ],
        "slug": "betul"
      },
      {
        "name": "Narsinghpur",
        "rtos": [
          {
            "code": "MP-49",
            "slug": "mp-49",
            "name": "Narsinghpur DTO"
          }
        ],
        "slug": "narsinghpur"
      },
      {
        "name": "Balaghat",
        "rtos": [
          {
            "code": "MP-50",
            "slug": "mp-50",
            "name": "Balaghat Manganese Hub DTO"
          }
        ],
        "slug": "balaghat"
      },
      {
        "name": "Mandla",
        "rtos": [
          {
            "code": "MP-51",
            "slug": "mp-51",
            "name": "Mandla DTO"
          }
        ],
        "slug": "mandla"
      },
      {
        "name": "Dindori",
        "rtos": [
          {
            "code": "MP-52",
            "slug": "mp-52",
            "name": "Dindori DTO"
          }
        ],
        "slug": "dindori"
      },
      {
        "name": "Singrauli",
        "rtos": [
          {
            "code": "MP-53",
            "slug": "mp-53",
            "name": "Singrauli Energy Hub DTO"
          },
          {
            "code": "MP-66",
            "slug": "mp-66",
            "name": "Singrauli Rural DTO"
          }
        ],
        "slug": "singrauli"
      },
      {
        "name": "Umaria",
        "rtos": [
          {
            "code": "MP-54",
            "slug": "mp-54",
            "name": "Umaria DTO"
          }
        ],
        "slug": "umaria"
      },
      {
        "name": "Anuppur",
        "rtos": [
          {
            "code": "MP-55",
            "slug": "mp-55",
            "name": "Anuppur DTO"
          }
        ],
        "slug": "anuppur"
      },
      {
        "name": "Alirajpur",
        "rtos": [
          {
            "code": "MP-65",
            "slug": "mp-65",
            "name": "Alirajpur DTO"
          }
        ],
        "slug": "alirajpur"
      },
      {
        "name": "Ashoknagar",
        "rtos": [
          {
            "code": "MP-67",
            "slug": "mp-67",
            "name": "Ashoknagar DTO"
          }
        ],
        "slug": "ashoknagar"
      },
      {
        "name": "Burhanpur",
        "rtos": [
          {
            "code": "MP-68",
            "slug": "mp-68",
            "name": "Burhanpur DTO"
          }
        ],
        "slug": "burhanpur"
      },
      {
        "name": "Agar Malwa",
        "rtos": [
          {
            "code": "MP-69",
            "slug": "mp-69",
            "name": "Agar Malwa DTO"
          }
        ],
        "slug": "agar-malwa"
      },
      {
        "name": "Niwari",
        "rtos": [
          {
            "code": "MP-70",
            "slug": "mp-70",
            "name": "Niwari DTO"
          }
        ],
        "slug": "niwari"
      },
      {
        "name": "Maihar",
        "rtos": [
          {
            "code": "MP-71",
            "slug": "mp-71",
            "name": "Maihar DTO"
          }
        ],
        "slug": "maihar"
      },
      {
        "name": "Mauganj",
        "rtos": [
          {
            "code": "MP-72",
            "slug": "mp-72",
            "name": "Mauganj DTO"
          }
        ],
        "slug": "mauganj"
      },
      {
        "name": "Pandhurna",
        "rtos": [
          {
            "code": "MP-73",
            "slug": "mp-73",
            "name": "Pandhurna DTO"
          }
        ],
        "slug": "pandhurna"
      },
      {
        "name": "Nagda",
        "rtos": [
          {
            "code": "MP-74",
            "slug": "mp-74",
            "name": "Nagda Industrial DTO"
          }
        ],
        "slug": "nagda"
      }
    ],
    "slug": "madhya-pradesh"
  },
  {
    "name": "Maharashtra",
    "code": "MH",
    "capital": "Mumbai",
    "type": "state",
    "cities": [
      {
        "name": "Mumbai",
        "rtos": [
          {
            "code": "MH-01",
            "slug": "mh-01",
            "name": "Mumbai South (Tardeo) RTO"
          },
          {
            "code": "MH-02",
            "slug": "mh-02",
            "name": "Mumbai West (Andheri) RTO"
          },
          {
            "code": "MH-03",
            "slug": "mh-03",
            "name": "Mumbai East (Wadala) RTO"
          },
          {
            "code": "MH-47",
            "slug": "mh-47",
            "name": "Mumbai North (Borivali) RTO"
          }
        ],
        "slug": "mumbai"
      },
      {
        "name": "Thane",
        "rtos": [
          {
            "code": "MH-04",
            "slug": "mh-04",
            "name": "Thane Central RTO"
          },
          {
            "code": "MH-05",
            "slug": "mh-05",
            "name": "Kalyan RTO"
          }
        ],
        "slug": "thane"
      },
      {
        "name": "Raigad",
        "rtos": [
          {
            "code": "MH-06",
            "slug": "mh-06",
            "name": "Raigad (Pen) RTO"
          },
          {
            "code": "MH-46",
            "slug": "mh-46",
            "name": "Navi Mumbai (Panvel) RTO"
          }
        ],
        "slug": "raigad"
      },
      {
        "name": "Sindhudurg",
        "rtos": [
          {
            "code": "MH-07",
            "slug": "mh-07",
            "name": "Sindhudurg (Oros) RTO"
          }
        ],
        "slug": "sindhudurg"
      },
      {
        "name": "Ratnagiri",
        "rtos": [
          {
            "code": "MH-08",
            "slug": "mh-08",
            "name": "Ratnagiri RTO"
          }
        ],
        "slug": "ratnagiri"
      },
      {
        "name": "Kolhapur",
        "rtos": [
          {
            "code": "MH-09",
            "slug": "mh-09",
            "name": "Kolhapur RTO"
          },
          {
            "code": "MH-51",
            "slug": "mh-51",
            "name": "Ichalkaranji RTO"
          }
        ],
        "slug": "kolhapur"
      },
      {
        "name": "Sangli",
        "rtos": [
          {
            "code": "MH-10",
            "slug": "mh-10",
            "name": "Sangli (Miraj) RTO"
          }
        ],
        "slug": "sangli"
      },
      {
        "name": "Satara",
        "rtos": [
          {
            "code": "MH-11",
            "slug": "mh-11",
            "name": "Satara RTO"
          },
          {
            "code": "MH-50",
            "slug": "mh-50",
            "name": "Karad RTO"
          },
          {
            "code": "MH-53",
            "slug": "mh-53",
            "name": "Phaltan RTO"
          }
        ],
        "slug": "satara"
      },
      {
        "name": "Pune",
        "rtos": [
          {
            "code": "MH-12",
            "slug": "mh-12",
            "name": "Pune Central RTO"
          },
          {
            "code": "MH-14",
            "slug": "mh-14",
            "name": "Pimpri-Chinchwad (PCMC) RTO"
          },
          {
            "code": "MH-42",
            "slug": "mh-42",
            "name": "Baramati RTO"
          }
        ],
        "slug": "pune"
      },
      {
        "name": "Solapur",
        "rtos": [
          {
            "code": "MH-13",
            "slug": "mh-13",
            "name": "Solapur Central RTO"
          },
          {
            "code": "MH-45",
            "slug": "mh-45",
            "name": "Akluj RTO"
          }
        ],
        "slug": "solapur"
      },
      {
        "name": "Nashik",
        "rtos": [
          {
            "code": "MH-15",
            "slug": "mh-15",
            "name": "Nashik Central RTO"
          },
          {
            "code": "MH-41",
            "slug": "mh-41",
            "name": "Malegaon RTO"
          }
        ],
        "slug": "nashik"
      },
      {
        "name": "Ahmednagar",
        "rtos": [
          {
            "code": "MH-16",
            "slug": "mh-16",
            "name": "Ahmednagar RTO"
          },
          {
            "code": "MH-17",
            "slug": "mh-17",
            "name": "Shrirampur RTO"
          }
        ],
        "slug": "ahmednagar"
      },
      {
        "name": "Dhule",
        "rtos": [
          {
            "code": "MH-18",
            "slug": "mh-18",
            "name": "Dhule RTO"
          }
        ],
        "slug": "dhule"
      },
      {
        "name": "Jalgaon",
        "rtos": [
          {
            "code": "MH-19",
            "slug": "mh-19",
            "name": "Jalgaon RTO"
          },
          {
            "code": "MH-52",
            "slug": "mh-52",
            "name": "Chalisgaon RTO"
          }
        ],
        "slug": "jalgaon"
      },
      {
        "name": "Aurangabad",
        "rtos": [
          {
            "code": "MH-20",
            "slug": "mh-20",
            "name": "Chhatrapati Sambhajinagar (Aurangabad) RTO"
          }
        ],
        "slug": "aurangabad"
      },
      {
        "name": "Jalna",
        "rtos": [
          {
            "code": "MH-21",
            "slug": "mh-21",
            "name": "Jalna RTO"
          }
        ],
        "slug": "jalna"
      },
      {
        "name": "Parbhani",
        "rtos": [
          {
            "code": "MH-22",
            "slug": "mh-22",
            "name": "Parbhani RTO"
          }
        ],
        "slug": "parbhani"
      },
      {
        "name": "Beed",
        "rtos": [
          {
            "code": "MH-23",
            "slug": "mh-23",
            "name": "Beed RTO"
          },
          {
            "code": "MH-44",
            "slug": "mh-44",
            "name": "Ambejogai RTO"
          }
        ],
        "slug": "beed"
      },
      {
        "name": "Latur",
        "rtos": [
          {
            "code": "MH-24",
            "slug": "mh-24",
            "name": "Latur RTO"
          },
          {
            "code": "MH-55",
            "slug": "mh-55",
            "name": "Udgir RTO"
          }
        ],
        "slug": "latur"
      },
      {
        "name": "Dharashiv",
        "rtos": [
          {
            "code": "MH-25",
            "slug": "mh-25",
            "name": "Dharashiv (Osmanabad) RTO"
          }
        ],
        "slug": "dharashiv"
      },
      {
        "name": "Nanded",
        "rtos": [
          {
            "code": "MH-26",
            "slug": "mh-26",
            "name": "Nanded RTO"
          }
        ],
        "slug": "nanded"
      },
      {
        "name": "Amravati",
        "rtos": [
          {
            "code": "MH-27",
            "slug": "mh-27",
            "name": "Amravati RTO"
          }
        ],
        "slug": "amravati"
      },
      {
        "name": "Buldhana",
        "rtos": [
          {
            "code": "MH-28",
            "slug": "mh-28",
            "name": "Buldhana RTO"
          }
        ],
        "slug": "buldhana"
      },
      {
        "name": "Yavatmal",
        "rtos": [
          {
            "code": "MH-29",
            "slug": "mh-29",
            "name": "Yavatmal RTO"
          }
        ],
        "slug": "yavatmal"
      },
      {
        "name": "Akola",
        "rtos": [
          {
            "code": "MH-30",
            "slug": "mh-30",
            "name": "Akola RTO"
          }
        ],
        "slug": "akola"
      },
      {
        "name": "Nagpur",
        "rtos": [
          {
            "code": "MH-31",
            "slug": "mh-31",
            "name": "Nagpur City (Civil Lines) RTO"
          },
          {
            "code": "MH-40",
            "slug": "mh-40",
            "name": "Nagpur Rural RTO"
          },
          {
            "code": "MH-49",
            "slug": "mh-49",
            "name": "Nagpur East RTO"
          }
        ],
        "slug": "nagpur"
      },
      {
        "name": "Wardha",
        "rtos": [
          {
            "code": "MH-32",
            "slug": "mh-32",
            "name": "Wardha RTO"
          }
        ],
        "slug": "wardha"
      },
      {
        "name": "Gadchiroli",
        "rtos": [
          {
            "code": "MH-33",
            "slug": "mh-33",
            "name": "Gadchiroli RTO"
          }
        ],
        "slug": "gadchiroli"
      },
      {
        "name": "Chandrapur",
        "rtos": [
          {
            "code": "MH-34",
            "slug": "mh-34",
            "name": "Chandrapur Mineral Hub RTO"
          },
          {
            "code": "MH-54",
            "slug": "mh-54",
            "name": "Bhadravati RTO"
          }
        ],
        "slug": "chandrapur"
      },
      {
        "name": "Gondia",
        "rtos": [
          {
            "code": "MH-35",
            "slug": "mh-35",
            "name": "Gondia RTO"
          }
        ],
        "slug": "gondia"
      },
      {
        "name": "Bhandara",
        "rtos": [
          {
            "code": "MH-36",
            "slug": "mh-36",
            "name": "Bhandara RTO"
          }
        ],
        "slug": "bhandara"
      },
      {
        "name": "Washim",
        "rtos": [
          {
            "code": "MH-37",
            "slug": "mh-37",
            "name": "Washim RTO"
          }
        ],
        "slug": "washim"
      },
      {
        "name": "Hingoli",
        "rtos": [
          {
            "code": "MH-38",
            "slug": "mh-38",
            "name": "Hingoli RTO"
          }
        ],
        "slug": "hingoli"
      },
      {
        "name": "Nandurbar",
        "rtos": [
          {
            "code": "MH-39",
            "slug": "mh-39",
            "name": "Nandurbar RTO"
          }
        ],
        "slug": "nandurbar"
      },
      {
        "name": "Navi Mumbai",
        "rtos": [
          {
            "code": "MH-43",
            "slug": "mh-43",
            "name": "Navi Mumbai (Vashi) RTO"
          }
        ],
        "slug": "navi-mumbai"
      },
      {
        "name": "Palghar",
        "rtos": [
          {
            "code": "MH-48",
            "slug": "mh-48",
            "name": "Vasai-Virar (Palghar) RTO"
          }
        ],
        "slug": "palghar"
      }
    ],
    "slug": "maharashtra"
  },
  {
    "name": "Manipur",
    "code": "MN",
    "capital": "Imphal",
    "type": "state",
    "cities": [
      {
        "name": "Imphal West",
        "rtos": [
          {
            "code": "MN-01",
            "slug": "mn-01",
            "name": "Imphal West DTO"
          }
        ],
        "slug": "imphal-west"
      },
      {
        "name": "Churachandpur",
        "rtos": [
          {
            "code": "MN-02",
            "slug": "mn-02",
            "name": "Churachandpur DTO"
          }
        ],
        "slug": "churachandpur"
      },
      {
        "name": "Kangpokpi",
        "rtos": [
          {
            "code": "MN-03",
            "slug": "mn-03",
            "name": "Kangpokpi DTO"
          }
        ],
        "slug": "kangpokpi"
      },
      {
        "name": "Thoubal",
        "rtos": [
          {
            "code": "MN-04",
            "slug": "mn-04",
            "name": "Thoubal DTO"
          }
        ],
        "slug": "thoubal"
      },
      {
        "name": "Bishnupur",
        "rtos": [
          {
            "code": "MN-05",
            "slug": "mn-05",
            "name": "Bishnupur DTO"
          }
        ],
        "slug": "bishnupur"
      },
      {
        "name": "Imphal East",
        "rtos": [
          {
            "code": "MN-06",
            "slug": "mn-06",
            "name": "Imphal East DTO"
          }
        ],
        "slug": "imphal-east"
      },
      {
        "name": "Ukhrul",
        "rtos": [
          {
            "code": "MN-07",
            "slug": "mn-07",
            "name": "Ukhrul DTO"
          }
        ],
        "slug": "ukhrul"
      }
    ],
    "slug": "manipur"
  },
  {
    "name": "Meghalaya",
    "code": "ML",
    "capital": "Shillong",
    "type": "state",
    "cities": [
      {
        "name": "Jowai",
        "rtos": [
          {
            "code": "ML-04",
            "slug": "ml-04",
            "name": "Jowai (West Jaintia Hills) DTO"
          }
        ],
        "slug": "jowai"
      },
      {
        "name": "Shillong",
        "rtos": [
          {
            "code": "ML-05",
            "slug": "ml-05",
            "name": "Shillong (East Khasi Hills) DTO"
          }
        ],
        "slug": "shillong"
      },
      {
        "name": "Nongstoin",
        "rtos": [
          {
            "code": "ML-06",
            "slug": "ml-06",
            "name": "Nongstoin (West Khasi Hills) DTO"
          }
        ],
        "slug": "nongstoin"
      },
      {
        "name": "Williamnagar",
        "rtos": [
          {
            "code": "ML-07",
            "slug": "ml-07",
            "name": "Williamnagar (East Garo Hills) DTO"
          }
        ],
        "slug": "williamnagar"
      },
      {
        "name": "Tura",
        "rtos": [
          {
            "code": "ML-08",
            "slug": "ml-08",
            "name": "Tura (West Garo Hills) DTO"
          }
        ],
        "slug": "tura"
      },
      {
        "name": "Baghmara",
        "rtos": [
          {
            "code": "ML-09",
            "slug": "ml-09",
            "name": "Baghmara (South Garo Hills) DTO"
          }
        ],
        "slug": "baghmara"
      },
      {
        "name": "Nongpoh",
        "rtos": [
          {
            "code": "ML-10",
            "slug": "ml-10",
            "name": "Nongpoh (Ri-Bhoi) DTO"
          }
        ],
        "slug": "nongpoh"
      }
    ],
    "slug": "meghalaya"
  },
  {
    "name": "Mizoram",
    "code": "MZ",
    "capital": "Aizawl",
    "type": "state",
    "cities": [
      {
        "name": "Aizawl",
        "rtos": [
          {
            "code": "MZ-01",
            "slug": "mz-01",
            "name": "Aizawl DTO"
          }
        ],
        "slug": "aizawl"
      },
      {
        "name": "Lunglei",
        "rtos": [
          {
            "code": "MZ-02",
            "slug": "mz-02",
            "name": "Lunglei DTO"
          }
        ],
        "slug": "lunglei"
      },
      {
        "name": "Saiha",
        "rtos": [
          {
            "code": "MZ-03",
            "slug": "mz-03",
            "name": "Saiha DTO"
          }
        ],
        "slug": "saiha"
      },
      {
        "name": "Champhai",
        "rtos": [
          {
            "code": "MZ-04",
            "slug": "mz-04",
            "name": "Champhai DTO"
          }
        ],
        "slug": "champhai"
      },
      {
        "name": "Kolasib",
        "rtos": [
          {
            "code": "MZ-05",
            "slug": "mz-05",
            "name": "Kolasib DTO"
          }
        ],
        "slug": "kolasib"
      },
      {
        "name": "Serchhip",
        "rtos": [
          {
            "code": "MZ-06",
            "slug": "mz-06",
            "name": "Serchhip DTO"
          }
        ],
        "slug": "serchhip"
      },
      {
        "name": "Lawngtlai",
        "rtos": [
          {
            "code": "MZ-07",
            "slug": "mz-07",
            "name": "Lawngtlai DTO"
          }
        ],
        "slug": "lawngtlai"
      },
      {
        "name": "Mamit",
        "rtos": [
          {
            "code": "MZ-08",
            "slug": "mz-08",
            "name": "Mamit DTO"
          }
        ],
        "slug": "mamit"
      }
    ],
    "slug": "mizoram"
  },
  {
    "name": "Nagaland",
    "code": "NL",
    "capital": "Kohima",
    "type": "state",
    "cities": [
      {
        "name": "Kohima",
        "rtos": [
          {
            "code": "NL-01",
            "slug": "nl-01",
            "name": "Kohima DTO"
          }
        ],
        "slug": "kohima"
      },
      {
        "name": "Mokokchung",
        "rtos": [
          {
            "code": "NL-02",
            "slug": "nl-02",
            "name": "Mokokchung DTO"
          }
        ],
        "slug": "mokokchung"
      },
      {
        "name": "Tuensang",
        "rtos": [
          {
            "code": "NL-03",
            "slug": "nl-03",
            "name": "Tuensang DTO"
          }
        ],
        "slug": "tuensang"
      },
      {
        "name": "Mon",
        "rtos": [
          {
            "code": "NL-04",
            "slug": "nl-04",
            "name": "Mon DTO"
          }
        ],
        "slug": "mon"
      },
      {
        "name": "Wokha",
        "rtos": [
          {
            "code": "NL-05",
            "slug": "nl-05",
            "name": "Wokha DTO"
          }
        ],
        "slug": "wokha"
      },
      {
        "name": "Zunheboto",
        "rtos": [
          {
            "code": "NL-06",
            "slug": "nl-06",
            "name": "Zunheboto DTO"
          }
        ],
        "slug": "zunheboto"
      },
      {
        "name": "Dimapur",
        "rtos": [
          {
            "code": "NL-07",
            "slug": "nl-07",
            "name": "Dimapur Commercial DTO"
          }
        ],
        "slug": "dimapur"
      },
      {
        "name": "Phek",
        "rtos": [
          {
            "code": "NL-08",
            "slug": "nl-08",
            "name": "Phek DTO"
          }
        ],
        "slug": "phek"
      }
    ],
    "slug": "nagaland"
  },
  {
    "name": "Odisha",
    "code": "OD",
    "capital": "Bhubaneswar",
    "type": "state",
    "cities": [
      {
        "name": "Balasore",
        "rtos": [
          {
            "code": "OD-01",
            "slug": "od-01",
            "name": "Balasore RTO"
          }
        ],
        "slug": "balasore"
      },
      {
        "name": "Bhubaneswar",
        "rtos": [
          {
            "code": "OD-02",
            "slug": "od-02",
            "name": "Bhubaneswar-I RTO"
          },
          {
            "code": "OD-33",
            "slug": "od-33",
            "name": "Bhubaneswar-II RTO"
          }
        ],
        "slug": "bhubaneswar"
      },
      {
        "name": "Sambalpur",
        "rtos": [
          {
            "code": "OD-03",
            "slug": "od-03",
            "name": "Sambalpur RTO"
          }
        ],
        "slug": "sambalpur"
      },
      {
        "name": "Ganjam",
        "rtos": [
          {
            "code": "OD-04",
            "slug": "od-04",
            "name": "Berhampur (Ganjam) RTO"
          },
          {
            "code": "OD-07",
            "slug": "od-07",
            "name": "Ganjam RTO"
          },
          {
            "code": "OD-31",
            "slug": "od-31",
            "name": "Bhanjanagar RTO"
          }
        ],
        "slug": "ganjam"
      },
      {
        "name": "Cuttack",
        "rtos": [
          {
            "code": "OD-05",
            "slug": "od-05",
            "name": "Cuttack RTO"
          }
        ],
        "slug": "cuttack"
      },
      {
        "name": "Mayurbhanj",
        "rtos": [
          {
            "code": "OD-06",
            "slug": "od-06",
            "name": "Baripada (Mayurbhanj) RTO"
          }
        ],
        "slug": "mayurbhanj"
      },
      {
        "name": "Kalahandi",
        "rtos": [
          {
            "code": "OD-08",
            "slug": "od-08",
            "name": "Bhawanipatna (Kalahandi) RTO"
          }
        ],
        "slug": "kalahandi"
      },
      {
        "name": "Dhenkanal",
        "rtos": [
          {
            "code": "OD-09",
            "slug": "od-09",
            "name": "Dhenkanal RTO"
          }
        ],
        "slug": "dhenkanal"
      },
      {
        "name": "Koraput",
        "rtos": [
          {
            "code": "OD-10",
            "slug": "od-10",
            "name": "Koraput RTO"
          }
        ],
        "slug": "koraput"
      },
      {
        "name": "Rourkela",
        "rtos": [
          {
            "code": "OD-11",
            "slug": "od-11",
            "name": "Rourkela Steel Hub RTO"
          }
        ],
        "slug": "rourkela"
      },
      {
        "name": "Puri",
        "rtos": [
          {
            "code": "OD-12",
            "slug": "od-12",
            "name": "Puri RTO"
          }
        ],
        "slug": "puri"
      },
      {
        "name": "Keonjhar",
        "rtos": [
          {
            "code": "OD-13",
            "slug": "od-13",
            "name": "Keonjhar Iron Ore Mining Hub RTO"
          }
        ],
        "slug": "keonjhar"
      },
      {
        "name": "Angul",
        "rtos": [
          {
            "code": "OD-14",
            "slug": "od-14",
            "name": "Angul Coal Mining RTO"
          },
          {
            "code": "OD-35",
            "slug": "od-35",
            "name": "Talcher Coal Belt RTO"
          }
        ],
        "slug": "angul"
      },
      {
        "name": "Subarnapur",
        "rtos": [
          {
            "code": "OD-15",
            "slug": "od-15",
            "name": "Sonepur (Subarnapur) RTO"
          }
        ],
        "slug": "subarnapur"
      },
      {
        "name": "Sundargarh",
        "rtos": [
          {
            "code": "OD-16",
            "slug": "od-16",
            "name": "Sundargarh RTO"
          }
        ],
        "slug": "sundargarh"
      },
      {
        "name": "Bargarh",
        "rtos": [
          {
            "code": "OD-17",
            "slug": "od-17",
            "name": "Bargarh RTO"
          }
        ],
        "slug": "bargarh"
      },
      {
        "name": "Rayagada",
        "rtos": [
          {
            "code": "OD-18",
            "slug": "od-18",
            "name": "Rayagada RTO"
          }
        ],
        "slug": "rayagada"
      },
      {
        "name": "Jagatsinghpur",
        "rtos": [
          {
            "code": "OD-19",
            "slug": "od-19",
            "name": "Jagatsinghpur (Paradeep Port) RTO"
          }
        ],
        "slug": "jagatsinghpur"
      },
      {
        "name": "Kendrapara",
        "rtos": [
          {
            "code": "OD-20",
            "slug": "od-20",
            "name": "Kendrapara RTO"
          }
        ],
        "slug": "kendrapara"
      },
      {
        "name": "Jajpur",
        "rtos": [
          {
            "code": "OD-21",
            "slug": "od-21",
            "name": "Jajpur RTO"
          },
          {
            "code": "OD-34",
            "slug": "od-34",
            "name": "Jajpur Road (Kalinganagar) RTO"
          }
        ],
        "slug": "jajpur"
      },
      {
        "name": "Bhadrak",
        "rtos": [
          {
            "code": "OD-22",
            "slug": "od-22",
            "name": "Bhadrak RTO"
          }
        ],
        "slug": "bhadrak"
      },
      {
        "name": "Jharsuguda",
        "rtos": [
          {
            "code": "OD-23",
            "slug": "od-23",
            "name": "Jharsuguda Industrial RTO"
          }
        ],
        "slug": "jharsuguda"
      },
      {
        "name": "Nabarangpur",
        "rtos": [
          {
            "code": "OD-24",
            "slug": "od-24",
            "name": "Nabarangpur RTO"
          }
        ],
        "slug": "nabarangpur"
      },
      {
        "name": "Nayagarh",
        "rtos": [
          {
            "code": "OD-25",
            "slug": "od-25",
            "name": "Nayagarh RTO"
          }
        ],
        "slug": "nayagarh"
      },
      {
        "name": "Nuapada",
        "rtos": [
          {
            "code": "OD-26",
            "slug": "od-26",
            "name": "Nuapada RTO"
          }
        ],
        "slug": "nuapada"
      },
      {
        "name": "Boudh",
        "rtos": [
          {
            "code": "OD-27",
            "slug": "od-27",
            "name": "Boudh RTO"
          }
        ],
        "slug": "boudh"
      },
      {
        "name": "Deogarh",
        "rtos": [
          {
            "code": "OD-28",
            "slug": "od-28",
            "name": "Deogarh RTO"
          }
        ],
        "slug": "deogarh"
      },
      {
        "name": "Malkangiri",
        "rtos": [
          {
            "code": "OD-29",
            "slug": "od-29",
            "name": "Malkangiri RTO"
          }
        ],
        "slug": "malkangiri"
      },
      {
        "name": "Gajapati",
        "rtos": [
          {
            "code": "OD-30",
            "slug": "od-30",
            "name": "Paralakhemundi (Gajapati) RTO"
          }
        ],
        "slug": "gajapati"
      }
    ],
    "slug": "odisha"
  },
  {
    "name": "Punjab",
    "code": "PB",
    "capital": "Chandigarh",
    "type": "state",
    "cities": [
      {
        "name": "Amritsar",
        "rtos": [
          {
            "code": "PB-02",
            "slug": "pb-02",
            "name": "Amritsar Urban DTO"
          },
          {
            "code": "PB-14",
            "slug": "pb-14",
            "name": "Ajnala SDM"
          },
          {
            "code": "PB-17",
            "slug": "pb-17",
            "name": "Baba Bakala SDM"
          },
          {
            "code": "PB-81",
            "slug": "pb-81",
            "name": "Majitha SDM"
          },
          {
            "code": "PB-92",
            "slug": "pb-92",
            "name": "Amritsar Rural DTO"
          }
        ],
        "slug": "amritsar"
      },
      {
        "name": "Bathinda",
        "rtos": [
          {
            "code": "PB-03",
            "slug": "pb-03",
            "name": "Bathinda DTO"
          },
          {
            "code": "PB-40",
            "slug": "pb-40",
            "name": "Rampura Phul SDM"
          },
          {
            "code": "PB-45",
            "slug": "pb-45",
            "name": "Talwandi Sabo SDM"
          },
          {
            "code": "PB-80",
            "slug": "pb-80",
            "name": "Maur SDM"
          }
        ],
        "slug": "bathinda"
      },
      {
        "name": "Faridkot",
        "rtos": [
          {
            "code": "PB-04",
            "slug": "pb-04",
            "name": "Faridkot DTO"
          },
          {
            "code": "PB-51",
            "slug": "pb-51",
            "name": "Jaitu SDM"
          },
          {
            "code": "PB-79",
            "slug": "pb-79",
            "name": "Kotkapura SDM"
          }
        ],
        "slug": "faridkot"
      },
      {
        "name": "Ferozepur",
        "rtos": [
          {
            "code": "PB-05",
            "slug": "pb-05",
            "name": "Ferozepur DTO"
          },
          {
            "code": "PB-47",
            "slug": "pb-47",
            "name": "Zira SDM"
          },
          {
            "code": "PB-77",
            "slug": "pb-77",
            "name": "Guru Har Sahai SDM"
          }
        ],
        "slug": "ferozepur"
      },
      {
        "name": "Gurdaspur",
        "rtos": [
          {
            "code": "PB-06",
            "slug": "pb-06",
            "name": "Gurdaspur DTO"
          },
          {
            "code": "PB-18",
            "slug": "pb-18",
            "name": "Batala SDM"
          },
          {
            "code": "PB-58",
            "slug": "pb-58",
            "name": "Dera Baba Nanak SDM"
          },
          {
            "code": "PB-82",
            "slug": "pb-82",
            "name": "Dinanagar SDM"
          },
          {
            "code": "PB-83",
            "slug": "pb-83",
            "name": "Kalanaur SDM"
          }
        ],
        "slug": "gurdaspur"
      },
      {
        "name": "Hoshiarpur",
        "rtos": [
          {
            "code": "PB-07",
            "slug": "pb-07",
            "name": "Hoshiarpur DTO"
          },
          {
            "code": "PB-21",
            "slug": "pb-21",
            "name": "Dasuya SDM"
          },
          {
            "code": "PB-24",
            "slug": "pb-24",
            "name": "Garhshankar SDM"
          },
          {
            "code": "PB-54",
            "slug": "pb-54",
            "name": "Mukerian SDM"
          }
        ],
        "slug": "hoshiarpur"
      },
      {
        "name": "Jalandhar",
        "rtos": [
          {
            "code": "PB-08",
            "slug": "pb-08",
            "name": "Jalandhar Central DTO"
          },
          {
            "code": "PB-33",
            "slug": "pb-33",
            "name": "Nakodar SDM"
          },
          {
            "code": "PB-37",
            "slug": "pb-37",
            "name": "Phillaur SDM"
          },
          {
            "code": "PB-62",
            "slug": "pb-62",
            "name": "Jalandhar Rural DTO"
          },
          {
            "code": "PB-67",
            "slug": "pb-67",
            "name": "Shahkot SDM"
          }
        ],
        "slug": "jalandhar"
      },
      {
        "name": "Kapurthala",
        "rtos": [
          {
            "code": "PB-09",
            "slug": "pb-09",
            "name": "Kapurthala DTO"
          },
          {
            "code": "PB-36",
            "slug": "pb-36",
            "name": "Phagwara SDM"
          },
          {
            "code": "PB-41",
            "slug": "pb-41",
            "name": "Sultanpur Lodhi SDM"
          },
          {
            "code": "PB-57",
            "slug": "pb-57",
            "name": "Bholath SDM"
          }
        ],
        "slug": "kapurthala"
      },
      {
        "name": "Ludhiana",
        "rtos": [
          {
            "code": "PB-10",
            "slug": "pb-10",
            "name": "Ludhiana Central DTO"
          },
          {
            "code": "PB-25",
            "slug": "pb-25",
            "name": "Jagraon SDM"
          },
          {
            "code": "PB-26",
            "slug": "pb-26",
            "name": "Khanna SDM"
          },
          {
            "code": "PB-43",
            "slug": "pb-43",
            "name": "Samrala SDM"
          },
          {
            "code": "PB-55",
            "slug": "pb-55",
            "name": "Payal SDM"
          },
          {
            "code": "PB-56",
            "slug": "pb-56",
            "name": "Raikot SDM"
          },
          {
            "code": "PB-91",
            "slug": "pb-91",
            "name": "Ludhiana West DTO"
          }
        ],
        "slug": "ludhiana"
      },
      {
        "name": "Patiala",
        "rtos": [
          {
            "code": "PB-11",
            "slug": "pb-11",
            "name": "Patiala DTO"
          },
          {
            "code": "PB-34",
            "slug": "pb-34",
            "name": "Nabha SDM"
          },
          {
            "code": "PB-39",
            "slug": "pb-39",
            "name": "Rajpura SDM"
          },
          {
            "code": "PB-42",
            "slug": "pb-42",
            "name": "Samana SDM"
          },
          {
            "code": "PB-72",
            "slug": "pb-72",
            "name": "Patran SDM"
          },
          {
            "code": "PB-88",
            "slug": "pb-88",
            "name": "Dudhan Sadhan SDM"
          }
        ],
        "slug": "patiala"
      },
      {
        "name": "Rupnagar",
        "rtos": [
          {
            "code": "PB-12",
            "slug": "pb-12",
            "name": "Rupnagar (Ropar) DTO"
          },
          {
            "code": "PB-16",
            "slug": "pb-16",
            "name": "Anandpur Sahib SDM"
          },
          {
            "code": "PB-71",
            "slug": "pb-71",
            "name": "Chamkaur Sahib SDM"
          },
          {
            "code": "PB-85",
            "slug": "pb-85",
            "name": "Morinda SDM"
          }
        ],
        "slug": "rupnagar"
      },
      {
        "name": "Sangrur",
        "rtos": [
          {
            "code": "PB-13",
            "slug": "pb-13",
            "name": "Sangrur DTO"
          },
          {
            "code": "PB-44",
            "slug": "pb-44",
            "name": "Sunam SDM"
          },
          {
            "code": "PB-59",
            "slug": "pb-59",
            "name": "Dhuri SDM"
          },
          {
            "code": "PB-63",
            "slug": "pb-63",
            "name": "Moonak SDM"
          },
          {
            "code": "PB-75",
            "slug": "pb-75",
            "name": "Lehragaga SDM"
          },
          {
            "code": "PB-87",
            "slug": "pb-87",
            "name": "Dirba SDM"
          },
          {
            "code": "PB-89",
            "slug": "pb-89",
            "name": "Bhawanigarh SDM"
          }
        ],
        "slug": "sangrur"
      },
      {
        "name": "Barnala",
        "rtos": [
          {
            "code": "PB-19",
            "slug": "pb-19",
            "name": "Barnala DTO"
          },
          {
            "code": "PB-73",
            "slug": "pb-73",
            "name": "Tapa Mandi SDM"
          }
        ],
        "slug": "barnala"
      },
      {
        "name": "Shaheed Bhagat Singh Nagar",
        "rtos": [
          {
            "code": "PB-20",
            "slug": "pb-20",
            "name": "Balachaur SDM"
          },
          {
            "code": "PB-32",
            "slug": "pb-32",
            "name": "Nawanshahr DTO"
          },
          {
            "code": "PB-78",
            "slug": "pb-78",
            "name": "Banga SDM"
          }
        ],
        "slug": "shaheed-bhagat-singh-nagar"
      },
      {
        "name": "Fazilka",
        "rtos": [
          {
            "code": "PB-15",
            "slug": "pb-15",
            "name": "Abohar Commercial SDM"
          },
          {
            "code": "PB-22",
            "slug": "pb-22",
            "name": "Fazilka DTO"
          },
          {
            "code": "PB-61",
            "slug": "pb-61",
            "name": "Jalalabad SDM"
          }
        ],
        "slug": "fazilka"
      },
      {
        "name": "Fatehgarh Sahib",
        "rtos": [
          {
            "code": "PB-23",
            "slug": "pb-23",
            "name": "Fatehgarh Sahib DTO"
          },
          {
            "code": "PB-48",
            "slug": "pb-48",
            "name": "Amloh SDM"
          },
          {
            "code": "PB-49",
            "slug": "pb-49",
            "name": "Khamano SDM"
          }
        ],
        "slug": "fatehgarh-sahib"
      },
      {
        "name": "Malerkotla",
        "rtos": [
          {
            "code": "PB-28",
            "slug": "pb-28",
            "name": "Malerkotla DTO"
          },
          {
            "code": "PB-76",
            "slug": "pb-76",
            "name": "Ahmedgarh SDM"
          }
        ],
        "slug": "malerkotla"
      },
      {
        "name": "Moga",
        "rtos": [
          {
            "code": "PB-29",
            "slug": "pb-29",
            "name": "Moga DTO"
          },
          {
            "code": "PB-66",
            "slug": "pb-66",
            "name": "Nihal Singh Wala SDM"
          },
          {
            "code": "PB-68",
            "slug": "pb-68",
            "name": "Dharamkot SDM"
          },
          {
            "code": "PB-69",
            "slug": "pb-69",
            "name": "Baghapurana SDM"
          }
        ],
        "slug": "moga"
      },
      {
        "name": "Muktsar",
        "rtos": [
          {
            "code": "PB-30",
            "slug": "pb-30",
            "name": "Sri Muktsar Sahib DTO"
          },
          {
            "code": "PB-53",
            "slug": "pb-53",
            "name": "Malout SDM"
          },
          {
            "code": "PB-60",
            "slug": "pb-60",
            "name": "Gidderbaha SDM"
          }
        ],
        "slug": "muktsar"
      },
      {
        "name": "Mansa",
        "rtos": [
          {
            "code": "PB-31",
            "slug": "pb-31",
            "name": "Mansa DTO"
          },
          {
            "code": "PB-50",
            "slug": "pb-50",
            "name": "Budhlada SDM"
          }
        ],
        "slug": "mansa"
      },
      {
        "name": "Pathankot",
        "rtos": [
          {
            "code": "PB-35",
            "slug": "pb-35",
            "name": "Pathankot DTO"
          }
        ],
        "slug": "pathankot"
      },
      {
        "name": "Tarn Taran",
        "rtos": [
          {
            "code": "PB-38",
            "slug": "pb-38",
            "name": "Patti SDM"
          },
          {
            "code": "PB-46",
            "slug": "pb-46",
            "name": "Tarn Taran DTO"
          },
          {
            "code": "PB-84",
            "slug": "pb-84",
            "name": "Bhikhiwind SDM"
          }
        ],
        "slug": "tarn-taran"
      },
      {
        "name": "SAS Nagar",
        "rtos": [
          {
            "code": "PB-27",
            "slug": "pb-27",
            "name": "Kharar SDM"
          },
          {
            "code": "PB-52",
            "slug": "pb-52",
            "name": "Dera Bassi SDM"
          },
          {
            "code": "PB-64",
            "slug": "pb-64",
            "name": "SAS Nagar (Mohali) DTO"
          },
          {
            "code": "PB-65",
            "slug": "pb-65",
            "name": "Mohali Commercial RTA"
          }
        ],
        "slug": "sas-nagar"
      }
    ],
    "slug": "punjab"
  },
  {
    "name": "Rajasthan",
    "code": "RJ",
    "capital": "Jaipur",
    "type": "state",
    "cities": [
      {
        "name": "Ajmer",
        "rtos": [
          {
            "code": "RJ-01",
            "slug": "rj-01",
            "name": "Ajmer Central RTO"
          },
          {
            "code": "RJ-36",
            "slug": "rj-36",
            "name": "Beawar RTO"
          },
          {
            "code": "RJ-42",
            "slug": "rj-42",
            "name": "Kishangarh Marble Hub RTO"
          },
          {
            "code": "RJ-48",
            "slug": "rj-48",
            "name": "Kekri DTO"
          }
        ],
        "slug": "ajmer"
      },
      {
        "name": "Alwar",
        "rtos": [
          {
            "code": "RJ-02",
            "slug": "rj-02",
            "name": "Alwar DTO"
          },
          {
            "code": "RJ-32",
            "slug": "rj-32",
            "name": "Kotputli RTO"
          },
          {
            "code": "RJ-40",
            "slug": "rj-40",
            "name": "Bhiwadi Industrial Hub DTO"
          }
        ],
        "slug": "alwar"
      },
      {
        "name": "Banswara",
        "rtos": [
          {
            "code": "RJ-03",
            "slug": "rj-03",
            "name": "Banswara DTO"
          }
        ],
        "slug": "banswara"
      },
      {
        "name": "Barmer",
        "rtos": [
          {
            "code": "RJ-04",
            "slug": "rj-04",
            "name": "Barmer DTO"
          },
          {
            "code": "RJ-39",
            "slug": "rj-39",
            "name": "Balotra Refinery Hub DTO"
          }
        ],
        "slug": "barmer"
      },
      {
        "name": "Bharatpur",
        "rtos": [
          {
            "code": "RJ-05",
            "slug": "rj-05",
            "name": "Bharatpur RTO"
          }
        ],
        "slug": "bharatpur"
      },
      {
        "name": "Bhilwara",
        "rtos": [
          {
            "code": "RJ-06",
            "slug": "rj-06",
            "name": "Bhilwara Textile Hub RTO"
          },
          {
            "code": "RJ-51",
            "slug": "rj-51",
            "name": "Shahpura (Bhilwara) DTO"
          }
        ],
        "slug": "bhilwara"
      },
      {
        "name": "Bikaner",
        "rtos": [
          {
            "code": "RJ-07",
            "slug": "rj-07",
            "name": "Bikaner RTO"
          },
          {
            "code": "RJ-50",
            "slug": "rj-50",
            "name": "Nokha DTO"
          }
        ],
        "slug": "bikaner"
      },
      {
        "name": "Bundi",
        "rtos": [
          {
            "code": "RJ-08",
            "slug": "rj-08",
            "name": "Bundi DTO"
          }
        ],
        "slug": "bundi"
      },
      {
        "name": "Chittorgarh",
        "rtos": [
          {
            "code": "RJ-09",
            "slug": "rj-09",
            "name": "Chittorgarh Cement Hub RTO"
          }
        ],
        "slug": "chittorgarh"
      },
      {
        "name": "Churu",
        "rtos": [
          {
            "code": "RJ-10",
            "slug": "rj-10",
            "name": "Churu DTO"
          },
          {
            "code": "RJ-44",
            "slug": "rj-44",
            "name": "Sujangarh DTO"
          }
        ],
        "slug": "churu"
      },
      {
        "name": "Dholpur",
        "rtos": [
          {
            "code": "RJ-11",
            "slug": "rj-11",
            "name": "Dholpur DTO"
          }
        ],
        "slug": "dholpur"
      },
      {
        "name": "Dungarpur",
        "rtos": [
          {
            "code": "RJ-12",
            "slug": "rj-12",
            "name": "Dungarpur DTO"
          }
        ],
        "slug": "dungarpur"
      },
      {
        "name": "Sri Ganganagar",
        "rtos": [
          {
            "code": "RJ-13",
            "slug": "rj-13",
            "name": "Sri Ganganagar DTO"
          },
          {
            "code": "RJ-56",
            "slug": "rj-56",
            "name": "Sadulshahar DTO"
          },
          {
            "code": "RJ-58",
            "slug": "rj-58",
            "name": "Anupgarh DTO"
          }
        ],
        "slug": "sri-ganganagar"
      },
      {
        "name": "Jaipur",
        "rtos": [
          {
            "code": "RJ-14",
            "slug": "rj-14",
            "name": "Jaipur South (Jhalana) RTO"
          },
          {
            "code": "RJ-41",
            "slug": "rj-41",
            "name": "Chomu DTO"
          },
          {
            "code": "RJ-45",
            "slug": "rj-45",
            "name": "Jaipur North (Vidyadhar Nagar) RTO"
          },
          {
            "code": "RJ-47",
            "slug": "rj-47",
            "name": "Dudu DTO"
          },
          {
            "code": "RJ-52",
            "slug": "rj-52",
            "name": "Shahpura (Jaipur) DTO"
          }
        ],
        "slug": "jaipur"
      },
      {
        "name": "Jaisalmer",
        "rtos": [
          {
            "code": "RJ-15",
            "slug": "rj-15",
            "name": "Jaisalmer DTO"
          },
          {
            "code": "RJ-55",
            "slug": "rj-55",
            "name": "Pokhran DTO"
          }
        ],
        "slug": "jaisalmer"
      },
      {
        "name": "Jalore",
        "rtos": [
          {
            "code": "RJ-16",
            "slug": "rj-16",
            "name": "Jalore DTO"
          },
          {
            "code": "RJ-46",
            "slug": "rj-46",
            "name": "Bhinmal DTO"
          }
        ],
        "slug": "jalore"
      },
      {
        "name": "Jhalawar",
        "rtos": [
          {
            "code": "RJ-17",
            "slug": "rj-17",
            "name": "Jhalawar DTO"
          },
          {
            "code": "RJ-33",
            "slug": "rj-33",
            "name": "Ramganj Mandi DTO"
          }
        ],
        "slug": "jhalawar"
      },
      {
        "name": "Jhunjhunu",
        "rtos": [
          {
            "code": "RJ-18",
            "slug": "rj-18",
            "name": "Jhunjhunu DTO"
          }
        ],
        "slug": "jhunjhunu"
      },
      {
        "name": "Jodhpur",
        "rtos": [
          {
            "code": "RJ-19",
            "slug": "rj-19",
            "name": "Jodhpur RTO"
          },
          {
            "code": "RJ-43",
            "slug": "rj-43",
            "name": "Phalodi DTO"
          },
          {
            "code": "RJ-54",
            "slug": "rj-54",
            "name": "Pipar City DTO"
          }
        ],
        "slug": "jodhpur"
      },
      {
        "name": "Kota",
        "rtos": [
          {
            "code": "RJ-20",
            "slug": "rj-20",
            "name": "Kota RTO"
          }
        ],
        "slug": "kota"
      },
      {
        "name": "Nagaur",
        "rtos": [
          {
            "code": "RJ-21",
            "slug": "rj-21",
            "name": "Nagaur DTO"
          },
          {
            "code": "RJ-37",
            "slug": "rj-37",
            "name": "Didwana DTO"
          }
        ],
        "slug": "nagaur"
      },
      {
        "name": "Pali",
        "rtos": [
          {
            "code": "RJ-22",
            "slug": "rj-22",
            "name": "Pali RTO"
          },
          {
            "code": "RJ-57",
            "slug": "rj-57",
            "name": "Sumerpur DTO"
          }
        ],
        "slug": "pali"
      },
      {
        "name": "Sikar",
        "rtos": [
          {
            "code": "RJ-23",
            "slug": "rj-23",
            "name": "Sikar RTO"
          }
        ],
        "slug": "sikar"
      },
      {
        "name": "Sirohi",
        "rtos": [
          {
            "code": "RJ-24",
            "slug": "rj-24",
            "name": "Sirohi DTO"
          },
          {
            "code": "RJ-38",
            "slug": "rj-38",
            "name": "Abu Road DTO"
          }
        ],
        "slug": "sirohi"
      },
      {
        "name": "Sawai Madhopur",
        "rtos": [
          {
            "code": "RJ-25",
            "slug": "rj-25",
            "name": "Sawai Madhopur DTO"
          }
        ],
        "slug": "sawai-madhopur"
      },
      {
        "name": "Tonk",
        "rtos": [
          {
            "code": "RJ-26",
            "slug": "rj-26",
            "name": "Tonk DTO"
          }
        ],
        "slug": "tonk"
      },
      {
        "name": "Udaipur",
        "rtos": [
          {
            "code": "RJ-27",
            "slug": "rj-27",
            "name": "Udaipur Mineral Hub RTO"
          },
          {
            "code": "RJ-53",
            "slug": "rj-53",
            "name": "Salumbar DTO"
          }
        ],
        "slug": "udaipur"
      },
      {
        "name": "Baran",
        "rtos": [
          {
            "code": "RJ-28",
            "slug": "rj-28",
            "name": "Baran DTO"
          }
        ],
        "slug": "baran"
      },
      {
        "name": "Dausa",
        "rtos": [
          {
            "code": "RJ-29",
            "slug": "rj-29",
            "name": "Dausa DTO"
          }
        ],
        "slug": "dausa"
      },
      {
        "name": "Rajsamand",
        "rtos": [
          {
            "code": "RJ-30",
            "slug": "rj-30",
            "name": "Rajsamand Marble Hub DTO"
          }
        ],
        "slug": "rajsamand"
      },
      {
        "name": "Hanumangarh",
        "rtos": [
          {
            "code": "RJ-31",
            "slug": "rj-31",
            "name": "Hanumangarh DTO"
          },
          {
            "code": "RJ-49",
            "slug": "rj-49",
            "name": "Nohar DTO"
          }
        ],
        "slug": "hanumangarh"
      },
      {
        "name": "Karauli",
        "rtos": [
          {
            "code": "RJ-34",
            "slug": "rj-34",
            "name": "Karauli DTO"
          }
        ],
        "slug": "karauli"
      },
      {
        "name": "Pratapgarh",
        "rtos": [
          {
            "code": "RJ-35",
            "slug": "rj-35",
            "name": "Pratapgarh DTO"
          }
        ],
        "slug": "pratapgarh"
      }
    ],
    "slug": "rajasthan"
  },
  {
    "name": "Sikkim",
    "code": "SK",
    "capital": "Gangtok",
    "type": "state",
    "cities": [
      {
        "name": "Gangtok",
        "rtos": [
          {
            "code": "SK-01",
            "slug": "sk-01",
            "name": "Gangtok (East Sikkim) RTO"
          }
        ],
        "slug": "gangtok"
      },
      {
        "name": "Gyalshing",
        "rtos": [
          {
            "code": "SK-02",
            "slug": "sk-02",
            "name": "Gyalshing (West Sikkim) RTO"
          }
        ],
        "slug": "gyalshing"
      },
      {
        "name": "Mangan",
        "rtos": [
          {
            "code": "SK-03",
            "slug": "sk-03",
            "name": "Mangan (North Sikkim) RTO"
          }
        ],
        "slug": "mangan"
      },
      {
        "name": "Jorethang",
        "rtos": [
          {
            "code": "SK-04",
            "slug": "sk-04",
            "name": "Jorethang (South Sikkim) RTO"
          }
        ],
        "slug": "jorethang"
      },
      {
        "name": "Namchi",
        "rtos": [
          {
            "code": "SK-05",
            "slug": "sk-05",
            "name": "Namchi RTO"
          }
        ],
        "slug": "namchi"
      },
      {
        "name": "Pakyong",
        "rtos": [
          {
            "code": "SK-06",
            "slug": "sk-06",
            "name": "Pakyong RTO"
          }
        ],
        "slug": "pakyong"
      },
      {
        "name": "Soreng",
        "rtos": [
          {
            "code": "SK-07",
            "slug": "sk-07",
            "name": "Soreng RTO"
          }
        ],
        "slug": "soreng"
      }
    ],
    "slug": "sikkim"
  },
  {
    "name": "Tamil Nadu",
    "code": "TN",
    "capital": "Chennai",
    "type": "state",
    "cities": [
      {
        "name": "Chennai",
        "rtos": [
          {
            "code": "TN-01",
            "slug": "tn-01",
            "name": "Chennai Central (Ayanavaram) RTO"
          },
          {
            "code": "TN-02",
            "slug": "tn-02",
            "name": "Chennai North West (Anna Nagar) RTO"
          },
          {
            "code": "TN-03",
            "slug": "tn-03",
            "name": "Chennai North East (Tondiarpet) RTO"
          },
          {
            "code": "TN-04",
            "slug": "tn-04",
            "name": "Chennai East (Royapuram) RTO"
          },
          {
            "code": "TN-05",
            "slug": "tn-05",
            "name": "Chennai North (Kolathur) RTO"
          },
          {
            "code": "TN-06",
            "slug": "tn-06",
            "name": "Chennai South East (Mandaveli) RTO"
          },
          {
            "code": "TN-07",
            "slug": "tn-07",
            "name": "Chennai South (Thiruvanmiyur) RTO"
          },
          {
            "code": "TN-09",
            "slug": "tn-09",
            "name": "Chennai West (K.K. Nagar) RTO"
          },
          {
            "code": "TN-10",
            "slug": "tn-10",
            "name": "Chennai South West (Virugambakkam) RTO"
          },
          {
            "code": "TN-14",
            "slug": "tn-14",
            "name": "Chennai (Sholinganallur IT Hub) RTO"
          }
        ],
        "slug": "chennai"
      },
      {
        "name": "Chengalpattu",
        "rtos": [
          {
            "code": "TN-11",
            "slug": "tn-11",
            "name": "Tambaram RTO"
          },
          {
            "code": "TN-19",
            "slug": "tn-19",
            "name": "Chengalpattu RTO"
          },
          {
            "code": "TN-22",
            "slug": "tn-22",
            "name": "Meenambakkam RTO"
          }
        ],
        "slug": "chengalpattu"
      },
      {
        "name": "Tiruvallur",
        "rtos": [
          {
            "code": "TN-12",
            "slug": "tn-12",
            "name": "Poonamallee RTO"
          },
          {
            "code": "TN-13",
            "slug": "tn-13",
            "name": "Ambattur Industrial RTO"
          },
          {
            "code": "TN-18",
            "slug": "tn-18",
            "name": "Red Hills (Transport Nagar) RTO"
          },
          {
            "code": "TN-20",
            "slug": "tn-20",
            "name": "Tiruvallur RTO"
          }
        ],
        "slug": "tiruvallur"
      },
      {
        "name": "Kallakurichi",
        "rtos": [
          {
            "code": "TN-15",
            "slug": "tn-15",
            "name": "Ulundurpet RTO"
          }
        ],
        "slug": "kallakurichi"
      },
      {
        "name": "Villupuram",
        "rtos": [
          {
            "code": "TN-16",
            "slug": "tn-16",
            "name": "Tindivanam RTO"
          },
          {
            "code": "TN-32",
            "slug": "tn-32",
            "name": "Villupuram RTO"
          }
        ],
        "slug": "villupuram"
      },
      {
        "name": "Kanchipuram",
        "rtos": [
          {
            "code": "TN-21",
            "slug": "tn-21",
            "name": "Kanchipuram RTO"
          },
          {
            "code": "TN-85",
            "slug": "tn-85",
            "name": "Kundrathur RTO"
          },
          {
            "code": "TN-87",
            "slug": "tn-87",
            "name": "Sriperumbudur Auto Hub RTO"
          }
        ],
        "slug": "kanchipuram"
      },
      {
        "name": "Vellore",
        "rtos": [
          {
            "code": "TN-23",
            "slug": "tn-23",
            "name": "Vellore RTO"
          },
          {
            "code": "TN-73",
            "slug": "tn-73",
            "name": "Ranipet RTO"
          },
          {
            "code": "TN-83",
            "slug": "tn-83",
            "name": "Vaniyambadi RTO"
          }
        ],
        "slug": "vellore"
      },
      {
        "name": "Krishnagiri",
        "rtos": [
          {
            "code": "TN-24",
            "slug": "tn-24",
            "name": "Krishnagiri RTO"
          },
          {
            "code": "TN-70",
            "slug": "tn-70",
            "name": "Hosur Industrial Hub RTO"
          }
        ],
        "slug": "krishnagiri"
      },
      {
        "name": "Tiruvannamalai",
        "rtos": [
          {
            "code": "TN-25",
            "slug": "tn-25",
            "name": "Tiruvannamalai RTO"
          },
          {
            "code": "TN-97",
            "slug": "tn-97",
            "name": "Arani RTO"
          }
        ],
        "slug": "tiruvannamalai"
      },
      {
        "name": "Namakkal",
        "rtos": [
          {
            "code": "TN-28",
            "slug": "tn-28",
            "name": "Namakkal North (Trucking Hub) RTO"
          },
          {
            "code": "TN-34",
            "slug": "tn-34",
            "name": "Tiruchengode RTO"
          },
          {
            "code": "TN-88",
            "slug": "tn-88",
            "name": "Namakkal South (Fleet Hub) RTO"
          }
        ],
        "slug": "namakkal"
      },
      {
        "name": "Dharmapuri",
        "rtos": [
          {
            "code": "TN-29",
            "slug": "tn-29",
            "name": "Dharmapuri RTO"
          }
        ],
        "slug": "dharmapuri"
      },
      {
        "name": "Salem",
        "rtos": [
          {
            "code": "TN-30",
            "slug": "tn-30",
            "name": "Salem West RTO"
          },
          {
            "code": "TN-52",
            "slug": "tn-52",
            "name": "Sankagiri Trucking Hub RTO"
          },
          {
            "code": "TN-54",
            "slug": "tn-54",
            "name": "Salem East RTO"
          },
          {
            "code": "TN-77",
            "slug": "tn-77",
            "name": "Attur RTO"
          },
          {
            "code": "TN-90",
            "slug": "tn-90",
            "name": "Salem South RTO"
          },
          {
            "code": "TN-93",
            "slug": "tn-93",
            "name": "Mettur Industrial RTO"
          }
        ],
        "slug": "salem"
      },
      {
        "name": "Cuddalore",
        "rtos": [
          {
            "code": "TN-31",
            "slug": "tn-31",
            "name": "Cuddalore RTO"
          },
          {
            "code": "TN-91",
            "slug": "tn-91",
            "name": "Neyveli Mining Hub RTO"
          }
        ],
        "slug": "cuddalore"
      },
      {
        "name": "Erode",
        "rtos": [
          {
            "code": "TN-33",
            "slug": "tn-33",
            "name": "Erode East RTO"
          },
          {
            "code": "TN-36",
            "slug": "tn-36",
            "name": "Gobichettipalayam RTO"
          },
          {
            "code": "TN-56",
            "slug": "tn-56",
            "name": "Perundurai RTO"
          },
          {
            "code": "TN-86",
            "slug": "tn-86",
            "name": "Erode West RTO"
          }
        ],
        "slug": "erode"
      },
      {
        "name": "Coimbatore",
        "rtos": [
          {
            "code": "TN-37",
            "slug": "tn-37",
            "name": "Coimbatore South RTO"
          },
          {
            "code": "TN-38",
            "slug": "tn-38",
            "name": "Coimbatore North RTO"
          },
          {
            "code": "TN-40",
            "slug": "tn-40",
            "name": "Mettupalayam RTO"
          },
          {
            "code": "TN-41",
            "slug": "tn-41",
            "name": "Pollachi RTO"
          },
          {
            "code": "TN-66",
            "slug": "tn-66",
            "name": "Coimbatore Central RTO"
          },
          {
            "code": "TN-99",
            "slug": "tn-99",
            "name": "Coimbatore West RTO"
          }
        ],
        "slug": "coimbatore"
      },
      {
        "name": "Tirupur",
        "rtos": [
          {
            "code": "TN-39",
            "slug": "tn-39",
            "name": "Tirupur North (Garment Hub) RTO"
          },
          {
            "code": "TN-42",
            "slug": "tn-42",
            "name": "Tirupur South RTO"
          },
          {
            "code": "TN-78",
            "slug": "tn-78",
            "name": "Dharapuram RTO"
          }
        ],
        "slug": "tirupur"
      },
      {
        "name": "Nilgiris",
        "rtos": [
          {
            "code": "TN-43",
            "slug": "tn-43",
            "name": "Ooty (Udhagamandalam) RTO"
          }
        ],
        "slug": "nilgiris"
      },
      {
        "name": "Tiruchirappalli",
        "rtos": [
          {
            "code": "TN-45",
            "slug": "tn-45",
            "name": "Tiruchirappalli West RTO"
          },
          {
            "code": "TN-81",
            "slug": "tn-81",
            "name": "Tiruchirappalli East RTO"
          }
        ],
        "slug": "tiruchirappalli"
      },
      {
        "name": "Perambalur",
        "rtos": [
          {
            "code": "TN-46",
            "slug": "tn-46",
            "name": "Perambalur RTO"
          }
        ],
        "slug": "perambalur"
      },
      {
        "name": "Karur",
        "rtos": [
          {
            "code": "TN-47",
            "slug": "tn-47",
            "name": "Karur Textile & Coach Hub RTO"
          }
        ],
        "slug": "karur"
      },
      {
        "name": "Thanjavur",
        "rtos": [
          {
            "code": "TN-49",
            "slug": "tn-49",
            "name": "Thanjavur RTO"
          },
          {
            "code": "TN-68",
            "slug": "tn-68",
            "name": "Kumbakonam RTO"
          }
        ],
        "slug": "thanjavur"
      },
      {
        "name": "Tiruvarur",
        "rtos": [
          {
            "code": "TN-50",
            "slug": "tn-50",
            "name": "Tiruvarur RTO"
          }
        ],
        "slug": "tiruvarur"
      },
      {
        "name": "Nagapattinam",
        "rtos": [
          {
            "code": "TN-51",
            "slug": "tn-51",
            "name": "Nagapattinam Port RTO"
          },
          {
            "code": "TN-82",
            "slug": "tn-82",
            "name": "Mayiladuthurai RTO"
          }
        ],
        "slug": "nagapattinam"
      },
      {
        "name": "Pudukkottai",
        "rtos": [
          {
            "code": "TN-55",
            "slug": "tn-55",
            "name": "Pudukkottai RTO"
          }
        ],
        "slug": "pudukkottai"
      },
      {
        "name": "Dindigul",
        "rtos": [
          {
            "code": "TN-57",
            "slug": "tn-57",
            "name": "Dindigul RTO"
          },
          {
            "code": "TN-94",
            "slug": "tn-94",
            "name": "Palani RTO"
          }
        ],
        "slug": "dindigul"
      },
      {
        "name": "Madurai",
        "rtos": [
          {
            "code": "TN-58",
            "slug": "tn-58",
            "name": "Madurai South RTO"
          },
          {
            "code": "TN-59",
            "slug": "tn-59",
            "name": "Madurai North RTO"
          },
          {
            "code": "TN-64",
            "slug": "tn-64",
            "name": "Madurai Central RTO"
          }
        ],
        "slug": "madurai"
      },
      {
        "name": "Theni",
        "rtos": [
          {
            "code": "TN-60",
            "slug": "tn-60",
            "name": "Theni RTO"
          }
        ],
        "slug": "theni"
      },
      {
        "name": "Ariyalur",
        "rtos": [
          {
            "code": "TN-61",
            "slug": "tn-61",
            "name": "Ariyalur Cement Hub RTO"
          }
        ],
        "slug": "ariyalur"
      },
      {
        "name": "Sivaganga",
        "rtos": [
          {
            "code": "TN-63",
            "slug": "tn-63",
            "name": "Sivaganga (Karaikudi) RTO"
          }
        ],
        "slug": "sivaganga"
      },
      {
        "name": "Ramanathapuram",
        "rtos": [
          {
            "code": "TN-65",
            "slug": "tn-65",
            "name": "Ramanathapuram RTO"
          }
        ],
        "slug": "ramanathapuram"
      },
      {
        "name": "Virudhunagar",
        "rtos": [
          {
            "code": "TN-67",
            "slug": "tn-67",
            "name": "Virudhunagar RTO"
          },
          {
            "code": "TN-84",
            "slug": "tn-84",
            "name": "Srivilliputhur RTO"
          },
          {
            "code": "TN-95",
            "slug": "tn-95",
            "name": "Sivakasi RTO"
          }
        ],
        "slug": "virudhunagar"
      },
      {
        "name": "Thoothukudi",
        "rtos": [
          {
            "code": "TN-69",
            "slug": "tn-69",
            "name": "Thoothukudi (Tuticorin Port) RTO"
          },
          {
            "code": "TN-92",
            "slug": "tn-92",
            "name": "Tiruchendur RTO"
          },
          {
            "code": "TN-96",
            "slug": "tn-96",
            "name": "Kovilpatti RTO"
          }
        ],
        "slug": "thoothukudi"
      },
      {
        "name": "Tirunelveli",
        "rtos": [
          {
            "code": "TN-72",
            "slug": "tn-72",
            "name": "Tirunelveli RTO"
          }
        ],
        "slug": "tirunelveli"
      },
      {
        "name": "Kanniyakumari",
        "rtos": [
          {
            "code": "TN-74",
            "slug": "tn-74",
            "name": "Nagercoil RTO"
          },
          {
            "code": "TN-75",
            "slug": "tn-75",
            "name": "Marthandam RTO"
          }
        ],
        "slug": "kanniyakumari"
      },
      {
        "name": "Tenkasi",
        "rtos": [
          {
            "code": "TN-76",
            "slug": "tn-76",
            "name": "Tenkasi RTO"
          },
          {
            "code": "TN-79",
            "slug": "tn-79",
            "name": "Sankarankovil RTO"
          }
        ],
        "slug": "tenkasi"
      }
    ],
    "slug": "tamil-nadu"
  },
  {
    "name": "Telangana",
    "code": "TS",
    "capital": "Hyderabad",
    "type": "state",
    "cities": [
      {
        "name": "Hyderabad",
        "rtos": [
          {
            "code": "TS-07",
            "slug": "ts-07",
            "name": "Hyderabad Central (Khairatabad) RTO"
          },
          {
            "code": "TS-09",
            "slug": "ts-09",
            "name": "Hyderabad Central RTO"
          },
          {
            "code": "TS-10",
            "slug": "ts-10",
            "name": "Hyderabad North (Secunderabad) RTO"
          },
          {
            "code": "TS-11",
            "slug": "ts-11",
            "name": "Hyderabad East (Malakpet) RTO"
          },
          {
            "code": "TS-12",
            "slug": "ts-12",
            "name": "Hyderabad South (Kishanbagh) RTO"
          },
          {
            "code": "TS-13",
            "slug": "ts-13",
            "name": "Hyderabad West (Tolichowki) RTO"
          },
          {
            "code": "TS-14",
            "slug": "ts-14",
            "name": "Hyderabad (Mehdipatnam) RTO"
          }
        ],
        "slug": "hyderabad"
      },
      {
        "name": "Medchal-Malkajgiri",
        "rtos": [
          {
            "code": "TS-08",
            "slug": "ts-08",
            "name": "Medchal-Malkajgiri RTO"
          }
        ],
        "slug": "medchal-malkajgiri"
      },
      {
        "name": "Adilabad",
        "rtos": [
          {
            "code": "TS-01",
            "slug": "ts-01",
            "name": "Adilabad RTO"
          }
        ],
        "slug": "adilabad"
      },
      {
        "name": "Karimnagar",
        "rtos": [
          {
            "code": "TS-02",
            "slug": "ts-02",
            "name": "Karimnagar Granite Hub RTO"
          }
        ],
        "slug": "karimnagar"
      },
      {
        "name": "Warangal",
        "rtos": [
          {
            "code": "TS-03",
            "slug": "ts-03",
            "name": "Warangal Urban RTO"
          },
          {
            "code": "TS-24",
            "slug": "ts-24",
            "name": "Warangal Rural RTO"
          }
        ],
        "slug": "warangal"
      },
      {
        "name": "Khammam",
        "rtos": [
          {
            "code": "TS-04",
            "slug": "ts-04",
            "name": "Khammam RTO"
          }
        ],
        "slug": "khammam"
      },
      {
        "name": "Nalgonda",
        "rtos": [
          {
            "code": "TS-05",
            "slug": "ts-05",
            "name": "Nalgonda RTO"
          }
        ],
        "slug": "nalgonda"
      },
      {
        "name": "Mahbubnagar",
        "rtos": [
          {
            "code": "TS-06",
            "slug": "ts-06",
            "name": "Mahbubnagar RTO"
          }
        ],
        "slug": "mahbubnagar"
      },
      {
        "name": "Sangareddy",
        "rtos": [
          {
            "code": "TS-15",
            "slug": "ts-15",
            "name": "Sangareddy Industrial RTO"
          }
        ],
        "slug": "sangareddy"
      },
      {
        "name": "Nizamabad",
        "rtos": [
          {
            "code": "TS-16",
            "slug": "ts-16",
            "name": "Nizamabad RTO"
          }
        ],
        "slug": "nizamabad"
      },
      {
        "name": "Kamareddy",
        "rtos": [
          {
            "code": "TS-17",
            "slug": "ts-17",
            "name": "Kamareddy RTO"
          }
        ],
        "slug": "kamareddy"
      },
      {
        "name": "Nirmal",
        "rtos": [
          {
            "code": "TS-18",
            "slug": "ts-18",
            "name": "Nirmal RTO"
          }
        ],
        "slug": "nirmal"
      },
      {
        "name": "Mancherial",
        "rtos": [
          {
            "code": "TS-19",
            "slug": "ts-19",
            "name": "Mancherial Coal Belt RTO"
          }
        ],
        "slug": "mancherial"
      },
      {
        "name": "Asifabad",
        "rtos": [
          {
            "code": "TS-20",
            "slug": "ts-20",
            "name": "Kumuram Bheem Asifabad RTO"
          }
        ],
        "slug": "asifabad"
      },
      {
        "name": "Jagtial",
        "rtos": [
          {
            "code": "TS-21",
            "slug": "ts-21",
            "name": "Jagtial RTO"
          }
        ],
        "slug": "jagtial"
      },
      {
        "name": "Peddapalli",
        "rtos": [
          {
            "code": "TS-22",
            "slug": "ts-22",
            "name": "Peddapalli (Ramagundam) RTO"
          }
        ],
        "slug": "peddapalli"
      },
      {
        "name": "Sircilla",
        "rtos": [
          {
            "code": "TS-23",
            "slug": "ts-23",
            "name": "Rajanna Sircilla RTO"
          }
        ],
        "slug": "sircilla"
      },
      {
        "name": "Bhupalpally",
        "rtos": [
          {
            "code": "TS-25",
            "slug": "ts-25",
            "name": "Jayashankar Bhupalpally Mining RTO"
          }
        ],
        "slug": "bhupalpally"
      },
      {
        "name": "Mahabubabad",
        "rtos": [
          {
            "code": "TS-26",
            "slug": "ts-26",
            "name": "Mahabubabad RTO"
          }
        ],
        "slug": "mahabubabad"
      },
      {
        "name": "Jangaon",
        "rtos": [
          {
            "code": "TS-27",
            "slug": "ts-27",
            "name": "Jangaon RTO"
          }
        ],
        "slug": "jangaon"
      },
      {
        "name": "Kothagudem",
        "rtos": [
          {
            "code": "TS-28",
            "slug": "ts-28",
            "name": "Bhadradri Kothagudem Mining Hub RTO"
          }
        ],
        "slug": "kothagudem"
      },
      {
        "name": "Suryapet",
        "rtos": [
          {
            "code": "TS-29",
            "slug": "ts-29",
            "name": "Suryapet RTO"
          }
        ],
        "slug": "suryapet"
      },
      {
        "name": "Bhuvanagiri",
        "rtos": [
          {
            "code": "TS-30",
            "slug": "ts-30",
            "name": "Yadadri Bhuvanagiri RTO"
          }
        ],
        "slug": "bhuvanagiri"
      },
      {
        "name": "Nagarkurnool",
        "rtos": [
          {
            "code": "TS-31",
            "slug": "ts-31",
            "name": "Nagarkurnool RTO"
          }
        ],
        "slug": "nagarkurnool"
      },
      {
        "name": "Wanaparthy",
        "rtos": [
          {
            "code": "TS-32",
            "slug": "ts-32",
            "name": "Wanaparthy RTO"
          }
        ],
        "slug": "wanaparthy"
      },
      {
        "name": "Gadwal",
        "rtos": [
          {
            "code": "TS-33",
            "slug": "ts-33",
            "name": "Jogulamba Gadwal RTO"
          }
        ],
        "slug": "gadwal"
      },
      {
        "name": "Vikarabad",
        "rtos": [
          {
            "code": "TS-34",
            "slug": "ts-34",
            "name": "Vikarabad RTO"
          }
        ],
        "slug": "vikarabad"
      },
      {
        "name": "Medak",
        "rtos": [
          {
            "code": "TS-35",
            "slug": "ts-35",
            "name": "Medak RTO"
          }
        ],
        "slug": "medak"
      },
      {
        "name": "Siddipet",
        "rtos": [
          {
            "code": "TS-36",
            "slug": "ts-36",
            "name": "Siddipet RTO"
          }
        ],
        "slug": "siddipet"
      }
    ],
    "slug": "telangana"
  },
  {
    "name": "Tripura",
    "code": "TR",
    "capital": "Agartala",
    "type": "state",
    "cities": [
      {
        "name": "Agartala",
        "rtos": [
          {
            "code": "TR-01",
            "slug": "tr-01",
            "name": "Agartala (West Tripura) DTO"
          }
        ],
        "slug": "agartala"
      },
      {
        "name": "Kailashahar",
        "rtos": [
          {
            "code": "TR-02",
            "slug": "tr-02",
            "name": "Kailashahar (Unakoti) DTO"
          }
        ],
        "slug": "kailashahar"
      },
      {
        "name": "Udaipur",
        "rtos": [
          {
            "code": "TR-03",
            "slug": "tr-03",
            "name": "Udaipur (Gomati) DTO"
          }
        ],
        "slug": "udaipur"
      },
      {
        "name": "Ambassa",
        "rtos": [
          {
            "code": "TR-04",
            "slug": "tr-04",
            "name": "Ambassa (Dhalai) DTO"
          }
        ],
        "slug": "ambassa"
      },
      {
        "name": "Dharmanagar",
        "rtos": [
          {
            "code": "TR-05",
            "slug": "tr-05",
            "name": "Dharmanagar (North Tripura) DTO"
          }
        ],
        "slug": "dharmanagar"
      },
      {
        "name": "Khowai",
        "rtos": [
          {
            "code": "TR-06",
            "slug": "tr-06",
            "name": "Khowai DTO"
          }
        ],
        "slug": "khowai"
      },
      {
        "name": "Sepahijala",
        "rtos": [
          {
            "code": "TR-07",
            "slug": "tr-07",
            "name": "Bishramganj (Sepahijala) DTO"
          }
        ],
        "slug": "sepahijala"
      },
      {
        "name": "Belonia",
        "rtos": [
          {
            "code": "TR-08",
            "slug": "tr-08",
            "name": "Belonia (South Tripura) DTO"
          }
        ],
        "slug": "belonia"
      }
    ],
    "slug": "tripura"
  },
  {
    "name": "Uttar Pradesh",
    "code": "UP",
    "capital": "Lucknow",
    "type": "state",
    "cities": [
      {
        "name": "Saharanpur",
        "rtos": [
          {
            "code": "UP-11",
            "slug": "up-11",
            "name": "Saharanpur RTO"
          }
        ],
        "slug": "saharanpur"
      },
      {
        "name": "Muzaffarnagar",
        "rtos": [
          {
            "code": "UP-12",
            "slug": "up-12",
            "name": "Muzaffarnagar ARTO"
          }
        ],
        "slug": "muzaffarnagar"
      },
      {
        "name": "Bulandshahr",
        "rtos": [
          {
            "code": "UP-13",
            "slug": "up-13",
            "name": "Bulandshahr ARTO"
          }
        ],
        "slug": "bulandshahr"
      },
      {
        "name": "Ghaziabad",
        "rtos": [
          {
            "code": "UP-14",
            "slug": "up-14",
            "name": "Ghaziabad RTO"
          }
        ],
        "slug": "ghaziabad"
      },
      {
        "name": "Meerut",
        "rtos": [
          {
            "code": "UP-15",
            "slug": "up-15",
            "name": "Meerut RTO"
          }
        ],
        "slug": "meerut"
      },
      {
        "name": "Noida",
        "rtos": [
          {
            "code": "UP-16",
            "slug": "up-16",
            "name": "Gautam Buddha Nagar (Noida / Greater Noida) ARTO"
          }
        ],
        "slug": "noida"
      },
      {
        "name": "Baghpat",
        "rtos": [
          {
            "code": "UP-17",
            "slug": "up-17",
            "name": "Baghpat ARTO"
          }
        ],
        "slug": "baghpat"
      },
      {
        "name": "Shamli",
        "rtos": [
          {
            "code": "UP-19",
            "slug": "up-19",
            "name": "Shamli ARTO"
          }
        ],
        "slug": "shamli"
      },
      {
        "name": "Bijnor",
        "rtos": [
          {
            "code": "UP-20",
            "slug": "up-20",
            "name": "Bijnor ARTO"
          }
        ],
        "slug": "bijnor"
      },
      {
        "name": "Moradabad",
        "rtos": [
          {
            "code": "UP-21",
            "slug": "up-21",
            "name": "Moradabad RTO"
          }
        ],
        "slug": "moradabad"
      },
      {
        "name": "Rampur",
        "rtos": [
          {
            "code": "UP-22",
            "slug": "up-22",
            "name": "Rampur ARTO"
          }
        ],
        "slug": "rampur"
      },
      {
        "name": "Amroha",
        "rtos": [
          {
            "code": "UP-23",
            "slug": "up-23",
            "name": "Amroha ARTO"
          }
        ],
        "slug": "amroha"
      },
      {
        "name": "Sambhal",
        "rtos": [
          {
            "code": "UP-24",
            "slug": "up-24",
            "name": "Sambhal (Chandausi) ARTO"
          },
          {
            "code": "UP-38",
            "slug": "up-38",
            "name": "Sambhal ARTO"
          }
        ],
        "slug": "sambhal"
      },
      {
        "name": "Bareilly",
        "rtos": [
          {
            "code": "UP-25",
            "slug": "up-25",
            "name": "Bareilly RTO"
          }
        ],
        "slug": "bareilly"
      },
      {
        "name": "Pilibhit",
        "rtos": [
          {
            "code": "UP-26",
            "slug": "up-26",
            "name": "Pilibhit ARTO"
          }
        ],
        "slug": "pilibhit"
      },
      {
        "name": "Shahjahanpur",
        "rtos": [
          {
            "code": "UP-27",
            "slug": "up-27",
            "name": "Shahjahanpur ARTO"
          }
        ],
        "slug": "shahjahanpur"
      },
      {
        "name": "Hardoi",
        "rtos": [
          {
            "code": "UP-30",
            "slug": "up-30",
            "name": "Hardoi ARTO"
          }
        ],
        "slug": "hardoi"
      },
      {
        "name": "Lakhimpur Kheri",
        "rtos": [
          {
            "code": "UP-31",
            "slug": "up-31",
            "name": "Lakhimpur Kheri ARTO"
          }
        ],
        "slug": "lakhimpur-kheri"
      },
      {
        "name": "Lucknow",
        "rtos": [
          {
            "code": "UP-32",
            "slug": "up-32",
            "name": "Lucknow (Transport Nagar) RTO"
          }
        ],
        "slug": "lucknow"
      },
      {
        "name": "Raebareli",
        "rtos": [
          {
            "code": "UP-33",
            "slug": "up-33",
            "name": "Raebareli ARTO"
          }
        ],
        "slug": "raebareli"
      },
      {
        "name": "Sitapur",
        "rtos": [
          {
            "code": "UP-34",
            "slug": "up-34",
            "name": "Sitapur ARTO"
          }
        ],
        "slug": "sitapur"
      },
      {
        "name": "Unnao",
        "rtos": [
          {
            "code": "UP-35",
            "slug": "up-35",
            "name": "Unnao ARTO"
          }
        ],
        "slug": "unnao"
      },
      {
        "name": "Amethi",
        "rtos": [
          {
            "code": "UP-36",
            "slug": "up-36",
            "name": "Amethi (Gauriganj) ARTO"
          }
        ],
        "slug": "amethi"
      },
      {
        "name": "Hapur",
        "rtos": [
          {
            "code": "UP-37",
            "slug": "up-37",
            "name": "Hapur ARTO"
          }
        ],
        "slug": "hapur"
      },
      {
        "name": "Bahraich",
        "rtos": [
          {
            "code": "UP-40",
            "slug": "up-40",
            "name": "Bahraich ARTO"
          }
        ],
        "slug": "bahraich"
      },
      {
        "name": "Barabanki",
        "rtos": [
          {
            "code": "UP-41",
            "slug": "up-41",
            "name": "Barabanki ARTO"
          }
        ],
        "slug": "barabanki"
      },
      {
        "name": "Ayodhya",
        "rtos": [
          {
            "code": "UP-42",
            "slug": "up-42",
            "name": "Ayodhya (Faizabad) RTO"
          }
        ],
        "slug": "ayodhya"
      },
      {
        "name": "Gonda",
        "rtos": [
          {
            "code": "UP-43",
            "slug": "up-43",
            "name": "Gonda RTO"
          }
        ],
        "slug": "gonda"
      },
      {
        "name": "Sultanpur",
        "rtos": [
          {
            "code": "UP-44",
            "slug": "up-44",
            "name": "Sultanpur ARTO"
          }
        ],
        "slug": "sultanpur"
      },
      {
        "name": "Ambedkar Nagar",
        "rtos": [
          {
            "code": "UP-45",
            "slug": "up-45",
            "name": "Ambedkar Nagar (Akbarpur) ARTO"
          }
        ],
        "slug": "ambedkar-nagar"
      },
      {
        "name": "Shravasti",
        "rtos": [
          {
            "code": "UP-46",
            "slug": "up-46",
            "name": "Shravasti (Bhinja) ARTO"
          }
        ],
        "slug": "shravasti"
      },
      {
        "name": "Balrampur",
        "rtos": [
          {
            "code": "UP-47",
            "slug": "up-47",
            "name": "Balrampur ARTO"
          }
        ],
        "slug": "balrampur"
      },
      {
        "name": "Azamgarh",
        "rtos": [
          {
            "code": "UP-50",
            "slug": "up-50",
            "name": "Azamgarh RTO"
          }
        ],
        "slug": "azamgarh"
      },
      {
        "name": "Basti",
        "rtos": [
          {
            "code": "UP-51",
            "slug": "up-51",
            "name": "Basti RTO"
          }
        ],
        "slug": "basti"
      },
      {
        "name": "Deoria",
        "rtos": [
          {
            "code": "UP-52",
            "slug": "up-52",
            "name": "Deoria ARTO"
          }
        ],
        "slug": "deoria"
      },
      {
        "name": "Gorakhpur",
        "rtos": [
          {
            "code": "UP-53",
            "slug": "up-53",
            "name": "Gorakhpur RTO"
          }
        ],
        "slug": "gorakhpur"
      },
      {
        "name": "Mau",
        "rtos": [
          {
            "code": "UP-54",
            "slug": "up-54",
            "name": "Mau ARTO"
          }
        ],
        "slug": "mau"
      },
      {
        "name": "Siddharthnagar",
        "rtos": [
          {
            "code": "UP-55",
            "slug": "up-55",
            "name": "Siddharthnagar (Naugarh) ARTO"
          }
        ],
        "slug": "siddharthnagar"
      },
      {
        "name": "Maharajganj",
        "rtos": [
          {
            "code": "UP-56",
            "slug": "up-56",
            "name": "Maharajganj ARTO"
          }
        ],
        "slug": "maharajganj"
      },
      {
        "name": "Kushinagar",
        "rtos": [
          {
            "code": "UP-57",
            "slug": "up-57",
            "name": "Kushinagar (Padrauna) ARTO"
          }
        ],
        "slug": "kushinagar"
      },
      {
        "name": "Sant Kabir Nagar",
        "rtos": [
          {
            "code": "UP-58",
            "slug": "up-58",
            "name": "Sant Kabir Nagar (Khalilabad) ARTO"
          }
        ],
        "slug": "sant-kabir-nagar"
      },
      {
        "name": "Ballia",
        "rtos": [
          {
            "code": "UP-60",
            "slug": "up-60",
            "name": "Ballia ARTO"
          }
        ],
        "slug": "ballia"
      },
      {
        "name": "Ghazipur",
        "rtos": [
          {
            "code": "UP-61",
            "slug": "up-61",
            "name": "Ghazipur ARTO"
          }
        ],
        "slug": "ghazipur"
      },
      {
        "name": "Jaunpur",
        "rtos": [
          {
            "code": "UP-62",
            "slug": "up-62",
            "name": "Jaunpur ARTO"
          }
        ],
        "slug": "jaunpur"
      },
      {
        "name": "Mirzapur",
        "rtos": [
          {
            "code": "UP-63",
            "slug": "up-63",
            "name": "Mirzapur RTO"
          }
        ],
        "slug": "mirzapur"
      },
      {
        "name": "Sonbhadra",
        "rtos": [
          {
            "code": "UP-64",
            "slug": "up-64",
            "name": "Sonbhadra (Robertsganj Mining Hub) ARTO"
          }
        ],
        "slug": "sonbhadra"
      },
      {
        "name": "Varanasi",
        "rtos": [
          {
            "code": "UP-65",
            "slug": "up-65",
            "name": "Varanasi RTO"
          }
        ],
        "slug": "varanasi"
      },
      {
        "name": "Bhadohi",
        "rtos": [
          {
            "code": "UP-66",
            "slug": "up-66",
            "name": "Bhadohi (Carpet City) ARTO"
          }
        ],
        "slug": "bhadohi"
      },
      {
        "name": "Chandauli",
        "rtos": [
          {
            "code": "UP-67",
            "slug": "up-67",
            "name": "Chandauli ARTO"
          }
        ],
        "slug": "chandauli"
      },
      {
        "name": "Prayagraj",
        "rtos": [
          {
            "code": "UP-70",
            "slug": "up-70",
            "name": "Prayagraj (Allahabad) RTO"
          }
        ],
        "slug": "prayagraj"
      },
      {
        "name": "Fatehpur",
        "rtos": [
          {
            "code": "UP-71",
            "slug": "up-71",
            "name": "Fatehpur ARTO"
          }
        ],
        "slug": "fatehpur"
      },
      {
        "name": "Pratapgarh",
        "rtos": [
          {
            "code": "UP-72",
            "slug": "up-72",
            "name": "Pratapgarh ARTO"
          }
        ],
        "slug": "pratapgarh"
      },
      {
        "name": "Kaushambi",
        "rtos": [
          {
            "code": "UP-73",
            "slug": "up-73",
            "name": "Kaushambi ARTO"
          }
        ],
        "slug": "kaushambi"
      },
      {
        "name": "Kannauj",
        "rtos": [
          {
            "code": "UP-74",
            "slug": "up-74",
            "name": "Kannauj ARTO"
          }
        ],
        "slug": "kannauj"
      },
      {
        "name": "Etawah",
        "rtos": [
          {
            "code": "UP-75",
            "slug": "up-75",
            "name": "Etawah ARTO"
          }
        ],
        "slug": "etawah"
      },
      {
        "name": "Farrukhabad",
        "rtos": [
          {
            "code": "UP-76",
            "slug": "up-76",
            "name": "Farrukhabad (Fatehgarh) ARTO"
          }
        ],
        "slug": "farrukhabad"
      },
      {
        "name": "Kanpur Dehat",
        "rtos": [
          {
            "code": "UP-77",
            "slug": "up-77",
            "name": "Kanpur Dehat (Akbarpur) ARTO"
          }
        ],
        "slug": "kanpur-dehat"
      },
      {
        "name": "Kanpur Nagar",
        "rtos": [
          {
            "code": "UP-78",
            "slug": "up-78",
            "name": "Kanpur Nagar Industrial RTO"
          }
        ],
        "slug": "kanpur-nagar"
      },
      {
        "name": "Auraiya",
        "rtos": [
          {
            "code": "UP-79",
            "slug": "up-79",
            "name": "Auraiya ARTO"
          }
        ],
        "slug": "auraiya"
      },
      {
        "name": "Agra",
        "rtos": [
          {
            "code": "UP-80",
            "slug": "up-80",
            "name": "Agra Central RTO"
          }
        ],
        "slug": "agra"
      },
      {
        "name": "Aligarh",
        "rtos": [
          {
            "code": "UP-81",
            "slug": "up-81",
            "name": "Aligarh RTO"
          }
        ],
        "slug": "aligarh"
      },
      {
        "name": "Etah",
        "rtos": [
          {
            "code": "UP-82",
            "slug": "up-82",
            "name": "Etah ARTO"
          }
        ],
        "slug": "etah"
      },
      {
        "name": "Firozabad",
        "rtos": [
          {
            "code": "UP-83",
            "slug": "up-83",
            "name": "Firozabad Glass Hub ARTO"
          }
        ],
        "slug": "firozabad"
      },
      {
        "name": "Mainpuri",
        "rtos": [
          {
            "code": "UP-84",
            "slug": "up-84",
            "name": "Mainpuri ARTO"
          }
        ],
        "slug": "mainpuri"
      },
      {
        "name": "Mathura",
        "rtos": [
          {
            "code": "UP-85",
            "slug": "up-85",
            "name": "Mathura ARTO"
          }
        ],
        "slug": "mathura"
      },
      {
        "name": "Hathras",
        "rtos": [
          {
            "code": "UP-86",
            "slug": "up-86",
            "name": "Hathras ARTO"
          }
        ],
        "slug": "hathras"
      },
      {
        "name": "Kasganj",
        "rtos": [
          {
            "code": "UP-87",
            "slug": "up-87",
            "name": "Kasganj ARTO"
          }
        ],
        "slug": "kasganj"
      },
      {
        "name": "Banda",
        "rtos": [
          {
            "code": "UP-90",
            "slug": "up-90",
            "name": "Banda RTO"
          }
        ],
        "slug": "banda"
      },
      {
        "name": "Hamirpur",
        "rtos": [
          {
            "code": "UP-91",
            "slug": "up-91",
            "name": "Hamirpur ARTO"
          }
        ],
        "slug": "hamirpur"
      },
      {
        "name": "Jalaun",
        "rtos": [
          {
            "code": "UP-92",
            "slug": "up-92",
            "name": "Jalaun (Orai) ARTO"
          }
        ],
        "slug": "jalaun"
      },
      {
        "name": "Jhansi",
        "rtos": [
          {
            "code": "UP-93",
            "slug": "up-93",
            "name": "Jhansi RTO"
          }
        ],
        "slug": "jhansi"
      },
      {
        "name": "Lalitpur",
        "rtos": [
          {
            "code": "UP-94",
            "slug": "up-94",
            "name": "Lalitpur Mining Hub ARTO"
          }
        ],
        "slug": "lalitpur"
      },
      {
        "name": "Mahoba",
        "rtos": [
          {
            "code": "UP-95",
            "slug": "up-95",
            "name": "Mahoba Granite Hub ARTO"
          }
        ],
        "slug": "mahoba"
      },
      {
        "name": "Chitrakoot",
        "rtos": [
          {
            "code": "UP-96",
            "slug": "up-96",
            "name": "Chitrakoot (Karwi) ARTO"
          }
        ],
        "slug": "chitrakoot"
      }
    ],
    "slug": "uttar-pradesh"
  },
  {
    "name": "Uttarakhand",
    "code": "UK",
    "capital": "Dehradun",
    "type": "state",
    "cities": [
      {
        "name": "Almora",
        "rtos": [
          {
            "code": "UK-01",
            "slug": "uk-01",
            "name": "Almora ARTO"
          }
        ],
        "slug": "almora"
      },
      {
        "name": "Bageshwar",
        "rtos": [
          {
            "code": "UK-02",
            "slug": "uk-02",
            "name": "Bageshwar ARTO"
          }
        ],
        "slug": "bageshwar"
      },
      {
        "name": "Champawat",
        "rtos": [
          {
            "code": "UK-03",
            "slug": "uk-03",
            "name": "Champawat (Tanakpur) ARTO"
          }
        ],
        "slug": "champawat"
      },
      {
        "name": "Nainital",
        "rtos": [
          {
            "code": "UK-04",
            "slug": "uk-04",
            "name": "Haldwani (Nainital) RTO"
          },
          {
            "code": "UK-19",
            "slug": "uk-19",
            "name": "Ramnagar ARTO"
          }
        ],
        "slug": "nainital"
      },
      {
        "name": "Pithoragarh",
        "rtos": [
          {
            "code": "UK-05",
            "slug": "uk-05",
            "name": "Pithoragarh ARTO"
          }
        ],
        "slug": "pithoragarh"
      },
      {
        "name": "Udham Singh Nagar",
        "rtos": [
          {
            "code": "UK-06",
            "slug": "uk-06",
            "name": "Rudrapur (Pantnagar) RTO"
          },
          {
            "code": "UK-18",
            "slug": "uk-18",
            "name": "Kashipur Industrial ARTO"
          }
        ],
        "slug": "udham-singh-nagar"
      },
      {
        "name": "Dehradun",
        "rtos": [
          {
            "code": "UK-07",
            "slug": "uk-07",
            "name": "Dehradun Central RTO"
          },
          {
            "code": "UK-14",
            "slug": "uk-14",
            "name": "Rishikesh ARTO"
          },
          {
            "code": "UK-16",
            "slug": "uk-16",
            "name": "Vikasnagar ARTO"
          }
        ],
        "slug": "dehradun"
      },
      {
        "name": "Haridwar",
        "rtos": [
          {
            "code": "UK-08",
            "slug": "uk-08",
            "name": "Haridwar Industrial RTO"
          },
          {
            "code": "UK-17",
            "slug": "uk-17",
            "name": "Roorkee ARTO"
          }
        ],
        "slug": "haridwar"
      },
      {
        "name": "Tehri Garhwal",
        "rtos": [
          {
            "code": "UK-09",
            "slug": "uk-09",
            "name": "New Tehri ARTO"
          }
        ],
        "slug": "tehri-garhwal"
      },
      {
        "name": "Uttarkashi",
        "rtos": [
          {
            "code": "UK-10",
            "slug": "uk-10",
            "name": "Uttarkashi ARTO"
          }
        ],
        "slug": "uttarkashi"
      },
      {
        "name": "Chamoli",
        "rtos": [
          {
            "code": "UK-11",
            "slug": "uk-11",
            "name": "Gopeshwar (Chamoli) ARTO"
          }
        ],
        "slug": "chamoli"
      },
      {
        "name": "Pauri Garhwal",
        "rtos": [
          {
            "code": "UK-12",
            "slug": "uk-12",
            "name": "Pauri ARTO"
          },
          {
            "code": "UK-15",
            "slug": "uk-15",
            "name": "Kotdwar ARTO"
          }
        ],
        "slug": "pauri-garhwal"
      },
      {
        "name": "Rudraprayag",
        "rtos": [
          {
            "code": "UK-13",
            "slug": "uk-13",
            "name": "Rudraprayag ARTO"
          }
        ],
        "slug": "rudraprayag"
      },
      {
        "name": "Ranikhet",
        "rtos": [
          {
            "code": "UK-20",
            "slug": "uk-20",
            "name": "Ranikhet ARTO"
          }
        ],
        "slug": "ranikhet"
      }
    ],
    "slug": "uttarakhand"
  },
  {
    "name": "West Bengal",
    "code": "WB",
    "capital": "Kolkata",
    "type": "state",
    "cities": [
      {
        "name": "Kolkata",
        "rtos": [
          {
            "code": "WB-01",
            "slug": "wb-01",
            "name": "Kolkata North (Beltala) RTO"
          },
          {
            "code": "WB-02",
            "slug": "wb-02",
            "name": "Kolkata Central (Beltala) RTO"
          },
          {
            "code": "WB-03",
            "slug": "wb-03",
            "name": "Kolkata Central RTO"
          },
          {
            "code": "WB-04",
            "slug": "wb-04",
            "name": "Kolkata South (Beltala) RTO"
          },
          {
            "code": "WB-05",
            "slug": "wb-05",
            "name": "Kolkata Commercial RTO"
          },
          {
            "code": "WB-06",
            "slug": "wb-06",
            "name": "Kolkata South West (Behala) RTO"
          },
          {
            "code": "WB-07",
            "slug": "wb-07",
            "name": "Kolkata East (Salt Lake) RTO"
          },
          {
            "code": "WB-08",
            "slug": "wb-08",
            "name": "Kolkata South East (Kasba) RTO"
          }
        ],
        "slug": "kolkata"
      },
      {
        "name": "Howrah",
        "rtos": [
          {
            "code": "WB-11",
            "slug": "wb-11",
            "name": "Howrah City RTO"
          },
          {
            "code": "WB-12",
            "slug": "wb-12",
            "name": "Howrah Rural (Uluberia) RTO"
          },
          {
            "code": "WB-13",
            "slug": "wb-13",
            "name": "Uluberia Commercial RTO"
          },
          {
            "code": "WB-14",
            "slug": "wb-14",
            "name": "Howrah Commercial RTO"
          }
        ],
        "slug": "howrah"
      },
      {
        "name": "Hooghly",
        "rtos": [
          {
            "code": "WB-15",
            "slug": "wb-15",
            "name": "Hooghly (Chinsurah) RTO"
          },
          {
            "code": "WB-16",
            "slug": "wb-16",
            "name": "Arambagh ARTO"
          },
          {
            "code": "WB-17",
            "slug": "wb-17",
            "name": "Hooghly Commercial RTO"
          },
          {
            "code": "WB-18",
            "slug": "wb-18",
            "name": "Dankuni Logistics Hub ARTO"
          }
        ],
        "slug": "hooghly"
      },
      {
        "name": "South 24 Parganas",
        "rtos": [
          {
            "code": "WB-19",
            "slug": "wb-19",
            "name": "Alipore (South 24 Parganas) RTO"
          },
          {
            "code": "WB-20",
            "slug": "wb-20",
            "name": "Diamond Harbour ARTO"
          },
          {
            "code": "WB-22",
            "slug": "wb-22",
            "name": "Canning ARTO"
          }
        ],
        "slug": "south-24-parganas"
      },
      {
        "name": "North 24 Parganas",
        "rtos": [
          {
            "code": "WB-23",
            "slug": "wb-23",
            "name": "Barrackpore RTO"
          },
          {
            "code": "WB-24",
            "slug": "wb-24",
            "name": "Barasat RTO"
          },
          {
            "code": "WB-25",
            "slug": "wb-25",
            "name": "Basirhat ARTO"
          },
          {
            "code": "WB-26",
            "slug": "wb-26",
            "name": "Bongaon (Petrapole Border) ARTO"
          }
        ],
        "slug": "north-24-parganas"
      },
      {
        "name": "Purba Medinipur",
        "rtos": [
          {
            "code": "WB-29",
            "slug": "wb-29",
            "name": "Tamluk RTO"
          },
          {
            "code": "WB-30",
            "slug": "wb-30",
            "name": "Haldia Port Hub RTO"
          },
          {
            "code": "WB-31",
            "slug": "wb-31",
            "name": "Contai ARTO"
          },
          {
            "code": "WB-32",
            "slug": "wb-32",
            "name": "Egra ARTO"
          }
        ],
        "slug": "purba-medinipur"
      },
      {
        "name": "Paschim Medinipur",
        "rtos": [
          {
            "code": "WB-33",
            "slug": "wb-33",
            "name": "Midnapore RTO"
          },
          {
            "code": "WB-34",
            "slug": "wb-34",
            "name": "Kharagpur Logistics RTO"
          },
          {
            "code": "WB-36",
            "slug": "wb-36",
            "name": "Ghatal ARTO"
          }
        ],
        "slug": "paschim-medinipur"
      },
      {
        "name": "Paschim Bardhaman",
        "rtos": [
          {
            "code": "WB-37",
            "slug": "wb-37",
            "name": "Asansol Industrial Hub RTO"
          },
          {
            "code": "WB-38",
            "slug": "wb-38",
            "name": "Asansol Commercial RTO"
          },
          {
            "code": "WB-39",
            "slug": "wb-39",
            "name": "Durgapur Steel Hub RTO"
          },
          {
            "code": "WB-40",
            "slug": "wb-40",
            "name": "Durgapur Commercial RTO"
          },
          {
            "code": "WB-44",
            "slug": "wb-44",
            "name": "Raniganj Coal Belt ARTO"
          }
        ],
        "slug": "paschim-bardhaman"
      },
      {
        "name": "Purba Bardhaman",
        "rtos": [
          {
            "code": "WB-41",
            "slug": "wb-41",
            "name": "Burdwan (Bardhaman) RTO"
          },
          {
            "code": "WB-42",
            "slug": "wb-42",
            "name": "Kalna ARTO"
          },
          {
            "code": "WB-43",
            "slug": "wb-43",
            "name": "Katwa ARTO"
          }
        ],
        "slug": "purba-bardhaman"
      },
      {
        "name": "Birbhum",
        "rtos": [
          {
            "code": "WB-47",
            "slug": "wb-47",
            "name": "Bolpur (Santiniketan) ARTO"
          },
          {
            "code": "WB-48",
            "slug": "wb-48",
            "name": "Suri (Birbhum) RTO"
          },
          {
            "code": "WB-49",
            "slug": "wb-49",
            "name": "Rampurhat ARTO"
          }
        ],
        "slug": "birbhum"
      },
      {
        "name": "Nadia",
        "rtos": [
          {
            "code": "WB-51",
            "slug": "wb-51",
            "name": "Krishnanagar (Nadia) RTO"
          },
          {
            "code": "WB-52",
            "slug": "wb-52",
            "name": "Ranaghat ARTO"
          },
          {
            "code": "WB-53",
            "slug": "wb-53",
            "name": "Tehatta ARTO"
          },
          {
            "code": "WB-54",
            "slug": "wb-54",
            "name": "Kalyani Industrial ARTO"
          }
        ],
        "slug": "nadia"
      },
      {
        "name": "Murshidabad",
        "rtos": [
          {
            "code": "WB-55",
            "slug": "wb-55",
            "name": "Berhampore (Murshidabad) RTO"
          },
          {
            "code": "WB-56",
            "slug": "wb-56",
            "name": "Jangipur ARTO"
          },
          {
            "code": "WB-57",
            "slug": "wb-57",
            "name": "Kandi ARTO"
          },
          {
            "code": "WB-58",
            "slug": "wb-58",
            "name": "Lalbagh ARTO"
          }
        ],
        "slug": "murshidabad"
      },
      {
        "name": "Uttar Dinajpur",
        "rtos": [
          {
            "code": "WB-59",
            "slug": "wb-59",
            "name": "Raiganj (North Dinajpur) RTO"
          },
          {
            "code": "WB-60",
            "slug": "wb-60",
            "name": "Islampur ARTO"
          }
        ],
        "slug": "uttar-dinajpur"
      },
      {
        "name": "Dakshin Dinajpur",
        "rtos": [
          {
            "code": "WB-61",
            "slug": "wb-61",
            "name": "Balurghat (South Dinajpur) RTO"
          },
          {
            "code": "WB-62",
            "slug": "wb-62",
            "name": "Gangarampur ARTO"
          }
        ],
        "slug": "dakshin-dinajpur"
      },
      {
        "name": "Malda",
        "rtos": [
          {
            "code": "WB-63",
            "slug": "wb-63",
            "name": "English Bazar (Malda) RTO"
          },
          {
            "code": "WB-64",
            "slug": "wb-64",
            "name": "Chanchal ARTO"
          }
        ],
        "slug": "malda"
      },
      {
        "name": "Darjeeling",
        "rtos": [
          {
            "code": "WB-65",
            "slug": "wb-65",
            "name": "Siliguri Commercial RTO"
          },
          {
            "code": "WB-66",
            "slug": "wb-66",
            "name": "Siliguri RTO"
          },
          {
            "code": "WB-74",
            "slug": "wb-74",
            "name": "Darjeeling RTO"
          },
          {
            "code": "WB-76",
            "slug": "wb-76",
            "name": "Kurseong ARTO"
          },
          {
            "code": "WB-78",
            "slug": "wb-78",
            "name": "Mirik ARTO"
          }
        ],
        "slug": "darjeeling"
      },
      {
        "name": "Jalpaiguri",
        "rtos": [
          {
            "code": "WB-67",
            "slug": "wb-67",
            "name": "Jalpaiguri RTO"
          },
          {
            "code": "WB-70",
            "slug": "wb-70",
            "name": "Malbazar ARTO"
          }
        ],
        "slug": "jalpaiguri"
      },
      {
        "name": "Alipurduar",
        "rtos": [
          {
            "code": "WB-68",
            "slug": "wb-68",
            "name": "Alipurduar RTO"
          },
          {
            "code": "WB-69",
            "slug": "wb-69",
            "name": "Alipurduar Commercial RTO"
          }
        ],
        "slug": "alipurduar"
      },
      {
        "name": "Cooch Behar",
        "rtos": [
          {
            "code": "WB-71",
            "slug": "wb-71",
            "name": "Cooch Behar RTO"
          },
          {
            "code": "WB-72",
            "slug": "wb-72",
            "name": "Mathabhanga ARTO"
          },
          {
            "code": "WB-73",
            "slug": "wb-73",
            "name": "Dinhata ARTO"
          }
        ],
        "slug": "cooch-behar"
      },
      {
        "name": "Kalimpong",
        "rtos": [
          {
            "code": "WB-77",
            "slug": "wb-77",
            "name": "Kalimpong RTO"
          },
          {
            "code": "WB-79",
            "slug": "wb-79",
            "name": "Kalimpong Sub-Divisional RTO"
          }
        ],
        "slug": "kalimpong"
      },
      {
        "name": "Bankura",
        "rtos": [
          {
            "code": "WB-85",
            "slug": "wb-85",
            "name": "Bankura RTO"
          },
          {
            "code": "WB-86",
            "slug": "wb-86",
            "name": "Bishnupur ARTO"
          },
          {
            "code": "WB-87",
            "slug": "wb-87",
            "name": "Khatra ARTO"
          }
        ],
        "slug": "bankura"
      },
      {
        "name": "Purulia",
        "rtos": [
          {
            "code": "WB-82",
            "slug": "wb-82",
            "name": "Raghunathpur ARTO"
          },
          {
            "code": "WB-89",
            "slug": "wb-89",
            "name": "Purulia RTO"
          },
          {
            "code": "WB-90",
            "slug": "wb-90",
            "name": "Raghunathpur Commercial ARTO"
          }
        ],
        "slug": "purulia"
      },
      {
        "name": "Jhargram",
        "rtos": [
          {
            "code": "WB-91",
            "slug": "wb-91",
            "name": "Jhargram RTO"
          }
        ],
        "slug": "jhargram"
      }
    ],
    "slug": "west-bengal"
  },
  {
    "name": "Andaman and Nicobar Islands",
    "code": "AN",
    "capital": "Port Blair",
    "type": "union-territory",
    "cities": [
      {
        "name": "Port Blair",
        "rtos": [
          {
            "code": "AN-01",
            "slug": "an-01",
            "name": "Port Blair (South Andaman) RTO"
          }
        ],
        "slug": "port-blair"
      },
      {
        "name": "Car Nicobar",
        "rtos": [
          {
            "code": "AN-02",
            "slug": "an-02",
            "name": "Car Nicobar RTO"
          }
        ],
        "slug": "car-nicobar"
      }
    ],
    "slug": "andaman-and-nicobar-islands"
  },
  {
    "name": "Chandigarh",
    "code": "CH",
    "capital": "Chandigarh",
    "type": "union-territory",
    "cities": [
      {
        "name": "Chandigarh",
        "rtos": [
          {
            "code": "CH-01",
            "slug": "ch-01",
            "name": "Chandigarh Central RLA"
          },
          {
            "code": "CH-02",
            "slug": "ch-02",
            "name": "Chandigarh Commercial STA"
          },
          {
            "code": "CH-03",
            "slug": "ch-03",
            "name": "Chandigarh South RLA"
          },
          {
            "code": "CH-04",
            "slug": "ch-04",
            "name": "Chandigarh East RLA"
          }
        ],
        "slug": "chandigarh"
      }
    ],
    "slug": "chandigarh"
  },
  {
    "name": "Dadra and Nagar Haveli and Daman and Diu",
    "code": "DD",
    "capital": "Daman",
    "type": "union-territory",
    "cities": [
      {
        "name": "Daman",
        "rtos": [
          {
            "code": "DD-01",
            "slug": "dd-01",
            "name": "Daman RTO"
          }
        ],
        "slug": "daman"
      },
      {
        "name": "Diu",
        "rtos": [
          {
            "code": "DD-02",
            "slug": "dd-02",
            "name": "Diu RTO"
          }
        ],
        "slug": "diu"
      },
      {
        "name": "Silvassa",
        "rtos": [
          {
            "code": "DD-03",
            "slug": "dd-03",
            "name": "Silvassa (Dadra & Nagar Haveli) RTO"
          }
        ],
        "slug": "silvassa"
      }
    ],
    "slug": "dadra-and-nagar-haveli-and-daman-and-diu"
  },
  {
    "name": "Delhi",
    "code": "DL",
    "capital": "New Delhi",
    "type": "union-territory",
    "cities": [
      {
        "name": "North Delhi",
        "rtos": [
          {
            "code": "DL-01",
            "slug": "dl-01",
            "name": "Mall Road (North Delhi) RTO"
          },
          {
            "code": "DL-08",
            "slug": "dl-08",
            "name": "Wazirpur (North West Delhi I) RTO"
          },
          {
            "code": "DL-11",
            "slug": "dl-11",
            "name": "Rohini (North West Delhi II) RTO"
          }
        ],
        "slug": "north-delhi"
      },
      {
        "name": "New Delhi",
        "rtos": [
          {
            "code": "DL-02",
            "slug": "dl-02",
            "name": "IP Depot (New Delhi) RTO"
          }
        ],
        "slug": "new-delhi"
      },
      {
        "name": "South Delhi",
        "rtos": [
          {
            "code": "DL-03",
            "slug": "dl-03",
            "name": "Sheikh Sarai (South Delhi) RTO"
          },
          {
            "code": "DL-12",
            "slug": "dl-12",
            "name": "Vasant Vihar (South West Delhi II) RTO"
          }
        ],
        "slug": "south-delhi"
      },
      {
        "name": "West Delhi",
        "rtos": [
          {
            "code": "DL-04",
            "slug": "dl-04",
            "name": "Janakpuri (West Delhi I) RTO"
          },
          {
            "code": "DL-10",
            "slug": "dl-10",
            "name": "Raja Garden (West Delhi II) RTO"
          }
        ],
        "slug": "west-delhi"
      },
      {
        "name": "North East Delhi",
        "rtos": [
          {
            "code": "DL-05",
            "slug": "dl-05",
            "name": "Loni Road (North East Delhi) RTO"
          }
        ],
        "slug": "north-east-delhi"
      },
      {
        "name": "Central Delhi",
        "rtos": [
          {
            "code": "DL-06",
            "slug": "dl-06",
            "name": "Sarai Kale Khan (Central Delhi) RTO"
          }
        ],
        "slug": "central-delhi"
      },
      {
        "name": "East Delhi",
        "rtos": [
          {
            "code": "DL-07",
            "slug": "dl-07",
            "name": "Mayur Vihar (East Delhi) RTO"
          },
          {
            "code": "DL-13",
            "slug": "dl-13",
            "name": "Surajmal Vihar (Shahdara) RTO"
          }
        ],
        "slug": "east-delhi"
      },
      {
        "name": "South West Delhi",
        "rtos": [
          {
            "code": "DL-09",
            "slug": "dl-09",
            "name": "Palam (South West Delhi I) RTO"
          },
          {
            "code": "DL-14",
            "slug": "dl-14",
            "name": "Dwarka (South West Delhi III) RTO"
          }
        ],
        "slug": "south-west-delhi"
      }
    ],
    "slug": "delhi"
  },
  {
    "name": "Jammu and Kashmir",
    "code": "JK",
    "capital": "Srinagar / Jammu",
    "type": "union-territory",
    "cities": [
      {
        "name": "Srinagar",
        "rtos": [
          {
            "code": "JK-01",
            "slug": "jk-01",
            "name": "Srinagar Central RTO"
          }
        ],
        "slug": "srinagar"
      },
      {
        "name": "Jammu",
        "rtos": [
          {
            "code": "JK-02",
            "slug": "jk-02",
            "name": "Jammu Central RTO"
          }
        ],
        "slug": "jammu"
      },
      {
        "name": "Anantnag",
        "rtos": [
          {
            "code": "JK-03",
            "slug": "jk-03",
            "name": "Anantnag ARTO"
          }
        ],
        "slug": "anantnag"
      },
      {
        "name": "Budgam",
        "rtos": [
          {
            "code": "JK-04",
            "slug": "jk-04",
            "name": "Budgam ARTO"
          }
        ],
        "slug": "budgam"
      },
      {
        "name": "Baramulla",
        "rtos": [
          {
            "code": "JK-05",
            "slug": "jk-05",
            "name": "Baramulla ARTO"
          }
        ],
        "slug": "baramulla"
      },
      {
        "name": "Doda",
        "rtos": [
          {
            "code": "JK-06",
            "slug": "jk-06",
            "name": "Doda ARTO"
          }
        ],
        "slug": "doda"
      },
      {
        "name": "Kathua",
        "rtos": [
          {
            "code": "JK-08",
            "slug": "jk-08",
            "name": "Kathua Industrial Gateway RTO"
          }
        ],
        "slug": "kathua"
      },
      {
        "name": "Kupwara",
        "rtos": [
          {
            "code": "JK-09",
            "slug": "jk-09",
            "name": "Kupwara ARTO"
          }
        ],
        "slug": "kupwara"
      },
      {
        "name": "Rajouri",
        "rtos": [
          {
            "code": "JK-11",
            "slug": "jk-11",
            "name": "Rajouri ARTO"
          }
        ],
        "slug": "rajouri"
      },
      {
        "name": "Poonch",
        "rtos": [
          {
            "code": "JK-12",
            "slug": "jk-12",
            "name": "Poonch ARTO"
          }
        ],
        "slug": "poonch"
      },
      {
        "name": "Pulwama",
        "rtos": [
          {
            "code": "JK-13",
            "slug": "jk-13",
            "name": "Pulwama ARTO"
          }
        ],
        "slug": "pulwama"
      },
      {
        "name": "Udhampur",
        "rtos": [
          {
            "code": "JK-14",
            "slug": "jk-14",
            "name": "Udhampur ARTO"
          }
        ],
        "slug": "udhampur"
      },
      {
        "name": "Bandipora",
        "rtos": [
          {
            "code": "JK-15",
            "slug": "jk-15",
            "name": "Bandipora ARTO"
          }
        ],
        "slug": "bandipora"
      },
      {
        "name": "Ganderbal",
        "rtos": [
          {
            "code": "JK-16",
            "slug": "jk-16",
            "name": "Ganderbal ARTO"
          }
        ],
        "slug": "ganderbal"
      },
      {
        "name": "Kulgam",
        "rtos": [
          {
            "code": "JK-17",
            "slug": "jk-17",
            "name": "Kulgam ARTO"
          }
        ],
        "slug": "kulgam"
      },
      {
        "name": "Shopian",
        "rtos": [
          {
            "code": "JK-18",
            "slug": "jk-18",
            "name": "Shopian ARTO"
          }
        ],
        "slug": "shopian"
      },
      {
        "name": "Ramban",
        "rtos": [
          {
            "code": "JK-19",
            "slug": "jk-19",
            "name": "Ramban ARTO"
          }
        ],
        "slug": "ramban"
      },
      {
        "name": "Reasi",
        "rtos": [
          {
            "code": "JK-20",
            "slug": "jk-20",
            "name": "Reasi ARTO"
          }
        ],
        "slug": "reasi"
      },
      {
        "name": "Samba",
        "rtos": [
          {
            "code": "JK-21",
            "slug": "jk-21",
            "name": "Samba Industrial ARTO"
          }
        ],
        "slug": "samba"
      },
      {
        "name": "Kishtwar",
        "rtos": [
          {
            "code": "JK-22",
            "slug": "jk-22",
            "name": "Kishtwar ARTO"
          }
        ],
        "slug": "kishtwar"
      }
    ],
    "slug": "jammu-and-kashmir"
  },
  {
    "name": "Ladakh",
    "code": "LA",
    "capital": "Leh",
    "type": "union-territory",
    "cities": [
      {
        "name": "Leh",
        "rtos": [
          {
            "code": "LA-01",
            "slug": "la-01",
            "name": "Leh Ladakh RTO"
          }
        ],
        "slug": "leh"
      },
      {
        "name": "Kargil",
        "rtos": [
          {
            "code": "LA-02",
            "slug": "la-02",
            "name": "Kargil RTO"
          }
        ],
        "slug": "kargil"
      }
    ],
    "slug": "ladakh"
  },
  {
    "name": "Lakshadweep",
    "code": "LD",
    "capital": "Kavaratti",
    "type": "union-territory",
    "cities": [
      {
        "name": "Kavaratti",
        "rtos": [
          {
            "code": "LD-01",
            "slug": "ld-01",
            "name": "Kavaratti Island RTO"
          }
        ],
        "slug": "kavaratti"
      },
      {
        "name": "Agatti",
        "rtos": [
          {
            "code": "LD-02",
            "slug": "ld-02",
            "name": "Agatti Island RTO"
          }
        ],
        "slug": "agatti"
      },
      {
        "name": "Amini",
        "rtos": [
          {
            "code": "LD-03",
            "slug": "ld-03",
            "name": "Amini Island RTO"
          }
        ],
        "slug": "amini"
      },
      {
        "name": "Andrott",
        "rtos": [
          {
            "code": "LD-04",
            "slug": "ld-04",
            "name": "Andrott Island RTO"
          }
        ],
        "slug": "andrott"
      },
      {
        "name": "Kadmat",
        "rtos": [
          {
            "code": "LD-05",
            "slug": "ld-05",
            "name": "Kadmat Island RTO"
          }
        ],
        "slug": "kadmat"
      },
      {
        "name": "Kiltan",
        "rtos": [
          {
            "code": "LD-06",
            "slug": "ld-06",
            "name": "Kiltan Island RTO"
          }
        ],
        "slug": "kiltan"
      },
      {
        "name": "Chetlat",
        "rtos": [
          {
            "code": "LD-07",
            "slug": "ld-07",
            "name": "Chetlat Island RTO"
          }
        ],
        "slug": "chetlat"
      },
      {
        "name": "Kalpeni",
        "rtos": [
          {
            "code": "LD-08",
            "slug": "ld-08",
            "name": "Kalpeni Island RTO"
          }
        ],
        "slug": "kalpeni"
      },
      {
        "name": "Minicoy",
        "rtos": [
          {
            "code": "LD-09",
            "slug": "ld-09",
            "name": "Minicoy Island RTO"
          }
        ],
        "slug": "minicoy"
      }
    ],
    "slug": "lakshadweep"
  },
  {
    "name": "Puducherry",
    "code": "PY",
    "capital": "Pondicherry",
    "type": "union-territory",
    "cities": [
      {
        "name": "Pondicherry",
        "rtos": [
          {
            "code": "PY-01",
            "slug": "py-01",
            "name": "Pondicherry Central RTO"
          },
          {
            "code": "PY-05",
            "slug": "py-05",
            "name": "Oulgaret RTO"
          }
        ],
        "slug": "pondicherry"
      },
      {
        "name": "Karaikal",
        "rtos": [
          {
            "code": "PY-02",
            "slug": "py-02",
            "name": "Karaikal RTO"
          }
        ],
        "slug": "karaikal"
      },
      {
        "name": "Mahe",
        "rtos": [
          {
            "code": "PY-03",
            "slug": "py-03",
            "name": "Mahe RTO"
          }
        ],
        "slug": "mahe"
      },
      {
        "name": "Yanam",
        "rtos": [
          {
            "code": "PY-04",
            "slug": "py-04",
            "name": "Yanam RTO"
          }
        ],
        "slug": "yanam"
      }
    ],
    "slug": "puducherry"
  }
];

/**
 * Pre-flattened lookup array of all RTO codes in India for high-speed search and static param generation.
 */
export const ALL_INDIA_RTOS: FlattenedRto[] = [
  {
    "code": "AP-02",
    "slug": "ap-02",
    "rtoName": "Anantapur RTO",
    "cityName": "Anantapur",
    "citySlug": "anantapur",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-03",
    "slug": "ap-03",
    "rtoName": "Chittoor RTO",
    "cityName": "Chittoor",
    "citySlug": "chittoor",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-04",
    "slug": "ap-04",
    "rtoName": "Kadapa RTO",
    "cityName": "Kadapa",
    "citySlug": "kadapa",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-05",
    "slug": "ap-05",
    "rtoName": "Kakinada RTO",
    "cityName": "Kakinada",
    "citySlug": "kakinada",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-06",
    "slug": "ap-06",
    "rtoName": "Amalapuram RTO",
    "cityName": "Amalapuram",
    "citySlug": "amalapuram",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-07",
    "slug": "ap-07",
    "rtoName": "Guntur RTO",
    "cityName": "Guntur",
    "citySlug": "guntur",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-08",
    "slug": "ap-08",
    "rtoName": "Guntur Rural RTO",
    "cityName": "Guntur",
    "citySlug": "guntur",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-31",
    "slug": "ap-31",
    "rtoName": "Visakhapatnam Central RTO",
    "cityName": "Visakhapatnam",
    "citySlug": "visakhapatnam",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-32",
    "slug": "ap-32",
    "rtoName": "Madhavadhara RTO",
    "cityName": "Visakhapatnam",
    "citySlug": "visakhapatnam",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-33",
    "slug": "ap-33",
    "rtoName": "Gajuwaka RTO",
    "cityName": "Visakhapatnam",
    "citySlug": "visakhapatnam",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-34",
    "slug": "ap-34",
    "rtoName": "Anakapalli RTO",
    "cityName": "Visakhapatnam",
    "citySlug": "visakhapatnam",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-16",
    "slug": "ap-16",
    "rtoName": "Vijayawada Central RTO",
    "cityName": "Vijayawada",
    "citySlug": "vijayawada",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-17",
    "slug": "ap-17",
    "rtoName": "Vijayawada Rural RTO",
    "cityName": "Vijayawada",
    "citySlug": "vijayawada",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-21",
    "slug": "ap-21",
    "rtoName": "Kurnool RTO",
    "cityName": "Kurnool",
    "citySlug": "kurnool",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-22",
    "slug": "ap-22",
    "rtoName": "Nandyal RTO",
    "cityName": "Nandyal",
    "citySlug": "nandyal",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-26",
    "slug": "ap-26",
    "rtoName": "Nellore RTO",
    "cityName": "Nellore",
    "citySlug": "nellore",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-27",
    "slug": "ap-27",
    "rtoName": "Ongole (Prakasam) RTO",
    "cityName": "Ongole",
    "citySlug": "ongole",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-28",
    "slug": "ap-28",
    "rtoName": "Rajahmundry RTO",
    "cityName": "Rajahmundry",
    "citySlug": "rajahmundry",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-30",
    "slug": "ap-30",
    "rtoName": "Srikakulam RTO",
    "cityName": "Srikakulam",
    "citySlug": "srikakulam",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-35",
    "slug": "ap-35",
    "rtoName": "Vizianagaram RTO",
    "cityName": "Vizianagaram",
    "citySlug": "vizianagaram",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-37",
    "slug": "ap-37",
    "rtoName": "Eluru RTO",
    "cityName": "Eluru",
    "citySlug": "eluru",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-38",
    "slug": "ap-38",
    "rtoName": "Bhimavaram (West Godavari) RTO",
    "cityName": "Bhimavaram",
    "citySlug": "bhimavaram",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AP-39",
    "slug": "ap-39",
    "rtoName": "Tirupati RTO",
    "cityName": "Tirupati",
    "citySlug": "tirupati",
    "stateName": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "stateCode": "AP",
    "isUt": false
  },
  {
    "code": "AR-01",
    "slug": "ar-01",
    "rtoName": "Itanagar State Capital RTO",
    "cityName": "Itanagar",
    "citySlug": "itanagar",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-02",
    "slug": "ar-02",
    "rtoName": "Itanagar Commercial RTO",
    "cityName": "Itanagar",
    "citySlug": "itanagar",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-03",
    "slug": "ar-03",
    "rtoName": "Tawang DTO",
    "cityName": "Tawang",
    "citySlug": "tawang",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-04",
    "slug": "ar-04",
    "rtoName": "Bomdila (West Kameng) DTO",
    "cityName": "Bomdila",
    "citySlug": "bomdila",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-05",
    "slug": "ar-05",
    "rtoName": "Seppa (East Kameng) DTO",
    "cityName": "Seppa",
    "citySlug": "seppa",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-06",
    "slug": "ar-06",
    "rtoName": "Ziro (Lower Subansiri) DTO",
    "cityName": "Ziro",
    "citySlug": "ziro",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-07",
    "slug": "ar-07",
    "rtoName": "Daporijo (Upper Subansiri) DTO",
    "cityName": "Daporijo",
    "citySlug": "daporijo",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-08",
    "slug": "ar-08",
    "rtoName": "Along (West Siang) DTO",
    "cityName": "Along",
    "citySlug": "along",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-09",
    "slug": "ar-09",
    "rtoName": "Pasighat (East Siang) DTO",
    "cityName": "Pasighat",
    "citySlug": "pasighat",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-10",
    "slug": "ar-10",
    "rtoName": "Anini (Dibang Valley) DTO",
    "cityName": "Anini",
    "citySlug": "anini",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-11",
    "slug": "ar-11",
    "rtoName": "Tezu (Lohit) DTO",
    "cityName": "Tezu",
    "citySlug": "tezu",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-12",
    "slug": "ar-12",
    "rtoName": "Changlang DTO",
    "cityName": "Changlang",
    "citySlug": "changlang",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-13",
    "slug": "ar-13",
    "rtoName": "Khonsa (Tirap) DTO",
    "cityName": "Khonsa",
    "citySlug": "khonsa",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-14",
    "slug": "ar-14",
    "rtoName": "Yingkiong (Upper Siang) DTO",
    "cityName": "Yingkiong",
    "citySlug": "yingkiong",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-15",
    "slug": "ar-15",
    "rtoName": "Koloriang (Kurung Kumey) DTO",
    "cityName": "Koloriang",
    "citySlug": "koloriang",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-16",
    "slug": "ar-16",
    "rtoName": "Roing (Lower Dibang Valley) DTO",
    "cityName": "Roing",
    "citySlug": "roing",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-17",
    "slug": "ar-17",
    "rtoName": "Hawai (Anjaw) DTO",
    "cityName": "Hawai",
    "citySlug": "hawai",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-19",
    "slug": "ar-19",
    "rtoName": "Palin (Kra Daadi) DTO",
    "cityName": "Palin",
    "citySlug": "palin",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AR-20",
    "slug": "ar-20",
    "rtoName": "Namsai DTO",
    "cityName": "Namsai",
    "citySlug": "namsai",
    "stateName": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "stateCode": "AR",
    "isUt": false
  },
  {
    "code": "AS-01",
    "slug": "as-01",
    "rtoName": "Guwahati (Kamrup Metro) DTO",
    "cityName": "Guwahati",
    "citySlug": "guwahati",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-24",
    "slug": "as-24",
    "rtoName": "Kamrup Rural DTO",
    "cityName": "Guwahati",
    "citySlug": "guwahati",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-02",
    "slug": "as-02",
    "rtoName": "Nagaon DTO",
    "cityName": "Nagaon",
    "citySlug": "nagaon",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-03",
    "slug": "as-03",
    "rtoName": "Jorhat DTO",
    "cityName": "Jorhat",
    "citySlug": "jorhat",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-04",
    "slug": "as-04",
    "rtoName": "Sivasagar DTO",
    "cityName": "Sivasagar",
    "citySlug": "sivasagar",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-05",
    "slug": "as-05",
    "rtoName": "Golaghat DTO",
    "cityName": "Golaghat",
    "citySlug": "golaghat",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-06",
    "slug": "as-06",
    "rtoName": "Dibrugarh DTO",
    "cityName": "Dibrugarh",
    "citySlug": "dibrugarh",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-07",
    "slug": "as-07",
    "rtoName": "Tinsukia DTO",
    "cityName": "Tinsukia",
    "citySlug": "tinsukia",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-08",
    "slug": "as-08",
    "rtoName": "Haflong (Dima Hasao) DTO",
    "cityName": "Dima Hasao",
    "citySlug": "dima-hasao",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-09",
    "slug": "as-09",
    "rtoName": "Diphu (Karbi Anglong) DTO",
    "cityName": "Karbi Anglong",
    "citySlug": "karbi-anglong",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-10",
    "slug": "as-10",
    "rtoName": "Karimganj DTO",
    "cityName": "Karimganj",
    "citySlug": "karimganj",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-11",
    "slug": "as-11",
    "rtoName": "Silchar (Cachar) DTO",
    "cityName": "Silchar",
    "citySlug": "silchar",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-12",
    "slug": "as-12",
    "rtoName": "Tezpur (Sonitpur) DTO",
    "cityName": "Tezpur",
    "citySlug": "tezpur",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-13",
    "slug": "as-13",
    "rtoName": "Mangaldai (Darrang) DTO",
    "cityName": "Darrang",
    "citySlug": "darrang",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-14",
    "slug": "as-14",
    "rtoName": "Nalbari DTO",
    "cityName": "Nalbari",
    "citySlug": "nalbari",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-15",
    "slug": "as-15",
    "rtoName": "Barpeta DTO",
    "cityName": "Barpeta",
    "citySlug": "barpeta",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-16",
    "slug": "as-16",
    "rtoName": "Kokrajhar DTO",
    "cityName": "Kokrajhar",
    "citySlug": "kokrajhar",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-17",
    "slug": "as-17",
    "rtoName": "Dhubri DTO",
    "cityName": "Dhubri",
    "citySlug": "dhubri",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-18",
    "slug": "as-18",
    "rtoName": "Goalpara DTO",
    "cityName": "Goalpara",
    "citySlug": "goalpara",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-19",
    "slug": "as-19",
    "rtoName": "Bongaigaon DTO",
    "cityName": "Bongaigaon",
    "citySlug": "bongaigaon",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-21",
    "slug": "as-21",
    "rtoName": "Charaideo (Sonari) DTO",
    "cityName": "Charaideo",
    "citySlug": "charaideo",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-22",
    "slug": "as-22",
    "rtoName": "Hojai (Sankardev Nagar) DTO",
    "cityName": "Hojai",
    "citySlug": "hojai",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-26",
    "slug": "as-26",
    "rtoName": "Chirang (Kajalgaon) DTO",
    "cityName": "Chirang",
    "citySlug": "chirang",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-25",
    "slug": "as-25",
    "rtoName": "Morigaon DTO",
    "cityName": "Morigaon",
    "citySlug": "morigaon",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-27",
    "slug": "as-27",
    "rtoName": "Udalguri DTO",
    "cityName": "Udalguri",
    "citySlug": "udalguri",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-28",
    "slug": "as-28",
    "rtoName": "Baksa (Mushalpur) DTO",
    "cityName": "Baksa",
    "citySlug": "baksa",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-29",
    "slug": "as-29",
    "rtoName": "Majuli (Garamur) DTO",
    "cityName": "Majuli",
    "citySlug": "majuli",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-30",
    "slug": "as-30",
    "rtoName": "Biswanath Chariali DTO",
    "cityName": "Biswanath",
    "citySlug": "biswanath",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-31",
    "slug": "as-31",
    "rtoName": "Dhemaji DTO",
    "cityName": "Dhemaji",
    "citySlug": "dhemaji",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-32",
    "slug": "as-32",
    "rtoName": "Hatsingimari DTO",
    "cityName": "South Salmara",
    "citySlug": "south-salmara",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-33",
    "slug": "as-33",
    "rtoName": "Bajali (Pathsala) DTO",
    "cityName": "Bajali",
    "citySlug": "bajali",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "AS-34",
    "slug": "as-34",
    "rtoName": "Tamulpur DTO",
    "cityName": "Tamulpur",
    "citySlug": "tamulpur",
    "stateName": "Assam",
    "stateSlug": "assam",
    "stateCode": "AS",
    "isUt": false
  },
  {
    "code": "BR-01",
    "slug": "br-01",
    "rtoName": "Patna Central DTO",
    "cityName": "Patna",
    "citySlug": "patna",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-02",
    "slug": "br-02",
    "rtoName": "Gaya DTO",
    "cityName": "Gaya",
    "citySlug": "gaya",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-03",
    "slug": "br-03",
    "rtoName": "Ara (Bhojpur) DTO",
    "cityName": "Bhojpur",
    "citySlug": "bhojpur",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-04",
    "slug": "br-04",
    "rtoName": "Chhapra (Saran) DTO",
    "cityName": "Saran",
    "citySlug": "saran",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-05",
    "slug": "br-05",
    "rtoName": "Motihari (East Champaran) DTO",
    "cityName": "Motihari",
    "citySlug": "motihari",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-06",
    "slug": "br-06",
    "rtoName": "Muzaffarpur DTO",
    "cityName": "Muzaffarpur",
    "citySlug": "muzaffarpur",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-07",
    "slug": "br-07",
    "rtoName": "Darbhanga DTO",
    "cityName": "Darbhanga",
    "citySlug": "darbhanga",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-08",
    "slug": "br-08",
    "rtoName": "Munger DTO",
    "cityName": "Munger",
    "citySlug": "munger",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-09",
    "slug": "br-09",
    "rtoName": "Begusarai DTO",
    "cityName": "Begusarai",
    "citySlug": "begusarai",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-10",
    "slug": "br-10",
    "rtoName": "Bhagalpur DTO",
    "cityName": "Bhagalpur",
    "citySlug": "bhagalpur",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-11",
    "slug": "br-11",
    "rtoName": "Purnia DTO",
    "cityName": "Purnia",
    "citySlug": "purnia",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-19",
    "slug": "br-19",
    "rtoName": "Saharsa DTO",
    "cityName": "Saharsa",
    "citySlug": "saharsa",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-21",
    "slug": "br-21",
    "rtoName": "Bihar Sharif (Nalanda) DTO",
    "cityName": "Nalanda",
    "citySlug": "nalanda",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-22",
    "slug": "br-22",
    "rtoName": "Bettiah (West Champaran) DTO",
    "cityName": "Bettiah",
    "citySlug": "bettiah",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-24",
    "slug": "br-24",
    "rtoName": "Dehri on Sone (Rohtas) DTO",
    "cityName": "Dehri",
    "citySlug": "dehri",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-25",
    "slug": "br-25",
    "rtoName": "Jehanabad DTO",
    "cityName": "Jehanabad",
    "citySlug": "jehanabad",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-26",
    "slug": "br-26",
    "rtoName": "Aurangabad DTO",
    "cityName": "Aurangabad",
    "citySlug": "aurangabad",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-27",
    "slug": "br-27",
    "rtoName": "Nawada DTO",
    "cityName": "Nawada",
    "citySlug": "nawada",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-28",
    "slug": "br-28",
    "rtoName": "Gopalganj DTO",
    "cityName": "Gopalganj",
    "citySlug": "gopalganj",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-29",
    "slug": "br-29",
    "rtoName": "Siwan DTO",
    "cityName": "Siwan",
    "citySlug": "siwan",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-30",
    "slug": "br-30",
    "rtoName": "Sitamarhi DTO",
    "cityName": "Sitamarhi",
    "citySlug": "sitamarhi",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-31",
    "slug": "br-31",
    "rtoName": "Hajipur (Vaishali) DTO",
    "cityName": "Vaishali",
    "citySlug": "vaishali",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-32",
    "slug": "br-32",
    "rtoName": "Madhubani DTO",
    "cityName": "Madhubani",
    "citySlug": "madhubani",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-33",
    "slug": "br-33",
    "rtoName": "Samastipur DTO",
    "cityName": "Samastipur",
    "citySlug": "samastipur",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-34",
    "slug": "br-34",
    "rtoName": "Khagaria DTO",
    "cityName": "Khagaria",
    "citySlug": "khagaria",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-37",
    "slug": "br-37",
    "rtoName": "Kishanganj DTO",
    "cityName": "Kishanganj",
    "citySlug": "kishanganj",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-38",
    "slug": "br-38",
    "rtoName": "Araria DTO",
    "cityName": "Araria",
    "citySlug": "araria",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-39",
    "slug": "br-39",
    "rtoName": "Katihar DTO",
    "cityName": "Katihar",
    "citySlug": "katihar",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-43",
    "slug": "br-43",
    "rtoName": "Madhepura DTO",
    "cityName": "Madhepura",
    "citySlug": "madhepura",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-44",
    "slug": "br-44",
    "rtoName": "Buxar DTO",
    "cityName": "Buxar",
    "citySlug": "buxar",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-45",
    "slug": "br-45",
    "rtoName": "Bhabua (Kaimur) DTO",
    "cityName": "Kaimur",
    "citySlug": "kaimur",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-46",
    "slug": "br-46",
    "rtoName": "Jamui DTO",
    "cityName": "Jamui",
    "citySlug": "jamui",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-50",
    "slug": "br-50",
    "rtoName": "Supaul DTO",
    "cityName": "Supaul",
    "citySlug": "supaul",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-51",
    "slug": "br-51",
    "rtoName": "Banka DTO",
    "cityName": "Banka",
    "citySlug": "banka",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-52",
    "slug": "br-52",
    "rtoName": "Sheikhpura DTO",
    "cityName": "Sheikhpura",
    "citySlug": "sheikhpura",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-53",
    "slug": "br-53",
    "rtoName": "Lakhisarai DTO",
    "cityName": "Lakhisarai",
    "citySlug": "lakhisarai",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-55",
    "slug": "br-55",
    "rtoName": "Sheohar DTO",
    "cityName": "Sheohar",
    "citySlug": "sheohar",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-56",
    "slug": "br-56",
    "rtoName": "Arwal DTO",
    "cityName": "Arwal",
    "citySlug": "arwal",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "BR-57",
    "slug": "br-57",
    "rtoName": "Sasaram DTO",
    "cityName": "Sasaram",
    "citySlug": "sasaram",
    "stateName": "Bihar",
    "stateSlug": "bihar",
    "stateCode": "BR",
    "isUt": false
  },
  {
    "code": "CG-04",
    "slug": "cg-04",
    "rtoName": "Raipur RTO",
    "cityName": "Raipur",
    "citySlug": "raipur",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-05",
    "slug": "cg-05",
    "rtoName": "Dhamtari DTO",
    "cityName": "Dhamtari",
    "citySlug": "dhamtari",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-06",
    "slug": "cg-06",
    "rtoName": "Mahasamund DTO",
    "cityName": "Mahasamund",
    "citySlug": "mahasamund",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-07",
    "slug": "cg-07",
    "rtoName": "Durg (Bhilai) RTO",
    "cityName": "Durg",
    "citySlug": "durg",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-08",
    "slug": "cg-08",
    "rtoName": "Rajnandgaon DTO",
    "cityName": "Rajnandgaon",
    "citySlug": "rajnandgaon",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-09",
    "slug": "cg-09",
    "rtoName": "Kabirdham (Kawardha) DTO",
    "cityName": "Kawardha",
    "citySlug": "kawardha",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-10",
    "slug": "cg-10",
    "rtoName": "Bilaspur RTO",
    "cityName": "Bilaspur",
    "citySlug": "bilaspur",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-11",
    "slug": "cg-11",
    "rtoName": "Janjgir-Champa DTO",
    "cityName": "Janjgir-Champa",
    "citySlug": "janjgir-champa",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-12",
    "slug": "cg-12",
    "rtoName": "Korba (Mining Hub) DTO",
    "cityName": "Korba",
    "citySlug": "korba",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-13",
    "slug": "cg-13",
    "rtoName": "Raigarh DTO",
    "cityName": "Raigarh",
    "citySlug": "raigarh",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-14",
    "slug": "cg-14",
    "rtoName": "Jashpur Nagar DTO",
    "cityName": "Jashpur",
    "citySlug": "jashpur",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-15",
    "slug": "cg-15",
    "rtoName": "Ambikapur (Surguja) DTO",
    "cityName": "Surguja",
    "citySlug": "surguja",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-16",
    "slug": "cg-16",
    "rtoName": "Koriya (Baikunthpur) DTO",
    "cityName": "Baikunthpur",
    "citySlug": "baikunthpur",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-17",
    "slug": "cg-17",
    "rtoName": "Jagdalpur (Bastar) RTO",
    "cityName": "Jagdalpur",
    "citySlug": "jagdalpur",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-18",
    "slug": "cg-18",
    "rtoName": "Dantewada DTO",
    "cityName": "Dantewada",
    "citySlug": "dantewada",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-19",
    "slug": "cg-19",
    "rtoName": "Kanker (North Bastar) DTO",
    "cityName": "Kanker",
    "citySlug": "kanker",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-20",
    "slug": "cg-20",
    "rtoName": "Bijapur DTO",
    "cityName": "Bijapur",
    "citySlug": "bijapur",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-21",
    "slug": "cg-21",
    "rtoName": "Narayanpur DTO",
    "cityName": "Narayanpur",
    "citySlug": "narayanpur",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-22",
    "slug": "cg-22",
    "rtoName": "Baloda Bazar DTO",
    "cityName": "Baloda Bazar",
    "citySlug": "baloda-bazar",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-23",
    "slug": "cg-23",
    "rtoName": "Gariaband DTO",
    "cityName": "Gariaband",
    "citySlug": "gariaband",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-24",
    "slug": "cg-24",
    "rtoName": "Balod DTO",
    "cityName": "Balod",
    "citySlug": "balod",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-25",
    "slug": "cg-25",
    "rtoName": "Bemetara DTO",
    "cityName": "Bemetara",
    "citySlug": "bemetara",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-26",
    "slug": "cg-26",
    "rtoName": "Sukma DTO",
    "cityName": "Sukma",
    "citySlug": "sukma",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-27",
    "slug": "cg-27",
    "rtoName": "Kondagaon DTO",
    "cityName": "Kondagaon",
    "citySlug": "kondagaon",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-28",
    "slug": "cg-28",
    "rtoName": "Mungeli DTO",
    "cityName": "Mungeli",
    "citySlug": "mungeli",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-29",
    "slug": "cg-29",
    "rtoName": "Surajpur DTO",
    "cityName": "Surajpur",
    "citySlug": "surajpur",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "CG-30",
    "slug": "cg-30",
    "rtoName": "Balrampur-Ramanujganj DTO",
    "cityName": "Balrampur",
    "citySlug": "balrampur",
    "stateName": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "stateCode": "CG",
    "isUt": false
  },
  {
    "code": "GA-01",
    "slug": "ga-01",
    "rtoName": "Panaji (North Goa) RTO",
    "cityName": "Panaji",
    "citySlug": "panaji",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GA-07",
    "slug": "ga-07",
    "rtoName": "Panaji Central RTO",
    "cityName": "Panaji",
    "citySlug": "panaji",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GA-02",
    "slug": "ga-02",
    "rtoName": "Margao (South Goa) RTO",
    "cityName": "Margao",
    "citySlug": "margao",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GA-08",
    "slug": "ga-08",
    "rtoName": "Margao Commercial RTO",
    "cityName": "Margao",
    "citySlug": "margao",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GA-03",
    "slug": "ga-03",
    "rtoName": "Mapusa (Bardez) RTO",
    "cityName": "Mapusa",
    "citySlug": "mapusa",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GA-04",
    "slug": "ga-04",
    "rtoName": "Bicholim RTO",
    "cityName": "Bicholim",
    "citySlug": "bicholim",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GA-05",
    "slug": "ga-05",
    "rtoName": "Ponda RTO",
    "cityName": "Ponda",
    "citySlug": "ponda",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GA-06",
    "slug": "ga-06",
    "rtoName": "Vasco da Gama (Mormugao) RTO",
    "cityName": "Vasco da Gama",
    "citySlug": "vasco-da-gama",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GA-09",
    "slug": "ga-09",
    "rtoName": "Quepem RTO",
    "cityName": "Quepem",
    "citySlug": "quepem",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GA-10",
    "slug": "ga-10",
    "rtoName": "Canacona RTO",
    "cityName": "Canacona",
    "citySlug": "canacona",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GA-11",
    "slug": "ga-11",
    "rtoName": "Pernem RTO",
    "cityName": "Pernem",
    "citySlug": "pernem",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GA-12",
    "slug": "ga-12",
    "rtoName": "Dharbandora RTO",
    "cityName": "Dharbandora",
    "citySlug": "dharbandora",
    "stateName": "Goa",
    "stateSlug": "goa",
    "stateCode": "GA",
    "isUt": false
  },
  {
    "code": "GJ-01",
    "slug": "gj-01",
    "rtoName": "Ahmedabad West (Subhash Bridge) RTO",
    "cityName": "Ahmedabad",
    "citySlug": "ahmedabad",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-27",
    "slug": "gj-27",
    "rtoName": "Ahmedabad East (Vastral) RTO",
    "cityName": "Ahmedabad",
    "citySlug": "ahmedabad",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-38",
    "slug": "gj-38",
    "rtoName": "Bavla RTO",
    "cityName": "Ahmedabad",
    "citySlug": "ahmedabad",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-02",
    "slug": "gj-02",
    "rtoName": "Mehsana RTO",
    "cityName": "Mehsana",
    "citySlug": "mehsana",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-03",
    "slug": "gj-03",
    "rtoName": "Rajkot RTO",
    "cityName": "Rajkot",
    "citySlug": "rajkot",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-04",
    "slug": "gj-04",
    "rtoName": "Bhavnagar RTO",
    "cityName": "Bhavnagar",
    "citySlug": "bhavnagar",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-05",
    "slug": "gj-05",
    "rtoName": "Surat City RTO",
    "cityName": "Surat",
    "citySlug": "surat",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-28",
    "slug": "gj-28",
    "rtoName": "Surat Rural (Pal) RTO",
    "cityName": "Surat",
    "citySlug": "surat",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-06",
    "slug": "gj-06",
    "rtoName": "Vadodara Central RTO",
    "cityName": "Vadodara",
    "citySlug": "vadodara",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-29",
    "slug": "gj-29",
    "rtoName": "Vadodara Rural (Darjipura) RTO",
    "cityName": "Vadodara",
    "citySlug": "vadodara",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-07",
    "slug": "gj-07",
    "rtoName": "Nadiad (Kheda) RTO",
    "cityName": "Kheda",
    "citySlug": "kheda",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-08",
    "slug": "gj-08",
    "rtoName": "Palanpur (Banaskantha) RTO",
    "cityName": "Banaskantha",
    "citySlug": "banaskantha",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-09",
    "slug": "gj-09",
    "rtoName": "Himmatnagar (Sabarkantha) RTO",
    "cityName": "Sabarkantha",
    "citySlug": "sabarkantha",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-10",
    "slug": "gj-10",
    "rtoName": "Jamnagar RTO",
    "cityName": "Jamnagar",
    "citySlug": "jamnagar",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-11",
    "slug": "gj-11",
    "rtoName": "Junagadh RTO",
    "cityName": "Junagadh",
    "citySlug": "junagadh",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-12",
    "slug": "gj-12",
    "rtoName": "Bhuj (Kutch) RTO",
    "cityName": "Kutch",
    "citySlug": "kutch",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-13",
    "slug": "gj-13",
    "rtoName": "Surendranagar RTO",
    "cityName": "Surendranagar",
    "citySlug": "surendranagar",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-14",
    "slug": "gj-14",
    "rtoName": "Amreli RTO",
    "cityName": "Amreli",
    "citySlug": "amreli",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-15",
    "slug": "gj-15",
    "rtoName": "Valsad RTO",
    "cityName": "Valsad",
    "citySlug": "valsad",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-16",
    "slug": "gj-16",
    "rtoName": "Bharuch RTO",
    "cityName": "Bharuch",
    "citySlug": "bharuch",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-17",
    "slug": "gj-17",
    "rtoName": "Godhra (Panchmahal) RTO",
    "cityName": "Panchmahal",
    "citySlug": "panchmahal",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-18",
    "slug": "gj-18",
    "rtoName": "Gandhinagar RTO",
    "cityName": "Gandhinagar",
    "citySlug": "gandhinagar",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-19",
    "slug": "gj-19",
    "rtoName": "Navsari RTO",
    "cityName": "Navsari",
    "citySlug": "navsari",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-20",
    "slug": "gj-20",
    "rtoName": "Dahod RTO",
    "cityName": "Dahod",
    "citySlug": "dahod",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-21",
    "slug": "gj-21",
    "rtoName": "Vyara (Tapi) RTO",
    "cityName": "Tapi",
    "citySlug": "tapi",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-22",
    "slug": "gj-22",
    "rtoName": "Rajpipla (Narmada) RTO",
    "cityName": "Narmada",
    "citySlug": "narmada",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-23",
    "slug": "gj-23",
    "rtoName": "Anand RTO",
    "cityName": "Anand",
    "citySlug": "anand",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-24",
    "slug": "gj-24",
    "rtoName": "Patan RTO",
    "cityName": "Patan",
    "citySlug": "patan",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-25",
    "slug": "gj-25",
    "rtoName": "Porbandar RTO",
    "cityName": "Porbandar",
    "citySlug": "porbandar",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-26",
    "slug": "gj-26",
    "rtoName": "Ahwa (Dang) RTO",
    "cityName": "Dang",
    "citySlug": "dang",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-30",
    "slug": "gj-30",
    "rtoName": "Modasa (Aravalli) RTO",
    "cityName": "Aravalli",
    "citySlug": "aravalli",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-31",
    "slug": "gj-31",
    "rtoName": "Lunawada (Mahisagar) RTO",
    "cityName": "Mahisagar",
    "citySlug": "mahisagar",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-32",
    "slug": "gj-32",
    "rtoName": "Veraval (Gir Somnath) RTO",
    "cityName": "Gir Somnath",
    "citySlug": "gir-somnath",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-33",
    "slug": "gj-33",
    "rtoName": "Botad RTO",
    "cityName": "Botad",
    "citySlug": "botad",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-34",
    "slug": "gj-34",
    "rtoName": "Chhota Udaipur RTO",
    "cityName": "Chhota Udaipur",
    "citySlug": "chhota-udaipur",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-35",
    "slug": "gj-35",
    "rtoName": "Khambhalia (Devbhoomi Dwarka) RTO",
    "cityName": "Devbhoomi Dwarka",
    "citySlug": "devbhoomi-dwarka",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "GJ-36",
    "slug": "gj-36",
    "rtoName": "Morbi Ceramic Hub RTO",
    "cityName": "Morbi",
    "citySlug": "morbi",
    "stateName": "Gujarat",
    "stateSlug": "gujarat",
    "stateCode": "GJ",
    "isUt": false
  },
  {
    "code": "HR-01",
    "slug": "hr-01",
    "rtoName": "Ambala City SDM",
    "cityName": "Ambala",
    "citySlug": "ambala",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-04",
    "slug": "hr-04",
    "rtoName": "Naraingarh SDM",
    "cityName": "Ambala",
    "citySlug": "ambala",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-37",
    "slug": "hr-37",
    "rtoName": "Ambala Cantt SDM",
    "cityName": "Ambala",
    "citySlug": "ambala",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-02",
    "slug": "hr-02",
    "rtoName": "Yamunanagar SDM",
    "cityName": "Yamunanagar",
    "citySlug": "yamunanagar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-58",
    "slug": "hr-58",
    "rtoName": "Yamunanagar Commercial RTA",
    "cityName": "Yamunanagar",
    "citySlug": "yamunanagar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-92",
    "slug": "hr-92",
    "rtoName": "Radaur SDM",
    "cityName": "Yamunanagar",
    "citySlug": "yamunanagar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-03",
    "slug": "hr-03",
    "rtoName": "Panchkula SDM",
    "cityName": "Panchkula",
    "citySlug": "panchkula",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-49",
    "slug": "hr-49",
    "rtoName": "Kalka SDM",
    "cityName": "Panchkula",
    "citySlug": "panchkula",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-68",
    "slug": "hr-68",
    "rtoName": "Panchkula Commercial RTA",
    "cityName": "Panchkula",
    "citySlug": "panchkula",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-05",
    "slug": "hr-05",
    "rtoName": "Karnal SDM",
    "cityName": "Karnal",
    "citySlug": "karnal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-40",
    "slug": "hr-40",
    "rtoName": "Assandh SDM",
    "cityName": "Karnal",
    "citySlug": "karnal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-45",
    "slug": "hr-45",
    "rtoName": "Karnal Commercial RTA",
    "cityName": "Karnal",
    "citySlug": "karnal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-83",
    "slug": "hr-83",
    "rtoName": "Gharaunda SDM",
    "cityName": "Karnal",
    "citySlug": "karnal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-06",
    "slug": "hr-06",
    "rtoName": "Panipat SDM",
    "cityName": "Panipat",
    "citySlug": "panipat",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-60",
    "slug": "hr-60",
    "rtoName": "Samalkha SDM",
    "cityName": "Panipat",
    "citySlug": "panipat",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-67",
    "slug": "hr-67",
    "rtoName": "Panipat Commercial RTA",
    "cityName": "Panipat",
    "citySlug": "panipat",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-96",
    "slug": "hr-96",
    "rtoName": "Israna SDM",
    "cityName": "Panipat",
    "citySlug": "panipat",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-07",
    "slug": "hr-07",
    "rtoName": "Kurukshetra SDM",
    "cityName": "Kurukshetra",
    "citySlug": "kurukshetra",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-41",
    "slug": "hr-41",
    "rtoName": "Pehowa SDM",
    "cityName": "Kurukshetra",
    "citySlug": "kurukshetra",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-65",
    "slug": "hr-65",
    "rtoName": "Kurukshetra Commercial RTA",
    "cityName": "Kurukshetra",
    "citySlug": "kurukshetra",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-78",
    "slug": "hr-78",
    "rtoName": "Shahabad SDM",
    "cityName": "Kurukshetra",
    "citySlug": "kurukshetra",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-97",
    "slug": "hr-97",
    "rtoName": "Ladwa SDM",
    "cityName": "Kurukshetra",
    "citySlug": "kurukshetra",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-08",
    "slug": "hr-08",
    "rtoName": "Kaithal SDM",
    "cityName": "Kaithal",
    "citySlug": "kaithal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-09",
    "slug": "hr-09",
    "rtoName": "Guhla SDM",
    "cityName": "Kaithal",
    "citySlug": "kaithal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-64",
    "slug": "hr-64",
    "rtoName": "Kaithal Commercial RTA",
    "cityName": "Kaithal",
    "citySlug": "kaithal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-82",
    "slug": "hr-82",
    "rtoName": "Kalayat SDM",
    "cityName": "Kaithal",
    "citySlug": "kaithal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-10",
    "slug": "hr-10",
    "rtoName": "Sonipat SDM",
    "cityName": "Sonipat",
    "citySlug": "sonipat",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-11",
    "slug": "hr-11",
    "rtoName": "Gohana SDM",
    "cityName": "Sonipat",
    "citySlug": "sonipat",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-42",
    "slug": "hr-42",
    "rtoName": "Ganaur SDM",
    "cityName": "Sonipat",
    "citySlug": "sonipat",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-69",
    "slug": "hr-69",
    "rtoName": "Sonipat Commercial RTA",
    "cityName": "Sonipat",
    "citySlug": "sonipat",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-79",
    "slug": "hr-79",
    "rtoName": "Kharkhoda SDM",
    "cityName": "Sonipat",
    "citySlug": "sonipat",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-12",
    "slug": "hr-12",
    "rtoName": "Rohtak SDM",
    "cityName": "Rohtak",
    "citySlug": "rohtak",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-15",
    "slug": "hr-15",
    "rtoName": "Meham SDM",
    "cityName": "Rohtak",
    "citySlug": "rohtak",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-46",
    "slug": "hr-46",
    "rtoName": "Rohtak Commercial RTA",
    "cityName": "Rohtak",
    "citySlug": "rohtak",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-95",
    "slug": "hr-95",
    "rtoName": "Sampla SDM",
    "cityName": "Rohtak",
    "citySlug": "rohtak",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-13",
    "slug": "hr-13",
    "rtoName": "Bahadurgarh SDM",
    "cityName": "Jhajjar",
    "citySlug": "jhajjar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-14",
    "slug": "hr-14",
    "rtoName": "Jhajjar SDM",
    "cityName": "Jhajjar",
    "citySlug": "jhajjar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-63",
    "slug": "hr-63",
    "rtoName": "Jhajjar Commercial RTA",
    "cityName": "Jhajjar",
    "citySlug": "jhajjar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-77",
    "slug": "hr-77",
    "rtoName": "Beri SDM",
    "cityName": "Jhajjar",
    "citySlug": "jhajjar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-94",
    "slug": "hr-94",
    "rtoName": "Badli SDM",
    "cityName": "Jhajjar",
    "citySlug": "jhajjar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-16",
    "slug": "hr-16",
    "rtoName": "Bhiwani SDM",
    "cityName": "Bhiwani",
    "citySlug": "bhiwani",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-17",
    "slug": "hr-17",
    "rtoName": "Siwani SDM",
    "cityName": "Bhiwani",
    "citySlug": "bhiwani",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-18",
    "slug": "hr-18",
    "rtoName": "Loharu SDM",
    "cityName": "Bhiwani",
    "citySlug": "bhiwani",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-48",
    "slug": "hr-48",
    "rtoName": "Tosham SDM",
    "cityName": "Bhiwani",
    "citySlug": "bhiwani",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-61",
    "slug": "hr-61",
    "rtoName": "Bhiwani Commercial RTA",
    "cityName": "Bhiwani",
    "citySlug": "bhiwani",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-19",
    "slug": "hr-19",
    "rtoName": "Charkhi Dadri SDM",
    "cityName": "Charkhi Dadri",
    "citySlug": "charkhi-dadri",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-84",
    "slug": "hr-84",
    "rtoName": "Charkhi Dadri Commercial RTA",
    "cityName": "Charkhi Dadri",
    "citySlug": "charkhi-dadri",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-87",
    "slug": "hr-87",
    "rtoName": "Badhra SDM",
    "cityName": "Charkhi Dadri",
    "citySlug": "charkhi-dadri",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-20",
    "slug": "hr-20",
    "rtoName": "Hisar SDM",
    "cityName": "Hisar",
    "citySlug": "hisar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-21",
    "slug": "hr-21",
    "rtoName": "Hansi SDM",
    "cityName": "Hisar",
    "citySlug": "hisar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-39",
    "slug": "hr-39",
    "rtoName": "Hisar Commercial RTA",
    "cityName": "Hisar",
    "citySlug": "hisar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-80",
    "slug": "hr-80",
    "rtoName": "Barwala SDM",
    "cityName": "Hisar",
    "citySlug": "hisar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-86",
    "slug": "hr-86",
    "rtoName": "Narnaund SDM",
    "cityName": "Hisar",
    "citySlug": "hisar",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-22",
    "slug": "hr-22",
    "rtoName": "Fatehabad SDM",
    "cityName": "Fatehabad",
    "citySlug": "fatehabad",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-23",
    "slug": "hr-23",
    "rtoName": "Tohana SDM",
    "cityName": "Fatehabad",
    "citySlug": "fatehabad",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-62",
    "slug": "hr-62",
    "rtoName": "Fatehabad Commercial RTA",
    "cityName": "Fatehabad",
    "citySlug": "fatehabad",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-24",
    "slug": "hr-24",
    "rtoName": "Sirsa SDM",
    "cityName": "Sirsa",
    "citySlug": "sirsa",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-25",
    "slug": "hr-25",
    "rtoName": "Mandi Dabwali SDM",
    "cityName": "Sirsa",
    "citySlug": "sirsa",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-44",
    "slug": "hr-44",
    "rtoName": "Ellenabad SDM",
    "cityName": "Sirsa",
    "citySlug": "sirsa",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-89",
    "slug": "hr-89",
    "rtoName": "Kalanwali SDM",
    "cityName": "Sirsa",
    "citySlug": "sirsa",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-26",
    "slug": "hr-26",
    "rtoName": "Gurugram North RTA",
    "cityName": "Gurugram",
    "citySlug": "gurugram",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-55",
    "slug": "hr-55",
    "rtoName": "Gurugram Commercial RTA",
    "cityName": "Gurugram",
    "citySlug": "gurugram",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-72",
    "slug": "hr-72",
    "rtoName": "Gurugram South RTA",
    "cityName": "Gurugram",
    "citySlug": "gurugram",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-76",
    "slug": "hr-76",
    "rtoName": "Pataudi SDM",
    "cityName": "Gurugram",
    "citySlug": "gurugram",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-85",
    "slug": "hr-85",
    "rtoName": "Manesar SDM",
    "cityName": "Gurugram",
    "citySlug": "gurugram",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-98",
    "slug": "hr-98",
    "rtoName": "Badshahpur SDM",
    "cityName": "Gurugram",
    "citySlug": "gurugram",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-99",
    "slug": "hr-99",
    "rtoName": "Gurugram East RTA",
    "cityName": "Gurugram",
    "citySlug": "gurugram",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-27",
    "slug": "hr-27",
    "rtoName": "Nuh (Mewat) SDM",
    "cityName": "Nuh",
    "citySlug": "nuh",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-28",
    "slug": "hr-28",
    "rtoName": "Ferozepur Jhirka SDM",
    "cityName": "Nuh",
    "citySlug": "nuh",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-74",
    "slug": "hr-74",
    "rtoName": "Nuh Commercial RTA",
    "cityName": "Nuh",
    "citySlug": "nuh",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-29",
    "slug": "hr-29",
    "rtoName": "Ballabgarh SDM",
    "cityName": "Faridabad",
    "citySlug": "faridabad",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-38",
    "slug": "hr-38",
    "rtoName": "Faridabad Commercial RTA",
    "cityName": "Faridabad",
    "citySlug": "faridabad",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-51",
    "slug": "hr-51",
    "rtoName": "Faridabad Central SDM",
    "cityName": "Faridabad",
    "citySlug": "faridabad",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-88",
    "slug": "hr-88",
    "rtoName": "Badkhal SDM",
    "cityName": "Faridabad",
    "citySlug": "faridabad",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-30",
    "slug": "hr-30",
    "rtoName": "Palwal SDM",
    "cityName": "Palwal",
    "citySlug": "palwal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-50",
    "slug": "hr-50",
    "rtoName": "Hodal SDM",
    "cityName": "Palwal",
    "citySlug": "palwal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-52",
    "slug": "hr-52",
    "rtoName": "Hathin SDM",
    "cityName": "Palwal",
    "citySlug": "palwal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-73",
    "slug": "hr-73",
    "rtoName": "Palwal Commercial RTA",
    "cityName": "Palwal",
    "citySlug": "palwal",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-31",
    "slug": "hr-31",
    "rtoName": "Jind SDM",
    "cityName": "Jind",
    "citySlug": "jind",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-32",
    "slug": "hr-32",
    "rtoName": "Narwana SDM",
    "cityName": "Jind",
    "citySlug": "jind",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-33",
    "slug": "hr-33",
    "rtoName": "Safidon SDM",
    "cityName": "Jind",
    "citySlug": "jind",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-90",
    "slug": "hr-90",
    "rtoName": "Uchana SDM",
    "cityName": "Jind",
    "citySlug": "jind",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-93",
    "slug": "hr-93",
    "rtoName": "Julana SDM",
    "cityName": "Jind",
    "citySlug": "jind",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-34",
    "slug": "hr-34",
    "rtoName": "Mahendragarh SDM",
    "cityName": "Mahendragarh",
    "citySlug": "mahendragarh",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-35",
    "slug": "hr-35",
    "rtoName": "Narnaul SDM",
    "cityName": "Mahendragarh",
    "citySlug": "mahendragarh",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-66",
    "slug": "hr-66",
    "rtoName": "Narnaul Commercial RTA",
    "cityName": "Mahendragarh",
    "citySlug": "mahendragarh",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-36",
    "slug": "hr-36",
    "rtoName": "Rewari SDM",
    "cityName": "Rewari",
    "citySlug": "rewari",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-43",
    "slug": "hr-43",
    "rtoName": "Kosli SDM",
    "cityName": "Rewari",
    "citySlug": "rewari",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-47",
    "slug": "hr-47",
    "rtoName": "Rewari Commercial RTA",
    "cityName": "Rewari",
    "citySlug": "rewari",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HR-81",
    "slug": "hr-81",
    "rtoName": "Bawal Industrial SDM",
    "cityName": "Rewari",
    "citySlug": "rewari",
    "stateName": "Haryana",
    "stateSlug": "haryana",
    "stateCode": "HR",
    "isUt": false
  },
  {
    "code": "HP-01",
    "slug": "hp-01",
    "rtoName": "Shimla Urban RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-02",
    "slug": "hp-02",
    "rtoName": "Shimla Tourist RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-03",
    "slug": "hp-03",
    "rtoName": "Shimla Urban SDM",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-07",
    "slug": "hp-07",
    "rtoName": "Shimla RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-08",
    "slug": "hp-08",
    "rtoName": "Chaupal RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-09",
    "slug": "hp-09",
    "rtoName": "Theog RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-10",
    "slug": "hp-10",
    "rtoName": "Rohru RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-51",
    "slug": "hp-51",
    "rtoName": "Shimla Rural SDM",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-52",
    "slug": "hp-52",
    "rtoName": "Shimla Rural RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-62",
    "slug": "hp-62",
    "rtoName": "Dodra Kwar RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-63",
    "slug": "hp-63",
    "rtoName": "Shimla Commercial RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-79",
    "slug": "hp-79",
    "rtoName": "Kotkhai RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-85",
    "slug": "hp-85",
    "rtoName": "Kupvi RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-95",
    "slug": "hp-95",
    "rtoName": "Kumarsain RTO",
    "cityName": "Shimla",
    "citySlug": "shimla",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-04",
    "slug": "hp-04",
    "rtoName": "Dharamshala RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-36",
    "slug": "hp-36",
    "rtoName": "Dehra RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-37",
    "slug": "hp-37",
    "rtoName": "Palampur RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-38",
    "slug": "hp-38",
    "rtoName": "Jawali RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-39",
    "slug": "hp-39",
    "rtoName": "Dharamshala SDM",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-40",
    "slug": "hp-40",
    "rtoName": "Kangra RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-53",
    "slug": "hp-53",
    "rtoName": "Baijnath RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-54",
    "slug": "hp-54",
    "rtoName": "Jawalamukhi RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-56",
    "slug": "hp-56",
    "rtoName": "Jaisinghpur RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-68",
    "slug": "hp-68",
    "rtoName": "Dharamshala Commercial RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-84",
    "slug": "hp-84",
    "rtoName": "Indora RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-88",
    "slug": "hp-88",
    "rtoName": "Fatehpur RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-90",
    "slug": "hp-90",
    "rtoName": "Shahpur RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-94",
    "slug": "hp-94",
    "rtoName": "Nagrota Bagwan RTO",
    "cityName": "Dharamshala",
    "citySlug": "dharamshala",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-05",
    "slug": "hp-05",
    "rtoName": "Mandi RTO",
    "cityName": "Mandi",
    "citySlug": "mandi",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-28",
    "slug": "hp-28",
    "rtoName": "Sarkaghat RTO",
    "cityName": "Mandi",
    "citySlug": "mandi",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-29",
    "slug": "hp-29",
    "rtoName": "Jogindernagar RTO",
    "cityName": "Mandi",
    "citySlug": "mandi",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-30",
    "slug": "hp-30",
    "rtoName": "Karsog RTO",
    "cityName": "Mandi",
    "citySlug": "mandi",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-31",
    "slug": "hp-31",
    "rtoName": "Sundernagar RTO",
    "cityName": "Mandi",
    "citySlug": "mandi",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-32",
    "slug": "hp-32",
    "rtoName": "Gohar RTO",
    "cityName": "Mandi",
    "citySlug": "mandi",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-33",
    "slug": "hp-33",
    "rtoName": "Mandi SDM",
    "cityName": "Mandi",
    "citySlug": "mandi",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-65",
    "slug": "hp-65",
    "rtoName": "Mandi Commercial RTO",
    "cityName": "Mandi",
    "citySlug": "mandi",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-76",
    "slug": "hp-76",
    "rtoName": "Paddar RTO",
    "cityName": "Mandi",
    "citySlug": "mandi",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-86",
    "slug": "hp-86",
    "rtoName": "Dharampur RTO",
    "cityName": "Mandi",
    "citySlug": "mandi",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-87",
    "slug": "hp-87",
    "rtoName": "Janjehli RTO",
    "cityName": "Mandi",
    "citySlug": "mandi",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-06",
    "slug": "hp-06",
    "rtoName": "Kullu RTO",
    "cityName": "Kullu",
    "citySlug": "kullu",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-34",
    "slug": "hp-34",
    "rtoName": "Kullu SDM",
    "cityName": "Kullu",
    "citySlug": "kullu",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-35",
    "slug": "hp-35",
    "rtoName": "Anni RTO",
    "cityName": "Kullu",
    "citySlug": "kullu",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-49",
    "slug": "hp-49",
    "rtoName": "Banjar RTO",
    "cityName": "Kullu",
    "citySlug": "kullu",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-58",
    "slug": "hp-58",
    "rtoName": "Manali Tourist RTO",
    "cityName": "Kullu",
    "citySlug": "kullu",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-66",
    "slug": "hp-66",
    "rtoName": "Kullu Commercial RTO",
    "cityName": "Kullu",
    "citySlug": "kullu",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-11",
    "slug": "hp-11",
    "rtoName": "Arki RTO",
    "cityName": "Solan",
    "citySlug": "solan",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-12",
    "slug": "hp-12",
    "rtoName": "Nalagarh Industrial RTO",
    "cityName": "Solan",
    "citySlug": "solan",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-13",
    "slug": "hp-13",
    "rtoName": "Kandaghat RTO",
    "cityName": "Solan",
    "citySlug": "solan",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-14",
    "slug": "hp-14",
    "rtoName": "Solan RTO",
    "cityName": "Solan",
    "citySlug": "solan",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-15",
    "slug": "hp-15",
    "rtoName": "Parwanoo Industrial RTO",
    "cityName": "Solan",
    "citySlug": "solan",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-64",
    "slug": "hp-64",
    "rtoName": "Solan Commercial RTO",
    "cityName": "Solan",
    "citySlug": "solan",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-92",
    "slug": "hp-92",
    "rtoName": "Kasauli RTO",
    "cityName": "Solan",
    "citySlug": "solan",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-93",
    "slug": "hp-93",
    "rtoName": "Darlaghat Cement Hub RTO",
    "cityName": "Solan",
    "citySlug": "solan",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-97",
    "slug": "hp-97",
    "rtoName": "Baddi Industrial Hub RTO",
    "cityName": "Solan",
    "citySlug": "solan",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-16",
    "slug": "hp-16",
    "rtoName": "Rajgarh RTO",
    "cityName": "Sirmaur",
    "citySlug": "sirmaur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-17",
    "slug": "hp-17",
    "rtoName": "Paonta Sahib RTO",
    "cityName": "Sirmaur",
    "citySlug": "sirmaur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-18",
    "slug": "hp-18",
    "rtoName": "Nahan RTO",
    "cityName": "Sirmaur",
    "citySlug": "sirmaur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-71",
    "slug": "hp-71",
    "rtoName": "Nahan Commercial RTO",
    "cityName": "Sirmaur",
    "citySlug": "sirmaur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-77",
    "slug": "hp-77",
    "rtoName": "Shillai RTO",
    "cityName": "Sirmaur",
    "citySlug": "sirmaur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-78",
    "slug": "hp-78",
    "rtoName": "Sangrah RTO",
    "cityName": "Sirmaur",
    "citySlug": "sirmaur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-19",
    "slug": "hp-19",
    "rtoName": "Amb RTO",
    "cityName": "Una",
    "citySlug": "una",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-20",
    "slug": "hp-20",
    "rtoName": "Una RTO",
    "cityName": "Una",
    "citySlug": "una",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-70",
    "slug": "hp-70",
    "rtoName": "Una Commercial RTO",
    "cityName": "Una",
    "citySlug": "una",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-80",
    "slug": "hp-80",
    "rtoName": "Haroli RTO",
    "cityName": "Una",
    "citySlug": "una",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-83",
    "slug": "hp-83",
    "rtoName": "Bangana RTO",
    "cityName": "Una",
    "citySlug": "una",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-21",
    "slug": "hp-21",
    "rtoName": "Barsar RTO",
    "cityName": "Hamirpur",
    "citySlug": "hamirpur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-22",
    "slug": "hp-22",
    "rtoName": "Hamirpur RTO",
    "cityName": "Hamirpur",
    "citySlug": "hamirpur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-55",
    "slug": "hp-55",
    "rtoName": "Nadaun RTO",
    "cityName": "Hamirpur",
    "citySlug": "hamirpur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-67",
    "slug": "hp-67",
    "rtoName": "Hamirpur Commercial RTO",
    "cityName": "Hamirpur",
    "citySlug": "hamirpur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-74",
    "slug": "hp-74",
    "rtoName": "Bhoranj RTO",
    "cityName": "Hamirpur",
    "citySlug": "hamirpur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-82",
    "slug": "hp-82",
    "rtoName": "Sujanpur RTO",
    "cityName": "Hamirpur",
    "citySlug": "hamirpur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-23",
    "slug": "hp-23",
    "rtoName": "Ghumarwin RTO",
    "cityName": "Bilaspur",
    "citySlug": "bilaspur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-24",
    "slug": "hp-24",
    "rtoName": "Bilaspur RTO",
    "cityName": "Bilaspur",
    "citySlug": "bilaspur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-69",
    "slug": "hp-69",
    "rtoName": "Bilaspur Commercial RTO",
    "cityName": "Bilaspur",
    "citySlug": "bilaspur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-89",
    "slug": "hp-89",
    "rtoName": "Jhandutta RTO",
    "cityName": "Bilaspur",
    "citySlug": "bilaspur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-91",
    "slug": "hp-91",
    "rtoName": "Naina Devi RTO",
    "cityName": "Bilaspur",
    "citySlug": "bilaspur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-25",
    "slug": "hp-25",
    "rtoName": "Kalpa (Kinnaur) RTO",
    "cityName": "Kinnaur",
    "citySlug": "kinnaur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-26",
    "slug": "hp-26",
    "rtoName": "Nichar (Bhabanagar) RTO",
    "cityName": "Kinnaur",
    "citySlug": "kinnaur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-27",
    "slug": "hp-27",
    "rtoName": "Pooh RTO",
    "cityName": "Kinnaur",
    "citySlug": "kinnaur",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-41",
    "slug": "hp-41",
    "rtoName": "Kaza RTO",
    "cityName": "Lahaul and Spiti",
    "citySlug": "lahaul-and-spiti",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-42",
    "slug": "hp-42",
    "rtoName": "Keylong (Lahaul) RTO",
    "cityName": "Lahaul and Spiti",
    "citySlug": "lahaul-and-spiti",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-43",
    "slug": "hp-43",
    "rtoName": "Udaipur RTO",
    "cityName": "Lahaul and Spiti",
    "citySlug": "lahaul-and-spiti",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-44",
    "slug": "hp-44",
    "rtoName": "Churah RTO",
    "cityName": "Chamba",
    "citySlug": "chamba",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-45",
    "slug": "hp-45",
    "rtoName": "Pangi RTO",
    "cityName": "Chamba",
    "citySlug": "chamba",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-46",
    "slug": "hp-46",
    "rtoName": "Bharmour RTO",
    "cityName": "Chamba",
    "citySlug": "chamba",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-47",
    "slug": "hp-47",
    "rtoName": "Dalhousie RTO",
    "cityName": "Chamba",
    "citySlug": "chamba",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-48",
    "slug": "hp-48",
    "rtoName": "Chamba RTO",
    "cityName": "Chamba",
    "citySlug": "chamba",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-57",
    "slug": "hp-57",
    "rtoName": "Chowari RTO",
    "cityName": "Chamba",
    "citySlug": "chamba",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-73",
    "slug": "hp-73",
    "rtoName": "Chamba Commercial RTO",
    "cityName": "Chamba",
    "citySlug": "chamba",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "HP-81",
    "slug": "hp-81",
    "rtoName": "Salooni RTO",
    "cityName": "Chamba",
    "citySlug": "chamba",
    "stateName": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "stateCode": "HP",
    "isUt": false
  },
  {
    "code": "JH-01",
    "slug": "jh-01",
    "rtoName": "Ranchi Central DTO",
    "cityName": "Ranchi",
    "citySlug": "ranchi",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-02",
    "slug": "jh-02",
    "rtoName": "Hazaribagh DTO",
    "cityName": "Hazaribagh",
    "citySlug": "hazaribagh",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-03",
    "slug": "jh-03",
    "rtoName": "Daltonganj (Palamu) DTO",
    "cityName": "Daltonganj",
    "citySlug": "daltonganj",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-04",
    "slug": "jh-04",
    "rtoName": "Dumka DTO",
    "cityName": "Dumka",
    "citySlug": "dumka",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-05",
    "slug": "jh-05",
    "rtoName": "Jamshedpur (East Singhbhum) DTO",
    "cityName": "Jamshedpur",
    "citySlug": "jamshedpur",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-06",
    "slug": "jh-06",
    "rtoName": "Chaibasa (West Singhbhum) DTO",
    "cityName": "Chaibasa",
    "citySlug": "chaibasa",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-07",
    "slug": "jh-07",
    "rtoName": "Gumla DTO",
    "cityName": "Gumla",
    "citySlug": "gumla",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-08",
    "slug": "jh-08",
    "rtoName": "Lohardaga DTO",
    "cityName": "Lohardaga",
    "citySlug": "lohardaga",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-09",
    "slug": "jh-09",
    "rtoName": "Bokaro Steel City DTO",
    "cityName": "Bokaro",
    "citySlug": "bokaro",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-10",
    "slug": "jh-10",
    "rtoName": "Dhanbad Coal Mining Hub DTO",
    "cityName": "Dhanbad",
    "citySlug": "dhanbad",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-11",
    "slug": "jh-11",
    "rtoName": "Giridih DTO",
    "cityName": "Giridih",
    "citySlug": "giridih",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-12",
    "slug": "jh-12",
    "rtoName": "Koderma DTO",
    "cityName": "Koderma",
    "citySlug": "koderma",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-13",
    "slug": "jh-13",
    "rtoName": "Chatra DTO",
    "cityName": "Chatra",
    "citySlug": "chatra",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-14",
    "slug": "jh-14",
    "rtoName": "Garhwa DTO",
    "cityName": "Garhwa",
    "citySlug": "garhwa",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-15",
    "slug": "jh-15",
    "rtoName": "Deoghar DTO",
    "cityName": "Deoghar",
    "citySlug": "deoghar",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-16",
    "slug": "jh-16",
    "rtoName": "Pakur DTO",
    "cityName": "Pakur",
    "citySlug": "pakur",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-17",
    "slug": "jh-17",
    "rtoName": "Godda DTO",
    "cityName": "Godda",
    "citySlug": "godda",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-18",
    "slug": "jh-18",
    "rtoName": "Sahibganj DTO",
    "cityName": "Sahibganj",
    "citySlug": "sahibganj",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-19",
    "slug": "jh-19",
    "rtoName": "Latehar DTO",
    "cityName": "Latehar",
    "citySlug": "latehar",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-20",
    "slug": "jh-20",
    "rtoName": "Simdega DTO",
    "cityName": "Simdega",
    "citySlug": "simdega",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-21",
    "slug": "jh-21",
    "rtoName": "Jamtara DTO",
    "cityName": "Jamtara",
    "citySlug": "jamtara",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-22",
    "slug": "jh-22",
    "rtoName": "Saraikela-Kharsawan DTO",
    "cityName": "Saraikela",
    "citySlug": "saraikela",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-23",
    "slug": "jh-23",
    "rtoName": "Khunti DTO",
    "cityName": "Khunti",
    "citySlug": "khunti",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "JH-24",
    "slug": "jh-24",
    "rtoName": "Ramgarh DTO",
    "cityName": "Ramgarh",
    "citySlug": "ramgarh",
    "stateName": "Jharkhand",
    "stateSlug": "jharkhand",
    "stateCode": "JH",
    "isUt": false
  },
  {
    "code": "KA-01",
    "slug": "ka-01",
    "rtoName": "Bengaluru Central (Koramangala) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-02",
    "slug": "ka-02",
    "rtoName": "Bengaluru West (Rajajinagar) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-03",
    "slug": "ka-03",
    "rtoName": "Bengaluru East (Indiranagar) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-04",
    "slug": "ka-04",
    "rtoName": "Bengaluru North (Yeshwanthpur) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-05",
    "slug": "ka-05",
    "rtoName": "Bengaluru South (Jayanagar) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-41",
    "slug": "ka-41",
    "rtoName": "Bengaluru West (Kengeri / Jnanabharathi) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-50",
    "slug": "ka-50",
    "rtoName": "Bengaluru North (Yelahanka) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-51",
    "slug": "ka-51",
    "rtoName": "Bengaluru South (Electronics City) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-53",
    "slug": "ka-53",
    "rtoName": "Bengaluru East (K.R. Puram) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-57",
    "slug": "ka-57",
    "rtoName": "Bengaluru Central (Shantinagar) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-58",
    "slug": "ka-58",
    "rtoName": "Bengaluru South (Banashankari) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-59",
    "slug": "ka-59",
    "rtoName": "Bengaluru (Chandapura) RTO",
    "cityName": "Bengaluru",
    "citySlug": "bengaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-06",
    "slug": "ka-06",
    "rtoName": "Tumkur RTO",
    "cityName": "Tumkur",
    "citySlug": "tumkur",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-44",
    "slug": "ka-44",
    "rtoName": "Tiptur RTO",
    "cityName": "Tumkur",
    "citySlug": "tumkur",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-64",
    "slug": "ka-64",
    "rtoName": "Madhugiri RTO",
    "cityName": "Tumkur",
    "citySlug": "tumkur",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-07",
    "slug": "ka-07",
    "rtoName": "Kolar RTO",
    "cityName": "Kolar",
    "citySlug": "kolar",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-08",
    "slug": "ka-08",
    "rtoName": "K.G.F. RTO",
    "cityName": "Kolar",
    "citySlug": "kolar",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-09",
    "slug": "ka-09",
    "rtoName": "Mysuru West RTO",
    "cityName": "Mysuru",
    "citySlug": "mysuru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-45",
    "slug": "ka-45",
    "rtoName": "Hunsur RTO",
    "cityName": "Mysuru",
    "citySlug": "mysuru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-55",
    "slug": "ka-55",
    "rtoName": "Mysuru East RTO",
    "cityName": "Mysuru",
    "citySlug": "mysuru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-10",
    "slug": "ka-10",
    "rtoName": "Chamarajanagar RTO",
    "cityName": "Chamarajanagar",
    "citySlug": "chamarajanagar",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-11",
    "slug": "ka-11",
    "rtoName": "Mandya RTO",
    "cityName": "Mandya",
    "citySlug": "mandya",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-54",
    "slug": "ka-54",
    "rtoName": "Nagamangala RTO",
    "cityName": "Mandya",
    "citySlug": "mandya",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-12",
    "slug": "ka-12",
    "rtoName": "Madikeri (Kodagu) RTO",
    "cityName": "Madikeri",
    "citySlug": "madikeri",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-13",
    "slug": "ka-13",
    "rtoName": "Hassan RTO",
    "cityName": "Hassan",
    "citySlug": "hassan",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-46",
    "slug": "ka-46",
    "rtoName": "Sakleshpur RTO",
    "cityName": "Hassan",
    "citySlug": "hassan",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-14",
    "slug": "ka-14",
    "rtoName": "Shivamogga RTO",
    "cityName": "Shivamogga",
    "citySlug": "shivamogga",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-15",
    "slug": "ka-15",
    "rtoName": "Sagar RTO",
    "cityName": "Shivamogga",
    "citySlug": "shivamogga",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-16",
    "slug": "ka-16",
    "rtoName": "Chitradurga RTO",
    "cityName": "Chitradurga",
    "citySlug": "chitradurga",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-17",
    "slug": "ka-17",
    "rtoName": "Davanagere RTO",
    "cityName": "Davanagere",
    "citySlug": "davanagere",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-18",
    "slug": "ka-18",
    "rtoName": "Chikkamagaluru RTO",
    "cityName": "Chikkamagaluru",
    "citySlug": "chikkamagaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-66",
    "slug": "ka-66",
    "rtoName": "Tarikere RTO",
    "cityName": "Chikkamagaluru",
    "citySlug": "chikkamagaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-19",
    "slug": "ka-19",
    "rtoName": "Mangaluru RTO",
    "cityName": "Mangaluru",
    "citySlug": "mangaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-21",
    "slug": "ka-21",
    "rtoName": "Puttur RTO",
    "cityName": "Mangaluru",
    "citySlug": "mangaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-70",
    "slug": "ka-70",
    "rtoName": "Bantwal RTO",
    "cityName": "Mangaluru",
    "citySlug": "mangaluru",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-20",
    "slug": "ka-20",
    "rtoName": "Udupi RTO",
    "cityName": "Udupi",
    "citySlug": "udupi",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-71",
    "slug": "ka-71",
    "rtoName": "Kundapura RTO",
    "cityName": "Udupi",
    "citySlug": "udupi",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-22",
    "slug": "ka-22",
    "rtoName": "Belagavi RTO",
    "cityName": "Belagavi",
    "citySlug": "belagavi",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-23",
    "slug": "ka-23",
    "rtoName": "Chikkodi RTO",
    "cityName": "Belagavi",
    "citySlug": "belagavi",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-24",
    "slug": "ka-24",
    "rtoName": "Bailhongal RTO",
    "cityName": "Belagavi",
    "citySlug": "belagavi",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-49",
    "slug": "ka-49",
    "rtoName": "Gokak RTO",
    "cityName": "Belagavi",
    "citySlug": "belagavi",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-69",
    "slug": "ka-69",
    "rtoName": "Ramdurg RTO",
    "cityName": "Belagavi",
    "citySlug": "belagavi",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-25",
    "slug": "ka-25",
    "rtoName": "Dharwad RTO",
    "cityName": "Dharwad",
    "citySlug": "dharwad",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-63",
    "slug": "ka-63",
    "rtoName": "Hubballi RTO",
    "cityName": "Dharwad",
    "citySlug": "dharwad",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-26",
    "slug": "ka-26",
    "rtoName": "Gadag RTO",
    "cityName": "Gadag",
    "citySlug": "gadag",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-27",
    "slug": "ka-27",
    "rtoName": "Haveri RTO",
    "cityName": "Haveri",
    "citySlug": "haveri",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-68",
    "slug": "ka-68",
    "rtoName": "Ranebennur RTO",
    "cityName": "Haveri",
    "citySlug": "haveri",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-28",
    "slug": "ka-28",
    "rtoName": "Vijayapura (Bijapur) RTO",
    "cityName": "Vijayapura",
    "citySlug": "vijayapura",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-29",
    "slug": "ka-29",
    "rtoName": "Bagalkot RTO",
    "cityName": "Bagalkot",
    "citySlug": "bagalkot",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-48",
    "slug": "ka-48",
    "rtoName": "Jamkhandi RTO",
    "cityName": "Bagalkot",
    "citySlug": "bagalkot",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-30",
    "slug": "ka-30",
    "rtoName": "Karwar (Uttara Kannada) RTO",
    "cityName": "Karwar",
    "citySlug": "karwar",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-31",
    "slug": "ka-31",
    "rtoName": "Sirsi RTO",
    "cityName": "Karwar",
    "citySlug": "karwar",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-47",
    "slug": "ka-47",
    "rtoName": "Honnavar RTO",
    "cityName": "Karwar",
    "citySlug": "karwar",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-65",
    "slug": "ka-65",
    "rtoName": "Dandeli RTO",
    "cityName": "Karwar",
    "citySlug": "karwar",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-32",
    "slug": "ka-32",
    "rtoName": "Kalaburagi (Gulbarga) RTO",
    "cityName": "Kalaburagi",
    "citySlug": "kalaburagi",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-33",
    "slug": "ka-33",
    "rtoName": "Yadgir RTO",
    "cityName": "Yadgir",
    "citySlug": "yadgir",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-34",
    "slug": "ka-34",
    "rtoName": "Ballari (Bellary) RTO",
    "cityName": "Ballari",
    "citySlug": "ballari",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-35",
    "slug": "ka-35",
    "rtoName": "Hosapete (Vijayanagara) RTO",
    "cityName": "Ballari",
    "citySlug": "ballari",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-36",
    "slug": "ka-36",
    "rtoName": "Raichur RTO",
    "cityName": "Raichur",
    "citySlug": "raichur",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-37",
    "slug": "ka-37",
    "rtoName": "Koppal RTO",
    "cityName": "Koppal",
    "citySlug": "koppal",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-38",
    "slug": "ka-38",
    "rtoName": "Bidar RTO",
    "cityName": "Bidar",
    "citySlug": "bidar",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-39",
    "slug": "ka-39",
    "rtoName": "Bhalki RTO",
    "cityName": "Bidar",
    "citySlug": "bidar",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-56",
    "slug": "ka-56",
    "rtoName": "Basavakalyan RTO",
    "cityName": "Bidar",
    "citySlug": "bidar",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-40",
    "slug": "ka-40",
    "rtoName": "Chikkaballapur RTO",
    "cityName": "Chikkaballapur",
    "citySlug": "chikkaballapur",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-67",
    "slug": "ka-67",
    "rtoName": "Chintamani RTO",
    "cityName": "Chikkaballapur",
    "citySlug": "chikkaballapur",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-42",
    "slug": "ka-42",
    "rtoName": "Ramanagara RTO",
    "cityName": "Ramanagara",
    "citySlug": "ramanagara",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-43",
    "slug": "ka-43",
    "rtoName": "Devanahalli (Bengaluru Rural) RTO",
    "cityName": "Devanahalli",
    "citySlug": "devanahalli",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-52",
    "slug": "ka-52",
    "rtoName": "Nelamangala RTO",
    "cityName": "Devanahalli",
    "citySlug": "devanahalli",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KA-72",
    "slug": "ka-72",
    "rtoName": "Kudligi (Vijayanagara) RTO",
    "cityName": "Vijayanagara",
    "citySlug": "vijayanagara",
    "stateName": "Karnataka",
    "stateSlug": "karnataka",
    "stateCode": "KA",
    "isUt": false
  },
  {
    "code": "KL-01",
    "slug": "kl-01",
    "rtoName": "Thiruvananthapuram Central RTO",
    "cityName": "Thiruvananthapuram",
    "citySlug": "thiruvananthapuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-16",
    "slug": "kl-16",
    "rtoName": "Attingal SRTO",
    "cityName": "Thiruvananthapuram",
    "citySlug": "thiruvananthapuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-19",
    "slug": "kl-19",
    "rtoName": "Parassala SRTO",
    "cityName": "Thiruvananthapuram",
    "citySlug": "thiruvananthapuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-20",
    "slug": "kl-20",
    "rtoName": "Neyyattinkara SRTO",
    "cityName": "Thiruvananthapuram",
    "citySlug": "thiruvananthapuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-21",
    "slug": "kl-21",
    "rtoName": "Nedumangad SRTO",
    "cityName": "Thiruvananthapuram",
    "citySlug": "thiruvananthapuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-22",
    "slug": "kl-22",
    "rtoName": "Kazhakoottam SRTO",
    "cityName": "Thiruvananthapuram",
    "citySlug": "thiruvananthapuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-74",
    "slug": "kl-74",
    "rtoName": "Kattakkada SRTO",
    "cityName": "Thiruvananthapuram",
    "citySlug": "thiruvananthapuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-81",
    "slug": "kl-81",
    "rtoName": "Varkala SRTO",
    "cityName": "Thiruvananthapuram",
    "citySlug": "thiruvananthapuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-02",
    "slug": "kl-02",
    "rtoName": "Kollam Central RTO",
    "cityName": "Kollam",
    "citySlug": "kollam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-23",
    "slug": "kl-23",
    "rtoName": "Karunagappally SRTO",
    "cityName": "Kollam",
    "citySlug": "kollam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-24",
    "slug": "kl-24",
    "rtoName": "Kottarakkara SRTO",
    "cityName": "Kollam",
    "citySlug": "kollam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-25",
    "slug": "kl-25",
    "rtoName": "Punalur SRTO",
    "cityName": "Kollam",
    "citySlug": "kollam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-61",
    "slug": "kl-61",
    "rtoName": "Kunnathur SRTO",
    "cityName": "Kollam",
    "citySlug": "kollam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-82",
    "slug": "kl-82",
    "rtoName": "Chadayamangalam SRTO",
    "cityName": "Kollam",
    "citySlug": "kollam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-83",
    "slug": "kl-83",
    "rtoName": "Pathanapuram SRTO",
    "cityName": "Kollam",
    "citySlug": "kollam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-03",
    "slug": "kl-03",
    "rtoName": "Pathanamthitta RTO",
    "cityName": "Pathanamthitta",
    "citySlug": "pathanamthitta",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-26",
    "slug": "kl-26",
    "rtoName": "Adoor SRTO",
    "cityName": "Pathanamthitta",
    "citySlug": "pathanamthitta",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-27",
    "slug": "kl-27",
    "rtoName": "Thiruvalla SRTO",
    "cityName": "Pathanamthitta",
    "citySlug": "pathanamthitta",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-28",
    "slug": "kl-28",
    "rtoName": "Mallappally SRTO",
    "cityName": "Pathanamthitta",
    "citySlug": "pathanamthitta",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-62",
    "slug": "kl-62",
    "rtoName": "Ranni SRTO",
    "cityName": "Pathanamthitta",
    "citySlug": "pathanamthitta",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-80",
    "slug": "kl-80",
    "rtoName": "Konni SRTO",
    "cityName": "Pathanamthitta",
    "citySlug": "pathanamthitta",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-04",
    "slug": "kl-04",
    "rtoName": "Alappuzha Central RTO",
    "cityName": "Alappuzha",
    "citySlug": "alappuzha",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-29",
    "slug": "kl-29",
    "rtoName": "Kayamkulam SRTO",
    "cityName": "Alappuzha",
    "citySlug": "alappuzha",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-30",
    "slug": "kl-30",
    "rtoName": "Chengannur SRTO",
    "cityName": "Alappuzha",
    "citySlug": "alappuzha",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-31",
    "slug": "kl-31",
    "rtoName": "Mavelikkara SRTO",
    "cityName": "Alappuzha",
    "citySlug": "alappuzha",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-32",
    "slug": "kl-32",
    "rtoName": "Cherthala SRTO",
    "cityName": "Alappuzha",
    "citySlug": "alappuzha",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-66",
    "slug": "kl-66",
    "rtoName": "Kuttanad SRTO",
    "cityName": "Alappuzha",
    "citySlug": "alappuzha",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-05",
    "slug": "kl-05",
    "rtoName": "Kottayam Central RTO",
    "cityName": "Kottayam",
    "citySlug": "kottayam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-33",
    "slug": "kl-33",
    "rtoName": "Changanassery SRTO",
    "cityName": "Kottayam",
    "citySlug": "kottayam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-34",
    "slug": "kl-34",
    "rtoName": "Kanjirappally SRTO",
    "cityName": "Kottayam",
    "citySlug": "kottayam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-35",
    "slug": "kl-35",
    "rtoName": "Pala SRTO",
    "cityName": "Kottayam",
    "citySlug": "kottayam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-36",
    "slug": "kl-36",
    "rtoName": "Vaikom SRTO",
    "cityName": "Kottayam",
    "citySlug": "kottayam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-67",
    "slug": "kl-67",
    "rtoName": "Uzhavoor SRTO",
    "cityName": "Kottayam",
    "citySlug": "kottayam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-06",
    "slug": "kl-06",
    "rtoName": "Idukki (Painavu) RTO",
    "cityName": "Idukki",
    "citySlug": "idukki",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-37",
    "slug": "kl-37",
    "rtoName": "Peerumedu SRTO",
    "cityName": "Idukki",
    "citySlug": "idukki",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-38",
    "slug": "kl-38",
    "rtoName": "Thodupuzha SRTO",
    "cityName": "Idukki",
    "citySlug": "idukki",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-68",
    "slug": "kl-68",
    "rtoName": "Devikulam SRTO",
    "cityName": "Idukki",
    "citySlug": "idukki",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-69",
    "slug": "kl-69",
    "rtoName": "Udumbanchola SRTO",
    "cityName": "Idukki",
    "citySlug": "idukki",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-07",
    "slug": "kl-07",
    "rtoName": "Ernakulam (Kochi) RTO",
    "cityName": "Ernakulam",
    "citySlug": "ernakulam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-17",
    "slug": "kl-17",
    "rtoName": "Muvattupuzha RTO",
    "cityName": "Ernakulam",
    "citySlug": "ernakulam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-39",
    "slug": "kl-39",
    "rtoName": "Tripunithura SRTO",
    "cityName": "Ernakulam",
    "citySlug": "ernakulam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-40",
    "slug": "kl-40",
    "rtoName": "Perumbavoor SRTO",
    "cityName": "Ernakulam",
    "citySlug": "ernakulam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-41",
    "slug": "kl-41",
    "rtoName": "Aluva SRTO",
    "cityName": "Ernakulam",
    "citySlug": "ernakulam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-42",
    "slug": "kl-42",
    "rtoName": "North Paravur SRTO",
    "cityName": "Ernakulam",
    "citySlug": "ernakulam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-43",
    "slug": "kl-43",
    "rtoName": "Mattancherry SRTO",
    "cityName": "Ernakulam",
    "citySlug": "ernakulam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-44",
    "slug": "kl-44",
    "rtoName": "Kothamangalam SRTO",
    "cityName": "Ernakulam",
    "citySlug": "ernakulam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-63",
    "slug": "kl-63",
    "rtoName": "Angamaly SRTO",
    "cityName": "Ernakulam",
    "citySlug": "ernakulam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-75",
    "slug": "kl-75",
    "rtoName": "Thrikkakara SRTO",
    "cityName": "Ernakulam",
    "citySlug": "ernakulam",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-08",
    "slug": "kl-08",
    "rtoName": "Thrissur Central RTO",
    "cityName": "Thrissur",
    "citySlug": "thrissur",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-45",
    "slug": "kl-45",
    "rtoName": "Irinjalakuda SRTO",
    "cityName": "Thrissur",
    "citySlug": "thrissur",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-46",
    "slug": "kl-46",
    "rtoName": "Guruvayur SRTO",
    "cityName": "Thrissur",
    "citySlug": "thrissur",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-47",
    "slug": "kl-47",
    "rtoName": "Kodungallur SRTO",
    "cityName": "Thrissur",
    "citySlug": "thrissur",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-48",
    "slug": "kl-48",
    "rtoName": "Wadakkancherry SRTO",
    "cityName": "Thrissur",
    "citySlug": "thrissur",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-64",
    "slug": "kl-64",
    "rtoName": "Chalakudy SRTO",
    "cityName": "Thrissur",
    "citySlug": "thrissur",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-09",
    "slug": "kl-09",
    "rtoName": "Palakkad Central RTO",
    "cityName": "Palakkad",
    "citySlug": "palakkad",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-49",
    "slug": "kl-49",
    "rtoName": "Alathur SRTO",
    "cityName": "Palakkad",
    "citySlug": "palakkad",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-50",
    "slug": "kl-50",
    "rtoName": "Mannarkkad SRTO",
    "cityName": "Palakkad",
    "citySlug": "palakkad",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-51",
    "slug": "kl-51",
    "rtoName": "Ottapalam SRTO",
    "cityName": "Palakkad",
    "citySlug": "palakkad",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-52",
    "slug": "kl-52",
    "rtoName": "Pattambi SRTO",
    "cityName": "Palakkad",
    "citySlug": "palakkad",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-70",
    "slug": "kl-70",
    "rtoName": "Chittur SRTO",
    "cityName": "Palakkad",
    "citySlug": "palakkad",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-10",
    "slug": "kl-10",
    "rtoName": "Malappuram Central RTO",
    "cityName": "Malappuram",
    "citySlug": "malappuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-53",
    "slug": "kl-53",
    "rtoName": "Perinthalmanna SRTO",
    "cityName": "Malappuram",
    "citySlug": "malappuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-54",
    "slug": "kl-54",
    "rtoName": "Ponnani SRTO",
    "cityName": "Malappuram",
    "citySlug": "malappuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-55",
    "slug": "kl-55",
    "rtoName": "Tirur SRTO",
    "cityName": "Malappuram",
    "citySlug": "malappuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-65",
    "slug": "kl-65",
    "rtoName": "Tirurangadi SRTO",
    "cityName": "Malappuram",
    "citySlug": "malappuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-71",
    "slug": "kl-71",
    "rtoName": "Nilambur SRTO",
    "cityName": "Malappuram",
    "citySlug": "malappuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-84",
    "slug": "kl-84",
    "rtoName": "Kondotty SRTO",
    "cityName": "Malappuram",
    "citySlug": "malappuram",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-11",
    "slug": "kl-11",
    "rtoName": "Kozhikode Central RTO",
    "cityName": "Kozhikode",
    "citySlug": "kozhikode",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-18",
    "slug": "kl-18",
    "rtoName": "Vadakara RTO",
    "cityName": "Kozhikode",
    "citySlug": "kozhikode",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-56",
    "slug": "kl-56",
    "rtoName": "Koyilandy SRTO",
    "cityName": "Kozhikode",
    "citySlug": "kozhikode",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-57",
    "slug": "kl-57",
    "rtoName": "Koduvally SRTO",
    "cityName": "Kozhikode",
    "citySlug": "kozhikode",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-76",
    "slug": "kl-76",
    "rtoName": "Nanminda SRTO",
    "cityName": "Kozhikode",
    "citySlug": "kozhikode",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-77",
    "slug": "kl-77",
    "rtoName": "Perambra SRTO",
    "cityName": "Kozhikode",
    "citySlug": "kozhikode",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-85",
    "slug": "kl-85",
    "rtoName": "Feroke SRTO",
    "cityName": "Kozhikode",
    "citySlug": "kozhikode",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-12",
    "slug": "kl-12",
    "rtoName": "Wayanad (Kalpetta) RTO",
    "cityName": "Wayanad",
    "citySlug": "wayanad",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-72",
    "slug": "kl-72",
    "rtoName": "Mananthavady SRTO",
    "cityName": "Wayanad",
    "citySlug": "wayanad",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-73",
    "slug": "kl-73",
    "rtoName": "Sulthan Bathery SRTO",
    "cityName": "Wayanad",
    "citySlug": "wayanad",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-13",
    "slug": "kl-13",
    "rtoName": "Kannur Central RTO",
    "cityName": "Kannur",
    "citySlug": "kannur",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-58",
    "slug": "kl-58",
    "rtoName": "Thalassery SRTO",
    "cityName": "Kannur",
    "citySlug": "kannur",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-59",
    "slug": "kl-59",
    "rtoName": "Thaliparamba SRTO",
    "cityName": "Kannur",
    "citySlug": "kannur",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-78",
    "slug": "kl-78",
    "rtoName": "Iritty SRTO",
    "cityName": "Kannur",
    "citySlug": "kannur",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-86",
    "slug": "kl-86",
    "rtoName": "Payyanur SRTO",
    "cityName": "Kannur",
    "citySlug": "kannur",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-14",
    "slug": "kl-14",
    "rtoName": "Kasaragod Central RTO",
    "cityName": "Kasaragod",
    "citySlug": "kasaragod",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-60",
    "slug": "kl-60",
    "rtoName": "Kanhangad SRTO",
    "cityName": "Kasaragod",
    "citySlug": "kasaragod",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "KL-79",
    "slug": "kl-79",
    "rtoName": "Vellarikundu SRTO",
    "cityName": "Kasaragod",
    "citySlug": "kasaragod",
    "stateName": "Kerala",
    "stateSlug": "kerala",
    "stateCode": "KL",
    "isUt": false
  },
  {
    "code": "MP-04",
    "slug": "mp-04",
    "rtoName": "Bhopal Central RTO",
    "cityName": "Bhopal",
    "citySlug": "bhopal",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-05",
    "slug": "mp-05",
    "rtoName": "Narmadapuram (Hoshangabad) DTO",
    "cityName": "Hoshangabad",
    "citySlug": "hoshangabad",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-06",
    "slug": "mp-06",
    "rtoName": "Morena DTO",
    "cityName": "Morena",
    "citySlug": "morena",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-07",
    "slug": "mp-07",
    "rtoName": "Gwalior RTO",
    "cityName": "Gwalior",
    "citySlug": "gwalior",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-08",
    "slug": "mp-08",
    "rtoName": "Guna DTO",
    "cityName": "Guna",
    "citySlug": "guna",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-09",
    "slug": "mp-09",
    "rtoName": "Indore Central RTO",
    "cityName": "Indore",
    "citySlug": "indore",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-10",
    "slug": "mp-10",
    "rtoName": "Khargone (West Nimar) DTO",
    "cityName": "Khargone",
    "citySlug": "khargone",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-11",
    "slug": "mp-11",
    "rtoName": "Dhar DTO",
    "cityName": "Dhar",
    "citySlug": "dhar",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-12",
    "slug": "mp-12",
    "rtoName": "Khandwa (East Nimar) DTO",
    "cityName": "Khandwa",
    "citySlug": "khandwa",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-13",
    "slug": "mp-13",
    "rtoName": "Ujjain RTO",
    "cityName": "Ujjain",
    "citySlug": "ujjain",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-14",
    "slug": "mp-14",
    "rtoName": "Mandsaur DTO",
    "cityName": "Mandsaur",
    "citySlug": "mandsaur",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-15",
    "slug": "mp-15",
    "rtoName": "Sagar RTO",
    "cityName": "Sagar",
    "citySlug": "sagar",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-16",
    "slug": "mp-16",
    "rtoName": "Chhatarpur DTO",
    "cityName": "Chhatarpur",
    "citySlug": "chhatarpur",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-17",
    "slug": "mp-17",
    "rtoName": "Rewa RTO",
    "cityName": "Rewa",
    "citySlug": "rewa",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-18",
    "slug": "mp-18",
    "rtoName": "Shahdol DTO",
    "cityName": "Shahdol",
    "citySlug": "shahdol",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-19",
    "slug": "mp-19",
    "rtoName": "Satna Cement Hub DTO",
    "cityName": "Satna",
    "citySlug": "satna",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-20",
    "slug": "mp-20",
    "rtoName": "Jabalpur RTO",
    "cityName": "Jabalpur",
    "citySlug": "jabalpur",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-21",
    "slug": "mp-21",
    "rtoName": "Katni Mineral Hub DTO",
    "cityName": "Katni",
    "citySlug": "katni",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-22",
    "slug": "mp-22",
    "rtoName": "Seoni DTO",
    "cityName": "Seoni",
    "citySlug": "seoni",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-28",
    "slug": "mp-28",
    "rtoName": "Chhindwara DTO",
    "cityName": "Chhindwara",
    "citySlug": "chhindwara",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-30",
    "slug": "mp-30",
    "rtoName": "Bhind DTO",
    "cityName": "Bhind",
    "citySlug": "bhind",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-31",
    "slug": "mp-31",
    "rtoName": "Sheopur DTO",
    "cityName": "Sheopur",
    "citySlug": "sheopur",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-32",
    "slug": "mp-32",
    "rtoName": "Datia DTO",
    "cityName": "Datia",
    "citySlug": "datia",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-33",
    "slug": "mp-33",
    "rtoName": "Shivpuri DTO",
    "cityName": "Shivpuri",
    "citySlug": "shivpuri",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-34",
    "slug": "mp-34",
    "rtoName": "Damoh DTO",
    "cityName": "Damoh",
    "citySlug": "damoh",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-35",
    "slug": "mp-35",
    "rtoName": "Panna Mining Hub DTO",
    "cityName": "Panna",
    "citySlug": "panna",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-36",
    "slug": "mp-36",
    "rtoName": "Tikamgarh DTO",
    "cityName": "Tikamgarh",
    "citySlug": "tikamgarh",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-37",
    "slug": "mp-37",
    "rtoName": "Sehore DTO",
    "cityName": "Sehore",
    "citySlug": "sehore",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-38",
    "slug": "mp-38",
    "rtoName": "Raisen (Mandideep) DTO",
    "cityName": "Raisen",
    "citySlug": "raisen",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-39",
    "slug": "mp-39",
    "rtoName": "Rajgarh (Biaora) DTO",
    "cityName": "Rajgarh",
    "citySlug": "rajgarh",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-40",
    "slug": "mp-40",
    "rtoName": "Vidisha DTO",
    "cityName": "Vidisha",
    "citySlug": "vidisha",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-41",
    "slug": "mp-41",
    "rtoName": "Dewas DTO",
    "cityName": "Dewas",
    "citySlug": "dewas",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-42",
    "slug": "mp-42",
    "rtoName": "Shajapur DTO",
    "cityName": "Shajapur",
    "citySlug": "shajapur",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-43",
    "slug": "mp-43",
    "rtoName": "Ratlam DTO",
    "cityName": "Ratlam",
    "citySlug": "ratlam",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-44",
    "slug": "mp-44",
    "rtoName": "Neemuch DTO",
    "cityName": "Neemuch",
    "citySlug": "neemuch",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-45",
    "slug": "mp-45",
    "rtoName": "Jhabua DTO",
    "cityName": "Jhabua",
    "citySlug": "jhabua",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-46",
    "slug": "mp-46",
    "rtoName": "Barwani DTO",
    "cityName": "Barwani",
    "citySlug": "barwani",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-47",
    "slug": "mp-47",
    "rtoName": "Harda DTO",
    "cityName": "Harda",
    "citySlug": "harda",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-48",
    "slug": "mp-48",
    "rtoName": "Betul DTO",
    "cityName": "Betul",
    "citySlug": "betul",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-49",
    "slug": "mp-49",
    "rtoName": "Narsinghpur DTO",
    "cityName": "Narsinghpur",
    "citySlug": "narsinghpur",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-50",
    "slug": "mp-50",
    "rtoName": "Balaghat Manganese Hub DTO",
    "cityName": "Balaghat",
    "citySlug": "balaghat",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-51",
    "slug": "mp-51",
    "rtoName": "Mandla DTO",
    "cityName": "Mandla",
    "citySlug": "mandla",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-52",
    "slug": "mp-52",
    "rtoName": "Dindori DTO",
    "cityName": "Dindori",
    "citySlug": "dindori",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-53",
    "slug": "mp-53",
    "rtoName": "Singrauli Energy Hub DTO",
    "cityName": "Singrauli",
    "citySlug": "singrauli",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-66",
    "slug": "mp-66",
    "rtoName": "Singrauli Rural DTO",
    "cityName": "Singrauli",
    "citySlug": "singrauli",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-54",
    "slug": "mp-54",
    "rtoName": "Umaria DTO",
    "cityName": "Umaria",
    "citySlug": "umaria",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-55",
    "slug": "mp-55",
    "rtoName": "Anuppur DTO",
    "cityName": "Anuppur",
    "citySlug": "anuppur",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-65",
    "slug": "mp-65",
    "rtoName": "Alirajpur DTO",
    "cityName": "Alirajpur",
    "citySlug": "alirajpur",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-67",
    "slug": "mp-67",
    "rtoName": "Ashoknagar DTO",
    "cityName": "Ashoknagar",
    "citySlug": "ashoknagar",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-68",
    "slug": "mp-68",
    "rtoName": "Burhanpur DTO",
    "cityName": "Burhanpur",
    "citySlug": "burhanpur",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-69",
    "slug": "mp-69",
    "rtoName": "Agar Malwa DTO",
    "cityName": "Agar Malwa",
    "citySlug": "agar-malwa",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-70",
    "slug": "mp-70",
    "rtoName": "Niwari DTO",
    "cityName": "Niwari",
    "citySlug": "niwari",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-71",
    "slug": "mp-71",
    "rtoName": "Maihar DTO",
    "cityName": "Maihar",
    "citySlug": "maihar",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-72",
    "slug": "mp-72",
    "rtoName": "Mauganj DTO",
    "cityName": "Mauganj",
    "citySlug": "mauganj",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-73",
    "slug": "mp-73",
    "rtoName": "Pandhurna DTO",
    "cityName": "Pandhurna",
    "citySlug": "pandhurna",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MP-74",
    "slug": "mp-74",
    "rtoName": "Nagda Industrial DTO",
    "cityName": "Nagda",
    "citySlug": "nagda",
    "stateName": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "stateCode": "MP",
    "isUt": false
  },
  {
    "code": "MH-01",
    "slug": "mh-01",
    "rtoName": "Mumbai South (Tardeo) RTO",
    "cityName": "Mumbai",
    "citySlug": "mumbai",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-02",
    "slug": "mh-02",
    "rtoName": "Mumbai West (Andheri) RTO",
    "cityName": "Mumbai",
    "citySlug": "mumbai",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-03",
    "slug": "mh-03",
    "rtoName": "Mumbai East (Wadala) RTO",
    "cityName": "Mumbai",
    "citySlug": "mumbai",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-47",
    "slug": "mh-47",
    "rtoName": "Mumbai North (Borivali) RTO",
    "cityName": "Mumbai",
    "citySlug": "mumbai",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-04",
    "slug": "mh-04",
    "rtoName": "Thane Central RTO",
    "cityName": "Thane",
    "citySlug": "thane",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-05",
    "slug": "mh-05",
    "rtoName": "Kalyan RTO",
    "cityName": "Thane",
    "citySlug": "thane",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-06",
    "slug": "mh-06",
    "rtoName": "Raigad (Pen) RTO",
    "cityName": "Raigad",
    "citySlug": "raigad",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-46",
    "slug": "mh-46",
    "rtoName": "Navi Mumbai (Panvel) RTO",
    "cityName": "Raigad",
    "citySlug": "raigad",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-07",
    "slug": "mh-07",
    "rtoName": "Sindhudurg (Oros) RTO",
    "cityName": "Sindhudurg",
    "citySlug": "sindhudurg",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-08",
    "slug": "mh-08",
    "rtoName": "Ratnagiri RTO",
    "cityName": "Ratnagiri",
    "citySlug": "ratnagiri",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-09",
    "slug": "mh-09",
    "rtoName": "Kolhapur RTO",
    "cityName": "Kolhapur",
    "citySlug": "kolhapur",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-51",
    "slug": "mh-51",
    "rtoName": "Ichalkaranji RTO",
    "cityName": "Kolhapur",
    "citySlug": "kolhapur",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-10",
    "slug": "mh-10",
    "rtoName": "Sangli (Miraj) RTO",
    "cityName": "Sangli",
    "citySlug": "sangli",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-11",
    "slug": "mh-11",
    "rtoName": "Satara RTO",
    "cityName": "Satara",
    "citySlug": "satara",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-50",
    "slug": "mh-50",
    "rtoName": "Karad RTO",
    "cityName": "Satara",
    "citySlug": "satara",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-53",
    "slug": "mh-53",
    "rtoName": "Phaltan RTO",
    "cityName": "Satara",
    "citySlug": "satara",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-12",
    "slug": "mh-12",
    "rtoName": "Pune Central RTO",
    "cityName": "Pune",
    "citySlug": "pune",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-14",
    "slug": "mh-14",
    "rtoName": "Pimpri-Chinchwad (PCMC) RTO",
    "cityName": "Pune",
    "citySlug": "pune",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-42",
    "slug": "mh-42",
    "rtoName": "Baramati RTO",
    "cityName": "Pune",
    "citySlug": "pune",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-13",
    "slug": "mh-13",
    "rtoName": "Solapur Central RTO",
    "cityName": "Solapur",
    "citySlug": "solapur",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-45",
    "slug": "mh-45",
    "rtoName": "Akluj RTO",
    "cityName": "Solapur",
    "citySlug": "solapur",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-15",
    "slug": "mh-15",
    "rtoName": "Nashik Central RTO",
    "cityName": "Nashik",
    "citySlug": "nashik",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-41",
    "slug": "mh-41",
    "rtoName": "Malegaon RTO",
    "cityName": "Nashik",
    "citySlug": "nashik",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-16",
    "slug": "mh-16",
    "rtoName": "Ahmednagar RTO",
    "cityName": "Ahmednagar",
    "citySlug": "ahmednagar",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-17",
    "slug": "mh-17",
    "rtoName": "Shrirampur RTO",
    "cityName": "Ahmednagar",
    "citySlug": "ahmednagar",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-18",
    "slug": "mh-18",
    "rtoName": "Dhule RTO",
    "cityName": "Dhule",
    "citySlug": "dhule",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-19",
    "slug": "mh-19",
    "rtoName": "Jalgaon RTO",
    "cityName": "Jalgaon",
    "citySlug": "jalgaon",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-52",
    "slug": "mh-52",
    "rtoName": "Chalisgaon RTO",
    "cityName": "Jalgaon",
    "citySlug": "jalgaon",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-20",
    "slug": "mh-20",
    "rtoName": "Chhatrapati Sambhajinagar (Aurangabad) RTO",
    "cityName": "Aurangabad",
    "citySlug": "aurangabad",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-21",
    "slug": "mh-21",
    "rtoName": "Jalna RTO",
    "cityName": "Jalna",
    "citySlug": "jalna",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-22",
    "slug": "mh-22",
    "rtoName": "Parbhani RTO",
    "cityName": "Parbhani",
    "citySlug": "parbhani",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-23",
    "slug": "mh-23",
    "rtoName": "Beed RTO",
    "cityName": "Beed",
    "citySlug": "beed",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-44",
    "slug": "mh-44",
    "rtoName": "Ambejogai RTO",
    "cityName": "Beed",
    "citySlug": "beed",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-24",
    "slug": "mh-24",
    "rtoName": "Latur RTO",
    "cityName": "Latur",
    "citySlug": "latur",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-55",
    "slug": "mh-55",
    "rtoName": "Udgir RTO",
    "cityName": "Latur",
    "citySlug": "latur",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-25",
    "slug": "mh-25",
    "rtoName": "Dharashiv (Osmanabad) RTO",
    "cityName": "Dharashiv",
    "citySlug": "dharashiv",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-26",
    "slug": "mh-26",
    "rtoName": "Nanded RTO",
    "cityName": "Nanded",
    "citySlug": "nanded",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-27",
    "slug": "mh-27",
    "rtoName": "Amravati RTO",
    "cityName": "Amravati",
    "citySlug": "amravati",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-28",
    "slug": "mh-28",
    "rtoName": "Buldhana RTO",
    "cityName": "Buldhana",
    "citySlug": "buldhana",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-29",
    "slug": "mh-29",
    "rtoName": "Yavatmal RTO",
    "cityName": "Yavatmal",
    "citySlug": "yavatmal",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-30",
    "slug": "mh-30",
    "rtoName": "Akola RTO",
    "cityName": "Akola",
    "citySlug": "akola",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-31",
    "slug": "mh-31",
    "rtoName": "Nagpur City (Civil Lines) RTO",
    "cityName": "Nagpur",
    "citySlug": "nagpur",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-40",
    "slug": "mh-40",
    "rtoName": "Nagpur Rural RTO",
    "cityName": "Nagpur",
    "citySlug": "nagpur",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-49",
    "slug": "mh-49",
    "rtoName": "Nagpur East RTO",
    "cityName": "Nagpur",
    "citySlug": "nagpur",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-32",
    "slug": "mh-32",
    "rtoName": "Wardha RTO",
    "cityName": "Wardha",
    "citySlug": "wardha",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-33",
    "slug": "mh-33",
    "rtoName": "Gadchiroli RTO",
    "cityName": "Gadchiroli",
    "citySlug": "gadchiroli",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-34",
    "slug": "mh-34",
    "rtoName": "Chandrapur Mineral Hub RTO",
    "cityName": "Chandrapur",
    "citySlug": "chandrapur",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-54",
    "slug": "mh-54",
    "rtoName": "Bhadravati RTO",
    "cityName": "Chandrapur",
    "citySlug": "chandrapur",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-35",
    "slug": "mh-35",
    "rtoName": "Gondia RTO",
    "cityName": "Gondia",
    "citySlug": "gondia",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-36",
    "slug": "mh-36",
    "rtoName": "Bhandara RTO",
    "cityName": "Bhandara",
    "citySlug": "bhandara",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-37",
    "slug": "mh-37",
    "rtoName": "Washim RTO",
    "cityName": "Washim",
    "citySlug": "washim",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-38",
    "slug": "mh-38",
    "rtoName": "Hingoli RTO",
    "cityName": "Hingoli",
    "citySlug": "hingoli",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-39",
    "slug": "mh-39",
    "rtoName": "Nandurbar RTO",
    "cityName": "Nandurbar",
    "citySlug": "nandurbar",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-43",
    "slug": "mh-43",
    "rtoName": "Navi Mumbai (Vashi) RTO",
    "cityName": "Navi Mumbai",
    "citySlug": "navi-mumbai",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MH-48",
    "slug": "mh-48",
    "rtoName": "Vasai-Virar (Palghar) RTO",
    "cityName": "Palghar",
    "citySlug": "palghar",
    "stateName": "Maharashtra",
    "stateSlug": "maharashtra",
    "stateCode": "MH",
    "isUt": false
  },
  {
    "code": "MN-01",
    "slug": "mn-01",
    "rtoName": "Imphal West DTO",
    "cityName": "Imphal West",
    "citySlug": "imphal-west",
    "stateName": "Manipur",
    "stateSlug": "manipur",
    "stateCode": "MN",
    "isUt": false
  },
  {
    "code": "MN-02",
    "slug": "mn-02",
    "rtoName": "Churachandpur DTO",
    "cityName": "Churachandpur",
    "citySlug": "churachandpur",
    "stateName": "Manipur",
    "stateSlug": "manipur",
    "stateCode": "MN",
    "isUt": false
  },
  {
    "code": "MN-03",
    "slug": "mn-03",
    "rtoName": "Kangpokpi DTO",
    "cityName": "Kangpokpi",
    "citySlug": "kangpokpi",
    "stateName": "Manipur",
    "stateSlug": "manipur",
    "stateCode": "MN",
    "isUt": false
  },
  {
    "code": "MN-04",
    "slug": "mn-04",
    "rtoName": "Thoubal DTO",
    "cityName": "Thoubal",
    "citySlug": "thoubal",
    "stateName": "Manipur",
    "stateSlug": "manipur",
    "stateCode": "MN",
    "isUt": false
  },
  {
    "code": "MN-05",
    "slug": "mn-05",
    "rtoName": "Bishnupur DTO",
    "cityName": "Bishnupur",
    "citySlug": "bishnupur",
    "stateName": "Manipur",
    "stateSlug": "manipur",
    "stateCode": "MN",
    "isUt": false
  },
  {
    "code": "MN-06",
    "slug": "mn-06",
    "rtoName": "Imphal East DTO",
    "cityName": "Imphal East",
    "citySlug": "imphal-east",
    "stateName": "Manipur",
    "stateSlug": "manipur",
    "stateCode": "MN",
    "isUt": false
  },
  {
    "code": "MN-07",
    "slug": "mn-07",
    "rtoName": "Ukhrul DTO",
    "cityName": "Ukhrul",
    "citySlug": "ukhrul",
    "stateName": "Manipur",
    "stateSlug": "manipur",
    "stateCode": "MN",
    "isUt": false
  },
  {
    "code": "ML-04",
    "slug": "ml-04",
    "rtoName": "Jowai (West Jaintia Hills) DTO",
    "cityName": "Jowai",
    "citySlug": "jowai",
    "stateName": "Meghalaya",
    "stateSlug": "meghalaya",
    "stateCode": "ML",
    "isUt": false
  },
  {
    "code": "ML-05",
    "slug": "ml-05",
    "rtoName": "Shillong (East Khasi Hills) DTO",
    "cityName": "Shillong",
    "citySlug": "shillong",
    "stateName": "Meghalaya",
    "stateSlug": "meghalaya",
    "stateCode": "ML",
    "isUt": false
  },
  {
    "code": "ML-06",
    "slug": "ml-06",
    "rtoName": "Nongstoin (West Khasi Hills) DTO",
    "cityName": "Nongstoin",
    "citySlug": "nongstoin",
    "stateName": "Meghalaya",
    "stateSlug": "meghalaya",
    "stateCode": "ML",
    "isUt": false
  },
  {
    "code": "ML-07",
    "slug": "ml-07",
    "rtoName": "Williamnagar (East Garo Hills) DTO",
    "cityName": "Williamnagar",
    "citySlug": "williamnagar",
    "stateName": "Meghalaya",
    "stateSlug": "meghalaya",
    "stateCode": "ML",
    "isUt": false
  },
  {
    "code": "ML-08",
    "slug": "ml-08",
    "rtoName": "Tura (West Garo Hills) DTO",
    "cityName": "Tura",
    "citySlug": "tura",
    "stateName": "Meghalaya",
    "stateSlug": "meghalaya",
    "stateCode": "ML",
    "isUt": false
  },
  {
    "code": "ML-09",
    "slug": "ml-09",
    "rtoName": "Baghmara (South Garo Hills) DTO",
    "cityName": "Baghmara",
    "citySlug": "baghmara",
    "stateName": "Meghalaya",
    "stateSlug": "meghalaya",
    "stateCode": "ML",
    "isUt": false
  },
  {
    "code": "ML-10",
    "slug": "ml-10",
    "rtoName": "Nongpoh (Ri-Bhoi) DTO",
    "cityName": "Nongpoh",
    "citySlug": "nongpoh",
    "stateName": "Meghalaya",
    "stateSlug": "meghalaya",
    "stateCode": "ML",
    "isUt": false
  },
  {
    "code": "MZ-01",
    "slug": "mz-01",
    "rtoName": "Aizawl DTO",
    "cityName": "Aizawl",
    "citySlug": "aizawl",
    "stateName": "Mizoram",
    "stateSlug": "mizoram",
    "stateCode": "MZ",
    "isUt": false
  },
  {
    "code": "MZ-02",
    "slug": "mz-02",
    "rtoName": "Lunglei DTO",
    "cityName": "Lunglei",
    "citySlug": "lunglei",
    "stateName": "Mizoram",
    "stateSlug": "mizoram",
    "stateCode": "MZ",
    "isUt": false
  },
  {
    "code": "MZ-03",
    "slug": "mz-03",
    "rtoName": "Saiha DTO",
    "cityName": "Saiha",
    "citySlug": "saiha",
    "stateName": "Mizoram",
    "stateSlug": "mizoram",
    "stateCode": "MZ",
    "isUt": false
  },
  {
    "code": "MZ-04",
    "slug": "mz-04",
    "rtoName": "Champhai DTO",
    "cityName": "Champhai",
    "citySlug": "champhai",
    "stateName": "Mizoram",
    "stateSlug": "mizoram",
    "stateCode": "MZ",
    "isUt": false
  },
  {
    "code": "MZ-05",
    "slug": "mz-05",
    "rtoName": "Kolasib DTO",
    "cityName": "Kolasib",
    "citySlug": "kolasib",
    "stateName": "Mizoram",
    "stateSlug": "mizoram",
    "stateCode": "MZ",
    "isUt": false
  },
  {
    "code": "MZ-06",
    "slug": "mz-06",
    "rtoName": "Serchhip DTO",
    "cityName": "Serchhip",
    "citySlug": "serchhip",
    "stateName": "Mizoram",
    "stateSlug": "mizoram",
    "stateCode": "MZ",
    "isUt": false
  },
  {
    "code": "MZ-07",
    "slug": "mz-07",
    "rtoName": "Lawngtlai DTO",
    "cityName": "Lawngtlai",
    "citySlug": "lawngtlai",
    "stateName": "Mizoram",
    "stateSlug": "mizoram",
    "stateCode": "MZ",
    "isUt": false
  },
  {
    "code": "MZ-08",
    "slug": "mz-08",
    "rtoName": "Mamit DTO",
    "cityName": "Mamit",
    "citySlug": "mamit",
    "stateName": "Mizoram",
    "stateSlug": "mizoram",
    "stateCode": "MZ",
    "isUt": false
  },
  {
    "code": "NL-01",
    "slug": "nl-01",
    "rtoName": "Kohima DTO",
    "cityName": "Kohima",
    "citySlug": "kohima",
    "stateName": "Nagaland",
    "stateSlug": "nagaland",
    "stateCode": "NL",
    "isUt": false
  },
  {
    "code": "NL-02",
    "slug": "nl-02",
    "rtoName": "Mokokchung DTO",
    "cityName": "Mokokchung",
    "citySlug": "mokokchung",
    "stateName": "Nagaland",
    "stateSlug": "nagaland",
    "stateCode": "NL",
    "isUt": false
  },
  {
    "code": "NL-03",
    "slug": "nl-03",
    "rtoName": "Tuensang DTO",
    "cityName": "Tuensang",
    "citySlug": "tuensang",
    "stateName": "Nagaland",
    "stateSlug": "nagaland",
    "stateCode": "NL",
    "isUt": false
  },
  {
    "code": "NL-04",
    "slug": "nl-04",
    "rtoName": "Mon DTO",
    "cityName": "Mon",
    "citySlug": "mon",
    "stateName": "Nagaland",
    "stateSlug": "nagaland",
    "stateCode": "NL",
    "isUt": false
  },
  {
    "code": "NL-05",
    "slug": "nl-05",
    "rtoName": "Wokha DTO",
    "cityName": "Wokha",
    "citySlug": "wokha",
    "stateName": "Nagaland",
    "stateSlug": "nagaland",
    "stateCode": "NL",
    "isUt": false
  },
  {
    "code": "NL-06",
    "slug": "nl-06",
    "rtoName": "Zunheboto DTO",
    "cityName": "Zunheboto",
    "citySlug": "zunheboto",
    "stateName": "Nagaland",
    "stateSlug": "nagaland",
    "stateCode": "NL",
    "isUt": false
  },
  {
    "code": "NL-07",
    "slug": "nl-07",
    "rtoName": "Dimapur Commercial DTO",
    "cityName": "Dimapur",
    "citySlug": "dimapur",
    "stateName": "Nagaland",
    "stateSlug": "nagaland",
    "stateCode": "NL",
    "isUt": false
  },
  {
    "code": "NL-08",
    "slug": "nl-08",
    "rtoName": "Phek DTO",
    "cityName": "Phek",
    "citySlug": "phek",
    "stateName": "Nagaland",
    "stateSlug": "nagaland",
    "stateCode": "NL",
    "isUt": false
  },
  {
    "code": "OD-01",
    "slug": "od-01",
    "rtoName": "Balasore RTO",
    "cityName": "Balasore",
    "citySlug": "balasore",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-02",
    "slug": "od-02",
    "rtoName": "Bhubaneswar-I RTO",
    "cityName": "Bhubaneswar",
    "citySlug": "bhubaneswar",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-33",
    "slug": "od-33",
    "rtoName": "Bhubaneswar-II RTO",
    "cityName": "Bhubaneswar",
    "citySlug": "bhubaneswar",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-03",
    "slug": "od-03",
    "rtoName": "Sambalpur RTO",
    "cityName": "Sambalpur",
    "citySlug": "sambalpur",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-04",
    "slug": "od-04",
    "rtoName": "Berhampur (Ganjam) RTO",
    "cityName": "Ganjam",
    "citySlug": "ganjam",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-07",
    "slug": "od-07",
    "rtoName": "Ganjam RTO",
    "cityName": "Ganjam",
    "citySlug": "ganjam",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-31",
    "slug": "od-31",
    "rtoName": "Bhanjanagar RTO",
    "cityName": "Ganjam",
    "citySlug": "ganjam",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-05",
    "slug": "od-05",
    "rtoName": "Cuttack RTO",
    "cityName": "Cuttack",
    "citySlug": "cuttack",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-06",
    "slug": "od-06",
    "rtoName": "Baripada (Mayurbhanj) RTO",
    "cityName": "Mayurbhanj",
    "citySlug": "mayurbhanj",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-08",
    "slug": "od-08",
    "rtoName": "Bhawanipatna (Kalahandi) RTO",
    "cityName": "Kalahandi",
    "citySlug": "kalahandi",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-09",
    "slug": "od-09",
    "rtoName": "Dhenkanal RTO",
    "cityName": "Dhenkanal",
    "citySlug": "dhenkanal",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-10",
    "slug": "od-10",
    "rtoName": "Koraput RTO",
    "cityName": "Koraput",
    "citySlug": "koraput",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-11",
    "slug": "od-11",
    "rtoName": "Rourkela Steel Hub RTO",
    "cityName": "Rourkela",
    "citySlug": "rourkela",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-12",
    "slug": "od-12",
    "rtoName": "Puri RTO",
    "cityName": "Puri",
    "citySlug": "puri",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-13",
    "slug": "od-13",
    "rtoName": "Keonjhar Iron Ore Mining Hub RTO",
    "cityName": "Keonjhar",
    "citySlug": "keonjhar",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-14",
    "slug": "od-14",
    "rtoName": "Angul Coal Mining RTO",
    "cityName": "Angul",
    "citySlug": "angul",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-35",
    "slug": "od-35",
    "rtoName": "Talcher Coal Belt RTO",
    "cityName": "Angul",
    "citySlug": "angul",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-15",
    "slug": "od-15",
    "rtoName": "Sonepur (Subarnapur) RTO",
    "cityName": "Subarnapur",
    "citySlug": "subarnapur",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-16",
    "slug": "od-16",
    "rtoName": "Sundargarh RTO",
    "cityName": "Sundargarh",
    "citySlug": "sundargarh",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-17",
    "slug": "od-17",
    "rtoName": "Bargarh RTO",
    "cityName": "Bargarh",
    "citySlug": "bargarh",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-18",
    "slug": "od-18",
    "rtoName": "Rayagada RTO",
    "cityName": "Rayagada",
    "citySlug": "rayagada",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-19",
    "slug": "od-19",
    "rtoName": "Jagatsinghpur (Paradeep Port) RTO",
    "cityName": "Jagatsinghpur",
    "citySlug": "jagatsinghpur",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-20",
    "slug": "od-20",
    "rtoName": "Kendrapara RTO",
    "cityName": "Kendrapara",
    "citySlug": "kendrapara",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-21",
    "slug": "od-21",
    "rtoName": "Jajpur RTO",
    "cityName": "Jajpur",
    "citySlug": "jajpur",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-34",
    "slug": "od-34",
    "rtoName": "Jajpur Road (Kalinganagar) RTO",
    "cityName": "Jajpur",
    "citySlug": "jajpur",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-22",
    "slug": "od-22",
    "rtoName": "Bhadrak RTO",
    "cityName": "Bhadrak",
    "citySlug": "bhadrak",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-23",
    "slug": "od-23",
    "rtoName": "Jharsuguda Industrial RTO",
    "cityName": "Jharsuguda",
    "citySlug": "jharsuguda",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-24",
    "slug": "od-24",
    "rtoName": "Nabarangpur RTO",
    "cityName": "Nabarangpur",
    "citySlug": "nabarangpur",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-25",
    "slug": "od-25",
    "rtoName": "Nayagarh RTO",
    "cityName": "Nayagarh",
    "citySlug": "nayagarh",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-26",
    "slug": "od-26",
    "rtoName": "Nuapada RTO",
    "cityName": "Nuapada",
    "citySlug": "nuapada",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-27",
    "slug": "od-27",
    "rtoName": "Boudh RTO",
    "cityName": "Boudh",
    "citySlug": "boudh",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-28",
    "slug": "od-28",
    "rtoName": "Deogarh RTO",
    "cityName": "Deogarh",
    "citySlug": "deogarh",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-29",
    "slug": "od-29",
    "rtoName": "Malkangiri RTO",
    "cityName": "Malkangiri",
    "citySlug": "malkangiri",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "OD-30",
    "slug": "od-30",
    "rtoName": "Paralakhemundi (Gajapati) RTO",
    "cityName": "Gajapati",
    "citySlug": "gajapati",
    "stateName": "Odisha",
    "stateSlug": "odisha",
    "stateCode": "OD",
    "isUt": false
  },
  {
    "code": "PB-02",
    "slug": "pb-02",
    "rtoName": "Amritsar Urban DTO",
    "cityName": "Amritsar",
    "citySlug": "amritsar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-14",
    "slug": "pb-14",
    "rtoName": "Ajnala SDM",
    "cityName": "Amritsar",
    "citySlug": "amritsar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-17",
    "slug": "pb-17",
    "rtoName": "Baba Bakala SDM",
    "cityName": "Amritsar",
    "citySlug": "amritsar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-81",
    "slug": "pb-81",
    "rtoName": "Majitha SDM",
    "cityName": "Amritsar",
    "citySlug": "amritsar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-92",
    "slug": "pb-92",
    "rtoName": "Amritsar Rural DTO",
    "cityName": "Amritsar",
    "citySlug": "amritsar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-03",
    "slug": "pb-03",
    "rtoName": "Bathinda DTO",
    "cityName": "Bathinda",
    "citySlug": "bathinda",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-40",
    "slug": "pb-40",
    "rtoName": "Rampura Phul SDM",
    "cityName": "Bathinda",
    "citySlug": "bathinda",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-45",
    "slug": "pb-45",
    "rtoName": "Talwandi Sabo SDM",
    "cityName": "Bathinda",
    "citySlug": "bathinda",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-80",
    "slug": "pb-80",
    "rtoName": "Maur SDM",
    "cityName": "Bathinda",
    "citySlug": "bathinda",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-04",
    "slug": "pb-04",
    "rtoName": "Faridkot DTO",
    "cityName": "Faridkot",
    "citySlug": "faridkot",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-51",
    "slug": "pb-51",
    "rtoName": "Jaitu SDM",
    "cityName": "Faridkot",
    "citySlug": "faridkot",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-79",
    "slug": "pb-79",
    "rtoName": "Kotkapura SDM",
    "cityName": "Faridkot",
    "citySlug": "faridkot",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-05",
    "slug": "pb-05",
    "rtoName": "Ferozepur DTO",
    "cityName": "Ferozepur",
    "citySlug": "ferozepur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-47",
    "slug": "pb-47",
    "rtoName": "Zira SDM",
    "cityName": "Ferozepur",
    "citySlug": "ferozepur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-77",
    "slug": "pb-77",
    "rtoName": "Guru Har Sahai SDM",
    "cityName": "Ferozepur",
    "citySlug": "ferozepur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-06",
    "slug": "pb-06",
    "rtoName": "Gurdaspur DTO",
    "cityName": "Gurdaspur",
    "citySlug": "gurdaspur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-18",
    "slug": "pb-18",
    "rtoName": "Batala SDM",
    "cityName": "Gurdaspur",
    "citySlug": "gurdaspur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-58",
    "slug": "pb-58",
    "rtoName": "Dera Baba Nanak SDM",
    "cityName": "Gurdaspur",
    "citySlug": "gurdaspur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-82",
    "slug": "pb-82",
    "rtoName": "Dinanagar SDM",
    "cityName": "Gurdaspur",
    "citySlug": "gurdaspur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-83",
    "slug": "pb-83",
    "rtoName": "Kalanaur SDM",
    "cityName": "Gurdaspur",
    "citySlug": "gurdaspur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-07",
    "slug": "pb-07",
    "rtoName": "Hoshiarpur DTO",
    "cityName": "Hoshiarpur",
    "citySlug": "hoshiarpur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-21",
    "slug": "pb-21",
    "rtoName": "Dasuya SDM",
    "cityName": "Hoshiarpur",
    "citySlug": "hoshiarpur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-24",
    "slug": "pb-24",
    "rtoName": "Garhshankar SDM",
    "cityName": "Hoshiarpur",
    "citySlug": "hoshiarpur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-54",
    "slug": "pb-54",
    "rtoName": "Mukerian SDM",
    "cityName": "Hoshiarpur",
    "citySlug": "hoshiarpur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-08",
    "slug": "pb-08",
    "rtoName": "Jalandhar Central DTO",
    "cityName": "Jalandhar",
    "citySlug": "jalandhar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-33",
    "slug": "pb-33",
    "rtoName": "Nakodar SDM",
    "cityName": "Jalandhar",
    "citySlug": "jalandhar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-37",
    "slug": "pb-37",
    "rtoName": "Phillaur SDM",
    "cityName": "Jalandhar",
    "citySlug": "jalandhar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-62",
    "slug": "pb-62",
    "rtoName": "Jalandhar Rural DTO",
    "cityName": "Jalandhar",
    "citySlug": "jalandhar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-67",
    "slug": "pb-67",
    "rtoName": "Shahkot SDM",
    "cityName": "Jalandhar",
    "citySlug": "jalandhar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-09",
    "slug": "pb-09",
    "rtoName": "Kapurthala DTO",
    "cityName": "Kapurthala",
    "citySlug": "kapurthala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-36",
    "slug": "pb-36",
    "rtoName": "Phagwara SDM",
    "cityName": "Kapurthala",
    "citySlug": "kapurthala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-41",
    "slug": "pb-41",
    "rtoName": "Sultanpur Lodhi SDM",
    "cityName": "Kapurthala",
    "citySlug": "kapurthala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-57",
    "slug": "pb-57",
    "rtoName": "Bholath SDM",
    "cityName": "Kapurthala",
    "citySlug": "kapurthala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-10",
    "slug": "pb-10",
    "rtoName": "Ludhiana Central DTO",
    "cityName": "Ludhiana",
    "citySlug": "ludhiana",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-25",
    "slug": "pb-25",
    "rtoName": "Jagraon SDM",
    "cityName": "Ludhiana",
    "citySlug": "ludhiana",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-26",
    "slug": "pb-26",
    "rtoName": "Khanna SDM",
    "cityName": "Ludhiana",
    "citySlug": "ludhiana",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-43",
    "slug": "pb-43",
    "rtoName": "Samrala SDM",
    "cityName": "Ludhiana",
    "citySlug": "ludhiana",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-55",
    "slug": "pb-55",
    "rtoName": "Payal SDM",
    "cityName": "Ludhiana",
    "citySlug": "ludhiana",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-56",
    "slug": "pb-56",
    "rtoName": "Raikot SDM",
    "cityName": "Ludhiana",
    "citySlug": "ludhiana",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-91",
    "slug": "pb-91",
    "rtoName": "Ludhiana West DTO",
    "cityName": "Ludhiana",
    "citySlug": "ludhiana",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-11",
    "slug": "pb-11",
    "rtoName": "Patiala DTO",
    "cityName": "Patiala",
    "citySlug": "patiala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-34",
    "slug": "pb-34",
    "rtoName": "Nabha SDM",
    "cityName": "Patiala",
    "citySlug": "patiala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-39",
    "slug": "pb-39",
    "rtoName": "Rajpura SDM",
    "cityName": "Patiala",
    "citySlug": "patiala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-42",
    "slug": "pb-42",
    "rtoName": "Samana SDM",
    "cityName": "Patiala",
    "citySlug": "patiala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-72",
    "slug": "pb-72",
    "rtoName": "Patran SDM",
    "cityName": "Patiala",
    "citySlug": "patiala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-88",
    "slug": "pb-88",
    "rtoName": "Dudhan Sadhan SDM",
    "cityName": "Patiala",
    "citySlug": "patiala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-12",
    "slug": "pb-12",
    "rtoName": "Rupnagar (Ropar) DTO",
    "cityName": "Rupnagar",
    "citySlug": "rupnagar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-16",
    "slug": "pb-16",
    "rtoName": "Anandpur Sahib SDM",
    "cityName": "Rupnagar",
    "citySlug": "rupnagar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-71",
    "slug": "pb-71",
    "rtoName": "Chamkaur Sahib SDM",
    "cityName": "Rupnagar",
    "citySlug": "rupnagar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-85",
    "slug": "pb-85",
    "rtoName": "Morinda SDM",
    "cityName": "Rupnagar",
    "citySlug": "rupnagar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-13",
    "slug": "pb-13",
    "rtoName": "Sangrur DTO",
    "cityName": "Sangrur",
    "citySlug": "sangrur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-44",
    "slug": "pb-44",
    "rtoName": "Sunam SDM",
    "cityName": "Sangrur",
    "citySlug": "sangrur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-59",
    "slug": "pb-59",
    "rtoName": "Dhuri SDM",
    "cityName": "Sangrur",
    "citySlug": "sangrur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-63",
    "slug": "pb-63",
    "rtoName": "Moonak SDM",
    "cityName": "Sangrur",
    "citySlug": "sangrur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-75",
    "slug": "pb-75",
    "rtoName": "Lehragaga SDM",
    "cityName": "Sangrur",
    "citySlug": "sangrur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-87",
    "slug": "pb-87",
    "rtoName": "Dirba SDM",
    "cityName": "Sangrur",
    "citySlug": "sangrur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-89",
    "slug": "pb-89",
    "rtoName": "Bhawanigarh SDM",
    "cityName": "Sangrur",
    "citySlug": "sangrur",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-19",
    "slug": "pb-19",
    "rtoName": "Barnala DTO",
    "cityName": "Barnala",
    "citySlug": "barnala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-73",
    "slug": "pb-73",
    "rtoName": "Tapa Mandi SDM",
    "cityName": "Barnala",
    "citySlug": "barnala",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-20",
    "slug": "pb-20",
    "rtoName": "Balachaur SDM",
    "cityName": "Shaheed Bhagat Singh Nagar",
    "citySlug": "shaheed-bhagat-singh-nagar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-32",
    "slug": "pb-32",
    "rtoName": "Nawanshahr DTO",
    "cityName": "Shaheed Bhagat Singh Nagar",
    "citySlug": "shaheed-bhagat-singh-nagar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-78",
    "slug": "pb-78",
    "rtoName": "Banga SDM",
    "cityName": "Shaheed Bhagat Singh Nagar",
    "citySlug": "shaheed-bhagat-singh-nagar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-15",
    "slug": "pb-15",
    "rtoName": "Abohar Commercial SDM",
    "cityName": "Fazilka",
    "citySlug": "fazilka",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-22",
    "slug": "pb-22",
    "rtoName": "Fazilka DTO",
    "cityName": "Fazilka",
    "citySlug": "fazilka",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-61",
    "slug": "pb-61",
    "rtoName": "Jalalabad SDM",
    "cityName": "Fazilka",
    "citySlug": "fazilka",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-23",
    "slug": "pb-23",
    "rtoName": "Fatehgarh Sahib DTO",
    "cityName": "Fatehgarh Sahib",
    "citySlug": "fatehgarh-sahib",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-48",
    "slug": "pb-48",
    "rtoName": "Amloh SDM",
    "cityName": "Fatehgarh Sahib",
    "citySlug": "fatehgarh-sahib",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-49",
    "slug": "pb-49",
    "rtoName": "Khamano SDM",
    "cityName": "Fatehgarh Sahib",
    "citySlug": "fatehgarh-sahib",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-28",
    "slug": "pb-28",
    "rtoName": "Malerkotla DTO",
    "cityName": "Malerkotla",
    "citySlug": "malerkotla",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-76",
    "slug": "pb-76",
    "rtoName": "Ahmedgarh SDM",
    "cityName": "Malerkotla",
    "citySlug": "malerkotla",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-29",
    "slug": "pb-29",
    "rtoName": "Moga DTO",
    "cityName": "Moga",
    "citySlug": "moga",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-66",
    "slug": "pb-66",
    "rtoName": "Nihal Singh Wala SDM",
    "cityName": "Moga",
    "citySlug": "moga",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-68",
    "slug": "pb-68",
    "rtoName": "Dharamkot SDM",
    "cityName": "Moga",
    "citySlug": "moga",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-69",
    "slug": "pb-69",
    "rtoName": "Baghapurana SDM",
    "cityName": "Moga",
    "citySlug": "moga",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-30",
    "slug": "pb-30",
    "rtoName": "Sri Muktsar Sahib DTO",
    "cityName": "Muktsar",
    "citySlug": "muktsar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-53",
    "slug": "pb-53",
    "rtoName": "Malout SDM",
    "cityName": "Muktsar",
    "citySlug": "muktsar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-60",
    "slug": "pb-60",
    "rtoName": "Gidderbaha SDM",
    "cityName": "Muktsar",
    "citySlug": "muktsar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-31",
    "slug": "pb-31",
    "rtoName": "Mansa DTO",
    "cityName": "Mansa",
    "citySlug": "mansa",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-50",
    "slug": "pb-50",
    "rtoName": "Budhlada SDM",
    "cityName": "Mansa",
    "citySlug": "mansa",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-35",
    "slug": "pb-35",
    "rtoName": "Pathankot DTO",
    "cityName": "Pathankot",
    "citySlug": "pathankot",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-38",
    "slug": "pb-38",
    "rtoName": "Patti SDM",
    "cityName": "Tarn Taran",
    "citySlug": "tarn-taran",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-46",
    "slug": "pb-46",
    "rtoName": "Tarn Taran DTO",
    "cityName": "Tarn Taran",
    "citySlug": "tarn-taran",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-84",
    "slug": "pb-84",
    "rtoName": "Bhikhiwind SDM",
    "cityName": "Tarn Taran",
    "citySlug": "tarn-taran",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-27",
    "slug": "pb-27",
    "rtoName": "Kharar SDM",
    "cityName": "SAS Nagar",
    "citySlug": "sas-nagar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-52",
    "slug": "pb-52",
    "rtoName": "Dera Bassi SDM",
    "cityName": "SAS Nagar",
    "citySlug": "sas-nagar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-64",
    "slug": "pb-64",
    "rtoName": "SAS Nagar (Mohali) DTO",
    "cityName": "SAS Nagar",
    "citySlug": "sas-nagar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "PB-65",
    "slug": "pb-65",
    "rtoName": "Mohali Commercial RTA",
    "cityName": "SAS Nagar",
    "citySlug": "sas-nagar",
    "stateName": "Punjab",
    "stateSlug": "punjab",
    "stateCode": "PB",
    "isUt": false
  },
  {
    "code": "RJ-01",
    "slug": "rj-01",
    "rtoName": "Ajmer Central RTO",
    "cityName": "Ajmer",
    "citySlug": "ajmer",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-36",
    "slug": "rj-36",
    "rtoName": "Beawar RTO",
    "cityName": "Ajmer",
    "citySlug": "ajmer",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-42",
    "slug": "rj-42",
    "rtoName": "Kishangarh Marble Hub RTO",
    "cityName": "Ajmer",
    "citySlug": "ajmer",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-48",
    "slug": "rj-48",
    "rtoName": "Kekri DTO",
    "cityName": "Ajmer",
    "citySlug": "ajmer",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-02",
    "slug": "rj-02",
    "rtoName": "Alwar DTO",
    "cityName": "Alwar",
    "citySlug": "alwar",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-32",
    "slug": "rj-32",
    "rtoName": "Kotputli RTO",
    "cityName": "Alwar",
    "citySlug": "alwar",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-40",
    "slug": "rj-40",
    "rtoName": "Bhiwadi Industrial Hub DTO",
    "cityName": "Alwar",
    "citySlug": "alwar",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-03",
    "slug": "rj-03",
    "rtoName": "Banswara DTO",
    "cityName": "Banswara",
    "citySlug": "banswara",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-04",
    "slug": "rj-04",
    "rtoName": "Barmer DTO",
    "cityName": "Barmer",
    "citySlug": "barmer",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-39",
    "slug": "rj-39",
    "rtoName": "Balotra Refinery Hub DTO",
    "cityName": "Barmer",
    "citySlug": "barmer",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-05",
    "slug": "rj-05",
    "rtoName": "Bharatpur RTO",
    "cityName": "Bharatpur",
    "citySlug": "bharatpur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-06",
    "slug": "rj-06",
    "rtoName": "Bhilwara Textile Hub RTO",
    "cityName": "Bhilwara",
    "citySlug": "bhilwara",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-51",
    "slug": "rj-51",
    "rtoName": "Shahpura (Bhilwara) DTO",
    "cityName": "Bhilwara",
    "citySlug": "bhilwara",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-07",
    "slug": "rj-07",
    "rtoName": "Bikaner RTO",
    "cityName": "Bikaner",
    "citySlug": "bikaner",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-50",
    "slug": "rj-50",
    "rtoName": "Nokha DTO",
    "cityName": "Bikaner",
    "citySlug": "bikaner",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-08",
    "slug": "rj-08",
    "rtoName": "Bundi DTO",
    "cityName": "Bundi",
    "citySlug": "bundi",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-09",
    "slug": "rj-09",
    "rtoName": "Chittorgarh Cement Hub RTO",
    "cityName": "Chittorgarh",
    "citySlug": "chittorgarh",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-10",
    "slug": "rj-10",
    "rtoName": "Churu DTO",
    "cityName": "Churu",
    "citySlug": "churu",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-44",
    "slug": "rj-44",
    "rtoName": "Sujangarh DTO",
    "cityName": "Churu",
    "citySlug": "churu",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-11",
    "slug": "rj-11",
    "rtoName": "Dholpur DTO",
    "cityName": "Dholpur",
    "citySlug": "dholpur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-12",
    "slug": "rj-12",
    "rtoName": "Dungarpur DTO",
    "cityName": "Dungarpur",
    "citySlug": "dungarpur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-13",
    "slug": "rj-13",
    "rtoName": "Sri Ganganagar DTO",
    "cityName": "Sri Ganganagar",
    "citySlug": "sri-ganganagar",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-56",
    "slug": "rj-56",
    "rtoName": "Sadulshahar DTO",
    "cityName": "Sri Ganganagar",
    "citySlug": "sri-ganganagar",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-58",
    "slug": "rj-58",
    "rtoName": "Anupgarh DTO",
    "cityName": "Sri Ganganagar",
    "citySlug": "sri-ganganagar",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-14",
    "slug": "rj-14",
    "rtoName": "Jaipur South (Jhalana) RTO",
    "cityName": "Jaipur",
    "citySlug": "jaipur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-41",
    "slug": "rj-41",
    "rtoName": "Chomu DTO",
    "cityName": "Jaipur",
    "citySlug": "jaipur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-45",
    "slug": "rj-45",
    "rtoName": "Jaipur North (Vidyadhar Nagar) RTO",
    "cityName": "Jaipur",
    "citySlug": "jaipur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-47",
    "slug": "rj-47",
    "rtoName": "Dudu DTO",
    "cityName": "Jaipur",
    "citySlug": "jaipur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-52",
    "slug": "rj-52",
    "rtoName": "Shahpura (Jaipur) DTO",
    "cityName": "Jaipur",
    "citySlug": "jaipur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-15",
    "slug": "rj-15",
    "rtoName": "Jaisalmer DTO",
    "cityName": "Jaisalmer",
    "citySlug": "jaisalmer",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-55",
    "slug": "rj-55",
    "rtoName": "Pokhran DTO",
    "cityName": "Jaisalmer",
    "citySlug": "jaisalmer",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-16",
    "slug": "rj-16",
    "rtoName": "Jalore DTO",
    "cityName": "Jalore",
    "citySlug": "jalore",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-46",
    "slug": "rj-46",
    "rtoName": "Bhinmal DTO",
    "cityName": "Jalore",
    "citySlug": "jalore",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-17",
    "slug": "rj-17",
    "rtoName": "Jhalawar DTO",
    "cityName": "Jhalawar",
    "citySlug": "jhalawar",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-33",
    "slug": "rj-33",
    "rtoName": "Ramganj Mandi DTO",
    "cityName": "Jhalawar",
    "citySlug": "jhalawar",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-18",
    "slug": "rj-18",
    "rtoName": "Jhunjhunu DTO",
    "cityName": "Jhunjhunu",
    "citySlug": "jhunjhunu",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-19",
    "slug": "rj-19",
    "rtoName": "Jodhpur RTO",
    "cityName": "Jodhpur",
    "citySlug": "jodhpur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-43",
    "slug": "rj-43",
    "rtoName": "Phalodi DTO",
    "cityName": "Jodhpur",
    "citySlug": "jodhpur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-54",
    "slug": "rj-54",
    "rtoName": "Pipar City DTO",
    "cityName": "Jodhpur",
    "citySlug": "jodhpur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-20",
    "slug": "rj-20",
    "rtoName": "Kota RTO",
    "cityName": "Kota",
    "citySlug": "kota",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-21",
    "slug": "rj-21",
    "rtoName": "Nagaur DTO",
    "cityName": "Nagaur",
    "citySlug": "nagaur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-37",
    "slug": "rj-37",
    "rtoName": "Didwana DTO",
    "cityName": "Nagaur",
    "citySlug": "nagaur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-22",
    "slug": "rj-22",
    "rtoName": "Pali RTO",
    "cityName": "Pali",
    "citySlug": "pali",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-57",
    "slug": "rj-57",
    "rtoName": "Sumerpur DTO",
    "cityName": "Pali",
    "citySlug": "pali",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-23",
    "slug": "rj-23",
    "rtoName": "Sikar RTO",
    "cityName": "Sikar",
    "citySlug": "sikar",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-24",
    "slug": "rj-24",
    "rtoName": "Sirohi DTO",
    "cityName": "Sirohi",
    "citySlug": "sirohi",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-38",
    "slug": "rj-38",
    "rtoName": "Abu Road DTO",
    "cityName": "Sirohi",
    "citySlug": "sirohi",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-25",
    "slug": "rj-25",
    "rtoName": "Sawai Madhopur DTO",
    "cityName": "Sawai Madhopur",
    "citySlug": "sawai-madhopur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-26",
    "slug": "rj-26",
    "rtoName": "Tonk DTO",
    "cityName": "Tonk",
    "citySlug": "tonk",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-27",
    "slug": "rj-27",
    "rtoName": "Udaipur Mineral Hub RTO",
    "cityName": "Udaipur",
    "citySlug": "udaipur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-53",
    "slug": "rj-53",
    "rtoName": "Salumbar DTO",
    "cityName": "Udaipur",
    "citySlug": "udaipur",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-28",
    "slug": "rj-28",
    "rtoName": "Baran DTO",
    "cityName": "Baran",
    "citySlug": "baran",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-29",
    "slug": "rj-29",
    "rtoName": "Dausa DTO",
    "cityName": "Dausa",
    "citySlug": "dausa",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-30",
    "slug": "rj-30",
    "rtoName": "Rajsamand Marble Hub DTO",
    "cityName": "Rajsamand",
    "citySlug": "rajsamand",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-31",
    "slug": "rj-31",
    "rtoName": "Hanumangarh DTO",
    "cityName": "Hanumangarh",
    "citySlug": "hanumangarh",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-49",
    "slug": "rj-49",
    "rtoName": "Nohar DTO",
    "cityName": "Hanumangarh",
    "citySlug": "hanumangarh",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-34",
    "slug": "rj-34",
    "rtoName": "Karauli DTO",
    "cityName": "Karauli",
    "citySlug": "karauli",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "RJ-35",
    "slug": "rj-35",
    "rtoName": "Pratapgarh DTO",
    "cityName": "Pratapgarh",
    "citySlug": "pratapgarh",
    "stateName": "Rajasthan",
    "stateSlug": "rajasthan",
    "stateCode": "RJ",
    "isUt": false
  },
  {
    "code": "SK-01",
    "slug": "sk-01",
    "rtoName": "Gangtok (East Sikkim) RTO",
    "cityName": "Gangtok",
    "citySlug": "gangtok",
    "stateName": "Sikkim",
    "stateSlug": "sikkim",
    "stateCode": "SK",
    "isUt": false
  },
  {
    "code": "SK-02",
    "slug": "sk-02",
    "rtoName": "Gyalshing (West Sikkim) RTO",
    "cityName": "Gyalshing",
    "citySlug": "gyalshing",
    "stateName": "Sikkim",
    "stateSlug": "sikkim",
    "stateCode": "SK",
    "isUt": false
  },
  {
    "code": "SK-03",
    "slug": "sk-03",
    "rtoName": "Mangan (North Sikkim) RTO",
    "cityName": "Mangan",
    "citySlug": "mangan",
    "stateName": "Sikkim",
    "stateSlug": "sikkim",
    "stateCode": "SK",
    "isUt": false
  },
  {
    "code": "SK-04",
    "slug": "sk-04",
    "rtoName": "Jorethang (South Sikkim) RTO",
    "cityName": "Jorethang",
    "citySlug": "jorethang",
    "stateName": "Sikkim",
    "stateSlug": "sikkim",
    "stateCode": "SK",
    "isUt": false
  },
  {
    "code": "SK-05",
    "slug": "sk-05",
    "rtoName": "Namchi RTO",
    "cityName": "Namchi",
    "citySlug": "namchi",
    "stateName": "Sikkim",
    "stateSlug": "sikkim",
    "stateCode": "SK",
    "isUt": false
  },
  {
    "code": "SK-06",
    "slug": "sk-06",
    "rtoName": "Pakyong RTO",
    "cityName": "Pakyong",
    "citySlug": "pakyong",
    "stateName": "Sikkim",
    "stateSlug": "sikkim",
    "stateCode": "SK",
    "isUt": false
  },
  {
    "code": "SK-07",
    "slug": "sk-07",
    "rtoName": "Soreng RTO",
    "cityName": "Soreng",
    "citySlug": "soreng",
    "stateName": "Sikkim",
    "stateSlug": "sikkim",
    "stateCode": "SK",
    "isUt": false
  },
  {
    "code": "TN-01",
    "slug": "tn-01",
    "rtoName": "Chennai Central (Ayanavaram) RTO",
    "cityName": "Chennai",
    "citySlug": "chennai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-02",
    "slug": "tn-02",
    "rtoName": "Chennai North West (Anna Nagar) RTO",
    "cityName": "Chennai",
    "citySlug": "chennai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-03",
    "slug": "tn-03",
    "rtoName": "Chennai North East (Tondiarpet) RTO",
    "cityName": "Chennai",
    "citySlug": "chennai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-04",
    "slug": "tn-04",
    "rtoName": "Chennai East (Royapuram) RTO",
    "cityName": "Chennai",
    "citySlug": "chennai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-05",
    "slug": "tn-05",
    "rtoName": "Chennai North (Kolathur) RTO",
    "cityName": "Chennai",
    "citySlug": "chennai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-06",
    "slug": "tn-06",
    "rtoName": "Chennai South East (Mandaveli) RTO",
    "cityName": "Chennai",
    "citySlug": "chennai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-07",
    "slug": "tn-07",
    "rtoName": "Chennai South (Thiruvanmiyur) RTO",
    "cityName": "Chennai",
    "citySlug": "chennai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-09",
    "slug": "tn-09",
    "rtoName": "Chennai West (K.K. Nagar) RTO",
    "cityName": "Chennai",
    "citySlug": "chennai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-10",
    "slug": "tn-10",
    "rtoName": "Chennai South West (Virugambakkam) RTO",
    "cityName": "Chennai",
    "citySlug": "chennai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-14",
    "slug": "tn-14",
    "rtoName": "Chennai (Sholinganallur IT Hub) RTO",
    "cityName": "Chennai",
    "citySlug": "chennai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-11",
    "slug": "tn-11",
    "rtoName": "Tambaram RTO",
    "cityName": "Chengalpattu",
    "citySlug": "chengalpattu",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-19",
    "slug": "tn-19",
    "rtoName": "Chengalpattu RTO",
    "cityName": "Chengalpattu",
    "citySlug": "chengalpattu",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-22",
    "slug": "tn-22",
    "rtoName": "Meenambakkam RTO",
    "cityName": "Chengalpattu",
    "citySlug": "chengalpattu",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-12",
    "slug": "tn-12",
    "rtoName": "Poonamallee RTO",
    "cityName": "Tiruvallur",
    "citySlug": "tiruvallur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-13",
    "slug": "tn-13",
    "rtoName": "Ambattur Industrial RTO",
    "cityName": "Tiruvallur",
    "citySlug": "tiruvallur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-18",
    "slug": "tn-18",
    "rtoName": "Red Hills (Transport Nagar) RTO",
    "cityName": "Tiruvallur",
    "citySlug": "tiruvallur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-20",
    "slug": "tn-20",
    "rtoName": "Tiruvallur RTO",
    "cityName": "Tiruvallur",
    "citySlug": "tiruvallur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-15",
    "slug": "tn-15",
    "rtoName": "Ulundurpet RTO",
    "cityName": "Kallakurichi",
    "citySlug": "kallakurichi",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-16",
    "slug": "tn-16",
    "rtoName": "Tindivanam RTO",
    "cityName": "Villupuram",
    "citySlug": "villupuram",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-32",
    "slug": "tn-32",
    "rtoName": "Villupuram RTO",
    "cityName": "Villupuram",
    "citySlug": "villupuram",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-21",
    "slug": "tn-21",
    "rtoName": "Kanchipuram RTO",
    "cityName": "Kanchipuram",
    "citySlug": "kanchipuram",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-85",
    "slug": "tn-85",
    "rtoName": "Kundrathur RTO",
    "cityName": "Kanchipuram",
    "citySlug": "kanchipuram",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-87",
    "slug": "tn-87",
    "rtoName": "Sriperumbudur Auto Hub RTO",
    "cityName": "Kanchipuram",
    "citySlug": "kanchipuram",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-23",
    "slug": "tn-23",
    "rtoName": "Vellore RTO",
    "cityName": "Vellore",
    "citySlug": "vellore",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-73",
    "slug": "tn-73",
    "rtoName": "Ranipet RTO",
    "cityName": "Vellore",
    "citySlug": "vellore",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-83",
    "slug": "tn-83",
    "rtoName": "Vaniyambadi RTO",
    "cityName": "Vellore",
    "citySlug": "vellore",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-24",
    "slug": "tn-24",
    "rtoName": "Krishnagiri RTO",
    "cityName": "Krishnagiri",
    "citySlug": "krishnagiri",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-70",
    "slug": "tn-70",
    "rtoName": "Hosur Industrial Hub RTO",
    "cityName": "Krishnagiri",
    "citySlug": "krishnagiri",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-25",
    "slug": "tn-25",
    "rtoName": "Tiruvannamalai RTO",
    "cityName": "Tiruvannamalai",
    "citySlug": "tiruvannamalai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-97",
    "slug": "tn-97",
    "rtoName": "Arani RTO",
    "cityName": "Tiruvannamalai",
    "citySlug": "tiruvannamalai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-28",
    "slug": "tn-28",
    "rtoName": "Namakkal North (Trucking Hub) RTO",
    "cityName": "Namakkal",
    "citySlug": "namakkal",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-34",
    "slug": "tn-34",
    "rtoName": "Tiruchengode RTO",
    "cityName": "Namakkal",
    "citySlug": "namakkal",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-88",
    "slug": "tn-88",
    "rtoName": "Namakkal South (Fleet Hub) RTO",
    "cityName": "Namakkal",
    "citySlug": "namakkal",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-29",
    "slug": "tn-29",
    "rtoName": "Dharmapuri RTO",
    "cityName": "Dharmapuri",
    "citySlug": "dharmapuri",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-30",
    "slug": "tn-30",
    "rtoName": "Salem West RTO",
    "cityName": "Salem",
    "citySlug": "salem",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-52",
    "slug": "tn-52",
    "rtoName": "Sankagiri Trucking Hub RTO",
    "cityName": "Salem",
    "citySlug": "salem",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-54",
    "slug": "tn-54",
    "rtoName": "Salem East RTO",
    "cityName": "Salem",
    "citySlug": "salem",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-77",
    "slug": "tn-77",
    "rtoName": "Attur RTO",
    "cityName": "Salem",
    "citySlug": "salem",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-90",
    "slug": "tn-90",
    "rtoName": "Salem South RTO",
    "cityName": "Salem",
    "citySlug": "salem",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-93",
    "slug": "tn-93",
    "rtoName": "Mettur Industrial RTO",
    "cityName": "Salem",
    "citySlug": "salem",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-31",
    "slug": "tn-31",
    "rtoName": "Cuddalore RTO",
    "cityName": "Cuddalore",
    "citySlug": "cuddalore",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-91",
    "slug": "tn-91",
    "rtoName": "Neyveli Mining Hub RTO",
    "cityName": "Cuddalore",
    "citySlug": "cuddalore",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-33",
    "slug": "tn-33",
    "rtoName": "Erode East RTO",
    "cityName": "Erode",
    "citySlug": "erode",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-36",
    "slug": "tn-36",
    "rtoName": "Gobichettipalayam RTO",
    "cityName": "Erode",
    "citySlug": "erode",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-56",
    "slug": "tn-56",
    "rtoName": "Perundurai RTO",
    "cityName": "Erode",
    "citySlug": "erode",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-86",
    "slug": "tn-86",
    "rtoName": "Erode West RTO",
    "cityName": "Erode",
    "citySlug": "erode",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-37",
    "slug": "tn-37",
    "rtoName": "Coimbatore South RTO",
    "cityName": "Coimbatore",
    "citySlug": "coimbatore",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-38",
    "slug": "tn-38",
    "rtoName": "Coimbatore North RTO",
    "cityName": "Coimbatore",
    "citySlug": "coimbatore",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-40",
    "slug": "tn-40",
    "rtoName": "Mettupalayam RTO",
    "cityName": "Coimbatore",
    "citySlug": "coimbatore",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-41",
    "slug": "tn-41",
    "rtoName": "Pollachi RTO",
    "cityName": "Coimbatore",
    "citySlug": "coimbatore",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-66",
    "slug": "tn-66",
    "rtoName": "Coimbatore Central RTO",
    "cityName": "Coimbatore",
    "citySlug": "coimbatore",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-99",
    "slug": "tn-99",
    "rtoName": "Coimbatore West RTO",
    "cityName": "Coimbatore",
    "citySlug": "coimbatore",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-39",
    "slug": "tn-39",
    "rtoName": "Tirupur North (Garment Hub) RTO",
    "cityName": "Tirupur",
    "citySlug": "tirupur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-42",
    "slug": "tn-42",
    "rtoName": "Tirupur South RTO",
    "cityName": "Tirupur",
    "citySlug": "tirupur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-78",
    "slug": "tn-78",
    "rtoName": "Dharapuram RTO",
    "cityName": "Tirupur",
    "citySlug": "tirupur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-43",
    "slug": "tn-43",
    "rtoName": "Ooty (Udhagamandalam) RTO",
    "cityName": "Nilgiris",
    "citySlug": "nilgiris",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-45",
    "slug": "tn-45",
    "rtoName": "Tiruchirappalli West RTO",
    "cityName": "Tiruchirappalli",
    "citySlug": "tiruchirappalli",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-81",
    "slug": "tn-81",
    "rtoName": "Tiruchirappalli East RTO",
    "cityName": "Tiruchirappalli",
    "citySlug": "tiruchirappalli",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-46",
    "slug": "tn-46",
    "rtoName": "Perambalur RTO",
    "cityName": "Perambalur",
    "citySlug": "perambalur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-47",
    "slug": "tn-47",
    "rtoName": "Karur Textile & Coach Hub RTO",
    "cityName": "Karur",
    "citySlug": "karur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-49",
    "slug": "tn-49",
    "rtoName": "Thanjavur RTO",
    "cityName": "Thanjavur",
    "citySlug": "thanjavur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-68",
    "slug": "tn-68",
    "rtoName": "Kumbakonam RTO",
    "cityName": "Thanjavur",
    "citySlug": "thanjavur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-50",
    "slug": "tn-50",
    "rtoName": "Tiruvarur RTO",
    "cityName": "Tiruvarur",
    "citySlug": "tiruvarur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-51",
    "slug": "tn-51",
    "rtoName": "Nagapattinam Port RTO",
    "cityName": "Nagapattinam",
    "citySlug": "nagapattinam",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-82",
    "slug": "tn-82",
    "rtoName": "Mayiladuthurai RTO",
    "cityName": "Nagapattinam",
    "citySlug": "nagapattinam",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-55",
    "slug": "tn-55",
    "rtoName": "Pudukkottai RTO",
    "cityName": "Pudukkottai",
    "citySlug": "pudukkottai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-57",
    "slug": "tn-57",
    "rtoName": "Dindigul RTO",
    "cityName": "Dindigul",
    "citySlug": "dindigul",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-94",
    "slug": "tn-94",
    "rtoName": "Palani RTO",
    "cityName": "Dindigul",
    "citySlug": "dindigul",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-58",
    "slug": "tn-58",
    "rtoName": "Madurai South RTO",
    "cityName": "Madurai",
    "citySlug": "madurai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-59",
    "slug": "tn-59",
    "rtoName": "Madurai North RTO",
    "cityName": "Madurai",
    "citySlug": "madurai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-64",
    "slug": "tn-64",
    "rtoName": "Madurai Central RTO",
    "cityName": "Madurai",
    "citySlug": "madurai",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-60",
    "slug": "tn-60",
    "rtoName": "Theni RTO",
    "cityName": "Theni",
    "citySlug": "theni",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-61",
    "slug": "tn-61",
    "rtoName": "Ariyalur Cement Hub RTO",
    "cityName": "Ariyalur",
    "citySlug": "ariyalur",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-63",
    "slug": "tn-63",
    "rtoName": "Sivaganga (Karaikudi) RTO",
    "cityName": "Sivaganga",
    "citySlug": "sivaganga",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-65",
    "slug": "tn-65",
    "rtoName": "Ramanathapuram RTO",
    "cityName": "Ramanathapuram",
    "citySlug": "ramanathapuram",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-67",
    "slug": "tn-67",
    "rtoName": "Virudhunagar RTO",
    "cityName": "Virudhunagar",
    "citySlug": "virudhunagar",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-84",
    "slug": "tn-84",
    "rtoName": "Srivilliputhur RTO",
    "cityName": "Virudhunagar",
    "citySlug": "virudhunagar",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-95",
    "slug": "tn-95",
    "rtoName": "Sivakasi RTO",
    "cityName": "Virudhunagar",
    "citySlug": "virudhunagar",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-69",
    "slug": "tn-69",
    "rtoName": "Thoothukudi (Tuticorin Port) RTO",
    "cityName": "Thoothukudi",
    "citySlug": "thoothukudi",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-92",
    "slug": "tn-92",
    "rtoName": "Tiruchendur RTO",
    "cityName": "Thoothukudi",
    "citySlug": "thoothukudi",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-96",
    "slug": "tn-96",
    "rtoName": "Kovilpatti RTO",
    "cityName": "Thoothukudi",
    "citySlug": "thoothukudi",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-72",
    "slug": "tn-72",
    "rtoName": "Tirunelveli RTO",
    "cityName": "Tirunelveli",
    "citySlug": "tirunelveli",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-74",
    "slug": "tn-74",
    "rtoName": "Nagercoil RTO",
    "cityName": "Kanniyakumari",
    "citySlug": "kanniyakumari",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-75",
    "slug": "tn-75",
    "rtoName": "Marthandam RTO",
    "cityName": "Kanniyakumari",
    "citySlug": "kanniyakumari",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-76",
    "slug": "tn-76",
    "rtoName": "Tenkasi RTO",
    "cityName": "Tenkasi",
    "citySlug": "tenkasi",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TN-79",
    "slug": "tn-79",
    "rtoName": "Sankarankovil RTO",
    "cityName": "Tenkasi",
    "citySlug": "tenkasi",
    "stateName": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "stateCode": "TN",
    "isUt": false
  },
  {
    "code": "TS-07",
    "slug": "ts-07",
    "rtoName": "Hyderabad Central (Khairatabad) RTO",
    "cityName": "Hyderabad",
    "citySlug": "hyderabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-09",
    "slug": "ts-09",
    "rtoName": "Hyderabad Central RTO",
    "cityName": "Hyderabad",
    "citySlug": "hyderabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-10",
    "slug": "ts-10",
    "rtoName": "Hyderabad North (Secunderabad) RTO",
    "cityName": "Hyderabad",
    "citySlug": "hyderabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-11",
    "slug": "ts-11",
    "rtoName": "Hyderabad East (Malakpet) RTO",
    "cityName": "Hyderabad",
    "citySlug": "hyderabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-12",
    "slug": "ts-12",
    "rtoName": "Hyderabad South (Kishanbagh) RTO",
    "cityName": "Hyderabad",
    "citySlug": "hyderabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-13",
    "slug": "ts-13",
    "rtoName": "Hyderabad West (Tolichowki) RTO",
    "cityName": "Hyderabad",
    "citySlug": "hyderabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-14",
    "slug": "ts-14",
    "rtoName": "Hyderabad (Mehdipatnam) RTO",
    "cityName": "Hyderabad",
    "citySlug": "hyderabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-08",
    "slug": "ts-08",
    "rtoName": "Medchal-Malkajgiri RTO",
    "cityName": "Medchal-Malkajgiri",
    "citySlug": "medchal-malkajgiri",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-01",
    "slug": "ts-01",
    "rtoName": "Adilabad RTO",
    "cityName": "Adilabad",
    "citySlug": "adilabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-02",
    "slug": "ts-02",
    "rtoName": "Karimnagar Granite Hub RTO",
    "cityName": "Karimnagar",
    "citySlug": "karimnagar",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-03",
    "slug": "ts-03",
    "rtoName": "Warangal Urban RTO",
    "cityName": "Warangal",
    "citySlug": "warangal",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-24",
    "slug": "ts-24",
    "rtoName": "Warangal Rural RTO",
    "cityName": "Warangal",
    "citySlug": "warangal",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-04",
    "slug": "ts-04",
    "rtoName": "Khammam RTO",
    "cityName": "Khammam",
    "citySlug": "khammam",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-05",
    "slug": "ts-05",
    "rtoName": "Nalgonda RTO",
    "cityName": "Nalgonda",
    "citySlug": "nalgonda",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-06",
    "slug": "ts-06",
    "rtoName": "Mahbubnagar RTO",
    "cityName": "Mahbubnagar",
    "citySlug": "mahbubnagar",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-15",
    "slug": "ts-15",
    "rtoName": "Sangareddy Industrial RTO",
    "cityName": "Sangareddy",
    "citySlug": "sangareddy",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-16",
    "slug": "ts-16",
    "rtoName": "Nizamabad RTO",
    "cityName": "Nizamabad",
    "citySlug": "nizamabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-17",
    "slug": "ts-17",
    "rtoName": "Kamareddy RTO",
    "cityName": "Kamareddy",
    "citySlug": "kamareddy",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-18",
    "slug": "ts-18",
    "rtoName": "Nirmal RTO",
    "cityName": "Nirmal",
    "citySlug": "nirmal",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-19",
    "slug": "ts-19",
    "rtoName": "Mancherial Coal Belt RTO",
    "cityName": "Mancherial",
    "citySlug": "mancherial",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-20",
    "slug": "ts-20",
    "rtoName": "Kumuram Bheem Asifabad RTO",
    "cityName": "Asifabad",
    "citySlug": "asifabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-21",
    "slug": "ts-21",
    "rtoName": "Jagtial RTO",
    "cityName": "Jagtial",
    "citySlug": "jagtial",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-22",
    "slug": "ts-22",
    "rtoName": "Peddapalli (Ramagundam) RTO",
    "cityName": "Peddapalli",
    "citySlug": "peddapalli",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-23",
    "slug": "ts-23",
    "rtoName": "Rajanna Sircilla RTO",
    "cityName": "Sircilla",
    "citySlug": "sircilla",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-25",
    "slug": "ts-25",
    "rtoName": "Jayashankar Bhupalpally Mining RTO",
    "cityName": "Bhupalpally",
    "citySlug": "bhupalpally",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-26",
    "slug": "ts-26",
    "rtoName": "Mahabubabad RTO",
    "cityName": "Mahabubabad",
    "citySlug": "mahabubabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-27",
    "slug": "ts-27",
    "rtoName": "Jangaon RTO",
    "cityName": "Jangaon",
    "citySlug": "jangaon",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-28",
    "slug": "ts-28",
    "rtoName": "Bhadradri Kothagudem Mining Hub RTO",
    "cityName": "Kothagudem",
    "citySlug": "kothagudem",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-29",
    "slug": "ts-29",
    "rtoName": "Suryapet RTO",
    "cityName": "Suryapet",
    "citySlug": "suryapet",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-30",
    "slug": "ts-30",
    "rtoName": "Yadadri Bhuvanagiri RTO",
    "cityName": "Bhuvanagiri",
    "citySlug": "bhuvanagiri",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-31",
    "slug": "ts-31",
    "rtoName": "Nagarkurnool RTO",
    "cityName": "Nagarkurnool",
    "citySlug": "nagarkurnool",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-32",
    "slug": "ts-32",
    "rtoName": "Wanaparthy RTO",
    "cityName": "Wanaparthy",
    "citySlug": "wanaparthy",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-33",
    "slug": "ts-33",
    "rtoName": "Jogulamba Gadwal RTO",
    "cityName": "Gadwal",
    "citySlug": "gadwal",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-34",
    "slug": "ts-34",
    "rtoName": "Vikarabad RTO",
    "cityName": "Vikarabad",
    "citySlug": "vikarabad",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-35",
    "slug": "ts-35",
    "rtoName": "Medak RTO",
    "cityName": "Medak",
    "citySlug": "medak",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TS-36",
    "slug": "ts-36",
    "rtoName": "Siddipet RTO",
    "cityName": "Siddipet",
    "citySlug": "siddipet",
    "stateName": "Telangana",
    "stateSlug": "telangana",
    "stateCode": "TS",
    "isUt": false
  },
  {
    "code": "TR-01",
    "slug": "tr-01",
    "rtoName": "Agartala (West Tripura) DTO",
    "cityName": "Agartala",
    "citySlug": "agartala",
    "stateName": "Tripura",
    "stateSlug": "tripura",
    "stateCode": "TR",
    "isUt": false
  },
  {
    "code": "TR-02",
    "slug": "tr-02",
    "rtoName": "Kailashahar (Unakoti) DTO",
    "cityName": "Kailashahar",
    "citySlug": "kailashahar",
    "stateName": "Tripura",
    "stateSlug": "tripura",
    "stateCode": "TR",
    "isUt": false
  },
  {
    "code": "TR-03",
    "slug": "tr-03",
    "rtoName": "Udaipur (Gomati) DTO",
    "cityName": "Udaipur",
    "citySlug": "udaipur",
    "stateName": "Tripura",
    "stateSlug": "tripura",
    "stateCode": "TR",
    "isUt": false
  },
  {
    "code": "TR-04",
    "slug": "tr-04",
    "rtoName": "Ambassa (Dhalai) DTO",
    "cityName": "Ambassa",
    "citySlug": "ambassa",
    "stateName": "Tripura",
    "stateSlug": "tripura",
    "stateCode": "TR",
    "isUt": false
  },
  {
    "code": "TR-05",
    "slug": "tr-05",
    "rtoName": "Dharmanagar (North Tripura) DTO",
    "cityName": "Dharmanagar",
    "citySlug": "dharmanagar",
    "stateName": "Tripura",
    "stateSlug": "tripura",
    "stateCode": "TR",
    "isUt": false
  },
  {
    "code": "TR-06",
    "slug": "tr-06",
    "rtoName": "Khowai DTO",
    "cityName": "Khowai",
    "citySlug": "khowai",
    "stateName": "Tripura",
    "stateSlug": "tripura",
    "stateCode": "TR",
    "isUt": false
  },
  {
    "code": "TR-07",
    "slug": "tr-07",
    "rtoName": "Bishramganj (Sepahijala) DTO",
    "cityName": "Sepahijala",
    "citySlug": "sepahijala",
    "stateName": "Tripura",
    "stateSlug": "tripura",
    "stateCode": "TR",
    "isUt": false
  },
  {
    "code": "TR-08",
    "slug": "tr-08",
    "rtoName": "Belonia (South Tripura) DTO",
    "cityName": "Belonia",
    "citySlug": "belonia",
    "stateName": "Tripura",
    "stateSlug": "tripura",
    "stateCode": "TR",
    "isUt": false
  },
  {
    "code": "UP-11",
    "slug": "up-11",
    "rtoName": "Saharanpur RTO",
    "cityName": "Saharanpur",
    "citySlug": "saharanpur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-12",
    "slug": "up-12",
    "rtoName": "Muzaffarnagar ARTO",
    "cityName": "Muzaffarnagar",
    "citySlug": "muzaffarnagar",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-13",
    "slug": "up-13",
    "rtoName": "Bulandshahr ARTO",
    "cityName": "Bulandshahr",
    "citySlug": "bulandshahr",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-14",
    "slug": "up-14",
    "rtoName": "Ghaziabad RTO",
    "cityName": "Ghaziabad",
    "citySlug": "ghaziabad",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-15",
    "slug": "up-15",
    "rtoName": "Meerut RTO",
    "cityName": "Meerut",
    "citySlug": "meerut",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-16",
    "slug": "up-16",
    "rtoName": "Gautam Buddha Nagar (Noida / Greater Noida) ARTO",
    "cityName": "Noida",
    "citySlug": "noida",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-17",
    "slug": "up-17",
    "rtoName": "Baghpat ARTO",
    "cityName": "Baghpat",
    "citySlug": "baghpat",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-19",
    "slug": "up-19",
    "rtoName": "Shamli ARTO",
    "cityName": "Shamli",
    "citySlug": "shamli",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-20",
    "slug": "up-20",
    "rtoName": "Bijnor ARTO",
    "cityName": "Bijnor",
    "citySlug": "bijnor",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-21",
    "slug": "up-21",
    "rtoName": "Moradabad RTO",
    "cityName": "Moradabad",
    "citySlug": "moradabad",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-22",
    "slug": "up-22",
    "rtoName": "Rampur ARTO",
    "cityName": "Rampur",
    "citySlug": "rampur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-23",
    "slug": "up-23",
    "rtoName": "Amroha ARTO",
    "cityName": "Amroha",
    "citySlug": "amroha",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-24",
    "slug": "up-24",
    "rtoName": "Sambhal (Chandausi) ARTO",
    "cityName": "Sambhal",
    "citySlug": "sambhal",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-38",
    "slug": "up-38",
    "rtoName": "Sambhal ARTO",
    "cityName": "Sambhal",
    "citySlug": "sambhal",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-25",
    "slug": "up-25",
    "rtoName": "Bareilly RTO",
    "cityName": "Bareilly",
    "citySlug": "bareilly",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-26",
    "slug": "up-26",
    "rtoName": "Pilibhit ARTO",
    "cityName": "Pilibhit",
    "citySlug": "pilibhit",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-27",
    "slug": "up-27",
    "rtoName": "Shahjahanpur ARTO",
    "cityName": "Shahjahanpur",
    "citySlug": "shahjahanpur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-30",
    "slug": "up-30",
    "rtoName": "Hardoi ARTO",
    "cityName": "Hardoi",
    "citySlug": "hardoi",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-31",
    "slug": "up-31",
    "rtoName": "Lakhimpur Kheri ARTO",
    "cityName": "Lakhimpur Kheri",
    "citySlug": "lakhimpur-kheri",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-32",
    "slug": "up-32",
    "rtoName": "Lucknow (Transport Nagar) RTO",
    "cityName": "Lucknow",
    "citySlug": "lucknow",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-33",
    "slug": "up-33",
    "rtoName": "Raebareli ARTO",
    "cityName": "Raebareli",
    "citySlug": "raebareli",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-34",
    "slug": "up-34",
    "rtoName": "Sitapur ARTO",
    "cityName": "Sitapur",
    "citySlug": "sitapur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-35",
    "slug": "up-35",
    "rtoName": "Unnao ARTO",
    "cityName": "Unnao",
    "citySlug": "unnao",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-36",
    "slug": "up-36",
    "rtoName": "Amethi (Gauriganj) ARTO",
    "cityName": "Amethi",
    "citySlug": "amethi",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-37",
    "slug": "up-37",
    "rtoName": "Hapur ARTO",
    "cityName": "Hapur",
    "citySlug": "hapur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-40",
    "slug": "up-40",
    "rtoName": "Bahraich ARTO",
    "cityName": "Bahraich",
    "citySlug": "bahraich",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-41",
    "slug": "up-41",
    "rtoName": "Barabanki ARTO",
    "cityName": "Barabanki",
    "citySlug": "barabanki",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-42",
    "slug": "up-42",
    "rtoName": "Ayodhya (Faizabad) RTO",
    "cityName": "Ayodhya",
    "citySlug": "ayodhya",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-43",
    "slug": "up-43",
    "rtoName": "Gonda RTO",
    "cityName": "Gonda",
    "citySlug": "gonda",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-44",
    "slug": "up-44",
    "rtoName": "Sultanpur ARTO",
    "cityName": "Sultanpur",
    "citySlug": "sultanpur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-45",
    "slug": "up-45",
    "rtoName": "Ambedkar Nagar (Akbarpur) ARTO",
    "cityName": "Ambedkar Nagar",
    "citySlug": "ambedkar-nagar",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-46",
    "slug": "up-46",
    "rtoName": "Shravasti (Bhinja) ARTO",
    "cityName": "Shravasti",
    "citySlug": "shravasti",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-47",
    "slug": "up-47",
    "rtoName": "Balrampur ARTO",
    "cityName": "Balrampur",
    "citySlug": "balrampur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-50",
    "slug": "up-50",
    "rtoName": "Azamgarh RTO",
    "cityName": "Azamgarh",
    "citySlug": "azamgarh",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-51",
    "slug": "up-51",
    "rtoName": "Basti RTO",
    "cityName": "Basti",
    "citySlug": "basti",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-52",
    "slug": "up-52",
    "rtoName": "Deoria ARTO",
    "cityName": "Deoria",
    "citySlug": "deoria",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-53",
    "slug": "up-53",
    "rtoName": "Gorakhpur RTO",
    "cityName": "Gorakhpur",
    "citySlug": "gorakhpur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-54",
    "slug": "up-54",
    "rtoName": "Mau ARTO",
    "cityName": "Mau",
    "citySlug": "mau",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-55",
    "slug": "up-55",
    "rtoName": "Siddharthnagar (Naugarh) ARTO",
    "cityName": "Siddharthnagar",
    "citySlug": "siddharthnagar",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-56",
    "slug": "up-56",
    "rtoName": "Maharajganj ARTO",
    "cityName": "Maharajganj",
    "citySlug": "maharajganj",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-57",
    "slug": "up-57",
    "rtoName": "Kushinagar (Padrauna) ARTO",
    "cityName": "Kushinagar",
    "citySlug": "kushinagar",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-58",
    "slug": "up-58",
    "rtoName": "Sant Kabir Nagar (Khalilabad) ARTO",
    "cityName": "Sant Kabir Nagar",
    "citySlug": "sant-kabir-nagar",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-60",
    "slug": "up-60",
    "rtoName": "Ballia ARTO",
    "cityName": "Ballia",
    "citySlug": "ballia",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-61",
    "slug": "up-61",
    "rtoName": "Ghazipur ARTO",
    "cityName": "Ghazipur",
    "citySlug": "ghazipur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-62",
    "slug": "up-62",
    "rtoName": "Jaunpur ARTO",
    "cityName": "Jaunpur",
    "citySlug": "jaunpur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-63",
    "slug": "up-63",
    "rtoName": "Mirzapur RTO",
    "cityName": "Mirzapur",
    "citySlug": "mirzapur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-64",
    "slug": "up-64",
    "rtoName": "Sonbhadra (Robertsganj Mining Hub) ARTO",
    "cityName": "Sonbhadra",
    "citySlug": "sonbhadra",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-65",
    "slug": "up-65",
    "rtoName": "Varanasi RTO",
    "cityName": "Varanasi",
    "citySlug": "varanasi",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-66",
    "slug": "up-66",
    "rtoName": "Bhadohi (Carpet City) ARTO",
    "cityName": "Bhadohi",
    "citySlug": "bhadohi",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-67",
    "slug": "up-67",
    "rtoName": "Chandauli ARTO",
    "cityName": "Chandauli",
    "citySlug": "chandauli",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-70",
    "slug": "up-70",
    "rtoName": "Prayagraj (Allahabad) RTO",
    "cityName": "Prayagraj",
    "citySlug": "prayagraj",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-71",
    "slug": "up-71",
    "rtoName": "Fatehpur ARTO",
    "cityName": "Fatehpur",
    "citySlug": "fatehpur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-72",
    "slug": "up-72",
    "rtoName": "Pratapgarh ARTO",
    "cityName": "Pratapgarh",
    "citySlug": "pratapgarh",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-73",
    "slug": "up-73",
    "rtoName": "Kaushambi ARTO",
    "cityName": "Kaushambi",
    "citySlug": "kaushambi",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-74",
    "slug": "up-74",
    "rtoName": "Kannauj ARTO",
    "cityName": "Kannauj",
    "citySlug": "kannauj",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-75",
    "slug": "up-75",
    "rtoName": "Etawah ARTO",
    "cityName": "Etawah",
    "citySlug": "etawah",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-76",
    "slug": "up-76",
    "rtoName": "Farrukhabad (Fatehgarh) ARTO",
    "cityName": "Farrukhabad",
    "citySlug": "farrukhabad",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-77",
    "slug": "up-77",
    "rtoName": "Kanpur Dehat (Akbarpur) ARTO",
    "cityName": "Kanpur Dehat",
    "citySlug": "kanpur-dehat",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-78",
    "slug": "up-78",
    "rtoName": "Kanpur Nagar Industrial RTO",
    "cityName": "Kanpur Nagar",
    "citySlug": "kanpur-nagar",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-79",
    "slug": "up-79",
    "rtoName": "Auraiya ARTO",
    "cityName": "Auraiya",
    "citySlug": "auraiya",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-80",
    "slug": "up-80",
    "rtoName": "Agra Central RTO",
    "cityName": "Agra",
    "citySlug": "agra",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-81",
    "slug": "up-81",
    "rtoName": "Aligarh RTO",
    "cityName": "Aligarh",
    "citySlug": "aligarh",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-82",
    "slug": "up-82",
    "rtoName": "Etah ARTO",
    "cityName": "Etah",
    "citySlug": "etah",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-83",
    "slug": "up-83",
    "rtoName": "Firozabad Glass Hub ARTO",
    "cityName": "Firozabad",
    "citySlug": "firozabad",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-84",
    "slug": "up-84",
    "rtoName": "Mainpuri ARTO",
    "cityName": "Mainpuri",
    "citySlug": "mainpuri",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-85",
    "slug": "up-85",
    "rtoName": "Mathura ARTO",
    "cityName": "Mathura",
    "citySlug": "mathura",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-86",
    "slug": "up-86",
    "rtoName": "Hathras ARTO",
    "cityName": "Hathras",
    "citySlug": "hathras",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-87",
    "slug": "up-87",
    "rtoName": "Kasganj ARTO",
    "cityName": "Kasganj",
    "citySlug": "kasganj",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-90",
    "slug": "up-90",
    "rtoName": "Banda RTO",
    "cityName": "Banda",
    "citySlug": "banda",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-91",
    "slug": "up-91",
    "rtoName": "Hamirpur ARTO",
    "cityName": "Hamirpur",
    "citySlug": "hamirpur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-92",
    "slug": "up-92",
    "rtoName": "Jalaun (Orai) ARTO",
    "cityName": "Jalaun",
    "citySlug": "jalaun",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-93",
    "slug": "up-93",
    "rtoName": "Jhansi RTO",
    "cityName": "Jhansi",
    "citySlug": "jhansi",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-94",
    "slug": "up-94",
    "rtoName": "Lalitpur Mining Hub ARTO",
    "cityName": "Lalitpur",
    "citySlug": "lalitpur",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-95",
    "slug": "up-95",
    "rtoName": "Mahoba Granite Hub ARTO",
    "cityName": "Mahoba",
    "citySlug": "mahoba",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UP-96",
    "slug": "up-96",
    "rtoName": "Chitrakoot (Karwi) ARTO",
    "cityName": "Chitrakoot",
    "citySlug": "chitrakoot",
    "stateName": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "stateCode": "UP",
    "isUt": false
  },
  {
    "code": "UK-01",
    "slug": "uk-01",
    "rtoName": "Almora ARTO",
    "cityName": "Almora",
    "citySlug": "almora",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-02",
    "slug": "uk-02",
    "rtoName": "Bageshwar ARTO",
    "cityName": "Bageshwar",
    "citySlug": "bageshwar",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-03",
    "slug": "uk-03",
    "rtoName": "Champawat (Tanakpur) ARTO",
    "cityName": "Champawat",
    "citySlug": "champawat",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-04",
    "slug": "uk-04",
    "rtoName": "Haldwani (Nainital) RTO",
    "cityName": "Nainital",
    "citySlug": "nainital",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-19",
    "slug": "uk-19",
    "rtoName": "Ramnagar ARTO",
    "cityName": "Nainital",
    "citySlug": "nainital",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-05",
    "slug": "uk-05",
    "rtoName": "Pithoragarh ARTO",
    "cityName": "Pithoragarh",
    "citySlug": "pithoragarh",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-06",
    "slug": "uk-06",
    "rtoName": "Rudrapur (Pantnagar) RTO",
    "cityName": "Udham Singh Nagar",
    "citySlug": "udham-singh-nagar",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-18",
    "slug": "uk-18",
    "rtoName": "Kashipur Industrial ARTO",
    "cityName": "Udham Singh Nagar",
    "citySlug": "udham-singh-nagar",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-07",
    "slug": "uk-07",
    "rtoName": "Dehradun Central RTO",
    "cityName": "Dehradun",
    "citySlug": "dehradun",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-14",
    "slug": "uk-14",
    "rtoName": "Rishikesh ARTO",
    "cityName": "Dehradun",
    "citySlug": "dehradun",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-16",
    "slug": "uk-16",
    "rtoName": "Vikasnagar ARTO",
    "cityName": "Dehradun",
    "citySlug": "dehradun",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-08",
    "slug": "uk-08",
    "rtoName": "Haridwar Industrial RTO",
    "cityName": "Haridwar",
    "citySlug": "haridwar",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-17",
    "slug": "uk-17",
    "rtoName": "Roorkee ARTO",
    "cityName": "Haridwar",
    "citySlug": "haridwar",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-09",
    "slug": "uk-09",
    "rtoName": "New Tehri ARTO",
    "cityName": "Tehri Garhwal",
    "citySlug": "tehri-garhwal",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-10",
    "slug": "uk-10",
    "rtoName": "Uttarkashi ARTO",
    "cityName": "Uttarkashi",
    "citySlug": "uttarkashi",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-11",
    "slug": "uk-11",
    "rtoName": "Gopeshwar (Chamoli) ARTO",
    "cityName": "Chamoli",
    "citySlug": "chamoli",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-12",
    "slug": "uk-12",
    "rtoName": "Pauri ARTO",
    "cityName": "Pauri Garhwal",
    "citySlug": "pauri-garhwal",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-15",
    "slug": "uk-15",
    "rtoName": "Kotdwar ARTO",
    "cityName": "Pauri Garhwal",
    "citySlug": "pauri-garhwal",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-13",
    "slug": "uk-13",
    "rtoName": "Rudraprayag ARTO",
    "cityName": "Rudraprayag",
    "citySlug": "rudraprayag",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "UK-20",
    "slug": "uk-20",
    "rtoName": "Ranikhet ARTO",
    "cityName": "Ranikhet",
    "citySlug": "ranikhet",
    "stateName": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "stateCode": "UK",
    "isUt": false
  },
  {
    "code": "WB-01",
    "slug": "wb-01",
    "rtoName": "Kolkata North (Beltala) RTO",
    "cityName": "Kolkata",
    "citySlug": "kolkata",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-02",
    "slug": "wb-02",
    "rtoName": "Kolkata Central (Beltala) RTO",
    "cityName": "Kolkata",
    "citySlug": "kolkata",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-03",
    "slug": "wb-03",
    "rtoName": "Kolkata Central RTO",
    "cityName": "Kolkata",
    "citySlug": "kolkata",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-04",
    "slug": "wb-04",
    "rtoName": "Kolkata South (Beltala) RTO",
    "cityName": "Kolkata",
    "citySlug": "kolkata",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-05",
    "slug": "wb-05",
    "rtoName": "Kolkata Commercial RTO",
    "cityName": "Kolkata",
    "citySlug": "kolkata",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-06",
    "slug": "wb-06",
    "rtoName": "Kolkata South West (Behala) RTO",
    "cityName": "Kolkata",
    "citySlug": "kolkata",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-07",
    "slug": "wb-07",
    "rtoName": "Kolkata East (Salt Lake) RTO",
    "cityName": "Kolkata",
    "citySlug": "kolkata",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-08",
    "slug": "wb-08",
    "rtoName": "Kolkata South East (Kasba) RTO",
    "cityName": "Kolkata",
    "citySlug": "kolkata",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-11",
    "slug": "wb-11",
    "rtoName": "Howrah City RTO",
    "cityName": "Howrah",
    "citySlug": "howrah",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-12",
    "slug": "wb-12",
    "rtoName": "Howrah Rural (Uluberia) RTO",
    "cityName": "Howrah",
    "citySlug": "howrah",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-13",
    "slug": "wb-13",
    "rtoName": "Uluberia Commercial RTO",
    "cityName": "Howrah",
    "citySlug": "howrah",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-14",
    "slug": "wb-14",
    "rtoName": "Howrah Commercial RTO",
    "cityName": "Howrah",
    "citySlug": "howrah",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-15",
    "slug": "wb-15",
    "rtoName": "Hooghly (Chinsurah) RTO",
    "cityName": "Hooghly",
    "citySlug": "hooghly",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-16",
    "slug": "wb-16",
    "rtoName": "Arambagh ARTO",
    "cityName": "Hooghly",
    "citySlug": "hooghly",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-17",
    "slug": "wb-17",
    "rtoName": "Hooghly Commercial RTO",
    "cityName": "Hooghly",
    "citySlug": "hooghly",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-18",
    "slug": "wb-18",
    "rtoName": "Dankuni Logistics Hub ARTO",
    "cityName": "Hooghly",
    "citySlug": "hooghly",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-19",
    "slug": "wb-19",
    "rtoName": "Alipore (South 24 Parganas) RTO",
    "cityName": "South 24 Parganas",
    "citySlug": "south-24-parganas",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-20",
    "slug": "wb-20",
    "rtoName": "Diamond Harbour ARTO",
    "cityName": "South 24 Parganas",
    "citySlug": "south-24-parganas",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-22",
    "slug": "wb-22",
    "rtoName": "Canning ARTO",
    "cityName": "South 24 Parganas",
    "citySlug": "south-24-parganas",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-23",
    "slug": "wb-23",
    "rtoName": "Barrackpore RTO",
    "cityName": "North 24 Parganas",
    "citySlug": "north-24-parganas",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-24",
    "slug": "wb-24",
    "rtoName": "Barasat RTO",
    "cityName": "North 24 Parganas",
    "citySlug": "north-24-parganas",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-25",
    "slug": "wb-25",
    "rtoName": "Basirhat ARTO",
    "cityName": "North 24 Parganas",
    "citySlug": "north-24-parganas",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-26",
    "slug": "wb-26",
    "rtoName": "Bongaon (Petrapole Border) ARTO",
    "cityName": "North 24 Parganas",
    "citySlug": "north-24-parganas",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-29",
    "slug": "wb-29",
    "rtoName": "Tamluk RTO",
    "cityName": "Purba Medinipur",
    "citySlug": "purba-medinipur",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-30",
    "slug": "wb-30",
    "rtoName": "Haldia Port Hub RTO",
    "cityName": "Purba Medinipur",
    "citySlug": "purba-medinipur",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-31",
    "slug": "wb-31",
    "rtoName": "Contai ARTO",
    "cityName": "Purba Medinipur",
    "citySlug": "purba-medinipur",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-32",
    "slug": "wb-32",
    "rtoName": "Egra ARTO",
    "cityName": "Purba Medinipur",
    "citySlug": "purba-medinipur",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-33",
    "slug": "wb-33",
    "rtoName": "Midnapore RTO",
    "cityName": "Paschim Medinipur",
    "citySlug": "paschim-medinipur",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-34",
    "slug": "wb-34",
    "rtoName": "Kharagpur Logistics RTO",
    "cityName": "Paschim Medinipur",
    "citySlug": "paschim-medinipur",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-36",
    "slug": "wb-36",
    "rtoName": "Ghatal ARTO",
    "cityName": "Paschim Medinipur",
    "citySlug": "paschim-medinipur",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-37",
    "slug": "wb-37",
    "rtoName": "Asansol Industrial Hub RTO",
    "cityName": "Paschim Bardhaman",
    "citySlug": "paschim-bardhaman",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-38",
    "slug": "wb-38",
    "rtoName": "Asansol Commercial RTO",
    "cityName": "Paschim Bardhaman",
    "citySlug": "paschim-bardhaman",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-39",
    "slug": "wb-39",
    "rtoName": "Durgapur Steel Hub RTO",
    "cityName": "Paschim Bardhaman",
    "citySlug": "paschim-bardhaman",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-40",
    "slug": "wb-40",
    "rtoName": "Durgapur Commercial RTO",
    "cityName": "Paschim Bardhaman",
    "citySlug": "paschim-bardhaman",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-44",
    "slug": "wb-44",
    "rtoName": "Raniganj Coal Belt ARTO",
    "cityName": "Paschim Bardhaman",
    "citySlug": "paschim-bardhaman",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-41",
    "slug": "wb-41",
    "rtoName": "Burdwan (Bardhaman) RTO",
    "cityName": "Purba Bardhaman",
    "citySlug": "purba-bardhaman",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-42",
    "slug": "wb-42",
    "rtoName": "Kalna ARTO",
    "cityName": "Purba Bardhaman",
    "citySlug": "purba-bardhaman",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-43",
    "slug": "wb-43",
    "rtoName": "Katwa ARTO",
    "cityName": "Purba Bardhaman",
    "citySlug": "purba-bardhaman",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-47",
    "slug": "wb-47",
    "rtoName": "Bolpur (Santiniketan) ARTO",
    "cityName": "Birbhum",
    "citySlug": "birbhum",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-48",
    "slug": "wb-48",
    "rtoName": "Suri (Birbhum) RTO",
    "cityName": "Birbhum",
    "citySlug": "birbhum",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-49",
    "slug": "wb-49",
    "rtoName": "Rampurhat ARTO",
    "cityName": "Birbhum",
    "citySlug": "birbhum",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-51",
    "slug": "wb-51",
    "rtoName": "Krishnanagar (Nadia) RTO",
    "cityName": "Nadia",
    "citySlug": "nadia",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-52",
    "slug": "wb-52",
    "rtoName": "Ranaghat ARTO",
    "cityName": "Nadia",
    "citySlug": "nadia",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-53",
    "slug": "wb-53",
    "rtoName": "Tehatta ARTO",
    "cityName": "Nadia",
    "citySlug": "nadia",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-54",
    "slug": "wb-54",
    "rtoName": "Kalyani Industrial ARTO",
    "cityName": "Nadia",
    "citySlug": "nadia",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-55",
    "slug": "wb-55",
    "rtoName": "Berhampore (Murshidabad) RTO",
    "cityName": "Murshidabad",
    "citySlug": "murshidabad",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-56",
    "slug": "wb-56",
    "rtoName": "Jangipur ARTO",
    "cityName": "Murshidabad",
    "citySlug": "murshidabad",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-57",
    "slug": "wb-57",
    "rtoName": "Kandi ARTO",
    "cityName": "Murshidabad",
    "citySlug": "murshidabad",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-58",
    "slug": "wb-58",
    "rtoName": "Lalbagh ARTO",
    "cityName": "Murshidabad",
    "citySlug": "murshidabad",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-59",
    "slug": "wb-59",
    "rtoName": "Raiganj (North Dinajpur) RTO",
    "cityName": "Uttar Dinajpur",
    "citySlug": "uttar-dinajpur",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-60",
    "slug": "wb-60",
    "rtoName": "Islampur ARTO",
    "cityName": "Uttar Dinajpur",
    "citySlug": "uttar-dinajpur",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-61",
    "slug": "wb-61",
    "rtoName": "Balurghat (South Dinajpur) RTO",
    "cityName": "Dakshin Dinajpur",
    "citySlug": "dakshin-dinajpur",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-62",
    "slug": "wb-62",
    "rtoName": "Gangarampur ARTO",
    "cityName": "Dakshin Dinajpur",
    "citySlug": "dakshin-dinajpur",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-63",
    "slug": "wb-63",
    "rtoName": "English Bazar (Malda) RTO",
    "cityName": "Malda",
    "citySlug": "malda",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-64",
    "slug": "wb-64",
    "rtoName": "Chanchal ARTO",
    "cityName": "Malda",
    "citySlug": "malda",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-65",
    "slug": "wb-65",
    "rtoName": "Siliguri Commercial RTO",
    "cityName": "Darjeeling",
    "citySlug": "darjeeling",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-66",
    "slug": "wb-66",
    "rtoName": "Siliguri RTO",
    "cityName": "Darjeeling",
    "citySlug": "darjeeling",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-74",
    "slug": "wb-74",
    "rtoName": "Darjeeling RTO",
    "cityName": "Darjeeling",
    "citySlug": "darjeeling",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-76",
    "slug": "wb-76",
    "rtoName": "Kurseong ARTO",
    "cityName": "Darjeeling",
    "citySlug": "darjeeling",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-78",
    "slug": "wb-78",
    "rtoName": "Mirik ARTO",
    "cityName": "Darjeeling",
    "citySlug": "darjeeling",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-67",
    "slug": "wb-67",
    "rtoName": "Jalpaiguri RTO",
    "cityName": "Jalpaiguri",
    "citySlug": "jalpaiguri",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-70",
    "slug": "wb-70",
    "rtoName": "Malbazar ARTO",
    "cityName": "Jalpaiguri",
    "citySlug": "jalpaiguri",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-68",
    "slug": "wb-68",
    "rtoName": "Alipurduar RTO",
    "cityName": "Alipurduar",
    "citySlug": "alipurduar",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-69",
    "slug": "wb-69",
    "rtoName": "Alipurduar Commercial RTO",
    "cityName": "Alipurduar",
    "citySlug": "alipurduar",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-71",
    "slug": "wb-71",
    "rtoName": "Cooch Behar RTO",
    "cityName": "Cooch Behar",
    "citySlug": "cooch-behar",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-72",
    "slug": "wb-72",
    "rtoName": "Mathabhanga ARTO",
    "cityName": "Cooch Behar",
    "citySlug": "cooch-behar",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-73",
    "slug": "wb-73",
    "rtoName": "Dinhata ARTO",
    "cityName": "Cooch Behar",
    "citySlug": "cooch-behar",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-77",
    "slug": "wb-77",
    "rtoName": "Kalimpong RTO",
    "cityName": "Kalimpong",
    "citySlug": "kalimpong",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-79",
    "slug": "wb-79",
    "rtoName": "Kalimpong Sub-Divisional RTO",
    "cityName": "Kalimpong",
    "citySlug": "kalimpong",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-85",
    "slug": "wb-85",
    "rtoName": "Bankura RTO",
    "cityName": "Bankura",
    "citySlug": "bankura",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-86",
    "slug": "wb-86",
    "rtoName": "Bishnupur ARTO",
    "cityName": "Bankura",
    "citySlug": "bankura",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-87",
    "slug": "wb-87",
    "rtoName": "Khatra ARTO",
    "cityName": "Bankura",
    "citySlug": "bankura",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-82",
    "slug": "wb-82",
    "rtoName": "Raghunathpur ARTO",
    "cityName": "Purulia",
    "citySlug": "purulia",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-89",
    "slug": "wb-89",
    "rtoName": "Purulia RTO",
    "cityName": "Purulia",
    "citySlug": "purulia",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-90",
    "slug": "wb-90",
    "rtoName": "Raghunathpur Commercial ARTO",
    "cityName": "Purulia",
    "citySlug": "purulia",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "WB-91",
    "slug": "wb-91",
    "rtoName": "Jhargram RTO",
    "cityName": "Jhargram",
    "citySlug": "jhargram",
    "stateName": "West Bengal",
    "stateSlug": "west-bengal",
    "stateCode": "WB",
    "isUt": false
  },
  {
    "code": "AN-01",
    "slug": "an-01",
    "rtoName": "Port Blair (South Andaman) RTO",
    "cityName": "Port Blair",
    "citySlug": "port-blair",
    "stateName": "Andaman and Nicobar Islands",
    "stateSlug": "andaman-and-nicobar-islands",
    "stateCode": "AN",
    "isUt": true
  },
  {
    "code": "AN-02",
    "slug": "an-02",
    "rtoName": "Car Nicobar RTO",
    "cityName": "Car Nicobar",
    "citySlug": "car-nicobar",
    "stateName": "Andaman and Nicobar Islands",
    "stateSlug": "andaman-and-nicobar-islands",
    "stateCode": "AN",
    "isUt": true
  },
  {
    "code": "CH-01",
    "slug": "ch-01",
    "rtoName": "Chandigarh Central RLA",
    "cityName": "Chandigarh",
    "citySlug": "chandigarh",
    "stateName": "Chandigarh",
    "stateSlug": "chandigarh",
    "stateCode": "CH",
    "isUt": true
  },
  {
    "code": "CH-02",
    "slug": "ch-02",
    "rtoName": "Chandigarh Commercial STA",
    "cityName": "Chandigarh",
    "citySlug": "chandigarh",
    "stateName": "Chandigarh",
    "stateSlug": "chandigarh",
    "stateCode": "CH",
    "isUt": true
  },
  {
    "code": "CH-03",
    "slug": "ch-03",
    "rtoName": "Chandigarh South RLA",
    "cityName": "Chandigarh",
    "citySlug": "chandigarh",
    "stateName": "Chandigarh",
    "stateSlug": "chandigarh",
    "stateCode": "CH",
    "isUt": true
  },
  {
    "code": "CH-04",
    "slug": "ch-04",
    "rtoName": "Chandigarh East RLA",
    "cityName": "Chandigarh",
    "citySlug": "chandigarh",
    "stateName": "Chandigarh",
    "stateSlug": "chandigarh",
    "stateCode": "CH",
    "isUt": true
  },
  {
    "code": "DD-01",
    "slug": "dd-01",
    "rtoName": "Daman RTO",
    "cityName": "Daman",
    "citySlug": "daman",
    "stateName": "Dadra and Nagar Haveli and Daman and Diu",
    "stateSlug": "dadra-and-nagar-haveli-and-daman-and-diu",
    "stateCode": "DD",
    "isUt": true
  },
  {
    "code": "DD-02",
    "slug": "dd-02",
    "rtoName": "Diu RTO",
    "cityName": "Diu",
    "citySlug": "diu",
    "stateName": "Dadra and Nagar Haveli and Daman and Diu",
    "stateSlug": "dadra-and-nagar-haveli-and-daman-and-diu",
    "stateCode": "DD",
    "isUt": true
  },
  {
    "code": "DD-03",
    "slug": "dd-03",
    "rtoName": "Silvassa (Dadra & Nagar Haveli) RTO",
    "cityName": "Silvassa",
    "citySlug": "silvassa",
    "stateName": "Dadra and Nagar Haveli and Daman and Diu",
    "stateSlug": "dadra-and-nagar-haveli-and-daman-and-diu",
    "stateCode": "DD",
    "isUt": true
  },
  {
    "code": "DL-01",
    "slug": "dl-01",
    "rtoName": "Mall Road (North Delhi) RTO",
    "cityName": "North Delhi",
    "citySlug": "north-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-08",
    "slug": "dl-08",
    "rtoName": "Wazirpur (North West Delhi I) RTO",
    "cityName": "North Delhi",
    "citySlug": "north-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-11",
    "slug": "dl-11",
    "rtoName": "Rohini (North West Delhi II) RTO",
    "cityName": "North Delhi",
    "citySlug": "north-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-02",
    "slug": "dl-02",
    "rtoName": "IP Depot (New Delhi) RTO",
    "cityName": "New Delhi",
    "citySlug": "new-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-03",
    "slug": "dl-03",
    "rtoName": "Sheikh Sarai (South Delhi) RTO",
    "cityName": "South Delhi",
    "citySlug": "south-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-12",
    "slug": "dl-12",
    "rtoName": "Vasant Vihar (South West Delhi II) RTO",
    "cityName": "South Delhi",
    "citySlug": "south-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-04",
    "slug": "dl-04",
    "rtoName": "Janakpuri (West Delhi I) RTO",
    "cityName": "West Delhi",
    "citySlug": "west-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-10",
    "slug": "dl-10",
    "rtoName": "Raja Garden (West Delhi II) RTO",
    "cityName": "West Delhi",
    "citySlug": "west-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-05",
    "slug": "dl-05",
    "rtoName": "Loni Road (North East Delhi) RTO",
    "cityName": "North East Delhi",
    "citySlug": "north-east-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-06",
    "slug": "dl-06",
    "rtoName": "Sarai Kale Khan (Central Delhi) RTO",
    "cityName": "Central Delhi",
    "citySlug": "central-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-07",
    "slug": "dl-07",
    "rtoName": "Mayur Vihar (East Delhi) RTO",
    "cityName": "East Delhi",
    "citySlug": "east-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-13",
    "slug": "dl-13",
    "rtoName": "Surajmal Vihar (Shahdara) RTO",
    "cityName": "East Delhi",
    "citySlug": "east-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-09",
    "slug": "dl-09",
    "rtoName": "Palam (South West Delhi I) RTO",
    "cityName": "South West Delhi",
    "citySlug": "south-west-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "DL-14",
    "slug": "dl-14",
    "rtoName": "Dwarka (South West Delhi III) RTO",
    "cityName": "South West Delhi",
    "citySlug": "south-west-delhi",
    "stateName": "Delhi",
    "stateSlug": "delhi",
    "stateCode": "DL",
    "isUt": true
  },
  {
    "code": "JK-01",
    "slug": "jk-01",
    "rtoName": "Srinagar Central RTO",
    "cityName": "Srinagar",
    "citySlug": "srinagar",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-02",
    "slug": "jk-02",
    "rtoName": "Jammu Central RTO",
    "cityName": "Jammu",
    "citySlug": "jammu",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-03",
    "slug": "jk-03",
    "rtoName": "Anantnag ARTO",
    "cityName": "Anantnag",
    "citySlug": "anantnag",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-04",
    "slug": "jk-04",
    "rtoName": "Budgam ARTO",
    "cityName": "Budgam",
    "citySlug": "budgam",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-05",
    "slug": "jk-05",
    "rtoName": "Baramulla ARTO",
    "cityName": "Baramulla",
    "citySlug": "baramulla",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-06",
    "slug": "jk-06",
    "rtoName": "Doda ARTO",
    "cityName": "Doda",
    "citySlug": "doda",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-08",
    "slug": "jk-08",
    "rtoName": "Kathua Industrial Gateway RTO",
    "cityName": "Kathua",
    "citySlug": "kathua",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-09",
    "slug": "jk-09",
    "rtoName": "Kupwara ARTO",
    "cityName": "Kupwara",
    "citySlug": "kupwara",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-11",
    "slug": "jk-11",
    "rtoName": "Rajouri ARTO",
    "cityName": "Rajouri",
    "citySlug": "rajouri",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-12",
    "slug": "jk-12",
    "rtoName": "Poonch ARTO",
    "cityName": "Poonch",
    "citySlug": "poonch",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-13",
    "slug": "jk-13",
    "rtoName": "Pulwama ARTO",
    "cityName": "Pulwama",
    "citySlug": "pulwama",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-14",
    "slug": "jk-14",
    "rtoName": "Udhampur ARTO",
    "cityName": "Udhampur",
    "citySlug": "udhampur",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-15",
    "slug": "jk-15",
    "rtoName": "Bandipora ARTO",
    "cityName": "Bandipora",
    "citySlug": "bandipora",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-16",
    "slug": "jk-16",
    "rtoName": "Ganderbal ARTO",
    "cityName": "Ganderbal",
    "citySlug": "ganderbal",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-17",
    "slug": "jk-17",
    "rtoName": "Kulgam ARTO",
    "cityName": "Kulgam",
    "citySlug": "kulgam",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-18",
    "slug": "jk-18",
    "rtoName": "Shopian ARTO",
    "cityName": "Shopian",
    "citySlug": "shopian",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-19",
    "slug": "jk-19",
    "rtoName": "Ramban ARTO",
    "cityName": "Ramban",
    "citySlug": "ramban",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-20",
    "slug": "jk-20",
    "rtoName": "Reasi ARTO",
    "cityName": "Reasi",
    "citySlug": "reasi",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-21",
    "slug": "jk-21",
    "rtoName": "Samba Industrial ARTO",
    "cityName": "Samba",
    "citySlug": "samba",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "JK-22",
    "slug": "jk-22",
    "rtoName": "Kishtwar ARTO",
    "cityName": "Kishtwar",
    "citySlug": "kishtwar",
    "stateName": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "stateCode": "JK",
    "isUt": true
  },
  {
    "code": "LA-01",
    "slug": "la-01",
    "rtoName": "Leh Ladakh RTO",
    "cityName": "Leh",
    "citySlug": "leh",
    "stateName": "Ladakh",
    "stateSlug": "ladakh",
    "stateCode": "LA",
    "isUt": true
  },
  {
    "code": "LA-02",
    "slug": "la-02",
    "rtoName": "Kargil RTO",
    "cityName": "Kargil",
    "citySlug": "kargil",
    "stateName": "Ladakh",
    "stateSlug": "ladakh",
    "stateCode": "LA",
    "isUt": true
  },
  {
    "code": "LD-01",
    "slug": "ld-01",
    "rtoName": "Kavaratti Island RTO",
    "cityName": "Kavaratti",
    "citySlug": "kavaratti",
    "stateName": "Lakshadweep",
    "stateSlug": "lakshadweep",
    "stateCode": "LD",
    "isUt": true
  },
  {
    "code": "LD-02",
    "slug": "ld-02",
    "rtoName": "Agatti Island RTO",
    "cityName": "Agatti",
    "citySlug": "agatti",
    "stateName": "Lakshadweep",
    "stateSlug": "lakshadweep",
    "stateCode": "LD",
    "isUt": true
  },
  {
    "code": "LD-03",
    "slug": "ld-03",
    "rtoName": "Amini Island RTO",
    "cityName": "Amini",
    "citySlug": "amini",
    "stateName": "Lakshadweep",
    "stateSlug": "lakshadweep",
    "stateCode": "LD",
    "isUt": true
  },
  {
    "code": "LD-04",
    "slug": "ld-04",
    "rtoName": "Andrott Island RTO",
    "cityName": "Andrott",
    "citySlug": "andrott",
    "stateName": "Lakshadweep",
    "stateSlug": "lakshadweep",
    "stateCode": "LD",
    "isUt": true
  },
  {
    "code": "LD-05",
    "slug": "ld-05",
    "rtoName": "Kadmat Island RTO",
    "cityName": "Kadmat",
    "citySlug": "kadmat",
    "stateName": "Lakshadweep",
    "stateSlug": "lakshadweep",
    "stateCode": "LD",
    "isUt": true
  },
  {
    "code": "LD-06",
    "slug": "ld-06",
    "rtoName": "Kiltan Island RTO",
    "cityName": "Kiltan",
    "citySlug": "kiltan",
    "stateName": "Lakshadweep",
    "stateSlug": "lakshadweep",
    "stateCode": "LD",
    "isUt": true
  },
  {
    "code": "LD-07",
    "slug": "ld-07",
    "rtoName": "Chetlat Island RTO",
    "cityName": "Chetlat",
    "citySlug": "chetlat",
    "stateName": "Lakshadweep",
    "stateSlug": "lakshadweep",
    "stateCode": "LD",
    "isUt": true
  },
  {
    "code": "LD-08",
    "slug": "ld-08",
    "rtoName": "Kalpeni Island RTO",
    "cityName": "Kalpeni",
    "citySlug": "kalpeni",
    "stateName": "Lakshadweep",
    "stateSlug": "lakshadweep",
    "stateCode": "LD",
    "isUt": true
  },
  {
    "code": "LD-09",
    "slug": "ld-09",
    "rtoName": "Minicoy Island RTO",
    "cityName": "Minicoy",
    "citySlug": "minicoy",
    "stateName": "Lakshadweep",
    "stateSlug": "lakshadweep",
    "stateCode": "LD",
    "isUt": true
  },
  {
    "code": "PY-01",
    "slug": "py-01",
    "rtoName": "Pondicherry Central RTO",
    "cityName": "Pondicherry",
    "citySlug": "pondicherry",
    "stateName": "Puducherry",
    "stateSlug": "puducherry",
    "stateCode": "PY",
    "isUt": true
  },
  {
    "code": "PY-05",
    "slug": "py-05",
    "rtoName": "Oulgaret RTO",
    "cityName": "Pondicherry",
    "citySlug": "pondicherry",
    "stateName": "Puducherry",
    "stateSlug": "puducherry",
    "stateCode": "PY",
    "isUt": true
  },
  {
    "code": "PY-02",
    "slug": "py-02",
    "rtoName": "Karaikal RTO",
    "cityName": "Karaikal",
    "citySlug": "karaikal",
    "stateName": "Puducherry",
    "stateSlug": "puducherry",
    "stateCode": "PY",
    "isUt": true
  },
  {
    "code": "PY-03",
    "slug": "py-03",
    "rtoName": "Mahe RTO",
    "cityName": "Mahe",
    "citySlug": "mahe",
    "stateName": "Puducherry",
    "stateSlug": "puducherry",
    "stateCode": "PY",
    "isUt": true
  },
  {
    "code": "PY-04",
    "slug": "py-04",
    "rtoName": "Yanam RTO",
    "cityName": "Yanam",
    "citySlug": "yanam",
    "stateName": "Puducherry",
    "stateSlug": "puducherry",
    "stateCode": "PY",
    "isUt": true
  }
];

/**
 * Get all 28 states and 8 union territories
 */
export function getAllIndiaStates(): MasterState[] {
  return ALL_INDIA_STATES;
}

/**
 * Get only states (28 states)
 */
export function getIndiaStatesOnly(): MasterState[] {
  return ALL_INDIA_STATES.filter((s) => s.type === "state");
}

/**
 * Get only union territories (8 UTs)
 */
export function getIndiaUnionTerritoriesOnly(): MasterState[] {
  return ALL_INDIA_STATES.filter((s) => s.type === "union-territory");
}

/**
 * Find state by slug (e.g. 'uttar-pradesh', 'maharashtra', 'delhi')
 */
export function getStateBySlug(slug: string): MasterState | undefined {
  const clean = slug.toLowerCase().trim();
  return ALL_INDIA_STATES.find((s) => s.slug === clean || s.code.toLowerCase() === clean);
}

/**
 * Find city in a state
 */
export function getCityBySlug(stateSlug: string, citySlug: string): { state: MasterState; city: MasterCity } | undefined {
  const state = getStateBySlug(stateSlug);
  if (!state) return undefined;
  const cleanCity = citySlug.toLowerCase().trim();
  const city = state.cities.find((c) => c.slug === cleanCity);
  if (!city) return undefined;
  return { state, city };
}

/**
 * Find RTO by code (e.g. 'UP-78', 'RJ-14', 'MH-12', 'DL-01')
 */
export function getRtoByCode(rtoCodeOrSlug: string): FlattenedRto | undefined {
  const clean = rtoCodeOrSlug.toUpperCase().replace(/[^A-Z0-9-]/g, "").trim();
  const cleanSlug = rtoCodeOrSlug.toLowerCase().trim();
  return ALL_INDIA_RTOS.find((r) => r.code === clean || r.slug === cleanSlug);
}

/**
 * Search all RTOs across India by city, state, or RTO code
 */
export function searchAllIndiaRtos(query: string, limit = 20): FlattenedRto[] {
  if (!query || !query.trim()) return ALL_INDIA_RTOS.slice(0, limit);
  const q = query.toLowerCase().trim();
  return ALL_INDIA_RTOS.filter(
    (r) =>
      r.code.toLowerCase().includes(q) ||
      r.cityName.toLowerCase().includes(q) ||
      r.stateName.toLowerCase().includes(q) ||
      r.rtoName.toLowerCase().includes(q)
  ).slice(0, limit);
}

/**
 * Find complete RTO detail with state, city and flattened data
 */
export function getRtoDetail(stateSlug: string, citySlug: string, rtoSlug: string): {
  state: MasterState;
  city: MasterCity;
  rto: MasterRtoOffice;
  flat: FlattenedRto;
} | undefined {
  const cityMatch = getCityBySlug(stateSlug, citySlug);
  if (!cityMatch) return undefined;
  const cleanRto = rtoSlug.toLowerCase().trim();
  const rto = cityMatch.city.rtos.find(
    (r) => r.slug === cleanRto || r.code.toLowerCase() === cleanRto
  );
  if (!rto) return undefined;
  const flat = getRtoByCode(rto.code) || {
    code: rto.code,
    slug: rto.slug,
    rtoName: rto.name,
    cityName: cityMatch.city.name,
    citySlug: cityMatch.city.slug,
    stateName: cityMatch.state.name,
    stateSlug: cityMatch.state.slug,
    stateCode: cityMatch.state.code,
    isUt: cityMatch.state.type === "union-territory",
  };
  return {
    state: cityMatch.state,
    city: cityMatch.city,
    rto,
    flat,
  };
}

/**
 * Static params generator for all 36 States & Union Territories
 */
export function getAllStateParams(): { state: string }[] {
  return ALL_INDIA_STATES.map((s) => ({
    state: s.slug,
  }));
}

/**
 * Static params generator for top priority RTO offices across major states
 */
export function getPriorityRtoParams(limit = 100): { state: string; city: string; "rto-code": string }[] {
  const params: { state: string; city: string; "rto-code": string }[] = [];
  const priorityStateCodes = ["DL", "KA", "TN", "MH", "UP", "RJ", "GJ", "HR", "MP", "PB", "WB", "TS", "AP", "BR", "JH", "OD"];
  
  for (const s of ALL_INDIA_STATES) {
    if (priorityStateCodes.includes(s.code)) {
      for (const c of s.cities) {
        for (const r of c.rtos) {
          params.push({
            state: s.slug,
            city: c.slug,
            "rto-code": r.slug,
          });
          if (params.length >= limit) return params;
        }
      }
    }
  }
  return params;
}

/**
 * Summary stats of Pan-India coverage
 */
export const PAN_INDIA_COVERAGE_STATS = {
  totalStates: 28,
  totalUnionTerritories: 8,
  totalRegions: 36,
  totalCities: ALL_INDIA_STATES.reduce((acc, s) => acc + s.cities.length, 0),
  totalRtos: ALL_INDIA_RTOS.length,
};
