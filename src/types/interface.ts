import {
  ApplicationStatus,
  DeveloperRole,
  BungieMembershipType,
  IgnoreStatus,
  BungieCredentialType,
  ContentPropertyDataTypeEnum,
  ForumMediaType,
  ForumPostPopularity,
  GroupAllianceStatus,
  GroupType,
  ChatSecuritySetting,
  GroupHomepage,
  MembershipOption,
  GroupPostPublicity,
  Capabilities,
  HostGuidedGamesPermissionLevel,
  RuntimeGroupMemberType,
  DestinyProgressionRewardItemState,
  DestinyProgressionScope,
  DestinyProgressionStepDisplayEffect,
  SpecialItemType,
  DestinyItemType,
  DestinyItemSubType,
  DestinyClass,
  DestinyBreakerType,
  DamageType,
  DestinySocketVisibility,
  SocketTypeActionType,
  DestinySocketCategoryStyle,
  TierType,
  BucketScope,
  BucketCategory,
  ItemLocation,
  DestinyStatAggregationType,
  DestinyStatCategory,
  EquippingItemBlockAttributes,
  DestinyAmmunitionType,
  DestinyGender,
  DestinyVendorProgressionType,
  VendorDisplayCategorySortOrder,
  VendorInteractionType,
  DestinyVendorInteractionRewardSelection,
  DestinyVendorReplyType,
  DestinyItemSortType,
  DestinyVendorItemRefundPolicy,
  DestinyGatingScope,
  ActivityGraphNodeHighlightType,
  DestinyActivityModeType,
  DestinyUnlockValueUIStyle,
  DestinyObjectiveUiStyle,
  DestinyObjectiveGrantStyle,
  DestinyTalentNodeStepWeaponPerformances,
  DestinyTalentNodeStepImpactEffects,
  DestinyTalentNodeStepGuardianAttributes,
  DestinyTalentNodeStepLightAbilities,
  DestinyTalentNodeStepDamageTypes,
  DestinyActivityNavPointType,
  DestinyActivityModeCategory,
  DestinyGraphNodeState,
  DestinyRewardSourceCategory,
  DestinyPresentationNodeType,
  DestinyScope,
  DestinyPresentationDisplayStyle,
  DestinyPresentationScreenStyle,
  DestinyRecordValueStyle,
  DestinyRecordToastStyle,
  PlugUiStyles,
  PlugAvailabilityMode,
  DestinyEnergyType,
  SocketPlugSources,
  ItemPerkVisibility,
  DestinyProgressionRewardItemAcquisitionBehavior,
  GroupPotentialMemberStatus,
  ForumRecruitmentIntensityLabel,
  ForumRecruitmentToneLabel,
  GroupDateRange,
  GroupSortBy,
  IgnoreLength,
  GroupApplicationResolveState,
  PlatformErrorCodes,
  ItemBindStatus,
  TransferStatuses,
  ItemState,
  ComponentPrivacySetting,
  DestinyGameVersions,
  DestinyPresentationNodeState,
  DestinyRecordState,
  DestinyCollectibleState,
  DestinyPartyMemberStates,
  DestinyGamePrivacySetting,
  DestinyJoinClosedReasons,
  DestinyRace,
  DestinyMilestoneDisplayPreference,
  DestinyMilestoneType,
  DestinyActivityDifficultyTier,
  EquipFailureReason,
  DestinyTalentNodeState,
  VendorItemStatus,
  DestinyVendorItemState,
  DestinySocketArrayType,
  DestinyStatsGroupType,
  PeriodType,
  DestinyStatsCategoryType,
  UnitType,
  AwaType,
  AwaUserSelection,
  AwaResponseReason,
  TrendingEntryType,
  FireteamPlatform,
  FireteamPlatformInviteResult,
  PresenceStatus,
  PresenceOnlineStateFlags,
  FriendRelationshipState,
  PlatformFriendType,
  OptInFlags,
  GlobalAlertLevel,
  GlobalAlertType,
} from "./enum";

export interface ApiUsage {
  apiCalls: Series[];
  throttledRequests: Series[];
}

export interface Series {
  datapoints: Datapoint[];
  target: string;
}

export interface Datapoint {
  time: string;
  count: number;
}

export interface Application {
  applicationId: number;
  name: string;
  redirectUrl: string;
  link: string;
  scope: string;
  origin: string;
  status: ApplicationStatus;
  creationDate: string;
  statusChanged: string;
  firstPublished: string;
  team: ApplicationDeveloper[];
  overrideAuthorizeViewName: string;
}

export interface ApplicationDeveloper {
  role: DeveloperRole;
  apiEulaVersion: number;
  user: UserInfoCard;
}

export interface UserMembership {
  membershipType: BungieMembershipType;
  membershipId: string;
  displayName: string;
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number;
}

export interface CrossSaveUserMembership {
  crossSaveOverride: BungieMembershipType;
  applicableMembershipTypes: BungieMembershipType[];
  isPublic: boolean;
  membershipType: BungieMembershipType;
  membershipId: string;
  displayName: string;
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number;
}

export interface UserInfoCard {
  supplementalDisplayName: string;
  iconPath: string;
  crossSaveOverride: BungieMembershipType;
  applicableMembershipTypes: BungieMembershipType[];
  isPublic: boolean;
  membershipType: BungieMembershipType;
  membershipId: string;
  displayName: string;
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number;
}

export interface GeneralUser {
  membershipId: string;
  uniqueName: string;
  normalizedName: string;
  displayName: string;
  profilePicture: number;
  profileTheme: number;
  userTitle: number;
  successMessageFlags: string;
  isDeleted: boolean;
  about: string;
  firstAccess: string;
  lastUpdate: string;
  legacyPortalUID: string;
  context: UserToUserContext;
  psnDisplayName: string;
  xboxDisplayName: string;
  fbDisplayName: string;
  showActivity: boolean;
  locale: string;
  localeInheritDefault: boolean;
  lastBanReportId: string;
  showGroupMessaging: boolean;
  profilePicturePath: string;
  profilePictureWidePath: string;
  profileThemeName: string;
  userTitleDisplay: string;
  statusText: string;
  statusDate: string;
  profileBanExpire: string;
  blizzardDisplayName: string;
  steamDisplayName: string;
  stadiaDisplayName: string;
  twitchDisplayName: string;
  cachedBungieGlobalDisplayName: string;
  cachedBungieGlobalDisplayNameCode: number;
}

export interface UserToUserContext {
  isFollowing: boolean;
  ignoreStatus: IgnoreResponse;
  globalIgnoreEndDate: string;
}

export interface GetCredentialTypesForAccountResponse {
  credentialType: BungieCredentialType;
  credentialDisplayName: string;
  isPublic: boolean;
  credentialAsString: string;
}

export interface UserMembershipData {
  destinyMemberships: GroupUserInfoCard[];
  primaryMembershipId: string;
  bungieNetUser: GeneralUser;
}

export interface HardLinkedUserMembership {
  membershipType: BungieMembershipType;
  membershipId: string;
  CrossSaveOverriddenType: BungieMembershipType;
  CrossSaveOverriddenMembershipId: string;
}

export interface UserSearchResponse {
  searchResults: UserSearchResponseDetail[];
  page: number;
  hasMore: boolean;
}

export interface UserSearchResponseDetail {
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number;
  bungieNetMembershipId: string;
  destinyMemberships: UserInfoCard[];
}

export interface UserSearchPrefixRequest {
  displayNamePrefix: string;
}

export interface ExactSearchRequest {
  displayName: string;
  displayNameCode: number;
}

export interface EmailSettings {
  optInDefinitions: { [key: string]: EmailOptInDefinition };
  subscriptionDefinitions: { [key: string]: EmailSubscriptionDefinition };
  views: { [key: string]: EmailViewDefinition };
}

export interface EmailOptInDefinition {
  name: string;
  value: OptInFlags;
  setByDefault: boolean;
  dependentSubscriptions: EmailSubscriptionDefinition[];
}

export interface EmailSubscriptionDefinition {
  name: string;
  localization: { [key: string]: EMailSettingSubscriptionLocalization };
  value: string;
}

export interface EMailSettingLocalization {
  title: string;
  description: string;
}

export interface EMailSettingSubscriptionLocalization {
  unknownUserDescription: string;
  registeredUserDescription: string;
  unregisteredUserDescription: string;
  unknownUserActionText: string;
  knownUserActionText: string;
  title: string;
  description: string;
}

export interface EmailViewDefinition {
  name: string;
  viewSettings: EmailViewDefinitionSetting[];
}

export interface EmailViewDefinitionSetting {
  name: string;
  localization: { [key: string]: EMailSettingLocalization };
  setByDefault: boolean;
  optInAggregateValue: OptInFlags;
  subscriptions: EmailSubscriptionDefinition[];
}

export interface IgnoreResponse {
  isIgnored: boolean;
  ignoreFlags: IgnoreStatus;
}

export interface UserTheme {
  userThemeId: number;
  userThemeName: string;
  userThemeDescription: string;
}

export interface GroupTheme {
  name: string;
  folder: string;
  description: string;
}

export interface ClanBannerSource {}

export interface ClanBannerDecal {
  identifier: string;
  foregroundPath: string;
  backgroundPath: string;
}

export interface GroupUserInfoCard {
  LastSeenDisplayName: string;
  LastSeenDisplayNameType: BungieMembershipType;
  supplementalDisplayName: string;
  iconPath: string;
  crossSaveOverride: BungieMembershipType;
  applicableMembershipTypes: BungieMembershipType[];
  isPublic: boolean;
  membershipType: BungieMembershipType;
  membershipId: string;
  displayName: string;
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number;
}

export interface GroupResponse {
  detail: GroupV2;
  founder: GroupMember;
  alliedIds: string[];
  parentGroup: GroupV2;
  allianceStatus: GroupAllianceStatus;
  groupJoinInviteCount: number;
  currentUserMembershipsInactiveForDestiny: boolean;
  currentUserMemberMap: { [key: string]: GroupMember };
  currentUserPotentialMemberMap: { [key: string]: GroupPotentialMember };
}

export interface GroupV2 {
  groupId: string;
  name: string;
  groupType: GroupType;
  membershipIdCreated: string;
  creationDate: string;
  modificationDate: string;
  about: string;
  tags: string[];
  memberCount: number;
  isPublic: boolean;
  isPublicTopicAdminOnly: boolean;
  motto: string;
  allowChat: boolean;
  isDefaultPostPublic: boolean;
  chatSecurity: ChatSecuritySetting;
  locale: string;
  avatarImageIndex: number;
  homepage: GroupHomepage;
  membershipOption: MembershipOption;
  defaultPublicity: GroupPostPublicity;
  theme: string;
  bannerPath: string;
  avatarPath: string;
  conversationId: string;
  enableInvitationMessagingForAdmins: boolean;
  banExpireDate: string;
  features: GroupFeatures;
  clanInfo: GroupV2ClanInfoAndInvestment;
}

export interface GroupFeatures {
  maximumMembers: number;
  maximumMembershipsOfGroupType: number;
  capabilities: Capabilities;
  membershipTypes: BungieMembershipType[];
  invitePermissionOverride: boolean;
  updateCulturePermissionOverride: boolean;
  hostGuidedGamePermissionOverride: HostGuidedGamesPermissionLevel;
  updateBannerPermissionOverride: boolean;
  joinLevel: RuntimeGroupMemberType;
}

export interface GroupV2ClanInfo {
  clanCallsign: string;
  clanBannerData: ClanBanner;
}

export interface ClanBanner {
  decalId: number;
  decalColorId: number;
  decalBackgroundColorId: number;
  gonfalonId: number;
  gonfalonColorId: number;
  gonfalonDetailId: number;
  gonfalonDetailColorId: number;
}

export interface GroupV2ClanInfoAndInvestment {
  d2ClanProgressions: { [key: string]: DestinyProgression };
  clanCallsign: string;
  clanBannerData: ClanBanner;
}

export interface GroupUserBase {
  groupId: string;
  destinyUserInfo: GroupUserInfoCard;
  bungieNetUserInfo: UserInfoCard;
  joinDate: string;
}

export interface GroupMember {
  memberType: RuntimeGroupMemberType;
  isOnline: boolean;
  lastOnlineStatusChange: string;
  groupId: string;
  destinyUserInfo: GroupUserInfoCard;
  bungieNetUserInfo: UserInfoCard;
  joinDate: string;
}

export interface GroupPotentialMember {
  potentialStatus: GroupPotentialMemberStatus;
  groupId: string;
  destinyUserInfo: GroupUserInfoCard;
  bungieNetUserInfo: UserInfoCard;
  joinDate: string;
}

export interface GroupV2Card {
  groupId: string;
  name: string;
  groupType: GroupType;
  creationDate: string;
  about: string;
  motto: string;
  memberCount: number;
  locale: string;
  membershipOption: MembershipOption;
  capabilities: Capabilities;
  clanInfo: GroupV2ClanInfo;
  avatarPath: string;
  theme: string;
}

