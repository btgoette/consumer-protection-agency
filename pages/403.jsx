import Link from "next/link";
import Head from "components/common/Head";

import page from "public/content/en_US/Page/error403.content";

export default function Error403() {
  return (
    <>
      <Head {...page} />
      <section className="error">
        <h1>Page is Forbidden</h1>
        <h2 className="text-center">
          <Link href="/">Back to Home</Link>
        </h2>
      </section>
    </>
  );
}
