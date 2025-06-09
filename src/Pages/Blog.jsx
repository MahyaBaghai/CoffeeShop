import { MdKeyboardArrowRight } from "react-icons/md";
import BlogCards from "../components/Cards/BlogCards";
import blogItems from "../Utility/BlogItems";
export default function Blog({ dark }) {
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
            <div className="sectionTitle "> Reading content </div>
            <div className="sectionLink">
              <div className="hidden md:block">View all content</div>
              <div className="md:hidden block">View all </div>
              <MdKeyboardArrowRight className="sectionLinkIcon" />
            </div>
          </div>

          {/* body of blog */}
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
            {blogItems.map(blogItem => (

            <BlogCards dark={dark} key={blogItem.id} {...blogItem}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
