import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Image } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Input, Space } from 'antd';
import { List, Avatar } from 'antd';



export default function Home() {

  const { Search } = Input; 
  const onSearch = value => console.log(value);

  const data = [
    {
      title: 'sku1',
      description:'Overnight Duffle',
    },
    {
      title: 'sku2',
      description:'แอมป์คาราโอเกะ BMB DAH-100',
    },
    {
      title: 'sku3',
      description:'ลำโพงคาราโอเกะ BMB CSE-308',
    },
    {
      title: 'sku4',
      description:'สายเคเบิล Apogee One Breakout Cable (works with ONE for Mac and ONE for iPad & Mac)',
    },
    {
      title: 'sku5',
      description:'สายเคเบิล Apogee 1 M Lighting iPad cable for Quartet, Duet IOS and ONE-IOS',
    },
    {
      title: 'sku6',
      description:'เทสภาษาไทยสายเคเบิล Apogee 1 M Lighting iPad cable for Quartet, Duet IOS and ONE-IOS',
    },
    {
      title: 'sku7',
      description:'V-Moda Custom Shield Kit (Hawk Green)',
    },
    {
      title: 'sku8',
      description:'V-Moda Custom Shield Kit Overear (Purple)',
    },
    {
      title: 'sku9',
      description:'V-Moda Audio Cable (Gray/Black)',
    },
    {
      title: 'sku10',
      description:'V-Moda Memory Cushions M-100 No-package',
    },
  ];
  

  return (
    <div className={styles.container}>    
      <Head>
      <Image
      width={1540}
      height={230}
      src="https://lh3.googleusercontent.com/QgBYV1MfqNuBFOO-xzknbdyNLIKdL84l3sNNGqTZcwTRT82-dfLhYmJeC_MpC2A_LCo7-rU2ZG2GNztuoFrH50M0rLrLu3hW6QuA3D17A3Mi2i12H3YcnPix-BOcfKCUB0Kk54xPTCLKRLqfAmMojbbkDP8R3BHhAkWFMPhUqRUUcef2xadm7gZ4mNOpK4TvzXywbgFlfedJqqsKJzorOTzrK6yhI44IQuFm6sxGcnSg1s79MFI8As4wfOwI3V-MHd6dMlSd2wjsB54SMOuJMmh6XKz23ckHeq9saINaCbEl8yn0k3jAQfIV15sAmj-2UpNcBiVC0HLGlXrVHVQDLuUmHFZq4ERQjiKkhiPz14RQshy9ICODErUjbRzXowXj5B5LtL663QIfQ526ZaedUo2VwuCO9lT4kr9wxgDOTY1HkKaBun8jg6gb-oVXlIStpb6-6DPgFoQRmdEDvSBdEnMEZkteSp0XlyVwYqsKfdR6uj8DMU0fQVa45L1apFqOEuZD9QszG7kAV3VvaZgkz3YTMAA-t4VstEAwa6gzZChluntFTRPywwPAf08eTHpae2fPcOexk6f7iEoWeAWgrX5cO00HQfAeI_HKRONL0g-eO6wKolBuI02pL7XjHK2gPNPWGEPOCWpWipFS1r8L1Wr4BUiSnVE7eGEUIUpjcmpIJRDmPOxSiyUFod6efTQo_dbjjlPwfaO8vcjozFOVh7oM=w1640-h547-no?authuser=0"
    />
      </Head>
   
      <Content  >            
      <Search 
      placeholder="input sku"
      allowClear
      color='#8c8c8c'
      enterButton="Search"       
      size="large"  
      onSearch={onSearch}
    />

<List 
    size="default" 
    position=""
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item >
        <List.Item.Meta                
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
          
        />
      </List.Item>
    )}
  />
      </Content>     
    </div>
  )
}
