import { Char } from "./Char"

export const Chars = ({chars}) => {

    return (
        <div className="items">
            {
                (chars.map(
                    char => <Char key={char.id} {...char} />
                ))
            }
        </div>

    )
}