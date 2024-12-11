import { parseAuthenticationHeaders, request, formatQueryStrings } from "../../adapters";
import {
  BungieMembershipType,
  ITokens,
  APIResponse,
  DestinyFireteamFinderApplicationType,
  DestinyFireteamFinderApplyToListingResponse,
  DestinyFireteamFinderBulkGetListingStatusResponse,
  DestinyFireteamFinderBulkGetListingStatusRequest,
  DestinyFireteamFinderGetApplicationResponse,
  DestinyFireteamFinderListing,
  DestinyFireteamFinderGetListingApplicationsResponse,
  DestinyFireteamFinderLobbyResponse,
  DestinyFireteamFinderGetPlayerLobbiesResponse,
  DestinyFireteamFinderGetPlayerApplicationsResponse,
  DestinyFireteamFinderGetPlayerOffersResponse,
  DestinyFireteamFinderGetCharacterActivityAccessResponse,
  DestinyFireteamFinderOffer,
  DestinyFireteamFinderGetLobbyOffersResponse,
  DestinyFireteamFinderLobbyPrivacyScope,
  DestinyFireteamFinderListingValue,
  DestinyFireteamFinderHostLobbyResponse,
  DestinyFireteamFinderHostLobbyRequest,
  DestinyFireteamFinderJoinLobbyRequest,
  DestinyFireteamFinderKickPlayerRequest,
  DestinyFireteamFinderRespondToApplicationResponse,
  DestinyFireteamFinderRespondToApplicationRequest,
  DestinyFireteamFinderRespondToAuthenticationResponse,
  DestinyFireteamFinderRespondToAuthenticationRequest,
  DestinyFireteamFinderRespondToOfferResponse,
  DestinyFireteamFinderRespondToOfferRequest,
  DestinyFireteamFinderLobbyState,
  DestinyFireteamFinderSearchListingsByClanResponse,
  DestinyFireteamFinderSearchListingsByClanRequest,
  DestinyFireteamFinderListingFilter,
  DestinyFireteamFinderSearchListingsByFiltersResponse,
  DestinyFireteamFinderSearchListingsByFiltersRequest,
  DestinyFireteamFinderLobbySettings,
  DestinyFireteamFinderUpdateLobbySettingsResponse,
  DestinyFireteamFinderUpdateLobbySettingsRequest,
} from "../../types";

