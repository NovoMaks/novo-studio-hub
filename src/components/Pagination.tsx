'use client';
import { Pagination as PaginationMui } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <PaginationMui
      count={totalPages}
      page={currentPage}
      showFirstButton
      showLastButton
      shape='rounded'
      variant='tonal'
      color='primary'
      onChange={(_, page) => createPageURL(page)}
    />
  );
};

export default Pagination;
