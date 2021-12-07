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
