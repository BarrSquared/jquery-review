$(document).ready(readyNow);

function readyNow() {
    console.log('DOM ready');
    //Click handler
    $('#submit-button').on('click', appendCityToTable);

}

function appendCityToTable() {
    let cityName = $('#city-name').val(); // .val returns a string
    let temperature = $('#city-temperature').val();
    console.log(cityName, temperature);

    $('#city-table-body')
}//end appendCityToTable
