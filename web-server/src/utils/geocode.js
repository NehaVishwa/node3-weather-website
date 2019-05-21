const request = require('request')
const geocode = (address,callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibmVoYS12aXNod2FraXJhbiIsImEiOiJjanZjNWVkeXQxZmVyNDNtamk2ZXM1NDNmIn0.Zgb_3GP8wCA-PrnIXoa42A'
    request({url: geocodeURL, json: true},(error,{body}) => {
        if(error){
            console.log('Unable to coneect to weather services!',undefined)
        }
        else if(body.features.length===0)  {
        console.log('Unable to find location.Try another search',undefined)
        } else {
            callback(undefined,{
            latitude : body.features[0].center[1],
            longitude : body.features[0].center[0],
            location : body.features[0].place_name
            })
        }
})
}

module.exports = geocode
// geocode('Philadelphia',(error,data) => {
//     console.log('Error',error)
//     console.log('Data',data)
// })
