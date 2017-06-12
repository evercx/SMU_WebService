# 接口文档

本项目的接口服务主要分为登录接口和查询接口。调用者必须先请求登录接口获取`token_id`，再携带`token_id`请求查询接口才能正常获取数据。



## 登录接口

#### URL

​	http://hostname:port/api/v1/login

#### HTTP 请求方式

​	POST

#### 请求参数

| 名称           | 类型     | 是否必须 |  默认  | 说明   |
| ------------ | ------ | :--: | :--: | ---- |
| userNumber   | string | True |  /   | 用户学号 |
| userPassword | string | True |  /   | 用户密码 |

#### 请求示例

```json
POST /api/v1/login HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "userNumber":"xxx",
  "userPassword":"xxx"
}
```

#### 返回字段说明

| 返回值字段    | 字段类型   | 字段说明            |
| -------- | ------ | --------------- |
| status   | string | 状态码             |
| msg      | string | 返回信息描述          |
| token_id | string | 用户的标识符 查询接口所需参数 |

#### 返回示例

```json
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 72
Content-Type: application/json; charset=utf-8
Vary: Accept

{
  "status":"200",
  "msg":"登录成功",
  "token_id":"xxxxxxxx"
}
```



## 查询接口列表

| 接口名称                                     | 接口说明           |
| :--------------------------------------- | :------------- |
| [smu.jwxt.student_detail](./smu.jwxt.student_detail.md) | 返回教务系统中的学生基本信息 |





## 其他

#### 返回状态码解释

| 状态码  |   说明   |
| :--: | :----: |
| 200  | 成功返回信息 |
| 401  | 用户登录失败 |