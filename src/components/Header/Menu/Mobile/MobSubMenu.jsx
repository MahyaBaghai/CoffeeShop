
import { useTranslation } from 'react-i18next';
export default function MobSubMenu({ dark }) {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`relative flex flex-col gap-y-3 pl-4 pt-3 [&>*]:font-PoppinsRegular [&>*]:font-normal [&>*]:text-sm 
          [&_*]:active:text-orange-300 [&_*]:active:pl-2 
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
