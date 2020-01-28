let domEl;
export function bootstrap(props) {
  return Promise
    .resolve()
    .then(() => {
      const el = document.createElement('div');
      el.setAttribute('id', 'presi');
      document.body.appendChild(el);
    });
}

export function mount(props) {
  return Promise
    .resolve()
    .then(() => {
      // This is where you would normally use a framework to mount some ui to the dom. See https://single-spa.js.org/docs/ecosystem.html.
      document.getElementById('presi').innerHTML = '';
      domEl = document.createElement('iframe');
      document.getElementById('presi').appendChild(domEl);
      domEl.setAttribute('src', props.src);
    });
}

export function unmount(props) {
  console.log('unmounted');
  return Promise
    .resolve()
    .then(() => {
      // This is normally where you would tell the framework to unmount the ui from the dom. See https://single-spa.js.org/docs/ecosystem.html
      document.getElementById('presi').innerHTML = '';
    })
}
