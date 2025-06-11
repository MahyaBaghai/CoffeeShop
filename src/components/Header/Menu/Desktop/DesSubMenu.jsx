import { useTranslation } from 'react-i18next';
export default function DesSubMenu({ dark }) {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`absolute top-full w-50 xl:w-61 space-y-5 py-5 px-5 shadow-black/5 rounded-2xl border-t-[3px] border-orange-300 
                     invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-in-out delay-75
                   [&>a]:block [&>a]:leading-none [&>a]:text-sm xl:[&>a]:text-base [&>a]:font-normal [&>a]:hover:font-PoppinsMedium  [&>a]:hover:text-orange-300  
                   ${
                     dark
                       ? "bg-zinc-700 [&>a]:text-white"
                       : "bg-white [&>a]:text-zinc-700"
                   } `}
      >
        {/* subMenu store section */}

        <a href="#">{t('Premium')}</a>

        <a href="#">{t('WorldClass')}</a>

        <a href="#">{t('FirstClass')}</a>

        <a href="#">{t('Capsules')}</a>

        <a href="#">{t('ZinoCoffee')}</a>
      </div>
    </>
  );
}
