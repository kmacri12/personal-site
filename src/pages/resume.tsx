import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./resume.css";
import { SizeMe } from "react-sizeme";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <SizeMe>
          {({ size }) => (
            <Document file="/KyleMacri_Resume.pdf" className="center">
              <Page pageNumber={1} width={size.width ? size.width : 1} />
            </Document>
          )}
        </SizeMe>
      </div>
    );
  }
}
