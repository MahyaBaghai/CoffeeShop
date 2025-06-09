import Logo from "../Icons/Logo"
import LogoType from "../Icons/LogoType"
export default function FooterSectionOne() {
  return (
    <>
    <div className='flex flex-col text-gray-300 pt-15 max-lg:ml-3 '>
        <div className='flex gap-x-4 mb-7 group cursor-pointer'>
            <Logo className=' w-14 h-13 group-hover:text-orange-300 transition-all'/>
            <LogoType className=' w-34 h-13 group-hover:text-orange-300 transition-all'/>

        </div>
        <div className="font-PoppinsRegular font-normal xl:text-base/8 text-sm/8">
            We aim to be a model for Iranian producers and a reference for coffee culture in Iran by being a leader in the production process, product type and quality, service, and distribution. We believe that the opinion of the people of Iran and the region should improve towards Iranian products, and we are working enthusiastically in this direction.
        </div>
    </div>
      
    </>
  )
}
