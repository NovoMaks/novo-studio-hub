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
      <div className='flex items-center gap-4 flex-wrap'>
        <Link href='/policy' target='_blank' className='text-primary'>
          Политика обработки персональных данных
        </Link>
        <Link href='/offer' target='_blank' className='text-primary'>
          Публичная оферта
        </Link>
        <Link href='/terms' target='_blank' className='text-primary'>
          Пользовательское соглашение (лицензия)
        </Link>
        <Link href='/offer' target='_blank' className='text-primary'>
          Реквизиты
        </Link>
      </div>
    </div>
  );
};

export default FooterContent;
