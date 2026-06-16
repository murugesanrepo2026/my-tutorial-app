// src/data/index.js
import { cData } from './cData';
import { cppData } from './cppData';
import { javaData } from './javaData';
import { pythonData } from './pythonData';
import { htmlData } from './htmlData';
import { cssData } from './cssData';
import { javascriptData } from './javascriptData';
import { springbootData } from './springbootData';
// import { csharpData } from './csharpData';
// import { phpData } from './phpData';
// import { mysqlData } from './mysqlData';
// import other languages...

// Combine into the original tutorialData array
export const tutorialData = [cData,cppData,javaData, pythonData,htmlData , cssData, javascriptData, springbootData];

// Re-export helper functions so components can import from '../data'
export { findSubTopicBySlug, getFlatSubtopicsForMain } from './helpers';