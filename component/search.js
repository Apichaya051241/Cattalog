import { Input, Space } from 'antd';


  
 
const SearchComponent = ({  }) => {
    const { Search } = Input; 
    const onSearch = value => console.log(value);
    
  return (
    <Search 
    placeholder="input sku"
    allowClear  
    color='#8c8c8c'
    enterButton="Search"       
    size="large"  
    onSearch={onSearch}
  />
  );
};

export default SearchComponent;
