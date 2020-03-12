//全局Express框架
const express = require("express");
const router = express.Router();
module.exports = router;

// get请求接口
router.all("/getUserInfo",(req,res)=>{
    var response = { status: 2, data: {'username':'admin','password':'a123456'} };
    res.send(JSON.stringify(response));
    console.log("URL:" + req.url + "  " + string.pathname);
    res.status(200).json(response);
});

/**
 * express建立GET接口
 * http://192.168.1.7:8092/a/ab?name='name12'&pwd='123'
 */
router.get('/ab', (req, res) => {
    var string = url.parse(req.url, true);
    //解析参数
    var params = url.parse(req.url, true).query;
    console.log(params)
    var user = {};
    user.name = params.name;
    user.pwd = params.pwd;
    var responseJson = { name: 'abc', pwd: '123' };
    var response = { status: 2, data: user };
    res.send(JSON.stringify(response));
    console.log("URL:" + req.url + "  " + string.pathname);
    res.status(200).json(response);
    //有数据返回用res.send();
    //无数据返回用res.end();
    // res.end("hello nodejs");
});


/**
 * express建立POST接口
 */
router.post('/r', (req, res) => {
    var string = url.parse(req.url, true);
    console.log("URL:" + req.url + "  " + string.pathname);
    //解析参数
    var params = req.body;
    var user = {};
    user.name = params.name;
    user.pwd = params.pwd;
    var response = { status: 1, data: user };
    res.send(JSON.stringify(response));
    res.send('post:' + string.pathname + "  " +
        JSON.stringify(text));
    res.end();
    console.log(req.method);//post
    console.log(req.body);//{ a: '3', b: '4', c: '5' }
    // console.log(req.body.a); //3
    // res.end("hello nodejs");
});