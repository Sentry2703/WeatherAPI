var locations = {"Countries": 
["Amsterdam, Netherlands",
"Ankara, Turkey",
"Åstorp, Sweden",
"Athens, Greece",
"Belfast, Northern Ireland",
"Barcelona, Spain",
"Berlin, Germany",
"Bern, Switzerland",
"Bilbao, Spain",
"Brussels, Belgium",
"Bucharest, Romania",
"Budapest, Hungary",
"Cardiff, Wales",
"Cologne, Germany",
"Copenhagen, Denmark",
"Cork, Ireland",
"Dublin, Ireland",
"Edinburgh, Scotland",
"Florence, Italy",
"Frankfurt, Germany",
"French Riviera, France",
"Funchal, Portugual",
"Gibraltar",
"Gothenburg, Sweden",
"Hamburg, Germany",
"Helsinki, Finland",
"Ibiza, Spain",
"Kyiv, Ukraine",
"Lillehammer, Norway",
"Lisbon, Portugual",
"London, England",
"Madrid, Spain",
"Mallorca, Spain",
"Manchester, England",
"Marseille, France",
"Maspalomas, Spain",
"Milan, Italy",
"Munich, Germany",
"Naples, Italy",
"Oñati, Spain",
"Oslo, Norway",
"Paris, France",
"Prague, Czech Republic",
"Reykjavík, Iceland",
"Riga, Latvia",
"Rome, Italy",
"Santa Cruz das Flores, Portugual",
"Santa Cruz de Tenerife, Spain",
"Skye, Scotland",
"Sofia, Bulgaria",
"Stockholm, Sweden",
"Tallinn, Estonia",
"Vienna, Austria",
"Warsaw, Poland",
"York, England",
"Zurich, Switzerland"]}

window.onload = function() {
    var country = document.getElementById("Country");
    for (var i = 0; i < locations.Countries.length; i++) {
        var opt = locations.Countries[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        country.appendChild(el);
    }
}

submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {
    alert("Thank you for your submission!")
})

