// src/components/GitHubCommits.js
import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const GitHubCommits = () => {
  const [commitData, setCommitData] = useState([]);
  const username = import.meta.env.VITE_USER; // Replace with your GitHub username
  const token = import.meta.env.VITE_GITHUB; // Replace with your GitHub personal access token

  // Get the dates for the past month
  const getPastMonthDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dates.push(date.toLocaleDateString());
    }
    return dates;
  };

  const fetchAllCommits = async () => {
    try {
      // Fetch all repositories for the user
      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      const repos = reposResponse.data;
      const commitsPerDay = {};

      // Get the dates for the past month
      const pastMonthDates = getPastMonthDates();

      // Initialize commitsPerDay with zeros for each date in the past month
      pastMonthDates.forEach((date) => {
        commitsPerDay[date] = 0;
      });

      // Fetch commits for each repository
      for (const repo of repos) {
        let page = 1;
        let commits;
        do {
          const commitsResponse = await axios.get(
            `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`,
            {
              params: {
                since: new Date(
                  new Date().setMonth(new Date().getMonth() - 1)
                ).toISOString(),
                per_page: 100,
                page,
              },
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );
          commits = commitsResponse.data;
          for (const commit of commits) {
            const date = new Date(
              commit.commit.author.date
            ).toLocaleDateString();
            if (pastMonthDates.includes(date)) {
              commitsPerDay[date] = (commitsPerDay[date] || 0) + 1;
            }
          }
          page++;
        } while (commits.length === 100); // Continue until there are no more commits
      }

      // Transform the processed data into an array suitable for the chart
      const chartData = pastMonthDates.map((date) => ({
        date,
        commits: commitsPerDay[date] || 0,
      }));

      setCommitData(chartData);
    } catch (error) {
      console.error("Error fetching repos or commits:", error);
    }
  };

  useEffect(() => {
    fetchAllCommits();
    const interval = setInterval(fetchAllCommits, 60000); // Fetch every minute
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="flex-col items-center hidden sm:flex">
        <h2 className="text-center text-2xl font-bold my-6 dark:text-white">
          GitHub Commits Over the Past Month
        </h2>
        <h1 className="text-xs mt-5 text-red-500 font-sans text-center">
          PLEASE WAIT FOR THE GRAPH TO LOAD
        </h1>
        <LineChart
          width={700}
          height={300}
          data={commitData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          className="shadow-lg rounded-lg"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="commits" stroke="#FF5733" />
        </LineChart>
      </div>
      <div className="flex-col items-center sm:hidden">
        <h2 className="text-center text-2xl font-bold my-6 dark:text-white">
          GitHub Commits Over the Past Month
        </h2>
        <LineChart
          width={400}
          height={300}
          data={commitData}
          margin={{ top: 10, right: 20, left: 5, bottom: 5 }}
          className="shadow-lg rounded-lg"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="commits" stroke="#FF5733" />
        </LineChart>
      </div>
    </>
  );
};

export default GitHubCommits;
