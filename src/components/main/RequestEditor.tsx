import { useQueryContext } from './QueryProvider';
import RequestArea from './RequestArea';

export const RequestEditor = () => {
  const { runRequest } = useQueryContext();
  return (
    <div className="rounded-t-lg shadow-md p-4">
      <div className="flex justify-between">
        <p className="text-lg font-semibold p-2">Request</p>
        <button
          onClick={runRequest}
          className="py-2 px-3 hover:bg-light-blue hover:text-black text-white h-10 bg-dark-blue rounded-md"
        >
          Run
        </button>
      </div>
      <RequestArea />
    </div>
  );
};
