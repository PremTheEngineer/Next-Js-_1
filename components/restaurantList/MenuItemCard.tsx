import { MenuItem } from "@/lib/mockData";

function MenuItemCard({
  itemList,
  genre,
  vegOnly,
}: {
  itemList: MenuItem[];
  genre: string;
  vegOnly: boolean;
}) {
  const filteredItems = vegOnly
    ? itemList.filter((item) => item.isVeg)
    : itemList;
  return (
    <div className="w-full px-8">
      <p className="text-center font-extrabold text-2xl">
        {genre.toUpperCase()}
      </p>
      <div className="flex justify-between font-bold text-xl">
        <p>Item</p>
        <p>Price</p>
      </div>
      <div>
        {filteredItems?.map((item) => {
          return (
            <div key={item.id} className="flex justify-between" id={item.id}>
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuItemCard;
