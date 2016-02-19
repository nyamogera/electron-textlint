window.addEventListener("load", init);
function init() {
    var textlint = require("textlint").textlint;
    textlint.setupRules({
        "dearu-desumasu": require("textlint-rule-no-mix-dearu-desumasu")
    });
    textlint.lintMarkdown("\n  # \u30B5\u30F3\u30D7\u30EB\n\n\u3053\u308C\u306F\u30B5\u30F3\u30D7\u30EB\u3067\u3059\u3002\n\n\u300C\u3067\u3042\u308B\u300D\u8ABF\u3068\u300C\u3067\u3059\u307E\u3059\u300D\u8ABF\u306E\u6DF7\u5728\u3092\u5224\u5B9A\u3059\u308B\u30EB\u30FC\u30EB\u3068\u306A\u3063\u3066\u3044\u308B\u3002\n\n\u7D50\u679C\u3068\u3057\u3066\u300C\u3067\u3042\u308B\u300D\u8ABF\u3068\u300C\u3067\u3059\u307E\u3059\u300D\u8ABF\u306E\u4F7F\u308F\u308C\u308B\u6570\u3092\u3060\u3057\u305F\u3082\u306E\u3067\u3042\u308B\u3002\n ").then(function (results) {
        console.log(results.messages[0].message); // => [{message:"lint message"}]
        document.getElementById("console").innerHTML = results.messages[0].line + " : " + results.messages[0].message;
    });
}
//# sourceMappingURL=index.js.map