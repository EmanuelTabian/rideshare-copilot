import Button from "../ui/Button";
import DocumentUploadForm from "../ui/DocumentUploadForm";
import DocumentCard from "../ui/DocumentCard";

function Documents() {
  return (
    <>
      <h1>Documents</h1>
      {/* Conditionally rendered when the documents array of objects is empty */}
      {/* <Message>No documents uploaded</Message> */}
      <Button>Add new document</Button>
      <DocumentCard />
      <DocumentUploadForm />
    </>
  );
}

export default Documents;
