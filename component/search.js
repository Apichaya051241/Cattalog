import { Input, Space } from 'antd';
import styles from '../styles/Home.module.css'


  
 
const SearchComponent = ({  }) => {
    const { Search } = Input; 
    const onSearch = value => console.log(value);
    
  return (
    <Search  className={styles}
    placeholder="input sku"
    allowClear      
    enterButton="Search"    
    size='large'
    color='#8c8c8c'
    onSearch={onSearch}
  />
  );
};

export default SearchComponent;
