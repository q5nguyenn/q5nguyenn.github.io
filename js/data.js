export { links };
var links = [
  {
    name: 'Copy Link',
    icon: '<i class="bi bi-link-45deg"></i>',
    url: 'index.html',
    type: 'general',
    target: '_self',
    id: 'copy-link',
  },
  {
    name: 'Send Email',
    icon: '<i class="bi bi-envelope-paper"></i>',
    url: 'views/send-email.html',
    type: 'general',
    target: '_self',
  },
  {
    name: 'View Source',
    icon: '<i class="bi bi-code-slash"></i>',
    url: 'https://github.com/q5nguyenn/q5nguyenn.github.io',
    type: 'general',
    target: '_blank',
  },
  { name: 'Home', icon: '<i class="bi bi-house"></i>', url: 'index.html', type: 'goto', target: '_self' },
  { name: 'About', icon: '<i class="bi bi-file-person"></i>', url: 'views/about.html', type: 'goto', target: '_self' },
  {
    name: 'Project',
    icon: '<i class="bi bi-file-earmark-code"></i>',
    url: 'views/projects.html',
    type: 'goto',
    target: '_self',
  },
];
