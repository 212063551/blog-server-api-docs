## 发送验证码 <Badge type="info" text="公开接口" />

接口描述：发送验证码

接口地址：`/code`

请求类型：POST

**请求参数：**

| 参数  |  类型  | 必传 | 备注     |
| :---: | :----: | :--: | -------- |
| email | string |  是  | 用户邮箱 |

**请求参数示例：**

```json
{
	"email": "***********"
}
```

**返回参数：**

|  参数名  | 说明                          |
| :------: | :---------------------------- |
|  status  | 0 失败，1 成功                |
|   info   | 成功返回 ok，失败返回报错信息 |
| infocode | infocode 错误码               |

**返回示例：**

- 成功示例：

```json
{
	"status": "1",
	"info": "OK",
	"infocode": "1000"
}
```

- 失败示例：

```json
{
	"status": "1",
	"info": "SEND_MAIL_ERROR",
	"infocode": "1000"
}
```
