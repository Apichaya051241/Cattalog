import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Button } from "antd";
import { useRouter } from "next/router";
import DrawerComponent from "../../../component/drawer";
import { styles } from "ansi-colors";
import Item from "antd/lib/list/Item";


const Show = () => {
  const [product, setProduct] = useState();
  const [newdata, setNewdata] = useState();
  const [visible, setVisible] = useState(false);

  const showDrawer = (value) => {
    setProduct(value);
    setVisible(true);
  };

  useEffect(() => {setNewdata(data)},[]);

  const router = useRouter();

  const { titlename } = router.query;

  const columns = [
    {
      title: "Sku",
      dataIndex: "sku",
    },
    {
      title: "Categorise",
      dataIndex: "categorise",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Spacialprice",
      dataIndex: "spacialprice",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Color",
      dataIndex: "color",
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (_, value) => (
        <Button danger shape="round" width="500" onClick={() => showDrawer(value)}>
          Edit
        </Button>
      ),
    },
  ];

  const saveData = (value) => {    
    const clonedata = data;
    const res = clonedata.filter(item => value.key !== item.key);
    setNewdata([...res,value]);    
  };
  
 
  const data = [
    {
      key: "1",
      sku: titlename,
      categorise: "categorise",
      price: 3000,
      spacialprice: 2500,
      description:
        "<li>ไมโครโฟน USB มี A/D Converter ในตัว</li><li>รองรับการบันทึกเสียงระดับ Hi-res</li> <li>สามารถใช้งานได้กับคอมพิวเตอร์ทั้ง 2 ระบบและ iPad</li> <li>มี Shock mount Built-in ในตัว</li>",
      brand: "RODE",
      color: "black",
    },
  ];

  
  return (
    <div>
      <Button
        color="blue"
        shape="round"
        defaultSelectedKeys={[router.pathname]}
        onClick={() => router.push("/")}
        key="/"
        padding="1rm"
      >
        Home
      </Button>

      <p></p>
      <h4>All Data</h4>
      <p></p>

      <Table className={styles.table}
        columns={columns}
        dataSource={newdata} />
      <p></p>

      <DrawerComponent
        visible={visible}
        setVisible={setVisible}
        titlename={titlename}
        data={product}
        onClick={saveData}
      />
      <></>
    </div>
  );
};

export default Show;
