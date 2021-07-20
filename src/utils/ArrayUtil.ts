export const flattenArr = (arr: any[]) => {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flattenArr(next) : next);
  }, [])
}

export const treeArr = (data: any[]) => {
  let result: any[] = []
  if (!Array.isArray(data)) {
    return result
  }
  data.forEach(item => {
    delete item.children;
  });
  let map = {};
  data.forEach(item => {
    map[item.id] = item;
  });
  data.forEach(item => {
    let parent = map[item.pid];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}