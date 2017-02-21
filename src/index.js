import app from './app';

const root = document.getElementById('root');
let replaced;

const load = () => {
  if (replaced) {
    replaced = root.replaceChild(app(), replaced);
  } else {
    replaced = app();
    root.appendChild(replaced);
  }
};

// This is needed for hot-module-replacement
if (module.hot) {
  module.hot.accept('./app', load);
}

load();
