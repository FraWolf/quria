import { MembershipTypes } from "./api";

export interface DestinyEntityDefinition {
  displayProperties: {
    description: string;
    name: string;
    icon: string;
    hasIcon: boolean;
  };
  scope: number; // WIP
  sourceString: string;
  sourceHash: number;
  itemHash: number;
  acquisitionInfo: {
    acquireMaterialRequirementHash: number;
    runOnlyAcquisitionRewardSite: boolean;
  };
  stateInfo: {};
  presentationNodeType: number;
  traitIds: [];
  traitHashes: [];
  parentNodeHashes: number[];
  hash: number;
  index: number;
  redacted: boolean;
  blacklisted: boolean;
}

// ex: DestinyPlayerByBungieName
export interface DestinyPlayerProfile {
  supplementalDisplayName?: string;
  iconPath: string;
  crossSaveOverride: MembershipTypes;
  applicableMembershipTypes: MembershipTypes[];
  isPublic: boolean;
  membershipType: MembershipTypes;
  membershipId: string;
  displayName: string;
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number;
}

export interface DestinyProfilesList {
  dateLastPlayed: string;
  isOverridden: boolean;
  isCrossSavePrimary: boolean;
  crossSaveOverride: MembershipTypes;
  applicableMembershipTypes: MembershipTypes[];
  isPublic: boolean;
  membershipType: MembershipTypes;
  membershipId: string;
  displayName: string;
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number;
}

export interface ProfileWithErrors {
  errorCode: number;
  infoCard: DestinyPlayerProfile;
}

export interface DestinyLinkedProfile {
  profiles: DestinyProfilesList[];
  bnetMembership: DestinyPlayerProfile;
  profilesWithErrors: ProfileWithErrors[];
}
