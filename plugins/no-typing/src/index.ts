import { after, instead } from "@vendetta/patcher";
import { findByName, findByProps } from "@vendetta/metro";
import { storage } from "@vendetta/plugin";
import { FluxDispatcher, ReactNative } from "@vendetta/metro/common";
import { findInReactTree } from "@vendetta/utils";
import { React } from "@vendetta/metro/common";
import { NoTypingIcon } from "./icon";

const ChatInput = findByName("ChatInput");
const Typing = findByProps("startTyping");
const patches = ["startTyping"].map((k) => instead(k, Typing, ([channelId]) => {
    console.log("channelId:", channelId);
    if (storage.noTyping_enabled) return;
    FluxDispatcher.dispatch({ type: "TYPING_START_LOCAL", channelId });
}));
// let i = 0;
patches.push(after("render", ChatInput.prototype, (_, ret) => {
    // console.log(ret);
    // const input = findInReactTree(ret, t => "forceAnimateButtons" in t.props && t.props.actions);
    // for (let index = 0; index < input.props.actions.length; index++) {
    //     const element = input.props.actions[index];
    //     console.log(element);
    // }
    // console.log(ret.props.children[2].props.children.props.children);
    // const input = ret.props.children[2].props.children.props.children;
    // for (let index = 0; index < input.length; index++) {
    //     const element = input[index];
    //     console.log(i, element);
    // }
    // console.log(input[1].props.children.props.children);
    // console.log(input[1].props.children.props.children.length);
    // const input2 = input[1].props.children.props.children as any[];
    // for (let index = 0; index < input2.length; index++) {
    //     const element = input2[index];
    //     console.log(i, element);
    // }
    // input.splice(1, 0, React.createElement(NoTypingIcon));
    // input.push(React.createElement(NoTypingIcon));
    // i++;
    const actions = findInReactTree(
        ret,
        (x) => "forceAnimateButtons" in x.props && x.props.actions
    ).props.actions;
    const noTypingAction = {
        IconComponent: NoTypingIcon,
        active: false,
        disabled: false,
    };
    actions.push(noTypingAction);
}));

export const onUnload = () => patches.forEach((unpatch) => unpatch());
