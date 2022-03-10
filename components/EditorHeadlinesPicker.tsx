import React, { useCallback, useEffect } from "react";
import {
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
} from "@draft-js-plugins/buttons";

const EditorHeadlinesPicker = (props: any) => {
  const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];

  const onWindowClick = useCallback(() => {
    props.onOverrideContent(undefined);
  }, [props]);

  setTimeout(() => {
    window.addEventListener("click", onWindowClick);
  });

  useEffect(() => {
    window.removeEventListener("click", onWindowClick);
  }, [onWindowClick]);

  return (
    <div>
      {buttons.map((Button, i) => (
        <Button key={i} {...props} />
      ))}
    </div>
  );
};

export default EditorHeadlinesPicker;
