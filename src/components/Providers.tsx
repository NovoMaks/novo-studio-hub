// Type Imports
import type { ChildrenType, Direction } from '@core/types';

// Context Imports
import { SettingsProvider } from '@core/contexts/settingsContext';
import ThemeProvider from '@components/theme';

// Util Imports
import { getMode, getSettingsFromCookie, getSystemMode } from '@core/utils/serverHelpers';
import { HorizontalNavProvider } from '@/@menu/contexts/horizontalNavContext';

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
    <HorizontalNavProvider>
      <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
        <ThemeProvider direction={direction} systemMode={systemMode}>
          {children}
        </ThemeProvider>
      </SettingsProvider>
    </HorizontalNavProvider>
  );
};

export default Providers;
