'use client';

// Next Imports
import { redirect, usePathname } from 'next/navigation';

const BuyPostRedirect = ({ url }: { url: string }) => {
  const pathname = usePathname();
  return redirect(`${url}&redirectTo=${pathname}`);
};

export default BuyPostRedirect;