export interface GroupSearchResponse {
  results: GroupV2Card[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface GroupQuery {
  name: string;
  groupType: GroupType;
  creationDate: GroupDateRange;
  sortBy: GroupSortBy;
  groupMemberCountFilter: number;
  localeFilter: string;
  tagText: string;
  itemsPerPage: number;
  currentPage: number;
  requestContinuationToken: string;
}

export interface GroupNameSearchRequest {
  groupName: string;
  groupType: GroupType;
}

export interface GroupOptionalConversation {
  groupId: string;
  conversationId: string;
  chatEnabled: boolean;
  chatName: string;
  chatSecurity: ChatSecuritySetting;
}

export interface GroupEditAction {
  name: string;
  about: string;
  motto: string;
  theme: string;
  avatarImageIndex: number;
  tags: string;
  isPublic: boolean;
  membershipOption: number;
  isPublicTopicAdminOnly: boolean;
  allowChat: boolean;
  chatSecurity: number;
  callsign: string;
  locale: string;
  homepage: number;
  enableInvitationMessagingForAdmins: boolean;
  defaultPublicity: number;
}

export interface GroupOptionsEditAction {
  InvitePermissionOverride: boolean;
  UpdateCulturePermissionOverride: boolean;
  HostGuidedGamePermissionOverride: number;
  UpdateBannerPermissionOverride: boolean;
  JoinLevel: number;
}

export interface GroupOptionalConversationAddRequest {
  chatName: string;
  chatSecurity: ChatSecuritySetting;
}

export interface GroupOptionalConversationEditRequest {
  chatEnabled: boolean;
  chatName: string;
  chatSecurity: number;
}

export interface GroupMemberLeaveResult {
  group: GroupV2;
  groupDeleted: boolean;
}

export interface GroupBanRequest {
  comment: string;
  length: IgnoreLength;
}

export interface GroupBan {
  groupId: string;
  lastModifiedBy: UserInfoCard;
  createdBy: UserInfoCard;
  dateBanned: string;
  dateExpires: string;
  comment: string;
  bungieNetUserInfo: UserInfoCard;
  destinyUserInfo: GroupUserInfoCard;
}

export interface GroupMemberApplication {
  groupId: string;
  creationDate: string;
  resolveState: GroupApplicationResolveState;
  resolveDate: string;
  resolvedByMembershipId: string;
  requestMessage: string;
  resolveMessage: string;
  destinyUserInfo: GroupUserInfoCard;
  bungieNetUserInfo: UserInfoCard;
}

export interface GroupApplicationRequest {
  message: string;
}

export interface GroupApplicationListRequest {
  memberships: UserMembership[];
  message: string;
}

export interface GroupMembershipBase {
  group: GroupV2;
}

export interface GroupMembership {
  member: GroupMember;
  group: GroupV2;
}

export interface GroupMembershipSearchResponse {
  results: GroupMembership[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface GetGroupsForMemberResponse {
  areAllMembershipsInactive: { [key: string]: boolean };
  results: GroupMembership[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface GroupPotentialMembership {
  member: GroupPotentialMember;
  group: GroupV2;
}

export interface GroupPotentialMembershipSearchResponse {
  results: GroupPotentialMembership[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface GroupApplicationResponse {
  resolution: GroupApplicationResolveState;
}

export interface ContentTypeDescription {
  cType: string;
  name: string;
  contentDescription: string;
  previewImage: string;
  priority: number;
  reminder: string;
  properties: ContentTypeProperty[];
  tagMetadata: TagMetadataDefinition[];
  tagMetadataItems: { [key: string]: TagMetadataItem };
  usageExamples: string[];
  showInContentEditor: boolean;
  typeOf: string;
  bindIdentifierToProperty: string;
  boundRegex: string;
  forceIdentifierBinding: boolean;
  allowComments: boolean;
  autoEnglishPropertyFallback: boolean;
  bulkUploadable: boolean;
  previews: ContentPreview[];
  suppressCmsPath: boolean;
  propertySections: ContentTypePropertySection[];
}

export interface ContentTypeProperty {
  name: string;
  rootPropertyName: string;
  readableName: string;
  value: string;
  propertyDescription: string;
  localizable: boolean;
  fallback: boolean;
  enabled: boolean;
  order: number;
  visible: boolean;
  isTitle: boolean;
  required: boolean;
  maxLength: number;
  maxByteLength: number;
  maxFileSize: number;
  regexp: string;
  validateAs: string;
  rssAttribute: string;
  visibleDependency: string;
  visibleOn: string;
  datatype: ContentPropertyDataTypeEnum;
  attributes: { [key: string]: string };
  childProperties: ContentTypeProperty[];
  contentTypeAllowed: string;
  bindToProperty: string;
  boundRegex: string;
  representationSelection: { [key: string]: string };
  defaultValues: ContentTypeDefaultValue[];
  isExternalAllowed: boolean;
  propertySection: string;
  weight: number;
  entitytype: string;
  isCombo: boolean;
  suppressProperty: boolean;
  legalContentTypes: string[];
  representationValidationString: string;
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  isVideo: boolean;
  isImage: boolean;
}

export interface ContentTypeDefaultValue {
  whenClause: string;
  whenValue: string;
  defaultValue: string;
}

export interface TagMetadataDefinition {
  description: string;
  order: number;
  items: TagMetadataItem[];
  datatype: string;
  name: string;
  isRequired: boolean;
}

export interface TagMetadataItem {
  description: string;
  tagText: string;
  groups: string[];
  isDefault: boolean;
  name: string;
}

export interface ContentPreview {
  name: string;
  path: string;
  itemInSet: boolean;
  setTag: string;
  setNesting: number;
  useSetId: number;
}

export interface ContentTypePropertySection {
  name: string;
  readableName: string;
  collapsed: boolean;
}

export interface ContentItemPublicContract {
  contentId: string;
  cType: string;
  cmsPath: string;
  creationDate: string;
  modifyDate: string;
  allowComments: boolean;
  hasAgeGate: boolean;
  minimumAge: number;
  ratingImagePath: string;
  author: GeneralUser;
  autoEnglishPropertyFallback: boolean;
  properties: { [key: string]: object };
  representations: ContentRepresentation[];
  tags: string[];
  commentSummary: CommentSummary;
}

export interface ContentRepresentation {
  name: string;
  path: string;
  validationString: string;
}

export interface CommentSummary {
  topicId: string;
  commentCount: number;
}

export interface NewsArticleRssResponse {
  NewsArticles: NewsArticleRssItem[];
  CurrentPaginationToken: number;
  NextPaginationToken: number;
  ResultCountThisPage: number;
}

export interface NewsArticleRssItem {
  Title: string;
  Link: string;
  PubDate: string;
  UniqueIdentifier: string;
  Description: string;
}

export interface SearchResult {
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface PagedQuery {
  itemsPerPage: number;
  currentPage: number;
  requestContinuationToken: string;
}

export interface SearchResultOfContentItemPublicContract {
  results: ContentItemPublicContract[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface PostResponse {
  lastReplyTimestamp: string;
  IsPinned: boolean;
  urlMediaType: ForumMediaType;
  thumbnail: string;
  popularity: ForumPostPopularity;
  isActive: boolean;
  isAnnouncement: boolean;
  userRating: number;
  userHasRated: boolean;
  userHasMutedPost: boolean;
  latestReplyPostId: string;
  latestReplyAuthorId: string;
  ignoreStatus: IgnoreResponse;
  locale: string;
}

export interface PostSearchResponse {
  relatedPosts: PostResponse[];
  authors: GeneralUser[];
  groups: GroupResponse[];
  searchedTags: TagResponse[];
  polls: PollResponse[];
  recruitmentDetails: ForumRecruitmentDetail[];
  availablePages: number;
  results: PostResponse[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface PollResponse {
  topicId: string;
  results: PollResult[];
  totalVotes: number;
}

export interface PollResult {
  answerText: string;
  answerSlot: number;
  lastVoteDate: string;
  votes: number;
  requestingUserVoted: boolean;
}

export interface ForumRecruitmentDetail {
  topicId: string;
  microphoneRequired: boolean;
  intensity: ForumRecruitmentIntensityLabel;
  tone: ForumRecruitmentToneLabel;
  approved: boolean;
  conversationId: string;
  playerSlotsTotal: number;
  playerSlotsRemaining: number;
  Fireteam: GeneralUser[];
  kickedPlayerIds: string[];
}

export interface SearchResultOfPostResponse {
  results: PostResponse[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface DestinyProgression {
  progressionHash: number;
  dailyProgress: number;
  dailyLimit: number;
  weeklyProgress: number;
  weeklyLimit: number;
  currentProgress: number;
  level: number;
  levelCap: number;
  stepIndex: number;
  progressToNextLevel: number;
  nextLevelAt: number;
  currentResetCount: number;
  seasonResets: DestinyProgressionResetEntry[];
  rewardItemStates: DestinyProgressionRewardItemState[];
}

export interface DestinyProgressionResetEntry {
  season: number;
  resets: number;
}

export interface DestinyDefinition {
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyProgressionDefinition {
  displayProperties: DestinyProgressionDisplayPropertiesDefinition;
  scope: DestinyProgressionScope;
  repeatLastStep: boolean;
  source: string;
  steps: DestinyProgressionStepDefinition[];
  visible: boolean;
  factionHash: number;
  color: DestinyColor;
  rankIcon: string;
  rewardItems: DestinyProgressionRewardItemQuantity[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyDisplayPropertiesDefinition {
  description: string;
  name: string;
  icon: string;
  iconSequences: DestinyIconSequenceDefinition[];
  highResIcon: string;
  hasIcon: boolean;
}

export interface DestinyIconSequenceDefinition {
  frames: string[];
}

export interface DestinyProgressionDisplayPropertiesDefinition {
  displayUnitsName: string;
  description: string;
  name: string;
  icon: string;
  iconSequences: DestinyIconSequenceDefinition[];
  highResIcon: string;
  hasIcon: boolean;
}

export interface DestinyProgressionStepDefinition {
  stepName: string;
  displayEffectType: DestinyProgressionStepDisplayEffect;
  progressTotal: number;
  rewardItems: DestinyItemQuantity[];
  icon: string;
}

export interface DestinyItemQuantity {
  itemHash: number;
  itemInstanceId: string;
  quantity: number;
  hasConditionalVisibility: boolean;
}

export interface DestinyInventoryItemDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  tooltipNotifications: DestinyItemTooltipNotification[];
  collectibleHash: number;
  iconWatermark: string;
  iconWatermarkShelved: string;
  secondaryIcon: string;
  secondaryOverlay: string;
  secondarySpecial: string;
  backgroundColor: DestinyColor;
  screenshot: string;
  itemTypeDisplayName: string;
  flavorText: string;
  uiItemDisplayStyle: string;
  itemTypeAndTierDisplayName: string;
  displaySource: string;
  tooltipStyle: string;
  action: DestinyItemActionBlockDefinition;
  crafting: DestinyItemCraftingBlockDefinition;
  inventory: DestinyItemInventoryBlockDefinition;
  setData: DestinyItemSetBlockDefinition;
  stats: DestinyItemStatBlockDefinition;
  emblemObjectiveHash: number;
  equippingBlock: DestinyEquippingBlockDefinition;
  translationBlock: DestinyItemTranslationBlockDefinition;
  preview: DestinyItemPreviewBlockDefinition;
  quality: DestinyItemQualityBlockDefinition;
  value: DestinyItemValueBlockDefinition;
  sourceData: DestinyItemSourceBlockDefinition;
  objectives: DestinyItemObjectiveBlockDefinition;
  metrics: DestinyItemMetricBlockDefinition;
  plug: DestinyItemPlugDefinition;
  gearset: DestinyItemGearsetBlockDefinition;
  sack: DestinyItemSackBlockDefinition;
  sockets: DestinyItemSocketBlockDefinition;
  summary: DestinyItemSummaryBlockDefinition;
  talentGrid: DestinyItemTalentGridBlockDefinition;
  investmentStats: DestinyItemInvestmentStatDefinition[];
  perks: DestinyItemPerkEntryDefinition[];
  loreHash: number;
  summaryItemHash: number;
  animations: DestinyAnimationReference[];
  allowActions: boolean;
  links: HyperlinkReference[];
  doesPostmasterPullHaveSideEffects: boolean;
  nonTransferrable: boolean;
  itemCategoryHashes: number[];
  specialItemType: SpecialItemType;
  itemType: DestinyItemType;
  itemSubType: DestinyItemSubType;
  classType: DestinyClass;
  breakerType: DestinyBreakerType;
  breakerTypeHash: number;
  equippable: boolean;
  damageTypeHashes: number[];
  damageTypes: DamageType[];
  defaultDamageType: DamageType;
  defaultDamageTypeHash: number;
  seasonHash: number;
  isWrapper: boolean;
  traitIds: string[];
  traitHashes: number[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyItemTooltipNotification {
  displayString: string;
  displayStyle: string;
}

export interface DestinyColor {
  red: string;
  green: string;
  blue: string;
  alpha: string;
}

export interface DestinyItemActionBlockDefinition {
  verbName: string;
  verbDescription: string;
  isPositive: boolean;
  overlayScreenName: string;
  overlayIcon: string;
  requiredCooldownSeconds: number;
  requiredItems: DestinyItemActionRequiredItemDefinition[];
  progressionRewards: DestinyProgressionRewardDefinition[];
  actionTypeLabel: string;
  requiredLocation: string;
  requiredCooldownHash: number;
  deleteOnAction: boolean;
  consumeEntireStack: boolean;
  useOnAcquire: boolean;
}

export interface DestinyItemActionRequiredItemDefinition {
  count: number;
  itemHash: number;
  deleteOnAction: boolean;
}

export interface DestinyProgressionRewardDefinition {
  progressionMappingHash: number;
  amount: number;
  applyThrottles: boolean;
}

export interface DestinyProgressionMappingDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  displayUnits: string;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyItemCraftingBlockDefinition {
  outputItemHash: number;
  requiredSocketTypeHashes: number[];
  failedRequirementStrings: string[];
  baseMaterialRequirements: number;
  bonusPlugs: DestinyItemCraftingBlockBonusPlugDefinition[];
}

export interface DestinyItemCraftingBlockBonusPlugDefinition {
  socketTypeHash: number;
  plugItemHash: number;
}

export interface DestinySocketTypeDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  insertAction: DestinyInsertPlugActionDefinition;
  plugWhitelist: DestinyPlugWhitelistEntryDefinition[];
  socketCategoryHash: number;
  visibility: DestinySocketVisibility;
  alwaysRandomizeSockets: boolean;
  isPreviewEnabled: boolean;
  hideDuplicateReusablePlugs: boolean;
  overridesUiAppearance: boolean;
  avoidDuplicatesOnInitialization: boolean;
  currencyScalars: DestinySocketTypeScalarMaterialRequirementEntry[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyInsertPlugActionDefinition {
  actionExecuteSeconds: number;
  actionType: SocketTypeActionType;
}

export interface DestinyPlugWhitelistEntryDefinition {
  categoryHash: number;
  categoryIdentifier: string;
  reinitializationPossiblePlugHashes: number[];
}

export interface DestinySocketTypeScalarMaterialRequirementEntry {
  currencyItemHash: number;
  scalarValue: number;
}

export interface DestinySocketCategoryDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  uiCategoryStyle: number;
  categoryStyle: DestinySocketCategoryStyle;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyMaterialRequirementSetDefinition {
  materials: DestinyMaterialRequirement[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyMaterialRequirement {
  itemHash: number;
  deleteOnAction: boolean;
  count: number;
  countIsConstant: boolean;
  omitFromRequirements: boolean;
}

export interface DestinyItemInventoryBlockDefinition {
  stackUniqueLabel: string;
  maxStackSize: number;
  bucketTypeHash: number;
  recoveryBucketTypeHash: number;
  tierTypeHash: number;
  isInstanceItem: boolean;
  tierTypeName: string;
  tierType: TierType;
  expirationTooltip: string;
  expiredInActivityMessage: string;
  expiredInOrbitMessage: string;
  suppressExpirationWhenObjectivesComplete: boolean;
  recipeItemHash: number;
}

export interface DestinyInventoryBucketDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  scope: BucketScope;
  category: BucketCategory;
  bucketOrder: number;
  itemCount: number;
  location: ItemLocation;
  hasTransferDestination: boolean;
  enabled: boolean;
  fifo: boolean;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyItemTierTypeDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  infusionProcess: DestinyItemTierTypeInfusionBlock;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyItemTierTypeInfusionBlock {
  baseQualityTransferRatio: number;
  minimumQualityIncrement: number;
}

export interface DestinyItemSetBlockDefinition {
  itemList: DestinyItemSetBlockEntryDefinition[];
  requireOrderedSetItemAdd: boolean;
  setIsFeatured: boolean;
  setType: string;
  questLineName: string;
  questLineDescription: string;
  questStepSummary: string;
}

export interface DestinyItemSetBlockEntryDefinition {
  trackingValue: number;
  itemHash: number;
}

export interface DestinyItemStatBlockDefinition {
  disablePrimaryStatDisplay: boolean;
  statGroupHash: number;
  stats: { [key: string]: DestinyInventoryItemStatDefinition };
  hasDisplayableStats: boolean;
  primaryBaseStatHash: number;
}

export interface DestinyInventoryItemStatDefinition {
  statHash: number;
  value: number;
  minimum: number;
  maximum: number;
  displayMaximum: number;
}

export interface DestinyStatDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  aggregationType: DestinyStatAggregationType;
  hasComputedBlock: boolean;
  statCategory: DestinyStatCategory;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyStatGroupDefinition {
  maximumValue: number;
  uiPosition: number;
  scaledStats: DestinyStatDisplayDefinition[];
  overrides: { [key: string]: DestinyStatOverrideDefinition };
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyStatDisplayDefinition {
  statHash: number;
  maximumValue: number;
  displayAsNumeric: boolean;
  displayInterpolation: InterpolationPoint[];
}

export interface DestinyStatOverrideDefinition {
  statHash: number;
  displayProperties: DestinyDisplayPropertiesDefinition;
}

export interface DestinyEquippingBlockDefinition {
  gearsetItemHash: number;
  uniqueLabel: string;
  uniqueLabelHash: number;
  equipmentSlotTypeHash: number;
  attributes: EquippingItemBlockAttributes;
  ammoType: DestinyAmmunitionType;
  displayStrings: string[];
}

export interface DestinyEquipmentSlotDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  equipmentCategoryHash: number;
  bucketTypeHash: number;
  applyCustomArtDyes: boolean;
  artDyeChannels: DestinyArtDyeReference[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyArtDyeReference {
  artDyeChannelHash: number;
}

export interface DestinyItemTranslationBlockDefinition {
  weaponPatternIdentifier: string;
  weaponPatternHash: number;
  defaultDyes: DyeReference[];
  lockedDyes: DyeReference[];
  customDyes: DyeReference[];
  arrangements: DestinyGearArtArrangementReference[];
  hasGeometry: boolean;
}

export interface DyeReference {
  channelHash: number;
  dyeHash: number;
}

export interface DestinyGearArtArrangementReference {
  classHash: number;
  artArrangementHash: number;
}

export interface DestinyClassDefinition {
  classType: DestinyClass;
  displayProperties: DestinyDisplayPropertiesDefinition;
  genderedClassNames: { [key: string]: string };
  genderedClassNamesByGenderHash: { [key: string]: string };
  mentorVendorHash: number;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyGenderDefinition {
  genderType: DestinyGender;
  displayProperties: DestinyDisplayPropertiesDefinition;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyVendorDefinition {
  displayProperties: DestinyVendorDisplayPropertiesDefinition;
  vendorProgressionType: DestinyVendorProgressionType;
  buyString: string;
  sellString: string;
  displayItemHash: number;
  inhibitBuying: boolean;
  inhibitSelling: boolean;
  factionHash: number;
  resetIntervalMinutes: number;
  resetOffsetMinutes: number;
  failureStrings: string[];
  unlockRanges: DateRange[];
  vendorIdentifier: string;
  vendorPortrait: string;
  vendorBanner: string;
  enabled: boolean;
  visible: boolean;
  vendorSubcategoryIdentifier: string;
  consolidateCategories: boolean;
  actions: DestinyVendorActionDefinition[];
  categories: DestinyVendorCategoryEntryDefinition[];
  originalCategories: DestinyVendorCategoryEntryDefinition[];
  displayCategories: DestinyDisplayCategoryDefinition[];
  interactions: DestinyVendorInteractionDefinition[];
  inventoryFlyouts: DestinyVendorInventoryFlyoutDefinition[];
  itemList: DestinyVendorItemDefinition[];
  services: DestinyVendorServiceDefinition[];
  acceptedItems: DestinyVendorAcceptedItemDefinition[];
  returnWithVendorRequest: boolean;
  locations: DestinyVendorLocationDefinition[];
  groups: DestinyVendorGroupReference[];
  ignoreSaleItemHashes: number[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyVendorDisplayPropertiesDefinition {
  largeIcon: string;
  subtitle: string;
  originalIcon: string;
  requirementsDisplay: DestinyVendorRequirementDisplayEntryDefinition[];
  smallTransparentIcon: string;
  mapIcon: string;
  largeTransparentIcon: string;
  description: string;
  name: string;
  icon: string;
  iconSequences: DestinyIconSequenceDefinition[];
  highResIcon: string;
  hasIcon: boolean;
}

export interface DestinyVendorRequirementDisplayEntryDefinition {
  icon: string;
  name: string;
  source: string;
  type: string;
}

export interface DestinyVendorActionDefinition {
  description: string;
  executeSeconds: number;
  icon: string;
  name: string;
  verb: string;
  isPositive: boolean;
  actionId: string;
  actionHash: number;
  autoPerformAction: boolean;
}

export interface DestinyVendorCategoryEntryDefinition {
  categoryIndex: number;
  sortValue: number;
  categoryHash: number;
  quantityAvailable: number;
  showUnavailableItems: boolean;
  hideIfNoCurrency: boolean;
  hideFromRegularPurchase: boolean;
  buyStringOverride: string;
  disabledDescription: string;
  displayTitle: string;
  overlay: DestinyVendorCategoryOverlayDefinition;
  vendorItemIndexes: number[];
  isPreview: boolean;
  isDisplayOnly: boolean;
  resetIntervalMinutesOverride: number;
  resetOffsetMinutesOverride: number;
}

export interface DestinyVendorCategoryOverlayDefinition {
  choiceDescription: string;
  description: string;
  icon: string;
  title: string;
  currencyItemHash: number;
}

export interface DestinyDisplayCategoryDefinition {
  index: number;
  identifier: string;
  displayCategoryHash: number;
  displayProperties: DestinyDisplayPropertiesDefinition;
  displayInBanner: boolean;
  progressionHash: number;
  sortOrder: VendorDisplayCategorySortOrder;
  displayStyleHash: number;
  displayStyleIdentifier: string;
}

export interface DestinyVendorInteractionDefinition {
  interactionIndex: number;
  replies: DestinyVendorInteractionReplyDefinition[];
  vendorCategoryIndex: number;
  questlineItemHash: number;
  sackInteractionList: DestinyVendorInteractionSackEntryDefinition[];
  uiInteractionType: number;
  interactionType: VendorInteractionType;
  rewardBlockLabel: string;
  rewardVendorCategoryIndex: number;
  flavorLineOne: string;
  flavorLineTwo: string;
  headerDisplayProperties: DestinyDisplayPropertiesDefinition;
  instructions: string;
}

export interface DestinyVendorInteractionReplyDefinition {
  itemRewardsSelection: DestinyVendorInteractionRewardSelection;
  reply: string;
  replyType: DestinyVendorReplyType;
}

export interface DestinyVendorInteractionSackEntryDefinition {
  sackType: number;
}

export interface DestinyVendorInventoryFlyoutDefinition {
  lockedDescription: string;
  displayProperties: DestinyDisplayPropertiesDefinition;
  buckets: DestinyVendorInventoryFlyoutBucketDefinition[];
  flyoutId: number;
  suppressNewness: boolean;
  equipmentSlotHash: number;
}

export interface DestinyVendorInventoryFlyoutBucketDefinition {
  collapsible: boolean;
  inventoryBucketHash: number;
  sortItemsBy: DestinyItemSortType;
}

export interface DestinyVendorItemDefinition {
  vendorItemIndex: number;
  itemHash: number;
  quantity: number;
  failureIndexes: number[];
  currencies: DestinyVendorItemQuantity[];
  refundPolicy: DestinyVendorItemRefundPolicy;
  refundTimeLimit: number;
  creationLevels: DestinyItemCreationEntryLevelDefinition[];
  displayCategoryIndex: number;
  categoryIndex: number;
  originalCategoryIndex: number;
  minimumLevel: number;
  maximumLevel: number;
  action: DestinyVendorSaleItemActionBlockDefinition;
  displayCategory: string;
  inventoryBucketHash: number;
  visibilityScope: DestinyGatingScope;
  purchasableScope: DestinyGatingScope;
  exclusivity: BungieMembershipType;
  isOffer: boolean;
  isCrm: boolean;
  sortValue: number;
  expirationTooltip: string;
  redirectToSaleIndexes: number[];
  socketOverrides: DestinyVendorItemSocketOverride[];
  unpurchasable: boolean;
}

export interface DestinyVendorItemQuantity {
  itemHash: number;
  itemInstanceId: string;
  quantity: number;
  hasConditionalVisibility: boolean;
}

export interface DestinyItemCreationEntryLevelDefinition {
  level: number;
}

export interface DestinyVendorSaleItemActionBlockDefinition {
  executeSeconds: number;
  isPositive: boolean;
}

export interface DestinyVendorItemSocketOverride {
  singleItemHash: number;
  randomizedOptionsCount: number;
  socketTypeHash: number;
}

export interface DestinyVendorServiceDefinition {
  name: string;
}

export interface DestinyVendorAcceptedItemDefinition {
  acceptedInventoryBucketHash: number;
  destinationInventoryBucketHash: number;
}

export interface DestinyVendorLocationDefinition {
  destinationHash: number;
  backgroundImagePath: string;
}

export interface DestinyDestinationDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  placeHash: number;
  defaultFreeroamActivityHash: number;
  activityGraphEntries: DestinyActivityGraphListEntryDefinition[];
  bubbleSettings: DestinyDestinationBubbleSettingDefinition[];
  bubbles: DestinyBubbleDefinition[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyActivityGraphListEntryDefinition {
  activityGraphHash: number;
}

export interface DestinyActivityGraphDefinition {
  nodes: DestinyActivityGraphNodeDefinition[];
  artElements: DestinyActivityGraphArtElementDefinition[];
  connections: DestinyActivityGraphConnectionDefinition[];
  displayObjectives: DestinyActivityGraphDisplayObjectiveDefinition[];
  displayProgressions: DestinyActivityGraphDisplayProgressionDefinition[];
  linkedGraphs: DestinyLinkedGraphDefinition[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyActivityGraphNodeDefinition {
  nodeId: number;
  overrideDisplay: DestinyDisplayPropertiesDefinition;
  position: DestinyPositionDefinition;
  featuringStates: DestinyActivityGraphNodeFeaturingStateDefinition[];
  activities: DestinyActivityGraphNodeActivityDefinition[];
  states: DestinyActivityGraphNodeStateEntry[];
}

export interface DestinyPositionDefinition {
  x: number;
  y: number;
  z: number;
}

export interface DestinyActivityGraphNodeFeaturingStateDefinition {
  highlightType: ActivityGraphNodeHighlightType;
}

export interface DestinyActivityGraphNodeActivityDefinition {
  nodeActivityId: number;
  activityHash: number;
}

export interface DestinyActivityDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  originalDisplayProperties: DestinyDisplayPropertiesDefinition;
  selectionScreenDisplayProperties: DestinyDisplayPropertiesDefinition;
  releaseIcon: string;
  releaseTime: number;
  activityLightLevel: number;
  destinationHash: number;
  placeHash: number;
  activityTypeHash: number;
  tier: number;
  pgcrImage: string;
  rewards: DestinyActivityRewardDefinition[];
  modifiers: DestinyActivityModifierReferenceDefinition[];
  isPlaylist: boolean;
  challenges: DestinyActivityChallengeDefinition[];
  optionalUnlockStrings: DestinyActivityUnlockStringDefinition[];
  playlistItems: DestinyActivityPlaylistItemDefinition[];
  activityGraphList: DestinyActivityGraphListEntryDefinition[];
  matchmaking: DestinyActivityMatchmakingBlockDefinition;
  guidedGame: DestinyActivityGuidedBlockDefinition;
  directActivityModeHash: number;
  directActivityModeType: number;
  loadouts: DestinyActivityLoadoutRequirementSet[];
  activityModeHashes: number[];
  activityModeTypes: DestinyActivityModeType[];
  isPvP: boolean;
  insertionPoints: DestinyActivityInsertionPointDefinition[];
  activityLocationMappings: DestinyEnvironmentLocationMapping[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyActivityRewardDefinition {
  rewardText: string;
  rewardItems: DestinyItemQuantity[];
}

export interface DestinyActivityModifierReferenceDefinition {
  activityModifierHash: number;
}

export interface DestinyActivityModifierDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  displayInNavMode: boolean;
  displayInActivitySelection: boolean;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyActivityChallengeDefinition {
  objectiveHash: number;
  dummyRewards: DestinyItemQuantity[];
}

export interface DestinyObjectiveDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  completionValue: number;
  scope: DestinyGatingScope;
  locationHash: number;
  allowNegativeValue: boolean;
  allowValueChangeWhenCompleted: boolean;
  isCountingDownward: boolean;
  valueStyle: DestinyUnlockValueUIStyle;
  progressDescription: string;
  perks: DestinyObjectivePerkEntryDefinition;
  stats: DestinyObjectiveStatEntryDefinition;
  minimumVisibilityThreshold: number;
  allowOvercompletion: boolean;
  showValueOnComplete: boolean;
  completedValueStyle: DestinyUnlockValueUIStyle;
  inProgressValueStyle: DestinyUnlockValueUIStyle;
  uiLabel: string;
  uiStyle: DestinyObjectiveUiStyle;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyObjectivePerkEntryDefinition {
  perkHash: number;
  style: DestinyObjectiveGrantStyle;
}

export interface DestinySandboxPerkDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  perkIdentifier: string;
  isDisplayable: boolean;
  damageType: DamageType;
  damageTypeHash: number;
  perkGroups: DestinyTalentNodeStepGroups;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyTalentNodeStepGroups {
  weaponPerformance: DestinyTalentNodeStepWeaponPerformances;
  impactEffects: DestinyTalentNodeStepImpactEffects;
  guardianAttributes: DestinyTalentNodeStepGuardianAttributes;
  lightAbilities: DestinyTalentNodeStepLightAbilities;
  damageTypes: DestinyTalentNodeStepDamageTypes;
}

export interface DestinyDamageTypeDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  transparentIconPath: string;
  showIcon: boolean;
  enumValue: DamageType;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyObjectiveStatEntryDefinition {
  stat: DestinyItemInvestmentStatDefinition;
  style: DestinyObjectiveGrantStyle;
}

export interface DestinyItemInvestmentStatDefinition {
  statTypeHash: number;
  value: number;
  isConditionallyActive: boolean;
}

export interface DestinyLocationDefinition {
  vendorHash: number;
  locationReleases: DestinyLocationReleaseDefinition[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyLocationReleaseDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  smallTransparentIcon: string;
  mapIcon: string;
  largeTransparentIcon: string;
  spawnPoint: number;
  destinationHash: number;
  activityHash: number;
  activityGraphHash: number;
  activityGraphNodeHash: number;
  activityBubbleName: number;
  activityPathBundle: number;
  activityPathDestination: number;
  navPointType: DestinyActivityNavPointType;
  worldPosition: number[];
}

export interface DestinyActivityUnlockStringDefinition {
  displayString: string;
}

export interface DestinyActivityPlaylistItemDefinition {
  activityHash: number;
  directActivityModeHash: number;
  directActivityModeType: number;
  activityModeHashes: number[];
  activityModeTypes: DestinyActivityModeType[];
}

export interface DestinyActivityModeDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  pgcrImage: string;
  modeType: DestinyActivityModeType;
  activityModeCategory: DestinyActivityModeCategory;
  isTeamBased: boolean;
  isAggregateMode: boolean;
  parentHashes: number[];
  friendlyName: string;
  activityModeMappings: { [key: string]: number };
  display: boolean;
  order: number;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyActivityMatchmakingBlockDefinition {
  isMatchmade: boolean;
  minParty: number;
  maxParty: number;
  maxPlayers: number;
  requiresGuardianOath: boolean;
}

export interface DestinyActivityGuidedBlockDefinition {
  guidedMaxLobbySize: number;
  guidedMinLobbySize: number;
  guidedDisbandCount: number;
}

export interface DestinyActivityLoadoutRequirementSet {
  requirements: DestinyActivityLoadoutRequirement[];
}

export interface DestinyActivityLoadoutRequirement {
  equipmentSlotHash: number;
  allowedEquippedItemHashes: number[];
  allowedWeaponSubTypes: DestinyItemSubType[];
}

export interface DestinyActivityInsertionPointDefinition {
  phaseHash: number;
}

export interface DestinyEnvironmentLocationMapping {
  locationHash: number;
  activationSource: string;
  itemHash: number;
  objectiveHash: number;
  activityHash: number;
}

export interface DestinyPlaceDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyActivityTypeDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyActivityGraphNodeStateEntry {
  state: DestinyGraphNodeState;
}

export interface DestinyActivityGraphArtElementDefinition {
  position: DestinyPositionDefinition;
}

export interface DestinyActivityGraphConnectionDefinition {
  sourceNodeHash: number;
  destNodeHash: number;
}

export interface DestinyActivityGraphDisplayObjectiveDefinition {
  id: number;
  objectiveHash: number;
}

export interface DestinyActivityGraphDisplayProgressionDefinition {
  id: number;
  progressionHash: number;
}

export interface DestinyLinkedGraphDefinition {
  description: string;
  name: string;
  unlockExpression: DestinyUnlockExpressionDefinition;
  linkedGraphId: number;
  linkedGraphs: DestinyLinkedGraphEntryDefinition[];
  overview: string;
}

export interface DestinyUnlockExpressionDefinition {
  scope: DestinyGatingScope;
}

export interface DestinyLinkedGraphEntryDefinition {
  activityGraphHash: number;
}

export interface DestinyDestinationBubbleSettingDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
}

export interface DestinyBubbleDefinition {
  hash: number;
  displayProperties: DestinyDisplayPropertiesDefinition;
}

export interface DestinyVendorGroupReference {
  vendorGroupHash: number;
}

export interface DestinyVendorGroupDefinition {
  order: number;
  categoryName: string;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyFactionDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  progressionHash: number;
  tokenValues: { [key: string]: number };
  rewardItemHash: number;
  rewardVendorHash: number;
  vendors: DestinyFactionVendorDefinition[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyFactionVendorDefinition {
  vendorHash: number;
  destinationHash: number;
  backgroundImagePath: string;
}

export interface DestinySandboxPatternDefinition {
  patternHash: number;
  patternGlobalTagIdHash: number;
  weaponContentGroupHash: number;
  weaponTranslationGroupHash: number;
  weaponTypeHash: number;
  weaponType: DestinyItemSubType;
  filters: DestinyArrangementRegionFilterDefinition[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyArrangementRegionFilterDefinition {
  artArrangementRegionHash: number;
  artArrangementRegionIndex: number;
  statHash: number;
  arrangementIndexByStatValue: { [key: string]: number };
}

export interface DestinyItemPreviewBlockDefinition {
  screenStyle: string;
  previewVendorHash: number;
  artifactHash: number;
  previewActionString: string;
  derivedItemCategories: DestinyDerivedItemCategoryDefinition[];
}

export interface DestinyDerivedItemCategoryDefinition {
  categoryDescription: string;
  items: DestinyDerivedItemDefinition[];
}

export interface DestinyDerivedItemDefinition {
  itemHash: number;
  itemName: string;
  itemDetail: string;
  itemDescription: string;
  iconPath: string;
  vendorItemIndex: number;
}

export interface DestinyArtifactDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  translationBlock: DestinyItemTranslationBlockDefinition;
  tiers: DestinyArtifactTierDefinition[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyArtifactTierDefinition {
  tierHash: number;
  displayTitle: string;
  progressRequirementMessage: string;
  items: DestinyArtifactTierItemDefinition[];
  minimumUnlockPointsUsedRequirement: number;
}

export interface DestinyArtifactTierItemDefinition {
  itemHash: number;
}

export interface DestinyItemQualityBlockDefinition {
  itemLevels: number[];
  qualityLevel: number;
  infusionCategoryName: string;
  infusionCategoryHash: number;
  infusionCategoryHashes: number[];
  progressionLevelRequirementHash: number;
  currentVersion: number;
  versions: DestinyItemVersionDefinition[];
  displayVersionWatermarkIcons: string[];
}

export interface DestinyItemVersionDefinition {
  powerCapHash: number;
}

export interface DestinyPowerCapDefinition {
  powerCap: number;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyProgressionLevelRequirementDefinition {
  requirementCurve: InterpolationPointFloat[];
  progressionHash: number;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyItemValueBlockDefinition {
  itemValue: DestinyItemQuantity[];
  valueDescription: string;
}

export interface DestinyItemSourceBlockDefinition {
  sourceHashes: number[];
  sources: DestinyItemSourceDefinition[];
  exclusive: BungieMembershipType;
  vendorSources: DestinyItemVendorSourceReference[];
}

export interface DestinyItemSourceDefinition {
  level: number;
  minQuality: number;
  maxQuality: number;
  minLevelRequired: number;
  maxLevelRequired: number;
  computedStats: { [key: string]: DestinyInventoryItemStatDefinition };
  sourceHashes: number[];
}

export interface DestinyRewardSourceDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  category: DestinyRewardSourceCategory;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyItemVendorSourceReference {
  vendorHash: number;
  vendorItemIndexes: number[];
}

export interface DestinyItemObjectiveBlockDefinition {
  objectiveHashes: number[];
  displayActivityHashes: number[];
  requireFullObjectiveCompletion: boolean;
  questlineItemHash: number;
  narrative: string;
  objectiveVerbName: string;
  questTypeIdentifier: string;
  questTypeHash: number;
  perObjectiveDisplayProperties: DestinyObjectiveDisplayProperties[];
  displayAsStatTracker: boolean;
}

export interface DestinyObjectiveDisplayProperties {
  activityHash: number;
  displayOnItemPreviewScreen: boolean;
}

export interface DestinyItemMetricBlockDefinition {
  availableMetricCategoryNodeHashes: number[];
}

export interface DestinyPresentationNodeBaseDefinition {
  presentationNodeType: DestinyPresentationNodeType;
  traitIds: string[];
  traitHashes: number[];
  parentNodeHashes: number[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyTraitDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  traitCategoryId: string;
  traitCategoryHash: number;
  displayHint: string;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyTraitCategoryDefinition {
  traitCategoryId: string;
  traitHashes: number[];
  traitIds: string[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyScoredPresentationNodeBaseDefinition {
  maxCategoryRecordScore: number;
  presentationNodeType: DestinyPresentationNodeType;
  traitIds: string[];
  traitHashes: number[];
  parentNodeHashes: number[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyPresentationNodeDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  originalIcon: string;
  rootViewIcon: string;
  nodeType: DestinyPresentationNodeType;
  scope: DestinyScope;
  objectiveHash: number;
  completionRecordHash: number;
  children: DestinyPresentationNodeChildrenBlock;
  displayStyle: DestinyPresentationDisplayStyle;
  screenStyle: DestinyPresentationScreenStyle;
  requirements: DestinyPresentationNodeRequirementsBlock;
  disableChildSubscreenNavigation: boolean;
  maxCategoryRecordScore: number;
  presentationNodeType: DestinyPresentationNodeType;
  traitIds: string[];
  traitHashes: number[];
  parentNodeHashes: number[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyPresentationNodeChildrenBlock {
  presentationNodes: DestinyPresentationNodeChildEntry[];
  collectibles: DestinyPresentationNodeCollectibleChildEntry[];
  records: DestinyPresentationNodeRecordChildEntry[];
  metrics: DestinyPresentationNodeMetricChildEntry[];
  craftables: DestinyPresentationNodeCraftableChildEntry[];
}

export interface DestinyPresentationNodeChildEntryBase {
  nodeDisplayPriority: number;
}

export interface DestinyPresentationNodeChildEntry {
  presentationNodeHash: number;
  nodeDisplayPriority: number;
}

export interface DestinyPresentationNodeCollectibleChildEntry {
  collectibleHash: number;
  nodeDisplayPriority: number;
}

export interface DestinyCollectibleDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  scope: DestinyScope;
  sourceString: string;
  sourceHash: number;
  itemHash: number;
  acquisitionInfo: DestinyCollectibleAcquisitionBlock;
  stateInfo: DestinyCollectibleStateBlock;
  presentationInfo: DestinyPresentationChildBlock;
  presentationNodeType: DestinyPresentationNodeType;
  traitIds: string[];
  traitHashes: number[];
  parentNodeHashes: number[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyCollectibleAcquisitionBlock {
  acquireMaterialRequirementHash: number;
  acquireTimestampUnlockValueHash: number;
}

export interface DestinyUnlockValueDefinition {
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyCollectibleStateBlock {
  obscuredOverrideItemHash: number;
  requirements: DestinyPresentationNodeRequirementsBlock;
}

export interface DestinyPresentationNodeRequirementsBlock {
  entitlementUnavailableMessage: string;
}

export interface DestinyPresentationChildBlock {
  presentationNodeType: DestinyPresentationNodeType;
  parentPresentationNodeHashes: number[];
  displayStyle: DestinyPresentationDisplayStyle;
}

export interface DestinyPresentationNodeRecordChildEntry {
  recordHash: number;
  nodeDisplayPriority: number;
}

export interface DestinyRecordDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  scope: DestinyScope;
  presentationInfo: DestinyPresentationChildBlock;
  loreHash: number;
  objectiveHashes: number[];
  recordValueStyle: DestinyRecordValueStyle;
  forTitleGilding: boolean;
  shouldShowLargeIcons: boolean;
  titleInfo: DestinyRecordTitleBlock;
  completionInfo: DestinyRecordCompletionBlock;
  stateInfo: SchemaRecordStateBlock;
  requirements: DestinyPresentationNodeRequirementsBlock;
  expirationInfo: DestinyRecordExpirationBlock;
  intervalInfo: DestinyRecordIntervalBlock;
  rewardItems: DestinyItemQuantity[];
  presentationNodeType: DestinyPresentationNodeType;
  traitIds: string[];
  traitHashes: number[];
  parentNodeHashes: number[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyRecordTitleBlock {
  hasTitle: boolean;
  titlesByGender: { [key: string]: string };
  titlesByGenderHash: { [key: string]: string };
  gildingTrackingRecordHash: number;
}

export interface DestinyRecordCompletionBlock {
  partialCompletionObjectiveCountThreshold: number;
  ScoreValue: number;
  shouldFireToast: boolean;
  toastStyle: DestinyRecordToastStyle;
}

export interface SchemaRecordStateBlock {
  featuredPriority: number;
  obscuredString: string;
}

export interface DestinyRecordExpirationBlock {
  hasExpiration: boolean;
  description: string;
  icon: string;
}

export interface DestinyRecordIntervalBlock {
  intervalObjectives: DestinyRecordIntervalObjective[];
  intervalRewards: DestinyRecordIntervalRewards[];
  originalObjectiveArrayInsertionIndex: number;
}

export interface DestinyRecordIntervalObjective {
  intervalObjectiveHash: number;
  intervalScoreValue: number;
}

export interface DestinyRecordIntervalRewards {
  intervalRewardItems: DestinyItemQuantity[];
}

export interface DestinyLoreDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  subtitle: string;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyPresentationNodeMetricChildEntry {
  metricHash: number;
  nodeDisplayPriority: number;
}

export interface DestinyMetricDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  trackingObjectiveHash: number;
  lowerValueIsBetter: boolean;
  presentationNodeType: DestinyPresentationNodeType;
  traitIds: string[];
  traitHashes: number[];
  parentNodeHashes: number[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyPresentationNodeCraftableChildEntry {
  craftableItemHash: number;
  nodeDisplayPriority: number;
}

export interface DestinyItemPlugDefinition {
  insertionRules: DestinyPlugRuleDefinition[];
  plugCategoryIdentifier: string;
  plugCategoryHash: number;
  onActionRecreateSelf: boolean;
  insertionMaterialRequirementHash: number;
  previewItemOverrideHash: number;
  enabledMaterialRequirementHash: number;
  enabledRules: DestinyPlugRuleDefinition[];
  uiPlugLabel: string;
  plugStyle: PlugUiStyles;
  plugAvailability: PlugAvailabilityMode;
  alternateUiPlugLabel: string;
  alternatePlugStyle: PlugUiStyles;
  isDummyPlug: boolean;
  parentItemOverride: DestinyParentItemOverride;
  energyCapacity: DestinyEnergyCapacityEntry;
  energyCost: DestinyEnergyCostEntry;
}

export interface DestinyPlugRuleDefinition {
  failureMessage: string;
}

export interface DestinyParentItemOverride {
  additionalEquipRequirementsDisplayStrings: string[];
  pipIcon: string;
}

export interface DestinyEnergyCapacityEntry {
  capacityValue: number;
  energyTypeHash: number;
  energyType: DestinyEnergyType;
}

export interface DestinyEnergyTypeDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  transparentIconPath: string;
  showIcon: boolean;
  enumValue: DestinyEnergyType;
  capacityStatHash: number;
  costStatHash: number;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyEnergyCostEntry {
  energyCost: number;
  energyTypeHash: number;
  energyType: DestinyEnergyType;
}

export interface DestinyItemGearsetBlockDefinition {
  trackingValueMax: number;
  itemList: number[];
}

export interface DestinyItemSackBlockDefinition {
  detailAction: string;
  openAction: string;
  selectItemCount: number;
  vendorSackType: string;
  openOnAcquire: boolean;
}

export interface DestinyItemSocketBlockDefinition {
  detail: string;
  socketEntries: DestinyItemSocketEntryDefinition[];
  intrinsicSockets: DestinyItemIntrinsicSocketEntryDefinition[];
  socketCategories: DestinyItemSocketCategoryDefinition[];
}

export interface DestinyItemSocketEntryDefinition {
  socketTypeHash: number;
  singleInitialItemHash: number;
  reusablePlugItems: DestinyItemSocketEntryPlugItemDefinition[];
  preventInitializationOnVendorPurchase: boolean;
  hidePerksInItemTooltip: boolean;
  plugSources: SocketPlugSources;
  reusablePlugSetHash: number;
  randomizedPlugSetHash: number;
  defaultVisible: boolean;
}

export interface DestinyItemSocketEntryPlugItemDefinition {
  plugItemHash: number;
}

export interface DestinyPlugSetDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  reusablePlugItems: DestinyItemSocketEntryPlugItemRandomizedDefinition[];
  isFakePlugSet: boolean;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyItemSocketEntryPlugItemRandomizedDefinition {
  craftingRequirements: DestinyPlugItemCraftingRequirements;
  currentlyCanRoll: boolean;
  plugItemHash: number;
}

export interface DestinyPlugItemCraftingRequirements {
  unlockRequirements: DestinyPlugItemCraftingUnlockRequirement[];
  requiredLevel: number;
  materialRequirementHashes: number[];
}

export interface DestinyPlugItemCraftingUnlockRequirement {
  failureDescription: string;
}

export interface DestinyItemIntrinsicSocketEntryDefinition {
  plugItemHash: number;
  socketTypeHash: number;
  defaultVisible: boolean;
}

export interface DestinyItemSocketCategoryDefinition {
  socketCategoryHash: number;
  socketIndexes: number[];
}

export interface DestinyItemSummaryBlockDefinition {
  sortPriority: number;
}

export interface DestinyItemTalentGridBlockDefinition {
  talentGridHash: number;
  itemDetailString: string;
  buildName: string;
  hudDamageType: DamageType;
  hudIcon: string;
}

export interface DestinyTalentGridDefinition {
  maxGridLevel: number;
  gridLevelPerColumn: number;
  progressionHash: number;
  nodes: DestinyTalentNodeDefinition[];
  exclusiveSets: DestinyTalentNodeExclusiveSetDefinition[];
  independentNodeIndexes: number[];
  groups: { [key: string]: DestinyTalentExclusiveGroup };
  nodeCategories: DestinyTalentNodeCategory[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyTalentNodeDefinition {
  nodeIndex: number;
  nodeHash: number;
  row: number;
  column: number;
  prerequisiteNodeIndexes: number[];
  binaryPairNodeIndex: number;
  autoUnlocks: boolean;
  lastStepRepeats: boolean;
  isRandom: boolean;
  randomActivationRequirement: DestinyNodeActivationRequirement;
  isRandomRepurchasable: boolean;
  steps: DestinyNodeStepDefinition[];
  exclusiveWithNodeHashes: number[];
  randomStartProgressionBarAtProgression: number;
  layoutIdentifier: string;
  groupHash: number;
  loreHash: number;
  nodeStyleIdentifier: string;
  ignoreForCompletion: boolean;
}

export interface DestinyNodeActivationRequirement {
  gridLevel: number;
  materialRequirementHashes: number[];
}

export interface DestinyNodeStepDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  stepIndex: number;
  nodeStepHash: number;
  interactionDescription: string;
  damageType: DamageType;
  damageTypeHash: number;
  activationRequirement: DestinyNodeActivationRequirement;
  canActivateNextStep: boolean;
  nextStepIndex: number;
  isNextStepRandom: boolean;
  perkHashes: number[];
  startProgressionBarAtProgress: number;
  statHashes: number[];
  affectsQuality: boolean;
  stepGroups: DestinyTalentNodeStepGroups;
  affectsLevel: boolean;
  socketReplacements: DestinyNodeSocketReplaceResponse[];
}

export interface DestinyNodeSocketReplaceResponse {
  socketTypeHash: number;
  plugItemHash: number;
}

export interface DestinyTalentNodeExclusiveSetDefinition {
  nodeIndexes: number[];
}

export interface DestinyTalentExclusiveGroup {
  groupHash: number;
  loreHash: number;
  nodeHashes: number[];
  opposingGroupHashes: number[];
  opposingNodeHashes: number[];
}

export interface DestinyTalentNodeCategory {
  identifier: string;
  isLoreDriven: boolean;
  displayProperties: DestinyDisplayPropertiesDefinition;
  nodeHashes: number[];
}

export interface DestinyItemPerkEntryDefinition {
  requirementDisplayString: string;
  perkHash: number;
  perkVisibility: ItemPerkVisibility;
}

export interface DestinyAnimationReference {
  animName: string;
  animIdentifier: string;
  path: string;
}

export interface DestinyItemCategoryDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  visible: boolean;
  deprecated: boolean;
  shortTitle: string;
  itemTypeRegex: string;
  grantDestinyBreakerType: DestinyBreakerType;
  plugCategoryIdentifier: string;
  itemTypeRegexNot: string;
  originBucketIdentifier: string;
  grantDestinyItemType: DestinyItemType;
  grantDestinySubType: DestinyItemSubType;
  grantDestinyClass: DestinyClass;
  traitId: string;
  groupedCategoryHashes: number[];
  parentCategoryHashes: number[];
  groupCategoryOnly: boolean;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyBreakerTypeDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  enumValue: DestinyBreakerType;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinySeasonDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  backgroundImagePath: string;
  seasonNumber: number;
  startDate: string;
  endDate: string;
  seasonPassHash: number;
  seasonPassProgressionHash: number;
  artifactItemHash: number;
  sealPresentationNodeHash: number;
  seasonalChallengesPresentationNodeHash: number;
  preview: DestinySeasonPreviewDefinition;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinySeasonPreviewDefinition {
  description: string;
  linkPath: string;
  videoLink: string;
  images: DestinySeasonPreviewImageDefinition[];
}

export interface DestinySeasonPreviewImageDefinition {
  thumbnailImage: string;
  highResImage: string;
}

export interface DestinySeasonPassDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  rewardProgressionHash: number;
  prestigeProgressionHash: number;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyProgressionRewardItemQuantity {
  rewardedAtProgressionLevel: number;
  acquisitionBehavior: DestinyProgressionRewardItemAcquisitionBehavior;
  uiDisplayStyle: string;
  claimUnlockDisplayStrings: string[];
  itemHash: number;
  itemInstanceId: string;
  quantity: number;
  hasConditionalVisibility: boolean;
}

export interface DestinyManifest {
  version: string;
  mobileAssetContentPath: string;
  mobileGearAssetDataBases: GearAssetDataBaseDefinition[];
  mobileWorldContentPaths: { [key: string]: string };
  jsonWorldContentPaths: { [key: string]: string };
  jsonWorldComponentContentPaths: { [key: string]: { [key: string]: string } };
  mobileClanBannerDatabasePath: string;
  mobileGearCDN: { [key: string]: string };
  iconImagePyramidInfo: ImagePyramidEntry[];
}

export interface GearAssetDataBaseDefinition {
  version: number;
  path: string;
}

export interface ImagePyramidEntry {
  name: string;
  factor: number;
}

export interface DestinyLinkedProfilesResponse {
  profiles: DestinyProfileUserInfoCard[];
  bnetMembership: UserInfoCard;
  profilesWithErrors: DestinyErrorProfile[];
}

export interface DestinyProfileUserInfoCard {
  dateLastPlayed: string;
  isOverridden: boolean;
  isCrossSavePrimary: boolean;
  platformSilver: DestinyPlatformSilverComponent;
  unpairedGameVersions: number;
  supplementalDisplayName: string;
  iconPath: string;
  crossSaveOverride: BungieMembershipType;
  applicableMembershipTypes: BungieMembershipType[];
  isPublic: boolean;
  membershipType: BungieMembershipType;
  membershipId: string;
  displayName: string;
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number;
}

export interface DestinyPlatformSilverComponent {
  platformSilver: { [key: string]: DestinyItemComponent };
}

export interface DestinyItemComponent {
  itemHash: number;
  itemInstanceId: string;
  quantity: number;
  bindStatus: ItemBindStatus;
  location: ItemLocation;
  bucketHash: number;
  transferStatus: TransferStatuses;
  lockable: boolean;
  state: ItemState;
  overrideStyleItemHash: number;
  expirationDate: string;
  isWrapper: boolean;
  tooltipNotificationIndexes: number[];
  metricHash: number;
  metricObjective: DestinyObjectiveProgress;
  versionNumber: number;
  itemValueVisibility: boolean[];
}

export interface DestinyObjectiveProgress {
  objectiveHash: number;
  destinationHash: number;
  activityHash: number;
  progress: number;
  completionValue: number;
  complete: boolean;
  visible: boolean;
}

export interface DestinyErrorProfile {
  errorCode: PlatformErrorCodes;
  infoCard: UserInfoCard;
}

export interface DestinyProfileResponse {
  vendorReceipts: SingleComponentResponseOfDestinyVendorReceiptsComponent;
  profileInventory: SingleComponentResponseOfDestinyInventoryComponent;
  profileCurrencies: SingleComponentResponseOfDestinyInventoryComponent;
  profile: SingleComponentResponseOfDestinyProfileComponent;
  platformSilver: SingleComponentResponseOfDestinyPlatformSilverComponent;
  profileKiosks: SingleComponentResponseOfDestinyKiosksComponent;
  profilePlugSets: SingleComponentResponseOfDestinyPlugSetsComponent;
  profileProgression: SingleComponentResponseOfDestinyProfileProgressionComponent;
  profilePresentationNodes: SingleComponentResponseOfDestinyPresentationNodesComponent;
  profileRecords: SingleComponentResponseOfDestinyProfileRecordsComponent;
  profileCollectibles: SingleComponentResponseOfDestinyProfileCollectiblesComponent;
  profileTransitoryData: SingleComponentResponseOfDestinyProfileTransitoryComponent;
  metrics: SingleComponentResponseOfDestinyMetricsComponent;
  profileStringVariables: SingleComponentResponseOfDestinyStringVariablesComponent;
  characters: DictionaryComponentResponseOfint64AndDestinyCharacterComponent;
  characterInventories: DictionaryComponentResponseOfint64AndDestinyInventoryComponent;
  characterProgressions: DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent;
  characterRenderData: DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent;
  characterActivities: DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent;
  characterEquipment: DictionaryComponentResponseOfint64AndDestinyInventoryComponent;
  characterKiosks: DictionaryComponentResponseOfint64AndDestinyKiosksComponent;
  characterPlugSets: DictionaryComponentResponseOfint64AndDestinyPlugSetsComponent;
  characterUninstancedItemComponents: {
    [key: string]: DestinyBaseItemComponentSetOfuint32;
  };
  characterPresentationNodes: DictionaryComponentResponseOfint64AndDestinyPresentationNodesComponent;
  characterRecords: DictionaryComponentResponseOfint64AndDestinyCharacterRecordsComponent;
  characterCollectibles: DictionaryComponentResponseOfint64AndDestinyCollectiblesComponent;
  characterStringVariables: DictionaryComponentResponseOfint64AndDestinyStringVariablesComponent;
  characterCraftables: DictionaryComponentResponseOfint64AndDestinyCraftablesComponent;
  itemComponents: DestinyItemComponentSetOfint64;
  characterCurrencyLookups: DictionaryComponentResponseOfint64AndDestinyCurrenciesComponent;
}

export interface DestinyVendorReceiptsComponent {
  receipts: DestinyVendorReceipt[];
}

export interface DestinyVendorReceipt {
  currencyPaid: DestinyItemQuantity[];
  itemReceived: DestinyItemQuantity;
  licenseUnlockHash: number;
  purchasedByCharacterId: string;
  refundPolicy: DestinyVendorItemRefundPolicy;
  sequenceNumber: number;
  timeToExpiration: string;
  expiresOn: string;
}

export interface DestinyInventoryComponent {
  items: DestinyItemComponent[];
}

export interface DestinyProfileComponent {
  userInfo: UserInfoCard;
  dateLastPlayed: string;
  versionsOwned: DestinyGameVersions;
  characterIds: string[];
  seasonHashes: number[];
  eventCardHashesOwned: number[];
  currentSeasonHash: number;
  currentSeasonRewardPowerCap: number;
  activeEventCardHash: number;
}

export interface DestinyEventCardDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  linkRedirectPath: string;
  color: DestinyColor;
  images: DestinyEventCardImages;
  triumphsPresentationNodeHash: number;
  sealPresentationNodeHash: number;
  ticketCurrencyItemHash: number;
  ticketVendorHash: number;
  ticketVendorCategoryHash: number;
  endTime: string;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyEventCardImages {
  unownedCardSleeveImagePath: string;
  unownedCardSleeveWrapImagePath: string;
  cardIncompleteImagePath: string;
  cardCompleteImagePath: string;
  cardCompleteWrapImagePath: string;
  progressIconImagePath: string;
  themeBackgroundImagePath: string;
}

export interface DestinyKiosksComponent {
  kioskItems: { [key: string]: DestinyKioskItem[] };
}

export interface DestinyKioskItem {
  index: number;
  canAcquire: boolean;
  failureIndexes: number[];
  flavorObjective: DestinyObjectiveProgress;
}

export interface DestinyPlugSetsComponent {
  plugs: { [key: string]: DestinyItemPlug[] };
}

export interface DestinyItemPlugBase {
  plugItemHash: number;
  canInsert: boolean;
  enabled: boolean;
  insertFailIndexes: number[];
  enableFailIndexes: number[];
}

export interface DestinyItemPlug {
  plugObjectives: DestinyObjectiveProgress[];
  plugItemHash: number;
  canInsert: boolean;
  enabled: boolean;
  insertFailIndexes: number[];
  enableFailIndexes: number[];
}

export interface DestinyProfileProgressionComponent {
  checklists: { [key: string]: { [key: string]: boolean } };
  seasonalArtifact: DestinyArtifactProfileScoped;
}

export interface DestinyArtifactProfileScoped {
  artifactHash: number;
  pointProgression: DestinyProgression;
  pointsAcquired: number;
  powerBonusProgression: DestinyProgression;
  powerBonus: number;
}

export interface DestinyChecklistDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  viewActionString: string;
  scope: DestinyScope;
  entries: DestinyChecklistEntryDefinition[];
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyChecklistEntryDefinition {
  hash: number;
  displayProperties: DestinyDisplayPropertiesDefinition;
  destinationHash: number;
  locationHash: number;
  bubbleHash: number;
  activityHash: number;
  itemHash: number;
  vendorHash: number;
  vendorInteractionIndex: number;
  scope: DestinyScope;
}

export interface DestinyPresentationNodesComponent {
  nodes: { [key: string]: DestinyPresentationNodeComponent };
}

export interface DestinyPresentationNodeComponent {
  state: DestinyPresentationNodeState;
  objective: DestinyObjectiveProgress;
  progressValue: number;
  completionValue: number;
  recordCategoryScore: number;
}

export interface DestinyRecordsComponent {
  records: { [key: string]: DestinyRecordComponent };
  recordCategoriesRootNodeHash: number;
  recordSealsRootNodeHash: number;
}

export interface DestinyRecordComponent {
  state: DestinyRecordState;
  objectives: DestinyObjectiveProgress[];
  intervalObjectives: DestinyObjectiveProgress[];
  intervalsRedeemedCount: number;
  completedCount: number;
  rewardVisibilty: boolean[];
}

export interface DestinyProfileRecordsComponent {
  score: number;
  activeScore: number;
  legacyScore: number;
  lifetimeScore: number;
  trackedRecordHash: number;
  records: { [key: string]: DestinyRecordComponent };
  recordCategoriesRootNodeHash: number;
  recordSealsRootNodeHash: number;
}

export interface DestinyCollectiblesComponent {
  collectibles: { [key: string]: DestinyCollectibleComponent };
  collectionCategoriesRootNodeHash: number;
  collectionBadgesRootNodeHash: number;
}

export interface DestinyCollectibleComponent {
  state: DestinyCollectibleState;
}

export interface DestinyProfileCollectiblesComponent {
  recentCollectibleHashes: number[];
  newnessFlaggedCollectibleHashes: number[];
  collectibles: { [key: string]: DestinyCollectibleComponent };
  collectionCategoriesRootNodeHash: number;
  collectionBadgesRootNodeHash: number;
}

export interface DestinyProfileTransitoryComponent {
  partyMembers: DestinyProfileTransitoryPartyMember[];
  currentActivity: DestinyProfileTransitoryCurrentActivity;
  joinability: DestinyProfileTransitoryJoinability;
  tracking: DestinyProfileTransitoryTrackingEntry[];
  lastOrbitedDestinationHash: number;
}

export interface DestinyProfileTransitoryPartyMember {
  membershipId: string;
  emblemHash: number;
  displayName: string;
  status: DestinyPartyMemberStates;
}

export interface DestinyProfileTransitoryCurrentActivity {
  startTime: string;
  endTime: string;
  score: number;
  highestOpposingFactionScore: number;
  numberOfOpponents: number;
  numberOfPlayers: number;
}

export interface DestinyProfileTransitoryJoinability {
  openSlots: number;
  privacySetting: DestinyGamePrivacySetting;
  closedReasons: DestinyJoinClosedReasons;
}

export interface DestinyProfileTransitoryTrackingEntry {
  locationHash: number;
  itemHash: number;
  objectiveHash: number;
  activityHash: number;
  questlineItemHash: number;
  trackedDate: string;
}

export interface DestinyMetricsComponent {
  metrics: { [key: string]: DestinyMetricComponent };
  metricsRootNodeHash: number;
}

export interface DestinyMetricComponent {
  invisible: boolean;
  objectiveProgress: DestinyObjectiveProgress;
}

export interface DestinyStringVariablesComponent {
  integerValuesByHash: { [key: string]: number };
}

export interface DestinyCharacterComponent {
  membershipId: string;
  membershipType: BungieMembershipType;
  characterId: string;
  dateLastPlayed: string;
  minutesPlayedThisSession: string;
  minutesPlayedTotal: string;
  light: number;
  stats: { [key: string]: number };
  raceHash: number;
  genderHash: number;
  classHash: number;
  raceType: DestinyRace;
  classType: DestinyClass;
  genderType: DestinyGender;
  emblemPath: string;
  emblemBackgroundPath: string;
  emblemHash: number;
  emblemColor: DestinyColor;
  levelProgression: DestinyProgression;
  baseCharacterLevel: number;
  percentToNextLevel: number;
  titleRecordHash: number;
}

export interface DestinyRaceDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  raceType: DestinyRace;
  genderedRaceNames: { [key: string]: string };
  genderedRaceNamesByGenderHash: { [key: string]: string };
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyCharacterProgressionComponent {
  progressions: { [key: string]: DestinyProgression };
  factions: { [key: string]: DestinyFactionProgression };
  milestones: { [key: string]: DestinyMilestone };
  quests: DestinyQuestStatus[];
  uninstancedItemObjectives: { [key: string]: DestinyObjectiveProgress[] };
  uninstancedItemPerks: { [key: string]: DestinyItemPerksComponent };
  checklists: { [key: string]: { [key: string]: boolean } };
  seasonalArtifact: DestinyArtifactCharacterScoped;
}

export interface DestinyFactionProgression {
  factionHash: number;
  factionVendorIndex: number;
  progressionHash: number;
  dailyProgress: number;
  dailyLimit: number;
  weeklyProgress: number;
  weeklyLimit: number;
  currentProgress: number;
  level: number;
  levelCap: number;
  stepIndex: number;
  progressToNextLevel: number;
  nextLevelAt: number;
  currentResetCount: number;
  seasonResets: DestinyProgressionResetEntry[];
  rewardItemStates: DestinyProgressionRewardItemState[];
}

export interface DestinyMilestone {
  milestoneHash: number;
  availableQuests: DestinyMilestoneQuest[];
  activities: DestinyMilestoneChallengeActivity[];
  values: { [key: string]: number };
  vendorHashes: number[];
  vendors: DestinyMilestoneVendor[];
  rewards: DestinyMilestoneRewardCategory[];
  startDate: string;
  endDate: string;
  order: number;
}

export interface DestinyMilestoneQuest {
  questItemHash: number;
  status: DestinyQuestStatus;
  activity: DestinyMilestoneActivity;
  challenges: DestinyChallengeStatus[];
}

export interface DestinyQuestStatus {
  questHash: number;
  stepHash: number;
  stepObjectives: DestinyObjectiveProgress[];
  tracked: boolean;
  itemInstanceId: string;
  completed: boolean;
  redeemed: boolean;
  started: boolean;
  vendorHash: number;
}

export interface DestinyMilestoneActivity {
  activityHash: number;
  activityModeHash: number;
  activityModeType: number;
  modifierHashes: number[];
  variants: DestinyMilestoneActivityVariant[];
}

export interface DestinyMilestoneActivityVariant {
  activityHash: number;
  completionStatus: DestinyMilestoneActivityCompletionStatus;
  activityModeHash: number;
  activityModeType: number;
}

export interface DestinyMilestoneActivityCompletionStatus {
  completed: boolean;
  phases: DestinyMilestoneActivityPhase[];
}

export interface DestinyMilestoneActivityPhase {
  complete: boolean;
  phaseHash: number;
}

export interface DestinyChallengeStatus {
  objective: DestinyObjectiveProgress;
}

export interface DestinyMilestoneChallengeActivity {
  activityHash: number;
  challenges: DestinyChallengeStatus[];
  modifierHashes: number[];
  booleanActivityOptions: { [key: string]: boolean };
  loadoutRequirementIndex: number;
  phases: DestinyMilestoneActivityPhase[];
}

export interface DestinyMilestoneVendor {
  vendorHash: number;
  previewItemHash: number;
}

export interface DestinyMilestoneRewardCategory {
  rewardCategoryHash: number;
  entries: DestinyMilestoneRewardEntry[];
}

export interface DestinyMilestoneRewardEntry {
  rewardEntryHash: number;
  earned: boolean;
  redeemed: boolean;
}

export interface DestinyMilestoneDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  displayPreference: DestinyMilestoneDisplayPreference;
  image: string;
  milestoneType: DestinyMilestoneType;
  recruitable: boolean;
  friendlyName: string;
  showInExplorer: boolean;
  showInMilestones: boolean;
  explorePrioritizesActivityImage: boolean;
  hasPredictableDates: boolean;
  quests: { [key: string]: DestinyMilestoneQuestDefinition };
  rewards: { [key: string]: DestinyMilestoneRewardCategoryDefinition };
  vendorsDisplayTitle: string;
  vendors: DestinyMilestoneVendorDefinition[];
  values: { [key: string]: DestinyMilestoneValueDefinition };
  isInGameMilestone: boolean;
  activities: DestinyMilestoneChallengeActivityDefinition[];
  defaultOrder: number;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyMilestoneQuestDefinition {
  questItemHash: number;
  displayProperties: DestinyDisplayPropertiesDefinition;
  overrideImage: string;
  questRewards: DestinyMilestoneQuestRewardsDefinition;
  activities: { [key: string]: DestinyMilestoneActivityDefinition };
  destinationHash: number;
}

export interface DestinyMilestoneQuestRewardsDefinition {
  items: DestinyMilestoneQuestRewardItem[];
}

export interface DestinyMilestoneQuestRewardItem {
  vendorHash: number;
  vendorItemIndex: number;
  itemHash: number;
  itemInstanceId: string;
  quantity: number;
  hasConditionalVisibility: boolean;
}

export interface DestinyMilestoneActivityDefinition {
  conceptualActivityHash: number;
  variants: { [key: string]: DestinyMilestoneActivityVariantDefinition };
}

export interface DestinyMilestoneActivityVariantDefinition {
  activityHash: number;
  order: number;
}

export interface DestinyMilestoneRewardCategoryDefinition {
  categoryHash: number;
  categoryIdentifier: string;
  displayProperties: DestinyDisplayPropertiesDefinition;
  rewardEntries: { [key: string]: DestinyMilestoneRewardEntryDefinition };
  order: number;
}

export interface DestinyMilestoneRewardEntryDefinition {
  rewardEntryHash: number;
  rewardEntryIdentifier: string;
  items: DestinyItemQuantity[];
  vendorHash: number;
  displayProperties: DestinyDisplayPropertiesDefinition;
  order: number;
}

export interface DestinyMilestoneVendorDefinition {
  vendorHash: number;
}

export interface DestinyMilestoneValueDefinition {
  key: string;
  displayProperties: DestinyDisplayPropertiesDefinition;
}

export interface DestinyMilestoneChallengeActivityDefinition {
  activityHash: number;
  challenges: DestinyMilestoneChallengeDefinition[];
  activityGraphNodes: DestinyMilestoneChallengeActivityGraphNodeEntry[];
  phases: DestinyMilestoneChallengeActivityPhase[];
}

export interface DestinyMilestoneChallengeDefinition {
  challengeObjectiveHash: number;
}

export interface DestinyMilestoneChallengeActivityGraphNodeEntry {
  activityGraphHash: number;
  activityGraphNodeHash: number;
}

export interface DestinyMilestoneChallengeActivityPhase {
  phaseHash: number;
}

export interface DestinyItemPerksComponent {
  perks: DestinyPerkReference[];
}

export interface DestinyPerkReference {
  perkHash: number;
  iconPath: string;
  isActive: boolean;
  visible: boolean;
}

export interface DestinyArtifactCharacterScoped {
  artifactHash: number;
  pointsUsed: number;
  resetCount: number;
  tiers: DestinyArtifactTier[];
}

export interface DestinyArtifactTier {
  tierHash: number;
  isUnlocked: boolean;
  pointsToUnlock: number;
  items: DestinyArtifactTierItem[];
}

export interface DestinyArtifactTierItem {
  itemHash: number;
  isActive: boolean;
}

export interface DestinyCharacterRenderComponent {
  customDyes: DyeReference[];
  customization: DestinyCharacterCustomization;
  peerView: DestinyCharacterPeerView;
}

export interface DestinyCharacterCustomization {
  personality: number;
  face: number;
  skinColor: number;
  lipColor: number;
  eyeColor: number;
  hairColors: number[];
  featureColors: number[];
  decalColor: number;
  wearHelmet: boolean;
  hairIndex: number;
  featureIndex: number;
  decalIndex: number;
}

export interface DestinyCharacterPeerView {
  equipment: DestinyItemPeerView[];
}

export interface DestinyItemPeerView {
  itemHash: number;
  dyes: DyeReference[];
}

export interface DestinyCharacterActivitiesComponent {
  dateActivityStarted: string;
  availableActivities: DestinyActivity[];
  currentActivityHash: number;
  currentActivityModeHash: number;
  currentActivityModeType: number;
  currentActivityModeHashes: number[];
  currentActivityModeTypes: DestinyActivityModeType[];
  currentPlaylistActivityHash: number;
  lastCompletedStoryHash: number;
}

export interface DestinyActivity {
  activityHash: number;
  isNew: boolean;
  canLead: boolean;
  canJoin: boolean;
  isCompleted: boolean;
  isVisible: boolean;
  displayLevel: number;
  recommendedLight: number;
  difficultyTier: DestinyActivityDifficultyTier;
  challenges: DestinyChallengeStatus[];
  modifierHashes: number[];
  booleanActivityOptions: { [key: string]: boolean };
  loadoutRequirementIndex: number;
}

export interface DestinyItemObjectivesComponent {
  objectives: DestinyObjectiveProgress[];
  flavorObjective: DestinyObjectiveProgress;
  dateCompleted: string;
}

export interface DestinyCharacterRecordsComponent {
  featuredRecordHashes: number[];
  records: { [key: string]: DestinyRecordComponent };
  recordCategoriesRootNodeHash: number;
  recordSealsRootNodeHash: number;
}

export interface DestinyCraftablesComponent {
  craftables: { [key: string]: DestinyCraftableComponent };
  craftingRootNodeHash: number;
}

export interface DestinyCraftableComponent {
  visible: boolean;
  failedRequirementIndexes: number[];
  sockets: DestinyCraftableSocketComponent[];
}

export interface DestinyCraftableSocketComponent {
  plugSetHash: number;
  plugs: DestinyCraftableSocketPlugComponent[];
}

export interface DestinyCraftableSocketPlugComponent {
  plugItemHash: number;
  failedRequirementIndexes: number[];
}

export interface DestinyItemInstanceComponent {
  damageType: DamageType;
  damageTypeHash: number;
  primaryStat: DestinyStat;
  itemLevel: number;
  quality: number;
  isEquipped: boolean;
  canEquip: boolean;
  equipRequiredLevel: number;
  unlockHashesRequiredToEquip: number[];
  cannotEquipReason: EquipFailureReason;
  breakerType: number;
  breakerTypeHash: number;
  energy: DestinyItemInstanceEnergy;
}

export interface DestinyStat {
  statHash: number;
  value: number;
}

export interface DestinyItemInstanceEnergy {
  energyTypeHash: number;
  energyType: DestinyEnergyType;
  energyCapacity: number;
  energyUsed: number;
  energyUnused: number;
}

export interface DestinyUnlockDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyItemRenderComponent {
  useCustomDyes: boolean;
  artRegions: { [key: string]: number };
}

export interface DestinyItemStatsComponent {
  stats: { [key: string]: DestinyStat };
}

export interface DestinyItemSocketsComponent {
  sockets: DestinyItemSocketState[];
}

export interface DestinyItemSocketState {
  plugHash: number;
  isEnabled: boolean;
  isVisible: boolean;
  enableFailIndexes: number[];
}

export interface DestinyItemReusablePlugsComponent {
  plugs: { [key: string]: DestinyItemPlugBase[] };
}

export interface DestinyItemPlugObjectivesComponent {
  objectivesPerPlug: { [key: string]: DestinyObjectiveProgress[] };
}

export interface DestinyItemTalentGridComponent {
  talentGridHash: number;
  nodes: DestinyTalentNode[];
  isGridComplete: boolean;
  gridProgression: DestinyProgression;
}

export interface DestinyTalentNode {
  nodeIndex: number;
  nodeHash: number;
  state: DestinyTalentNodeState;
  isActivated: boolean;
  stepIndex: number;
  materialsToUpgrade: DestinyMaterialRequirement[];
  activationGridLevel: number;
  progressPercent: number;
  hidden: boolean;
  nodeStatsBlock: DestinyTalentNodeStatBlock;
}

export interface DestinyTalentNodeStatBlock {
  currentStepStats: DestinyStat[];
  nextStepStats: DestinyStat[];
}

export interface DestinyItemPlugComponent {
  plugObjectives: DestinyObjectiveProgress[];
  plugItemHash: number;
  canInsert: boolean;
  enabled: boolean;
  insertFailIndexes: number[];
  enableFailIndexes: number[];
}

export interface DestinyCurrenciesComponent {
  itemQuantities: { [key: string]: number };
}

export interface DestinyCharacterResponse {
  inventory: SingleComponentResponseOfDestinyInventoryComponent;
  character: SingleComponentResponseOfDestinyCharacterComponent;
  progressions: SingleComponentResponseOfDestinyCharacterProgressionComponent;
  renderData: SingleComponentResponseOfDestinyCharacterRenderComponent;
  activities: SingleComponentResponseOfDestinyCharacterActivitiesComponent;
  equipment: SingleComponentResponseOfDestinyInventoryComponent;
  kiosks: SingleComponentResponseOfDestinyKiosksComponent;
  plugSets: SingleComponentResponseOfDestinyPlugSetsComponent;
  presentationNodes: SingleComponentResponseOfDestinyPresentationNodesComponent;
  records: SingleComponentResponseOfDestinyCharacterRecordsComponent;
  collectibles: SingleComponentResponseOfDestinyCollectiblesComponent;
  itemComponents: DestinyItemComponentSetOfint64;
  uninstancedItemComponents: DestinyBaseItemComponentSetOfuint32;
  currencyLookups: SingleComponentResponseOfDestinyCurrenciesComponent;
}

export interface DestinyItemResponse {
  characterId: string;
  item: SingleComponentResponseOfDestinyItemComponent;
  instance: SingleComponentResponseOfDestinyItemInstanceComponent;
  objectives: SingleComponentResponseOfDestinyItemObjectivesComponent;
  perks: SingleComponentResponseOfDestinyItemPerksComponent;
  renderData: SingleComponentResponseOfDestinyItemRenderComponent;
  stats: SingleComponentResponseOfDestinyItemStatsComponent;
  talentGrid: SingleComponentResponseOfDestinyItemTalentGridComponent;
  sockets: SingleComponentResponseOfDestinyItemSocketsComponent;
  reusablePlugs: SingleComponentResponseOfDestinyItemReusablePlugsComponent;
  plugObjectives: SingleComponentResponseOfDestinyItemPlugObjectivesComponent;
}

export interface DestinyVendorsResponse {
  vendorGroups: SingleComponentResponseOfDestinyVendorGroupComponent;
  vendors: DictionaryComponentResponseOfuint32AndDestinyVendorComponent;
  categories: DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent;
  sales: DictionaryComponentResponseOfuint32AndPersonalDestinyVendorSaleItemSetComponent;
  itemComponents: { [key: string]: DestinyItemComponentSetOfint32 };
  currencyLookups: SingleComponentResponseOfDestinyCurrenciesComponent;
  stringVariables: SingleComponentResponseOfDestinyStringVariablesComponent;
}

export interface DestinyVendorGroupComponent {
  groups: DestinyVendorGroup[];
}

export interface DestinyVendorGroup {
  vendorGroupHash: number;
  vendorHashes: number[];
}

export interface DestinyVendorBaseComponent {
  vendorHash: number;
  nextRefreshDate: string;
  enabled: boolean;
}

export interface DestinyVendorComponent {
  canPurchase: boolean;
  progression: DestinyProgression;
  vendorLocationIndex: number;
  seasonalRank: number;
  vendorHash: number;
  nextRefreshDate: string;
  enabled: boolean;
}

export interface DestinyVendorCategoriesComponent {
  categories: DestinyVendorCategory[];
}

export interface DestinyVendorCategory {
  displayCategoryIndex: number;
  itemIndexes: number[];
}

export interface DestinyVendorSaleItemBaseComponent {
  vendorItemIndex: number;
  itemHash: number;
  overrideStyleItemHash: number;
  quantity: number;
  costs: DestinyItemQuantity[];
  overrideNextRefreshDate: string;
  apiPurchasable: boolean;
}

export interface DestinyVendorSaleItemComponent {
  saleStatus: VendorItemStatus;
  requiredUnlocks: number[];
  unlockStatuses: DestinyUnlockStatus[];
  failureIndexes: number[];
  augments: DestinyVendorItemState;
  itemValueVisibility: boolean[];
  vendorItemIndex: number;
  itemHash: number;
  overrideStyleItemHash: number;
  quantity: number;
  costs: DestinyItemQuantity[];
  overrideNextRefreshDate: string;
  apiPurchasable: boolean;
}

export interface DestinyUnlockStatus {
  unlockHash: number;
  isSet: boolean;
}

export interface PersonalDestinyVendorSaleItemSetComponent {
  saleItems: { [key: string]: DestinyVendorSaleItemComponent };
}

export interface DestinyVendorResponse {
  vendor: SingleComponentResponseOfDestinyVendorComponent;
  categories: SingleComponentResponseOfDestinyVendorCategoriesComponent;
  sales: DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent;
  itemComponents: DestinyItemComponentSetOfint32;
  currencyLookups: SingleComponentResponseOfDestinyCurrenciesComponent;
  stringVariables: SingleComponentResponseOfDestinyStringVariablesComponent;
}

export interface DestinyPublicVendorsResponse {
  vendorGroups: SingleComponentResponseOfDestinyVendorGroupComponent;
  vendors: DictionaryComponentResponseOfuint32AndDestinyPublicVendorComponent;
  categories: DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent;
  sales: DictionaryComponentResponseOfuint32AndPublicDestinyVendorSaleItemSetComponent;
  stringVariables: SingleComponentResponseOfDestinyStringVariablesComponent;
}

export interface DestinyPublicVendorComponent {
  vendorHash: number;
  nextRefreshDate: string;
  enabled: boolean;
}

export interface DestinyPublicVendorSaleItemComponent {
  vendorItemIndex: number;
  itemHash: number;
  overrideStyleItemHash: number;
  quantity: number;
  costs: DestinyItemQuantity[];
  overrideNextRefreshDate: string;
  apiPurchasable: boolean;
}

export interface PublicDestinyVendorSaleItemSetComponent {
  saleItems: { [key: string]: DestinyPublicVendorSaleItemComponent };
}

export interface DestinyCollectibleNodeDetailResponse {
  collectibles: SingleComponentResponseOfDestinyCollectiblesComponent;
  collectibleItemComponents: DestinyItemComponentSetOfuint32;
}

export interface DestinyActionRequest {
  membershipType: BungieMembershipType;
}

export interface DestinyCharacterActionRequest {
  characterId: string;
  membershipType: BungieMembershipType;
}

export interface DestinyItemActionRequest {
  itemId: string;
  characterId: string;
  membershipType: BungieMembershipType;
}

export interface DestinyItemTransferRequest {
  itemReferenceHash: number;
  stackSize: number;
  transferToVault: boolean;
  itemId: string;
  characterId: string;
  membershipType: BungieMembershipType;
}

export interface DestinyPostmasterTransferRequest {
  itemReferenceHash: number;
  stackSize: number;
  itemId: string;
  characterId: string;
  membershipType: BungieMembershipType;
}

export interface DestinyEquipItemResults {
  equipResults: DestinyEquipItemResult[];
}

export interface DestinyEquipItemResult {
  itemInstanceId: string;
  equipStatus: PlatformErrorCodes;
}

export interface DestinyItemSetActionRequest {
  itemIds: string[];
  characterId: string;
  membershipType: BungieMembershipType;
}

export interface DestinyItemStateRequest {
  state: boolean;
  itemId: string;
  characterId: string;
  membershipType: BungieMembershipType;
}

export interface InventoryChangedResponse {
  addedInventoryItems: DestinyItemComponent[];
  removedInventoryItems: DestinyItemComponent[];
}

export interface DestinyItemChangeResponse {
  item: DestinyItemResponse;
  addedInventoryItems: DestinyItemComponent[];
  removedInventoryItems: DestinyItemComponent[];
}

export interface DestinyInsertPlugsActionRequest {
  actionToken: string;
  itemInstanceId: string;
  plug: DestinyInsertPlugsRequestEntry;
  characterId: string;
  membershipType: BungieMembershipType;
}

export interface DestinyInsertPlugsRequestEntry {
  socketIndex: number;
  socketArrayType: DestinySocketArrayType;
  plugItemHash: number;
}

export interface DestinyInsertPlugsFreeActionRequest {
  plug: DestinyInsertPlugsRequestEntry;
  itemId: string;
  characterId: string;
  membershipType: BungieMembershipType;
}

export interface DestinyPostGameCarnageReportData {
  period: string;
  startingPhaseIndex: number;
  activityWasStartedFromBeginning: boolean;
  activityDetails: DestinyHistoricalStatsActivity;
  entries: DestinyPostGameCarnageReportEntry[];
  teams: DestinyPostGameCarnageReportTeamEntry[];
}

export interface DestinyHistoricalStatsActivity {
  referenceId: number;
  directorActivityHash: number;
  instanceId: string;
  mode: DestinyActivityModeType;
  modes: DestinyActivityModeType[];
  isPrivate: boolean;
  membershipType: BungieMembershipType;
}

export interface DestinyPostGameCarnageReportEntry {
  standing: number;
  score: DestinyHistoricalStatsValue;
  player: DestinyPlayer;
  characterId: string;
  values: { [key: string]: DestinyHistoricalStatsValue };
  extended: DestinyPostGameCarnageReportExtendedData;
}

export interface DestinyHistoricalStatsValue {
  statId: string;
  basic: DestinyHistoricalStatsValuePair;
  pga: DestinyHistoricalStatsValuePair;
  weighted: DestinyHistoricalStatsValuePair;
  activityId: string;
}

export interface DestinyHistoricalStatsValuePair {
  value: number;
  displayValue: string;
}

export interface DestinyPlayer {
  destinyUserInfo: UserInfoCard;
  characterClass: string;
  classHash: number;
  raceHash: number;
  genderHash: number;
  characterLevel: number;
  lightLevel: number;
  bungieNetUserInfo: UserInfoCard;
  clanName: string;
  clanTag: string;
  emblemHash: number;
}

export interface DestinyPostGameCarnageReportExtendedData {
  weapons: DestinyHistoricalWeaponStats[];
  values: { [key: string]: DestinyHistoricalStatsValue };
}

export interface DestinyHistoricalWeaponStats {
  referenceId: number;
  values: { [key: string]: DestinyHistoricalStatsValue };
}

export interface DestinyPostGameCarnageReportTeamEntry {
  teamId: number;
  standing: DestinyHistoricalStatsValue;
  score: DestinyHistoricalStatsValue;
  teamName: string;
}

export interface DestinyReportOffensePgcrRequest {
  reasonCategoryHashes: number[];
  reasonHashes: number[];
  offendingCharacterId: string;
}

export interface DestinyReportReasonCategoryDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  reasons: { [key: string]: DestinyReportReasonDefinition };
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyReportReasonDefinition {
  reasonHash: number;
  displayProperties: DestinyDisplayPropertiesDefinition;
}

export interface DestinyHistoricalStatsDefinition {
  statId: string;
  group: DestinyStatsGroupType;
  periodTypes: PeriodType[];
  modes: DestinyActivityModeType[];
  category: DestinyStatsCategoryType;
  statName: string;
  statNameAbbr: string;
  statDescription: string;
  unitType: UnitType;
  iconImage: string;
  mergeMethod: number;
  unitLabel: string;
  weight: number;
  medalTierHash: number;
}

export interface DestinyMedalTierDefinition {
  tierName: string;
  order: number;
  hash: number;
  index: number;
  redacted: boolean;
}

export interface DestinyLeaderboard {
  statId: string;
  entries: DestinyLeaderboardEntry[];
}

export interface DestinyLeaderboardEntry {
  rank: number;
  player: DestinyPlayer;
  characterId: string;
  value: DestinyHistoricalStatsValue;
}

export interface DestinyLeaderboardResults {
  focusMembershipId: string;
  focusCharacterId: string;
}

export interface DestinyClanAggregateStat {
  mode: DestinyActivityModeType;
  statId: string;
  value: DestinyHistoricalStatsValue;
}

export interface DestinyEntitySearchResult {
  suggestedWords: string[];
  results: SearchResultOfDestinyEntitySearchResultItem;
}

export interface DestinyEntitySearchResultItem {
  hash: number;
  entityType: string;
  displayProperties: DestinyDisplayPropertiesDefinition;
  weight: number;
}

export interface DestinyHistoricalStatsByPeriod {
  allTime: { [key: string]: DestinyHistoricalStatsValue };
  allTimeTier1: { [key: string]: DestinyHistoricalStatsValue };
  allTimeTier2: { [key: string]: DestinyHistoricalStatsValue };
  allTimeTier3: { [key: string]: DestinyHistoricalStatsValue };
  daily: DestinyHistoricalStatsPeriodGroup[];
  monthly: DestinyHistoricalStatsPeriodGroup[];
}

export interface DestinyHistoricalStatsPeriodGroup {
  period: string;
  activityDetails: DestinyHistoricalStatsActivity;
  values: { [key: string]: DestinyHistoricalStatsValue };
}

export interface DestinyHistoricalStatsResults {
  $ref: undefined;
}

export interface DestinyHistoricalStatsAccountResult {
  mergedDeletedCharacters: DestinyHistoricalStatsWithMerged;
  mergedAllCharacters: DestinyHistoricalStatsWithMerged;
  characters: DestinyHistoricalStatsPerCharacter[];
}

export interface DestinyHistoricalStatsWithMerged {
  results: { [key: string]: DestinyHistoricalStatsByPeriod };
  merged: DestinyHistoricalStatsByPeriod;
}

export interface DestinyHistoricalStatsPerCharacter {
  characterId: string;
  deleted: boolean;
  results: { [key: string]: DestinyHistoricalStatsByPeriod };
  merged: DestinyHistoricalStatsByPeriod;
}

export interface DestinyActivityHistoryResults {
  activities: DestinyHistoricalStatsPeriodGroup[];
}

export interface DestinyHistoricalWeaponStatsData {
  weapons: DestinyHistoricalWeaponStats[];
}

export interface DestinyAggregateActivityResults {
  activities: DestinyAggregateActivityStats[];
}

export interface DestinyAggregateActivityStats {
  activityHash: number;
  values: { [key: string]: DestinyHistoricalStatsValue };
}

export interface DestinyMilestoneContent {
  about: string;
  status: string;
  tips: string[];
  itemCategories: DestinyMilestoneContentItemCategory[];
}

export interface DestinyMilestoneContentItemCategory {
  title: string;
  itemHashes: number[];
}

export interface DestinyPublicMilestone {
  milestoneHash: number;
  availableQuests: DestinyPublicMilestoneQuest[];
  activities: DestinyPublicMilestoneChallengeActivity[];
  vendorHashes: number[];
  vendors: DestinyPublicMilestoneVendor[];
  startDate: string;
  endDate: string;
  order: number;
}

export interface DestinyPublicMilestoneQuest {
  questItemHash: number;
  activity: DestinyPublicMilestoneActivity;
  challenges: DestinyPublicMilestoneChallenge[];
}

export interface DestinyPublicMilestoneActivity {
  activityHash: number;
  modifierHashes: number[];
  variants: DestinyPublicMilestoneActivityVariant[];
  activityModeHash: number;
  activityModeType: number;
}

export interface DestinyPublicMilestoneActivityVariant {
  activityHash: number;
  activityModeHash: number;
  activityModeType: number;
}

export interface DestinyPublicMilestoneChallenge {
  objectiveHash: number;
  activityHash: number;
}

export interface DestinyPublicMilestoneChallengeActivity {
  activityHash: number;
  challengeObjectiveHashes: number[];
  modifierHashes: number[];
  loadoutRequirementIndex: number;
  phaseHashes: number[];
  booleanActivityOptions: { [key: string]: boolean };
}

export interface DestinyPublicMilestoneVendor {
  vendorHash: number;
  previewItemHash: number;
}

export interface AwaInitializeResponse {
  correlationId: string;
  sentToSelf: boolean;
}

export interface AwaPermissionRequested {
  type: AwaType;
  affectedItemId: string;
  membershipType: BungieMembershipType;
  characterId: string;
}

export interface AwaUserResponse {
  selection: AwaUserSelection;
  correlationId: string;
  nonce: string[];
}

export interface AwaAuthorizationResult {
  userSelection: AwaUserSelection;
  responseReason: AwaResponseReason;
  developerNote: string;
  actionToken: string;
  maximumNumberOfUses: number;
  validUntil: string;
  type: AwaType;
  membershipType: BungieMembershipType;
}

export interface DestinyPublicActivityStatus {
  challengeObjectiveHashes: number[];
  modifierHashes: number[];
  rewardTooltipItems: DestinyItemQuantity[];
}

export interface InterpolationPoint {
  value: number;
  weight: number;
}

export interface InterpolationPointFloat {
  value: number;
  weight: number;
}

export interface DateRange {
  start: string;
  end: string;
}

export interface HyperlinkReference {
  title: string;
  url: string;
}

export interface TagResponse {
  tagText: string;
  ignoreStatus: IgnoreResponse;
}

export interface SearchResultOfGroupV2Card {
  results: GroupV2Card[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface SearchResultOfGroupMember {
  results: GroupMember[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface SearchResultOfGroupBan {
  results: GroupBan[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface SearchResultOfGroupMemberApplication {
  results: GroupMemberApplication[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface EntityActionResult {
  entityId: string;
  result: PlatformErrorCodes;
}

export interface SearchResultOfGroupMembership {
  results: GroupMembership[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface SearchResultOfGroupPotentialMembership {
  results: GroupPotentialMembership[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface PartnerOfferClaimRequest {
  PartnerOfferId: string;
  BungieNetMembershipId: string;
  TransactionId: string;
}

export interface PartnerOfferSkuHistoryResponse {
  SkuIdentifier: string;
  LocalizedName: string;
  LocalizedDescription: string;
  ClaimDate: string;
  AllOffersApplied: boolean;
  TransactionId: string;
  SkuOffers: PartnerOfferHistoryResponse[];
}

export interface PartnerOfferHistoryResponse {
  PartnerOfferKey: string;
  MembershipId: string;
  MembershipType: number;
  LocalizedName: string;
  LocalizedDescription: string;
  IsConsumable: boolean;
  QuantityApplied: number;
  ApplyDate: string;
}

export interface BungieRewardDisplay {
  UserRewardAvailabilityModel: UserRewardAvailabilityModel;
  ObjectiveDisplayProperties: RewardDisplayProperties;
  RewardDisplayProperties: RewardDisplayProperties;
}

export interface UserRewardAvailabilityModel {
  AvailabilityModel: RewardAvailabilityModel;
  IsAvailableForUser: boolean;
  IsUnlockedForUser: boolean;
}

export interface RewardAvailabilityModel {
  HasExistingCode: boolean;
  RecordDefinitions: DestinyRecordDefinition[];
  CollectibleDefinitions: CollectibleDefinitions[];
  IsOffer: boolean;
  HasOffer: boolean;
  OfferApplied: boolean;
  DecryptedToken: string;
  IsLoyaltyReward: boolean;
  ShopifyEndDate: string;
  GameEarnByDate: string;
  RedemptionEndDate: string;
}

export interface CollectibleDefinitions {
  CollectibleDefinition: DestinyCollectibleDefinition;
  DestinyInventoryItemDefinition: DestinyInventoryItemDefinition;
}

export interface RewardDisplayProperties {
  Name: string;
  Description: string;
  ImagePath: string;
}

export interface ComponentResponse {
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyVendorReceiptsComponent {
  data: DestinyVendorReceiptsComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyInventoryComponent {
  data: DestinyInventoryComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyProfileComponent {
  data: DestinyProfileComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyPlatformSilverComponent {
  data: DestinyPlatformSilverComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyKiosksComponent {
  data: DestinyKiosksComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyPlugSetsComponent {
  data: DestinyPlugSetsComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyProfileProgressionComponent {
  data: DestinyProfileProgressionComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyPresentationNodesComponent {
  data: DestinyPresentationNodesComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyProfileRecordsComponent {
  data: DestinyProfileRecordsComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyProfileCollectiblesComponent {
  data: DestinyProfileCollectiblesComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyProfileTransitoryComponent {
  data: DestinyProfileTransitoryComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyMetricsComponent {
  data: DestinyMetricsComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyStringVariablesComponent {
  data: DestinyStringVariablesComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyCharacterComponent {
  data: { [key: string]: DestinyCharacterComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyInventoryComponent {
  data: { [key: string]: DestinyInventoryComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent {
  data: { [key: string]: DestinyCharacterProgressionComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent {
  data: { [key: string]: DestinyCharacterRenderComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent {
  data: { [key: string]: DestinyCharacterActivitiesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyKiosksComponent {
  data: { [key: string]: DestinyKiosksComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyPlugSetsComponent {
  data: { [key: string]: DestinyPlugSetsComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DestinyBaseItemComponentSetOfuint32 {
  objectives: DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent;
  perks: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent;
}

export interface DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent {
  data: { [key: string]: DestinyItemObjectivesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent {
  data: { [key: string]: DestinyItemPerksComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyPresentationNodesComponent {
  data: { [key: string]: DestinyPresentationNodesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyCharacterRecordsComponent {
  data: { [key: string]: DestinyCharacterRecordsComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyCollectiblesComponent {
  data: { [key: string]: DestinyCollectiblesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyStringVariablesComponent {
  data: { [key: string]: DestinyStringVariablesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyCraftablesComponent {
  data: { [key: string]: DestinyCraftablesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DestinyBaseItemComponentSetOfint64 {
  objectives: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent;
  perks: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent;
}

export interface DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent {
  data: { [key: string]: DestinyItemObjectivesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyItemPerksComponent {
  data: { [key: string]: DestinyItemPerksComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DestinyItemComponentSetOfint64 {
  instances: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent;
  renderData: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent;
  stats: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent;
  sockets: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent;
  reusablePlugs: DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent;
  plugObjectives: DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent;
  talentGrids: DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent;
  plugStates: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
  objectives: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent;
  perks: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent;
}

export interface DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent {
  data: { [key: string]: DestinyItemInstanceComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyItemRenderComponent {
  data: { [key: string]: DestinyItemRenderComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyItemStatsComponent {
  data: { [key: string]: DestinyItemStatsComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent {
  data: { [key: string]: DestinyItemSocketsComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent {
  data: { [key: string]: DestinyItemReusablePlugsComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent {
  data: { [key: string]: DestinyItemPlugObjectivesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent {
  data: { [key: string]: DestinyItemTalentGridComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent {
  data: { [key: string]: DestinyItemPlugComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint64AndDestinyCurrenciesComponent {
  data: { [key: string]: DestinyCurrenciesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyCharacterComponent {
  data: DestinyCharacterComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyCharacterProgressionComponent {
  data: DestinyCharacterProgressionComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyCharacterRenderComponent {
  data: DestinyCharacterRenderComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyCharacterActivitiesComponent {
  data: DestinyCharacterActivitiesComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyCharacterRecordsComponent {
  data: DestinyCharacterRecordsComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyCollectiblesComponent {
  data: DestinyCollectiblesComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyCurrenciesComponent {
  data: DestinyCurrenciesComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyItemComponent {
  data: DestinyItemComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyItemInstanceComponent {
  data: DestinyItemInstanceComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyItemObjectivesComponent {
  data: DestinyItemObjectivesComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyItemPerksComponent {
  data: DestinyItemPerksComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyItemRenderComponent {
  data: DestinyItemRenderComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyItemStatsComponent {
  data: DestinyItemStatsComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyItemTalentGridComponent {
  data: DestinyItemTalentGridComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyItemSocketsComponent {
  data: DestinyItemSocketsComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyItemReusablePlugsComponent {
  data: DestinyItemReusablePlugsComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyItemPlugObjectivesComponent {
  data: DestinyItemPlugObjectivesComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyVendorGroupComponent {
  data: DestinyVendorGroupComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfuint32AndDestinyVendorComponent {
  data: { [key: string]: DestinyVendorComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent {
  data: { [key: string]: DestinyVendorCategoriesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DestinyVendorSaleItemSetComponentOfDestinyVendorSaleItemComponent {
  saleItems: { [key: string]: DestinyVendorSaleItemComponent };
}

export interface DictionaryComponentResponseOfuint32AndPersonalDestinyVendorSaleItemSetComponent {
  data: { [key: string]: PersonalDestinyVendorSaleItemSetComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DestinyBaseItemComponentSetOfint32 {
  objectives: DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent;
  perks: DictionaryComponentResponseOfint32AndDestinyItemPerksComponent;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent {
  data: { [key: string]: DestinyItemObjectivesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemPerksComponent {
  data: { [key: string]: DestinyItemPerksComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DestinyItemComponentSetOfint32 {
  instances: DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent;
  renderData: DictionaryComponentResponseOfint32AndDestinyItemRenderComponent;
  stats: DictionaryComponentResponseOfint32AndDestinyItemStatsComponent;
  sockets: DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent;
  reusablePlugs: DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent;
  plugObjectives: DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent;
  talentGrids: DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent;
  plugStates: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
  objectives: DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent;
  perks: DictionaryComponentResponseOfint32AndDestinyItemPerksComponent;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent {
  data: { [key: string]: DestinyItemInstanceComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemRenderComponent {
  data: { [key: string]: DestinyItemRenderComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemStatsComponent {
  data: { [key: string]: DestinyItemStatsComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent {
  data: { [key: string]: DestinyItemSocketsComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent {
  data: { [key: string]: DestinyItemReusablePlugsComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent {
  data: { [key: string]: DestinyItemPlugObjectivesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent {
  data: { [key: string]: DestinyItemTalentGridComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyVendorComponent {
  data: DestinyVendorComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SingleComponentResponseOfDestinyVendorCategoriesComponent {
  data: DestinyVendorCategoriesComponent;
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent {
  data: { [key: string]: DestinyVendorSaleItemComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfuint32AndDestinyPublicVendorComponent {
  data: { [key: string]: DestinyPublicVendorComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DestinyVendorSaleItemSetComponentOfDestinyPublicVendorSaleItemComponent {
  saleItems: { [key: string]: DestinyPublicVendorSaleItemComponent };
}

export interface DictionaryComponentResponseOfuint32AndPublicDestinyVendorSaleItemSetComponent {
  data: { [key: string]: PublicDestinyVendorSaleItemSetComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DestinyItemComponentSetOfuint32 {
  instances: DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent;
  renderData: DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent;
  stats: DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent;
  sockets: DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent;
  reusablePlugs: DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent;
  plugObjectives: DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent;
  talentGrids: DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent;
  plugStates: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
  objectives: DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent;
  perks: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent;
}

export interface DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent {
  data: { [key: string]: DestinyItemInstanceComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent {
  data: { [key: string]: DestinyItemRenderComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent {
  data: { [key: string]: DestinyItemStatsComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent {
  data: { [key: string]: DestinyItemSocketsComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent {
  data: { [key: string]: DestinyItemReusablePlugsComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent {
  data: { [key: string]: DestinyItemPlugObjectivesComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent {
  data: { [key: string]: DestinyItemTalentGridComponent };
  privacy: ComponentPrivacySetting;
  disabled: boolean;
}

export interface SearchResultOfDestinyEntitySearchResultItem {
  results: DestinyEntitySearchResultItem[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface TrendingCategories {
  categories: TrendingCategory[];
}

export interface TrendingCategory {
  categoryName: string;
  entries: SearchResultOfTrendingEntry;
  categoryId: string;
}

export interface TrendingEntry {
  weight: number;
  isFeatured: boolean;
  identifier: string;
  entityType: TrendingEntryType;
  displayName: string;
  tagline: string;
  image: string;
  startDate: string;
  endDate: string;
  link: string;
  webmVideo: string;
  mp4Video: string;
  featureImage: string;
  items: TrendingEntry[];
  creationDate: string;
}

export interface TrendingDetail {
  identifier: string;
  entityType: TrendingEntryType;
  news: TrendingEntryNews;
  support: TrendingEntrySupportArticle;
  destinyItem: TrendingEntryDestinyItem;
  destinyActivity: TrendingEntryDestinyActivity;
  destinyRitual: TrendingEntryDestinyRitual;
  creation: TrendingEntryCommunityCreation;
}

export interface TrendingEntryNews {
  article: ContentItemPublicContract;
}

export interface TrendingEntrySupportArticle {
  article: ContentItemPublicContract;
}

export interface TrendingEntryDestinyItem {
  itemHash: number;
}

export interface TrendingEntryDestinyActivity {
  activityHash: number;
  status: DestinyPublicActivityStatus;
}

export interface TrendingEntryDestinyRitual {
  image: string;
  icon: string;
  title: string;
  subtitle: string;
  dateStart: string;
  dateEnd: string;
  milestoneDetails: DestinyPublicMilestone;
  eventContent: DestinyMilestoneContent;
}

export interface TrendingEntryCommunityCreation {
  media: string;
  title: string;
  author: string;
  authorMembershipId: string;
  postId: string;
  body: string;
  upvotes: number;
}

export interface SearchResultOfTrendingEntry {
  results: TrendingEntry[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface FireteamSummary {
  fireteamId: string;
  groupId: string;
  platform: FireteamPlatform;
  activityType: number;
  isImmediate: boolean;
  scheduledTime: string;
  ownerMembershipId: string;
  playerSlotCount: number;
  alternateSlotCount: number;
  availablePlayerSlotCount: number;
  availableAlternateSlotCount: number;
  title: string;
  dateCreated: string;
  dateModified: string;
  isPublic: boolean;
  locale: string;
  isValid: boolean;
  datePlayerModified: string;
  titleBeforeModeration: string;
}

export interface FireteamResponse {
  Summary: FireteamSummary;
  Members: FireteamMember[];
  Alternates: FireteamMember[];
}

export interface FireteamMember {
  destinyUserInfo: FireteamUserInfoCard;
  bungieNetUserInfo: UserInfoCard;
  characterId: string;
  dateJoined: string;
  hasMicrophone: boolean;
  lastPlatformInviteAttemptDate: string;
  lastPlatformInviteAttemptResult: FireteamPlatformInviteResult;
}

export interface FireteamUserInfoCard {
  FireteamDisplayName: string;
  FireteamMembershipType: BungieMembershipType;
  supplementalDisplayName: string;
  iconPath: string;
  crossSaveOverride: BungieMembershipType;
  applicableMembershipTypes: BungieMembershipType[];
  isPublic: boolean;
  membershipType: BungieMembershipType;
  membershipId: string;
  displayName: string;
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number;
}

export interface SearchResultOfFireteamSummary {
  results: FireteamSummary[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface SearchResultOfFireteamResponse {
  results: FireteamResponse[];
  totalResults: number;
  hasMore: boolean;
  query: PagedQuery;
  replacementContinuationToken: string;
  useTotalResults: boolean;
}

export interface BungieFriendListResponse {
  friends: BungieFriend[];
}

export interface BungieFriend {
  lastSeenAsMembershipId: string;
  lastSeenAsBungieMembershipType: BungieMembershipType;
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number;
  onlineStatus: PresenceStatus;
  onlineTitle: PresenceOnlineStateFlags;
  relationship: FriendRelationshipState;
  bungieNetUser: GeneralUser;
}

export interface BungieFriendRequestListResponse {
  incomingRequests: BungieFriend[];
  outgoingRequests: BungieFriend[];
}

export interface PlatformFriendResponse {
  itemsPerPage: number;
  currentPage: number;
  hasMore: boolean;
  platformFriends: PlatformFriend[];
}

export interface PlatformFriend {
  platformDisplayName: string;
  friendPlatform: PlatformFriendType;
  destinyMembershipId: string;
  destinyMembershipType: number;
  bungieNetMembershipId: string;
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number;
}

export interface CoreSettingsConfiguration {
  environment: string;
  systems: { [key: string]: CoreSystem };
  ignoreReasons: CoreSetting[];
  forumCategories: CoreSetting[];
  groupAvatars: CoreSetting[];
  destinyMembershipTypes: CoreSetting[];
  recruitmentPlatformTags: CoreSetting[];
  recruitmentMiscTags: CoreSetting[];
  recruitmentActivities: CoreSetting[];
  userContentLocales: CoreSetting[];
  systemContentLocales: CoreSetting[];
  clanBannerDecals: CoreSetting[];
  clanBannerDecalColors: CoreSetting[];
  clanBannerGonfalons: CoreSetting[];
  clanBannerGonfalonColors: CoreSetting[];
  clanBannerGonfalonDetails: CoreSetting[];
  clanBannerGonfalonDetailColors: CoreSetting[];
  clanBannerStandards: CoreSetting[];
  destiny2CoreSettings: Destiny2CoreSettings;
  emailSettings: EmailSettings;
  fireteamActivities: CoreSetting[];
}

export interface CoreSystem {
  enabled: boolean;
  parameters: { [key: string]: string };
}

export interface CoreSetting {
  identifier: string;
  isDefault: boolean;
  displayName: string;
  summary: string;
  imagePath: string;
  childSettings: CoreSetting[];
}

export interface Destiny2CoreSettings {
  collectionRootNode: number;
  badgesRootNode: number;
  recordsRootNode: number;
  medalsRootNode: number;
  metricsRootNode: number;
  activeTriumphsRootNodeHash: number;
  activeSealsRootNodeHash: number;
  legacyTriumphsRootNodeHash: number;
  legacySealsRootNodeHash: number;
  medalsRootNodeHash: number;
  exoticCatalystsRootNodeHash: number;
  loreRootNodeHash: number;
  craftingRootNodeHash: number;
  currentRankProgressionHashes: number[];
  insertPlugFreeProtectedPlugItemHashes: number[];
  insertPlugFreeBlockedSocketTypeHashes: number[];
  undiscoveredCollectibleImage: string;
  ammoTypeHeavyIcon: string;
  ammoTypeSpecialIcon: string;
  ammoTypePrimaryIcon: string;
  currentSeasonalArtifactHash: number;
  currentSeasonHash: number;
  seasonalChallengesPresentationNodeHash: number;
  futureSeasonHashes: number[];
  pastSeasonHashes: number[];
}

export interface GlobalAlert {
  AlertKey: string;
  AlertHtml: string;
  AlertTimestamp: string;
  AlertLink: string;
  AlertLevel: GlobalAlertLevel;
  AlertType: GlobalAlertType;
  StreamInfo: StreamInfo;
}

export interface StreamInfo {
  ChannelName: string;
}
