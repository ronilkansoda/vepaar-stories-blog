// StorySidebar.js
import Link from "next/link";
import Image from "next/image";

export default function StorySidebar({ items }) {
  return (
    <aside className="order-2 lg:order-2">
      <div>
        <h3 className="heading-1 my-0 mb-6 text-gray-900">The CapTable</h3>
        <div className="flex flex-col gap-2">
          {items.map((item, idx) => (
            <Link key={idx} href={`/${item.category}/${item.slug}`}>
              <div className="flex items-center justify-between gap-4 py-2 border-t border-gray-200">
                <div className="flex-1 font-semibold sidebar-subheading">{item.title}</div>
                <div className="w-38 h-24 relative flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
