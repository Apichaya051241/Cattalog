  
import { Input, Space } from 'antd';

const SearchComponent = ({  }) => {
 
  const { Search } = Input;
  const onSearch = value => console.log(value);
    
  return (
    <Search  placeholder="Search Sku..." onSearch={onSearch} style={{ width: 550, height: 50, position:'unset',padding: "2rem",float: "center"  } }  size='large'   />
  );
};

export default SearchComponent;