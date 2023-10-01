import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page = (_props) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ locale, params }) => ({
  params,
  props: {
    ...(await serverSideTranslations(locale ?? "fr", ["common", "blogs"])),
  },
});

export default Page;
