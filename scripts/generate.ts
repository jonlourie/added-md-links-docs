import * as fs from 'fs';

const generatePage = (pageName: string, categoryName: string, subcategory?: string) => {
  let pageDir: string;

  if (subcategory) {
    pageDir = `./app/docs/${categoryName}/${subcategory}/${pageName}`;
  } else {
    pageDir = `./app/docs/${categoryName}/${pageName}`;
  }

  const pagePath = `${pageDir}/${pageName}.mdx`;
  const pageComponentPath = `${pageDir}/page.tsx`;

  // Check if the page already exists
  if (fs.existsSync(pagePath)) {
    console.error(`Error: Page with name '${pageName}' already exists in category '${categoryName}'`);
    return;
  }

  // Create page directory
  fs.mkdirSync(pageDir, { recursive: true });

  // Create page.tsx file
  const pageTSXContent = `
import Component from './${pageName}.mdx';

const ${pageName}Page = () => {
  return (
    <Component />
  );
};

export default ${pageName}Page;
  `;
  fs.writeFileSync(pageComponentPath, pageTSXContent);

  // Create MDX file
  const mdxContent = `# ${pageName} page\n\n`;
  fs.writeFileSync(pagePath, mdxContent);

  console.log(`Page '${pageName}' created successfully in category '${categoryName}'${subcategory ? ` and subcategory '${subcategory}'` : ''}`);
};

// Extract page, category, and subcategory names from command line arguments
const args = process.argv.slice(2);
const pageIndex = args.indexOf('--page');
const categoryIndex = args.indexOf('--category');
const subcategoryIndex = args.indexOf('--subcategory');

if (pageIndex === -1 || categoryIndex === -1 || pageIndex === args.length - 1 || categoryIndex === args.length - 1) {
  console.error('Error: Please provide both page name and category name');
} else {
  const pageName = args[pageIndex + 1];
  const categoryName = args[categoryIndex + 1];
  const subcategory = subcategoryIndex !== -1 ? args[subcategoryIndex + 1] : undefined;
  generatePage(pageName, categoryName, subcategory);
}
