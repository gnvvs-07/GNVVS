import GitHubCalendar from "react-github-calendar";

const GitHub = () => {
  return (
    <>
      <div className="flex-col items-center hidden sm:flex p-4">
        <h2 className="text-center text-2xl font-bold my-6 dark:text-white">
          GitHub Contributions
        </h2>
        <GitHubCalendar
        username="gnvvs-07"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={5}
      />
      </div>
    </>
  );
};

export default GitHub;
