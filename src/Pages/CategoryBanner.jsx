
export default function CategoryBanner() {
    const banners =[
        {
            id:1 , 
            image:'/images/categories/category-right.jpg' , 
            title:'Types of coffee' , 
            txt:'Combined and single origin'
        },
         {
            id:2 , 
            image:'/images/categories/category-left.jpg' , 
            title:'Instant powders' , 
            txt:'Nescafe, Hot Chocolate, Masala'
        },

      
       
    ]
  return (
    <>
      <section className="@container">
        <div className="@8xl:w-[1260px] @8xl:mx-auto @3xl:mx-10 mx-4">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 xs:gap-5 sm:gap-3 md:gap-4 xl:gap-5 my-10 2xs:my-15 md:my-18 lg:my-25 shadow-normal ">
           
              {banners.map(banner => (

                <div key={banner.id} className="relative">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="rounded-2xl z-0 max-sm:aspect-5/2"
                />
              <div className="bg-linear-to-l from-black/60 to-black/10 z-0  absolute inset-0 rounded-2xl"></div>
             <div className="absolute top-0 right-0 bottom-0 pr-2 2xs:pr-4 xs:pr-6 sm:pr-4 md:pr-5 lg:pr-8 flex flex-col items-center justify-center font-PoppinsMedium text-white z-10 space-y-1 2xs:space-y-2 lg:space-y-3">
                <div className="font-semibold 3xs:text-lg 2xs:text-xl xs:text-2xl sm:text-xl md:text-2xl lg:text-3xl ">{banner.title}</div>
                <div className="md:font-medium 2xs:font-light 3xs:text-xs 2xs:text-sm sm:text-xs md:text-sm  lg:text-base ">{banner.txt}</div>
              </div>
              </div>

              ))}

          </div>
        </div>
      </section>
    </>
  );
}
