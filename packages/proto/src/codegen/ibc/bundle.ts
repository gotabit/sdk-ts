import * as _90 from "./applications/interchain_accounts/controller/v1/controller";
import * as _91 from "./applications/interchain_accounts/controller/v1/query";
import * as _92 from "./applications/interchain_accounts/host/v1/host";
import * as _93 from "./applications/interchain_accounts/host/v1/query";
import * as _94 from "./applications/interchain_accounts/v1/account";
import * as _95 from "./applications/interchain_accounts/v1/genesis";
import * as _96 from "./applications/interchain_accounts/v1/metadata";
import * as _97 from "./applications/interchain_accounts/v1/packet";
import * as _98 from "./applications/transfer/v1/genesis";
import * as _99 from "./applications/transfer/v1/query";
import * as _100 from "./applications/transfer/v1/transfer";
import * as _101 from "./applications/transfer/v1/tx";
import * as _102 from "./applications/transfer/v2/packet";
import * as _103 from "./core/channel/v1/channel";
import * as _104 from "./core/channel/v1/genesis";
import * as _105 from "./core/channel/v1/query";
import * as _106 from "./core/channel/v1/tx";
import * as _107 from "./core/client/v1/client";
import * as _108 from "./core/client/v1/genesis";
import * as _109 from "./core/client/v1/query";
import * as _110 from "./core/client/v1/tx";
import * as _111 from "./core/commitment/v1/commitment";
import * as _112 from "./core/connection/v1/connection";
import * as _113 from "./core/connection/v1/genesis";
import * as _114 from "./core/connection/v1/query";
import * as _115 from "./core/connection/v1/tx";
import * as _116 from "./core/types/v1/genesis";
import * as _117 from "./lightclients/localhost/v1/localhost";
import * as _118 from "./lightclients/solomachine/v1/solomachine";
import * as _119 from "./lightclients/solomachine/v2/solomachine";
import * as _120 from "./lightclients/tendermint/v1/tendermint";
import * as _157 from "./applications/transfer/v1/tx.amino";
import * as _158 from "./core/channel/v1/tx.amino";
import * as _159 from "./core/client/v1/tx.amino";
import * as _160 from "./core/connection/v1/tx.amino";
import * as _161 from "./applications/transfer/v1/tx.registry";
import * as _162 from "./core/channel/v1/tx.registry";
import * as _163 from "./core/client/v1/tx.registry";
import * as _164 from "./core/connection/v1/tx.registry";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._90,
          ..._91
        };
      }
      export namespace host {
        export const v1 = { ..._92,
          ..._93
        };
      }
      export const v1 = { ..._94,
        ..._95,
        ..._96,
        ..._97
      };
    }
    export namespace transfer {
      export const v1 = { ..._98,
        ..._99,
        ..._100,
        ..._101,
        ..._157,
        ..._161
      };
      export const v2 = { ..._102
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._103,
        ..._104,
        ..._105,
        ..._106,
        ..._158,
        ..._162
      };
    }
    export namespace client {
      export const v1 = { ..._107,
        ..._108,
        ..._109,
        ..._110,
        ..._159,
        ..._163
      };
    }
    export namespace commitment {
      export const v1 = { ..._111
      };
    }
    export namespace connection {
      export const v1 = { ..._112,
        ..._113,
        ..._114,
        ..._115,
        ..._160,
        ..._164
      };
    }
    export namespace types {
      export const v1 = { ..._116
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._117
      };
    }
    export namespace solomachine {
      export const v1 = { ..._118
      };
      export const v2 = { ..._119
      };
    }
    export namespace tendermint {
      export const v1 = { ..._120
      };
    }
  }
}