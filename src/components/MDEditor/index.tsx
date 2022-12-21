import MDEditorRoot from "components/MDEditor/MDEditorRoot";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  [key: string]: any;
}

function MDEditor(props: Props): JSX.Element {

  return (
    <MDEditorRoot ownerState={true}>
      {(<ReactQuill theme="snow" {...props} />) as any}
    </MDEditorRoot>
  );
}

export default MDEditor;
