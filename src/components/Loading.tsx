import { TypeAnimation } from "react-type-animation"

const Loading = () => {
    return (
        <div className="loading">
            <div className="coffe-cup">
            </div>
            <div className="cup-handle"></div>
            <div className="loading-info">
                <TypeAnimation
                    sequence={[
                        'Brewing OS',
                        500,
                        'Brewing OS.',
                        500,
                        'Brewing OS..',
                        500,
                        'Brewing OS...',
                        500
                    ]}
                    cursor={false}
                    repeat={Infinity}
                />
            </div>
        </div>
    )
}

export default Loading