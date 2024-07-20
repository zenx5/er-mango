import SellModel from "@/tools/models/SellModel";
import Link from "next/link";


export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params
    const order = await SellModel.get(id) as SellInterface

    return (
        order && <div className="flex flex-col gap-4 p-10 bg-white rounded">
            <h1 className="text-lg font-bold">Order {id}</h1>
            <div className="w-full flex flex-col gap-2 my-4">
                <span className="flex flex-row justify-between">
                    <span className="text-lg font-bold">Obra:</span> {order.play}</span>
                <span className="flex flex-row justify-between">
                    <span className="text-lg font-bold">Sala:</span> {order.place}</span>
                <span className="flex flex-row justify-between">
                    <span className="text-lg font-bold">Asientos:</span> {order.seats}</span>
                <span className="flex flex-row justify-between">
                    <span className="text-lg font-bold">Asientos:</span> {Number(order.seats) * 100} $</span>
            </div>
            <div>
                <Link href="/" className="text-center mx-auto underline">Ir a Home</Link>
            </div>
        </div>
    );
}