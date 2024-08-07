const ShowResume = () => {
  // The URL of your resume PDF file
  const resumeUrl = "https://drive.google.com/file/d/1E6GERw1qFtIgwwEZGiaEDsDWIQJiSenO/view?usp=drive_link";
  const handleClick = () => {
    window.open(resumeUrl, "_blank");
  };
  return (
    <div>
      <button onClick={handleClick}>Show Resume</button>
      <a href={resumeUrl} download="MyDocument.pdf">
      </a>
    </div>
  );
};

export default ShowResume;
