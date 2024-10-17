// MUI Imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Type Imports
import type { ThemeColor } from '@core/types';

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar';
import prisma from '@/lib/prisma';
import Link from './Link';
import { Chip, Divider } from '@mui/material';

type DataType = {
  title: string;
  views: string;
  icon: string;
  color: ThemeColor;
};

const TopContent = async () => {
  const top = await prisma.topPost.findMany();

  return (
    <Card className='w-full h-full'>
      <CardHeader title='🔝 Наш топ' />
      <CardContent className='flex flex-col gap-3'>
        {top.map((item, i) => (
          <>
            <Link href={item.url}>
              <div key={i} className='flex items-center gap-4'>
                <CustomAvatar variant='rounded' skin='light' color='primary'>
                  <i className={item.logo} />
                </CustomAvatar>
                <div className='flex  items-center gap-4 is-full flex-wrap'>
                  <Typography
                    className='font-medium flex-1'
                    color={
                      item.type === 'solution'
                        ? 'primary'
                        : item.type === 'article'
                          ? 'info'
                          : item.type === 'util'
                            ? 'warning'
                            : 'primary'
                    }
                  >
                    {item.title}
                  </Typography>
                  {!!item.price ? (
                    <Chip
                      color='info'
                      label={
                        <Typography className='flex justify-center items-center text-sm text-white'>
                          {item.price}
                          <i className='tabler-currency-rubel text-sm' />
                        </Typography>
                      }
                    />
                  ) : (
                    <Chip color='primary' label={`Бесплатно`} />
                  )}
                </div>
              </div>
            </Link>
            {top.length - 1 !== i && <Divider />}
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopContent;
