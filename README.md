[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)

# Template Injection Table
The Template Injection Table is intended to help during the testing of an application for [template injection](#background-information) vulnerabilities. It was developed by [Hackmanit](https://hackmanit.de) and [Maximilian Hildebrand](https://www.github.com/m10x).

The table consists of so-called "polyglots" that can be used to detect template injection possibilities and identify which template engine is used by an application.

- [How to Use the Template Injection Table?](#how-to-use-the-template-injection-table)
- [How to Use This Repository](#how-to-use-this-repository)
- [Background Information](#background-information)
- [License](#license)


## How to Use the Template Injection Table?

If you're not familiar with template injection or the template injection methodology, take a look at our blog post about template injection: [Soon to be released](https://www.hackmanit.de/en/blog-en/)

To make the detection of template injection possibilities and identification of template engines as efficient as possible, we have created polyglots based on the 44 most relevant template engines (as of September 2023). This table presents these and other polyglots along with the responses from the 44 template engines to these polyglots.

The table can be used in the following manner:
1. **Detection:**
First, use the first universal error-based polyglot `<%'${{/#{@}}%>{{`. This will cause all tested template engines to throw an error. However, if the web application catches these errors and there is no change in behavior, then the error-based polyglots do not provide any information. In this case, the three universal non-error-based polyglots can be used as long as the user input is reflected. Together they ensure that the user input is rendered at least once in each of the template engines tested. If the input length is very limited and the universal polyglots are too long, the language-specific polyglots can be used instead.

3. **Identification:**
To verify template injection and identify the template engine used by the application, use the remaining polyglots and filter for the response returned until only one template engine remains. As long as the user input is reflected, the non-error-based polyglots are usually more effective at weeding out the remaining template engines.

## How to Use This Repository
Simply access https://cheatsheet.hackmanit.de/template-injection-table to use the table as described in [How to Use the Template Injection Table?](#how-to-use-the-template-injection-table).
There is no need to download this repository unless you want to use or modify the table locally.

## Background Information
A blog post providing more information about template injection and [TInjA – the Template INJection Analyzer](https://github.com/Hackmanit/TInjA) can be found here:

[Soon to be released](https://www.hackmanit.de/en/blog-en/)

The Template Injection Table was developed as a part of a master's thesis by Maximilian Hildebrand.
You can find results of the master's thesis publicly available here:
- [Template Injection Table](https://github.com/Hackmanit/template-injection-table)
- [Template Injection Playground](https://github.com/Hackmanit/template-injection-playground)
- [TInjA – the Template INJection Analyzer](https://github.com/Hackmanit/TInjA)
- [Master's Thesis (PDF)](https://www.hackmanit.de/images/download/thesis/Improving-the-Detection-and-Identification-of-Template-Engines-for-Large-Scale-Template-Injection-Scanning-Maximilian-Hildebrand-Master-Thesis-Hackmanit.pdf)

## License
The Template Injection Table was developed by [Hackmanit](https://hackmanit.de) and [Maximilian Hildebrand](https://www.github.com/m10x) as a part of his master's thesis. The Template Injection Table is licensed under the [Apache License, Version 2.0](license.txt).

<a href="https://hackmanit.de"><img src="https://www.hackmanit.de/templates/hackmanit-v2/img/wbm_hackmanit.png" width="30%"></a>
