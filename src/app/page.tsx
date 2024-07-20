import ItemsTheater from "@/components/ItemsTheater"
import PlayModel from "@/tools/models/PlayModel"

export default async function List() {
    const items = await PlayModel.get() as PlayInterface[]

    return <section className="h-min-[50%] w-2/3 border-y border-blue-300 py-10 grid grid-cols-4 gap-5">
      { items.map( item => <ItemsTheater key={item.id} {...item}/>)}
    </section>
}