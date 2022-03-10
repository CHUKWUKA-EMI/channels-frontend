import createEmojiPlugin from "@draft-js-plugins/emoji";
import createImagePlugin from "@draft-js-plugins/image";
import createVideoPlugin from "@draft-js-plugins/video";
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import createInlineToolbarPlugin, {
  Separator,
} from "@draft-js-plugins/inline-toolbar";
import createSideToolbarPlugin from "@draft-js-plugins/side-toolbar";
import createUndoPlugin from "@draft-js-plugins/undo";
import createLinkPlugin from "@draft-js-plugins/anchor";
import createLinkifyPlugin from "@draft-js-plugins/linkify";
import createFocusPlugin from "@draft-js-plugins/focus";
import createAlignmentPlugin from "@draft-js-plugins/alignment";
import createTextAlignmentPlugin from "@draft-js-plugins/text-alignment";
import createResizeablePlugin from "@draft-js-plugins/resizeable";
import createBlockDndPlugin from "@draft-js-plugins/drag-n-drop";
import createDividerPlugin from "@draft-js-plugins/divider";
import { createBlockStyleButton } from "@draft-js-plugins/buttons";

export const emojiPlugin = createEmojiPlugin({
  useNativeArt: true,
  disableInlineEmojis: false,
});
export const imagePlugin = createImagePlugin();
export const videoPlugin = createVideoPlugin();
export const hashtagPlugin = createHashtagPlugin({
  theme: { hashtag: "hashtag" },
});
export const inlineToolbarPlugin = createInlineToolbarPlugin();
export const sideToolbarPlugin = createSideToolbarPlugin();
export const undoPlugin = createUndoPlugin();
export const linkPlugin = createLinkPlugin();
export const linkifyPlugin = createLinkifyPlugin();
export const focusPlugin = createFocusPlugin();
export const alignmentPlugin = createAlignmentPlugin();
export const textAlignmentPlugin = createTextAlignmentPlugin();
export const resizeablePlugin = createResizeablePlugin();
export const blockDndPlugin = createBlockDndPlugin();
export const dividerPlugin = createDividerPlugin();
// export const codeEditorPlugin = createCodeEditorPlugin();

export const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
export const { RedoButton, UndoButton } = undoPlugin;
export const { AlignmentTool } = alignmentPlugin;
export const { DividerButton } = dividerPlugin;
export const { SideToolbar } = sideToolbarPlugin;
export const { InlineToolbar } = inlineToolbarPlugin;

export const CodeBlockButton = createBlockStyleButton({
  blockType: "code-block",
  children: "{ }",
});
