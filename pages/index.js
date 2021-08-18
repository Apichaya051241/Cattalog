import styles from '../styles/Home.module.css'
import { Content } from 'antd/lib/layout/layout';
import SearchComponent from '../component/search';
import ListComponent from '../component/list';
import HeadComponent from '../component/header';




export default function Home() {

  return (
    <div className={styles.container}>   
     
      <HeadComponent/>     
   
      <Content  >  
        <SearchComponent/>
        <ListComponent/>
      </Content>     
    </div>
  )
}
