const root = document.getElementById('root');
const p = React.createElement('p', null, 'Olá, Mundo!');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(p)