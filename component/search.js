  
import { Input } from 'antd';
import { styles } from 'ansi-colors';


const SearchComponent = ({  }) => {

 
  const { Search } = Input;
  const onSearch = value => console.log(value);
  
  return (
    <div>
      <Search className={styles.Search}
    placeholder="Search Sku..."
    onSearch={onSearch} 
    style={{ width: 550, height: 45, position:'center', padding: '0 30px' } }  
    size='large'  />
    </div>
    
  );
};

export default SearchComponent;