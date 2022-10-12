import { AminoMsg } from "@cosmjs/amino";
import { MsgMsg } from "./tx";
export interface AminoMsgMsg extends AminoMsg {
  type: "/gotabit.msg.MsgMsg";
  value: {
    sender: string;
    from: string;
    to: string;
    message: string;
  };
}
export const AminoConverter = {
  "/gotabit.msg.MsgMsg": {
    aminoType: "/gotabit.msg.MsgMsg",
    toAmino: ({
      sender,
      from,
      to,
      message
    }: MsgMsg): AminoMsgMsg["value"] => {
      return {
        sender,
        from,
        to,
        message
      };
    },
    fromAmino: ({
      sender,
      from,
      to,
      message
    }: AminoMsgMsg["value"]): MsgMsg => {
      return {
        sender,
        from,
        to,
        message
      };
    }
  }
};