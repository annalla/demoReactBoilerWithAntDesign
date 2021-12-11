import React from 'react';
import { Button, Space, Progress, Input } from 'antd';
import './App.css';

const NewPage = () => (
  <div className="App">
    <Space direction="vertical" size={30}>
      <Button type="primary">Button</Button>
      <Input placeholder="type here" />
      <Progress
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={50}
        type="circle"
      />
      <Button type="primary" danger>
        Danger Button
      </Button>
    </Space>
  </div>
);

export default NewPage;
