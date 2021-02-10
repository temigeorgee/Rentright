$('#searchForm').on('submit', async function (e) {
    e.preventDefault();

    const $location = $('#InputLocation').val();
    const $apartment = $('#InputApartment').val();
    const $bedrooms = $('#InputBedrooms').val();
    const $toilets = $('#InputToilets').val();

    const predictor = {
        $location,
        $apartment,
        $bedrooms,
        $toilets
    }

    $('#InputLocation').val('');
    $('#InputApartment').val('Type of apartment');
    $('#InputBedrooms').val('No of bedrooms');
    $('#InputToilets').val('No of toilets');

    // const feedback = await fetch('http://localhost:3000/', {
    const feedback = await fetch('https://rentright.herokuapp.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(predictor)
    }).then(res => res.json())
        .then(data => {
            return data;
        });


    if (feedback) {
        let myPrice;
        for (let key in feedback) {
            myPrice = feedback[key];
        }

        let location = "Location: " + $location;
        let type = "Apartment Type: " + $apartment;
        let bedrooms = "Number of Bedrooms: " + $bedrooms;
        let toilets = "Number of Bathrooms / Toilets: " + $toilets;

        let lowerPrice = (myPrice - 10000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        let upperPrice = (myPrice + 10000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

        $('.apartLoc').text(location)
        $('.apartType').text(type)
        $('.bedrooms').text(bedrooms)
        $('.toilets').text(toilets)

        $('.lower').text(lowerPrice);
        $('.upper').text(upperPrice);
        $('#exampleModal').modal({ show: true });
    }
});