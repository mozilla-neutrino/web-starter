import './app.css';

export default () => {
  const main = document.createElement('main');
  const heading = document.createElement('h1');
  const p = document.createElement('p');
  const headingText = document.createTextNode('Neutrino');
  const pText = document.createTextNode('Welcome to Web');

  heading.appendChild(headingText);
  p.appendChild(pText);
  main.appendChild(heading);
  main.appendChild(p);
  main.classList.add('App');

  return main;
};
