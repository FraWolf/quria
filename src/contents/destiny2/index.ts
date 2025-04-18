import { parseAuthenticationHeaders, Controller, formatQueryStrings } from "../../adapters";
import {
  ITokens,
  APIResponse,
  DestinyManifest,
  DestinyDefinition,
  BungieMembershipType,
  UserInfoCard,
  ExactSearchRequest,
  DestinyLinkedProfilesResponse,
  DestinyComponentType,
  DestinyProfileResponse,
  DestinyCharacterResponse,
  DestinyMilestone,
  ClanBannerSource,
  DestinyItemResponse,
  DestinyVendorFilter,
  DestinyVendorsResponse,
  DestinyVendorResponse,
  DestinyPublicVendorsResponse,
  DestinyCollectibleNodeDetailResponse,
  DestinyItemTransferRequest,
  DestinyPostmasterTransferRequest,
  DestinyItemActionRequest,
  DestinyEquipItemResults,
  DestinyItemSetActionRequest,
  DestinyLoadoutActionRequest,
  DestinyLoadoutUpdateActionRequest,
  DestinyItemStateRequest,
  DestinyInsertPlugsRequestEntry,
  DestinyItemChangeResponse,
  DestinyInsertPlugsActionRequest,
  DestinyInsertPlugsFreeActionRequest,
  DestinyPostGameCarnageReportData,
  DestinyReportOffensePgcrRequest,
  DestinyHistoricalStatsDefinition,
  DestinyLeaderboard,
  DestinyClanAggregateStat,
  DestinyEntitySearchResult,
  DestinyStatsGroupType,
  DestinyActivityModeType,
  PeriodType,
  DestinyHistoricalStatsByPeriod,
  DestinyHistoricalStatsAccountResult,
  DestinyActivityHistoryResults,
  DestinyHistoricalWeaponStatsData,
  DestinyAggregateActivityResults,
  DestinyMilestoneContent,
  DestinyPublicMilestone,
  AwaType,
  AwaInitializeResponse,
  AwaPermissionRequested,
  AwaUserSelection,
  AwaUserResponse,
  AwaAuthorizationResult,
} from "../../types";

export class Destiny2 {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Returns the current version of the manifest as a json object.
   
