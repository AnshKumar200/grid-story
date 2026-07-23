type Props = {
    dir: string;
}

export default function CubeAnimation({ dir }: Props) {
    const blockAni =
        dir === "tb" ? "animate-block-tb" :
            dir === "bt" ? "animate-block-bt" :
                dir === "rl" ? "animate-block-rl" :
                    dir === "lr" ? "animate-block-lr" :
                        "";

    const isVertical = dir === "tb" || dir === "bt";

    return (
        <div className="absolute -z-1 top-0 left-0">
            {isVertical ? (
                <div
                    className={`absolute left-1/2 -translate-x-1/2 h-screen w-0 border-r-2 border-dashed `}
                />
            ) : (
                <div
                    className={`absolute top-1/2 -translate-y-1/2 w-screen h-0 border-b-2 border-dashed`}
                />
            )}
            <div className={`relative size-7 border-2 z-10 bg-white ${blockAni}`} />
        </div>
    );
}


