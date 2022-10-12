import * as _70 from "./wasm/v1/genesis";
import * as _71 from "./wasm/v1/ibc";
import * as _72 from "./wasm/v1/proposal";
import * as _73 from "./wasm/v1/query";
import * as _74 from "./wasm/v1/tx";
import * as _75 from "./wasm/v1/types";
import * as _156 from "./wasm/v1/tx.amino";
import * as _157 from "./wasm/v1/tx.registry";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._156,
      ..._157
    };
  }
}