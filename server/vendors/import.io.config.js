module.exports = [
  {
    url: "http://www.volcafespecialty.com/our-coffees/west-coast-offerings/",
    config: "16441c69-1cf4-4e2b-8b56-e232272a9c6f",
    fn: volcafe
  },
  {
    url: "http://www.volcafespecialty.com/our-coffees/east-coast-offerings/",
    config: "16441c69-1cf4-4e2b-8b56-e232272a9c6f",
    fn: volcafe
  }
];

function volcafe(res, cb) {
  var data = {
    entitities: [],
    products: [],
    props: []
  };
  res = JSON.parse(res);
  if (res.pageData.statusCode !== 200) return;

  res.extractorData.data[0].group.forEach(function (el, i, a) {
    if(!Array.isArray(el["Quality value"])) return;
    
    var product = {
      "title": "",
      "body_html": "",
      "vendor": "",
      "product_type": "",
      "handle": "1812315001"
    };
    
    product.title = el["Quality value"][0].text.replace("**","");

    if (el["Notes label"]) {
      var tmp_prop = el["Notes label"][0].text.replace("<td class=\"column-6 \"></td>", "");
      if (tmp_prop.length > 0) {
        tmp_prop = tmp_prop.split("title: 'Notes', text: '")[1];
        tmp_prop = tmp_prop.split("', sticky:")[0];
        product.body_html = "<p>" + tmp_prop + "</p>";
      }
    }

    data.products.push(product);

    var entity = {
      value: product.title,
      synonyms: []
    };
    entity.synonyms.push(product.title.toLowerCase());
    entity.synonyms.push(product.title.toUpperCase());
    entity.synonyms.push(product.title);
    
    data.entitities.push(entity);
    
  });
  cb(data);
}
