import React from "react";

type SettingsProviderProps = {
  children: React.ReactNode;
};

interface Settings {
  darkMode: boolean;
}

// interface SettingsProviderState {
//   settings: Settings;
// }

interface SettingsContextValue extends Settings {
  updateSettings: (newSettings: Partial<Settings>) => void;
}

const storage = localStorage.getItem("settings");
const storedSettings: Settings = storage
  ? JSON.parse(storage)
  : {
      darkMode:
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches,
    };

const SettingsContext = React.createContext<SettingsContextValue>({
  ...storedSettings,
  updateSettings: () => {},
});

class SettingsProvider extends React.Component<
  SettingsProviderProps,
  Settings
> {
  constructor(props: SettingsProviderProps) {
    super(props);
    this.state = storedSettings;
  }

  updateSettings = (newSettings: Partial<Settings>) => {
    this.setState(
      (prevSettings) => ({ ...prevSettings, ...newSettings }),
      () => localStorage.setItem("settings", JSON.stringify(this.state))
    );
  };

  render() {
    const contextValue: SettingsContextValue = {
      ...this.state,
      updateSettings: this.updateSettings,
    };

    return (
      <SettingsContext.Provider value={contextValue}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export { SettingsContext, SettingsProvider };
