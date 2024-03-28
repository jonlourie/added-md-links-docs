import * as fs from 'fs';
import axios from 'axios';

interface Page {
  page: string;
  source: string;
}

interface Category {
  [key: string]: Page[];
}

const generatePages = async () => {
  try {
    // Read sources.json file
    const sourcesData = fs.readFileSync('./sources.json', 'utf-8');
    const categories: Category = JSON.parse(sourcesData);

    // Iterate over categories
    for (const categoryName in categories) {
      const pages = categories[categoryName];

      // Iterate over pages in each category
      for (const page of pages) {
        const { page: pageName, source } = page;
        const pageDir = `./app/docs/${categoryName}/${pageName}`;
        const pagePath = `${pageDir}/${pageName}.mdx`;
        const pageComponentPath = `${pageDir}/page.tsx`;
        const pageContentResponse = await axios.get(source);
        let pageContent = pageContentResponse.data;

        // Replace <!-- to {/*
        pageContent = pageContent.replace(/<!--/g, '{/*');
        // Replace --> to */}
        pageContent = pageContent.replace(/-->/g, '*/}');

        pageContent = pageContent.replace(/\/{/g, '/{`');

        pageContent = pageContent.replace(/}\//g, '`}/');
        // pageContent = pageContent.replace('}/', '`}/');
        pageContent = pageContent.replace(/} \|/g, '`} |');

        pageContent = pageContent.replace(/<=/g, '{\<\=}');
        pageContent = pageContent.replace('<this-command>', '\<this-command\>');

        // Check if the page already exists
        if (fs.existsSync(pagePath) || fs.existsSync(pageComponentPath)) {
          console.error(`Error: Page with name '${pageName}' already exists in category '${categoryName}'`);
          continue;
        }

        // Create page directory
        fs.mkdirSync(pageDir, { recursive: true });

        // Create MDX file
        fs.writeFileSync(pagePath, pageContent);

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

        console.log(`Page '${pageName}' created successfully in category '${categoryName}'`);
      }
    }
  } catch (error: any) {
    console.error('An error occurred:', error.message);
  }
};

generatePages();
