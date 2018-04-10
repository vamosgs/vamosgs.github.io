export function filterProjects(projects, options) {
  const inFiltr = item => options.map(filter => item === filter).filter(remove => remove);
  return projects.filter(item => inFiltr(item.name)[0]);
}

export const fetchApi = (url, options) => fetch(url, options).then(res => res.json());
