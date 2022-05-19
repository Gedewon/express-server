import "dotenv/config";

export default {
  port: 1337,
  host: "localhost",
  dbUri: `mongodb+srv://${process.env.DB_STRING}@cluster0.p2cc4.mongodb.net/?retryWrites=true&w=majority`,
  accessTokenTtl: "15m",
  refershTokenTtl: "1y",
  privateKey: `
  -----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDAzmm4lniEra1Noop3Q4IczZ2tx9H9/l8nIUx9nptSgxtL32II
qqYuYsPqx7gLmTfI8zZgl00RmEWVOcTxUIhSmkPOIP1zY4uxeAgwrhfaKii34KXu
cL2V8JU94JlsbzZIkl0n60ZpwPm77rydZ88vrnzUA1reBxQY/CxF1CQabQIDAQAB
AoGBAKLXs4Mr0258IbtIZRqF8gbRwzNbaYjUpxktjqUqqJTwFsXmTa50MxdKY56Q
QGnLZspaYLsEDxulOF/pAuWt1vQzMfXRP7CHN5bJJDgvcdIJ76YJ+YCZY/vrLTMx
McD/z+w0lQZeiI0OJM8bs0mmDkwd17MKvQzymA5iSoe3UAghAkEA+vseK2fmLiFK
nNaEJcLsWJbcnvCJNfXHIrPKv/XlYYujePjTO1zBfH+olsKJFOQ4x+ssWdsCxAF+
iketvtbO0wJBAMSpeTjcZcWtKIIyOQo6Wz74PADGxfhYVzBB4M04CJ5eHHnYFrvB
8K6CTVtLtnMlCzG8A+2BFDS7Dsw0ZJJAKb8CQC8TzXvs2ENM4Vb78fu3TWfsnGN/
0Oz7NigvO1e4gxdB/x7g5ZZb9rsoovHseZQenvv5A++y4hjsAtVjTpbeahsCQE3d
O93DhZgKwyspb2QZTt9TsY4tJVz6vSqiKruWH/N0F5o2cGnOk9jERpSLGaXlWNVM
N9HldXabSXSYmek99kkCQQC+4C3IBoyl7u/nQ136e2mX/3qO1oEaqxptsZm8/Ip9
a8Ab4Z+tXWZCVhUVbLJeVgQuLvkT6E+9Q1b6gT9Ljj1l
-----END RSA PRIVATE KEY-----`,
};
