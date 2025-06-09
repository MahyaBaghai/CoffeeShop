

export default function FooterSectionTwo() {
  const footerItems = [
    "Privacy",
    "FAQs",
    "Return of goods",
    "Guarantees",
    "Terms of Use",
    "Job opportunities",  
    "order registration",
    "Contact us",
  ];
 
  return (
    <>
      <div className="flex flex-col max-lg:ml-3 max-lg:mr-85 max-md:mr-60 max-sm:mr-35 max-xs:mr-15 mr-0 lg:pt-22 pt-12 ">
        <div className="font-PoppinsMedium text-xl font-medium text-white mb-7">
            Quick access</div>
        <div className="flex flex-col flex-wrap max-h-[172px] gap-y-5 xl:gap-x-5 lg:gap-x-2  font-PoppinsRegular font-normal xl:text-base text-sm text-gray-300 ">
            {footerItems.map((footerItem,index) => (
                <div key={index} className="flex gap-x-2 items-center group cursor-pointer transition-all">
                    <div className="w-2 h-1 bg-current rounded-full group-hover:bg-orange-300"></div>
                    <span className=" group-hover:text-orange-300">{footerItem}</span>
                </div>
            ))}
        
        </div>
      </div>
    </>
  );
}
