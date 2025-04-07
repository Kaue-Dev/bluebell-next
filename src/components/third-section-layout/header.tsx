import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

const tabsContent = [
  { title: "Tudo", value: "tudo" },
  { title: "Apartamentos", value: "apartamentos" },
  { title: "Casas", value: "casas" },
  { title: "Terrenos", value: "terrenos" },
]

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-fit">
      <h1 className="text-5xl text-bluebell-blue/80 font-semibold">Explore as oportunidades em destaque</h1>
      <Tabs>
        <TabsList>
          {tabsContent.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="text-bluebell-blue/60 font-semibold text-lg cursor-pointer"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}