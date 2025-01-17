import React, { ReactEventHandler, PropsWithChildren } from 'react';
import { Message } from 'tim-js-sdk';
import { MessagePluginsProps } from '../components/TUIMessage/MessagePlugins.js';

declare enum messageShowType {
    IN = "in",
    OUT = "out",
    ALL = "all",
    NONE = "none"
}
interface TUIMessageContextValue {
    message?: Message;
    handleDelete?: ReactEventHandler;
    CustemElement?: React.ComponentType<{
        message: Message;
    }>;
    TextElement?: React.ComponentType<{
        message: Message;
    }>;
    ImageElement?: React.ComponentType<{
        message: Message;
    }>;
    VideoElement?: React.ComponentType<{
        message: Message;
    }>;
    AudioElement?: React.ComponentType<{
        message: Message;
    }>;
    FileElement?: React.ComponentType<{
        message: Message;
    }>;
    MergerElement?: React.ComponentType<{
        message: Message;
    }>;
    LocationElement?: React.ComponentType<{
        message: Message;
    }>;
    FaceElement?: React.ComponentType<{
        message: Message;
    }>;
    filter?: (data: Message) => void;
    isShowTime?: boolean;
    isShowRead?: boolean;
    plugin?: MessagePluginsProps;
    prefix?: React.ReactElement | string;
    suffix?: React.ReactElement | string;
    customName?: React.ReactElement;
    showAvatar?: messageShowType;
    showName?: messageShowType;
    customAvatar?: React.ReactElement;
    isShowProgress?: boolean;
    Progress?: React.ComponentType<{
        message: Message;
    }>;
}
declare const TUIMessageContext: React.Context<TUIMessageContextValue>;
declare function TUIMessageContextProvider({ children, value }: PropsWithChildren<{
    value: TUIMessageContextValue;
}>): React.ReactElement;
declare function useTUIMessageContext(componentName?: string): TUIMessageContextValue;

export { TUIMessageContext, TUIMessageContextProvider, TUIMessageContextValue, messageShowType, useTUIMessageContext };
