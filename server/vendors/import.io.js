/**
 * import.io
 * is the web scrapping service
 * we scrap data from web sites and update products and push to shopify
 * we also get product names and entities for pushing to api.ai
 *
 *
 *
 *
 *
 */


importio_config.forEach(function (el, i, a) {
  importio(el.url, el.config, el.fn, import_error, function (data) {
    //console.log(data);
    if (!data) return;

    data.entitities.length > 0 && push_api_ai(data.entitities, app);
    data.products.length > 0 && push_shopify_products(data.products, app);
  });
});


function importio(url, config, success, fail, final) {
  var importkey = process.env.IMPORT_IO_APIKEY;
  var _url = "https://extraction.import.io/query/extractor/" +
    config +
    "?_apikey=" + importkey +
    "&url=" + q.escape(url);

  https.get(_url, function (httpResponse) {
    httpResponse.setEncoding('utf8');
    var response = '';
    httpResponse.on('data', function (chunk) {
      response += chunk;
    });
    httpResponse.on('end', function () {
      success(response, final);
    });
  }).on("error", function (e) {
    fail(e);
  });
};

function import_error(res) {
  console.error(res);
  return false
}
