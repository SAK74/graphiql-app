import { useTranslation } from 'react-i18next';
import { useQueryContext } from './QueryProvider';
import RequestArea from './RequestArea';

export const RequestEditor = () => {
  const { runRequest } = useQueryContext();
  const {} = useTranslation();
  const { t } = useTranslation();
  return (
    <div className="rounded-t-lg shadow-md p-4">
      <div className="flex justify-between">
        <p className="text-lg font-semibold p-2">{t('mainPage.request')}</p>
        <button
          onClick={runRequest}
          className="py-2 px-3 hover:bg-light-blue hover:text-black text-white h-10 bg-dark-blue rounded-md"
        >
          {t('mainPage.runButton')}
        </button>
      </div>
      <RequestArea />
    </div>
  );
};
