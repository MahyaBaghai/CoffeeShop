
import { useTranslation } from 'react-i18next';
export default function MobSubMenu({ dark }) {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`relative flex flex-col gap-y-3 pl-4 pt-3 [&>*]:font-PoppinsRegular [&>*]:font-normal [&>*]:text-sm 
          [&_*]:active:text-orange-300 [&_*]:active:pl-2 [&_*]:active:relative [&_*]:active:after:content-[''] [&_*]:active:after:block
          [&_*]:active:after:w-1 [&_*]:active:after:h-1 [&_*]:active:after:absolute [&_*]:active:after:rounded-full [&_*]:active:after:left-0
          [&_*]:active:after:top-0 [&_*]:active:after:bottom-0 [&_*]:active:after:m-auto [&_*]:active:after:bg-orange-300
           ${dark ? "[&>*]:text-white" : "[&>*]:text-zinc-600"}`}
      >
        <a href="#">{t('Premium')}</a>

        <a href="#">{t('WorldClass')}</a>

        <a href="#">{t('FirstClass')}</a>

        <a href="#">{t('Capsules')}</a>

        <a href="#">{t('ZinoCoffee')}</a>
      </div>
    </>
  );
}
