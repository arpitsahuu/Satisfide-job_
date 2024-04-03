import React, { useEffect, useState } from "react";

import { jsPDF } from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { setResumeaction } from "@/redux/actions/resumeAction";
import { currentStudent } from "@/redux/actions/studentAction";
import html2canvas from 'html2canvas';

function Resume() {
    // const downloadResume = () => {
    //     const doc = new jsPDF();
        
    //     // Get the element you want to export to PDF
    //     const resumeContainer = document.getElementById('resume');
    
    //     // Generate PDF from HTML
    //     doc.html(resumeContainer, {
    //       callback: function (pdf) {
    //         // Save the PDF
    //         pdf.save('resume.pdf');
    //       },
    //       x: 10,
    //       y: 10,
    //     });
    //   };

    const downloadPDF = () => {
        // Select the element you want to convert to PDF
        const element = document.getElementById('resume');
    
        // Use html2canvas to take a screenshot of the element
        html2canvas(element).then((canvas) => {
          // Initialize jsPDF
          const pdf = new jsPDF({
            orientation: 'p',
            unit: 'px',
            format: [canvas.width, canvas.height],
          });
    
          // Add the canvas to the PDF
          const imgData = canvas.toDataURL('image/png');
          pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    
          // Download the PDF
          pdf.save('resume.pdf');
        });
      };


      const downloadPdfDocument = (rootElementId) => {
        const input = document.getElementById(rootElementId);
        html2canvas(input)
          .then((canvas) => {
              const imgData = canvas.toDataURL('image/png');
              const pdf = new jsPDF();
              pdf.addImage(imgData, 'JPEG', 0, 0);
              pdf.save("download.pdf");
          })
      }
      
  const dispatch = useDispatch();
  const { student, error, loading } = useSelector((state) => state.student);
  const { resume } = useSelector((state) => state.Resume);

  const [studentProfile, setStudentProfile] = useState({
    avatar: { fileId: "", url: "" },
    firstname: "",
    lastname: "",
    email: "apj@example.com",
    internships: [],
    jobs: [],
    education: [],
    skills: [],
    languages: [],
    contact: "",
    city: "example",
    gender: "male",
    avatar: "",
  });

  useEffect(() => {
    if (student) {
      setStudentProfile((prevStudentProfile) => ({
        ...prevStudentProfile,
        ...student,
      }));
      dispatch(setResumeaction(student));
      console.log(studentProfile);
    }
  }, [student]);
  useEffect(() => {
    dispatch(currentStudent());
  }, []);
  console.log(student);

  return (
    <div className="bg-gray-100 p-5 lg:p-10  ">
      <div
        className="max-w-4xl mx-auto bg-white shadow-lg px-2 py-5 text-2xl sm:text-4xl font-bold print:body print:margin-0 print:padding-0 print:box-border print:size-A4 print:portrait screen:@page-size-210mm-297mm screen:margin-0 screen:box-border screen:w-210mm screen:h-297mm "
        id="resume"
      >
        <div className="mb-3">
          <div className="flex justify-center">
            <h1 className=" uppercase">
              {student?.firstname} {student?.lastname}
            </h1>
          </div>
          <div className=' font-medium text-[10px] sm:text-sm mt-2 sm:mt-3 " '>
            <ul className="flex justify-center gap-10 list-disc ">
                {student?.contact != "" && <li>+91-6267646211</li> }
              <li>{student?.email}</li>
            </ul>
          </div>
        </div>
        {/* Personal Information */}
        <h2 className="text-base">Education</h2>
        {resume?.education != 0 && (
          <div className=" border-t-2 border-slate-400 py-2">
            {resume?.education?.map((education) => (
              <div>
                <div className="flex  justify-between gap-10 mb-">
                  <div>
                    {education.school &&
                    <h2 className=" font-medium text-sm">
                      {education.school} | {education.location}
                    </h2> 
                    }
                    {education.college &&
                    <h2 className=" font-medium text-sm">
                      {education.college} | {education.location}
                    </h2> 
                    }
                  </div>
                  <div>
                    <h6 className="font-medium text-sm text-slate-700 ">
                      {education.endyear}
                    </h6>
                  </div>
                </div>
                <div className="flex  mb-1 ">
                  {education.class &&
                  <h3 className=" font-medium text-sm text-slate-700 ">
                    {education.class} | {education.Stream}
                  </h3>
                  } 
                  {education.degree &&
                  <h3 className=" font-medium text-sm text-slate-700 ">
                   {education.degree }  | { education.Stream }
                  </h3>
                  } 
                
                </div>
              </div>
            ))}
          </div>
        )}
        <h2 className="text-base">Experience</h2>
        {resume?.jobs?.length != 0 && (
          <div className=" border-t-2 border-slate-400 py-2">
            {resume?.jobs.map((job) => (
              <div>
                <div className="flex  justify-between gap-10 mb-">
                  <div>
                    <h2 className=" font-medium text-sm">
                      {job.profile} | {job.location}
                    </h2> 

                  </div>
                  <div>
                    <h6 className="font-medium text-sm text-slate-700 ">
                      {job.enddate}
                    </h6>
                  </div>
                </div>
                <div className="flex  mb-1 ">
                  <h3 className=" font-medium text-sm text-slate-700 ">
                   {job.organization } 
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
        {resume?.internships?.length != 0 && <h2 className="text-base">Interships</h2>}
        
        {resume?.internships?.length != 0 && (
          <div className=" border-t-2 border-slate-400 py-2">
            {resume?.internships?.map((intership) => (
              <div>
                <div className="flex  justify-between gap-10 mb-">
                  <div>
                    <h2 className=" font-medium text-sm">
                      {intership.profile} | {intership.location}
                    </h2> 

                  </div>
                  <div>
                    <h6 className="font-medium text-sm text-slate-700 ">
                      {intership.enddate}
                    </h6>
                  </div>
                </div>
                <div className="flex  mb-1 ">
                  <h3 className=" font-medium text-sm text-slate-700 ">
                   {intership.organization } 
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
        { resume?.projects?.length != 0 && <h2 className="text-base">Projects</h2>}
        {resume?.projects.length != 0 && (
          <div className=" border-t-2 border-slate-400 py-2">
            {resume?.projects.map((project) => (
              <div>
                <div className="flex  justify-between gap-10 mb-">
                  <div>
                    <h2 className=" font-medium text-sm">
                      {project.title} 
                    </h2> 

                  </div>
                </div>
                <div className="flex  mb-1 ">
                  <h3 className=" font-medium text-sm text-slate-700 ">
                   <a className=" text-sky-500 " href={project.url}> Project Link</a>
                  </h3>
                </div>
                <ul>
                    <li className=" text-xs text-slate-700 ">{project.description}</li>
                </ul>
              </div>
            ))}
          </div>
        )}
        
        { resume?.skills?.length != 0 && <h2 className="text-base">Skills</h2>}
        {resume?.skills.length != 0 && (
          <div className=" border-t-2 border-slate-400 py-2">
            {resume?.skills.map((skill) => (
              <div className="px-3">
                <ul className=" flex gap-10 flex-wrap list-disc ">
                    <li className=" text-xs">{skill.skill}</li>
                </ul>
              </div>
            ))}
          </div>
        )}
        
      </div>
      <div className="w-full flex justify-center items-center">
      <button
        onClick={() => downloadPDF()}
        className="mt-5 p-3 m-auto bg-sky-500 text-white rounded"
      >
        Download Resume
      </button>

      </div>
      {/* Download Button */}
    </div>
  );
}

export default Resume;