    * @returns Returns the current version of the manifest as a json object.
   */
  public GetDestinyManifest(tokens?: ITokens): Promise<APIResponse<DestinyManifest>> {
    const requestURL = `${this.url}/Destiny2/Manifest/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
   * @param entityType The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is tentatively in final form, but there may be bugs that prevent desirable operation.
   * @param hashIdentifier The hash identifier for the specific Entity you want returned.
   * @returns Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
   */
  public GetDestinyEntityDefinition(
    entityType: string,
    hashIdentifier: number,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyDefinition>> {
    const requestURL = `${this.url}/Destiny2/Manifest/${entityType}/${hashIdentifier}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.
   * @param membershipType A valid non-BungieNet membership type, or All. Indicates which memberships to return. You probably want this set to All.
   * @returns Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.
   */
  public SearchDestinyPlayerByBungieName(
    membershipType: BungieMembershipType,
    displayName: string,
    displayNameCode: number,
    tokens?: ITokens
  ): Promise<APIResponse<UserInfoCard[]>> {
    const requestURL = `${this.url}/Destiny2/SearchDestinyPlayerByBungieName/${membershipType}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: ExactSearchRequest = { displayName, displayNameCode };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.
   * @param getAllMemberships (optional) if set to 'true', all memberships regardless of whether they're obscured by overrides will be returned. Normal privacy restrictions on account linking will still apply no matter what.
   * @param membershipId The ID of the membership whose linked Destiny accounts you want returned. Make sure your membership ID matches its Membership Type: don't pass us a PSN membership ID and the XBox membership type, it's not going to work!
   * @param membershipType The type for the membership whose linked Destiny accounts you want returned.
   * @returns Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.
   */
  public GetLinkedProfiles(
    membershipId: string,
    membershipType: BungieMembershipType,
    queryString: {
      getAllMemberships?: boolean;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyLinkedProfilesResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${membershipId}/LinkedProfiles/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns Destiny Profile information for the supplied membership.
   * @param components A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
   * @param destinyMembershipId Destiny membership ID.
   * @param membershipType A valid non-BungieNet membership type.
   * @returns Returns Destiny Profile information for the supplied membership.
   */
  public GetProfile(
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString: {
      components?: DestinyComponentType[];
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyProfileResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns character information for the supplied character.
   * @param characterId ID of the character.
   * @param components A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
   * @param destinyMembershipId Destiny membership ID.
   * @param membershipType A valid non-BungieNet membership type.
   * @returns Returns character information for the supplied character.
   */
  public GetCharacter(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString: {
      components?: DestinyComponentType[];
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyCharacterResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
   * @param groupId A valid group id of clan.
   * @returns Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
   */
  public GetClanWeeklyRewardState(groupId: string, tokens?: ITokens): Promise<APIResponse<DestinyMilestone>> {
    const requestURL = `${this.url}/Destiny2/Clan/${groupId}/WeeklyRewardState/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns the dictionary of values for the Clan Banner
   
    * @returns Returns the dictionary of values for the Clan Banner
   */
  public GetClanBannerSource(tokens?: ITokens): Promise<APIResponse<ClanBannerSource>> {
    const requestURL = `${this.url}/Destiny2/Clan/ClanBannerDictionary/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
   * @param components A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
   * @param destinyMembershipId The membership ID of the destiny profile.
   * @param itemInstanceId The Instance ID of the destiny item.
   * @param membershipType A valid non-BungieNet membership type.
   * @returns Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
   */
  public GetItem(
    destinyMembershipId: string,
    itemInstanceId: string,
    membershipType: BungieMembershipType,
    queryString: {
      components?: DestinyComponentType[];
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyItemResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Item/${itemInstanceId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.
   * @param characterId The Destiny Character ID of the character for whom we're getting vendor info.
   * @param components A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
   * @param destinyMembershipId Destiny membership ID of another user. You may be denied.
   * @param filter The filter of what vendors and items to return, if any.
   * @param membershipType A valid non-BungieNet membership type.
   * @returns Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.
   */
  public GetVendors(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString: {
      components?: DestinyComponentType[];
      filter?: DestinyVendorFilter;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyVendorsResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get the details of a specific Vendor.
   * @param characterId The Destiny Character ID of the character for whom we're getting vendor info.
   * @param components A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
   * @param destinyMembershipId Destiny membership ID of another user. You may be denied.
   * @param membershipType A valid non-BungieNet membership type.
   * @param vendorHash The Hash identifier of the Vendor to be returned.
   * @returns Get the details of a specific Vendor.
   */
  public GetVendor(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    vendorHash: number,
    queryString: {
      components?: DestinyComponentType[];
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyVendorResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/${vendorHash}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
   * @param components A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
   * @returns Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
   */
  public GetPublicVendors(
    queryString: {
      components?: DestinyComponentType[];
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyPublicVendorsResponse>> {
    const requestURL = formatQueryStrings(`${this.url}/Destiny2/Vendors/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
   * @param characterId The Destiny Character ID of the character for whom we're getting collectible detail info.
   * @param collectiblePresentationNodeHash The hash identifier of the Presentation Node for whom we should return collectible details. Details will only be returned for collectibles that are direct descendants of this node.
   * @param components A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
   * @param destinyMembershipId Destiny membership ID of another user. You may be denied.
   * @param membershipType A valid non-BungieNet membership type.
   * @returns Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
   */
  public GetCollectibleNodeDetails(
    characterId: string,
    collectiblePresentationNodeHash: number,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString: {
      components?: DestinyComponentType[];
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyCollectibleNodeDetailResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Collectibles/${collectiblePresentationNodeHash}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif
   
    * @returns Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif
   */
  public TransferItem(
    itemReferenceHash: number,
    stackSize: number,
    transferToVault: boolean,
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/TransferItem/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyItemTransferRequest = {
      itemReferenceHash,
      stackSize,
      transferToVault,
      itemId,
      characterId,
      membershipType,
    };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.
   
    * @returns Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.
   */
  public PullFromPostmaster(
    itemReferenceHash: number,
    stackSize: number,
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/PullFromPostmaster/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyPostmasterTransferRequest = {
      itemReferenceHash,
      stackSize,
      itemId,
      characterId,
      membershipType,
    };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
   
    * @returns Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
   */
  public EquipItem(
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/EquipItem/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyItemActionRequest = { itemId, characterId, membershipType };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.
   
    * @returns Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.
   */
  public EquipItems(
    itemIds: string[],
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyEquipItemResults>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/EquipItems/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyItemSetActionRequest = { itemIds, characterId, membershipType };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Equip a loadout. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
   
    * @returns Equip a loadout. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
   */
  public EquipLoadout(
    loadoutIndex: number,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Loadouts/EquipLoadout/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyLoadoutActionRequest = { loadoutIndex, characterId, membershipType };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Snapshot a loadout with the currently equipped items.
   
    * @returns Snapshot a loadout with the currently equipped items.
   */
  public SnapshotLoadout(
    colorHash: number | null,
    iconHash: number | null,
    nameHash: number | null,
    loadoutIndex: number,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Loadouts/SnapshotLoadout/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyLoadoutUpdateActionRequest = {
      colorHash,
      iconHash,
      nameHash,
      loadoutIndex,
      characterId,
      membershipType,
    };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Update the color, icon, and name of a loadout.
   
    * @returns Update the color, icon, and name of a loadout.
   */
  public UpdateLoadoutIdentifiers(
    colorHash: number | null,
    iconHash: number | null,
    nameHash: number | null,
    loadoutIndex: number,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Loadouts/UpdateLoadoutIdentifiers/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyLoadoutUpdateActionRequest = {
      colorHash,
      iconHash,
      nameHash,
      loadoutIndex,
      characterId,
      membershipType,
    };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Clear the identifiers and items of a loadout.
   
    * @returns Clear the identifiers and items of a loadout.
   */
  public ClearLoadout(
    loadoutIndex: number,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Loadouts/ClearLoadout/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyLoadoutActionRequest = { loadoutIndex, characterId, membershipType };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Set the Lock State for an instanced item. You must have a valid Destiny Account.
   
    * @returns Set the Lock State for an instanced item. You must have a valid Destiny Account.
   */
  public SetItemLockState(
    state: boolean,
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/SetLockState/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyItemStateRequest = { state, itemId, characterId, membershipType };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.
   
    * @returns Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.
   */
  public SetQuestTrackedState(
    state: boolean,
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/SetTrackedState/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyItemStateRequest = { state, itemId, characterId, membershipType };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
   
    * @returns Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
   */
  public InsertSocketPlug(
    actionToken: string,
    itemInstanceId: string,
    plug: DestinyInsertPlugsRequestEntry,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyItemChangeResponse>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/InsertSocketPlug/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyInsertPlugsActionRequest = { actionToken, itemInstanceId, plug, characterId, membershipType };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.
   
    * @returns Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.
   */
  public InsertSocketPlugFree(
    plug: DestinyInsertPlugsRequestEntry,
    itemId: string,
    characterId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyItemChangeResponse>> {
    const requestURL = `${this.url}/Destiny2/Actions/Items/InsertSocketPlugFree/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyInsertPlugsFreeActionRequest = { plug, itemId, characterId, membershipType };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Gets the available post game carnage report for the activity ID.
   * @param activityId The ID of the activity whose PGCR is requested.
   * @returns Gets the available post game carnage report for the activity ID.
   */
  public GetPostGameCarnageReport(
    activityId: string,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyPostGameCarnageReportData>> {
    const requestURL = `${this.url.replace(
      "www.bungie.net",
      "stats.bungie.net"
    )}/Destiny2/Stats/PostGameCarnageReport/${activityId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.
   * @param activityId The ID of the activity where you ran into the brigand that you're reporting.
   * @returns Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.
   */
  public ReportOffensivePostGameCarnageReportPlayer(
    activityId: string,
    reasonCategoryHashes: number[],
    reasonHashes: number[],
    offendingCharacterId: string,
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Stats/PostGameCarnageReport/${activityId}/Report/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyReportOffensePgcrRequest = { reasonCategoryHashes, reasonHashes, offendingCharacterId };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Gets historical stats definitions.
   
    * @returns Gets historical stats definitions.
   */
  public GetHistoricalStatsDefinition(
    tokens?: ITokens
  ): Promise<APIResponse<Record<string, DestinyHistoricalStatsDefinition>>> {
    const requestURL = `${this.url}/Destiny2/Stats/Definition/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
   * @param groupId Group ID of the clan whose leaderboards you wish to fetch.
   * @param maxtop Maximum number of top players to return. Use a large number to get entire leaderboard.
   * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
   * @param statid ID of stat to return rather than returning all Leaderboard stats.
   * @returns Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
   */
  public GetClanLeaderboards(
    groupId: string,
    queryString: {
      maxtop?: number;
      modes?: string;
      statid?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<Record<string, Record<string, DestinyLeaderboard>>>> {
    const requestURL = formatQueryStrings(`${this.url}/Destiny2/Stats/Leaderboards/Clans/${groupId}/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
   * @param groupId Group ID of the clan whose leaderboards you wish to fetch.
   * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
   * @returns Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
   */
  public GetClanAggregateStats(
    groupId: string,
    queryString: {
      modes?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyClanAggregateStat[]>> {
    const requestURL = formatQueryStrings(`${this.url}/Destiny2/Stats/AggregateClanStats/${groupId}/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param maxtop Maximum number of top players to return. Use a large number to get entire leaderboard.
   * @param membershipType A valid non-BungieNet membership type.
   * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
   * @param statid ID of stat to return rather than returning all Leaderboard stats.
   * @returns Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
   */
  public GetLeaderboards(
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString: {
      maxtop?: number;
      modes?: string;
      statid?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<Record<string, Record<string, DestinyLeaderboard>>>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Stats/Leaderboards/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
   * @param characterId The specific character to build the leaderboard around for the provided Destiny Membership.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param maxtop Maximum number of top players to return. Use a large number to get entire leaderboard.
   * @param membershipType A valid non-BungieNet membership type.
   * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
   * @param statid ID of stat to return rather than returning all Leaderboard stats.
   * @returns Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
   */
  public GetLeaderboardsForCharacter(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString: {
      maxtop?: number;
      modes?: string;
      statid?: string;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<Record<string, Record<string, DestinyLeaderboard>>>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/Stats/Leaderboards/${membershipType}/${destinyMembershipId}/${characterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets a page list of Destiny items.
   * @param page Page number to return, starting with 0.
   * @param searchTerm The string to use when searching for Destiny entities.
   * @param type The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'.
   * @returns Gets a page list of Destiny items.
   */
  public SearchDestinyEntities(
    searchTerm: string,
    type: string,
    queryString: {
      page?: number;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyEntitySearchResult>> {
    const requestURL = formatQueryStrings(`${this.url}/Destiny2/Armory/Search/${type}/${searchTerm}/`, queryString);
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets historical stats for indicated character.
   * @param characterId The id of the character to retrieve. You can omit this character ID or set it to 0 to get aggregate stats across all characters.
   * @param dayend Last day to return when daily stats are requested. Use the format YYYY-MM-DD. Currently, we cannot allow more than 31 days of daily data to be requested in a single request.
   * @param daystart First day to return when daily stats are requested. Use the format YYYY-MM-DD. Currently, we cannot allow more than 31 days of daily data to be requested in a single request.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param groups Group of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals
   * @param membershipType A valid non-BungieNet membership type.
   * @param modes Game modes to return. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
   * @param periodType Indicates a specific period type to return. Optional. May be: Daily, AllTime, or Activity
   * @returns Gets historical stats for indicated character.
   */
  public GetHistoricalStats(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString: {
      dayend?: string;
      daystart?: string;
      groups?: DestinyStatsGroupType[];
      modes?: DestinyActivityModeType[];
      periodType?: PeriodType;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<Record<string, DestinyHistoricalStatsByPeriod>>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets aggregate historical stats organized around each character for a given account.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param groups Groups of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals.
   * @param membershipType A valid non-BungieNet membership type.
   * @returns Gets aggregate historical stats organized around each character for a given account.
   */
  public GetHistoricalStatsForAccount(
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString: {
      groups?: DestinyStatsGroupType[];
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyHistoricalStatsAccountResult>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Stats/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets activity history stats for indicated character.
   * @param characterId The id of the character to retrieve.
   * @param count Number of rows to return
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param membershipType A valid non-BungieNet membership type.
   * @param mode A filter for the activity mode to be returned. None returns all activities. See the documentation for DestinyActivityModeType for valid values, and pass in string representation.
   * @param page Page number to return, starting with 0.
   * @returns Gets activity history stats for indicated character.
   */
  public GetActivityHistory(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    queryString: {
      count?: number;
      mode?: DestinyActivityModeType;
      page?: number;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyActivityHistoryResults>> {
    const requestURL = formatQueryStrings(
      `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/Activities/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets details about unique weapon usage, including all exotic weapons.
   * @param characterId The id of the character to retrieve.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param membershipType A valid non-BungieNet membership type.
   * @returns Gets details about unique weapon usage, including all exotic weapons.
   */
  public GetUniqueWeaponHistory(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyHistoricalWeaponStatsData>> {
    const requestURL = `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/UniqueWeapons/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets all activities the character has participated in together with aggregate statistics for those activities.
   * @param characterId The specific character whose activities should be returned.
   * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
   * @param membershipType A valid non-BungieNet membership type.
   * @returns Gets all activities the character has participated in together with aggregate statistics for those activities.
   */
  public GetDestinyAggregateActivityStats(
    characterId: string,
    destinyMembershipId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyAggregateActivityResults>> {
    const requestURL = `${this.url}/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/AggregateActivityStats/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets custom localized content for the milestone of the given hash, if it exists.
   * @param milestoneHash The identifier for the milestone to be returned.
   * @returns Gets custom localized content for the milestone of the given hash, if it exists.
   */
  public GetPublicMilestoneContent(milestoneHash: number, tokens?: ITokens): Promise<APIResponse<DestinyMilestoneContent>> {
    const requestURL = `${this.url}/Destiny2/Milestones/${milestoneHash}/Content/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Gets public information about currently available Milestones.
   
    * @returns Gets public information about currently available Milestones.
   */
  public GetPublicMilestones(tokens?: ITokens): Promise<APIResponse<Record<number, DestinyPublicMilestone>>> {
    const requestURL = `${this.url}/Destiny2/Milestones/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Initialize a request to perform an advanced write action.
   
    * @returns Initialize a request to perform an advanced write action.
   */
  public AwaInitializeRequest(
    type: AwaType,
    affectedItemId: string | null,
    membershipType: BungieMembershipType,
    characterId: string | null,
    tokens?: ITokens
  ): Promise<APIResponse<AwaInitializeResponse>> {
    const requestURL = `${this.url}/Destiny2/Awa/Initialize/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: AwaPermissionRequested = { type, affectedItemId, membershipType, characterId };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
   
    * @returns Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
   */
  public AwaProvideAuthorizationResult(
    selection: AwaUserSelection,
    correlationId: string,
    nonce: string[],
    tokens?: ITokens
  ): Promise<APIResponse<number>> {
    const requestURL = `${this.url}/Destiny2/Awa/AwaProvideAuthorizationResult/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: AwaUserResponse = { selection, correlationId, nonce };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Returns the action token if user approves the request.
   * @param correlationId The identifier for the advanced write action request.
   * @returns Returns the action token if user approves the request.
   */
  public AwaGetActionToken(correlationId: string, tokens?: ITokens): Promise<APIResponse<AwaAuthorizationResult>> {
    const requestURL = `${this.url}/Destiny2/Awa/GetActionToken/${correlationId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }
}
