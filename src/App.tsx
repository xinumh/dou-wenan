import './App.less';
import React from 'react'
import { Button } from 'antd';

function App(props: any) {
  console.log('props', props)
  return (
    <div className="App">
      <div>home</div>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
