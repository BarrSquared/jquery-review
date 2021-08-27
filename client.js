$(document).ready(readyNow); 
// class is a .
// id is #
// js?

function readyNow() {
    console.log('DOM ready');
    //Click handler
    $('#submit-button').on('click', appendCityToTable);
    $('#city-table-body').on('click', '.clear-button', clearBackgroundColor)

}

function clearBackgroundColor(){
    //What is $(this)?
    console.log($(this).parent().parent());//walking back DOM traversal
    let tableRow = $(this).parent().parent();
    tableRow.removeClass('warm');// same as using jquery
    tableRow.removeClass('cold');// $(this).parent().parent().removeClass('warm');
    // tableRow.removeClass(); // removes all classes, to cover warm and cold

}

function appendCityToTable() {
    let cityName = $('#city-name').val(); // .val returns a string
    let temperature = $('#city-temperature').val();
    let tempNumber = parseInt(temperature);
    console.log(cityName, temperature);

    //using a var to pass conditional into jquery call and update dom
    let rowClass = '';//setting empty string
    if(tempNumber > 75){
        rowClass = 'warm';
    } else if (tempNumber < 50) {
        rowClass = 'cold';
    }

    //applying a class, connect as a string
    $('#city-table-body').append(`
    <tr class=${rowClass}>
        <td>${cityName}<td>
        <td>${temperature}</td>
        <td><button class="clear-button">Clear Background</button><td>
    </tr>
    `);
}//end appendCityToTable


//table body expects a specific order, don't use divs, tobody => tr => td