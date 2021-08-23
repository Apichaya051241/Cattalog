import React, { useState } from 'react';
import { Table } from 'antd';
import { Button } from 'antd';
import { useRouter } from 'next/router';



  


const Show =() => {
  const router=useRouter();  
  const { titlename } = router.query
    const columns = [
        {
          title: 'Sku',
          dataIndex: 'sku',
        },
        {
          title: 'Categorise',
          dataIndex: 'categorise',
        },
        {
          title: 'Price',
          dataIndex: 'price',
        },
        {
            title: 'Spacialprice',
            dataIndex: 'spacialprice',
          },
        {
            title: 'Description',
            dataIndex: 'description',
          },
        {
            title: 'Brand',
            dataIndex: 'brand',
          },
        {
            title: 'Color',
            dataIndex: 'color',
          },
          {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <a>Edit</a>,
          },
      ];
      const data = [
        {
          key: '1',
          sku: titlename,
          categorise: "ProPlugin/Microphones,ProPlugin/Microphones/USB,ProPlugin/YouTube-Podcast,ProPlugin/โปร/ไมโครโฟน",
          price: 3500,
          spacialprice: 2500,
          description:"<li>ไมโครโฟน USB มี A/D Converter ในตัว</li><li>รองรับการบันทึกเสียงระดับ Hi-res</li> <li>สามารถใช้งานได้กับคอมพิวเตอร์ทั้ง 2 ระบบและ iPad</li> <li>มี Shock mount Built-in ในตัว</li>",
          brand:"RODE",
          color:"black",
        },
        
      ];
    
     
    return (      
    <div  > 
      <Button  color='blue' shape='round' defaultSelectedKeys={[router.pathname]} onClick={ () => router.push("/")} key="/"   >Home</Button>
      <p></p>
      <h4 >All Data</h4>
    <p></p>
    <Table columns={columns} dataSource={data}  size="middle" center /> 
    <p></p>    
    
  </div>
   
    )
    }
    export default Show;