const data = new Map();
data.set('window_terminal', {
  type: 'terminal',
  data: null,
});
data.set('window_placeholder', {
  type: 'project',
  data: {
    title: 'Placeholder Game Platform',
    description: 'Lorem ipsum dolor ...',
    slides: [{
      image: '/image.gif',
      title: 'Placeholder Game Platform',
      description: '',
    }],
    technologies: [
      'Node.JS', 'MySQL', 'Express',
    ],
    links: [{
      title: 'Github Repository',
      url: 'https://github.com',
    }],
  }
});

export const getWindowData = function(index)
{
  return data.get(index);
}

export const hasWindowData = function(index)
{
  return data.has(index);
}
