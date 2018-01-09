const {
  Router
} = require('express')
const request = require('request')

const router = Router()

function index (req, res, next) {
  return request({
    url: 'https://medium.com/@khriztianmoreno/latest',
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // We need to pull out the text that comes thru from Medium for JSON hacking
      const jsonBody = JSON.parse(body.replace('])}while(1);</x>', ''))
      return res.status(200).json(jsonBody)
    }

    return res.status(500).json(error)
  })
}

/* GET medium  listing. */
router.get('/medium/', index)

module.exports = router
