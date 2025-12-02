// src/hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import { fetchProductsBySlug } from "@/strapi";
import { categories, products as localProducts, Product, subcategories } from "@/data/products";

const normalizeCategoryMatch = (product: Product) => {
  const match = categories.find(
    (c) => c.name === product.category || c.nameEn === product.categoryEn
  );
  return match?.id || "";
};

export function useProducts(category = '', subcategory = '') {
  const q = useQuery({
    queryKey: ['products', { category, subcategory }],
    queryFn: () => fetchProductsBySlug(category, subcategory),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
  
  // Filter local products based on category/subcategory
  const getFilteredLocalProducts = () => {
    let filtered = localProducts;

    if (category && category !== 'all') {
      filtered = filtered.filter((p) => {
        const categoryId = normalizeCategoryMatch(p);
        return categoryId === category;
      });
    }

    if (subcategory && subcategory !== 'all') {
      filtered = filtered.filter((p) => {
        const sub = (p.subcategory || '').toLowerCase();
        const subEn = (p.subcategoryEn || '').toLowerCase();
        const normalized = subcategories.find((s) => s.id === subcategory);
        return (
          sub.includes(subcategory.toLowerCase()) ||
          subEn.includes(subcategory.toLowerCase()) ||
          (!!normalized &&
            (normalized.name === p.subcategory || normalized.nameEn === p.subcategoryEn))
        );
      });
    }

    return filtered;
  };
  
  // Use Strapi data if available, otherwise fallback to local products
  const strapiList = Array.isArray(q.data) ? q.data : [];
  const fallbackList = getFilteredLocalProducts();
  
  // If Strapi returns data, use it; otherwise use local products as fallback
  const finalList = strapiList.length > 0 ? strapiList : fallbackList;
  
  return { 
    ...q, 
    data: finalList,
    isUsingFallback: strapiList.length === 0 && fallbackList.length > 0
  };
}
