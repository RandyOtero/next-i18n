import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

const Blog = dynamic(() => import("../../../components/Blog"), { ssr: false });


const Page = (_props) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Blog />

    </div>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "fr", ["common", "blog"])),
  },
});

export default Page;
