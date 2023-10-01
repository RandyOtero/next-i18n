import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

const Blogs = dynamic(() => import("../../components/Blogs"), { ssr: false });

const Page = (_props) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Blogs />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "fr", ["common", "blogs"])),
  },
});

export default Page;
