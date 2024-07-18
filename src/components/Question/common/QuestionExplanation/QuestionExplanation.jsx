import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const QuestionExplanation = ({ explanation, setExplanation }) => {
  const contentBlock = htmlToDraft(explanation || "");
  const contentState = contentBlock
    ? ContentState.createFromBlockArray(contentBlock.contentBlocks)
    : ContentState.createFromText("");
  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(contentState)
  );

  const onEditorStateChange = (state) => {
    setEditorState(state);
    const htmlContent = draftToHtml(convertToRaw(state.getCurrentContent()));
    setExplanation(htmlContent);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="explanation"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Explanation
      </label>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="bg-white"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "embedded",
            "emoji",
            "image",
            "remove",
            "history",
          ],
        }}
      />
    </div>
  );
};

export default QuestionExplanation;
