import Link from "next/link";
import { useTranslation } from "next-i18next";
import Card from "./card";

const Blogs = () => {
  const { t } = useTranslation("common", { useSuspense: false });

  return (
    <>
      <main>
        <h1 className={styles.title}>List of Blogs</h1>
        <ul>
          <li>
            <Link as={"/blogs/[blogId]"} href={"/blogs/1"}>
              {t("blog_1")} #1
            </Link>
          </li>
          <li>
            <Link as={"/blogs/[blogId]"} href={"/blogs/2"}>
              {t("blog_2")} #2
            </Link>
          </li>
          <li>
            <Link as={"/blogs/[blogId]"} href={"/blogs/3"}>
              {t("blog_3")} #3
            </Link>
          </li>
        </ul>
      </main>

      <Card />

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default Blogs;
