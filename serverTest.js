import axios from 'axios';


var data = JSON.stringify({
    "collection": "movies",
    "database": "sample_mflix",
    "dataSource": "movies",
    "projection": {
        "_id": 1
    }
});
var config = {
    method: 'post',
    url: 'https://eu-west-2.aws.data.mongodb-api.com/app/data-gfxihfu/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'EUAsuVYsTzcHxwDVsilyDrZuIjJ6P09mhzBXW7Y4TCOa8rd415XaOdoQWnhuZx0M',
    },
    data: data
};
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
