const app = require('../app')
const db = require('../routes/database')
const request = require('request')
const textRes = require('./textresponse')

exports.interactivity = function(req, res) {

    res.send('got it');

    

}



// {
//     "type": "interactive_message",
//     "actions": [
//       {
//         "name": "recommend",
//         "value": "recommend",
//         "type": "button"
//       }
//     ],
//     "callback_id": "comic_1234_xyz",
//     "team": {
//       "id": "T47563693",
//       "domain": "watermelonsugar"
//     },
//     "channel": {
//       "id": "C065W1189",
//       "name": "forgotten-works"
//     },
//     "user": {
//       "id": "U045VRZFT",
//       "name": "brautigan"
//     },
//     "action_ts": "1458170917.164398",
//     "message_ts": "1458170866.000004",
//     "attachment_id": "1",
//     "token": "xAB3yVzGS4BQ3O9FACTa8Ho4",
//     "original_message": {"text":"New comic book alert!","attachments":[{"title":"The Further Adventures of Slackbot","fields":[{"title":"Volume","value":"1","short":true},{"title":"Issue","value":"3","short":true}],"author_name":"Stanford S. Strickland","author_icon":"https://api.slack.comhttps://a.slack-edge.com/bfaba/img/api/homepage_custom_integrations-2x.png","image_url":"http://i.imgur.com/OJkaVOI.jpg?1"},{"title":"Synopsis","text":"After @episod pushed exciting changes to a devious new branch back in Issue 1, Slackbot notifies @don about an unexpected deploy..."},{"fallback":"Would you recommend it to customers?","title":"Would you recommend it to customers?","callback_id":"comic_1234_xyz","color":"#3AA3E3","attachment_type":"default","actions":[{"name":"recommend","text":"Recommend","type":"button","value":"recommend"},{"name":"no","text":"No","type":"button","value":"bad"}]}]},
//     "response_url": "https://hooks.slack.com/actions/T47563693/6204672533/x7ZLaiVMoECAW50Gw1ZYAXEM",
//     "trigger_id": "13345224609.738474920.8088930838d88f008e0"
//   }
