
const request = require('request');
const apiKey = 'cfd6ff74389089fe78baaf07acb6e1c4';
//...
//...
router.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${cfd6ff74389089fe78baaf07acb6e1c4}`
    request(url, function (err, response, body) {
        if (err) {
            res.render('index', { weather: null, error: 'Error, please try again' });
        } else {
            let weather = JSON.parse(body)
            if (weather.main == undefined) {
                res.render('index', { weather: null, error: 'Error, please try again' });
            } else {
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', { weather: weatherText, error: null });
            }
        }
    });
})
module.exports = router