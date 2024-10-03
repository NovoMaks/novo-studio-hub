// MUI Imports
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

// Third-party Imports
import classnames from 'classnames';

// Type Imports
import type { ThemeColor } from '@core/types';

// Data
const team = [
  {
    name: 'Зайцева Алина',
    position: 'Реклама',
    image: '/images/our-team/sophie.png',
    color: 'var(--mui-palette-primary-mainOpacity)',
  },
  {
    name: 'Новосельцев Максим',
    position: 'Разработка',
    image: '/images/our-team/paul.png',
    color: 'var(--mui-palette-info-mainOpacity)',
  },
];

// const Card = styled('div')`
//   border-color: ${(props: { color: ThemeColor }) => props.color};
//   border-start-start-radius: 90px;
//   border-start-end-radius: 20px;
//   border-end-start-radius: 6px;
//   border-end-end-radius: 6px;
// `;

const OurTeam = () => {
  return (
    <div>
      <div className='flex flex-col gap-y-4 items-center justify-center'>
        <div className='flex flex-col items-center gap-y-1 justify-center flex-wrap'>
          <div className='flex items-center gap-x-2'>
            <Typography color='text.primary' variant='h4'>
              <span className='relative z-[1] font-extrabold'>
                Наша
                <img
                  src='/images/our-team/bg-shape.png'
                  alt='bg-shape'
                  className='absolute block-end-0 z-[1] bs-[40%] is-[132%] -inline-start-[19%] block-start-[17px]'
                />
              </span>{' '}
              команда
            </Typography>
          </div>
          <Typography className='text-center'>Стань ее частью</Typography>
        </div>
      </div>
      <Grid container rowSpacing={16} columnSpacing={6} className='pbs-[100px] flex justify-center'>
        {team.map((member, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <div
              className='border overflow-visible'
              style={{
                'borderStartStartRadius': '90px',
                'borderStartEndRadius': '20px',
                'borderEndStartRadius': '6px',
                'borderEndEndRadius': '6px',
                'borderColor': member.color,
              }}
              color={member.color as ThemeColor}
            >
              <div className='flex flex-col items-center justify-center p-0'>
                <div
                  className={classnames(
                    'flex justify-center is-full mli-auto text-center bs-[189px] relative overflow-visible',
                  )}
                  style={{
                    backgroundColor: member.color,
                    'borderStartStartRadius': '90px',
                    'borderStartEndRadius': '20px',
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className='bs-[240px] absolute block-start-[-50px]'
                  />
                </div>
                <div className='flex flex-col gap-3 p-5 is-full'>
                  <div className='text-center'>
                    <Typography variant='h5'>{member.name}</Typography>
                    <Typography color='text.disabled'>{member.position}</Typography>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurTeam;
