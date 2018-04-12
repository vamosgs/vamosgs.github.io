export function sliceArray(arr, length) {
  let sliced = [];
  arr.forEach((item, key) => {
    if (key + 1 <= length) {
      sliced = [...sliced, item];
    }
  });
  return sliced;
}

export function filterProjects(projects, options) {
  if (options.length > 1) {
    const inFiltr = item => options.map(filter => item === filter).filter(remove => remove);
    return projects.filter(item => inFiltr(item.name)[0]);
  } else if (typeof options[0] === 'number') {
    if (options[0] >= projects.length) {
      return projects;
    }
    return sliceArray(projects, options[0]);
  }
  return projects;
}

export function chunk(arr, len) {
  const chunks = [];
  let i = 0;
  const n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
}

export const fetchApi = (url, options) => fetch(url, options).then(res => res.json());
