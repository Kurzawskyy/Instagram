import { Content } from "./Content";

export const Background = () => {
    console.log('background render');

    return (
        // basic background div
        <div className="background"> 
            <Content />
        </div>
    )
}