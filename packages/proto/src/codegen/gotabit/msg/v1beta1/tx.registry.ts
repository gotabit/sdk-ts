import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgMsg } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/gotabit.msg.MsgMsg", MsgMsg]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    msg(value: MsgMsg) {
      return {
        typeUrl: "/gotabit.msg.MsgMsg",
        value: MsgMsg.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    msg(value: MsgMsg) {
      return {
        typeUrl: "/gotabit.msg.MsgMsg",
        value
      };
    }

  },
  fromPartial: {
    msg(value: MsgMsg) {
      return {
        typeUrl: "/gotabit.msg.MsgMsg",
        value: MsgMsg.fromPartial(value)
      };
    }

  }
};