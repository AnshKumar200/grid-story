'use client'

import LiveCanvas from "@/components/LiveCanvas"
import { useState } from "react"

export default function CanvasPage() {
    const [view, setView] = useState('canvas')

    const getButtonStyle = (buttonView: string) => {
        const baseStyle = "px-5 py-2 text-md font-semibold rounded-md transition-all duration-200 ease-in-out";
        if (view === buttonView) {
            return `${baseStyle} bg-black text-white shadow-md`;
        }
        return `${baseStyle} bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer`;
    };

    return (
        <div>
            {view === 'canvas' ? (
                <LiveCanvas
                    appView={view}
                    setAppView={setView}
                    getButtonStyle={getButtonStyle}
                />
            ) : (
            // TODO: Timelapse
                <LiveCanvas
                    appView={view}
                    setAppView={setView}
                    getButtonStyle={getButtonStyle}
                />
            )}
        </div>
    )
}
