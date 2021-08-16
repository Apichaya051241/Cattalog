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
    },
    {
      title: 'sku2',
    },
    {
      title: 'sku3',
    },
    {
      title: 'sku4',
    },
    {
      title: 'sku5',
    },
    {
      title: 'sku6',
    },
    {
      title: 'sku7',
    },
    {
      title: 'sku8',
    },
    {
      title: 'sku9',
    },
    {
      title: 'sku10',
    },
  ];
  

  return (
    <div className={styles.container}>    
      <Head>
      <Image
      width={1540}
      height={250}
      src="https://lh3.googleusercontent.com/EnbcaE6mbett1nIG2vtZr3-8cb00NVYW6jN71MmF73-9fIA5qf4KQL05zu3YL-zEfKd1M_12eMMAxnpJFvrf79vi1hTc4z8yr8_nDuHiVT20Z3Y5E4iraOpNkcmPgwyhtZmCNktEoar8Q8i2aHuPq3oM4Ioehwydo-G3jk4hWyn0y0muCj6oGe0IxGvs-B6ebLY71EfmPwp0IRRCuE36qRwAPlruS1wwQVcLtdoTEqP8lqf67vSwj8Cs--SuKDBcVtiul8hbhXzwipJSTsFvpyQohiT1bwgq2X9_VwofGqbYkGBeOSvPgNRUi6CuuR_4RxRTFX5FGcnPEF2O5prwPRPA5NPZWJKWrrk8NfKVIxg6frOdHmQ8lfG18k9B6KyETEgwe5NP2Yh6eIBGmrFRMkJfh3h-aYOPyWVhDK_nr3GNEjCGJl_rH4X_sOLN0149SiyXN3_Dqu9MpOgOq0Itwf2I87CTwEHWTJMZRQ1_9fHlFOu0CbnfFP8zBz35QubztnaQnHaw7Pd--KqShvtNvFFsH1eJWccmt8GukdNS5P68KJz9BcYbMgRZ3pY8tHVy0-TeEny9ns3DuS3bQFNw_-bZCYR4U4OtOpPSVJAjB7SVS2mvLurSGufhHjcwZe6JQqMQzvNi1W3vY4uXa1COrpUxrdb488CIrWdeYQWftkz-xrokJEaAmbJWDgYl0-Zj0_t8EnbPQX1G0UxSeYCGBWHc=w1640-h547-no?authuser=0"
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
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={<a href="https://ant.design">{item.title}</a>}
          // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />

      </Content>     
    </div>
  )
}
