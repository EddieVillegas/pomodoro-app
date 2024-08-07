import clsx from "clsx"

import { TABS } from "../../types"
import { SHORT_BREAK, POMODOR, LONG_BREAK } from "../../consts"

type Props = {
    onChangeTab: (tab: TABS) => void
    currentTab: TABS
}

type Option = {
    text: string, title: TABS
}

const options: Option[] = [
    {text: POMODOR, title: "Pomodoro"}, 
    {text: SHORT_BREAK, title: "Short_Break"}, 
    {text: LONG_BREAK, title: "Long_Break"}
]

export const NavBar = ({ onChangeTab, currentTab }: Props) => (
    <div className="flex gap-5 justify-center font-bold my-2">
        {options.map(({title, text}) => 
            <button
                key={text}
                onClick={() => onChangeTab(title)}
                className={`${clsx(currentTab === title && 'border-white border-2')} cursor-pointer p-2 font-black`}
            >
                {text}
            </button>
        )}
    </div>
)