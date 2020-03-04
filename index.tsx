import { Bubble, IMessage } from "react-native-gifted-chat";

const WRAPPER_STYLE = { right: {}, left: {} };

// Fails with
// Type instantiation is excessively deep and possibly infinite.ts(2589)
function Fail() {
  return <Bubble wrapperStyle={WRAPPER_STYLE} />;
}

// Succeeds
function Success() {
  return <Bubble<IMessage> wrapperStyle={WRAPPER_STYLE} />;
}
