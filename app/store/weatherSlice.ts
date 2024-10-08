"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  location: string;
  data: any;
  error: string | null;
  localities: string[];
}

const initialState: WeatherState = {
  location: "",
  data: null,
  error: null,
  localities: [
    "Sarita Vihar",
    "Faridabad Sector 41-50",
    "New Friends Colony",
    "Sector 26 (Noida)",
    "New Industrial Town",
    "Tilak Nagar",
    "Sector 10, Gurgaon",
    "Ashok Vihar, Delhi",
    "Kalkaji",
    "Sector 53",
    "Sector 49",
    "Vasundhara",
    "Rajinder Nagar",
    "Safdarjung Enclave",
    "Connaught Place",
    "Sector 66",
    "Sector 57",
    "Moti Bagh, Delhi",
    "Patel Nagar, Delhi",
    "Greater Noida",
    "Karkardooma, Delhi",
    "Tigaon",
    "Sector 50 (Noida)",
    "Vasant Kunj, Delhi",
    "Dwarka, Delhi",
    "Sector 15",
    "Mayur Vihar Phase III",
    "Crossing Republik",
    "Sector 28",
    "Palam Vihar, Gurgaon",
    "Sector 63 (Noida)",
    "Raj Nagar, Ghaziabad",
    "Sector 128",
    "Sector 56, Gurgaon",
    "Indirapuram",
    "Malviya Nagar",
    "Sector 43, Gurgaon",
    "Sector 120 (Noida)",
    "Saket",
    "Sector 18 (Noida)",
    "Naraina",
    "Patparganj",
    "Ghitorni",
    "Faridabad Sector 1-11",
    "Sector 24",
    "Rajouri Garden",
    "Vishnu Garden",
    "Sector 48, Gurgaon",
    "Kirti Nagar",
    "Faridabad Sector 81-89",
    "GK I",
    "Mohan Estate",
    "Mukherjee Nagar",
    "Mehrauli",
    "Burari",
    "Gaur city, Ghaziabad",
    "GK II",
    "Rohini",
    "Rangpuri",
    "Sector 46",
    "Sector 62 (Noida)",
    "Shalimar Bagh",
    "Model Town",
    "Faridabad Sector 16-20",
    "Sector 2 (Noida)",
    "Govindpuram",
    "Gwal Pahari",
    "Nehru Nagar",
    "Chittaranjan Park",
    "IMT Manesar",
    "Sector 73 Z Kitchen",
    "Sector 51",
    "Ballabhgarh",
    "Nangloi",
    "Uttam Nagar",
    "Sector 47",
    "Paharganj",
    "Sector 25",
    "Pitampura",
    "Shahdara",
    "Sector 31",
    "Sector 23",
    "Sector 12 (Noida)",
    "Mayur Vihar Phase II",
    "Faridabad Sector 12-15",
    "DLF PHASE 1 (SECTOR 26)",
    "Laxmi Nagar",
    "Karol Bagh",
    "Chhatarpur",
    "Paschim Vihar",
    "Sector 1, Noida",
    "South Extension I",
    "Sector 18",
    "Kamla Nagar",
    "Janakpuri",
    "Vikaspuri",
    "Najafgarh",
    "Mayur Vihar Phase 1",
    "Sez Noida 1",
    "Gulavali, Noida",
    "Sector 14",
    "Sector 76(Noida)",
    "Green Park",
    "Munirka",
    "NEHRU PLACE",
    "Lajpat Nagar",
    "Sector 52 (Noida)",
    "Sector 100 (Noida)",
    "Sector 50",
    "Dilshad Garden",
    "Sector 29, Gurgaon",
    "SUSHANT LOK 1",
    "SAHIBABAD",
    "Sector 45 (Noida)",
    "Sector 84",
    "Sector 7, Gurgaon",
    "Sector 27",
    "Hauz Khas",
    "Jangpura",
    "Sector 52, Gurgaon",
    "Vaishali, Ghaziabad",
    "Shibpur",
    "Kalyani 1, Kolkata",
    "Bansdroni",
    "Bow Barracks",
    "Baranagar, Kolkata",
    "Sonarpur, Kolkata",
    "Ballygunge",
    "Sinthi, Kolkata",
    "Salt Lake 2",
    "Alipore",
    "Baguihati",
    "South Dum Dum",
    "Purba Barisha",
    "Jadavpur",
    "Tollygunge",
    "Shyam Bazar",
    "Behala",
    "Chandannagar, Kolkata",
    "Barrackpore",
    "East Kolkata Township",
    "Bhowanipore",
    "Elgin",
    "Howrah",
    "New Alipore",
    "Barasat",
    "New Town (kolkata)",
    "Uttarpara",
    "Santoshpur",
    "Liluah",
    "Rajarhat",
    "Park Street area",
    "Baghajatin Colony",
    "Shrirampur",
    "Chhota Jagulia",
    "Dum Dum",
    "Kestopur",
    "Sodepur",
    "Nimta",
    "Shapoorji",
    "Barabazar Market",
    "Salt Lake 1",
    "Tangra",
    "Gariahat",
    "Santragachi",
    "Garia",
    "Chinsurah, Kolkata",
    "Kankurgachi",
    "Kasba",
    "Mira Road East",
    "Kandivali West",
    "Boisar, Mumbai",
    "Bhiwandi",
    "Panvel",
    "Kopar Khairane (Navi Mumbai)",
    "Vashi",
    "Titwala, Mumbai",
    "Kandivali East",
    "Nalasopara",
    "Lower Parel",
    "Goregaon East",
    "Santacruz East",
    "Ghatkopar East, Mumbai",
    "Palava",
    "Malad West",
    "Borivali East",
    "Kalyan,West,Mumbai",
    "Santacruz West",
    "Badlapur, Mumbai",
    "Ambernath",
    "Marine lines",
    "Mulund West",
    "Airoli",
    "Kharghar (Navi Mumbai)",
    "Ulhasnagar (Mumbai)",
    "Ghatkopar West, Mumbai",
    "Bandra West",
    "Dadar West",
    "Andheri West",
    "Vile Parle West",
    "Byculla",
    "Vasai",
    "Kalyan,East (Mumbai)",
    "Ulwe, Mumbai",
    "Fort",
    "Andheri East",
    "Chembur",
    "Palghar, Mumbai",
    "Mumbra, Mumbai",
    "Mulund East",
    "Shirdhon, Mumbai",
    "Virar",
    "Tardeo",
    "Bandra East",
    "Thane West",
    "Kurla West",
    "Goregaon West",
    "Hiranandani Estate",
    "Dombivli",
    "Bhandup West",
    "Kamothe",
    "Powai, Mumbai",
    "Naupada",
    "Bhayandar West",
    "Vileparle East",
    "Sion",
    "Nerul (Navi Mumbai)",
    "Dahisar West",
    "Colaba",
    "Mahim",
    "Wadala",
    "Borivali West",
    "Palava Lakeshore,Mumbai",
    "Banashankari",
    "Rajarajeshwari Nagar",
    "JP Nagar",
    "Mahadevapura",
    "Jalahalli",
    "RT Nagar",
    "KR Puram",
    "Electronic City",
    "Vijayanagar",
    "Marathahalli",
    "Sarjapur road",
    "Brookefields",
    "Whitefield",
    "Nagavara",
    "New BEL Road",
    "Koramangala",
    "Bannerghatta Road, Bangalore",
    "Aavalahalli",
    "BIAL Airport Road",
    "Yelahanka",
    "Kadugodi",
    "Kammanahalli",
    "HSR Layout",
    "BTM Layout",
    "Varthur",
    "Indiranagar",
    "Jayanagar",
    "Sahakaranagar",
    "Devanahalli, Bangalore",
    "MG Road",
    "Rajajinagar",
    "Bellandur",
    "NIGDI(Pune)",
    "Bibvewadi (Pune)",
    "Nanded-Nahre",
    "Bhosari (Pune)",
    "Camp Area",
    "Magarpatta",
    "Pimpri",
    "Yerwada",
    "Kalyani Nagar (Pune)",
    "Sus, Pune",
    "Bavdhan",
    "Viman nagar",
    "Aundh (Pune)",
    "Katraj (Pune)",
    "Pimple Saudagar_Pune",
    "Dhanori",
    "Dehu Road",
    "Koregaon Park (Pune)",
    "Hinjewadi - Phase 2",
    "Wakad_Pune",
    "Manas Lake, Pune",
    "Sadashiv Peth",
    "Ghorpadi (Pune)",
    "Pashan (Pune)",
    "SP Infocity, Pune",
    "Manjri,Pune",
    "Khadki, Pune",
    "Kothrud (Pune)",
    "Sinhagad Road(Pune)",
    "New Sangvi, Pune",
    "Nimgaon, Pune",
    "Wagholi",
    "Keshavnagar, Pune",
    "Baner (Pune)",
    "Warje (Pune)",
    "Mundwa, Pune",
    "Chakan",
    "Shivaji Nagar (Pune)",
    "Yewalewadi, Pune",
    "Bopkhel, Pune",
    "Kharadi",
    "Palakkad",
    "Kochi",
  ],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
      state.error = null;
    },
    setWeatherData(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.data = null;
    },

    setFilteredSuggestions(state, action: PayloadAction<string[]>) {
      state.localities = action.payload;
    },
  },
});

export const { setLocation, setWeatherData, setError, setFilteredSuggestions } =
  weatherSlice.actions;
export default weatherSlice.reducer;
