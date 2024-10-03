'use client';

// Next Imports
import Link from 'next/link';

// Third-party Imports
import classnames from 'classnames';

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses';

const FooterContent = () => {
  return (
    <div
      className={classnames(
        horizontalLayoutClasses.footerContent,
        'flex items-center justify-between flex-wrap gap-4',
      )}
    >
      <p>
        <span className='text-textSecondary'>{`© ${new Date().getFullYear()}, Сделано с `}</span>
        <span>{`❤️`}</span>
        <span className='text-textSecondary'>{` `}</span>
        <Link href='https://novo-studio.ru/' target='_blank' className='text-primary uppercase'>
          Novo-studio
        </Link>
      </p>
    </div>
  );
};

export default FooterContent;
