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
export declare const AminoConverter: {
    "/gotabit.inbox.MsgSend": {
        aminoType: string;
        toAmino: ({ sender, to, topics, message }: MsgSend) => AminoMsgSend["value"];
        fromAmino: ({ sender, to, topics, message }: AminoMsgSend["value"]) => MsgSend;
    };
};
