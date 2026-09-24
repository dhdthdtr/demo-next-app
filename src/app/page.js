"use client"

import Image from "next/image";
import { ContentfulLivePreview } from '@contentful/live-preview';
import { ContentfulLivePreviewProvider, useContentfulLiveUpdates, useContentfulInspectorMode  } from '@contentful/live-preview/react';
import { CMA_Client, contentfulClient } from './contentful';
import { useEffect, useState } from 'react';

export default function Home() {
  const [entry, setEntry] = useState(null);
  const [sub, setSub] = useState(null);

  useEffect(() => {
    ContentfulLivePreview.init({ 
      locale: 'en-US', 
      experimental: { hideCoveredElementOutlines: false },
      enableLiveUpdates: true,
      enableInspectorMode: true
    });

    contentfulClient
      .getEntry('7jKfXoMun0IlrXDUtl1h40')
      .then((data) => {
        console.log(data)
        setEntry(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    contentfulClient
      .getEntry('61wHmuSJPRUKaCn5pa6z6J')
      .then((data) => {
        console.log(data)
        setSub(data);
      })
      .catch(console.error);
  }, []);

  // 1. Live updates hook
  const output = useContentfulLiveUpdates(entry);
  const subOutput = useContentfulLiveUpdates(sub);

  // 2. Inspector mode hook
  const inspectorProps = useContentfulInspectorMode({ entryId: output?.sys?.id });
  const subInspectorProps = useContentfulInspectorMode({ entryId: subOutput?.sys?.id });

  return (
    <>
      <header
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
    >
      <div
        className="h-20 w-full px-gutter-mobile md:px-margin flex items-center justify-between gap-space-md"
      >
        <div className="flex items-center gap-space-lg">
          <div className="flex items-center gap-space-sm">
            <Image
              width={32}
              height={32}
              alt="AURA Global Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XrdoPibmxagOBilta1p8bUqREQhjy5V87aN5Bb2Ax9CGUFxWbbuwr_2cBiR_Sw--iOSxjTRrXWs0azMToTliMuBSCOa7wiUhGp3unxiCCEy80AfvXinYtd6OeiWkR9hAxJQm5TOF95cQ4ncX1Ii1QaHGe7b7Sb3dFh9eZSIXGbr5hb_y04oOf3qwNUF9tB9oOdTCizyzcFQr5h4gZnx_xZ-dtorKkfSVOIGqwTIN5WHJxy-NIj3XHlFKDD"
            />
            <div className="flex flex-col">
              <span
                className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-semibold"
                >AURA</span
              ><span
                className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant"
                >Global Intl</span
              >
            </div>
          </div>
          <div
            className="hidden lg:flex items-center bg-surface-container-high rounded-full px-space-md py-space-xs gap-space-sm shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-space-xs cursor-pointer">
              <span className="text-body-md">🇺🇸</span
              ><span className="font-label-md text-label-md text-on-surface"
                >English (US)</span
              ><span
                className="material-symbols-outlined text-label-md text-outline"
                >expand_more</span
              >
            </div>
            <span className="text-outline-variant font-body-sm text-body-sm"
              >/</span
            >
            <div
              className="flex items-center gap-space-xs cursor-pointer font-label-md text-label-md text-secondary"
            >
              <span className="font-Noto Sans">USD $</span
              ><span
                className="material-symbols-outlined text-label-md text-outline"
                >unfold_more</span
              >
            </div>
            <div
              className="flex items-center gap-space-xs bg-surface-container-highest px-space-sm py-0.5 rounded-full cursor-pointer"
            >
              <span
                className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant"
                >LTR</span
              ><span
                className="material-symbols-outlined text-label-sm text-outline"
                >swap_horiz</span
              >
            </div>
          </div>
          <nav
            className="hidden xl:flex items-center gap-space-sm"
            data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_20px_rgba(79,70,229,0.35)]"
          >
            <a
              aria-current="page"
              className="px-space-md py-space-sm transition-all bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_20px_rgba(79,70,229,0.35)]"
              data-path="catalog-showcase"
              href="#"
              >Catalog Showcase</a
            ><a
              className="px-space-md py-space-sm font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-lg transition-all"
              data-path="product-detail"
              href="#"
              >Product Detail</a
            ><a
              className="px-space-md py-space-sm font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-lg transition-all"
              data-path="regional-locale-admin"
              href="#"
              >Regional &amp; Locale Admin</a
            >
          </nav>
        </div>
        <div className="flex items-center gap-space-md">
          <div
            className="hidden sm:flex items-center bg-surface-container-lowest rounded-lg px-space-md py-space-xs gap-space-sm w-48 md:w-64"
          >
            <span
              className="material-symbols-outlined text-on-surface-variant text-label-lg"
              >search</span
            ><input
              className="bg-transparent w-full text-on-surface placeholder:text-outline focus:outline-none font-body-sm text-body-sm"
              placeholder="Search SKU / 検索 / بحث..."
              readOnly=""
              type="text"
            />
          </div>
          <div
            className="relative flex items-center justify-center cursor-pointer p-space-xs text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-headline-sm"
              >notifications</span
            ><span
              className="absolute -top-1 -right-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-space-xs rounded-full min-w-[1.125rem] text-center"
              >3</span
            >
          </div>
          <div className="flex items-center gap-space-sm pl-space-xs">
            <div className="relative">
              <Image
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt4Zha9Baxtu72MXnbxU4KRBvN4k3ubQYvzbM33H6i65L5brUBO4Sa7F_DHGFMfAPYS1wtZtfcU2AsrggFemAU2yMa1202zLvlpnsltjZDaE7VoFFavPEo_jptxa-G0iP8IX_KgR_lFuq1kIldLQMa1KmCDojwD5iIb65MV1TkGoBH3CJxbOS0nuG7tVj41SkhAM6_UKokw3ZeVsMb6amCHMr2IPyB7_M0uV5fgTWNHHut8PCb7oXEWQ"
                width={32}
                height={32}
              /><span
                className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-tertiary rounded-full ring-2 ring-surface"
              ></span>
            </div>
            <div className="hidden md:flex flex-col">
              <span
                className="font-label-md text-label-md text-on-surface leading-tight"
                >Elena Rostova</span
              ><span
                className="font-label-sm text-label-sm text-secondary tracking-wide"
                >Lead Localizer</span
              >
            </div>
          </div>
        </div>
      </div>
    </header>
    <main className="w-full pt-20 bg-background flex-1 flex flex-col">
      <div className="flex flex-col w-full">
        <section
          className="relative w-full px-gutter-mobile md:px-margin py-space-xl overflow-hidden bg-surface-container-low"
        >
          <div
            className="absolute -top-32 -right-32 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"
          ></div>
          <div
            className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none"
          ></div>
          <div
            className="relative z-10 max-w-7xl mx-auto flex flex-col gap-space-lg"
          >
            <div className="flex flex-col gap-space-xs">
              <div
                className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold"
              >
                <span className="material-symbols-outlined text-label-sm"
                  >public</span
                >
                <span>AURA Polyglot Precision Hardware Catalog</span>
              </div>
              <h1
                className="font-display-hero text-display-hero md:text-display-hero text-on-surface tracking-tight leading-none mt-space-xs"
              >
                Crafted for the Global Everyday
              </h1>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs max-w-4xl"
              >
                <div
                  className="flex items-start gap-space-sm bg-surface-container/60 p-space-sm rounded-lg backdrop-blur-sm shadow-sm"
                >
                  <p
                    className="font-body-md text-body-md text-on-surface-variant leading-snug"
                  >
                    Design that enriches everyday life around the world. A harmony of sound and light, honed to perfection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full px-gutter-mobile md:px-margin py-space-xl bg-background"
        >
          <div className="max-w-7xl mx-auto">
            <div
              className="flex items-center justify-between mb-space-lg pb-space-xs"
            >
              <div className="flex items-center gap-space-sm">
                <span
                  className="font-headline-md text-headline-md text-on-surface font-semibold"
                  >Precision Hardware Collection</span>
              </div>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
              id="product-catalog-grid"
            >
              <article
                className="product-card group relative flex flex-col bg-surface-container rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                data-category="audio"
              >
                <div
                  className="absolute top-space-md left-space-md z-20 flex flex-wrap items-center gap-space-xs"
                >
                  <span
                    className="px-space-sm py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold tracking-wider uppercase"
                    >Global Best-Seller</span
                  >
                </div>
                <div className="absolute top-space-md right-space-md z-20">
                  <span
                    className="font-label-sm text-label-sm bg-surface-container-highest/90 text-secondary px-space-xs py-0.5 rounded font-mono"
                    >100V-240V Multi-Plug</span
                  >
                </div>
                <div
                  className="relative w-full h-72 bg-surface-container-lowest overflow-hidden flex items-center justify-center p-space-md"
                >
                  <Image
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    alt="High-end studio photography of the AURA Pulse One spatial audio headphones in dark obsidian aluminum and slate acoustic fabric. Suspended against a dark minimal architectural plinth with cinematic dramatic edge lighting in cyan and indigo. Swiss modernist industrial design product render."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1H1pa5wDw9Q2BgQ1xLRD_V_aumrV7ndqleiUh3rVY8idU9tRqTkZgBIQRR603V6jYrD3tw1SeceaCxDzLDTazLU3h5VNzCbicQHnBTEeZD9AtkUD8yNZYsWcy-NomcIcPniNYY17j1Lg-qnlxFv2A5iY6d90lSoMvrwWMYIkJ5ZWt5xb-oF9UwaY5nhehD2s-8GCAqndiS2oDX3cz2D4U4XR62bFd76H3vUwVW7EOA18_DGrHqUNwOg"
                    width={200}
                    height={200}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-60"
                  ></div>
                </div>
                <div
                  className="p-space-lg flex flex-col flex-1 justify-between gap-space-md"
                >
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-mono"
                        >SKU-AURA-PLS-01</span
                      >
                      <div className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="EN Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="JA Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="DE Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="FR Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="AR Ready"
                        ></span>
                      </div>
                    </div>
                    <h2
                      className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors"
                    >
                      AURA Pulse One — Spatial Audio Headset
                    </h2>
                    <div
                      className="bg-surface-container-lowest p-space-sm rounded text-on-surface-variant font-body-sm text-body-sm leading-relaxed"
                    >
                      <div className="text-on-surface">
                        40mm Beryllium acoustic drivers with real-time room
                        boundary scanning.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <div className="flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span
                          className="font-label-sm text-label-sm text-outline uppercase tracking-wider"
                          >Harmonized MSRP</span
                        >
                        <div className="flex items-baseline gap-space-xs">
                          <span
                            className="font-headline-sm text-headline-sm font-semibold text-on-surface price-val"
                            data-eur="€329"
                            data-jpy="¥52,000"
                            data-sar="﷼1,310"
                            data-usd="$349"
                            >$349</span
                          >
                          <span
                            className="font-label-sm text-label-sm text-outline tax-subtext"
                            >excl. state tax</span
                          >
                        </div>
                      </div>
                      <span
                        className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant"
                        >Low Latency 14ms</span
                      >
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <button
                        className="flex-1 py-2 px-space-md bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary rounded font-label-lg text-label-lg font-semibold flex items-center justify-center gap-space-xs shadow-md transition-all"

                      >
                        
                        <span>View Localized Specs</span>
                      </button>
                      
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="product-card group relative flex flex-col bg-surface-container rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                data-category="living"
              >
                <div
                  className="absolute top-space-md left-space-md z-20 flex flex-wrap items-center gap-space-xs"
                >
                  <span
                    className="px-space-sm py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold tracking-wider uppercase"
                    >PSE &amp; CE Certified</span
                  >
                </div>
                <div className="absolute top-space-md right-space-md z-20">
                  <span
                    className="font-label-sm text-label-sm bg-surface-container-highest/90 text-secondary px-space-xs py-0.5 rounded font-mono"
                    >100V-240V (50/60Hz)</span
                  >
                </div>
                <div
                  className="relative w-full h-72 bg-surface-container-lowest overflow-hidden flex items-center justify-center p-space-md"
                >
                  <Image
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    alt="Minimalist horizontal architectural desk light bar by AURA, called Horizon Lumina. Machined raw matte titanium cylindrical chassis with ultra-soft ambient sunset gradient LED glow. Resting on a dark concrete architectural desk with shadows. Elegant Japanese modernism lighting design render."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy_dS5UVudR7zjIcHJIvZtWqBFPtD00kb32zB7CgyiiofMAj8PyZxTbh4PNLAUGpLqROg8DXrsLK9IoOxLJGUpVFb441Jr8siuRa32IEW1ag5XZlThpOM_DHmXdC-Q8FMxDIc17LiGY8gnN-p89spKs7KQs5SPz425C-Iyc9cf5Hl043_zNj8hSZUlPvw5YIIWr25zmKLXDjaqcccZcgTLF1nLjRYsS2KAdEVJhNyG0F5qxOsCxPqeEA"
                    width={200}
                    height={200}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-60"
                  ></div>
                </div>
                <div
                  className="p-space-lg flex flex-col flex-1 justify-between gap-space-md"
                >
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-mono"
                        >SKU-AURA-LMN-02</span
                      >
                      <div className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="EN Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="JA Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="DE Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="FR Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="AR Ready"
                        ></span>
                      </div>
                    </div>
                    <h2
                      className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors"
                    >
                      AURA Horizon Lumina — Circadian Light
                    </h2>
                    <div
                      className="bg-surface-container-lowest p-space-sm rounded text-on-surface-variant font-body-sm text-body-sm leading-relaxed"
                    >
                      <div className="text-on-surface">
                        Sun-tracking solar spectrum illuminator for high-focus
                        work sessions.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <div className="flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span
                          className="font-label-sm text-label-sm text-outline uppercase tracking-wider"
                          >Harmonized MSRP</span
                        >
                        <div className="flex items-baseline gap-space-xs">
                          <span
                            className="font-headline-sm text-headline-sm font-semibold text-on-surface price-val"
                            data-eur="€209"
                            data-jpy="¥32,800"
                            data-sar="﷼820"
                            data-usd="$219"
                            >$219</span
                          >
                          <span
                            className="font-label-sm text-label-sm text-outline tax-subtext"
                            >excl. state tax</span
                          >
                        </div>
                      </div>
                      <span
                        className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant"
                        >CRI 98+ TrueColor</span
                      >
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <button
                        className="flex-1 py-2 px-space-md bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary rounded font-label-lg text-label-lg font-semibold flex items-center justify-center gap-space-xs shadow-md transition-all"

                      >
                        
                        <span>View Localized Specs</span>
                      </button>
                      
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="product-card group relative flex flex-col bg-surface-container rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                data-category="workspace"
              >
                <div
                  className="absolute top-space-md left-space-md z-20 flex flex-wrap items-center gap-space-xs"
                >
                  <span
                    className="px-space-sm py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold tracking-wider uppercase"
                    >Full-Grain Leather</span
                  >
                </div>
                <div className="absolute top-space-md right-space-md z-20">
                  <span
                    className="font-label-sm text-label-sm bg-surface-container-highest/90 text-secondary px-space-xs py-0.5 rounded font-mono"
                    >Universal Qi2 / 15W</span
                  >
                </div>
                <div
                  className="relative w-full h-72 bg-surface-container-lowest overflow-hidden flex items-center justify-center p-space-md"
                >
                  <Image
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    alt="Flat lay photograph of AURA Deskmat MagFlow, a deep charcoal vegetal tanned full-grain leather magnetic workspace pad. Integrated brushed aluminum magnetic cable organizers and an embedded wireless charging dock indicator. Elegant minimalist stationery layout on dark walnut surface."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8iktnVbRhyvHjy28UUvDjdlP0sYwDMpjkYhzS8zAFLsMZWEeMcxVtkKFQhDzcVH2sCBLYH2ueyIeL25xcO7X_bv2dWzIwfHnJGdAC4WK3j5zzlXWyVU2Brz5r23TPbhbRhdyx_5xNpbACwbegGvSUDcXkn5JpXKpqTRZQePpDarfAUo3_1e_2nq90t4DlvMx_8015EZ6-DujhK49RTGOqYn6wzPA12O3v-GFrEOVb3f5ZARglm3vt4Q"
                    width={200}
                    height={200}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-60"
                  ></div>
                </div>
                <div
                  className="p-space-lg flex flex-col flex-1 justify-between gap-space-md"
                >
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-mono"
                        >SKU-AURA-DSK-03</span
                      >
                      <div className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="EN Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="JA Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="DE Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="FR Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-surface-bright"
                          title="AR in progress"
                        ></span>
                      </div>
                    </div>
                    <h2
                      className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors"
                    >
                      AURA Deskmat MagFlow — Work Surface
                    </h2>
                    <div
                      className="bg-surface-container-lowest p-space-sm rounded text-on-surface-variant font-body-sm text-body-sm leading-relaxed"
                    >
                      <div className="text-on-surface">
                        Integrated magnetic rail with 15W induction point and
                        anti-fray edging.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <div className="flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span
                          className="font-label-sm text-label-sm text-outline uppercase tracking-wider"
                          >Harmonized MSRP</span
                        >
                        <div className="flex items-baseline gap-space-xs">
                          <span
                            className="font-headline-sm text-headline-sm font-semibold text-on-surface price-val"
                            data-eur="€85"
                            data-jpy="¥13,500"
                            data-sar="﷼335"
                            data-usd="$89"
                            >$89</span
                          >
                          <span
                            className="font-label-sm text-label-sm text-outline tax-subtext"
                            >excl. state tax</span
                          >
                        </div>
                      </div>
                      <span
                        className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant"
                        >900 x 400 mm</span
                      >
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <button
                        className="flex-1 py-2 px-space-md bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary rounded font-label-lg text-label-lg font-semibold flex items-center justify-center gap-space-xs shadow-md transition-all"

                      >
                        
                        <span>View Localized Specs</span>
                      </button>
                      
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="product-card group relative flex flex-col bg-surface-container rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                data-category="sensors"
              >
                <div
                  className="absolute top-space-md left-space-md z-20 flex flex-wrap items-center gap-space-xs"
                >
                  <span
                    className="px-space-sm py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-semibold tracking-wider uppercase"
                    >Matter / Thread Certified</span
                  >
                </div>
                <div className="absolute top-space-md right-space-md z-20">
                  <span
                    className="font-label-sm text-label-sm bg-surface-container-highest/90 text-secondary px-space-xs py-0.5 rounded font-mono"
                    >USB-C / 5V 1A</span
                  >
                </div>
                <div
                  className="relative w-full h-72 bg-surface-container-lowest overflow-hidden flex items-center justify-center p-space-md"
                >
                  <Image
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    alt="Architectural smart thermostat sensor pod called AURA Sense Core. Square monolithic dark basalt finish with a high-resolution circular e-ink monochrome micro-display showing temperature and air purity index. Mounted on a textured dark plaster wall in a minimalist penthouse."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4ghtpAt61MT1QLC4XWDVcbK5_WCQr252bXFTDq-HXvXfkHyoAughlNFZvYeRVJGHBD0hhroWKejtk36JBu6A882bqzPXeVKspwTb5drrXOFpQJeGVBZq1pW0_9rixF1d5frnakRVBdRzojlKIyiFzeiAxFr1gZtIgLQaoguKyy5dI5JxN-CFbwbgmSuRsqdM6IsijWdwxw1pZXmU0vjrTsl_tijLBQICgb7ZUn9e7yHZNb9XEMlQ5Zg"
                    width={200}
                    height={200}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-60"
                  ></div>
                </div>
                <div
                  className="p-space-lg flex flex-col flex-1 justify-between gap-space-md"
                >
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-mono"
                        >SKU-AURA-SNS-04</span
                      >
                      <div className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="EN Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="JA Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="DE Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="FR Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="AR Ready"
                        ></span>
                      </div>
                    </div>
                    <h2
                      className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors"
                    >
                      AURA Sense Core — Dual Thermostat
                    </h2>
                    <div
                      className="bg-surface-container-lowest p-space-sm rounded text-on-surface-variant font-body-sm text-body-sm leading-relaxed"
                    >
                      <div className="text-on-surface">
                        Precision NDIR CO₂ sensor &amp; VOC laser particle
                        spectrometer.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <div className="flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span
                          className="font-label-sm text-label-sm text-outline uppercase tracking-wider"
                          >Harmonized MSRP</span
                        >
                        <div className="flex items-baseline gap-space-xs">
                          <span
                            className="font-headline-sm text-headline-sm font-semibold text-on-surface price-val"
                            data-eur="€169"
                            data-jpy="¥26,900"
                            data-sar="﷼670"
                            data-usd="$179"
                            >$179</span
                          >
                          <span
                            className="font-label-sm text-label-sm text-outline tax-subtext"
                            >excl. state tax</span
                          >
                        </div>
                      </div>
                      <span
                        className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant"
                        >±0.1°C Tolerances</span
                      >
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <button
                        className="flex-1 py-2 px-space-md bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary rounded font-label-lg text-label-lg font-semibold flex items-center justify-center gap-space-xs shadow-md transition-all"

                      >
                        
                        <span>View Localized Specs</span>
                      </button>
                      
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="product-card group relative flex flex-col bg-surface-container rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                data-category="living"
              >
                <div
                  className="absolute top-space-md left-space-md z-20 flex flex-wrap items-center gap-space-xs"
                >
                  <span
                    className="px-space-sm py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase"
                    >New Global Release</span
                  >
                </div>
                <div className="absolute top-space-md right-space-md z-20">
                  <span
                    className="font-label-sm text-label-sm bg-surface-container-highest/90 text-secondary px-space-xs py-0.5 rounded font-mono"
                    >100V-240V Auto-Switch</span
                  >
                </div>
                <div
                  className="relative w-full h-72 bg-surface-container-lowest overflow-hidden flex items-center justify-center p-space-md"
                >
                  <Image
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    alt="Compact portable 4K micro laser projector called AURA Beam Mini. CNC milled dark space grey block with copper accent optical ring lens. Casting a sharp warm architectural beam of light in a dim moody Japanese tearoom with tatami and black cedar walls."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeaDVLsjCo0KPFJfzlg_sLIsmBgq55DQ_Miv0XrogsPmoGZG3QZ0JNQbfkv8Y12nt5d0oM5YOt4S4RHYsLI-4KeDc2UyscsNcLtWLJHaeuL-O1sJu_Tr4W4qFsxJ-Ti8RbtjNGRqxcOmZj_kuhd9ArMA2-kq_jUbbUQ0KTnR0aqm7s-QbvShKv6D7-QvpgvzP_FdhB-NVlmDt0hNoxnfGTZvZOCFqoQeDruQKffhMmD_0Vty2Tv-7r3Q"
                    width={200}
                    height={200}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-60"
                  ></div>
                </div>
                <div
                  className="p-space-lg flex flex-col flex-1 justify-between gap-space-md"
                >
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-mono"
                        >SKU-AURA-BEM-05</span
                      >
                      <div className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="EN Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="JA Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="DE Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="FR Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="AR Ready"
                        ></span>
                      </div>
                    </div>
                    <h2
                      className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors"
                    >
                      AURA Beam Mini — 4K Laser Projector
                    </h2>
                    <div
                      className="bg-surface-container-lowest p-space-sm rounded text-on-surface-variant font-body-sm text-body-sm leading-relaxed"
                    >
                      <div className="text-on-surface">
                        ALPD 4.0 RGB+ laser engine in a pocketable 480g
                        magnesium enclosure.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <div className="flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span
                          className="font-label-sm text-label-sm text-outline uppercase tracking-wider"
                          >Harmonized MSRP</span
                        >
                        <div className="flex items-baseline gap-space-xs">
                          <span
                            className="font-headline-sm text-headline-sm font-semibold text-on-surface price-val"
                            data-eur="€469"
                            data-jpy="¥74,900"
                            data-sar="﷼1,870"
                            data-usd="$499"
                            >$499</span
                          >
                          <span
                            className="font-label-sm text-label-sm text-outline tax-subtext"
                            >excl. state tax</span
                          >
                        </div>
                      </div>
                      <span
                        className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant"
                        >1,200 ANSI Lumens</span
                      >
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <button
                        className="flex-1 py-2 px-space-md bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary rounded font-label-lg text-label-lg font-semibold flex items-center justify-center gap-space-xs shadow-md transition-all"

                      >
                        
                        <span>View Localized Specs</span>
                      </button>
                      
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="product-card group relative flex flex-col bg-surface-container rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                data-category="workspace"
              >
                <div
                  className="absolute top-space-md left-space-md z-20 flex flex-wrap items-center gap-space-xs"
                >
                  <span
                    className="px-space-sm py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold tracking-wider uppercase"
                    >Multi-Script Keycaps</span
                  >
                </div>
                <div className="absolute top-space-md right-space-md z-20">
                  <span
                    className="font-label-sm text-label-sm bg-surface-container-highest/90 text-secondary px-space-xs py-0.5 rounded font-mono"
                    >USB-C / BT 5.3 Low-Power</span
                  >
                </div>
                <div
                  className="relative w-full h-72 bg-surface-container-lowest overflow-hidden flex items-center justify-center p-space-md"
                >
                  <Image
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    alt="High angle macro shot of AURA Keypad Studio, an ortholinear tactile controller with anodized navy and space grey aluminum chassis. Custom PBT keycaps featuring subtle dual-sublegend laser engravings in Roman and Japanese Katakana. Warm backlighting on a clean architect workstation."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCae4G3DOiawoa5SbDHNfz2Otb5kSBJj7LcDdIDF3QfloGyuOMvKyJFIgk7iJri61XYq0L055QUhTGIIMtxpfHjDPv1K9JMdeoTzOEW8qmz1hmun0YyDyv1BvJpCBeZSS80tCoWg_dtuH3eRkOE_TQZguX56jaFV6f36PfFHu8MXB2cNeXpo3Ouwvci0EMILs7oXM63kXDwVTzKQBqg0X2AztDFjlar4Yw_-paG7CAacFLcPjGmXbfwYQ"
                    width={200}
                    height={200}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-60"
                  ></div>
                </div>
                <div
                  className="p-space-lg flex flex-col flex-1 justify-between gap-space-md"
                >
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-mono"
                        >SKU-AURA-KPD-06</span
                      >
                      <div className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="EN Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="JA Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="DE Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="FR Ready"
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-tertiary"
                          title="AR Ready"
                        ></span>
                      </div>
                    </div>
                    <h2
                      className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors"
                    >
                      AURA Keypad Studio — Tactile Controller
                    </h2>
                    <div
                      className="bg-surface-container-lowest p-space-sm rounded text-on-surface-variant font-body-sm text-body-sm leading-relaxed"
                    >
                      <div className="text-on-surface">
                        Hot-swappable magnetic hall-effect switches with analog
                        precision triggers.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <div className="flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span
                          className="font-label-sm text-label-sm text-outline uppercase tracking-wider"
                          >Harmonized MSRP</span
                        >
                        <div className="flex items-baseline gap-space-xs">
                          <span
                            className="font-headline-sm text-headline-sm font-semibold text-on-surface price-val"
                            data-eur="€149"
                            data-jpy="¥23,900"
                            data-sar="﷼595"
                            data-usd="$159"
                            >$159</span
                          >
                          <span
                            className="font-label-sm text-label-sm text-outline tax-subtext"
                            >excl. state tax</span
                          >
                        </div>
                      </div>
                      <span
                        className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant"
                        >0.1mm Rapid Trigger</span
                      >
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <button
                        className="flex-1 py-2 px-space-md bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary rounded font-label-lg text-label-lg font-semibold flex items-center justify-center gap-space-xs shadow-md transition-all"

                      >
                        
                        <span>View Localized Specs</span>
                      </button>
                      
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <div
          className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md hidden flex items-center justify-center p-gutter-mobile"
          id="locale-spec-modal"
        >
          <div
            className="bg-surface-container-high rounded-xl max-w-2xl w-full p-space-xl shadow-2xl relative flex flex-col gap-space-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span
                  className="material-symbols-outlined text-secondary text-headline-sm"
                  >tune</span
                >
                <div className="flex flex-col">
                  <span
                    className="font-label-sm text-label-sm text-outline uppercase tracking-wider"
                    >Multi-Lingual Compliance Manifest</span
                  >
                  <h3
                    className="font-headline-sm text-headline-sm text-on-surface font-semibold"
                    id="modal-product-title"
                  >
                    Localized Specs
                  </h3>
                </div>
              </div>
              <button
                className="p-1 rounded bg-surface-container-highest hover:bg-surface-container text-on-surface transition-colors"

              >
                <span className="material-symbols-outlined text-headline-sm"
                  >close</span
                >
              </button>
            </div>
            <div
              className="flex items-center gap-space-xs bg-surface-container-lowest p-1 rounded-lg"
              id="modal-lang-tabs"
            >
              <button
                className="modal-tab active flex-1 py-1 rounded text-label-sm font-label-sm bg-primary-container text-on-primary-container font-semibold"

              >
                EN-US
              </button>
              <button
                className="modal-tab flex-1 py-1 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface"

              >
                JA-JP
              </button>
              <button
                className="modal-tab flex-1 py-1 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface"

              >
                DE-DE
              </button>
              <button
                className="modal-tab flex-1 py-1 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface"

              >
                FR-FR
              </button>
              <button
                className="modal-tab flex-1 py-1 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface"

              >
                AR-SA
              </button>
            </div>
            <div
              className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface"
            >
              <div
                className="flex justify-between py-1 border-b border-surface-container-highest"
              >
                <span className="text-outline">Voltage / 電圧 / Spannung:</span>
                <span className="font-mono text-tertiary" id="spec-voltage"
                  >100–240V AC 50/60Hz Universal</span
                >
              </div>
              <div
                className="flex justify-between py-1 border-b border-surface-container-highest"
              >
                <span className="text-outline">Compliance Badges:</span>
                <span className="font-mono text-on-surface" id="spec-compliance"
                  >FCC / CE RED / PSE / TELEC / RoHS</span
                >
              </div>
              <div
                className="flex justify-between py-1 border-b border-surface-container-highest"
              >
                <span className="text-outline">Official Packaging Script:</span>
                <span className="text-secondary font-medium" id="spec-packaging"
                  >Bilingual English / Japanese Hiragana &amp; Kanji</span
                >
              </div>
              <div className="flex justify-between py-1">
                <span className="text-outline">Recycling / WEEE Category:</span>
                <span className="font-mono text-on-surface" id="spec-recycling"
                  >WEEE-Reg.-Nr. DE 49201948</span
                >
              </div>
            </div>
            <div className="flex items-center justify-between pt-space-xs">
              <span
                className="font-label-sm text-label-sm text-tertiary flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-label-md"
                  >verified</span
                >
                Verified by Tokyo Localization Lab &amp; Berlin Compliance
              </span>
              <button
                className="px-space-md py-1.5 bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-md text-label-md rounded"

              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer
      className="w-full bg-surface-container-lowest mt-auto shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
    >
      <div
        className="w-full px-gutter-mobile md:px-margin py-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg"
      >
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span
              className="font-headline-sm text-headline-sm text-on-surface font-semibold"
              >AURA</span
            ><span
              className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest"
              >International Precision Platform</span
            >
          </div>
          <p className="font-body-sm text-body-sm text-outline max-w-md">
            Synchronized multi-script typographical baseline, localized currency
            telemetry, and real-time cultural commerce architecture.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mr-space-xs"
              >Certified Standards</span
            ><span
              className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface"
              >CE</span
            ><span
              className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface"
              >FCC</span
            ><span
              className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface"
              >PSE</span
            ><span
              className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface"
              >UKCA</span
            >
          </div>
          <div
            className="flex items-center gap-space-xs bg-surface-container rounded-full px-space-md py-space-xs"
          >
            <span className="font-label-sm text-label-sm text-on-surface-variant"
              >Active Engine:</span
            ><span className="font-label-sm text-label-sm text-tertiary"
              >v4.8 Multi-Lexicon</span
            >
          </div>
        </div>
      </div>
      <div
        className="w-full px-gutter-mobile md:px-margin py-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-outline"
      >
        <div className="flex items-center gap-space-md">
          <span className="hover:text-on-surface cursor-pointer">🇺🇸 EN-US</span
          ><span className="hover:text-on-surface cursor-pointer">🇯🇵 JA-JP</span
          ><span className="hover:text-on-surface cursor-pointer">🇩🇪 DE-DE</span
          ><span className="hover:text-on-surface cursor-pointer">🇫🇷 FR-FR</span
          ><span className="hover:text-on-surface cursor-pointer">🇸🇦 AR-SA</span>
        </div>
        <div>
          © 2025 AURA International Technologies Inc. All rights reserved across
          all jurisdictions.
        </div>
      </div>
    </footer>
    </>
  );
}
