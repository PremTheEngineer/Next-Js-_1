
import Link from "next/link"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { FALLBACK_URL } from "@/lib/constants"

interface FeatureCardProps {
    imgURL: string,
    title: string,
    action: string,
    actionURL: string,
    description: string,
    featured?: string,
}

export function FeatureCard(props: FeatureCardProps) {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <img
                src={props.imgURL || FALLBACK_URL}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover rounded-xl"
            />
            <CardHeader>
                {props.featured && (<CardAction>
                    <Badge variant="secondary">{props.featured}</Badge>
                </CardAction>)}
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>
                    {props.description}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">
                    <Link href={props.actionURL}>{props.action}</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
