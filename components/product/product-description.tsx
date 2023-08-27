'use client';

import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product, ProductVariant } from 'lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {

  const [price, setPrice] = useState(product.priceRange.minVariantPrice.amount);

  const searchParams = useSearchParams();
  const defaultVariantId = product.variants.length === 1 ? product.variants[0]?.id : undefined;

  useEffect(() => {

    if (product.variants.length > 1) {
      const optionSearchParams = new URLSearchParams(searchParams.toString());
      const variant = product.variants.find((variant: ProductVariant) =>
        variant.selectedOptions.every(
          (option) => option.value === searchParams.get(option.name.toLowerCase())
        )
      );
      const selectedVariantId = variant?.id || defaultVariantId;

      product.variants.forEach((selected) => {
        if(selected.id == selectedVariantId){
          setPrice(selected.price.amount);
        }
      })
    }
  }, [product]);

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={price}
            currencyCode={product.priceRange.minVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}
