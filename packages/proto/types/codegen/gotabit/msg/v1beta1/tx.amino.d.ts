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
export declare const AminoConverter: {
    "/gotabit.msg.MsgMsg": {
        aminoType: string;
        toAmino: ({ sender, from, to, message }: MsgMsg) => AminoMsgMsg["value"];
        fromAmino: ({ sender, from, to, message }: AminoMsgMsg["value"]) => MsgMsg;
    };
};
