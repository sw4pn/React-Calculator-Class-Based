import React from "react";
import { SettingsContext } from "./context/SettingsContext";

interface Props {}
type State = {
  darkMode?: boolean;
};

class App extends React.Component<Props, State> {
  static contextType = SettingsContext;
  prevDarkMode: boolean | undefined;

  toggleDarkMode = (darkMode: boolean) => {
    document.documentElement.classList.toggle("dark", darkMode);
  };

  changeMode = () => {
    const { darkMode, updateSettings } = this.context;
    updateSettings({ darkMode: !darkMode });
  };

  componentDidMount(): void {
    const { darkMode } = this.context;
    this.prevDarkMode = darkMode;
    this.toggleDarkMode(darkMode);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { darkMode } = this.context;
    if (darkMode !== this.prevDarkMode) {
      this.toggleDarkMode(darkMode);
      this.prevDarkMode = darkMode;
    }
  }

  render(): React.ReactNode {
    const { darkMode } = this.context;
    return (
      <>
        <h1>React Calculator</h1>
        {/* container for calculator */}
        <div className=" w-full h-full flex justify-center items-center">
          <div className="bg-red-400 max-w-md mt-20">
            <div className="block">DarkMode: {darkMode ? "On" : "Off"}</div>
            <button
              onClick={this.changeMode}
              className="m-5 p-2 bg-primary-400 border hover:cursor-pointer">
              Change Theme
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
