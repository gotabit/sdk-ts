import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSend } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/gotabit.inbox.MsgSend", MsgSend]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    send(value: MsgSend) {
      return {
        typeUrl: "/gotabit.inbox.MsgSend",
        value: MsgSend.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    send(value: MsgSend) {
      return {
        typeUrl: "/gotabit.inbox.MsgSend",
        value
      };
    }

  },
  fromPartial: {
    send(value: MsgSend) {
      return {
        typeUrl: "/gotabit.inbox.MsgSend",
        value: MsgSend.fromPartial(value)
      };
    }

  }
};