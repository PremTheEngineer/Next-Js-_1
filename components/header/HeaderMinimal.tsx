import { HEADER_LOGO, HOME, INSTAMART_PAGE } from "@/lib/constants";
import Link from "next/link";

export default function HeaderMinimal() {
    return (
        <div className="flex flex-col bg-[#ff5200] items-center">
            <div className="flex justify-between px-12 items-center h-20 w-full">
                <Link href={HOME()}> <img className="h-12 w-40" src={HEADER_LOGO} alt="logo" /> </Link>
                <div className="flex items-center">
                    <div className="font-bold text-white">
                        Swiggy Corporate
                    </div>
                    <div className="font-bold text-white ml-8">
                        <Link href={INSTAMART_PAGE()}>Instamart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}