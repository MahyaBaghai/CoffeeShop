import { MdKeyboardArrowRight } from "react-icons/md";
import BlogCards from "../components/Cards/BlogCards";
import blogItems from "../Utility/BlogItems";
import { useTranslation } from "react-i18next";

export default function Blog({ dark }) {
  const { t } = useTranslation();

  return (
    <>
      <section className="@container">
        <div className="@8xl:w-[1260px] @8xl:mx-auto @3xl:mx-10 mx-4">
          {/* title of blog */}
          <div
            className={`flex justify-between items-center md:pb-12 pb-6 ${
              dark ? "text-white" : "text-zinc-700"
            }`}
          >
            <div className="sectionTitle "> {t("BlogArticle")} </div>
            <div className="sectionLink pb-2">
              <div className="hidden md:block">{t("BlogViewAllArticles")}</div>
              <div className="md:hidden block ">{t("ViewAll")} </div>
              <MdKeyboardArrowRight className="sectionLinkIcon" />
            </div>
          </div>

          {/* body of blog */}

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
            <BlogCards dark={dark} />
          </div>
        </div>
      </section>
    </>
  );
}
