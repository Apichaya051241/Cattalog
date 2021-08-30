import { List, Avatar } from 'antd';
import { useRouter } from 'next/router';


  
 
const ListComponent = ({  }) => {
    const router=useRouter();  
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
    <List
    style={{ width: 1350,padding: "0.7rem" }  } 
    size="large" 
    
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item >
        <List.Item.Meta    
          defaultSelectedKeys={[router.pathname]}            
          title={<a onClick={() => router.push('/Table/show/' + item.title)} key="/Table/show">{item.title}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
  );
};

export default ListComponent;
