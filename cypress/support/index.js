import './commands';
import addContext from 'mochawesome/addContext';

// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

Cypress.on('test:after:run', (test, runnable) => {
    if(test.state === 'failed') {
        const screenshot = `screenshots/${
            Cypress.spec.name
        }/${runnable.parent.title} -- ${test.title} (failed).png`;
        const video = `videos/${Cypress.spec.name}.mp4`
        addContext({test}, screenshot);
        addContext({test}, video);
    }
})

Cypress.on(
  'uncaught:exception',
  (err, runnable) =>
    // returning false here prevents Cypress from
    // failing the test
    false,
);
