import { Sidebar } from "@/components/Sidebar";
import { readdir } from 'fs/promises';
import { join, relative, basename } from 'path';

export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

interface Directory {
  hasChildRoutes: boolean;
  children: Map<string, Directory>;
}

const getDirectories = async (dirPath: string, basePath: string = dirPath): Promise<Map<string, Directory>> => {
  let directoriesMap: Map<string, Directory> = new Map();

  const dirents = await readdir(dirPath, { withFileTypes: true });

  for (const dirent of dirents) {
    const fullPath = join(dirPath, dirent.name);
    if (dirent.isDirectory()) {
      const relativePath = relative(basePath, fullPath);
      const name = basename(relativePath);
      const subDirectoriesMap = await getDirectories(fullPath, basePath);
      directoriesMap.set(name, { hasChildRoutes: subDirectoriesMap.size > 0, children: subDirectoriesMap });
    }
  }

  return directoriesMap;
};

const convertMapToNavigation = async (map: Map<string, Directory>, basePath: string = ''): Promise<NavigationItem[]> => {
  const navigation: NavigationItem[] = [];

  for (const [name, directory] of Array.from(map.entries())) {
    const href = basePath ? `${basePath}/${name}` : `/${name}`;

    const item: NavigationItem = {
      name: name.includes('_') ? name.replace('_', ' ') : name,
      href: href.replace(/^\.\/app\//, '/'),
    };

    if (directory.hasChildRoutes) {
      item.children = await convertMapToNavigation(directory.children, href);
    }

    navigation.push(item);
  }

  return navigation;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigationMap = await getDirectories('./app/docs');
  const navigation = await convertMapToNavigation(navigationMap, './app/docs');

  return (
    <Sidebar navigation={navigation}>
      {children}
    </Sidebar>
  );
}
