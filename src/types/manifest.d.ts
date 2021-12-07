export interface Manifest {
  version: string;
  mobileAssetContentPath: string;
  mobileGearAssetDataBases: { version: number; path: string }[];
  mobileWorldContentPaths: { [key: string]: string };
  jsonWorldContentPaths: { [key: string]: string };
  jsonWorldComponentContentPaths: { [key: string]: ManifestComponentPath };
  mobileClanBannerDatabasePath: string;
  mobileGearCDN: MobileGearCDN;
  iconImagePyramidInfo: [];
}

export const manifest_lang: readonly [
  "de",
  "en",
  "es",
  "es-mx",
  "fr",
  "it",
  "ja",
  "ko",
  "pl",
  "pt-br",
  "ru",
  "zh-chs",
  "zh-cht"
];

export interface ManifestComponentPath {
  DestinyNodeStepSummaryDefinition: string;
  DestinyArtDyeChannelDefinition: string;
  DestinyArtDyeReferenceDefinition: string;
  DestinyPlaceDefinition: string;
  DestinyActivityDefinition: string;
  DestinyActivityTypeDefinition: string;
  DestinyClassDefinition: string;
  DestinyGenderDefinition: string;
  DestinyInventoryBucketDefinition: string;
  DestinyRaceDefinition: string;
  DestinyTalentGridDefinition: string;
  DestinyUnlockDefinition: string;
  DestinyMaterialRequirementSetDefinition: string;
  DestinySandboxPerkDefinition: string;
  DestinyStatGroupDefinition: string;
  DestinyProgressionMappingDefinition: string;
  DestinyFactionDefinition: string;
  DestinyVendorGroupDefinition: string;
  DestinyRewardSourceDefinition: string;
  DestinyUnlockValueDefinition: string;
  DestinyRewardMappingDefinition: string;
  DestinyRewardSheetDefinition: string;
  DestinyItemCategoryDefinition: string;
  DestinyDamageTypeDefinition: string;
  DestinyActivityModeDefinition: string;
  DestinyMedalTierDefinition: string;
  DestinyAchievementDefinition: string;
  DestinyActivityGraphDefinition: string;
  DestinyActivityInteractableDefinition: string;
  DestinyBondDefinition: string;
  DestinyCharacterCustomizationCategoryDefinition: string;
  DestinyCharacterCustomizationOptionDefinition: string;
  DestinyCollectibleDefinition: string;
  DestinyDestinationDefinition: string;
  DestinyEntitlementOfferDefinition: string;
  DestinyEquipmentSlotDefinition: string;
  DestinyStatDefinition: string;
  DestinyInventoryItemDefinition: string;
  DestinyInventoryItemLiteDefinition: string;
  DestinyItemTierTypeDefinition: string;
  DestinyLocationDefinition: string;
  DestinyLoreDefinition: string;
  DestinyMetricDefinition: string;
  DestinyObjectiveDefinition: string;
  DestinyPlatformBucketMappingDefinition: string;
  DestinyPlugSetDefinition: string;
  DestinyPowerCapDefinition: string;
  DestinyPresentationNodeDefinition: string;
  DestinyProgressionDefinition: string;
  DestinyProgressionLevelRequirementDefinition: string;
  DestinyRecordDefinition: string;
  DestinyRewardAdjusterPointerDefinition: string;
  DestinyRewardAdjusterProgressionMapDefinition: string;
  DestinyRewardItemListDefinition: string;
  DestinySackRewardItemListDefinition: string;
  DestinySandboxPatternDefinition: string;
  DestinySeasonDefinition: string;
  DestinySeasonPassDefinition: string;
  DestinySocketCategoryDefinition: string;
  DestinySocketTypeDefinition: string;
  DestinyTraitDefinition: string;
  DestinyTraitCategoryDefinition: string;
  DestinyUnlockCountMappingDefinition: string;
  DestinyUnlockEventDefinition: string;
  DestinyUnlockExpressionMappingDefinition: string;
  DestinyVendorDefinition: string;
  DestinyMilestoneDefinition: string;
  DestinyActivityModifierDefinition: string;
  DestinyReportReasonCategoryDefinition: string;
  DestinyArtifactDefinition: string;
  DestinyBreakerTypeDefinition: string;
  DestinyChecklistDefinition: string;
  DestinyEnergyTypeDefinition: string;
}

export interface MobileGearCDN {
  Geometry: string;
  Texture: string;
  PlateRegion: string;
  Gear: string;
  Shader: string;
}
