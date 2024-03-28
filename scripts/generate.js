"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var generatePage = function (pageName, categoryName, subcategory) {
    var pageDir;
    if (subcategory) {
        pageDir = "./app/docs/".concat(categoryName, "/").concat(subcategory, "/").concat(pageName);
    }
    else {
        pageDir = "./app/docs/".concat(categoryName, "/").concat(pageName);
    }
    var pagePath = "".concat(pageDir, "/").concat(pageName, ".mdx");
    var pageComponentPath = "".concat(pageDir, "/page.tsx");
    // Check if the page already exists
    if (fs.existsSync(pagePath)) {
        console.error("Error: Page with name '".concat(pageName, "' already exists in category '").concat(categoryName, "'"));
        return;
    }
    // Create page directory
    fs.mkdirSync(pageDir, { recursive: true });
    // Create page.tsx file
    var pageTSXContent = "\nimport Component from './".concat(pageName, ".mdx';\n\nconst ").concat(pageName, "Page = () => {\n  return (\n    <Component />\n  );\n};\n\nexport default ").concat(pageName, "Page;\n  ");
    fs.writeFileSync(pageComponentPath, pageTSXContent);
    // Create MDX file
    var mdxContent = "# ".concat(pageName, " page\n\n");
    fs.writeFileSync(pagePath, mdxContent);
    console.log("Page '".concat(pageName, "' created successfully in category '").concat(categoryName, "'").concat(subcategory ? " and subcategory '".concat(subcategory, "'") : ''));
};
// Extract page, category, and subcategory names from command line arguments
var args = process.argv.slice(2);
var pageIndex = args.indexOf('--page');
var categoryIndex = args.indexOf('--category');
var subcategoryIndex = args.indexOf('--subcategory');
if (pageIndex === -1 || categoryIndex === -1 || pageIndex === args.length - 1 || categoryIndex === args.length - 1) {
    console.error('Error: Please provide both page name and category name');
}
else {
    var pageName = args[pageIndex + 1];
    var categoryName = args[categoryIndex + 1];
    var subcategory = subcategoryIndex !== -1 ? args[subcategoryIndex + 1] : undefined;
    generatePage(pageName, categoryName, subcategory);
}
