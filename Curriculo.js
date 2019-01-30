var urlHabilidades = "https://demo8095991.mockable.io/habilidade_get";
var urlEmpresas = "https://demo8095991.mockable.io/empresa_get";

window.addEventListener("load", function() {

    var header = document.getElementById("headerButton");

    header.addEventListener("click", function() {
        document.body.className = document.body.className ? "" : "dark";
    });

});

function populateCompanies(jsonText) {
    var data = JSON.parse(jsonText);

    var container = document.getElementById("companiesContainer");

    var companiesList = document.createElement("dl");

    container.appendChild(companiesList);

    for (var i = 0; i < data.empresas.length; i++) {
        var company = data.empresas[i];
        var companyTerm = document.createElement("dt");

        companiesList.appendChild(companyTerm);

        var companyDefitinion = document.createElement("dd");

        companiesList.appendChild(companyDefitinion);

        companyDefitinionList = document.createElement("dl");

        companyDefitinion.appendChild(companyDefitinionList);

        companyTerm.innerHTML = company.empresa;
        companyTerm.className = "term-label";

        var periodTerm = document.createElement("dt");

        periodTerm.innerHTML = "Período";

        var periodDefinition = document.createElement("dd");

        periodDefinition.innerHTML = company.ano;

        companyDefitinionList.appendChild(periodTerm);

        companyDefitinionList.appendChild(periodDefinition);

        var cargoTerm = document.createElement("dt");

        cargoTerm.innerHTML = "Cargo";

        var cargoDefinition = document.createElement("dd");

        cargoDefinition.innerHTML = company.cargo;

        companyDefitinionList.appendChild(cargoTerm);

        companyDefitinionList.appendChild(cargoDefinition);

        var activitiesTerm = document.createElement("dt");

        activitiesTerm.innerHTML = "Atividades";

        var activitiesDefinition = document.createElement("dd");

        activitiesDefinition.innerHTML = company["descrição"].join("<br />");

        companyDefitinionList.appendChild(activitiesTerm);

        companyDefitinionList.appendChild(activitiesDefinition);

    }
}

function populateCompanies2(jsonText) {
    var data = JSON.parse(jsonText);

    var container = document.getElementById("habilitiesContainer");

    var companiesList = document.createElement("dl");

    container.appendChild(companiesList);

    for (var i = 0; i < data.habilidades.length; i++) {
        var company = data.habilidades[i];
        var companyTerm = document.createElement("dt");

        companiesList.appendChild(companyTerm);

        var companyDefitinion = document.createElement("dd");

        companiesList.appendChild(companyDefitinion);

        companyDefitinionList = document.createElement("dl");

        companyDefitinion.appendChild(companyDefitinionList);

        var habilidadeTerm = document.createElement("dt");

        habilidadeTerm.innerHTML = "Habilidade";

        var habilidadeDefinition = document.createElement("dd");

        habilidadeDefinition.innerHTML = company.habilidade;

        companyDefitinionList.appendChild(habilidadeTerm);

        companyDefitinionList.appendChild(habilidadeDefinition);

        var nivelTerm = document.createElement("dt");

        nivelTerm.innerHTML = "Nivel";

        var nivelDefinition = document.createElement("dd");

        nivelDefinition.innerHTML = company.nivel;

        companyDefitinionList.appendChild(nivelTerm);

        companyDefitinionList.appendChild(nivelDefinition);

    }
}

function loadData(url, loadCallback, nextCallBack) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            loadCallback(this.responseText);
            if (nextCallBack) {
            }

        }
    }
    ;
    xhttp.open("GET", url, true);
    xhttp.send();
}

loadData(urlEmpresas, populateCompanies, null);

function loadData2(url, loadCallback, nextCallBack) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            loadCallback(this.responseText);
            if (nextCallBack) {
            }

        }
    }
    ;
    xhttp.open("GET", url, true);
    xhttp.send();
}

loadData2(urlHabilidades, populateCompanies2, null);
