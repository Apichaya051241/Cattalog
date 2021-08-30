import React, { useState } from "react";
import { Drawer } from "antd";
import { Form, Input, InputNumber, Button } from "antd";
import InputComponent from "./input";

const DrawerComponent = ({ visible, setVisible, titlename }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const updateList = async (titlename) => {
    const newList = await list.map((item) => {
      let newtitlename = "";
      if (item === titlename) {
        newtitlename = data;
      } else {
        newtitlename = item;
      }
      return newtitlename;
    });
    console.log(newList);
    setList(newList);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Drawer
      title="Edit data"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width="600"
    >
      <Form.Item name={["user", "titlename"]} label="Sku">
        <Input placeholder={titlename} />
      </Form.Item>

      <Form.Item name={["user", "catagorise"]} label="Catagorise">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name={["user", "price"]} label="Price">
        <InputNumber />
      </Form.Item>

      <Form.Item name={["user", "spacialprice"]} label="Spacialprice">
        <InputNumber />
      </Form.Item>

      <Form.Item name={["user", "description"]} label="Description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name={["user", "brand"]} label="Brand">
        <Input />
      </Form.Item>

      <Form.Item name={["user", "color"]} label="Color">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} >
        <Button 
          htmlType="edit"
          shape="round"        
        >
          Submit
        </Button>        
      </Form.Item>
    </Drawer>
  );
};

export default DrawerComponent;
