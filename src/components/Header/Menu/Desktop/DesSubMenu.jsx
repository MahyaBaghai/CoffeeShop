
export default function DesSubMenu({ dark }) {
  return (
    <>
      <div
        className={`absolute top-full w-55 xl:w-61 space-y-5 py-5 px-5 shadow-black/5 rounded-2xl border-t-[3px] border-orange-300 
                     invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-in-out delay-75
                   [&>a]:block [&>a]:leading-none [&>a]:text-sm xl:[&>a]:text-base [&>a]:font-normal [&>a]:hover:font-PoppinsMedium  [&>a]:hover:text-orange-300  
                   ${
                     dark
                       ? "bg-zinc-700 [&>a]:text-white"
                       : "bg-white [&>a]:text-zinc-700"
                   } `}
      >
        {/* subMenu store section */}

        <a href="#">Specialty coffee</a>

        <a href="#">Special on a global level</a>

        <a href="#">Premium coffee</a>

        <a href="#">Commercial compounds</a>

        <a href="#">Coffee capsules</a>

        <a href="#">Brazilian Zino Coffee</a>
      </div>
    </>
  );
}
