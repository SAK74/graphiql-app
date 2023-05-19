import { useQuery, gql } from '@apollo/client';
import { useQueryContext } from './QueryProvider';
import { FC } from 'react';
import ReactJson from 'react-json-view';
import { ReactComponent as Spinner } from '../../assets/spinner.svg';
const RickResponse: FC<{ query: string }> = ({ query }) => {
  const {
    request: { variables },
  } = useQueryContext();
  const { data, loading, error } = useQuery(gql(query), { variables });

  const content = loading ? (
    <div className="flex justify-center items-center" role="status">
      <Spinner
        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </div>
  ) : error ? (
    <div>{JSON.stringify(error, null, 2)}</div>
  ) : (
    <div>
      <ReactJson src={data} />
    </div>
  );
  return <>{content}</>;
};

export const ResponseComponent = () => {
  const {
    request: { query },
  } = useQueryContext();
  const content = query ? <RickResponse query={query} /> : null;
  return (
    <div className="">
      <div className="text-lg font-semibold p-2">Response</div>
      {content}
    </div>
  );
};
