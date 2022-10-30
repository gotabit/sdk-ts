import * as _84 from "./epochs/genesis";
import * as _85 from "./epochs/query";
import * as _86 from "./inbox/v1beta1/tx";
import * as _87 from "./mint/v1beta1/genesis";
import * as _88 from "./mint/v1beta1/mint";
import * as _89 from "./mint/v1beta1/query";
import * as _155 from "./inbox/v1beta1/tx.amino";
import * as _156 from "./inbox/v1beta1/tx.registry";
export namespace gotabit {
  export namespace epochs {
    export const v1beta1 = { ..._84,
      ..._85
    };
  }
  export const inbox = { ..._86,
    ..._155,
    ..._156
  };
  export namespace mint {
    export const v1beta1 = { ..._87,
      ..._88,
      ..._89
    };
  }
}