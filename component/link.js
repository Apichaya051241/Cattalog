import { Anchor } from "antd";

const LinkComponent = () => {

    const { Link } = Anchor;
    const getCurrentAnchor = () => "#components-anchor-demo-static";

  return (
    <Anchor affix={false} getCurrentAnchor={getCurrentAnchor}>
      <Link href="#components-upload.js" title="Upload" />      
    </Anchor>
  );
};
export default LinkComponent;
