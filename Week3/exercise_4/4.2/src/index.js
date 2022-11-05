import React from 'react';
import ReactDOM from 'react-dom/client';
import {Button } from 'antd';
import "antd/dist/antd.min.css" ;

const element =(
  <Button style={{margin:"10px 10px" }} type="primary">Button</Button>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);