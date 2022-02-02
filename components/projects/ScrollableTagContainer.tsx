import {MouseEvent, PropsWithChildren, useEffect, useRef, useState} from "react";

interface ScrollPosition {
    left: number;
    mouseX: number;
}

type CursorStyle = "cursor-default" | "cursor-grab" | "cursor-grabbing" | "cursor-pointer";

export default function ScrollableTagContainer({children}: PropsWithChildren<{}>) {
    const containerRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef<ScrollPosition>({left: 0, mouseX: 0});
    const movingRef = useRef<boolean>(false);
    const [cursorStyle, setCursorStyle] = useState<CursorStyle>("cursor-default");

    function onMouseDown(e: MouseEvent<HTMLDivElement>) {
        if (!containerRef.current) return;
        movingRef.current = true;
        positionRef.current = {
            left: containerRef.current.scrollLeft,
            mouseX: e.clientX
        }
    }

    function onMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (!containerRef.current) return;
        if (!movingRef.current) return;
        const dx = e.clientX - positionRef.current.mouseX;
        containerRef.current.scrollLeft = positionRef.current.left - dx;
    }

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const target = entry.target;
                if (target.scrollWidth > target.clientWidth) {
                    setCursorStyle("cursor-pointer");
                } else {
                    setCursorStyle("cursor-default");
                }
            }
        });
        resizeObserver.observe(container);

        return () => {
            resizeObserver.unobserve(container);
        }
    });

    return <div ref={containerRef} onMouseDown={onMouseDown} onMouseMove={onMouseMove}
                onMouseUp={() => movingRef.current = false}
                onMouseLeave={() => movingRef.current = false}
                className={`flex max-w-xs gap-2 mb-2 overflow-x-auto scrollbar-hide select-none ${cursorStyle}`}>
        {children}
    </div>
}