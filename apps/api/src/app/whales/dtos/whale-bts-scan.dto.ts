export class WhaleBtsScanDto {
  account: string;
  balance: number;
}

export interface BscScanWhaleRefresh {
  result: WhaleBtsScanDto[]
}
