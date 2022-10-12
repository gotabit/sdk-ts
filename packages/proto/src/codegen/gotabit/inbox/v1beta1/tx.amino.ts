import { AminoMsg } from "@cosmjs/amino";
import { MsgSend } from "./tx";
export interface AminoMsgSend extends AminoMsg {
  type: "/gotabit.inbox.MsgSend";
  value: {
    sender: string;
    to: string;
    topics: string;
    message: string;
  };
}
export const AminoConverter = {
  "/gotabit.inbox.MsgSend": {
    aminoType: "/gotabit.inbox.MsgSend",
    toAmino: ({
      sender,
      to,
      topics,
      message
    }: MsgSend): AminoMsgSend["value"] => {
      return {
        sender,
        to,
        topics,
        message
      };
    },
    fromAmino: ({
      sender,
      to,
      topics,
      message
    }: AminoMsgSend["value"]): MsgSend => {
      return {
        sender,
        to,
        topics,
        message
      };
    }
  }
};