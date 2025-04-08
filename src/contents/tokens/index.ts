import { parseAuthenticationHeaders, Controller } from "../../adapters";
import {
  ITokens,
  APIResponse,
  PartnerOfferClaimRequest,
  PartnerOfferSkuHistoryResponse,
  PartnerRewardHistoryResponse,
  BungieRewardDisplay,
  BungieMembershipType,
} from "../../types";

export class Tokens {
  constructor(private url: string, private headers: Record<string, string>) {}

  /**
   * Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.
   
    * @returns Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.
   */
  public ForceDropsRepair(tokens?: ITokens): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Tokens/Partner/ForceDropsRepair/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Claim a partner offer as the authenticated user.
   
    * @returns Claim a partner offer as the authenticated user.
   */
  public ClaimPartnerOffer(
    PartnerOfferId: string,
    BungieNetMembershipId: string,
    TransactionId: string,
    tokens?: ITokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Tokens/Partner/ClaimOffer/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);
    const bodyParams: PartnerOfferClaimRequest = { PartnerOfferId, BungieNetMembershipId, TransactionId };
    return Controller.request(requestURL, true, "POST", authHeaders, JSON.stringify(bodyParams));
  }

  /**
   * Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
   * @param partnerApplicationId The partner application identifier.
   * @param targetBnetMembershipId The bungie.net user to apply missing offers to. If not self, elevated permissions are required.
   * @returns Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
   */
  public ApplyMissingPartnerOffersWithoutClaim(
    partnerApplicationId: number,
    targetBnetMembershipId: string,
    tokens?: ITokens
  ): Promise<APIResponse<boolean>> {
    const requestURL = `${this.url}/Tokens/Partner/ApplyMissingOffers/${partnerApplicationId}/${targetBnetMembershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "POST", authHeaders);
  }

  /**
   * Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
   * @param partnerApplicationId The partner application identifier.
   * @param targetBnetMembershipId The bungie.net user to apply missing offers to. If not self, elevated permissions are required.
   * @returns Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
   */
  public GetPartnerOfferSkuHistory(
    partnerApplicationId: number,
    targetBnetMembershipId: string,
    tokens?: ITokens
  ): Promise<APIResponse<PartnerOfferSkuHistoryResponse[]>> {
    const requestURL = `${this.url}/Tokens/Partner/History/${partnerApplicationId}/${targetBnetMembershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.
   * @param partnerApplicationId The partner application identifier.
   * @param targetBnetMembershipId The bungie.net user to return reward history for.
   * @returns Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.
   */
  public GetPartnerRewardHistory(
    partnerApplicationId: number,
    targetBnetMembershipId: string,
    tokens?: ITokens
  ): Promise<APIResponse<PartnerRewardHistoryResponse>> {
    const requestURL = `${this.url}/Tokens/Partner/History/${targetBnetMembershipId}/Application/${partnerApplicationId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns the bungie rewards for the targeted user.
   * @param membershipId bungie.net user membershipId for requested user rewards. If not self, elevated permissions are required.
   * @returns Returns the bungie rewards for the targeted user.
   */
  public GetBungieRewardsForUser(
    membershipId: string,
    tokens?: ITokens
  ): Promise<APIResponse<Record<string, BungieRewardDisplay>>> {
    const requestURL = `${this.url}/Tokens/Rewards/GetRewardsForUser/${membershipId}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.
   * @param membershipId users platform membershipId for requested user rewards. If not self, elevated permissions are required.
   * @param membershipType The target Destiny 2 membership type.
   * @returns Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.
   */
  public GetBungieRewardsForPlatformUser(
    membershipId: string,
    membershipType: BungieMembershipType,
    tokens?: ITokens
  ): Promise<APIResponse<Record<string, BungieRewardDisplay>>> {
    const requestURL = `${this.url}/Tokens/Rewards/GetRewardsForPlatformUser/${membershipId}/${membershipType}/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }

  /**
   * Returns a list of the current bungie rewards
   
    * @returns Returns a list of the current bungie rewards
   */
  public GetBungieRewardsList(tokens?: ITokens): Promise<APIResponse<Record<string, BungieRewardDisplay>>> {
    const requestURL = `${this.url}/Tokens/Rewards/BungieRewards/`;
    const authHeaders = parseAuthenticationHeaders(this.headers, tokens);

    return Controller.request(requestURL, true, "GET", authHeaders);
  }
}
