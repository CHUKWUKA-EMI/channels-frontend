import React, { MouseEventHandler } from "react";
import HeadlinesPicker from "./EditorHeadlinesPicker";

const EditorHeadlinesButton = (props: any) => {
  const onMouseDown: MouseEventHandler<HTMLDivElement> = (event) =>
    event.preventDefault();

  const onClick = () => props.onOverrideContent(HeadlinesPicker);

  return (
    <div className="inline-block " onMouseDown={onMouseDown}>
      <button
        onClick={onClick}
        className="bg-[#fbfbfb] text-[#888] text-lg border-none pt-[5px] h-[34px] w-[36px]"
      >
        H
      </button>
    </div>
  );
};

export default EditorHeadlinesButton;
