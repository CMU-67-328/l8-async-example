
$(document).ready(() => {


    $('#btnGetZip').click(() => {
        console.log('Getting Zip');
        const zip = Number($('#zipcode').val());
        
        console.log('Calling get zipcodes json');
        $.getJSON('USCities.json', (data) => {
            const zipInfo = data.find(zipCode => zipCode.zip_code === zip);
            console.log(zipInfo);
            if (zipInfo) {
                $('#results').append('<h2>' + zipInfo.city + '</h2>');
            }
            console.log('Finished reading zipcodes json');
        });


        console.log('Calling the next functions');
        //blockingCall();

        nonBlockingCall();

    });


    function waitForSeconds(val) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(val + ' second wait complete!');
            }, val * 1000);
        });
    }

    
    function nonBlockingCall() {

        const myPromise = waitForSeconds(1);
        console.log(myPromise);

        waitForSeconds(1).then((res) => {
            $('#results').append('<h2>' + res + '</h2>');           
        });

        waitForSeconds(3).then((res) => {
            $('#results').append('<h2>' + res + '</h2>');
        });

        waitForSeconds(5).then((res) => {
            $('#results').append('<h2>' + res + '</h2>');
        });

        waitForSeconds(7).then((res) => {
            $('#results').append('<h2>' + res + '</h2>');
        });
    }


    async function blockingCall() {
        const result1 = await waitForSeconds(1);
        $('#results').append('<h2>' + result1 + '</h2>');

        const result2 = await waitForSeconds(3);
        $('#results').append('<h2>' + result2 + '</h2>');

        const result3 = await waitForSeconds(5);
        $('#results').append('<h2>' + result3 + '</h2>');

        const result4 = await waitForSeconds(7);
        $('#results').append('<h2>' + result4 + '</h2>');

    }

});

