import { useAuth } from "@/context/authContext"

export default function Main() {
    const { user } = useAuth()

    return (
        <div>
            <h1>Main Page</h1>
        </div>
    )
}