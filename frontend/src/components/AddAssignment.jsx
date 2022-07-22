import { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core";

const AddAssignmentContainer = styled.div`
  width: 90%;
  margin-top: 1rem;
  background-color: #76ba99;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddAssignmentWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  margin: 1.2rem 0;
`;

const AddAssignmentHeading = styled.h2`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

const AddAssignmentContent = styled.div`
  max-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const AddAssignmentForm = styled.form`
  flex: 2;
`;

const AddAssignmentItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddAssignmentLabel = styled.label`
  color: #fff;
  font-family: "Poppins", sans-serif;
  margin-top: 0.5rem;
`;

const AddAssignmentTextArea = styled.textarea``;

const AddAssignmentInput = styled.input`
  margin-top: 0.5rem;
  height: 28px;
  outline: none;
`;

const NewAssignmentImage = styled.div`
  flex: 1;
  display: flex;

  background-color: grey;
  margin-top: 1.5rem;
  height: 100px;
`;

const AddAssignmentButton = styled.button`
  padding: 7px 15px;
  border-radius: 20px;
  background-color: #f9f9f9;
  border: none;
  margin-top: 1rem;
  cursor: pointer;
`;

function AddAssignment() {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const user = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [file, setFile] = useState(null);

  // for submit event
  const [view, setView] = useState(null);

  // on Change event
  const handleFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      // this piece of code converts our file to base64 so that we can use it as our source url
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = (e) => {
        setFile(e.target.result);
      };
    } else {
      setFile(null);
    }
  };

  // on form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      setView(file);
    } else {
      setView(null);
    }
  };

  return (
    <AddAssignmentContainer>
      <AddAssignmentWrapper>
        <AddAssignmentHeading>Add new assignment</AddAssignmentHeading>
        <AddAssignmentContent>
          <AddAssignmentForm onSubmit={handleSubmit}>
            <AddAssignmentItem>
              <AddAssignmentLabel>Title</AddAssignmentLabel>
              <AddAssignmentInput
                type="text"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </AddAssignmentItem>
            <AddAssignmentItem>
              <AddAssignmentLabel>Description</AddAssignmentLabel>
              <AddAssignmentTextArea
                rows="5"
                required
                onChange={(e) => setDescription(e.target.value)}
              ></AddAssignmentTextArea>
            </AddAssignmentItem>
            <AddAssignmentItem>
              <AddAssignmentLabel>Deadline</AddAssignmentLabel>
              <AddAssignmentInput
                type="date"
                required
                onChange={(e) => setDeadline(e.target.value)}
              />
            </AddAssignmentItem>
            <AddAssignmentItem>
              <AddAssignmentLabel>Add image or pdf</AddAssignmentLabel>
              <AddAssignmentInput
                type="file"
                required
                onChange={handleFileChange}
              />
            </AddAssignmentItem>
            <AddAssignmentButton type="submit">
              Add assignment
            </AddAssignmentButton>
          </AddAssignmentForm>
          <NewAssignmentImage>
            {view && (
              
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                  
                  <Viewer
                    fileUrl={view}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                  
                 
                </Worker>
              
            )}
          </NewAssignmentImage>
        </AddAssignmentContent>
      </AddAssignmentWrapper>
    </AddAssignmentContainer>
  );
}

export default AddAssignment;
