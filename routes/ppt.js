var express = require('express');
var router = express.Router();
const path = require('path');

const request = require('request')
// import pptxgen from 'pptxgenjs';
// import LAYOUT from '../const/layout'
import Render  from '../core';

import getCourseware from '../api/courseware';

router.get('/to-ppt', function(req, res, next) {
    const { id } = req.query;
    let feedback = {
        code: 1,
        message: 'ppt transfer success!'
    }
    if (!id) {
        feedback.code = 0;
        feedback.message = 'id is necessary!';
        return res.json(feedback);
    }
    // 获取测试的json数据
    let coursewareData;
    getCourseware(id).then((data)=>{
        coursewareData = data;
        // 生成ppt
        new Render(coursewareData);
    },(error)=>{
        return res.json(error);
    })
     
    res.json(feedback);
});

module.exports = router;