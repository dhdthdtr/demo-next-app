"use client"

import Image from "next/image";
import { ContentfulLivePreview } from '@contentful/live-preview';
import { ContentfulLivePreviewProvider, useContentfulLiveUpdates, useContentfulInspectorMode  } from '@contentful/live-preview/react';
import { CMA_Client, contentfulClient } from './contentful';
import { use, useEffect, useState } from 'react';
import ProductList from "./ProductList";
import Homepage from "./Homepage";

export default function Home() {
  const [entry, setEntry] = useState(null);
  const [lang, setLang] = useState("en-US")
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    ContentfulLivePreview.init({ 
      locale: 'ko-KR', 
      experimental: { hideCoveredElementOutlines: false },
      enableLiveUpdates: true,
      enableInspectorMode: true,
      targetOrigin: 'https://app.contentful.com',
    });


    const fetchPage = async () => {
      const response = await contentfulClient.getEntry('5rrQBrYYj0LClVE9oC37QV')
      setEntry(response)
      setProductList(response?.fields?.productList)

      const list = response?.fields?.productList?.fields?.products
      const productDetails = await Promise.all(
        list.map((item) => contentfulClient.getEntry(item.sys.id))
      );
      setProducts(productDetails);
      console.log(productDetails)
    }

    fetchPage()
  }, []);

  // 1. Live updates hook
  const output = useContentfulLiveUpdates(entry);
  const list = useContentfulLiveUpdates(productList);

  return (
    <>
      <ContentfulLivePreviewProvider
          locale="en-US"
          enableInspectorMode={false}
          enableLiveUpdates={true}
          targetOrigin="https://app.contentful.com"
          debugMode={true}
        >
          <Homepage products={products} output={output} list={list} entry={entry} />
    </ContentfulLivePreviewProvider>
    </>
  );
}
