## 查询全部用户 <Badge type="info" text="鉴权接口" />

接口描述：此接口查询所有用户数据

接口地址：`/queryallusers`

请求类型：GET

**请求参数：**

|    参数     | 必选 |  类型  | 说明                    |
| :---------: | :--: | :----: | ----------------------- |
|  pageSize   |  是  | number | 当前页码，默认 1        |
| pageCurrent |  是  | number | 每页显示的数量，默认 10 |

**请求参数示例：**

```
http://localhost:8000/queryallusers?pageSize=1&pageCurrent=10
```

**返回参数：**

|  参数名  | 说明                          |
| :------: | :---------------------------- |
|  status  | 0 失败，1 成功                |
|   info   | 成功返回 ok，失败返回报错信息 |
| infocode | infocode 错误码               |
|   data   | 返回用户查询到的数据          |

**返回示例：**

- 成功示例：

```json
{
	"status": "1",
	"info": "OK",
	"infocode": "1000",
	"data": {
		"total": 2,
		"rows": [
			{
				"_id": "******************",
				"nickname": "******************",
				"account": "******************",
				"email": "******************",
				"status": "******************",
				"avatarUrl": "******************",
				"introduction": "这里什么也没有...",
				"createdAt": "2023-10-05 04:46:39",
				"updatedAt": "2023-10-05 04:46:39"
			},
			{
				"_id": "******************",
				"nickname": "******************",
				"account": "******************",
				"email": "******************",
				"status": "******************",
				"avatarUrl": "******************",
				"introduction": "这里什么也没有...",
				"createdAt": "2023-10-05 04:46:39",
				"updatedAt": "2023-10-05 04:46:39"
			}
		]
	}
}
```

- 失败示例：

```json
{
	"status": "0",
	"info": "TOKEN_EXPIRATION_ERROR",
	"infocode": "3000"
}
```
