import { HEADER_LOGO } from "@/lib/constants";
import { Button } from "../ui/button";

export default function HeaderMinimal() {
    return (
        <div className="flex flex-col bg-[#ff5200] items-center">
            <div className="flex justify-between px-12 items-center h-20 w-full">
                <img className="h-12 w-40" src={HEADER_LOGO} alt="logo" />
                <div className="flex items-center">
                    <div className="font-bold text-white">
                        Swiggy Corporate
                    </div>
                    <div className="font-bold text-white ml-8">
                        Partner with us
                    </div>
                    <div className="font-bold text-white ml-8">
                        <Button className="p-6 rounded-xl">Sign in</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}