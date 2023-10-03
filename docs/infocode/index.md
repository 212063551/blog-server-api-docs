# info 状态表

| **infocode** | **info 返回值**                | **状态描述**                | **排查策略**         |
| :----------: | :----------------------------- | :-------------------------- | -------------------- |
|     1000     | OK                             | 请求正常                    | 请求正常             |
|     1001     | MISSING_REQUIRED_PARAMS        | 缺少必填参数                | 查看请求参数说明     |
|     1002     | USERNAME_NON_COMPLIANT         | 用户名称不符合规范          | 同上                 |
|     1003     | PASSWORD_NOT_SPECIFICATION     | 密码不符合规范              | 同上                 |
|     1004     | EMAIL_NOT_SPECIFICATION        | 邮箱格式不符合规范          | 同上                 |
|     1005     | AVATAR_FONT_LENGTH             | 头像存储的 url 链接超出规范 | 最大长度 255         |
|     1006     | INTRODUCTION_NOT_SPECIFICATION | 用户简介内容超出规范        | 最大可输入 200 字    |
|     1007     | ACCOUNT_GENERATION_ERROR       | 帐户生成错误                | 帐户生成错误         |
|     1008     | WRONG_PASSWORD                 | 密码错误                    | 用户密码错误         |
|     1009     | TOKEN_EXPIRED_ERROR            | Token 过期错误              | Token 过期错误       |
|     1010     | INVALID_TOKEN_ERROR            | Token 无效                  | Token 无效           |
|     1011     | INSUFFICIENT_PERMISSIONS       | 用户权限不足                | 用户权限不足         |
|     1012     | MAILBOX_OCCUPIED               | 邮箱已占用                  | 邮箱已被其他用户占用 |
|     1013     |                                |                             |                      |
|     1014     | ACCOUNT_NOT_SPECIFICATION      | 账号不符合账号规范          |                      |
|     1015     |                                |                             |                      |
|     1016     | USER_NOT_EXIST                 | 用户不存在                  |                      |
|     1017     |                                |                             |                      |
|     1018     |                                |                             |                      |
|     1019     |                                |                             |                      |
|              |                                |                             |                      |
|              |                                |                             |                      |
|              |                                |                             |                      |
|              |                                |                             |                      |
