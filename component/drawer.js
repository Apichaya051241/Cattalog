import React, { useState } from "react";
import { Drawer } from "antd";
import { Form, Input, InputNumber, Button } from "antd";

const DrawerComponent = ({ visible, setVisible, titlename, data }) => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const addList = (data) => {
    setList([...list, data]);
  };

  const updateList = async (data) => {
    const newList = await list.map((item) => {
      let newtitlename = "";
      if (item === data) {
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
      title="Edit Data"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width="600"
    >
      <Form.Item name={["product", "titlename"]} label="Sku">
        <Input
          placeholder={titlename}
          onChange={(e) => {
            console.log(e.target.value);
            setInput(e.target.value);
          }}
          value={input}
        />
      </Form.Item>

      <Form.Item name={["product", "catagorise"]} label="Catagorise">
        <Input.TextArea
          placeholder={data}
          onChange={(e) => {
            console.log(e.target.value);
            setInput(e.target.value);
          }}
          value={input}
        />
      </Form.Item>

      <Form.Item name={["product", "price"]} label="Price">
        <InputNumber
          placeholder={data}
          onChange={(e) => {
            console.log(e.target.value);
            setInput(e.target.value);
          }}
          value={input}
        />
      </Form.Item>

      <Form.Item name={["product", "spacialprice"]} label="Spacialprice">
        <InputNumber
          placeholder={data}
          onChange={(e) => {
            console.log(e.target.value);
            setInput(e.target.value);
          }}
          value={input}
        />
      </Form.Item>

      <Form.Item name={["product", "description"]} label="Description">
        <Input.TextArea
          placeholder={data}
          onChange={(e) => {
            console.log(e.target.value);
            setInput(e.target.value);
          }}
          value={input}
        />
      </Form.Item>

      <Form.Item name={["product", "brand"]} label="Brand">
        <Input
          placeholder={data}
          onChange={(e) => {
            console.log(e.target.value);
            setInput(e.target.value);
          }}
          value={input}
        />
      </Form.Item>

      <Form.Item name={["product", "color"]} label="Color">
        <Input
          placeholder={data}
          onChange={(e) => {
            console.log(e.target.value);
            setInput(e.target.value);
          }}
          value={input}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button
          htmlType="edit"
          shape="round"
          large
          onClick={() => {
            updateList(input);
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Drawer>
  );
};

export default DrawerComponent;
