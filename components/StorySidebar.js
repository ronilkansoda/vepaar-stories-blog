// StorySidebar.js
import Link from "next/link";
export default function StorySidebar({ items }) {
  return (
    <aside className="order-2 lg:order-2">
      <div>
        <h3 className="heading-1 my-0 mb-3 text-gray-900">The CapTable</h3>
        <div className="flex flex-col gap-5">
          {items.map((item, idx) => (
            <Link key={idx} href={`/${item.category}/${item.slug}`}>
              <div className="flex items-center justify-between gap-4 py-2.5 border-t border-gray-200">
                <div className="flex-1 mr-3 font-semibold text-gray-900 body">{item.title}</div>
                <img className="w-30 h-20 object-cover rounded-md" src={item.image} alt={item.title} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
