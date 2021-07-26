const request = require('request');

/**
 * 课件基本信息
 * @param {*} id 
 */
const getBaseCoureware = (id) => {
    return new Promise((resolve, reject) => {
        request({
            url: `http://etapi.xesv5.com/testflow/querycoursev2/${id}`,
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        },(err, response, body) => {
            if (!err && response.statusCode === 200) {
                body = JSON.parse(body);
                resolve(body);
            } else {
                reject(err)
            }
        })
    })
}

/**
 * 课件详细内容
 * @param {*} id 
 */
const getCourseware = (id) => {
    return new Promise((resolve, reject) => {
        getBaseCoureware(id).then((data)=>{
            const { project_url } = data.infodict;
            request({
                url: project_url,
                method: 'get',
                headers: {
                    'content-type': 'application/json'
                }
            },(err, response, body) => {
                if (!err && response.statusCode === 200) {
                    body = JSON.parse(body);
                    resolve(body);
                } else {
                    reject(err)
                }
            })
        }, (error)=>{
            reject(error);
        });
    })
}

export default getCourseware;