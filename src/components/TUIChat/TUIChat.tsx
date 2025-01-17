import React, {
  PropsWithChildren, useEffect, useMemo, useReducer, useRef, useState,
} from 'react';
import { ChatSDK, Conversation, Message } from 'tim-js-sdk';
import { useTUIKitContext } from '../../context/TUIKitContext';
import { TUIChatStateContextProvider } from '../../context/TUIChatStateContext';
import { TUIChatActionProvider } from '../../context/TUIChatActionContext';
import { ComponentProvider, UnknowPorps } from '../../context/ComponentContext';
import type { TUIChatActionContextValue } from '../../context/TUIChatActionContext';
import type { ComponentContextValue } from '../../context/ComponentContext';
import useCreateTUIChatStateContext from './hooks/useCreateTUIChatStateContext';

import type { TUIChatHeaderDefaultProps } from '../TUIChatHeader/TUIChatHeaderDefault';

import {
  TUIMessageProps,
  TUIMessage as TUIMessageDefault,
} from '../TUIMessage';
import type { MessageContextProps } from '../TUIMessage/MessageContext';

import './styles/index.scss';
import { CONSTANT_DISPATCH_TYPE } from '../../constants';
import { useMessageReceviedListener } from './hooks/useMessageReceviedListener';
import { chatReducer, ChatStateReducer, initialState } from './TUIChatState';

import { useCreateMessage } from './hooks/useCreateMessage';
import { useHandleMessageList } from './hooks/useHandleMessageList';
import { useHandleMessage } from './hooks/useHandleMessage';

import { TUIChatHeader as TUIChatHeaderElement } from '../TUIChatHeader';
import { MessageListProps, TUIMessageList } from '../TUIMessageList';
import { TUIMessageInput as TUIMessageInputElement, TUIMessageInputBasicProps } from '../TUIMessageInput';
import { EmptyStateIndicator } from '../EmptyStateIndicator';
import { Toast } from '../Toast';

interface TUIChatProps {
  className?: string,
  conversation?: Conversation,
  EmptyPlaceholder?: React.ReactElement,
  TUIMessage?: React.ComponentType<TUIMessageProps | UnknowPorps>,
  TUIChatHeader?: React.ComponentType<TUIChatHeaderDefaultProps>,
  MessageContext?: React.ComponentType<MessageContextProps>,
  TUIMessageInput?: React.ComponentType<UnknowPorps>,
  InputPlugins?: React.ComponentType<UnknowPorps>,
  InputQuote?: React.ComponentType<UnknowPorps>,
  MessagePlugins?: React.ComponentType<UnknowPorps>,
  onMessageRecevied?: (
    updateMessage: (event?: Array<Message>) => void,
    event: any,
  ) => void,
  sendMessage?: (message:Message, options?:any) => Promise<Message>,
  revokeMessage?: (message:Message) => Promise<Message>,
  messageConfig?: TUIMessageProps,
  cloudCustomData?: string,
  TUIMessageInputConfig?: TUIMessageInputBasicProps,
  TUIMessageListConfig?: MessageListProps,
  [propName: string]: any,
  // onlyMessageList: boolean,
}

interface TUIChatInnerProps extends TUIChatProps {
  tim?: ChatSDK,
  key?: string;
}

function UnMemoizedTUIChat <T extends TUIChatProps>(
  props: PropsWithChildren<T>,
):React.ReactElement {
  const {
    conversation: propsConversation,
    EmptyPlaceholder = <EmptyStateIndicator listType="chat" />,
  } = props;

  const { conversation: contextConversation, tim } = useTUIKitContext('TUIChat');

  const conversation = propsConversation || contextConversation;

  if (!conversation?.conversationID) return EmptyPlaceholder;

  return (
    <TUIChatInner
      tim={tim}
      {...props}
      conversation={conversation}
      key={conversation.conversationID}
    />
  );
}

