import Head from "components/common/Head";
import Block from "components/common/Block";
import page from "public/content/en_US/Page/error403.content";

export default function Error403() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Block {...page.block.hero} />
    </div>
  );
}
