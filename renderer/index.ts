window.addEventListener("load", init)

function init() {
  var textlint = require("textlint").textlint;
  textlint.setupRules({
    "dearu-desumasu": require("textlint-rule-no-mix-dearu-desumasu")
  });
  textlint.lintMarkdown(`
  # サンプル

これはサンプルです。

「である」調と「ですます」調の混在を判定するルールとなっている。

結果として「である」調と「ですます」調の使われる数をだしたものである。
 `).then(results => {
    console.log(results.messages[0].message);// => [{message:"lint message"}]
    document.getElementById("console").innerHTML = results.messages[0].line + " : " + results.messages[0].message;
  });
}