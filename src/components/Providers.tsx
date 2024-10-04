// Type Imports
import type { ChildrenType, Direction } from '@core/types';

// Context Imports
import { SettingsProvider } from '@core/contexts/settingsContext';
import ThemeProvider from '@components/theme';

// Util Imports
import { getMode, getSettingsFromCookie, getSystemMode } from '@core/utils/serverHelpers';
import { VerticalNavProvider } from '@/@menu/contexts/verticalNavContext';
import { HorizontalNavProvider } from '@/@menu/contexts/horizontalNavContext';
import { NextAuthProvider } from '@/contexts/nextAuthProvider';

type Props = ChildrenType & {
  direction: Direction;
};

const Providers = (props: Props) => {
  // Props
  const { children, direction } = props;

  // Vars
  const mode = getMode();
  const settingsCookie = getSettingsFromCookie();
  const systemMode = getSystemMode();

  return (
    <NextAuthProvider>
      <HorizontalNavProvider>
        <VerticalNavProvider>
          <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
            <ThemeProvider direction={direction} systemMode={systemMode}>
              {children}
            </ThemeProvider>
          </SettingsProvider>
        </VerticalNavProvider>
      </HorizontalNavProvider>
    </NextAuthProvider>
  );
};

export default Providers;
