import Image from "next/image";
import Link from "next/link";

export default function ProductList({ id, data }) {
  console.log(data);

  function saveData(e) {
    const obj = {
      id: id,
      img: data.images[0].fields.file.url
    }
    sessionStorage.setItem('productData', JSON.stringify(obj));
  }

  return (
    <>
      <Link
        href={`/${data.slug}`} onClick={() => saveData()}
      >
        <article
          className="product-card group relative flex flex-col bg-surface-container rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          data-category="audio"
        >
          <div className="relative w-full h-72 bg-surface-container-lowest overflow-hidden flex items-center justify-center p-space-md">
            <Image
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              alt="High-end studio photography of the AURA Pulse One spatial audio headphones in dark obsidian aluminum and slate acoustic fabric. Suspended against a dark minimal architectural plinth with cinematic dramatic edge lighting in cyan and indigo. Swiss modernist industrial design product render."
              src={`https:${data.images[0].fields.file.url}`}
              width={200}
              height={200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-mono">
                  {data.slug}
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                {data.title}
              </h2>
              <div className="bg-surface-container-lowest p-space-sm rounded text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                <div className="text-on-surface">{data.smallDescription}</div>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm pt-space-xs">
              <div className="flex items-baseline justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Harmonized MSRP
                  </span>
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-headline-sm text-headline-sm font-semibold text-on-surface price-val">
                      ${data.price}
                    </span>
                  </div>
                </div>
                <span className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">
                  {data.speciality}
                </span>
              </div>
              <div className="flex items-center gap-space-sm">
                <button className="flex-1 py-2 px-space-md bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary rounded font-label-lg text-label-lg font-semibold flex items-center justify-center gap-space-xs shadow-md transition-all">
                  <span>View Localized Specs</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
