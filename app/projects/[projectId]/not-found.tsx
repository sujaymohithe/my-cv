"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathName = usePathname();
    const projectId = pathName.split("/")[2];
    return (
        <div>
            <h1>Not Found</h1>
            <p>The requested project details with Id {projectId} is not found</p>
        </div>
    )
}