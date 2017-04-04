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

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./app', load);
}

load();
