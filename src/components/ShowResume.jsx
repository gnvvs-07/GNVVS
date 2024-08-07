const ShowResume = () => {
  // The URL of your resume PDF file
  const resumeUrl = import.meta.env.VITE_RESUME;
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
