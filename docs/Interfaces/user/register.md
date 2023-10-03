## 注册接口 <Badge type="info" text="鉴权接口" />

接口描述：提供用户账号注册

接口地址：`/register`

请求类型：POST

**请求参数：**

|     参数     | 必选 |  类型  | 说明                                                                     |
| :----------: | :--: | :----: | ------------------------------------------------------------------------ |
|   nickname   |  是  | string | 用户名，可使用中文，英文，数字以及下划线组成。 1 > user_name.length > 20 |
|   password   |  是  | string | 密码必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-16 之间。 |
|    email     |  是  | string | 用户邮箱                                                                 |
|  avatarUrl   |  否  | string | 用户头像，不传则默认使用系统自带头像                                     |
| introduction |  否  | string | 用户简介， 不传则默认使用系统生成的简介                                  |

**请求参数示例：**

```json
{
	"nickname": "测试用户",
	"password": "Test12345678",
	"email": "12345678@qq.com",
	"avatarUrl": "https://test_image_link.com", // 此参数可选
	"introduction": "自定义介绍" // 此参数可选
}
```

**返回参数：**

|  参数名  | 说明                          |
| :------: | :---------------------------- |
|  status  | 0 失败，1 成功                |
|   info   | 成功返回 ok，失败返回报错信息 |
| infocode | infocode 错误码               |
|   data   | 返回系统生成的注册的账号      |

**返回示例：**

- 成功示例：

```json
{
	"status": "1",
	"info": "OK",
	"infocode": "1000",
	"data": [
		{
			"account": "***********"
		}
	]
}
```

- 失败示例：

```json
{
	"status": "0",
	"info": "MAILBOX_OCCUPIED",
	"infocode": "1008"
}
```
