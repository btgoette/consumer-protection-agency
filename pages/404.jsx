import Link from "next/link";
import Head from "components/common/Head";

import page from "public/content/en_US/Page/error404.content";

export default function Error404() {
  return (
    <>
      <Head {...page} />
      <div className="error">
        <h1>Page Not Found</h1>
        <h2 className="text-center">
          <Link href="/">Back to Home</Link>
        </h2>
      </div>
    </>
  );
}
