let obj = JSON.parse($response.body);

if (obj.list && Array.isArray(obj.list)) {
  for (let item of obj.list) {
    item.pic = "";
    item.pic_arr = [];
    item.link = "";
    item.hot_word = "";
    item.title = "";
    item.title_pic = "";
    item.is_can_close = 1;
    item.duration = 0;
    item.first_page_show_style = 0;
    item.des = "";
  }
  obj.list = [];
}

$done({ body: JSON.stringify(obj) });