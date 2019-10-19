import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';

class Welcome extends React.Component {
  render() {
    return (
      <>
        <h1 className="header">Karunya Hacks</h1>
        <p>WELCOME</p>
      </>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
