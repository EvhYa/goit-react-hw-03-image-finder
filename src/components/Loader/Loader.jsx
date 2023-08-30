import { TailSpin } from 'react-loader-spinner';

export function Loader() {
  return (
    <TailSpin
      height="60"
      width="60"
      color="#303f9f"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        justifyContent: 'center',
      }}
      visible={true}
    />
  );
}
