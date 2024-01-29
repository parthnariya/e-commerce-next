"use client";
import Image from "next/image";
import LeftArrowIcon from "../assets/LeftArrowIcon.svg";
import RightArrowIcon from "../assets/RightArrowIcon.svg";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type PaginationPropType = {
  hasNextPages: boolean;
};

function Pagination({ hasNextPages }: PaginationPropType) {
  const searchParams = useSearchParams();
  const pageNumber = searchParams.get("page");
  const currentPage = pageNumber ? +pageNumber : 1;

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        {currentPage !== 1 && (
          <Link
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-indigo-700 transition-all hover:bg-indigo-400 active:bg-indigo-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            href={`/?page=${currentPage - 1}`}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {currentPage - 1}
            </span>
          </Link>
        )}
        <button
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-indigo-700 transition-all hover:bg-indigo-400 bg-indigo-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {currentPage}
          </span>
        </button>
        {hasNextPages && (
          <Link
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-indigo-700 transition-all hover:bg-indigo-400 active:bg-indigo-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            href={`/?page=${currentPage + 1}`}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {currentPage + 1}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
{
  /* */
}
/* hover:text-indigo-700 */
/* border-indigo-400  */
/*  */

export default Pagination;
