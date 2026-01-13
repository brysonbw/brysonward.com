const COLOR_PALETTE = Object.freeze({
  BACKGROUND: '#1A1A1A',
  GRAY: '#999999',
  LIGHT_GRAY: '#CCCCCC',
  DARK_GRAY: '#8A8A8A',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
});

const TECHNOLOGIES = Object.freeze({
  JAVASCRIPT: 'JavaScript',
  TYPESCRIPT: 'TypeScript',
  HTML: 'HTML',
  CSS: 'CSS',
  PYTHON: 'Python',
  RUST: 'Rust',
  SVELTE: 'Svelte',
  LIT: 'Lit',
  REACT: 'React',
  VUE: 'Vue',
  ANGULAR: 'Angular',
  NODE_JS: 'Node.js',
  EXPRESS_JS: 'Express.js',
  ASP_DOT_NET: 'ASP.NET',
  SQL: 'SQL',
  NO_SQL: 'NoSQL',
  VSCODE: 'VSCode',
  NPM: 'npm',
  CESIUM_JS: 'CesiumJS',
});

const ROUTES = Object.freeze({
  HOME: Object.freeze({
    NAME: 'Home',
    PATH: '/',
  }),
  WORK: Object.freeze({
    NAME: 'Work',
    PATH: '/work',
  }),
  CATCH_ALL: Object.freeze({
    NAME: 'Page Not Found',
    PATH: '/*',
  }),
});

export { COLOR_PALETTE, TECHNOLOGIES, ROUTES };
