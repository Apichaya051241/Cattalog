import styles from '../styles/Home.module.css'
import { Content } from 'antd/lib/layout/layout';
import SearchComponent from '../component/search';
import ListComponent from '../component/list';
import HeadComponent from '../component/header';
// import UploadComponent from '../component/upload';
import { Row } from 'antd';


export default function Home() {
  return (
    <div className={styles.container}> 
      <HeadComponent/>    
      <Content hasSider >
        <Row>          
          <SearchComponent />          
          {/* <UploadComponent/>  */}
        </Row>  
        <Content  > 
           <ListComponent/>
           </Content>  
      </Content>      
    </div>
  )
}
