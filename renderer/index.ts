/// <reference path="../typings/main.d.ts" />

declare interface Object {
  assign:(target:Object, source:Object) => void;
}

window.addEventListener("load", init)

function init() {
  let textlint = require("textlint").textlint;

  let presetJapanese = require("textlint-rule-preset-japanese");

  let rules = {
    "prh": require("textlint-rule-prh")
  };

  let ruleConfig = {
    "prh": {
      "rulePaths": [
        "./prh.yml"
      ]
    }
  };

  var marked = require('marked');

  var renderer = new marked.Renderer()
  renderer.strong = function (text:string) {
    return "hoge";
  };
  renderer.em = function (text:string) {
    return "hoge";
  };

  renderer.code = function (code:string, language:string) {

    if (language == "@meta") {
      return "メタタイトルだよ～ん";
    }
    return "hoge";
  };

  marked.setOptions({
    renderer: renderer
  });

  console.log(marked('I am using __markdown__.'));

  Object.assign(rules, presetJapanese.rules)
  Object.assign(ruleConfig, presetJapanese.ruleConfig)


  textlint.setupRules(
    rules,
    ruleConfig);
  textlint.lintMarkdown(`
  # サンプル

これはサンプルです。

「である」調と「ですます」調の混在を判定するルールとなっている。

[hogehoge](http://jquery.com) - リンクのjQueryは認識されないぞ！

結果として「である」調と「ですます」調の使われる数をだしたものである。

改行です。

jqueryってすごいよね。


すごい長い文章を記入してみることって、案外難しいと思うのだけれども、どうしたらいいんだろうね。すごい長い文章を記入してみることって、案外難しいと思うのだけれども、どうしたらいいんだろうね。すごい長い文章を記入してみることって、案外難しいと思うのだけれども、どうしたらいいんだろうね。

 `).then(results => {
    var errors = [];

    for (var i = 0; i < results.messages.length; i++) {
      console.log(results.messages[0].message);// => [{message:"lint message"}]
      errors.push(results.messages[i].line + " : " + results.messages[i].message);
    }

    var mytext = [
      "```@meta",
      "タイトルテキスト",
      "```"
    ].join("\n\n");

    errors.push(marked(`__it's markdown.__ let's markdown. \n${mytext} `));
    document.getElementById("console").innerHTML = errors.join("<br>");
  });
}
