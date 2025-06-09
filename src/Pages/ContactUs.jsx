import { VscCircleSmallFilled } from "react-icons/vsc";
import { LuPhone } from "react-icons/lu";
export default function ContactUs({ dark }) {
  return (
    <>
      <section className="@container">
        <div className="@8xl:w-[1260px] @8xl:mx-auto @3xl:mx-10 mx-4">
          <div className="my-28 flex md:flex-row flex-col justify-center items-center md:gap-6 gap-10">
            <div className="w-[296px] h-[305px] shrink-0 ">
              <img src="/images/contact.png" alt="One of the best coffees" 
              className="h-full w-full  mx-auto"/>
            </div>
            <div className={`${dark ? "text-white" : "text-zinc-700"} `}>
              <div className="sectionTitle"> One of the best coffees!</div>
              <div className="sectionSubtitle">
                Ask us about the quality of coffee...
              </div>

              <div className={`flex my-5 ${dark ? "text-gray-100" : "text-zinc-700"}`} >
                <VscCircleSmallFilled className="w-3 h-3" />
                <VscCircleSmallFilled className="w-3 h-3" />
                <VscCircleSmallFilled className="w-3 h-3" />
              </div>

              <div className="font-PoppinsRegular font-normal lg:text-lg md:text-base text-sm italic">
                Feel our warm and cozy atmosphere, where everyone can find
                aromatic coffee and try our delicious desserts that go perfectly
                with hot coffee. Our stylish interior and friendly staff will
                make your day!
              </div>
              <div className="inline-flex items-center gap-x-2 text-orange-300 border-2 border-orange-300 rounded-full px-5 py-2 mt-6">
                <LuPhone className="rotate-y-180 md:w-6 md:h-6 w-5 h-5"/>
                <div className="font-PoppinsRegular font-normal lg:text-lg md:text-base text-sm">Ordering</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
