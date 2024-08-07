import { STOP, START } from "../../consts"

type Props = {
    isActive: boolean
    handleOnClick: () => void
}

export const StartButton = ({isActive, handleOnClick}: Props) => {
    return (
        <button
            className="uppercase bg-black text-white font-black p-3 w-full block rounded-lg"
            onClick={handleOnClick}
        >
            {isActive ? STOP : START}
      </button>
    )
}