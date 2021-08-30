  
import { Input } from 'antd';


const SearchComponent = ({  }) => {

 
  const { Search } = Input;
  const onSearch = value => console.log(value);
  
  return (
    <div>
    <Search  placeholder="Search Sku..."  
    onSearch={onSearch} 
    style={{ width: 550, height: 45, position:'center', padding: '0 30px' } }  
    size='large'  />
    </div>
    
  );
};

export default SearchComponent;