let url = 'https://restcountries.eu/rest/v1/name/';
const countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  let countryName = $('#country-name').val();
  if(!countryName.length) {countryName = 'Poland'};

  $.ajax({
     url: url + countryName,
     method: 'GET',
     success: showCountriesList
   });
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item){
    var self = this;
    var $country = $('<li>').text(item.name).appendTo(countriesList);
    $country.append(propertyList(item));
   
  });
}

function propertyList(item) {
  // creating table elements
  $propertyList = $('<table>');
  
  $tr1 = $('<tr>');
  $tdCapital = $('<td>').text('Capital:');
  $tdCapitalValue = $('<td>').text(item.capital);
  
  $tr2 = $('<tr>');
  $tdArea = $('<td>').text('Area:');
  $tdAreaValue = $('<td>').text(item.area);
 
  $tr3 = $('<tr>');
  $tdLanguages = $('<td>').text('Languages:');
  $tdLanguagesValue =  $('<td>').text(item.languages);

  $tr4 = $('<tr>');
  $tdCurrencies = $('<td>').text('Currencies:');
  $tdCurrenciesValue = $('<td>').text(item.currencies);
  
  $delBtn = $('<button>').addClass('delBtn').text('Remove');
  
  $delBtn.click(function(){
    this.closest('li').remove(); 
  })
  
  // crafting table element
  $tr1.append($tdCapital)
      .append($tdCapitalValue);

  $tr2.append($tdArea)
      .append($tdAreaValue);

  $tr3.append($tdLanguages)
      .append($tdLanguagesValue);
    
  $tr4.append($tdCurrencies)
      .append($tdCurrenciesValue);
  
  $propertyList.append($tr1)
              .append($tr2)
              .append($tr3)
              .append($tr4)
              .append($delBtn);
                       
  return $propertyList;
}


