import HtmlPage from "@/components/HtmlPage";
import { loadPage } from "@/lib/loadContent";

export default function Page({ html, meta }) {
  return <HtmlPage html={html} meta={meta} />;
}

export async function getStaticProps() {
  const { html, meta } = loadPage("404-page");
  return { props: { html, meta } };
}
