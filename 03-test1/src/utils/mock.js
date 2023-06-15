const Mock = require('mockjs')

Mock.setup({
  timeout: 1000
})

// 路由权限
Mock.mock('/api/getPermission', 'post', {
  "success":true,
  "code":200,
  "data":{
    "menuList": [
      {"menuCode":"Bghome","childMenus": null},
      {"menuCode":"order","childMenus":[{"menuCode": "orderManage","childMenus":null}]},
      {"menuCode":"dayiManage","childMenus":[]},
      {"menuCode":"user","childMenus":[{"menuCode":"userManage","childMenus":null},{"menuCode":"role","childMenus":null}]},
      {"menuCode":"account","childMenus":[{"menuCode":"center","childMenus":null}]},
    ]
  },
  "msg":null
})

// 登陆
Mock.mock('/api/login', 'post', {
  "success":true,
  "message":"执行成功",
  "data":{"tokenHead":"Bearer","token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE2MDQ1NjA2NTM5MjYsImV4cCI6MTYwNTE2NTQ1M30.ire0w4Rg7lvl4bOfsmASFOvsV-xxzfs7y7mOawwbbXOLnGQXiOvhDiok53gra6WnYGY7zVRm09W9dN_lU0ycvA"},
  "code":200
})

// 用户信息
Mock.mock('/api/user/info', 'get', {
  "success":true,
  "message":"执行成功",
  "data":{"id":"accf4d9002ed44ec9c226f32a8cd9dcf","username":"admin","realname":"朱*师","mobile":"18212342234","email":"my_lwy@yeah.net","identityCard":"string******ing1","avator":"string","sex":"男","userCode":"admin","bday":"string","qq":"string","gmtCreate":"2019-11-05 02:21:07","gmtModify":"2020-07-30 02:47:32","deptId":"分析测试中心","roleList":["超级管理员"],"vueDeptId":"7","delete":false},
  "code":200
})