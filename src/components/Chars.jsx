import { Char } from "./Char"

export const Chars = ({chars}) => {

    return (
        <div className="items">
            {
                chars ? (chars.map(
                    char => <Char key={char.id} {...char} />
                )) : <h4>Not Found</h4>
            }
        </div>

    )
}