window.addEventListener("load", init);
function init() {
    var textlint = require("textlint").textlint;
    var presetJapanese = require("textlint-rule-preset-japanese");
    var rules = {
        "prh": require("textlint-rule-prh")
    };
    var ruleConfig = {
        "prh": {
            "rulePaths": [
                "./prh.yml"
            ]
        }
    };
    Object.assign(rules, presetJapanese.rules);
    Object.assign(ruleConfig, presetJapanese.ruleConfig);
    textlint.setupRules(rules, ruleConfig);
    textlint.lintMarkdown("\n  # \u30B5\u30F3\u30D7\u30EB\n\n\u3053\u308C\u306F\u30B5\u30F3\u30D7\u30EB\u3067\u3059\u3002\n\n\u300C\u3067\u3042\u308B\u300D\u8ABF\u3068\u300C\u3067\u3059\u307E\u3059\u300D\u8ABF\u306E\u6DF7\u5728\u3092\u5224\u5B9A\u3059\u308B\u30EB\u30FC\u30EB\u3068\u306A\u3063\u3066\u3044\u308B\u3002\n\n[hogehoge](http://jquery.com) - \u30EA\u30F3\u30AF\u306EjQuery\u306F\u8A8D\u8B58\u3055\u308C\u306A\u3044\u305E\uFF01\n\n\u7D50\u679C\u3068\u3057\u3066\u300C\u3067\u3042\u308B\u300D\u8ABF\u3068\u300C\u3067\u3059\u307E\u3059\u300D\u8ABF\u306E\u4F7F\u308F\u308C\u308B\u6570\u3092\u3060\u3057\u305F\u3082\u306E\u3067\u3042\u308B\u3002\n\n\u6539\u884C\u3067\u3059\u3002\n\njquery\u3063\u3066\u3059\u3054\u3044\u3088\u306D\u3002\n\n\n\u3059\u3054\u3044\u9577\u3044\u6587\u7AE0\u3092\u8A18\u5165\u3057\u3066\u307F\u308B\u3053\u3068\u3063\u3066\u3001\u6848\u5916\u96E3\u3057\u3044\u3068\u601D\u3046\u306E\u3060\u3051\u308C\u3069\u3082\u3001\u3069\u3046\u3057\u305F\u3089\u3044\u3044\u3093\u3060\u308D\u3046\u306D\u3002\u3059\u3054\u3044\u9577\u3044\u6587\u7AE0\u3092\u8A18\u5165\u3057\u3066\u307F\u308B\u3053\u3068\u3063\u3066\u3001\u6848\u5916\u96E3\u3057\u3044\u3068\u601D\u3046\u306E\u3060\u3051\u308C\u3069\u3082\u3001\u3069\u3046\u3057\u305F\u3089\u3044\u3044\u3093\u3060\u308D\u3046\u306D\u3002\u3059\u3054\u3044\u9577\u3044\u6587\u7AE0\u3092\u8A18\u5165\u3057\u3066\u307F\u308B\u3053\u3068\u3063\u3066\u3001\u6848\u5916\u96E3\u3057\u3044\u3068\u601D\u3046\u306E\u3060\u3051\u308C\u3069\u3082\u3001\u3069\u3046\u3057\u305F\u3089\u3044\u3044\u3093\u3060\u308D\u3046\u306D\u3002\n\n ").then(function (results) {
        var errors = [];
        for (var i = 0; i < results.messages.length; i++) {
            console.log(results.messages[0].message); // => [{message:"lint message"}]
            errors.push(results.messages[i].line + " : " + results.messages[i].message);
        }
        document.getElementById("console").innerHTML = errors.join("<br>");
    });
}
//# sourceMappingURL=index.js.map