import Head from "components/common/Head";
import Block from "components/common/Block";

import page from "public/content/en_US/Page/Blog/blog.content";

export default function Blog() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Block {...page.block.hero} />      
    </div>
  );
}
