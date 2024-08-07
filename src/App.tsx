import React from "react";

import { TABS } from "./types";
import { NavBar, StartButton, Header, Main } from "./components";
import { TITLE_APP } from "./consts";

export default function App() {
  const [time, setTime] = React.useState<number>(25 * 60);
  const [isActive, setIsActive] = React.useState<boolean>(false)
  const [currentTab, setCurrentTab] = React.useState<TABS>("Pomodoro")

  React.useEffect(() => {
    let interval = undefined

    if(isActive)
      interval = setInterval(() => setTime(time - 1), 1000)
    else
      clearInterval(interval)

    return () => clearInterval(interval)
  
  }, [isActive, time])

  const onChangeTab = (newTab: TABS) => {
    const newTime = newTab === "Pomodoro" ? 25 : newTab === "Short_Break" ? 5 : 15
    setTime(newTime * 60)
    setCurrentTab(newTab)
  }

  const handleStartStop = () =>
    setIsActive(prevState => !prevState)

  return (
    <div className='bg-yellow-300 m-0 p-3 h-screen text-black'>
      <Header title={TITLE_APP}/>
      <NavBar onChangeTab={onChangeTab} currentTab={currentTab}/>
      <Main time={time} />
      <StartButton handleOnClick={handleStartStop} isActive={isActive}/>
    </div>
  )
}
