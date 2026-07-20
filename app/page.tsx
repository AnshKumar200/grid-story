import CubeAnimation from "@/components/CubeAnimation";
import GridEffect from "@/components/GridEffect";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex-1 flex flex-col justify-center md:p-30">
            <GridEffect blink={true} />
            <div className="w-full flex flex-col gap-9 z-4 max-md:items-center">
                <div>
                    <div className="absolute -translate-y-7 left-0 max-md:hidden">
                        <CubeAnimation dir="lr" />
                    </div>
                    <div className="text-6xl sm:text-7xl md:text-8xl font-medium">Grid Story</div>
                    <div className="absolute translate-y-2 left-0 max-md:hidden">
                        <CubeAnimation dir="rl" />
                    </div>
                    <div className="absolute top-0 left-20 max-md:hidden">
                        <CubeAnimation dir="tb" />
                    </div>
                    <div className="absolute top-0 left-145 max-md:hidden">
                        <CubeAnimation dir="bt" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-3xl sm:text-4xl md:text-5xl">A Million Pixels.</div>
                    <div className="text-3xl sm:text-4xl md:text-5xl">One Shared Story.</div>
                </div>
                <Link href='canvas' className="p-4 bg-gray-300 w-fit rounded-xl md:text-3xl flex gap-3 items-center text-2xl">
                    <div>Go To Canvas!</div>
                    <ChevronRight />
                </Link>
                <div className="absolute left-0 translate-y-87 max-md:hidden">
                    <CubeAnimation dir="rl" />
                </div>
            </div>
        </div>
    );
}
