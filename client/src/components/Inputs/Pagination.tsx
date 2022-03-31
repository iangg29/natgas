import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

type Props = {
  length: number;
  getPage: any;
  setPage: any;
  ref: any;
};

const Pagination = ({ length, getPage, setPage, ref }: Props): JSX.Element => {
  const handleScroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex items-center justify-center">
      {getPage <= 1 ? (
        <></>
      ) : (
        <div
          className="mr-2 h-[60px] w-[60px] rounded-full bg-gradient-to-r from-natgas-sec-one to-natgas-sec-two py-4 text-white"
          onClick={() => {
            setPage(getPage - 1);
            handleScroll(ref);
          }}
        >
          <ChevronLeftIcon className="m-auto h-8 w-8" />
        </div>
      )}
      <p className="m-4 text-xl">{getPage}</p>
      {length < 15 ? (
        <></>
      ) : (
        <div
          className="h-[60px] w-[60px] rounded-full bg-gradient-to-r from-natgas-sec-one to-natgas-sec-two py-4 text-white"
          onClick={() => {
            setPage(getPage + 1);
            handleScroll(ref);
          }}
        >
          <ChevronRightIcon className="m-auto h-8 w-8" />
        </div>
      )}
    </div>
  );
};

export default Pagination;
