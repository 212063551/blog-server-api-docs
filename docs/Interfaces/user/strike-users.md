## 删除用户 <Badge type="info" text="鉴权接口" />

接口描述：硬删除用户信息

接口地址：`/strikeusers`

请求类型：DELETE

**请求参数：**

|  参数   |        类型        | 必传 | 备注                                              |
| :-----: | :----------------: | :--: | ------------------------------------------------- |
| account | `string  string[]` |  是  | 用户账号,注意请不要传入邮箱，这里只能填入用户账号 |

**请求参数示例：**

```json
// 删除单个账号
{
	"account": "***********" || "account": ["***********"]
}
// 删除多个账号
{
	"account": ["***********","***********"]
}
```

**返回参数：**

|  参数名  | 说明                                          |
| :------: | :-------------------------------------------- |
|  status  | 0 失败，1 成功                                |
|   info   | 成功返回 ok，失败返回报错信息                 |
| infocode | infocode 错误码                               |
|   data   | true 表示删除成功，这里是硬删除。数据无法恢复 |

**返回示例：**

- 成功示例：

```json
{
	"status": "1",
	"info": "OK",
	"infocode": "1000",
	"data": true
}
```

- 失败示例：

```json
{
	"status": "1",
	"info": "OK",
	"infocode": "1000",
	"data": false
}
```