  
import { Input, Space } from 'antd';

 
const SearchComponent = ({  }) => {
  const { Search } = Input;
  const onSearch = value => console.log(value);
    
  return (
    <Search placeholder="Search Sku..." onSearch={onSearch} style={{ width: 450 }  } size='large'  />
  );
};

export default SearchComponent;