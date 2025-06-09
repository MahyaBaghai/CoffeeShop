

export default function MobSubMenu({ dark }) {
  return (
    <>
      <div
        className={`relative flex flex-col gap-y-3 pl-7 pt-3 [&>*]:font-PoppinsRegular [&>*]:font-normal [&>*]:text-sm 
          [&_*]:active:text-orange-300 [&_*]:active:pl-2 [&_*]:active:relative [&_*]:active:after:content-[''] [&_*]:active:after:block
          [&_*]:active:after:w-1 [&_*]:active:after:h-1 [&_*]:active:after:absolute [&_*]:active:after:rounded-full [&_*]:active:after:left-0
          [&_*]:active:after:top-0 [&_*]:active:after:bottom-0 [&_*]:active:after:m-auto [&_*]:active:after:bg-orange-300
           ${dark ? "[&>*]:text-white" : "[&>*]:text-zinc-600"}`}
      >
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
