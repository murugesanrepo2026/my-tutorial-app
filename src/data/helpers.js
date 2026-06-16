
// Recursively find a subtopic inside a main topic by its slug (id)
export const findSubTopicBySlug = (mainTopic, slug) => {
  function search(items) {
    if (!items) return null;
    for (const item of items) {
      if (item.id === slug) return item;
      if (item.subtopics && item.subtopics.length > 0) {
        const found = search(item.subtopics);
        if (found) return found;
      }
    }
    return null;
  }
  return search(mainTopic.subtopics);
};


// Recursively flatten all leaf subtopics for a given main topic
export const getFlatSubtopicsForMain = (mainTopic) => {
  const result = [];
  
  function traverse(items, mainId, mainName) {
    if (!items) return;
    for (const item of items) {
      if (item.subtopics && item.subtopics.length > 0) {
        traverse(item.subtopics, mainId, mainName);
      } else {
        result.push({
          ...item,
          mainTopicId: mainId,
          mainTopicName: mainName,
        });
      }
    }
  }
  
  traverse(mainTopic.subtopics, mainTopic.id, mainTopic.name);
  return result;
};




