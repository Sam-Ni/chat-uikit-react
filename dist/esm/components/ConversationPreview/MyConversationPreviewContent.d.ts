import React from 'react';
import { ConversationPreviewUIComponentProps } from './ConversationPreview.js';

declare function unMemoMyConversationPreviewContent<T extends ConversationPreviewUIComponentProps>(props: T): React.ReactElement;
declare const MyConversationPreviewContent: typeof unMemoMyConversationPreviewContent;

export { MyConversationPreviewContent, unMemoMyConversationPreviewContent };
