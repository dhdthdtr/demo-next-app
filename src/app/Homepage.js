import Image from "next/image";
import ProductList from "./ProductList";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";

export default function Homepage({products, output, list, entry}) {
    const inspectorProps = useContentfulInspectorMode({ entryId: entry?.sys?.id });
    const listInspectorProps = useContentfulInspectorMode({ entryId: list?.sys?.id });
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 w-full px-gutter-mobile md:px-margin flex items-center justify-between gap-space-md">
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
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-semibold">
                  AURA
                </span>
                <span className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant">
                  Global Intl
                </span>
              </div>
            </div>
            <div className="hidden lg:flex items-center bg-surface-container-high rounded-full px-space-md py-space-xs gap-space-sm shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-space-xs cursor-pointer">
                <span className="text-body-md">🇺🇸</span>
                <span className="font-label-md text-label-md text-on-surface">
                  English (US)
                </span>
                <span className="material-symbols-outlined text-label-md text-outline">
                  expand_more
                </span>
              </div>
              <span className="text-outline-variant font-body-sm text-body-sm">
                /
              </span>
              <div className="flex items-center gap-space-xs cursor-pointer font-label-md text-label-md text-secondary">
                <span className="font-Noto Sans">USD $</span>
                <span className="material-symbols-outlined text-label-md text-outline">
                  unfold_more
                </span>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container-highest px-space-sm py-0.5 rounded-full cursor-pointer">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  LTR
                </span>
                <span className="material-symbols-outlined text-label-sm text-outline">
                  swap_horiz
                </span>
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
              >
                Catalog Showcase
              </a>
              <a
                className="px-space-md py-space-sm font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-lg transition-all"
                data-path="product-detail"
                href="#"
              >
                Product Detail
              </a>
              <a
                className="px-space-md py-space-sm font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-lg transition-all"
                data-path="regional-locale-admin"
                href="#"
              >
                Regional &amp; Locale Admin
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center bg-surface-container-lowest rounded-lg px-space-md py-space-xs gap-space-sm w-48 md:w-64">
              <span className="material-symbols-outlined text-on-surface-variant text-label-lg">
                search
              </span>
              <input
                className="bg-transparent w-full text-on-surface placeholder:text-outline focus:outline-none font-body-sm text-body-sm"
                placeholder="Search SKU / 検索 / بحث..."
                readOnly=""
                type="text"
              />
            </div>
            <div className="relative flex items-center justify-center cursor-pointer p-space-xs text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-headline-sm">
                notifications
              </span>
              <span className="absolute -top-1 -right-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-space-xs rounded-full min-w-[1.125rem] text-center">
                3
              </span>
            </div>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="relative">
                <Image
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt4Zha9Baxtu72MXnbxU4KRBvN4k3ubQYvzbM33H6i65L5brUBO4Sa7F_DHGFMfAPYS1wtZtfcU2AsrggFemAU2yMa1202zLvlpnsltjZDaE7VoFFavPEo_jptxa-G0iP8IX_KgR_lFuq1kIldLQMa1KmCDojwD5iIb65MV1TkGoBH3CJxbOS0nuG7tVj41SkhAM6_UKokw3ZeVsMb6amCHMr2IPyB7_M0uV5fgTWNHHut8PCb7oXEWQ"
                  width={32}
                  height={32}
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-tertiary rounded-full ring-2 ring-surface"></span>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="font-label-md text-label-md text-on-surface leading-tight">
                  Elena Rostova
                </span>
                <span className="font-label-sm text-label-sm text-secondary tracking-wide">
                  Lead Localizer
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-20 bg-background flex-1 flex flex-col">
        <div className="flex flex-col w-full">
          <section className="relative w-full px-gutter-mobile md:px-margin py-space-xl overflow-hidden bg-surface-container-low">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  <span className="material-symbols-outlined text-label-sm">
                    public
                  </span>
                  <span>AURA Polyglot Precision Hardware Catalog</span>
                </div>
                <h1
                  className="font-display-hero text-display-hero md:text-display-hero text-on-surface tracking-tight leading-none mt-space-xs"
                  {...inspectorProps({ fieldId: "heroTitle" })}
                >
                  {output?.fields?.heroTitle}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs max-w-4xl">
                  <div className="flex items-start gap-space-sm bg-surface-container/60 p-space-sm rounded-lg backdrop-blur-sm shadow-sm">
                    <p
                      className="font-body-md text-body-md text-on-surface-variant leading-snug"
                      {...inspectorProps({ fieldId: "heroDescription" })}
                    >
                      {output?.fields?.heroDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full px-gutter-mobile md:px-margin py-space-xl bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-space-lg pb-space-xs">
                <div className="flex items-center gap-space-sm">
                  <span
                    className="font-headline-md text-headline-md text-on-surface font-semibold"
                    {...listInspectorProps({ fieldId: "title" })}
                  >
                    {list?.fields?.title}
                  </span>
                </div>
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
                id="product-catalog-grid"
                {...listInspectorProps({ fieldId: "productList" })}
              >
                {/* {renderArticle(products)} */}
                {products.length > 0 &&
                  products.map((item) => {
                    const data = item.fields;

                    return (
                      <ProductList
                        key={item.sys.id} // Always pass Contentful sys.id as the React key
                        id={item.sys.id}
                        data={data}
                      />
                    );
                  })}
              </div>
            </div>
          </section>
          <div
            className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md hidden flex items-center justify-center p-gutter-mobile"
            id="locale-spec-modal"
          >
            <div className="bg-surface-container-high rounded-xl max-w-2xl w-full p-space-xl shadow-2xl relative flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-headline-sm">
                    tune
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                      Multi-Lingual Compliance Manifest
                    </span>
                    <h3
                      className="font-headline-sm text-headline-sm text-on-surface font-semibold"
                      id="modal-product-title"
                    >
                      Localized Specs
                    </h3>
                  </div>
                </div>
                <button className="p-1 rounded bg-surface-container-highest hover:bg-surface-container text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-headline-sm">
                    close
                  </span>
                </button>
              </div>
              <div
                className="flex items-center gap-space-xs bg-surface-container-lowest p-1 rounded-lg"
                id="modal-lang-tabs"
              >
                <button className="modal-tab active flex-1 py-1 rounded text-label-sm font-label-sm bg-primary-container text-on-primary-container font-semibold">
                  EN-US
                </button>
                <button className="modal-tab flex-1 py-1 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface">
                  JA-JP
                </button>
                <button className="modal-tab flex-1 py-1 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface">
                  DE-DE
                </button>
                <button className="modal-tab flex-1 py-1 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface">
                  FR-FR
                </button>
                <button className="modal-tab flex-1 py-1 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface">
                  AR-SA
                </button>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface">
                <div className="flex justify-between py-1 border-b border-surface-container-highest">
                  <span className="text-outline">
                    Voltage / 電圧 / Spannung:
                  </span>
                  <span className="font-mono text-tertiary" id="spec-voltage">
                    100–240V AC 50/60Hz Universal
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-container-highest">
                  <span className="text-outline">Compliance Badges:</span>
                  <span
                    className="font-mono text-on-surface"
                    id="spec-compliance"
                  >
                    FCC / CE RED / PSE / TELEC / RoHS
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-container-highest">
                  <span className="text-outline">
                    Official Packaging Script:
                  </span>
                  <span
                    className="text-secondary font-medium"
                    id="spec-packaging"
                  >
                    Bilingual English / Japanese Hiragana &amp; Kanji
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-outline">
                    Recycling / WEEE Category:
                  </span>
                  <span
                    className="font-mono text-on-surface"
                    id="spec-recycling"
                  >
                    WEEE-Reg.-Nr. DE 49201948
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-xs">
                <span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
                  <span className="material-symbols-outlined text-label-md">
                    verified
                  </span>
                  Verified by Tokyo Localization Lab &amp; Berlin Compliance
                </span>
                <button className="px-space-md py-1.5 bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-md text-label-md rounded">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest mt-auto shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="w-full px-gutter-mobile md:px-margin py-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                AURA
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                International Precision Platform
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-outline max-w-md">
              Synchronized multi-script typographical baseline, localized
              currency telemetry, and real-time cultural commerce architecture.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mr-space-xs">
                Certified Standards
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">
                CE
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">
                FCC
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">
                PSE
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">
                UKCA
              </span>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container rounded-full px-space-md py-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Active Engine:
              </span>
              <span className="font-label-sm text-label-sm text-tertiary">
                v4.8 Multi-Lexicon
              </span>
            </div>
          </div>
        </div>
        <div className="w-full px-gutter-mobile md:px-margin py-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-outline">
          <div className="flex items-center gap-space-md">
            <span className="hover:text-on-surface cursor-pointer">
              🇺🇸 EN-US
            </span>
            <span className="hover:text-on-surface cursor-pointer">
              🇯🇵 JA-JP
            </span>
            <span className="hover:text-on-surface cursor-pointer">
              🇩🇪 DE-DE
            </span>
            <span className="hover:text-on-surface cursor-pointer">
              🇫🇷 FR-FR
            </span>
            <span className="hover:text-on-surface cursor-pointer">
              🇸🇦 AR-SA
            </span>
          </div>
          <div>
            © 2025 AURA International Technologies Inc. All rights reserved
            across all jurisdictions.
          </div>
        </div>
      </footer>
    </>
  );
}
