import Head from "next/head";

export default function HtmlPage({ html, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        {meta.description && <meta name="description" content={meta.description} />}
      </Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
