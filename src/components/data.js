const countries_data = [
    {
        "name": "Afghanistan",
        "capital": "Kabul",
        "languages": [
            "Pashto",
            "Uzbek",
            "Turkmen"
        ],
        "population": 40218234,
        "flag": require("https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"),
        "region": "Asia",
        "area": 652230
    },
    {
        "name": "Åland Islands",
        "capital": "Mariehamn",
        "languages": [
            "Swedish"
        ],
        "population": 28875,
        "flag": require("https://flagcdn.com/ax.svg"),
        "region": "Europe",
        "area": 1580
    },
    {
        "name": "Albania",
        "capital": "Tirana",
        "languages": [
            "Albanian"
        ],
        "population": 2837743,
        "flag": require("https://flagcdn.com/al.svg"),
        "region": "Europe",
        "area": 28748
    },
    {
        "name": "Algeria",
        "capital": "Algiers",
        "languages": [
            "Arabic"
        ],
        "population": 43851043,
        "flag": require("https://flagcdn.com/dz.svg"),
        "region": "Africa",
        "area": 2381741
    },
    {
        "name": "American Samoa",
        "capital": "Pago Pago",
        "languages": [
            "English",
            "Samoan"
        ],
        "population": 55197,
        "flag": require("https://flagcdn.com/as.svg"),
        "region": "Oceania",
        "area": 199
    },
    {
        "name": "Andorra",
        "capital": "Andorra la Vella",
        "languages": [
            "Catalan"
        ],
        "population": 77265,
        "flag": require("https://flagcdn.com/ad.svg"),
        "region": "Europe",
        "area": 468
    },
    {
        "name": "Angola",
        "capital": "Luanda",
        "languages": [
            "Portuguese"
        ],
        "population": 32866268,
        "flag": require("https://flagcdn.com/ao.svg"),
        "region": "Africa",
        "area": 1246700
    },
    {
        "name": "Anguilla",
        "capital": "The Valley",
        "languages": [
            "English"
        ],
        "population": 13452,
        "flag": require("https://flagcdn.com/ai.svg"),
        "region": "Americas",
        "area": 91
    },
    {
        "name": "Antarctica",
        "languages": [
            "English",
            "Russian"
        ],
        "population": 1000,
        "flag": require("https://flagcdn.com/aq.svg"),
        "region": "Polar",
        "area": 14000000
    },
    {
        "name": "Antigua and Barbuda",
        "capital": "Saint John's",
        "languages": [
            "English"
        ],
        "population": 97928,
        "flag": require("https://flagcdn.com/ag.svg"),
        "region": "Americas",
        "area": 442
    },
    {
        "name": "Argentina",
        "capital": "Buenos Aires",
        "languages": [
            "Spanish",
            "Guaraní"
        ],
        "population": 45376763,
        "flag": require("https://flagcdn.com/ar.svg"),
        "region": "Americas",
        "area": 2780400
    },
    {
        "name": "Armenia",
        "capital": "Yerevan",
        "languages": [
            "Armenian"
        ],
        "population": 2963234,
        "flag": require("https://flagcdn.com/am.svg"),
        "region": "Asia",
        "area": 29743
    },
    {
        "name": "Aruba",
        "capital": "Oranjestad",
        "languages": [
            "Dutch",
            "(Eastern) Punjabi"
        ],
        "population": 106766,
        "flag": require("https://flagcdn.com/aw.svg"),
        "region": "Americas",
        "area": 180
    },
    {
        "name": "Australia",
        "capital": "Canberra",
        "languages": [
            "English"
        ],
        "population": 25687041,
        "flag": require("https://flagcdn.com/au.svg"),
        "region": "Oceania",
        "area": 7692024
    },
    {
        "name": "Austria",
        "capital": "Vienna",
        "languages": [
            "German"
        ],
        "population": 8917205,
        "flag": require("https://flagcdn.com/at.svg"),
        "region": "Europe",
        "area": 83871
    },
    {
        "name": "Azerbaijan",
        "capital": "Baku",
        "languages": [
            "Azerbaijani"
        ],
        "population": 10110116,
        "flag": require("https://flagcdn.com/az.svg"),
        "region": "Asia",
        "area": 86600
    },
    {
        "name": "Bahamas",
        "capital": "Nassau",
        "languages": [
            "English"
        ],
        "population": 393248,
        "flag": require("https://flagcdn.com/bs.svg"),
        "region": "Americas",
        "area": 13943
    },
    {
        "name": "Bahrain",
        "capital": "Manama",
        "languages": [
            "Arabic"
        ],
        "population": 1701583,
        "flag": require("https://flagcdn.com/bh.svg"),
        "region": "Asia",
        "area": 765
    },
    {
        "name": "Bangladesh",
        "capital": "Dhaka",
        "languages": [
            "Bengali"
        ],
        "population": 164689383,
        "flag": require("https://flagcdn.com/bd.svg"),
        "region": "Asia",
        "area": 147570
    },
    {
        "name": "Barbados",
        "capital": "Bridgetown",
        "languages": [
            "English"
        ],
        "population": 287371,
        "flag": require("https://flagcdn.com/bb.svg"),
        "region": "Americas",
        "area": 430
    },
    {
        "name": "Belarus",
        "capital": "Minsk",
        "languages": [
            "Belarusian",
            "Russian"
        ],
        "population": 9398861,
        "flag": require("https://flagcdn.com/by.svg"),
        "region": "Europe",
        "area": 207600
    },
    {
        "name": "Belgium",
        "capital": "Brussels",
        "languages": [
            "Dutch",
            "French",
            "German"
        ],
        "population": 11555997,
        "flag": require("https://flagcdn.com/be.svg"),
        "region": "Europe",
        "area": 30528
    },
    {
        "name": "Belize",
        "capital": "Belmopan",
        "languages": [
            "English",
            "Spanish"
        ],
        "population": 397621,
        "flag": require("https://flagcdn.com/bz.svg"),
        "region": "Americas",
        "area": 22966
    },
    {
        "name": "Benin",
        "capital": "Porto-Novo",
        "languages": [
            "French"
        ],
        "population": 12123198,
        "flag": require("https://flagcdn.com/bj.svg"),
        "region": "Africa",
        "area": 112622
    },
    {
        "name": "Bermuda",
        "capital": "Hamilton",
        "languages": [
            "English"
        ],
        "population": 63903,
        "flag": require("https://flagcdn.com/bm.svg"),
        "region": "Americas",
        "area": 54
    },
    {
        "name": "Bhutan",
        "capital": "Thimphu",
        "languages": [
            "Dzongkha"
        ],
        "population": 771612,
        "flag": require("https://flagcdn.com/bt.svg"),
        "region": "Asia",
        "area": 38394
    },
    {
        "name": "Bolivia (Plurinational State of)",
        "capital": "Sucre",
        "languages": [
            "Spanish",
            "Aymara",
            "Quechua"
        ],
        "population": 11673029,
        "flag": require("https://flagcdn.com/bo.svg"),
        "region": "Americas",
        "area": 1098581
    },
    {
        "name": "Bonaire, Sint Eustatius and Saba",
        "capital": "Kralendijk",
        "languages": [
            "Dutch"
        ],
        "population": 17408,
        "flag": require("https://flagcdn.com/bq.svg"),
        "region": "Americas",
        "area": 294
    },
    {
        "name": "Bosnia and Herzegovina",
        "capital": "Sarajevo",
        "languages": [
            "Bosnian",
            "Croatian",
            "Serbian"
        ],
        "population": 3280815,
        "flag": require("https://flagcdn.com/ba.svg"),
        "region": "Europe",
        "area": 51209
    },
    {
        "name": "Botswana",
        "capital": "Gaborone",
        "languages": [
            "English",
            "Tswana"
        ],
        "population": 2351625,
        "flag": require("https://flagcdn.com/bw.svg"),
        "region": "Africa",
        "area": 582000
    },
    {
        "name": "Bouvet Island",
        "languages": [
            "Norwegian",
            "Norwegian Bokmål",
            "Norwegian Nynorsk"
        ],
        "population": 0,
        "flag": require("https://flagcdn.com/bv.svg"),
        "region": "Antarctic Ocean",
        "area": 49
    },
    {
        "name": "Brazil",
        "capital": "Brasília",
        "languages": [
            "Portuguese"
        ],
        "population": 212559409,
        "flag": require("https://flagcdn.com/br.svg"),
        "region": "Americas",
        "area": 8515767
    },
    {
        "name": "British Indian Ocean Territory",
        "capital": "Diego Garcia",
        "languages": [
            "English"
        ],
        "population": 3000,
        "flag": require("https://flagcdn.com/io.svg"),
        "region": "Africa",
        "area": 60
    },
    {
        "name": "United States Minor Outlying Islands",
        "languages": [
            "English"
        ],
        "population": 300,
        "flag": require("https://flagcdn.com/um.svg"),
        "region": "Americas"
    },
    {
        "name": "Virgin Islands (British)",
        "capital": "Road Town",
        "languages": [
            "English"
        ],
        "population": 30237,
        "flag": require("https://flagcdn.com/vg.svg"),
        "region": "Americas",
        "area": 151
    },
    {
        "name": "Virgin Islands (U.S.)",
        "capital": "Charlotte Amalie",
        "languages": [
            "English"
        ],
        "population": 106290,
        "flag": require("https://flagcdn.com/vi.svg"),
        "region": "Americas",
        "area": 346.36
    },
    {
        "name": "Brunei Darussalam",
        "capital": "Bandar Seri Begawan",
        "languages": [
            "Malay"
        ],
        "population": 437483,
        "flag": require("https://flagcdn.com/bn.svg"),
        "region": "Asia",
        "area": 5765
    },
    {
        "name": "Bulgaria",
        "capital": "Sofia",
        "languages": [
            "Bulgarian"
        ],
        "population": 6927288,
        "flag": require("https://flagcdn.com/bg.svg"),
        "region": "Europe",
        "area": 110879
    },
    {
        "name": "Burkina Faso",
        "capital": "Ouagadougou",
        "languages": [
            "French",
            "Fula"
        ],
        "population": 20903278,
        "flag": require("https://flagcdn.com/bf.svg"),
        "region": "Africa",
        "area": 272967
    },
    {
        "name": "Burundi",
        "capital": "Gitega",
        "languages": [
            "French",
            "Kirundi"
        ],
        "population": 11890781,
        "flag": require("https://flagcdn.com/bi.svg"),
        "region": "Africa",
        "area": 27834
    },
    {
        "name": "Cambodia",
        "capital": "Phnom Penh",
        "languages": [
            "Khmer"
        ],
        "population": 16718971,
        "flag": require("https://flagcdn.com/kh.svg"),
        "region": "Asia",
        "area": 181035
    },
    {
        "name": "Cameroon",
        "capital": "Yaoundé",
        "languages": [
            "English",
            "French"
        ],
        "population": 26545864,
        "flag": require("https://flagcdn.com/cm.svg"),
        "region": "Africa",
        "area": 475442
    },
    {
        "name": "Canada",
        "capital": "Ottawa",
        "languages": [
            "English",
            "French"
        ],
        "population": 38005238,
        "flag": require("https://flagcdn.com/ca.svg"),
        "region": "Americas",
        "area": 9984670
    },
    {
        "name": "Cabo Verde",
        "capital": "Praia",
        "languages": [
            "Portuguese"
        ],
        "population": 555988,
        "flag": require("https://flagcdn.com/cv.svg"),
        "region": "Africa",
        "area": 4033
    },
    {
        "name": "Cayman Islands",
        "capital": "George Town",
        "languages": [
            "English"
        ],
        "population": 65720,
        "flag": require("https://flagcdn.com/ky.svg"),
        "region": "Americas",
        "area": 264
    },
    {
        "name": "Central African Republic",
        "capital": "Bangui",
        "languages": [
            "French",
            "Sango"
        ],
        "population": 4829764,
        "flag": require("https://flagcdn.com/cf.svg"),
        "region": "Africa",
        "area": 622984
    },
    {
        "name": "Chad",
        "capital": "N'Djamena",
        "languages": [
            "French",
            "Arabic"
        ],
        "population": 16425859,
        "flag": require("https://flagcdn.com/td.svg"),
        "region": "Africa",
        "area": 1284000
    },
    {
        "name": "Chile",
        "capital": "Santiago",
        "languages": [
            "Spanish"
        ],
        "population": 19116209,
        "flag": require("https://flagcdn.com/cl.svg"),
        "region": "Americas",
        "area": 756102
    },
    {
        "name": "China",
        "capital": "Beijing",
        "languages": [
            "Chinese"
        ],
        "population": 1402112000,
        "flag": require("https://flagcdn.com/cn.svg"),
        "region": "Asia",
        "area": 9640011
    },
    {
        "name": "Christmas Island",
        "capital": "Flying Fish Cove",
        "languages": [
            "English"
        ],
        "population": 2072,
        "flag": require("https://flagcdn.com/cx.svg"),
        "region": "Oceania",
        "area": 135
    },
    {
        "name": "Cocos (Keeling) Islands",
        "capital": "West Island",
        "languages": [
            "English"
        ],
        "population": 550,
        "flag": require("https://flagcdn.com/cc.svg"),
        "region": "Oceania",
        "area": 14
    },
    {
        "name": "Colombia",
        "capital": "Bogotá",
        "languages": [
            "Spanish"
        ],
        "population": 50882884,
        "flag": require("https://flagcdn.com/co.svg"),
        "region": "Americas",
        "area": 1141748
    },
    {
        "name": "Comoros",
        "capital": "Moroni",
        "languages": [
            "Arabic",
            "French"
        ],
        "population": 869595,
        "flag": require("https://flagcdn.com/km.svg"),
        "region": "Africa",
        "area": 1862
    },
    {
        "name": "Congo",
        "capital": "Brazzaville",
        "languages": [
            "French",
            "Lingala"
        ],
        "population": 5518092,
        "flag": require("https://flagcdn.com/cg.svg"),
        "region": "Africa",
        "area": 342000
    },
    {
        "name": "Congo (Democratic Republic of the)",
        "capital": "Kinshasa",
        "languages": [
            "French",
            "Lingala",
            "Kongo",
            "Swahili",
            "Luba-Katanga"
        ],
        "population": 89561404,
        "flag": require("https://flagcdn.com/cd.svg"),
        "region": "Africa",
        "area": 2344858
    },
    {
        "name": "Cook Islands",
        "capital": "Avarua",
        "languages": [
            "English",
            "Cook Islands Māori"
        ],
        "population": 18100,
        "flag": require("https://flagcdn.com/ck.svg"),
        "region": "Oceania",
        "area": 236
    },
    {
        "name": "Costa Rica",
        "capital": "San José",
        "languages": [
            "Spanish"
        ],
        "population": 5094114,
        "flag": require("https://flagcdn.com/cr.svg"),
        "region": "Americas",
        "area": 51100
    },
    {
        "name": "Croatia",
        "capital": "Zagreb",
        "languages": [
            "Croatian"
        ],
        "population": 4047200,
        "flag": require("https://flagcdn.com/hr.svg"),
        "region": "Europe",
        "area": 56594
    },
    {
        "name": "Cuba",
        "capital": "Havana",
        "languages": [
            "Spanish"
        ],
        "population": 11326616,
        "flag": require("https://flagcdn.com/cu.svg"),
        "region": "Americas",
        "area": 109884
    },
    {
        "name": "Curaçao",
        "capital": "Willemstad",
        "languages": [
            "Dutch",
            "(Eastern) Punjabi",
            "English"
        ],
        "population": 155014,
        "flag": require("https://flagcdn.com/cw.svg"),
        "region": "Americas",
        "area": 444
    },
    {
        "name": "Cyprus",
        "capital": "Nicosia",
        "languages": [
            "Greek (modern)",
            "Turkish",
            "Armenian"
        ],
        "population": 1207361,
        "flag": require("https://flagcdn.com/cy.svg"),
        "region": "Europe",
        "area": 9251
    },
    {
        "name": "Czech Republic",
        "capital": "Prague",
        "languages": [
            "Czech",
            "Slovak"
        ],
        "population": 10698896,
        "flag": require("https://flagcdn.com/cz.svg"),
        "region": "Europe",
        "area": 78865
    },
    {
        "name": "Denmark",
        "capital": "Copenhagen",
        "languages": [
            "Danish"
        ],
        "population": 5831404,
        "flag": require("https://flagcdn.com/dk.svg"),
        "region": "Europe",
        "area": 43094
    },
    {
        "name": "Djibouti",
        "capital": "Djibouti",
        "languages": [
            "French",
            "Arabic"
        ],
        "population": 988002,
        "flag": require("https://flagcdn.com/dj.svg"),
        "region": "Africa",
        "area": 23200
    },
    {
        "name": "Dominica",
        "capital": "Roseau",
        "languages": [
            "English"
        ],
        "population": 71991,
        "flag": require("https://flagcdn.com/dm.svg"),
        "region": "Americas",
        "area": 751
    },
    {
        "name": "Dominican Republic",
        "capital": "Santo Domingo",
        "languages": [
            "Spanish"
        ],
        "population": 10847904,
        "flag": require("https://flagcdn.com/do.svg"),
        "region": "Americas",
        "area": 48671
    },
    {
        "name": "Ecuador",
        "capital": "Quito",
        "languages": [
            "Spanish"
        ],
        "population": 17643060,
        "flag": require("https://flagcdn.com/ec.svg"),
        "region": "Americas",
        "area": 276841
    },
    {
        "name": "Egypt",
        "capital": "Cairo",
        "languages": [
            "Arabic"
        ],
        "population": 102334403,
        "flag": require("https://flagcdn.com/eg.svg"),
        "region": "Africa",
        "area": 1002450
    },
    {
        "name": "El Salvador",
        "capital": "San Salvador",
        "languages": [
            "Spanish"
        ],
        "population": 6486201,
        "flag": require("https://flagcdn.com/sv.svg"),
        "region": "Americas",
        "area": 21041
    },
    {
        "name": "Equatorial Guinea",
        "capital": "Malabo",
        "languages": [
            "Spanish",
            "French",
            "Portuguese",
            "Fang"
        ],
        "population": 1402985,
        "flag": require("https://flagcdn.com/gq.svg"),
        "region": "Africa",
        "area": 28051
    },
    {
        "name": "Eritrea",
        "capital": "Asmara",
        "languages": [
            "Tigrinya",
            "Arabic",
            "English",
            "Tigre",
            "Kunama",
            "Saho",
            "Bilen",
            "Nara",
            "Afar"
        ],
        "population": 5352000,
        "flag": require("https://flagcdn.com/er.svg"),
        "region": "Africa",
        "area": 117600
    },
    {
        "name": "Estonia",
        "capital": "Tallinn",
        "languages": [
            "Estonian"
        ],
        "population": 1331057,
        "flag": require("https://flagcdn.com/ee.svg"),
        "region": "Europe",
        "area": 45227
    },
    {
        "name": "Ethiopia",
        "capital": "Addis Ababa",
        "languages": [
            "Amharic"
        ],
        "population": 114963583,
        "flag": require("https://flagcdn.com/et.svg"),
        "region": "Africa",
        "area": 1104300
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "capital": "Stanley",
        "languages": [
            "English"
        ],
        "population": 2563,
        "flag": require("https://flagcdn.com/fk.svg"),
        "region": "Americas",
        "area": 12173
    },
    {
        "name": "Faroe Islands",
        "capital": "Tórshavn",
        "languages": [
            "Faroese"
        ],
        "population": 48865,
        "flag": require("https://flagcdn.com/fo.svg"),
        "region": "Europe",
        "area": 1393
    },
    {
        "name": "Fiji",
        "capital": "Suva",
        "languages": [
            "English",
            "Fijian",
            "Fiji Hindi",
            "Rotuman"
        ],
        "population": 896444,
        "flag": require("https://flagcdn.com/fj.svg"),
        "region": "Oceania",
        "area": 18272
    },
    {
        "name": "Finland",
        "capital": "Helsinki",
        "languages": [
            "Finnish",
            "Swedish"
        ],
        "population": 5530719,
        "flag": require("https://flagcdn.com/fi.svg"),
        "region": "Europe",
        "area": 338424
    },
    {
        "name": "France",
        "capital": "Paris",
        "languages": [
            "French"
        ],
        "population": 67391582,
        "flag": require("https://flagcdn.com/fr.svg"),
        "region": "Europe",
        "area": 640679
    },
    {
        "name": "French Guiana",
        "capital": "Cayenne",
        "languages": [
            "French"
        ],
        "population": 254541,
        "flag": require("https://flagcdn.com/gf.svg"),
        "region": "Americas"
    },
    {
        "name": "French Polynesia",
        "capital": "Papeetē",
        "languages": [
            "French"
        ],
        "population": 280904,
        "flag": require("https://flagcdn.com/pf.svg"),
        "region": "Oceania",
        "area": 4167
    },
    {
        "name": "French Southern Territories",
        "capital": "Port-aux-Français",
        "languages": [
            "French"
        ],
        "population": 140,
        "flag": require("https://flagcdn.com/tf.svg"),
        "region": "Africa",
        "area": 7747
    },
    {
        "name": "Gabon",
        "capital": "Libreville",
        "languages": [
            "French"
        ],
        "population": 2225728,
        "flag": require("https://flagcdn.com/ga.svg"),
        "region": "Africa",
        "area": 267668
    },
    {
        "name": "Gambia",
        "capital": "Banjul",
        "languages": [
            "English"
        ],
        "population": 2416664,
        "flag": require("https://flagcdn.com/gm.svg"),
        "region": "Africa",
        "area": 11295
    },
    {
        "name": "Georgia",
        "capital": "Tbilisi",
        "languages": [
            "Georgian"
        ],
        "population": 3714000,
        "flag": require("https://flagcdn.com/ge.svg"),
        "region": "Asia",
        "area": 69700
    },
    {
        "name": "Germany",
        "capital": "Berlin",
        "languages": [
            "German"
        ],
        "population": 83240525,
        "flag": require("https://flagcdn.com/de.svg"),
        "region": "Europe",
        "area": 357114
    },
    {
        "name": "Ghana",
        "capital": "Accra",
        "languages": [
            "English"
        ],
        "population": 31072945,
        "flag": require("https://flagcdn.com/gh.svg"),
        "region": "Africa",
        "area": 238533
    },
    {
        "name": "Gibraltar",
        "capital": "Gibraltar",
        "languages": [
            "English"
        ],
        "population": 33691,
        "flag": require("https://flagcdn.com/gi.svg"),
        "region": "Europe",
        "area": 6
    },
    {
        "name": "Greece",
        "capital": "Athens",
        "languages": [
            "Greek (modern)"
        ],
        "population": 10715549,
        "flag": require("https://flagcdn.com/gr.svg"),
        "region": "Europe",
        "area": 131990
    },
    {
        "name": "Greenland",
        "capital": "Nuuk",
        "languages": [
            "Kalaallisut"
        ],
        "population": 56367,
        "flag": require("https://flagcdn.com/gl.svg"),
        "region": "Americas",
        "area": 2166086
    },
    {
        "name": "Grenada",
        "capital": "St. George's",
        "languages": [
            "English"
        ],
        "population": 112519,
        "flag": require("https://flagcdn.com/gd.svg"),
        "region": "Americas",
        "area": 344
    },
    {
        "name": "Guadeloupe",
        "capital": "Basse-Terre",
        "languages": [
            "French"
        ],
        "population": 400132,
        "flag": require("https://flagcdn.com/gp.svg"),
        "region": "Americas"
    },
    {
        "name": "Guam",
        "capital": "Hagåtña",
        "languages": [
            "English",
            "Chamorro",
            "Spanish"
        ],
        "population": 168783,
        "flag": require("https://flagcdn.com/gu.svg"),
        "region": "Oceania",
        "area": 549
    },
    {
        "name": "Guatemala",
        "capital": "Guatemala City",
        "languages": [
            "Spanish"
        ],
        "population": 16858333,
        "flag": require("https://flagcdn.com/gt.svg"),
        "region": "Americas",
        "area": 108889
    },
    {
        "name": "Guernsey",
        "capital": "St. Peter Port",
        "languages": [
            "English",
            "French"
        ],
        "population": 62999,
        "flag": require("https://flagcdn.com/gg.svg"),
        "region": "Europe",
        "area": 78
    },
    {
        "name": "Guinea",
        "capital": "Conakry",
        "languages": [
            "French",
            "Fula"
        ],
        "population": 13132792,
        "flag": require("https://flagcdn.com/gn.svg"),
        "region": "Africa",
        "area": 245857
    },
    {
        "name": "Guinea-Bissau",
        "capital": "Bissau",
        "languages": [
            "Portuguese"
        ],
        "population": 1967998,
        "flag": require("https://flagcdn.com/gw.svg"),
        "region": "Africa",
        "area": 36125
    },
    {
        "name": "Guyana",
        "capital": "Georgetown",
        "languages": [
            "English"
        ],
        "population": 786559,
        "flag": require("https://flagcdn.com/gy.svg"),
        "region": "Americas",
        "area": 214969
    },
    {
        "name": "Haiti",
        "capital": "Port-au-Prince",
        "languages": [
            "French",
            "Haitian"
        ],
        "population": 11402533,
        "flag": require("https://flagcdn.com/ht.svg"),
        "region": "Americas",
        "area": 27750
    },
    {
        "name": "Heard Island and McDonald Islands",
        "languages": [
            "English"
        ],
        "population": 0,
        "flag": require("https://flagcdn.com/hm.svg"),
        "region": "Antarctic",
        "area": 412
    },
    {
        "name": "Vatican City",
        "capital": "Vatican City",
        "languages": [
            "Latin",
            "Italian",
            "French",
            "German"
        ],
        "population": 451,
        "flag": require("https://flagcdn.com/va.svg"),
        "region": "Europe",
        "area": 0.44
    },
    {
        "name": "Honduras",
        "capital": "Tegucigalpa",
        "languages": [
            "Spanish"
        ],
        "population": 9904608,
        "flag": require("https://flagcdn.com/hn.svg"),
        "region": "Americas",
        "area": 112492
    },
    {
        "name": "Hungary",
        "capital": "Budapest",
        "languages": [
            "Hungarian"
        ],
        "population": 9749763,
        "flag": require("https://flagcdn.com/hu.svg"),
        "region": "Europe",
        "area": 93028
    },
    {
        "name": "Hong Kong",
        "capital": "City of Victoria",
        "languages": [
            "English",
            "Chinese"
        ],
        "population": 7481800,
        "flag": require("https://flagcdn.com/hk.svg"),
        "region": "Asia",
        "area": 1104
    },
    {
        "name": "Iceland",
        "capital": "Reykjavík",
        "languages": [
            "Icelandic"
        ],
        "population": 366425,
        "flag": require("https://flagcdn.com/is.svg"),
        "region": "Europe",
        "area": 103000
    },
    {
        "name": "India",
        "capital": "New Delhi",
        "languages": [
            "Hindi",
            "English"
        ],
        "population": 1380004385,
        "flag": require("https://flagcdn.com/in.svg"),
        "region": "Asia",
        "area": 3287590
    },
    {
        "name": "Indonesia",
        "capital": "Jakarta",
        "languages": [
            "Indonesian"
        ],
        "population": 273523621,
        "flag": require("https://flagcdn.com/id.svg"),
        "region": "Asia",
        "area": 1904569
    },
    {
        "name": "Ivory Coast",
        "capital": "Yamoussoukro",
        "languages": [
            "French"
        ],
        "population": 26378275,
        "flag": require("https://flagcdn.com/ci.svg"),
        "region": "Africa",
        "area": 322463
    },
    {
        "name": "Iran (Islamic Republic of)",
        "capital": "Tehran",
        "languages": [
            "Persian (Farsi)"
        ],
        "population": 83992953,
        "flag": require("https://flagcdn.com/ir.svg"),
        "region": "Asia",
        "area": 1648195
    },
    {
        "name": "Iraq",
        "capital": "Baghdad",
        "languages": [
            "Arabic",
            "Kurdish"
        ],
        "population": 40222503,
        "flag": require("https://flagcdn.com/iq.svg"),
        "region": "Asia",
        "area": 438317
    },
    {
        "name": "Ireland",
        "capital": "Dublin",
        "languages": [
            "Irish",
            "English"
        ],
        "population": 4994724,
        "flag": require("https://flagcdn.com/ie.svg"),
        "region": "Europe",
        "area": 70273
    },
    {
        "name": "Isle of Man",
        "capital": "Douglas",
        "languages": [
            "English",
            "Manx"
        ],
        "population": 85032,
        "flag": require("https://flagcdn.com/im.svg"),
        "region": "Europe",
        "area": 572
    },
    {
        "name": "Israel",
        "capital": "Jerusalem",
        "languages": [
            "Hebrew (modern)",
            "Arabic"
        ],
        "population": 9216900,
        "flag": require("https://flagcdn.com/il.svg"),
        "region": "Asia",
        "area": 20770
    },
    {
        "name": "Italy",
        "capital": "Rome",
        "languages": [
            "Italian"
        ],
        "population": 59554023,
        "flag": require("https://flagcdn.com/it.svg"),
        "region": "Europe",
        "area": 301336
    },
    {
        "name": "Jamaica",
        "capital": "Kingston",
        "languages": [
            "English"
        ],
        "population": 2961161,
        "flag": require("https://flagcdn.com/jm.svg"),
        "region": "Americas",
        "area": 10991
    },
    {
        "name": "Japan",
        "capital": "Tokyo",
        "languages": [
            "Japanese"
        ],
        "population": 125836021,
        "flag": require("https://flagcdn.com/jp.svg"),
        "region": "Asia",
        "area": 377930
    },
    {
        "name": "Jersey",
        "capital": "Saint Helier",
        "languages": [
            "English",
            "French"
        ],
        "population": 100800,
        "flag": require("https://flagcdn.com/je.svg"),
        "region": "Europe",
        "area": 116
    },
    {
        "name": "Jordan",
        "capital": "Amman",
        "languages": [
            "Arabic"
        ],
        "population": 10203140,
        "flag": require("https://flagcdn.com/jo.svg"),
        "region": "Asia",
        "area": 89342
    },
    {
        "name": "Kazakhstan",
        "capital": "Nur-Sultan",
        "languages": [
            "Kazakh",
            "Russian"
        ],
        "population": 18754440,
        "flag": require("https://flagcdn.com/kz.svg"),
        "region": "Asia",
        "area": 2724900
    },
    {
        "name": "Kenya",
        "capital": "Nairobi",
        "languages": [
            "English",
            "Swahili"
        ],
        "population": 53771300,
        "flag": require("https://flagcdn.com/ke.svg"),
        "region": "Africa",
        "area": 580367
    },
    {
        "name": "Kiribati",
        "capital": "South Tarawa",
        "languages": [
            "English"
        ],
        "population": 119446,
        "flag": require("https://flagcdn.com/ki.svg"),
        "region": "Oceania",
        "area": 811
    },
    {
        "name": "Kuwait",
        "capital": "Kuwait City",
        "languages": [
            "Arabic"
        ],
        "population": 4270563,
        "flag": require("https://flagcdn.com/kw.svg"),
        "region": "Asia",
        "area": 17818
    },
    {
        "name": "Kyrgyzstan",
        "capital": "Bishkek",
        "languages": [
            "Kyrgyz",
            "Russian"
        ],
        "population": 6591600,
        "flag": require("https://flagcdn.com/kg.svg"),
        "region": "Asia",
        "area": 199951
    },
    {
        "name": "Lao People's Democratic Republic",
        "capital": "Vientiane",
        "languages": [
            "Lao"
        ],
        "population": 7275556,
        "flag": require("https://flagcdn.com/la.svg"),
        "region": "Asia",
        "area": 236800
    },
    {
        "name": "Latvia",
        "capital": "Riga",
        "languages": [
            "Latvian"
        ],
        "population": 1901548,
        "flag": require("https://flagcdn.com/lv.svg"),
        "region": "Europe",
        "area": 64559
    },
    {
        "name": "Lebanon",
        "capital": "Beirut",
        "languages": [
            "Arabic",
            "French"
        ],
        "population": 6825442,
        "flag": require("https://flagcdn.com/lb.svg"),
        "region": "Asia",
        "area": 10452
    },
    {
        "name": "Lesotho",
        "capital": "Maseru",
        "languages": [
            "English",
            "Southern Sotho"
        ],
        "population": 2142252,
        "flag": require("https://flagcdn.com/ls.svg"),
        "region": "Africa",
        "area": 30355
    },
    {
        "name": "Liberia",
        "capital": "Monrovia",
        "languages": [
            "English"
        ],
        "population": 5057677,
        "flag": require("https://flagcdn.com/lr.svg"),
        "region": "Africa",
        "area": 111369
    },
    {
        "name": "Libya",
        "capital": "Tripoli",
        "languages": [
            "Arabic"
        ],
        "population": 6871287,
        "flag": require("https://flagcdn.com/ly.svg"),
        "region": "Africa",
        "area": 1759540
    },
    {
        "name": "Liechtenstein",
        "capital": "Vaduz",
        "languages": [
            "German"
        ],
        "population": 38137,
        "flag": require("https://flagcdn.com/li.svg"),
        "region": "Europe",
        "area": 160
    },
    {
        "name": "Lithuania",
        "capital": "Vilnius",
        "languages": [
            "Lithuanian"
        ],
        "population": 2794700,
        "flag": require("https://flagcdn.com/lt.svg"),
        "region": "Europe",
        "area": 65300
    },
    {
        "name": "Luxembourg",
        "capital": "Luxembourg",
        "languages": [
            "French",
            "German",
            "Luxembourgish"
        ],
        "population": 632275,
        "flag": require("https://flagcdn.com/lu.svg"),
        "region": "Europe",
        "area": 2586
    },
    {
        "name": "Macao",
        "languages": [
            "Chinese",
            "Portuguese"
        ],
        "population": 649342,
        "flag": require("https://flagcdn.com/mo.svg"),
        "region": "Asia",
        "area": 30
    },
    {
        "name": "North Macedonia",
        "capital": "Skopje",
        "languages": [
            "Macedonian"
        ],
        "population": 2083380,
        "flag": require("https://flagcdn.com/mk.svg"),
        "region": "Europe",
        "area": 25713
    },
    {
        "name": "Madagascar",
        "capital": "Antananarivo",
        "languages": [
            "French",
            "Malagasy"
        ],
        "population": 27691019,
        "flag": require("https://flagcdn.com/mg.svg"),
        "region": "Africa",
        "area": 587041
    },
    {
        "name": "Malawi",
        "capital": "Lilongwe",
        "languages": [
            "English",
            "Chichewa"
        ],
        "population": 19129955,
        "flag": require("https://flagcdn.com/mw.svg"),
        "region": "Africa",
        "area": 118484
    },
    {
        "name": "Malaysia",
        "capital": "Kuala Lumpur",
        "languages": [
            "Malaysian"
        ],
        "population": 32365998,
        "flag": require("https://flagcdn.com/my.svg"),
        "region": "Asia",
        "area": 330803
    },
    {
        "name": "Maldives",
        "capital": "Malé",
        "languages": [
            "Divehi"
        ],
        "population": 540542,
        "flag": require("https://flagcdn.com/mv.svg"),
        "region": "Asia",
        "area": 300
    },
    {
        "name": "Mali",
        "capital": "Bamako",
        "languages": [
            "French"
        ],
        "population": 20250834,
        "flag": require("https://flagcdn.com/ml.svg"),
        "region": "Africa",
        "area": 1240192
    },
    {
        "name": "Malta",
        "capital": "Valletta",
        "languages": [
            "Maltese",
            "English"
        ],
        "population": 525285,
        "flag": require("https://flagcdn.com/mt.svg"),
        "region": "Europe",
        "area": 316
    },
    {
        "name": "Marshall Islands",
        "capital": "Majuro",
        "languages": [
            "English",
            "Marshallese"
        ],
        "population": 59194,
        "flag": require("https://flagcdn.com/mh.svg"),
        "region": "Oceania",
        "area": 181
    },
    {
        "name": "Martinique",
        "capital": "Fort-de-France",
        "languages": [
            "French"
        ],
        "population": 378243,
        "flag": require("https://flagcdn.com/mq.svg"),
        "region": "Americas"
    },
    {
        "name": "Mauritania",
        "capital": "Nouakchott",
        "languages": [
            "Arabic"
        ],
        "population": 4649660,
        "flag": require("https://flagcdn.com/mr.svg"),
        "region": "Africa",
        "area": 1030700
    },
    {
        "name": "Mauritius",
        "capital": "Port Louis",
        "languages": [
            "English"
        ],
        "population": 1265740,
        "flag": require("https://flagcdn.com/mu.svg"),
        "region": "Africa",
        "area": 2040
    },
    {
        "name": "Mayotte",
        "capital": "Mamoudzou",
        "languages": [
            "French"
        ],
        "population": 226915,
        "flag": require("https://flagcdn.com/yt.svg"),
        "region": "Africa"
    },
    {
        "name": "Mexico",
        "capital": "Mexico City",
        "languages": [
            "Spanish"
        ],
        "population": 128932753,
        "flag": require("https://flagcdn.com/mx.svg"),
        "region": "Americas",
        "area": 1964375
    },
    {
        "name": "Micronesia (Federated States of)",
        "capital": "Palikir",
        "languages": [
            "English"
        ],
        "population": 115021,
        "flag": require("https://flagcdn.com/fm.svg"),
        "region": "Oceania",
        "area": 702
    },
    {
        "name": "Moldova (Republic of)",
        "capital": "Chișinău",
        "languages": [
            "Romanian"
        ],
        "population": 2617820,
        "flag": require("https://flagcdn.com/md.svg"),
        "region": "Europe",
        "area": 33846
    },
    {
        "name": "Monaco",
        "capital": "Monaco",
        "languages": [
            "French"
        ],
        "population": 39244,
        "flag": require("https://flagcdn.com/mc.svg"),
        "region": "Europe",
        "area": 2.02
    },
    {
        "name": "Mongolia",
        "capital": "Ulan Bator",
        "languages": [
            "Mongolian"
        ],
        "population": 3278292,
        "flag": require("https://flagcdn.com/mn.svg"),
        "region": "Asia",
        "area": 1564110
    },
    {
        "name": "Montenegro",
        "capital": "Podgorica",
        "languages": [
            "Serbian",
            "Bosnian",
            "Albanian",
            "Croatian"
        ],
        "population": 621718,
        "flag": require("https://flagcdn.com/me.svg"),
        "region": "Europe",
        "area": 13812
    },
    {
        "name": "Montserrat",
        "capital": "Plymouth",
        "languages": [
            "English"
        ],
        "population": 4922,
        "flag": require("https://flagcdn.com/ms.svg"),
        "region": "Americas",
        "area": 102
    },
    {
        "name": "Morocco",
        "capital": "Rabat",
        "languages": [
            "Arabic"
        ],
        "population": 36910558,
        "flag": require("https://flagcdn.com/ma.svg"),
        "region": "Africa",
        "area": 446550
    },
    {
        "name": "Mozambique",
        "capital": "Maputo",
        "languages": [
            "Portuguese"
        ],
        "population": 31255435,
        "flag": require("https://flagcdn.com/mz.svg"),
        "region": "Africa",
        "area": 801590
    },
    {
        "name": "Myanmar",
        "capital": "Naypyidaw",
        "languages": [
            "Burmese"
        ],
        "population": 54409794,
        "flag": require("https://flagcdn.com/mm.svg"),
        "region": "Asia",
        "area": 676578
    },
    {
        "name": "Namibia",
        "capital": "Windhoek",
        "languages": [
            "English",
            "Afrikaans"
        ],
        "population": 2540916,
        "flag": require("https://flagcdn.com/na.svg"),
        "region": "Africa",
        "area": 825615
    },
    {
        "name": "Nauru",
        "capital": "Yaren",
        "languages": [
            "English",
            "Nauruan"
        ],
        "population": 10834,
        "flag": require("https://flagcdn.com/nr.svg"),
        "region": "Oceania",
        "area": 21
    },
    {
        "name": "Nepal",
        "capital": "Kathmandu",
        "languages": [
            "Nepali"
        ],
        "population": 29136808,
        "flag": require("https://flagcdn.com/np.svg"),
        "region": "Asia",
        "area": 147181
    },
    {
        "name": "Netherlands",
        "capital": "Amsterdam",
        "languages": [
            "Dutch"
        ],
        "population": 17441139,
        "flag": require("https://flagcdn.com/nl.svg"),
        "region": "Europe",
        "area": 41850
    },
    {
        "name": "New Caledonia",
        "capital": "Nouméa",
        "languages": [
            "French"
        ],
        "population": 271960,
        "flag": require("https://flagcdn.com/nc.svg"),
        "region": "Oceania",
        "area": 18575
    },
    {
        "name": "New Zealand",
        "capital": "Wellington",
        "languages": [
            "English",
            "Māori"
        ],
        "population": 5084300,
        "flag": require("https://flagcdn.com/nz.svg"),
        "region": "Oceania",
        "area": 270467
    },
    {
        "name": "Nicaragua",
        "capital": "Managua",
        "languages": [
            "Spanish"
        ],
        "population": 6624554,
        "flag": require("https://flagcdn.com/ni.svg"),
        "region": "Americas",
        "area": 130373
    },
    {
        "name": "Niger",
        "capital": "Niamey",
        "languages": [
            "French"
        ],
        "population": 24206636,
        "flag": require("https://flagcdn.com/ne.svg"),
        "region": "Africa",
        "area": 1267000
    },
    {
        "name": "Nigeria",
        "capital": "Abuja",
        "languages": [
            "English"
        ],
        "population": 206139587,
        "flag": require("https://flagcdn.com/ng.svg"),
        "region": "Africa",
        "area": 923768
    },
    {
        "name": "Niue",
        "capital": "Alofi",
        "languages": [
            "English"
        ],
        "population": 1470,
        "flag": require("https://flagcdn.com/nu.svg"),
        "region": "Oceania",
        "area": 260
    },
    {
        "name": "Norfolk Island",
        "capital": "Kingston",
        "languages": [
            "English"
        ],
        "population": 2302,
        "flag": require("https://flagcdn.com/nf.svg"),
        "region": "Oceania",
        "area": 36
    },
    {
        "name": "Korea (Democratic People's Republic of)",
        "capital": "Pyongyang",
        "languages": [
            "Korean"
        ],
        "population": 25778815,
        "flag": require("https://flagcdn.com/kp.svg"),
        "region": "Asia",
        "area": 120538
    },
    {
        "name": "Northern Mariana Islands",
        "capital": "Saipan",
        "languages": [
            "English",
            "Chamorro"
        ],
        "population": 57557,
        "flag": require("https://flagcdn.com/mp.svg"),
        "region": "Oceania",
        "area": 464
    },
    {
        "name": "Norway",
        "capital": "Oslo",
        "languages": [
            "Norwegian",
            "Norwegian Bokmål",
            "Norwegian Nynorsk"
        ],
        "population": 5379475,
        "flag": require("https://flagcdn.com/no.svg"),
        "region": "Europe",
        "area": 323802
    },
    {
        "name": "Oman",
        "capital": "Muscat",
        "languages": [
            "Arabic"
        ],
        "population": 5106622,
        "flag": require("https://flagcdn.com/om.svg"),
        "region": "Asia",
        "area": 309500
    },
    {
        "name": "Pakistan",
        "capital": "Islamabad",
        "languages": [
            "Urdu",
            "English"
        ],
        "population": 220892331,
        "flag": require("https://flagcdn.com/pk.svg"),
        "region": "Asia",
        "area": 881912
    },
    {
        "name": "Palau",
        "capital": "Ngerulmud",
        "languages": [
            "English"
        ],
        "population": 18092,
        "flag": require("https://flagcdn.com/pw.svg"),
        "region": "Oceania",
        "area": 459
    },
    {
        "name": "Palestine, State of",
        "capital": "Ramallah",
        "languages": [
            "Arabic"
        ],
        "population": 4803269,
        "flag": require("https://flagcdn.com/ps.svg"),
        "region": "Asia"
    },
    {
        "name": "Panama",
        "capital": "Panama City",
        "languages": [
            "Spanish"
        ],
        "population": 4314768,
        "flag": require("https://flagcdn.com/pa.svg"),
        "region": "Americas",
        "area": 75417
    },
    {
        "name": "Papua New Guinea",
        "capital": "Port Moresby",
        "languages": [
            "English"
        ],
        "population": 8947027,
        "flag": require("https://flagcdn.com/pg.svg"),
        "region": "Oceania",
        "area": 462840
    },
    {
        "name": "Paraguay",
        "capital": "Asunción",
        "languages": [
            "Spanish",
            "Guaraní"
        ],
        "population": 7132530,
        "flag": require("https://flagcdn.com/py.svg"),
        "region": "Americas",
        "area": 406752
    },
    {
        "name": "Peru",
        "capital": "Lima",
        "languages": [
            "Spanish"
        ],
        "population": 32971846,
        "flag": require("https://flagcdn.com/pe.svg"),
        "region": "Americas",
        "area": 1285216
    },
    {
        "name": "Philippines",
        "capital": "Manila",
        "languages": [
            "English"
        ],
        "population": 109581085,
        "flag": require("https://flagcdn.com/ph.svg"),
        "region": "Asia",
        "area": 342353
    },
    {
        "name": "Pitcairn",
        "capital": "Adamstown",
        "languages": [
            "English"
        ],
        "population": 56,
        "flag": require("https://flagcdn.com/pn.svg"),
        "region": "Oceania",
        "area": 47
    },
    {
        "name": "Poland",
        "capital": "Warsaw",
        "languages": [
            "Polish"
        ],
        "population": 37950802,
        "flag": require("https://flagcdn.com/pl.svg"),
        "region": "Europe",
        "area": 312679
    },
    {
        "name": "Portugal",
        "capital": "Lisbon",
        "languages": [
            "Portuguese"
        ],
        "population": 10305564,
        "flag": require("https://flagcdn.com/pt.svg"),
        "region": "Europe",
        "area": 92090
    },
    {
        "name": "Puerto Rico",
        "capital": "San Juan",
        "languages": [
            "Spanish",
            "English"
        ],
        "population": 3194034,
        "flag": require("https://flagcdn.com/pr.svg"),
        "region": "Americas",
        "area": 8870
    },
    {
        "name": "Qatar",
        "capital": "Doha",
        "languages": [
            "Arabic"
        ],
        "population": 2881060,
        "flag": require("https://flagcdn.com/qa.svg"),
        "region": "Asia",
        "area": 11586
    },
    {
        "name": "Republic of Kosovo",
        "capital": "Pristina",
        "languages": [
            "Albanian",
            "Serbian"
        ],
        "population": 1775378,
        "flag": require("https://flagcdn.com/xk.svg"),
        "region": "Europe",
        "area": 10908
    },
    {
        "name": "Réunion",
        "capital": "Saint-Denis",
        "languages": [
            "French"
        ],
        "population": 840974,
        "flag": require("https://flagcdn.com/re.svg"),
        "region": "Africa"
    },
    {
        "name": "Romania",
        "capital": "Bucharest",
        "languages": [
            "Romanian"
        ],
        "population": 19286123,
        "flag": require("https://flagcdn.com/ro.svg"),
        "region": "Europe",
        "area": 238391
    },
    {
        "name": "Russian Federation",
        "capital": "Moscow",
        "languages": [
            "Russian"
        ],
        "population": 144104080,
        "flag": require("https://flagcdn.com/ru.svg"),
        "region": "Europe",
        "area": 17124442
    },
    {
        "name": "Rwanda",
        "capital": "Kigali",
        "languages": [
            "Kinyarwanda",
            "English",
            "French"
        ],
        "population": 12952209,
        "flag": require("https://flagcdn.com/rw.svg"),
        "region": "Africa",
        "area": 26338
    },
    {
        "name": "Saint Barthélemy",
        "capital": "Gustavia",
        "languages": [
            "French"
        ],
        "population": 9417,
        "flag": require("https://flagcdn.com/bl.svg"),
        "region": "Americas",
        "area": 21
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "capital": "Jamestown",
        "languages": [
            "English"
        ],
        "population": 4255,
        "flag": require("https://flagcdn.com/sh.svg"),
        "region": "Africa"
    },
    {
        "name": "Saint Kitts and Nevis",
        "capital": "Basseterre",
        "languages": [
            "English"
        ],
        "population": 53192,
        "flag": require("https://flagcdn.com/kn.svg"),
        "region": "Americas",
        "area": 261
    },
    {
        "name": "Saint Lucia",
        "capital": "Castries",
        "languages": [
            "English"
        ],
        "population": 183629,
        "flag": require("https://flagcdn.com/lc.svg"),
        "region": "Americas",
        "area": 616
    },
    {
        "name": "Saint Martin (French part)",
        "capital": "Marigot",
        "languages": [
            "English",
            "French",
            "Dutch"
        ],
        "population": 38659,
        "flag": require("https://flagcdn.com/mf.svg"),
        "region": "Americas",
        "area": 53
    },
    {
        "name": "Saint Pierre and Miquelon",
        "capital": "Saint-Pierre",
        "languages": [
            "French"
        ],
        "population": 6069,
        "flag": require("https://flagcdn.com/pm.svg"),
        "region": "Americas",
        "area": 242
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "capital": "Kingstown",
        "languages": [
            "English"
        ],
        "population": 110947,
        "flag": require("https://flagcdn.com/vc.svg"),
        "region": "Americas",
        "area": 389
    },
    {
        "name": "Samoa",
        "capital": "Apia",
        "languages": [
            "Samoan",
            "English"
        ],
        "population": 198410,
        "flag": require("https://flagcdn.com/ws.svg"),
        "region": "Oceania",
        "area": 2842
    },
    {
        "name": "San Marino",
        "capital": "City of San Marino",
        "languages": [
            "Italian"
        ],
        "population": 33938,
        "flag": require("https://flagcdn.com/sm.svg"),
        "region": "Europe",
        "area": 61
    },
    {
        "name": "Sao Tome and Principe",
        "capital": "São Tomé",
        "languages": [
            "Portuguese"
        ],
        "population": 219161,
        "flag": require("https://flagcdn.com/st.svg"),
        "region": "Africa",
        "area": 964
    },
    {
        "name": "Saudi Arabia",
        "capital": "Riyadh",
        "languages": [
            "Arabic"
        ],
        "population": 34813867,
        "flag": require("https://flagcdn.com/sa.svg"),
        "region": "Asia",
        "area": 2149690
    },
    {
        "name": "Senegal",
        "capital": "Dakar",
        "languages": [
            "French"
        ],
        "population": 16743930,
        "flag": require("https://flagcdn.com/sn.svg"),
        "region": "Africa",
        "area": 196722
    },
    {
        "name": "Serbia",
        "capital": "Belgrade",
        "languages": [
            "Serbian"
        ],
        "population": 6908224,
        "flag": require("https://flagcdn.com/rs.svg"),
        "region": "Europe",
        "area": 88361
    },
    {
        "name": "Seychelles",
        "capital": "Victoria",
        "languages": [
            "French",
            "English"
        ],
        "population": 98462,
        "flag": require("https://flagcdn.com/sc.svg"),
        "region": "Africa",
        "area": 452
    },
    {
        "name": "Sierra Leone",
        "capital": "Freetown",
        "languages": [
            "English"
        ],
        "population": 7976985,
        "flag": require("https://flagcdn.com/sl.svg"),
        "region": "Africa",
        "area": 71740
    },
    {
        "name": "Singapore",
        "capital": "Singapore",
        "languages": [
            "English",
            "Malay",
            "Tamil",
            "Chinese"
        ],
        "population": 5685807,
        "flag": require("https://flagcdn.com/sg.svg"),
        "region": "Asia",
        "area": 710
    },
    {
        "name": "Sint Maarten (Dutch part)",
        "capital": "Philipsburg",
        "languages": [
            "Dutch",
            "English"
        ],
        "population": 40812,
        "flag": require("https://flagcdn.com/sx.svg"),
        "region": "Americas",
        "area": 34
    },
    {
        "name": "Slovakia",
        "capital": "Bratislava",
        "languages": [
            "Slovak"
        ],
        "population": 5458827,
        "flag": require("https://flagcdn.com/sk.svg"),
        "region": "Europe",
        "area": 49037
    },
    {
        "name": "Slovenia",
        "capital": "Ljubljana",
        "languages": [
            "Slovene"
        ],
        "population": 2100126,
        "flag": require("https://flagcdn.com/si.svg"),
        "region": "Europe",
        "area": 20273
    },
    {
        "name": "Solomon Islands",
        "capital": "Honiara",
        "languages": [
            "English"
        ],
        "population": 686878,
        "flag": require("https://flagcdn.com/sb.svg"),
        "region": "Oceania",
        "area": 28896
    },
    {
        "name": "Somalia",
        "capital": "Mogadishu",
        "languages": [
            "Somali",
            "Arabic"
        ],
        "population": 15893219,
        "flag": require("https://flagcdn.com/so.svg"),
        "region": "Africa",
        "area": 637657
    },
    {
        "name": "South Africa",
        "capital": "Pretoria",
        "languages": [
            "Afrikaans",
            "English",
            "Southern Ndebele",
            "Southern Sotho",
            "Swati",
            "Tswana",
            "Tsonga",
            "Venda",
            "Xhosa",
            "Zulu"
        ],
        "population": 59308690,
        "flag": require("https://flagcdn.com/za.svg"),
        "region": "Africa",
        "area": 1221037
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "capital": "King Edward Point",
        "languages": [
            "English"
        ],
        "population": 30,
        "flag": require("https://flagcdn.com/gs.svg"),
        "region": "Americas"
    },
    {
        "name": "Korea (Republic of)",
        "capital": "Seoul",
        "languages": [
            "Korean"
        ],
        "population": 51780579,
        "flag": require("https://flagcdn.com/kr.svg"),
        "region": "Asia",
        "area": 100210
    },
    {
        "name": "Spain",
        "capital": "Madrid",
        "languages": [
            "Spanish"
        ],
        "population": 47351567,
        "flag": require("https://flagcdn.com/es.svg"),
        "region": "Europe",
        "area": 505992
    },
    {
        "name": "Sri Lanka",
        "capital": "Sri Jayawardenepura Kotte",
        "languages": [
            "Sinhalese",
            "Tamil"
        ],
        "population": 21919000,
        "flag": require("https://flagcdn.com/lk.svg"),
        "region": "Asia",
        "area": 65610
    },
    {
        "name": "Sudan",
        "capital": "Khartoum",
        "languages": [
            "Arabic",
            "English"
        ],
        "population": 43849269,
        "flag": require("https://flagcdn.com/sd.svg"),
        "region": "Africa",
        "area": 1886068
    },
    {
        "name": "South Sudan",
        "capital": "Juba",
        "languages": [
            "English"
        ],
        "population": 11193729,
        "flag": require("https://flagcdn.com/ss.svg"),
        "region": "Africa",
        "area": 619745
    },
    {
        "name": "Suriname",
        "capital": "Paramaribo",
        "languages": [
            "Dutch"
        ],
        "population": 586634,
        "flag": require("https://flagcdn.com/sr.svg"),
        "region": "Americas",
        "area": 163820
    },
    {
        "name": "Svalbard and Jan Mayen",
        "capital": "Longyearbyen",
        "languages": [
            "Norwegian"
        ],
        "population": 2562,
        "flag": require("https://flagcdn.com/sj.svg"),
        "region": "Europe"
    },
    {
        "name": "Swaziland",
        "capital": "Mbabane",
        "languages": [
            "English",
            "Swati"
        ],
        "population": 1160164,
        "flag": require("https://flagcdn.com/sz.svg"),
        "region": "Africa",
        "area": 17364
    },
    {
        "name": "Sweden",
        "capital": "Stockholm",
        "languages": [
            "Swedish"
        ],
        "population": 10353442,
        "flag": require("https://flagcdn.com/se.svg"),
        "region": "Europe",
        "area": 450295
    },
    {
        "name": "Switzerland",
        "capital": "Bern",
        "languages": [
            "German",
            "French",
            "Italian",
            "Romansh"
        ],
        "population": 8636896,
        "flag": require("https://flagcdn.com/ch.svg"),
        "region": "Europe",
        "area": 41284
    },
    {
        "name": "Syrian Arab Republic",
        "capital": "Damascus",
        "languages": [
            "Arabic"
        ],
        "population": 17500657,
        "flag": require("https://flagcdn.com/sy.svg"),
        "region": "Asia",
        "area": 185180
    },
    {
        "name": "Taiwan",
        "capital": "Taipei",
        "languages": [
            "Chinese"
        ],
        "population": 23503349,
        "flag": require("https://flagcdn.com/tw.svg"),
        "region": "Asia",
        "area": 36193
    },
    {
        "name": "Tajikistan",
        "capital": "Dushanbe",
        "languages": [
            "Tajik",
            "Russian"
        ],
        "population": 9537642,
        "flag": require("https://flagcdn.com/tj.svg"),
        "region": "Asia",
        "area": 143100
    },
    {
        "name": "Tanzania, United Republic of",
        "capital": "Dodoma",
        "languages": [
            "Swahili",
            "English"
        ],
        "population": 59734213,
        "flag": require("https://flagcdn.com/tz.svg"),
        "region": "Africa",
        "area": 945087
    },
    {
        "name": "Thailand",
        "capital": "Bangkok",
        "languages": [
            "Thai"
        ],
        "population": 69799978,
        "flag": require("https://flagcdn.com/th.svg"),
        "region": "Asia",
        "area": 513120
    },
    {
        "name": "Timor-Leste",
        "capital": "Dili",
        "languages": [
            "Portuguese"
        ],
        "population": 1318442,
        "flag": require("https://flagcdn.com/tl.svg"),
        "region": "Asia",
        "area": 14874
    },
    {
        "name": "Togo",
        "capital": "Lomé",
        "languages": [
            "French"
        ],
        "population": 8278737,
        "flag": require("https://flagcdn.com/tg.svg"),
        "region": "Africa",
        "area": 56785
    },
    {
        "name": "Tokelau",
        "capital": "Fakaofo",
        "languages": [
            "English"
        ],
        "population": 1411,
        "flag": require("https://flagcdn.com/tk.svg"),
        "region": "Oceania",
        "area": 12
    },
    {
        "name": "Tonga",
        "capital": "Nuku'alofa",
        "languages": [
            "English",
            "Tonga (Tonga Islands)"
        ],
        "population": 105697,
        "flag": require("https://flagcdn.com/to.svg"),
        "region": "Oceania",
        "area": 747
    },
    {
        "name": "Trinidad and Tobago",
        "capital": "Port of Spain",
        "languages": [
            "English"
        ],
        "population": 1399491,
        "flag": require("https://flagcdn.com/tt.svg"),
        "region": "Americas",
        "area": 5130
    },
    {
        "name": "Tunisia",
        "capital": "Tunis",
        "languages": [
            "Arabic"
        ],
        "population": 11818618,
        "flag": require("https://flagcdn.com/tn.svg"),
        "region": "Africa",
        "area": 163610
    },
    {
        "name": "Turkey",
        "capital": "Ankara",
        "languages": [
            "Turkish"
        ],
        "population": 84339067,
        "flag": require("https://flagcdn.com/tr.svg"),
        "region": "Asia",
        "area": 783562
    },
    {
        "name": "Turkmenistan",
        "capital": "Ashgabat",
        "languages": [
            "Turkmen",
            "Russian"
        ],
        "population": 6031187,
        "flag": require("https://flagcdn.com/tm.svg"),
        "region": "Asia",
        "area": 488100
    },
    {
        "name": "Turks and Caicos Islands",
        "capital": "Cockburn Town",
        "languages": [
            "English"
        ],
        "population": 38718,
        "flag": require("https://flagcdn.com/tc.svg"),
        "region": "Americas",
        "area": 948
    },
    {
        "name": "Tuvalu",
        "capital": "Funafuti",
        "languages": [
            "English"
        ],
        "population": 11792,
        "flag": require("https://flagcdn.com/tv.svg"),
        "region": "Oceania",
        "area": 26
    },
    {
        "name": "Uganda",
        "capital": "Kampala",
        "languages": [
            "English",
            "Swahili"
        ],
        "population": 45741000,
        "flag": require("https://flagcdn.com/ug.svg"),
        "region": "Africa",
        "area": 241550
    },
    {
        "name": "Ukraine",
        "capital": "Kyiv",
        "languages": [
            "Ukrainian"
        ],
        "population": 44134693,
        "flag": require("https://flagcdn.com/ua.svg"),
        "region": "Europe",
        "area": 603700
    },
    {
        "name": "United Arab Emirates",
        "capital": "Abu Dhabi",
        "languages": [
            "Arabic"
        ],
        "population": 9890400,
        "flag": require("https://flagcdn.com/ae.svg"),
        "region": "Asia",
        "area": 83600
    },
    {
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "capital": "London",
        "languages": [
            "English"
        ],
        "population": 67215293,
        "flag": require("https://flagcdn.com/gb.svg"),
        "region": "Europe",
        "area": 242900
    },
    {
        "name": "United States of America",
        "capital": "Washington, D.C.",
        "languages": [
            "English"
        ],
        "population": 329484123,
        "flag": require("https://flagcdn.com/us.svg"),
        "region": "Americas",
        "area": 9629091
    },
    {
        "name": "Uruguay",
        "capital": "Montevideo",
        "languages": [
            "Spanish"
        ],
        "population": 3473727,
        "flag": require("https://flagcdn.com/uy.svg"),
        "region": "Americas",
        "area": 181034
    },
    {
        "name": "Uzbekistan",
        "capital": "Tashkent",
        "languages": [
            "Uzbek",
            "Russian"
        ],
        "population": 34232050,
        "flag": require("https://flagcdn.com/uz.svg"),
        "region": "Asia",
        "area": 447400
    },
    {
        "name": "Vanuatu",
        "capital": "Port Vila",
        "languages": [
            "Bislama",
            "English",
            "French"
        ],
        "population": 307150,
        "flag": require("https://flagcdn.com/vu.svg"),
        "region": "Oceania",
        "area": 12189
    },
    {
        "name": "Venezuela (Bolivarian Republic of)",
        "capital": "Caracas",
        "languages": [
            "Spanish"
        ],
        "population": 28435943,
        "flag": require("https://flagcdn.com/ve.svg"),
        "region": "Americas",
        "area": 916445
    },
    {
        "name": "Vietnam",
        "capital": "Hanoi",
        "languages": [
            "Vietnamese"
        ],
        "population": 97338583,
        "flag": require("https://flagcdn.com/vn.svg"),
        "region": "Asia",
        "area": 331212
    },
    {
        "name": "Wallis and Futuna",
        "capital": "Mata-Utu",
        "languages": [
            "French"
        ],
        "population": 11750,
        "flag": require("https://flagcdn.com/wf.svg"),
        "region": "Oceania",
        "area": 142
    },
    {
        "name": "Western Sahara",
        "capital": "El Aaiún",
        "languages": [
            "Spanish"
        ],
        "population": 510713,
        "flag": require("https://flagcdn.com/eh.svg"),
        "region": "Africa",
        "area": 266000
    },
    {
        "name": "Yemen",
        "capital": "Sana'a",
        "languages": [
            "Arabic"
        ],
        "population": 29825968,
        "flag": require("https://flagcdn.com/ye.svg"),
        "region": "Asia",
        "area": 527968
    },
    {
        "name": "Zambia",
        "capital": "Lusaka",
        "languages": [
            "English"
        ],
        "population": 18383956,
        "flag": require("https://flagcdn.com/zm.svg"),
        "region": "Africa",
        "area": 752618
    },
    {
        "name": "Zimbabwe",
        "capital": "Harare",
        "languages": [
            "English",
            "Shona",
            "Northern Ndebele"
        ],
        "population": 14862927,
        "flag": require("https://flagcdn.com/zw.svg"),
        "region": "Africa",
        "area": 390757
    }
]

export default countries_data