export function filterProjects(projects, options) {
  if (options.length > 1) {
    const inFiltr = item => options.map(filter => item === filter).filter(remove => remove);
    return projects.filter(item => inFiltr(item.name)[0]);
  } else if (typeof options[0] === 'number') {
    if (options[0] >= projects.length) {
      return projects;
    }
    let sliced = [];
    projects.forEach((project, key) => {
      if (key + 1 <= options[0]) {
        sliced = [...sliced, project];
      }
    });
    return sliced;
  }
  return projects;
}

export const fetchApi = (url, options) => fetch(url, options).then(res => res.json());
