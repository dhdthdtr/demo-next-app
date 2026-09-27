"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";
import { contentfulClient } from "../contentful";
import {
    ContentfulLivePreviewProvider,
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { ContentfulLivePreview } from "@contentful/live-preview";

export default function Page({ params, searchParams }) {
  const searchData = use(searchParams);
  const [item, setItem] = useState(null);
  const [capabilities, setCapabilities] = useState([]);
  useEffect(() => {
    ContentfulLivePreview.init({
      locale: "en-US",
      experimental: { hideCoveredElementOutlines: false },
      enableLiveUpdates: true,
      enableInspectorMode: true,
    });
    const fetchEntry = async () => {
      const entry = await contentfulClient.getEntry(searchData.id);
      console.log(entry)
      setItem(entry);
      setCapabilities(entry?.fields?.capabilities);
    };

    fetchEntry();
  }, []);

  // 1. Live updates hook
  const output = useContentfulLiveUpdates(item);

  // 2. Inspector mode hook
  const inspectorProps = useContentfulInspectorMode({
    entryId: output?.sys?.id,
  });

  return (
    <>
      <ContentfulLivePreviewProvider
        locale="en-US"
        enableInspectorMode={true}
        enableLiveUpdates={true}
      >
        <main className="w-full pt-20 bg-background flex-1 flex flex-col">
          <div className="flex flex-col w-full">
            <div className="relative w-full max-w-[1440px] mx-auto px-gutter-mobile md:px-margin pt-space-md pb-space-xl flex flex-col gap-space-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="relative w-full aspect-[4/3] rounded-xl bg-surface-container-lowest overflow-hidden shadow-xl flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 via-transparent to-secondary-container/10 pointer-events-none"></div>

                    <Image
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Photorealistic studio shot of the AURA Pulse One flagship spatial headphones resting on an architectural dark slate pedestal. Sculpted matte aluminum earcups, plush memory foam acoustic dampers, and illuminated dynamic frequency mesh. Sleek, minimalist Japanese-Nordic design ethos with subtle indigo and cyan edge lighting against deep charcoal space."
                      id="main-product-img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkvhiQQrq_pI6Khu2zxo-XrityxSdySocN_9fwCVQVnA4gWxzMOn0aEvL6mfK5KWTXBijhuFjaPsPQUiFTWY4TgeEaF-_5Hh3qqVz5UHnp5zzhXGckHRPfd-8cKPodZdKuTZGvdFaiXbInYhomdKBozHFkVgs-H9Qqr7QWkzzd2HG31cHXNHponr0poRzg7_cXuNFEL6o3g9cG8H66H78bOweyftt68IH3rDWUMq6dKY2MwVSeFOsMOg"
                      width={600}
                      height={600}
                    />
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-space-lg bg-surface-container-low/70 backdrop-blur-xl p-space-lg rounded-xl shadow-xl">
                  <div className="flex flex-col gap-space-xs">
                    <h1
                      className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight transition-all duration-300"
                      id="product-title"
                      {...inspectorProps({ fieldId: 'title' })}
                    >
                      {output?.fields?.title}
                    </h1>
                    <p
                      className="font-body-md text-body-md text-on-surface-variant"
                      id="product-tagline"
                      {...inspectorProps({ fieldId: 'smallDescription' })}
                    >
                      {output?.fields?.smallDescription}
                    </p>
                  </div>
                  <div className="flex flex-col bg-surface-container-lowest p-space-md rounded-lg">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-space-xs">
                        <span
                          className="font-display-hero text-[38px] leading-[44px] text-on-surface font-semibold tracking-tight"
                          id="price-main"
                          {...inspectorProps({ fieldId: 'price' })}
                        >
                          ${output?.fields?.price}
                        </span>
                        <span
                          className="font-headline-sm text-headline-sm text-secondary font-medium"
                          id="price-currency"
                        >
                          USD
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch gap-space-sm pt-space-xs">
                    <button className="flex-1 bg-primary-container hover:bg-[#4338ca] text-on-primary font-label-lg text-label-lg py-3 px-space-md rounded flex items-center justify-center gap-space-sm shadow-[0_0_20px_rgba(79,70,229,0.35)] transition-all font-semibold active:scale-[0.98]">
                      <span className="material-symbols-outlined text-lg">
                        tune
                      </span>
                      <span id="cta-configure">Configure For Your Region</span>
                    </button>
                    <button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-lg text-label-lg py-3 px-space-md rounded flex items-center justify-center gap-space-xs transition-all active:scale-[0.98]">
                      <span className="material-symbols-outlined text-lg text-secondary">
                        shopping_bag
                      </span>
                      <span id="cta-add">Add to Global Cart</span>
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="fixed bottom-space-lg right-space-lg z-50 transform translate-y-24 opacity-0 transition-all duration-300 bg-surface-container-high/95 backdrop-blur-xl border border-tertiary/30 p-space-md rounded-xl shadow-2xl flex items-center gap-space-md max-w-md"
                id="cart-toast"
              >
                <div className="w-10 h-10 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">check</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-body-md font-semibold text-on-surface">
                    Added to Regional Dispatch
                  </span>
                  <span
                    className="font-body-sm text-body-sm text-outline"
                    id="toast-details"
                  >
                    AURA Pulse One (Nordic Titanium) configured for US (120V /
                    FCC).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </ContentfulLivePreviewProvider>
    </>
  );
}
