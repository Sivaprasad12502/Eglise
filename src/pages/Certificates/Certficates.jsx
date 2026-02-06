import React, { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import Back from "../../components/back/Back";
import { createPortal } from "react-dom";
import { FiShare } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
const certificates = {
  marriage: [
    {
      id: "marriage-1",
      title: "Marriage Certificate",
      file: "./download.jpeg",
      image:
        "https://courtmarriage.co.in/wp-content/uploads/2017/07/marriage-certificates.jpg",
      issueDate: "20 August 2024",
      description: "This is to certify that the marriage was solemnized...",
      fields: [
        { label: "Certificate Number", value: "MC-2024-0156" },
        { label: "Groom Name", value: "Joseph Mathew" },
        { label: "Bride Name", value: "Anita Thomas" },
      ],
    },
    {
      id: "marriage-2",
      title: "Marriage Certificate",
      file: "./download.jpeg",
      image:
        "https://courtmarriage.co.in/wp-content/uploads/2017/07/marriage-certificates.jpg",
      issueDate: "22 September 2024",
      description: "This is to certify that the marriage was solemnized...",
      fields: [
        { label: "Certificate Number", value: "MC-2024-0182" },
        { label: "Groom Name", value: "David Thomas" },
        { label: "Bride Name", value: "Riya Mathew" },
      ],
    },
    {
      id: "marriage-3",
      title: "Marriage Certificate",
      file: "./download.jpeg",
      image:
        "https://courtmarriage.co.in/wp-content/uploads/2017/07/marriage-certificates.jpg",
      issueDate: "22 September 2024",
      description: "This is to certify that the marriage was solemnized...",
      fields: [
        { label: "Certificate Number", value: "MC-2024-0182" },
        { label: "Groom Name", value: "David Thomas" },
        { label: "Bride Name", value: "Riya Mathew" },
      ],
    },
    {
      id: "marriage-4",
      title: "Marriage Certificate",
      file: "./download.jpeg",
      image:
        "https://courtmarriage.co.in/wp-content/uploads/2017/07/marriage-certificates.jpg",
      issueDate: "22 September 2024",
      description: "This is to certify that the marriage was solemnized...",
      fields: [
        { label: "Certificate Number", value: "MC-2024-0182" },
        { label: "Groom Name", value: "David Thomas" },
        { label: "Bride Name", value: "Riya Mathew" },
      ],
    },
    {
      id: "marriage-5",
      title: "Marriage Certificate",
      file: "./download.jpeg",
      image:
        "https://courtmarriage.co.in/wp-content/uploads/2017/07/marriage-certificates.jpg",
      issueDate: "22 September 2024",
      description: "This is to certify that the marriage was solemnized...",
      fields: [
        { label: "Certificate Number", value: "MC-2024-0182" },
        { label: "Groom Name", value: "David Thomas" },
        { label: "Bride Name", value: "Riya Mathew" },
      ],
    },
  ],

  baptism: [
    {
      id: "baptism-1",
      title: "Baptism Certificate",
      file: "./baptism.jpg",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMs4WbHs7RMn99Q5od3Rf67wpZce8uHlrpQ&s",
      issueDate: "15 June 2022",
      description:
        "This is to certify that the baptism was duly administered...",
      fields: [
        { label: "Certificate Number", value: "BC-2022-0421" },
        { label: "Baptized Name", value: "Maria Elizabeth" },
      ],
    },
    {
      id: "baptism-2",
      title: "Baptism Certificate",
      file: "./baptism.jpg",
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMs4WbHs7RMn99Q5od3Rf67wpZce8uHlrpQ&s",
      issueDate: "18 July 2023",
      description:
        "This is to certify that the baptism was duly administered...",
      fields: [
        { label: "Certificate Number", value: "BC-2023-0514" },
        { label: "Baptized Name", value: "John Samuel" },
      ],
    },
    {
      id: "baptism-3",
      title: "Baptism Certificate",
      file: "./baptism.jpg",
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMs4WbHs7RMn99Q5od3Rf67wpZce8uHlrpQ&s",
      issueDate: "18 July 2023",
      description:
        "This is to certify that the baptism was duly administered...",
      fields: [
        { label: "Certificate Number", value: "BC-2023-0514" },
        { label: "Baptized Name", value: "John Samuel" },
      ],
    },
    {
      id: "baptism-4",
      title: "Baptism Certificate",
      file: "./baptism.jpg",
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMs4WbHs7RMn99Q5od3Rf67wpZce8uHlrpQ&s",
      issueDate: "18 July 2023",
      description:
        "This is to certify that the baptism was duly administered...",
      fields: [
        { label: "Certificate Number", value: "BC-2023-0514" },
        { label: "Baptized Name", value: "John Samuel" },
      ],
    },
    {
      id: "baptism-5",
      title: "Baptism Certificate",
      file: "./baptism.jpg",
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMs4WbHs7RMn99Q5od3Rf67wpZce8uHlrpQ&s",
      issueDate: "18 July 2023",
      description:
        "This is to certify that the baptism was duly administered...",
      fields: [
        { label: "Certificate Number", value: "BC-2023-0514" },
        { label: "Baptized Name", value: "John Samuel" },
      ],
    },
  ],
};

const Certificates = () => {
  const [activeCert, setActiveCert] = useState("marriage");
  const [selectedCert, setSlecetedCert] = useState(null);
  const certList = certificates[activeCert];
  const downloadCertificate = (cert) => {
    if (!cert?.file) return;

    const link = document.createElement("a");
    link.href = cert.file;
    link.setAttribute(
      "download",
      `${cert.title.replace(/\s+/g, "_")}_${cert.id}.pdf`,
    );

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const downloadImage = (cert) => {
    if (!cert?.file) return;

    const link = document.createElement("a");
    link.href = cert.file;
    link.download = `${cert.title.replace(/\s+/g, "_")}_${cert.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const shareImage = async (cert) => {
    const imageUrl = `${cert.image}`;
    // const message = ` ${cert.title}:\n${imageUrl}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(imageUrl)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen px-4 py-5 flex justify-center">
      <div className="w-full max-w-5xl">
        <Back />
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#842a4c]">
            Church Certificates
          </h1>
          <p className="text-gray-600 mt-2">
            Official parish records issued by the church
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["marriage", "baptism"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveCert(type)}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeCert === type
                  ? "bg-[#842a4c] text-white"
                  : "bg-white text-[#842a4c]"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Certificate
            </button>
          ))}
        </div>

        {/* Certificates List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
          {certList.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              onClick={() => setSlecetedCert(cert)}
            >
              <h2 className="text-2xl font-semibold text-center text-[#842a4c] mb-6">
                {cert.title}
              </h2>

              <div className="grid grid-cols-1  gap-2 text-gray-700">
                {cert.fields.map((field, index) => (
                  <Field
                    key={`${cert.id}-${index}`}
                    label={field.label}
                    value={field.value}
                  />
                ))}
              </div>

              {/* <div
                className="mt-8 p-4 rounded-xl text-sm text-gray-600"
                style={{ backgroundColor: "rgba(132, 42, 76, 0.1)" }}
              >
                {cert.description}
              </div> */}

              <div className="flex justify-between items-end mt-10">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Date of Issue</p>
                  <p className="font-medium">{cert.issueDate}</p>

                  <div className="flex gap-2 justify-end  items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadImage(cert);
                      }}
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg
                      bg-[#842a4c] text-white text-sm font-medium
                      hover:bg-[#6f2340] transition"
                    >
                      <FaDownload />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        shareImage(cert);
                      }}
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg
                      bg-[#842a4c] text-white text-sm font-medium
                      hover:bg-[#6f2340] transition"
                    >
                      <FaShare />
                    </button>
                  </div>
                </div>

                {/* <div className="text-right">
                  <p className="font-semibold text-[#842a4c]">
                    Vicar / Parish Priest
                  </p>
                  <p className="text-sm text-gray-500">Authorized Signature</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSlecetedCert(null)}
          onDownload={() => downloadImage(selectedCert)}
          onShare={() => shareImage(selectedCert)}
        />
      )}
    </div>
  );
};

const Field = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

export default Certificates;
const CertificateModal = ({ cert, onClose, onDownload, onShare }) => {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      {/* Modal Box */}
      <div className="bg-white w-[95%] md:w-[80%] lg:w-[60%] h-[90vh] rounded-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-[#842a4c]">{cert.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* PDF Preview */}
        {/* <div className="flex-1 bg-gray-100">
          <iframe
            src={cert.file}
            title={cert.title}
            className="w-full h-full"
          />
        </div> */}
        <div className="flex items-center justify-center h-full">
          <img
            src={cert.file}
            alt={cert.title}
            className="w-1/2 h-1/2 lg:w-[500px] lg:h-[500px]"
          />
        </div>

        {/* Footer */}
        <div className="p-4 flex justify-end gap-3 border-t">
          <button
            onClick={onDownload}
            className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg
                      bg-[#842a4c] text-white text-sm font-medium
                      hover:bg-[#6f2340] transition"
          >
            <FaDownload />
            
          </button>
          <button
            onClick={onShare}
            className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg
                      bg-[#842a4c] text-white text-sm font-medium
                      hover:bg-[#6f2340] transition"
          >
            <FaShare />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};
