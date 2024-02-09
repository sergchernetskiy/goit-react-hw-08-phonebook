import { DNA } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <DNA
      visible={true}
      height="160"
      width="160"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};
