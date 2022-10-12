import * as _87 from "./epochs/genesis";
import * as _88 from "./epochs/query";
import * as _89 from "./inbox/v1beta1/tx";
import * as _90 from "./mint/v1beta1/genesis";
import * as _91 from "./mint/v1beta1/mint";
import * as _92 from "./mint/v1beta1/query";
import * as _158 from "./inbox/v1beta1/tx.amino";
import * as _159 from "./inbox/v1beta1/tx.registry";
export namespace gotabit {
  export namespace epochs {
    export const v1beta1 = { ..._87,
      ..._88
    };
  }
  export const inbox = { ..._89,
    ..._158,
    ..._159
  };
  export namespace mint {
    export const v1beta1 = { ..._90,
      ..._91,
      ..._92
    };
  }
}