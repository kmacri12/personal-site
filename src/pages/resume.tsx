import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./resume.css";
import { SizeMe } from "react-sizeme";
import { Link } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {
  render() {
    const pdf = "/KyleMacri_Resume.pdf";
    const docx = "/KyleMacri_Resume.docx";
    return (
      <div className="resume">
        <Link className="download-link" to={pdf} target="_blank" download>
          Download .pdf
        </Link>
        <Link className="download-link" to={docx} target="_blank" download>
          Download .docx
        </Link>
        <SizeMe>
          {({ size }) => (
            <Document file={pdf} className="center">
              <Page pageNumber={1} width={size.width ? size.width : 1} />
            </Document>
          )}
        </SizeMe>
      </div>
    );
  }
}
