import { HEADER_LOGO } from "@/lib/constants"
import Separator from "../ui/separator"
import { TypographyH1 } from "../ui/typographyH1"
import FooterOptions from "@/app/(quickCommerceStore)/components/FooterOptions"

export default function Footer() {
    return(
        <div className="flex flex-col px-8 py-4 bg-neutral-200">
            <div className="flex justify-between px-40 py-8">
                <div className="bg-orange-600 rounded-xl pr-2 h-12 flex w-40 flex-col items-center">
                    <img src={HEADER_LOGO}  className="h-12 w-40"/>
                    <p className="text-[12px] mt-2">2026 Prem's Swiggy Ltd.</p>
                </div>
                <FooterOptions />
            </div>
            <Separator />
            <div className="p-4">
                <TypographyH1 text="For better experience, download the Swiggy app now" h="1.5" color="black" />
            </div>
        </div>
    )
}