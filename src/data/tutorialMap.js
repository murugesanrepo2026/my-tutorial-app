// src/data/tutorialMap.js

// ✅ Import directly from each file, not from './index'
import { cData } from './cData';
import { cppData } from './cppData';
import { javaData } from './javaData';
import { pythonData } from './pythonData';
import { htmlData } from './htmlData';
import { cssData } from './cssData';
import { javascriptData } from './javascriptData';
import { springbootData } from './springbootData';
import { csharpData } from './csharpData';
import { reactData } from './reactData';
import { mysqlData } from './mysqlData';

// Path → data mapping
const pathToDataMap = {
  '/c-programming/c-tutorial': cData,
  '/c++-tutorial/c++-tutorial-basics': cppData,
  '/java/java-tutorial': javaData,
  '/python/python-tutorial-[intro]': pythonData,
  '/html-tutorial/html-home': htmlData,
  '/css/css-tutorial': cssData,
  '/javascript/javascript-tutorial': javascriptData,
  '/springboot/spring-boot-tutorial': springbootData,
  // For missing ones, set to null (you can later add data)
  '/sql/sql-home': null,
  '/reactjs/react-home': reactData,
  '/node-js/node.js-home': null,
  '/csharp/Dotnet-framework': csharpData,   // ⚠️ FIX THIS PATH
  '/php/php-tutorial': null,
  '/mysql/mysql-home': mysqlData,
};

export const getTutorialByPath = (path) => pathToDataMap[path] || null;