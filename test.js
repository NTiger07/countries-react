const result = [
    {
        "name": {
            "common": "Germany",
            "official": "Federal Republic of Germany",
            "nativeName": {
                "deu": {
                    "official": "Bundesrepublik Deutschland",
                    "common": "Deutschland"
                }
            }
        },
        "cca2": "DE",
        "ccn3": "276",
        "cca3": "DEU",
        "cioc": "GER",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
    }
]

// console.log(Object.values(value)[0].common)
console.log(Object.values(result[0].name.nativeName)[0].common)