export class FireteamFinder {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Activates a lobby and initializes it as an active Fireteam.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param forceActivation Optional boolean to forcibly activate the lobby, kicking pending applicants.
   * @param lobbyId The ID of the lobby to activate.
   * @returns Activates a lobby and initializes it as an active Fireteam.
   */
  public ActivateLobby(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    lobbyId: string,
    queryString: {
      forceActivation?: boolean;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = formatQueryStrings(
      `${this.url}/FireteamFinder/Lobby/Activate/${lobbyId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Activates a lobby and initializes it as an active Fireteam, returning the updated Listing ID.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param forceActivation Optional boolean to forcibly activate the lobby, kicking pending applicants.
   * @param lobbyId The ID of the lobby to activate.
   * @returns Activates a lobby and initializes it as an active Fireteam, returning the updated Listing ID.
   */
  public ActivateLobbyForNewListingId(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    lobbyId: string,
    queryString: {
      forceActivation?: boolean;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = formatQueryStrings(
      `${this.url}/FireteamFinder/Lobby/ActivateForNewListingId/${lobbyId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Applies to have a character join a fireteam.
   * @param applicationType The type of application to apply
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param listingId The id of the listing to apply to
   * @returns Applies to have a character join a fireteam.
   */
  public ApplyToListing(
    applicationType: DestinyFireteamFinderApplicationType,
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    listingId: string,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderApplyToListingResponse>> {
    const requestURL = `${this.url}/FireteamFinder/Listing/${listingId}/Apply/${applicationType}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Retrieves Fireteam listing statuses in bulk.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @returns Retrieves Fireteam listing statuses in bulk.
   */
  public BulkGetListingStatus(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderBulkGetListingStatusResponse>> {
    const requestURL = `${this.url}/FireteamFinder/Listing/BulkStatus/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyFireteamFinderBulkGetListingStatusRequest = {};
    return request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Retrieves a Fireteam application.
   * @param applicationId
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @returns Retrieves a Fireteam application.
   */
  public GetApplication(
    applicationId: string,
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderGetApplicationResponse>> {
    const requestURL = `${this.url}/FireteamFinder/Application/${applicationId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieves a Fireteam listing.
   * @param listingId The ID of the listing to retrieve.
   * @returns Retrieves a Fireteam listing.
   */
  public GetListing(listingId: string, tokens?: ITokens): Promise<APIResponse<DestinyFireteamFinderListing>> {
    const requestURL = `${this.url}/FireteamFinder/Listing/${listingId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieves all applications to a Fireteam Finder listing.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param flags Optional flag representing a filter on the state of the application.
   * @param listingId The ID of the listing whose applications to retrieve.
   * @param nextPageToken An optional token from a previous response to fetch the next page of results.
   * @param pageSize The maximum number of results to be returned with this page.
   * @returns Retrieves all applications to a Fireteam Finder listing.
   */
  public GetListingApplications(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    listingId: string,
    queryString: {
      flags?: string;
      nextPageToken?: string;
      pageSize?: number;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderGetListingApplicationsResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/FireteamFinder/Listing/${listingId}/Applications/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieves the information for a Fireteam lobby.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param lobbyId The ID of the lobby to retrieve.
   * @returns Retrieves the information for a Fireteam lobby.
   */
  public GetLobby(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    lobbyId: string,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderLobbyResponse>> {
    const requestURL = `${this.url}/FireteamFinder/Lobby/${lobbyId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieves the information for a Fireteam lobby.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param nextPageToken An optional token from a previous response to fetch the next page of results.
   * @param pageSize The maximum number of results to be returned with this page.
   * @returns Retrieves the information for a Fireteam lobby.
   */
  public GetPlayerLobbies(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    queryString: {
      nextPageToken?: string;
      pageSize?: number;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderGetPlayerLobbiesResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/FireteamFinder/PlayerLobbies/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieves Fireteam applications that this player has sent or recieved.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param nextPageToken An optional token from a previous response to fetch the next page of results.
   * @param pageSize The maximum number of results to be returned with this page.
   * @returns Retrieves Fireteam applications that this player has sent or recieved.
   */
  public GetPlayerApplications(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    queryString: {
      nextPageToken?: string;
      pageSize?: number;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderGetPlayerApplicationsResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/FireteamFinder/PlayerApplications/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieves Fireteam offers that this player has recieved.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param nextPageToken An optional token from a previous response to fetch the next page of results.
   * @param pageSize The maximum number of results to be returned with this page.
   * @returns Retrieves Fireteam offers that this player has recieved.
   */
  public GetPlayerOffers(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    queryString: {
      nextPageToken?: string;
      pageSize?: number;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderGetPlayerOffersResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/FireteamFinder/PlayerOffers/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieves the information for a Fireteam lobby.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @returns Retrieves the information for a Fireteam lobby.
   */
  public GetCharacterActivityAccess(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderGetCharacterActivityAccessResponse>> {
    const requestURL = `${this.url}/FireteamFinder/CharacterActivityAccess/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieves an offer to a Fireteam lobby.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param offerId The unique ID of the offer.
   * @returns Retrieves an offer to a Fireteam lobby.
   */
  public GetOffer(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    offerId: string,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderOffer>> {
    const requestURL = `${this.url}/FireteamFinder/Offer/${offerId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Retrieves all offers relevant to a Fireteam lobby.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param lobbyId The unique ID of the lobby.
   * @param nextPageToken An optional token from a previous response to fetch the next page of results.
   * @param pageSize The maximum number of results to be returned with this page.
   * @returns Retrieves all offers relevant to a Fireteam lobby.
   */
  public GetLobbyOffers(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    lobbyId: string,
    queryString: {
      nextPageToken?: string;
      pageSize?: number;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderGetLobbyOffersResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/FireteamFinder/Lobby/${lobbyId}/Offers/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Creates a new Fireteam lobby and Fireteam Finder listing.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @returns Creates a new Fireteam lobby and Fireteam Finder listing.
   */
  public HostLobby(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    maxPlayerCount: number,
    onlinePlayersOnly: boolean,
    privacyScope: DestinyFireteamFinderLobbyPrivacyScope,
    scheduledDateTime: string,
    clanId: string,
    listingValues: DestinyFireteamFinderListingValue[],
    activityGraphHash: number,
    activityHash: number,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderHostLobbyResponse>> {
    const requestURL = `${this.url}/FireteamFinder/Lobby/Host/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyFireteamFinderHostLobbyRequest = {
      maxPlayerCount,
      onlinePlayersOnly,
      privacyScope,
      scheduledDateTime,
      clanId,
      listingValues,
      activityGraphHash,
      activityHash,
    };
    return request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Sends a request to join an available Fireteam lobby.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @returns Sends a request to join an available Fireteam lobby.
   */
  public JoinLobby(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    lobbyId: string,
    offerId: string,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderLobbyResponse>> {
    const requestURL = `${this.url}/FireteamFinder/Lobby/Join/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyFireteamFinderJoinLobbyRequest = { lobbyId, offerId };
    return request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Kicks a player from a Fireteam Finder lobby.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param lobbyId The ID of the lobby to kick the player from.
   * @param targetMembershipId A valid Destiny membership ID of the player to kick.
   * @returns Kicks a player from a Fireteam Finder lobby.
   */
  public KickPlayer(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    lobbyId: string,
    targetMembershipId: string,
    targetMembershipType: BungieMembershipType,
    targetCharacterId: string,
    tokens?: ITokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/FireteamFinder/Lobby/${lobbyId}/KickPlayer/${targetMembershipId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyFireteamFinderKickPlayerRequest = { targetMembershipType, targetCharacterId };
    return request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Sends a request to leave a Fireteam listing application.
   * @param applicationId The ID of the application to leave.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @returns Sends a request to leave a Fireteam listing application.
   */
  public LeaveApplication(
    applicationId: string,
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/FireteamFinder/Application/Leave/${applicationId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Sends a request to leave a Fireteam lobby.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param lobbyId The ID of the lobby to leave.
   * @returns Sends a request to leave a Fireteam lobby.
   */
  public LeaveLobby(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    lobbyId: string,
    tokens?: ITokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/FireteamFinder/Lobby/Leave/${lobbyId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Responds to an application sent to a Fireteam lobby.
   * @param applicationId The application ID to respond to.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @returns Responds to an application sent to a Fireteam lobby.
   */
  public RespondToApplication(
    applicationId: string,
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    accepted: boolean,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderRespondToApplicationResponse>> {
    const requestURL = `${this.url}/FireteamFinder/Application/Respond/${applicationId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyFireteamFinderRespondToApplicationRequest = { accepted };
    return request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Responds to an authentication request for a Fireteam.
   * @param applicationId The ID of the application whose authentication to confirm.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @returns Responds to an authentication request for a Fireteam.
   */
  public RespondToAuthentication(
    applicationId: string,
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    confirmed: boolean,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderRespondToAuthenticationResponse>> {
    const requestURL = `${this.url}/FireteamFinder/Authentication/Respond/${applicationId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyFireteamFinderRespondToAuthenticationRequest = { confirmed };
    return request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Responds to a Fireteam lobby offer.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param offerId The unique ID of the offer.
   * @returns Responds to a Fireteam lobby offer.
   */
  public RespondToOffer(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    offerId: string,
    accepted: boolean,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderRespondToOfferResponse>> {
    const requestURL = `${this.url}/FireteamFinder/Offer/Respond/${offerId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyFireteamFinderRespondToOfferRequest = { accepted };
    return request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Returns search results for available Fireteams provided a clan.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @returns Returns search results for available Fireteams provided a clan.
   */
  public SearchListingsByClan(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    pageSize: number,
    pageToken: string,
    lobbyState: DestinyFireteamFinderLobbyState,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderSearchListingsByClanResponse>> {
    const requestURL = `${this.url}/FireteamFinder/Search/Clan/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyFireteamFinderSearchListingsByClanRequest = { pageSize, pageToken, lobbyState };
    return request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Returns search results for available Fireteams provided search filters.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param overrideOfflineFilter Optional boolean to bypass the offline-only check, so the client can pull fireteam from the game.
   * @returns Returns search results for available Fireteams provided search filters.
   */
  public SearchListingsByFilters(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    filters: DestinyFireteamFinderListingFilter[],
    pageSize: number,
    pageToken: string,
    lobbyState: DestinyFireteamFinderLobbyState,
    queryString: {
      overrideOfflineFilter?: boolean;
    } | null,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderSearchListingsByFiltersResponse>> {
    const requestURL = formatQueryStrings(
      `${this.url}/FireteamFinder/Search/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`,
      queryString
    );
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyFireteamFinderSearchListingsByFiltersRequest = { filters, pageSize, pageToken, lobbyState };
    return request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Updates the settings for a Fireteam lobby.
   * @param destinyCharacterId A valid Destiny character ID.
   * @param destinyMembershipId A valid Destiny membership ID.
   * @param destinyMembershipType A valid Destiny membership type.
   * @param lobbyId The ID of the lobby to update.
   * @returns Updates the settings for a Fireteam lobby.
   */
  public UpdateLobbySettings(
    destinyCharacterId: string,
    destinyMembershipId: string,
    destinyMembershipType: BungieMembershipType,
    lobbyId: string,
    updatedSettings: DestinyFireteamFinderLobbySettings,
    tokens?: ITokens
  ): Promise<APIResponse<DestinyFireteamFinderUpdateLobbySettingsResponse>> {
    const requestURL = `${this.url}/FireteamFinder/Lobby/UpdateSettings/${lobbyId}/${destinyMembershipType}/${destinyMembershipId}/${destinyCharacterId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: DestinyFireteamFinderUpdateLobbySettingsRequest = { updatedSettings };
    return request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }
}
