import { Button } from "../ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export default function LocationSelector() {
    return (
        <div className="mx-auto my-4">
            <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Select Location</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Available Locations</DropdownMenuLabel>
                    <DropdownMenuItem>Delhi</DropdownMenuItem>
                    <DropdownMenuItem>Gurugram</DropdownMenuItem>
                    <DropdownMenuItem>Hyderabad</DropdownMenuItem>
                    <DropdownMenuItem>Pune</DropdownMenuItem>
                    <DropdownMenuItem>Mumbai</DropdownMenuItem>
                    <DropdownMenuItem>Pune</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}