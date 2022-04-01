import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

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
          className="grid h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-natgas-sec-one to-natgas-sec-two text-white"
          onClick={() => {
            setPage(getPage - 1);
            handleScroll(ref);
          }}
        >
          <ChevronLeftIcon className="m-auto h-5 w-5" />
        </div>
      )}
      <p className="m-4 rounded-full bg-natgas-azul-claro py-2 px-4 text-xl text-white">
        {getPage}
      </p>
      {length < 15 ? (
        <></>
      ) : (
        <div
          className="grid h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-natgas-sec-one to-natgas-sec-two text-white"
          onClick={() => {
            setPage(getPage + 1);
            handleScroll(ref);
          }}
        >
          <span>
            <ChevronRightIcon className="m-auto h-5 w-5" />
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
