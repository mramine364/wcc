
$('#get-location-btn').click((event) => {
    console.log('get-location-btn clicked')

    let lat = document.getElementById("latitude"), 
        lon = document.getElementById("longitude")

    function showPosition(position) {
        lat.value = position.coords.latitude
        lon.value = position.coords.longitude
    }

    function getLocation() {
        console.log('getting location')
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(showPosition)
        else      
            console.log("Geolocation is not supported by this browser.")
        
    }

    getLocation()
})

