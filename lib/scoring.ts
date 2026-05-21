import { QualityLevel } from "@/types";

const qualityValues: Record<QualityLevel, number> = {
  basica: 40,
  media: 60,
  alta: 85,
  certificada: 95,
  critica: 100,
};

export function getQualityScore(quality: QualityLevel): number {
  return qualityValues[quality];
}

export function calculateQuotationScore(params: {
  price: number;
  maxPrice: number;
  deliveryTimeHours: number;
  qualityLevel: QualityLevel;
  supplierRating: number;
}): number {
  const priceScore = Math.max(0, 100 - (params.price / params.maxPrice) * 100);
  const deliveryScore = Math.max(0, 100 - params.deliveryTimeHours);
  const qualityScore = getQualityScore(params.qualityLevel);
  const ratingScore = params.supplierRating * 20;

  return Math.round(
    qualityScore * 0.4 +
      deliveryScore * 0.3 +
      priceScore * 0.2 +
      ratingScore * 0.1
  );
}