type Props = {
    time: number
}

export const Main = ({ time }: Props) => {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`
  return (
    <div 
    className="bg-white p-1 rounded-2xl text-8xl my-3 h-40 flex justify-center items-center font-bold"
    >
    {formattedTime}
  </div>
)
}