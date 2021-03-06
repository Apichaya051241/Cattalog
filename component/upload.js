  
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const UploadComponent = ({  }) => {
  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then(res => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };
  return (   
    <div>
    <Upload {...props}   >        
    <Button icon={<UploadOutlined />} style={{  width: 180,  position:'unset', padding: '1 00px',float: "center"} } >Upload</Button>
  </Upload>
  </div>
  );
};

export default UploadComponent;