import Button from "../ui/Button";
import Message from "../ui/Message";
import DocumentUploadForm from "../ui/DocumentUploadForm";

function Documents() {
  return (
    <>
      <h1>Documents</h1>
      {/* Conditionally rendered when the documents array of objects is empty */}
      {/* <Message>No documents uploaded</Message> */}
      <Button>Add new document</Button>
      <DocumentUploadForm />
    </>
  );
}

export default Documents;
