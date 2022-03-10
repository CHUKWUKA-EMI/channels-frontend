import React, {
  Fragment,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import DraftEditor, { PluginEditorProps } from "@draft-js-plugins/editor";
import { Separator } from "@draft-js-plugins/inline-toolbar";
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
} from "@draft-js-plugins/buttons";

import HeadlinesButton from "./EditorHeadlinesButton";
import {
  emojiPlugin,
  imagePlugin,
  videoPlugin,
  sideToolbarPlugin,
  inlineToolbarPlugin,
  undoPlugin,
  linkPlugin,
  linkifyPlugin,
  hashtagPlugin,
  focusPlugin,
  textAlignmentPlugin,
  resizeablePlugin,
  blockDndPlugin,
  dividerPlugin,
  EmojiSelect,
  EmojiSuggestions,
  InlineToolbar,
  SideToolbar,
  CodeBlockButton,
  UndoButton,
  RedoButton,
} from "../utils/plugins";

import "../node_modules/@draft-js-plugins/side-toolbar/lib/plugin.css";
import "../node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css";
import "../node_modules/@draft-js-plugins/undo/lib/plugin.css";
import "../node_modules/@draft-js-plugins/hashtag/lib/plugin.css";
import "../node_modules/@draft-js-plugins/emoji/lib/plugin.css";
import "../node_modules/@draft-js-plugins/image/lib/plugin.css";
import "../node_modules/@draft-js-plugins/divider/lib/plugin.css";
import ImageUpload from "./ImageUpload";

const Editor: FunctionComponent<PluginEditorProps> = ({
  editorState,
  onChange,
}) => {
  const editorRef = useRef<DraftEditor | null>(null);
  const uploadBtnRef = useRef<HTMLButtonElement>(null);
  const [openImageUploader, setOpenImageUploader] = useState<boolean>(false);
  const [imageUploaderPosition, setImageUploaderPosition] = useState({
    x: 0,
    y: 0,
  });

  const focus = (): void => {
    editorRef.current?.focus();
  };

  const positionImageUploader = () => {
    setImageUploaderPosition({
      x: uploadBtnRef.current?.offsetLeft!,
      y: uploadBtnRef.current?.offsetTop!,
    });
  };

  useEffect(() => {
    focus();
  }, []);

  useEffect(() => {
    positionImageUploader();
  }, []);

  return (
    <div className="px-4 w-full">
      <div onClick={focus}>
        <DraftEditor
          spellCheck={true}
          editorState={editorState}
          onChange={onChange}
          plugins={[
            emojiPlugin,
            imagePlugin,
            videoPlugin,
            sideToolbarPlugin,
            inlineToolbarPlugin,
            undoPlugin,
            linkPlugin,
            linkifyPlugin,
            hashtagPlugin,
            focusPlugin,
            textAlignmentPlugin,
            resizeablePlugin,
            blockDndPlugin,
            dividerPlugin,
          ]}
          ref={(element) => {
            editorRef.current = element;
          }}
        />
        <EmojiSuggestions />
        <InlineToolbar>
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            (externalProps) => (
              <Fragment>
                <BoldButton {...externalProps} />
                <ItalicButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <CodeButton {...externalProps} />
                <Separator />
                <HeadlinesButton {...externalProps} />
                <UnorderedListButton {...externalProps} />
                <OrderedListButton {...externalProps} />
                <BlockquoteButton {...externalProps} />
                <CodeBlockButton {...externalProps} />
              </Fragment>
            )
          }
        </InlineToolbar>
        <SideToolbar />
      </div>

      <div className="mb-5 space-x-2 border-l-[1px] border-r-[1px] border-b-[1px] border-slate-500 p-2 rounded-br-md rounded-bl-md w-[95%] md:w-[60%] mx-auto flex items-center">
        <button
          className="bg-gray-200 rounded-full h-9 w-9 text-gray-400 flex items-center justify-center"
          ref={uploadBtnRef}
          onClick={() => {
            setOpenImageUploader(!openImageUploader);
            positionImageUploader();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="sr-only">Add a photo</span>
        </button>
        <EmojiSelect closeOnEmojiSelect />
        <UndoButton />
        <RedoButton />
      </div>
      <ImageUpload
        open={openImageUploader}
        setOpen={setOpenImageUploader}
        editorState={editorState}
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;
