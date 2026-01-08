import { notFound } from "next/navigation";

export default async function ProjectDetails({ params }: {
    params: Promise<{ projectId: string }>
}) {
    const productId = (await params).projectId;
    if (parseInt(productId) > 3) {
        notFound();
    }
    return (<p>This is project details {productId}</p>)
}