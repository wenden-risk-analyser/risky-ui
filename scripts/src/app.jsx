import React from 'react';
import { render } from 'react-dom';

class Smpl extends React.Component {
  render() {
      return <div>Hello</div>;
  }
}

render(
  <Smpl />,
  document.getElementById('content')
);
