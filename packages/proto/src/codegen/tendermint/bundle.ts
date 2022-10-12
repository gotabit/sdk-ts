import * as _125 from "./abci/types";
import * as _126 from "./crypto/keys";
import * as _127 from "./crypto/proof";
import * as _128 from "./libs/bits/types";
import * as _129 from "./p2p/types";
import * as _130 from "./types/block";
import * as _131 from "./types/evidence";
import * as _132 from "./types/params";
import * as _133 from "./types/types";
import * as _134 from "./types/validator";
import * as _135 from "./version/types";
export namespace tendermint {
  export const abci = { ..._125
  };
  export const crypto = { ..._126,
    ..._127
  };
  export namespace libs {
    export const bits = { ..._128
    };
  }
  export const p2p = { ..._129
  };
  export const types = { ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._134
  };
  export const version = { ..._135
  };
}