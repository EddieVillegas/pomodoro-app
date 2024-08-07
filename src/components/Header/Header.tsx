type Props = {
    title: string
}

export const Header = ({title}: Props) => (
    <h1 className="text-3xl font-black">{title}</h1>
)