const request = require('request')
const forecast =(latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/0ed25c198e170c36e1248400a1c98202/37.8267,-122.4233'

    request({url: url, json: true},(error,{body}) => {
        if(error)
        {
            callback('Unable to connect to weather services!',undefined)
        }else if(body.error){
            callback('unable to find location',undefined)
        }else{
            callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + ' % chance of rain')
        }
    })
    }
    module.exports = forecast

