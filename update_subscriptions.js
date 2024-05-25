// update_subscriptions.js

const subscriptionUrls = [
  'https://sub1.smallstrawberry.com/api/v1/client/subscribe?token=a578b778c9d743a5b648e6b5310f9bca',
  'https://sub3.smallstrawberry.com/api/v1/client/subscribe?token=a578b778c9d743a5b648e6b5310f9bca',
  'https://dy513.mmydy.xyz/api/v1/client/subscribe?token=9d10bbac53f4e9917f899673d5fd5b66'
];

subscriptionUrls.forEach(url => {
  $task.fetch({
    url: url,
    method: 'GET'
  }).then(response => {
    console.log(`订阅更新成功: ${url}`);
  }, reason => {
    console.log(`订阅更新失败: ${url}`);
  });
});

$notify("订阅更新完成", "所有订阅已尝试更新", "");
