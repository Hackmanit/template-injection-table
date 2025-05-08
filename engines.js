var respError = "Error"
var respUnmodified = "Unmodified"
var respEmpty = "Empty"

enginesArr = [

    /* Begin Ruby */
    // Erb
    {
        engine: "ERB",
        language: "Ruby", version: "4.0.2", documentation: "https://docs.ruby-lang.org/en/master/ERB.html", package: "https://rubygems.org/gems/erb",
        err1: respError, err2: respError, err3: respUnmodified, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respUnmodified, nonerr2: "1@*#{1}", nonerr3: respUnmodified,
        nonerrRuby: "1#{2}{{a}}", nonerrDotnet: respUnmodified, nonerrJava: respUnmodified, nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: "//*<!--{##1{{!--{{1}}--}}-->*/#}", nonerrGolang: respUnmodified, nonerrElixir: "<%a%>", nonerrIdent1: respUnmodified, nonerrIdent2: "${\"\"}", nonerrIdent3: respUnmodified
    },
    // Erubi
    {
        engine: "Erubi",
        language: "Ruby", version: "1.12.0", documentation: "https://github.com/jeremyevans/erubi", package: "https://rubygems.org/gems/erubi",
        err1: respError, err2: respError, err3: respUnmodified, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respUnmodified, nonerr2: "1@*#{1}", nonerr3: respUnmodified,
        nonerrRuby: "1#{2}{{a}}", nonerrDotnet: respUnmodified, nonerrJava: respUnmodified, nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: "//*<!--{##1{{!--{{1}}--}}-->*/#}", nonerrGolang: respUnmodified, nonerrElixir: "<%a%>", nonerrIdent1: respUnmodified, nonerrIdent2: "${\"\"}", nonerrIdent3: respUnmodified
    },
    // Erubis
    {
        engine: "Erubis",
        language: "Ruby", version: "2.7.0", documentation: "https://www.rubydoc.info/gems/erubis/", package: "https://rubygems.org/gems/erubis",
        err1: respError, err2: respError, err3: respUnmodified, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respUnmodified, nonerr2: "1@*#{1}", nonerr3: respUnmodified,
        nonerrRuby: "1#{2}{{a}}", nonerrDotnet: respUnmodified, nonerrJava: respUnmodified, nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: "//*<!--{##1{{!--{{1}}--}}-->*/#}", nonerrGolang: respUnmodified, nonerrElixir: "<%a%>", nonerrIdent1: respUnmodified, nonerrIdent2: "${\"\"}", nonerrIdent3: respUnmodified
    },
    // Haml
    {
        engine: "Haml",
        language: "Ruby", version: "6.1.1", documentation: "https://haml.info/docs/yardoc/", package: "https://rubygems.org/gems/haml",
        err1: respError, err2: respError, err3: respUnmodified, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respUnmodified, nonerr2: "<%=1%>@*1", nonerr3: respUnmodified,
        nonerrRuby: "<%=1%>2{{a}}", nonerrDotnet: respUnmodified, nonerrJava: respUnmodified, nonerrPHP: respUnmodified, nonerrPython: respError, nonerrJavascript: "<!-- /*<!--{##<%=1%>{{!--{{1}}--}}-->*/#} -->", nonerrGolang: respUnmodified, nonerrElixir: respUnmodified, nonerrIdent1: respUnmodified, nonerrIdent2: respUnmodified, nonerrIdent3: respError
    },
    // Liquid
    {
        engine: "Liquid",
        language: "Ruby", version: "5.4.0", documentation: "https://www.rubydoc.info/gems/liquid/", package: "https://rubygems.org/gems/liquid",
        err1: respError, err2: "<%'$%>", err3: "$%\\", err4: "<#set($x<%=%>)", err5: "<%=%>", errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respEmpty, errPython: "$", errJavascript: "<%$", errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: "{##}/**/",
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "{#$1#}}", nonerrJavascript: "//*<!--{##<%=1%>--}}-->*/#}", nonerrGolang: respEmpty, nonerrElixir: respUnmodified, nonerrIdent1: respEmpty, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Slim
    {
        engine: "Slim",
        language: "Ruby", version: "5.1.1", documentation: "https://github.com/slim-template/slim/", package: "https://rubygems.org/gems/slim",
        err1: respError, err2: respError, err3: respUnmodified, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respUnmodified, nonerr2: "<%=1%>@*1", nonerr3: respUnmodified,
        nonerrRuby: "<%=1%>2{{a}}", nonerrDotnet: respUnmodified, nonerrJava: respUnmodified, nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: respUnmodified, nonerrGolang: respUnmodified, nonerrElixir: respUnmodified, nonerrIdent1: respUnmodified, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Mustache
    {
        engine: "Mustache",
        language: "Ruby", version: "1.1.1", documentation: "http://mustache.github.io/mustache.5.html", package: "https://rubygems.org/gems/mustache",
        err1: respError, err2: respError, err3: respUnmodified, err4: "<#set($x<%=%>)", err5: "<%=%>", errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$]]", nonerr2: respUnmodified, nonerr3: "{##}/*#&lt;Mustache:0x00007f2c270be028&gt;*/",
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "@*", nonerrJava: respUnmodified, nonerrPHP: "}", nonerrPython: "{#$#}}", nonerrJavascript: "//*<!--{##<%=1%>--}}-->*/#}", nonerrGolang: "#&lt;Mustache:0x00007faf56a39708&gt;", nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    /* End Ruby */

    /* Begin Golang */
    // html/template
    {
        engine: "html/template",
        language: "Golang", version: "1.20.5", documentation: "https://pkg.go.dev/html/template", package: "https://pkg.go.dev/html/template",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respError,
        errRuby: respError, errDotnet: respError, errJava: "&lt;%'#{@}", errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: "&lt;%",
        nonerr1: "p \">[[$1]]", nonerr2: "&lt;%=1%>@*#{1}", nonerr3: "{##}/*ARBITRARY*/",
        nonerrRuby: respError, nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "{#$1#}}", nonerrJavascript: respError, nonerrGolang: "ARBITRARY", nonerrElixir: "&lt;%%a%>", nonerrIdent1: respError, nonerrIdent2: "${\"&lt;%-1-%>\"}", nonerrIdent3: respUnmodified
    },
    // text/template
    {
        engine: "text/template",
        language: "Golang", version: "1.20.5", documentation: "https://pkg.go.dev/html/template", package: "https://pkg.go.dev/html/template",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: "{##}/*ARBITRARY*/",
        nonerrRuby: respError, nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "{#$1#}}", nonerrJavascript: respError, nonerrGolang: "ARBITRARY", nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    /* End Golang */

    /* Begin Dotnet */
    // RazorEngine.NetCore
    {
        engine: "RazorEngine.NetCore",
        language: "Dotnet", version: "3.1.0", documentation: "https://antaris.github.io/RazorEngine/", package: "https://www.nuget.org/packages/RazorEngine.NetCore",
        err1: respError, err2: respError, err3: respUnmodified, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respUnmodified, errDotnet: respError, errJava: respError, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respUnmodified, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respUnmodified, nonerr2: "<%=1%>", nonerr3: respUnmodified,
        nonerrRuby: respUnmodified, nonerrDotnet: "{{1}}", nonerrJava: respUnmodified, nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: respUnmodified, nonerrGolang: respUnmodified, nonerrElixir: respUnmodified, nonerrIdent1: respUnmodified, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // DotLiquid
    {
        engine: "DotLiquid",
        language: "Dotnet", version: "2.2.692", documentation: "https://github.com/dotliquid/dotliquid", package: "https://www.nuget.org/packages/DotLiquid/",
        err1: respError, err2: "<%'$%>", err3: respError, err4: "<#set($x<%=%>)", err5: "<%=%>", errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respEmpty, errPython: "$", errJavascript: "<%$", errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: "{##}/**/",
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "{#$1#}}", nonerrJavascript: "//*<!--{##<%=1%>-}}-->*/#}", nonerrGolang: respEmpty, nonerrElixir: respUnmodified, nonerrIdent1: respEmpty, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Scriban
    {
        engine: "Scriban",
        language: "Dotnet", version: "5.7.0", documentation: "https://github.com/scriban/scriban/tree/master/doc", package: "https://www.nuget.org/packages/Scriban",
        err1: respError, err2: "<%'$%>", err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: "<%", errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: "<%$", errGolang: respEmpty, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "{#$1#}}", nonerrJavascript: respError, nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Scriban Liquid
    {
        engine: "Scriban (Liquid mode)",
        language: "Dotnet", version: "5.7.0", documentation: "https://github.com/scriban/scriban/tree/master/doc", package: "https://www.nuget.org/packages/Scriban",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respEmpty, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "{#$1#}}", nonerrJavascript: respError, nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Fluid
    {
        engine: "Fluid",
        language: "Dotnet", version: "2.4.0", documentation: "https://github.com/sebastienros/fluid", package: "https://www.nuget.org/packages/Fluid.Core",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "{#$1#}}", nonerrJavascript: respError, nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: respEmpty, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    /* End Dotnet

    /* Begin Elixir */
    // EEx
    {
        engine: "EEx",
        language: "Elixir", version: "1.14.5", documentation: "https://hexdocs.pm/eex/1.14.5/EEx.html", package: "",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respError, errGolang: respUnmodified, errElixir: respError,
        nonerr1: respUnmodified, nonerr2: "1@*#{1}", nonerr3: respUnmodified,
        nonerrRuby: "1#{2}{{a}}", nonerrDotnet: respUnmodified, nonerrJava: respUnmodified, nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: "//*<!--{##1{{!--{{1}}--}}-->*/#}", nonerrGolang: respUnmodified, nonerrElixir: "<%a%>", nonerrIdent1: respUnmodified, nonerrIdent2: respError, nonerrIdent3: respUnmodified
    },
    /* End Elixir */

    /* Begin Java */
    // Groovy
    {
        engine: "Groovy",
        language: "Java", version: "4.0.12", documentation: "https://groovy-lang.org/templating.html", package: "https://mvnrepository.com/artifact/org.apache.groovy/groovy-all",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respError,
        errRuby: respError, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: respError,
        nonerr1: "p \">[[1]]", nonerr2: "1@*#{1}", nonerr3: respUnmodified,
        nonerrRuby: "1#{2}{{a}}", nonerrDotnet: respUnmodified, nonerrJava: "a\">##[[1]]", nonerrPHP: respUnmodified, nonerrPython: "{#1#}}", nonerrJavascript: "//*<!--{##1{{!--{{1}}--}}-->*/#}", nonerrGolang: respUnmodified, nonerrElixir: respError, nonerrIdent1: respUnmodified, nonerrIdent2: "<%-1-%>", nonerrIdent3: respUnmodified
    },
    // Freemarker
    {
        engine: "Freemarker",
        language: "Java", version: "2.3.32", documentation: "https://freemarker.apache.org/docs/index.html", package: "https://mvnrepository.com/artifact/org.freemarker/freemarker",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respError,
        errRuby: respError, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respError, nonerr2: "<%=1%>@*1", nonerr3: respUnmodified,
        nonerrRuby: "<%=1%>2{{a}}", nonerrDotnet: respUnmodified, nonerrJava: "a\">##[[1]]", nonerrPHP: respUnmodified, nonerrPython: respError, nonerrJavascript: respUnmodified, nonerrGolang: respUnmodified, nonerrElixir: respUnmodified, nonerrIdent1: respUnmodified, nonerrIdent2: "<%-1-%>", nonerrIdent3: respUnmodified
    },
    // Velocity
    {
        engine: "Velocity",
        language: "Java", version: "2.3", documentation: "https://velocity.apache.org/engine/2.3/getting-started.html", package: "https://mvnrepository.com/artifact/org.apache.velocity/velocity-engine-core",
        err1: respError, err2: respError, err3: respUnmodified, err4: respError, err5: respUnmodified, errJava2: respError,
        errRuby: respUnmodified, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respUnmodified, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respUnmodified, nonerr2: respUnmodified, nonerr3: "{ with everything in same line afterwards removed and next line appended",
        nonerrRuby: respUnmodified, nonerrDotnet: respUnmodified, nonerrJava: "a\"> with everything in same line afterwards removed and next line appended", nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: "//*<!--{ with everything in same line afterwards removed and next line appended", nonerrGolang: respUnmodified, nonerrElixir: respUnmodified, nonerrIdent1: respUnmodified, nonerrIdent2: respUnmodified, nonerrIdent3: "a"
    },
    // Thymeleaf
    {
        engine: "Thymeleaf",
        language: "Java", version: "3.1.1.RELEASE", documentation: "https://www.thymeleaf.org/documentation.html", package: "https://mvnrepository.com/artifact/org.thymeleaf/thymeleaf",
        err1: respError, err2: respError, err3: respError, err4: respUnmodified, err5: respUnmodified, errJava2: respError,
        errRuby: respUnmodified, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respUnmodified, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: "p \">1", nonerr2: respUnmodified, nonerr3: respUnmodified,
        nonerrRuby: respUnmodified, nonerrDotnet: respUnmodified, nonerrJava: "a\">##1", nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: respUnmodified, nonerrGolang: respUnmodified, nonerrElixir: respUnmodified, nonerrIdent1: respUnmodified, nonerrIdent2: respUnmodified, nonerrIdent3: respError
    },
    // Thymeleaf Inline
    {
        engine: "Thymeleaf (Inline)",
        language: "Java", version: "3.1.1.RELEASE", documentation: "https://www.thymeleaf.org/documentation.html", package: "https://mvnrepository.com/artifact/org.thymeleaf/thymeleaf",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respError,
        errRuby: respError, errDotnet: respError, errJava: respError, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respError,
        nonerr1: "<a>p", nonerr2: respError, nonerr3: respError,
        nonerrRuby: respError, nonerrDotnet: respError, nonerrJava: "<a>a", nonerrPHP: respError, nonerrPython: respError, nonerrJavascript: respError, nonerrGolang: respError, nonerrElixir: respError, nonerrIdent1: respError, nonerrIdent2: respError, nonerrIdent3: respUnmodified
    },
    /* End Java */

    /* Begin PHP */
    // Blade
    {
        engine: "Blade",
        language: "PHP", version: "v10.10.1", documentation: "https://laravel.com/docs/master/blade", package: "https://packagist.org/packages/laravel/framework",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respUnmodified, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: respError, nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "{#$1#}}", nonerrJavascript: respError, nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Twig
    {
        engine: "Twig",
        language: "PHP", version: "3.6.1", documentation: "https://twig.symfony.com/doc/3.x/", package: "https://packagist.org/packages/twig/twig",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "}", nonerrJavascript: "//*<!--", nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: "1", nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Twig Sandbox
    {
        engine: "Twig (Sandbox)",
        language: "PHP", version: "3.6.1", documentation: "https://twig.symfony.com/doc/3.x/", package: "https://packagist.org/packages/twig/twig",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: respError, nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "}", nonerrJavascript: "//*<!--", nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Mustache PHP
    {
        engine: "Mustache.php",
        language: "PHP", version: "2.14.2", documentation: "https://github.com/bobthecow/mustache.php", package: "https://packagist.org/packages/mustache/mustache",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$]]", nonerr2: respUnmodified, nonerr3: "{##}/**/",
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "@*", nonerrJava: respUnmodified, nonerrPHP: "}", nonerrPython: "{#$#}}", nonerrJavascript: "//*<!--{##<%=1%>--}}-->*/#}", nonerrGolang: respEmpty, nonerrElixir: respUnmodified, nonerrIdent1: respEmpty, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Smarty
    {
        engine: "Smarty",
        language: "PHP", version: "4.3.1", documentation: "https://smarty-php.github.io/smarty/5.x/", package: "https://packagist.org/packages/smarty/smarty",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respError,
        errRuby: respError, errDotnet: respError, errJava: respError, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: "<%=1%>@*#1", nonerr3: respError,
        nonerrRuby: respError, nonerrDotnet: "1@*", nonerrJava: "a\">##[[$1]]", nonerrPHP: "7}", nonerrPython: respError, nonerrJavascript: respError, nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: "$<%-1-%>", nonerrIdent3: respUnmodified
    },
    // Smarty Security
    {
        engine: "Smarty (Security)",
        language: "PHP", version: "4.3.1", documentation: "https://smarty-php.github.io/smarty/5.x/", package: "https://packagist.org/packages/smarty/smarty",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respError,
        errRuby: respError, errDotnet: respError, errJava: respError, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: "<%=1%>@*#1", nonerr3: respError,
        nonerrRuby: respError, nonerrDotnet: "1@*", nonerrJava: "a\">##[[$1]]", nonerrPHP: "7}", nonerrPython: respError, nonerrJavascript: respError, nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: "$<%-1-%>", nonerrIdent3: respUnmodified
    },
    // Latte
    {
        engine: "Latte",
        language: "PHP", version: "3.0.6", documentation: "https://latte.nette.org/en/guide", package: "https://packagist.org/packages/latte/latte",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respError,
        errRuby: respError, errDotnet: respError, errJava: respError, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[${1}]]", nonerr2: "<%=1%>@*#1", nonerr3: respError,
        nonerrRuby: respError, nonerrDotnet: "{1}@*", nonerrJava: "a\">##[[$1]]", nonerrPHP: "{7}}", nonerrPython: respError, nonerrJavascript: respError, nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: "{1}", nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Latte Sandbox
    {
        engine: "Latte (Sandbox)",
        language: "PHP", version: "3.0.6", documentation: "https://latte.nette.org/en/guide", package: "https://packagist.org/packages/latte/latte",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respError,
        errRuby: respError, errDotnet: respError, errJava: respError, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[${1}]]", nonerr2: "<%=1%>@*#1", nonerr3: respError,
        nonerrRuby: respError, nonerrDotnet: "{1}@*", nonerrJava: "a\">##[[$1]]", nonerrPHP: "{7}}", nonerrPython: respError, nonerrJavascript: respError, nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: "{1}", nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    /* End PHP */

    /* Begin Python */
    // Jinja2
    {
        engine: "Jinja2",
        language: "Python", version: "3.1.2", documentation: "https://jinja.palletsprojects.com/en/3.1.x/", package: "https://pypi.org/project/Jinja2/",
        downloads: "2.300.001.337", dependents: "13370",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "}", nonerrJavascript: "//*<!--", nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: "True", nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Jinja2 Sandbox
    {
        engine: "Jinja2 (Sandbox)",
        language: "Python", version: "3.1.2", documentation: "https://jinja.palletsprojects.com/en/3.1.x/", package: "https://pypi.org/project/Jinja2/",
        downloads: "2.300.001.337", dependents: "13370",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "}", nonerrJavascript: "//*<!--", nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: "True", nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Tornado
    {
        engine: "Tornado",
        language: "Python", version: "6.3.2", documentation: "https://www.tornadoweb.org/en/stable/template.html", package: "https://pypi.org/project/tornado/",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: respError, nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "}", nonerrJavascript: "//*<!--", nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: "True", nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Mako
    {
        engine: "Mako",
        language: "Python", version: "1.2.4", documentation: "https://docs.makotemplates.org/en/latest/", package: "https://pypi.org/project/Mako/",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respError,
        errRuby: respError, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: respError,
        nonerr1: "p \">[[{1}]]", nonerr2: respError, nonerr3: respUnmodified,
        nonerrRuby: respError, nonerrDotnet: respUnmodified, nonerrJava: "a\">##[[1]]", nonerrPHP: respUnmodified, nonerrPython: "{#{1}#}}", nonerrJavascript: respError, nonerrGolang: respUnmodified, nonerrElixir: respError, nonerrIdent1: respUnmodified, nonerrIdent2: "<%-1-%>", nonerrIdent3: respUnmodified
    },
    // Django
    {
        engine: "Django",
        language: "Python", version: "4.2.3", documentation: "https://docs.djangoproject.com/en/4.2/topics/templates/", package: "https://pypi.org/project/Django/",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respUnmodified, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respError, nonerr2: respUnmodified, nonerr3: "/**/",
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: respError, nonerrJava: respUnmodified, nonerrPHP: respError, nonerrPython: "}", nonerrJavascript: "//*<!--", nonerrGolang: respEmpty, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // SimpleTemplateEngine
    {
        engine: "SimpleTemplateEngine",
        language: "Python", version: "0.12.25", documentation: "https://bottlepy.org/docs/dev/stpl.html", package: "https://pypi.org/project/bottle/",
        err1: respError, err2: respError, err3: respUnmodified, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respUnmodified, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: respError, nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "{#$1#}}", nonerrJavascript: respError, nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: "True", nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Pystache
    {
        engine: "Pystache",
        language: "Python", version: "0.6.0", documentation: "https://github.com/sarnold/pystache", package: "https://pypi.org/project/pystache/",
        err1: respError, err2: "%>", err3: "$%\\", err4: "<#set($x<%=%>)", err5: "<%=%>", errJava2: respUnmodified,
        errRuby: respUnmodified, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respEmpty, errPython: respError, errJavascript: "empty string with everything preceding removed", errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: "p \">[[$]]", nonerr2: respUnmodified, nonerr3: "{##}/**/",
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "@*", nonerrJava: respUnmodified, nonerrPHP: "}", nonerrPython: "{#$#}}", nonerrJavascript: "//*<!--{##<%=1%>--}}-->*/#}", nonerrGolang: respEmpty, nonerrElixir: respUnmodified, nonerrIdent1: respEmpty, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Cheetah3
    {
        engine: "Cheetah3",
        language: "Python", version: "3.2.6.post1", documentation: "https://cheetahtemplate.org/users_guide/index.html", package: "https://pypi.org/project/Cheetah3/",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respError,
        errRuby: respError, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: respError,
        nonerr1: "p \">[[{1}]]", nonerr2: "1@*#{1}", nonerr3: "{ (everything following in same line removed)",
        nonerrRuby: "1#{2}{{a}}", nonerrDotnet: respUnmodified, nonerrJava: "a\"> (everything following in same line removed)", nonerrPHP: respUnmodified, nonerrPython: "{#{1}#}}", nonerrJavascript: "//*<!--{ Rest der Zeile entfernt", nonerrGolang: respUnmodified, nonerrElixir: respError, nonerrIdent1: respUnmodified, nonerrIdent2: "<%-1-%>", nonerrIdent3: respUnmodified
    },
    // Chameleon
    {
        engine: "Chameleon",
        language: "Python", version: "4.0.1", documentation: "https://chameleon.readthedocs.io/en/latest/", package: "https://pypi.org/project/Chameleon/",
        err1: respError, err2: respError, err3: respUnmodified, err4: respError, err5: respError, errJava2: respError,
        errRuby: respUnmodified, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respUnmodified, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: "p \">[[{1}]]", nonerr2: respUnmodified, nonerr3: respUnmodified,
        nonerrRuby: respUnmodified, nonerrDotnet: respUnmodified, nonerrJava: "a\">##[[1]]", nonerrPHP: respUnmodified, nonerrPython: "{#{1}#}}", nonerrJavascript: respError, nonerrGolang: respUnmodified, nonerrElixir: respUnmodified, nonerrIdent1: respUnmodified, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    /* End Python */

    /* Begin Javascript */
    // Handlebars
    {
        engine: "Handlebars",
        language: "Javascript", version: "4.7.7", documentation: "https://handlebarsjs.com/guide/", package: "https://www.npmjs.com/package/handlebars",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$]]", nonerr2: respUnmodified, nonerr3: "{##}/**/",
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "@*", nonerrJava: respUnmodified, nonerrPHP: respError, nonerrPython: "{#$#}}", nonerrJavascript: "//*<!--{##<%=1%>-->*/#}", nonerrGolang: respEmpty, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Handlebars (Context)
    {
        engine: "Handlebars (Context)",
        language: "Javascript", version: "4.7.7", documentation: "https://handlebarsjs.com/guide/", package: "https://www.npmjs.com/package/handlebars",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$]]", nonerr2: respUnmodified, nonerr3: "{##}/*[object Object]*/",
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "@*", nonerrJava: respUnmodified, nonerrPHP: respError, nonerrPython: "{#$#}}", nonerrJavascript: "//*<!--{##<%=1%>-->*/#}", nonerrGolang: "[object Object]", nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // EJS
    {
        engine: "EJS",
        language: "Javascript", version: "3.1.9", documentation: "https://ejs.co/#docs", package: "https://www.npmjs.com/package/ejs",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respError, errGolang: respUnmodified, errElixir: respError,
        nonerr1: respUnmodified, nonerr2: "1@*#{1}", nonerr3: respUnmodified,
        nonerrRuby: "1#{2}{{a}}", nonerrDotnet: respUnmodified, nonerrJava: respUnmodified, nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: "//*<!--{##1{{!--{{1}}--}}-->*/#}", nonerrGolang: respUnmodified, nonerrElixir: "<%a%>", nonerrIdent1: respUnmodified, nonerrIdent2: "${\"1\"}", nonerrIdent3: respUnmodified
    },
    // Underscore
    {
        engine: "Underscore",
        language: "Javascript", version: "1.13.6", documentation: "https://underscorejs.org/", package: "https://www.npmjs.com/package/underscore",
        err1: respError, err2: respError, err3: respUnmodified, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respUnmodified, nonerr2: "1@*#{1}", nonerr3: respUnmodified,
        nonerrRuby: "1#{2}{{a}}", nonerrDotnet: respUnmodified, nonerrJava: respUnmodified, nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: "//*<!--{##1{{!--{{1}}--}}-->*/#}", nonerrGolang: respUnmodified, nonerrElixir: respError, nonerrIdent1: respUnmodified, nonerrIdent2: respError, nonerrIdent3: respUnmodified
    },
    // VueJS
    {
        engine: "VueJS",
        language: "Javascript", version: "3.2.36", documentation: "https://vuejs.org/guide/essentials/template-syntax.html", package: "https://www.npmjs.com/package/vue",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respError,
        errRuby: respUnmodified, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: "p &quot;&gt;[[$1]]", nonerr2: "&lt;%=1%&gt;@*#{1}", nonerr3: respError,
        nonerrRuby: "&lt;%=1%&gt;#{2}", nonerrDotnet: "1@*", nonerrJava: "a&quot;&gt;##[[${1}]]", nonerrPHP: "7}", nonerrPython: "{#$1#}}", nonerrJavascript: "<!--[-->//*<!--{##<%=1%>{{!--{{1}}--}}-->*/#}<!--]-->", nonerrGolang: respError, nonerrElixir: "&lt;%%a%&gt;", nonerrIdent1: respError, nonerrIdent2: "${&quot;&lt;%-1-%&gt;&quot;}", nonerrIdent3: respUnmodified
    },
    // MustacheJS
    {
        engine: "MustacheJS",
        language: "Javascript", version: "4.2.0", documentation: "https://mustache.github.io/mustache.5.html", package: "https://www.npmjs.com/package/mustache",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: respError, nonerr2: respUnmodified, nonerr3: "{##}/**/",
        nonerrRuby: respError, nonerrDotnet: respError, nonerrJava: respUnmodified, nonerrPHP: respError, nonerrPython: respError, nonerrJavascript: "//*<!--{##<%=1%>--}}-->*/#}", nonerrGolang: respEmpty, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Pug
    {
        engine: "Pug",
        language: "Javascript", version: "3.0.2", documentation: "https://pugjs.org/api/getting-started.html", package: "https://www.npmjs.com/package/pug",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respError, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respError,
        nonerr1: "<p>\">[[${{1}}]]</p>", nonerr2: "<%=1%>@*1", nonerr3: respError,
        nonerrRuby: "<%=1%>2{{a}}", nonerrDotnet: respError, nonerrJava: respError, nonerrPHP: respError, nonerrPython: respError, nonerrJavascript: "<!--*<!--{##<%=1%>{{!--{{1}}--}}-->*/#}-->", nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respError, nonerrIdent3: "<div id=\"evaluate\" a=\"a\"></div>"
    },
    // Pug (Inline)
    {
        engine: "Pug (Inline)",
        language: "Javascript", version: "3.0.2", documentation: "https://pugjs.org/api/getting-started.html", package: "https://www.npmjs.com/package/pug",
        err1: respError, err2: respError, err3: respUnmodified, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respUnmodified, nonerr2: "<%=1%>@*1", nonerr3: respUnmodified,
        nonerrRuby: "<%=1%>2{{a}}", nonerrDotnet: respUnmodified, nonerrJava: respError, nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: respUnmodified, nonerrGolang: respUnmodified, nonerrElixir: respUnmodified, nonerrIdent1: respUnmodified, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // AngularJS
    {
        engine: "AngularJS",
        language: "Javascript", version: "1.8.3", documentation: "https://docs.angularjs.org/guide/templates", package: "https://www.npmjs.com/package/angular",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: "<th:t=\\\"${xu}#foreach.< p=\"\"></th:t=\\\"${xu}#foreach.<>",
        errRuby: "&lt;%{{#{%&gt;}", errDotnet: respUnmodified, errJava: "&lt;%'#{@}", errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: "&lt;%",
        nonerr1: "class=\"ng-binding\">p \"&gt;[[$1]]", nonerr2: "&lt;%=1%&gt;@*#{1}", nonerr3: respError,
        nonerrRuby: "class=\"ng-binding\">&lt;%=1%&gt;#{2}", nonerrDotnet: "1@*", nonerrJava: "a\"&gt;##[[${1}]]", nonerrPHP: "7}", nonerrPython: "{#$1#}}", nonerrJavascript: respUnmodified, nonerrGolang: respUnmodified, nonerrElixir: "&lt;%%a%&gt;", nonerrIdent1: respError, nonerrIdent2: "${\"&lt;%-1-%&gt;\"}", nonerrIdent3: respUnmodified
    },
    // HoganJS
    {
        engine: "HoganJS",
        language: "Javascript", version: "3.0.2", documentation: "http://twitter.github.io/hogan.js/", package: "https://www.npmjs.com/package/hogan.js",
        err1: respError, err2: respError, err3: respError, err4: "<#set($x<%= with almost everything before appended until (inclusive) <#set($x<%={{={@{#{${xux}}%>)", err5: "<%= with almost everything before appended until (inclusive) <%={{={@{#{${xu}}%>", errJava2: respUnmodified,
        errRuby: "<%{%>}", errDotnet: "@", errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: "empty* (might remove subsequent character)", errElixir: respUnmodified,
        nonerr1: "p \">[[$]]", nonerr2: respUnmodified, nonerr3: "{##}/**/",
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "@*", nonerrJava: respUnmodified, nonerrPHP: "}", nonerrPython: "{#$#}}", nonerrJavascript: "//*<!--{##<%=1%>--}}-->*/#}", nonerrGolang: respEmpty, nonerrElixir: respUnmodified, nonerrIdent1: respEmpty, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Nunjucks
    {
        engine: "Nunjucks",
        language: "Javascript", version: "3.2.3", documentation: "https://mozilla.github.io/nunjucks/templating.html", package: "https://www.npmjs.com/package/nunjucks",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "}", nonerrJavascript: "//*<!--", nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: respEmpty, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // Dot
    {
        engine: "Dot",
        language: "Javascript", version: "1.1.3", documentation: "https://github.com/olado/doT", package: "https://www.npmjs.com/package/dot",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respUnmodified, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respError, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respError, nonerr2: respUnmodified, nonerr3: "{##}",
        nonerrRuby: respError, nonerrDotnet: respError, nonerrJava: respUnmodified, nonerrPHP: respError, nonerrPython: respError, nonerrJavascript: "/#}", nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    // VelocityJS
    {
        engine: "VelocityJS",
        language: "Javascript", version: "2.0.6", documentation: "https://github.com/shepherdwind/velocity.js", package: "https://www.npmjs.com/package/velocityjs",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respUnmodified, errJava2: respError,
        errRuby: respUnmodified, errDotnet: respUnmodified, errJava: respUnmodified, errPHP: respUnmodified, errPython: respError, errJavascript: respError, errGolang: respUnmodified, errElixir: respUnmodified,
        nonerr1: respError, nonerr2: respUnmodified, nonerr3: "{ with everything in same line afterwards removed and next line appended",
        nonerrRuby: respUnmodified, nonerrDotnet: respUnmodified, nonerrJava: "a\"> with everything in same line afterwards removed and next line appended", nonerrPHP: respUnmodified, nonerrPython: respError, nonerrJavascript: "//*<!--{ with everything in same line afterwards removed and next line appended", nonerrGolang: respUnmodified, nonerrElixir: respUnmodified, nonerrIdent1: respUnmodified, nonerrIdent2: respError, nonerrIdent3: respEmpty
    },
    // Eta
    {
        engine: "Eta",
        language: "Javascript", version: "2.0.1", documentation: "https://eta.js.org/docs/intro/template-syntax", package: "https://www.npmjs.com/package/eta",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respUnmodified, errJava: respError, errPHP: respUnmodified, errPython: respUnmodified, errJavascript: respError, errGolang: respUnmodified, errElixir: respError,
        nonerr1: respUnmodified, nonerr2: "1@*#{1}", nonerr3: respUnmodified,
        nonerrRuby: "1#{2}{{a}}", nonerrDotnet: respUnmodified, nonerrJava: respUnmodified, nonerrPHP: respUnmodified, nonerrPython: respUnmodified, nonerrJavascript: "//*<!--{##1{{!--{{1}}--}}-->*/#}", nonerrGolang: respUnmodified, nonerrElixir: respError, nonerrIdent1: respUnmodified, nonerrIdent2: "${\"\"}", nonerrIdent3: respUnmodified
    },
    //TwigJS
    {
        engine: "TwigJS",
        language: "Javascript", version: "1.16.0", documentation: "https://github.com/twigjs/twig.js/wiki", package: "https://www.npmjs.com/package/twig",
        err1: respError, err2: respError, err3: respError, err4: respError, err5: respError, errJava2: respUnmodified,
        errRuby: respError, errDotnet: respError, errJava: respUnmodified, errPHP: "NaN", errPython: respError, errJavascript: respError, errGolang: respError, errElixir: respUnmodified,
        nonerr1: "p \">[[$1]]", nonerr2: respUnmodified, nonerr3: respError,
        nonerrRuby: "<%=1%>#{2}", nonerrDotnet: "1@*", nonerrJava: respUnmodified, nonerrPHP: "7}", nonerrPython: "}", nonerrJavascript: "//*<!--", nonerrGolang: respError, nonerrElixir: respUnmodified, nonerrIdent1: respError, nonerrIdent2: respUnmodified, nonerrIdent3: respUnmodified
    },
    /* End Javascript */
];

// HTML Escape, so it is correctly rendered in the table
for (engine in enginesArr) {
    for (const [key, value] of Object.entries(enginesArr[engine])) {
        enginesArr[engine][key] = escapeHTML(value);
    }
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag]));
}

function unescapeHTML(str) {
    return str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,
        tag => ({
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&#39;': "'",
            '&quot;': '"'
        }[tag]));
}