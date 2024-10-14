import type { ChildrenType } from '@core/types';

type Props = ChildrenType;

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
