/*
 * @name 伪造VIP - ltapi.huantukj.com
 * @match ^https:\/\/ltapi\.huantukj\.com\/v1\/auth\/(pay|goods)$
 */

let body = $response.body;

try {
  let obj = JSON.parse(body);

  // 修改会员相关信息（根据接口不同调整字段）
  if (obj?.data) {
    obj.data.isVip = 1;
    obj.data.vipName = "超级会员";
    obj.data.expireTime = "2099-12-31";
    obj.data.payStatus = true;
    obj.data.level = "pro";
  }

  $done({ body: JSON.stringify(obj) });
} catch (e) {
  console.log("修改失败: " + e);
  $done({ body });
}