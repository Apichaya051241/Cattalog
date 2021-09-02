import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { Form, Input, InputNumber, Button, Modal } from "antd";

const DrawerComponent = ({ visible, setVisible, data, onClick}) => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [form] = Form.useForm();

  form.setFieldsValue(data);
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

  const saveData = (value) => {
    onClick({ ...value, key: data.key });
    setVisible(false);
     Modal.success({
       content: "Edit Success!",
     });
   }
  

  return (
    <Drawer
      title="Edit Data"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width="600"
    >
      <Form form={form} onFinish={saveData}>
        <Form.Item name="sku" label="Sku">
          <Input           
          />
        </Form.Item>

        <Form.Item name="categorise" label="Catagorise">
          <Input.TextArea            
          />
        </Form.Item>

        <Form.Item name="price" label="Price">
          <InputNumber           
          />
        </Form.Item>

        <Form.Item name="spacialprice" label="Spacialprice">
          <InputNumber            
          />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea           
          />
        </Form.Item>

        <Form.Item name="brand" label="Brand">
          <Input           
          />
        </Form.Item>

        <Form.Item name="color" label="Color">
          <Input            
          />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            htmlType="submit"
            shape="round"
            large            
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default DrawerComponent;