function TUIChatInner <T extends TUIChatInnerProps>(
  props: PropsWithChildren<T>,
):React.ReactElement {
  const {
    tim,
    conversation,
    className,
    children,
    TUIMessage,
    TUIChatHeader,
    TUIMessageInput,
    InputPlugins,
    MessagePlugins,
    MessageContext,
    InputQuote,
    onMessageRecevied,
    sendMessage: propsSendMessage,
    revokeMessage,
    messageConfig,
    cloudCustomData,
    TUIMessageInputConfig,
    TUIMessageListConfig,
    onlyMessageList = false,
  } = props;

  const [state, dispatch] = useReducer<ChatStateReducer>(
    chatReducer,
    { ...initialState, conversation },
  );

  const messageListRef = useRef(null);
  const textareaRef = useRef<HTMLTextAreaElement>();
  const chatStateContextValue = useCreateTUIChatStateContext({
    tim,
    conversation,
    messageListRef,
    textareaRef,
    messageConfig,
    cloudCustomData,
    TUIMessageInputConfig,
    TUIMessageListConfig,
    ...state,
  });

  const {
    createTextMessage,
    createFaceMessage,
    createImageMessage,
    createVideoMessage,
    createFileMessage,
    createForwardMessage,
    createCustomMessage,
    createAudioMessage,
    createTextAtMessage,
    createLocationMessage,
    createMergerMessage,
  } = useCreateMessage({ tim, conversation, cloudCustomData });

  const {
    getMessageList,
    updateMessage,
    editLocalmessage,
    removeMessage,
    updataUploadPenddingMessageList,
  } = useHandleMessageList({
    tim, conversation, state, dispatch,
  });

  const {
    operateMessage,
    setAudioSource,
    setVideoSource,
    setHighlightedMessageId,
  } = useHandleMessage({
    state, dispatch,
  });

  const sendMessage = async (message: Message, options?:any) => {
    updateMessage([message]);
    try {
      if (propsSendMessage) {
        await propsSendMessage(message, options);
      } else {
        await tim.sendMessage(message, options);
      }
      editLocalmessage(message);
    } catch (error) {
      Toast({ text: error, type: 'error' });
      editLocalmessage(message);
      throw new Error(error);
    }
  };

  const loadMore = async () => {
    if (state.isCompleted) {
      dispatch({
        type: CONSTANT_DISPATCH_TYPE.SET_NO_MORE,
        value: true,
      });
      return;
    }
    const historyMessageData = await getMessageList({
      nextReqMessageID: state.nextReqMessageID,
    });
    dispatch({
      type: CONSTANT_DISPATCH_TYPE.SET_HISTORY_MESSAGELIST,
      value: historyMessageData.data.messageList,
    });
    dispatch({
      type: CONSTANT_DISPATCH_TYPE.SET_IS_COMPLETE,
      value: historyMessageData.data.isCompleted,
    });
    dispatch({
      type: CONSTANT_DISPATCH_TYPE.SET_NEXT_REQ_MESSAGE_ID,
      value: historyMessageData.data.nextReqMessageID,
    });
  };

  useMessageReceviedListener(updateMessage, onMessageRecevied);

  useEffect(() => {
    (async () => {
      const res = await getMessageList();
      if (res.data.messageList.length > 0) {
        dispatch({
          type: CONSTANT_DISPATCH_TYPE.SET_MESSAGELIST,
          value: res.data.messageList,
        });
      }
      dispatch({
        type: CONSTANT_DISPATCH_TYPE.SET_MESSAGELIST,
        value: res.data.messageList,
      });
      dispatch({
        type: CONSTANT_DISPATCH_TYPE.SET_IS_COMPLETE,
        value: res.data.isCompleted,
      });
      dispatch({
        type: CONSTANT_DISPATCH_TYPE.SET_NEXT_REQ_MESSAGE_ID,
        value: res.data.nextReqMessageID,
      });
    })();
  }, [conversation]);

  const chatActionContextValue: TUIChatActionContextValue = useMemo(
    () => ({
      sendMessage,
      removeMessage,
      updateMessage,
      createTextMessage,
      createFaceMessage,
      createImageMessage,
      createVideoMessage,
      createFileMessage,
      createForwardMessage,
      createCustomMessage,
      createAudioMessage,
      createTextAtMessage,
      createLocationMessage,
      createMergerMessage,
      editLocalmessage,
      operateMessage,
      loadMore,
      revokeMessage,
      setAudioSource,
      setVideoSource,
      setHighlightedMessageId,
      updataUploadPenddingMessageList,
    }),
    [
      sendMessage,
      removeMessage,
      updateMessage,
      createTextMessage,
      createFaceMessage,
      createImageMessage,
      createVideoMessage,
      createFileMessage,
      createForwardMessage,
      createCustomMessage,
      createAudioMessage,
      createTextAtMessage,
      createLocationMessage,
      createMergerMessage,
      editLocalmessage,
      operateMessage,
      loadMore,
      revokeMessage,
      setAudioSource,
      setVideoSource,
      setHighlightedMessageId,
      updataUploadPenddingMessageList,
    ],
  );

  const componentContextValue: ComponentContextValue = useMemo(
    () => ({
      TUIMessage: TUIMessage || TUIMessageDefault,
      MessageContext,
      InputPlugins,
      MessagePlugins,
      TUIChatHeader,
      TUIMessageInput,
      InputQuote,
    }),
    [],
  );

  return (
    <div className={`chat ${className}`}>
      <TUIChatStateContextProvider value={chatStateContextValue}>
        <TUIChatActionProvider value={chatActionContextValue}>
          <ComponentProvider value={componentContextValue}>
            {children || (
              onlyMessageList? <> <TUIMessageList /> </>:
            <>
              <TUIChatHeaderElement />
              <TUIMessageList />
              <TUIMessageInputElement />
            </>
            )}
          </ComponentProvider>
        </TUIChatActionProvider>
      </TUIChatStateContextProvider>
    </div>
  );
}

export const TUIChat = React.memo(UnMemoizedTUIChat) as typeof UnMemoizedTUIChat;
