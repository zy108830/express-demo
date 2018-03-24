var express = require('express');
const axios=require('axios')
var router = express.Router();
router.get('/', function (req, res, next) {
	res.render('index', {title: 'Express'});
});
router.get('/music/getDiscList', function (req, res, next) {
	axios({
		url:'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
		method:'get',
		params: {
			"picmid": "1",
			"rnd": "0.39075734482345137",
			"g_tk": "1646990585",
			"jsonpCallback": "getPlaylist",
			"loginUin": "924714558",
			"hostUin": "0",
			"format": "json",
			"inCharset": "utf8",
			"outCharset": "utf-8",
			"notice": "0",
			"platform": "yqq",
			"needNewCode": "0",
			"categoryId": "10000000",
			"sortId": "5",
			"sin": "0",
			"ein": "29",
		},
		proxy:false,
		headers: {'referer': 'https://y.qq.com/portal/playlist.html'}
	}).then((response)=>{
		res.json(response.data)
	}).catch((error)=>{
		console.log(error)
	})
});
module.exports = router;
