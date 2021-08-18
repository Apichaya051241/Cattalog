import React, { useState } from 'react';
import { Table } from 'antd';


  


const Show =() => {
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
      ];
      const data = [
        {
          key: '1',
          sku: '00000001',
          categorise: "ProPlugin/Microphones,ProPlugin/Microphones/USB,ProPlugin/YouTube-Podcast,ProPlugin/โปร/ไมโครโฟน",
          price: 3500,
          spacialprice: 2500,
          description:"<li>ไมโครโฟน USB มี A/D Converter ในตัว</li><li>รองรับการบันทึกเสียงระดับ Hi-res</li> <li>สามารถใช้งานได้กับคอมพิวเตอร์ทั้ง 2 ระบบและ iPad</li> <li>มี Shock mount Built-in ในตัว</li>",
          brand:"RODE",
          color:"black",
        },
        
      ];
    
     
    return (
      
     <h1>TABLE</h1>,
     <div>
    <h4>ALL DATA</h4>
    <p></p>
    <Table columns={columns} dataSource={data} size="middle" />    
  </div>
   
    )
    }
    export default Show;