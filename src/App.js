import InfoCard from "./Components/InfoCard";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import FilterAndSort from "./Components/FilterAndSort";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [isDataFiltered, setIsDataFiltered] = useState(false);
  const [filterParam, setFilterParam] = useState("default");
  const [sortParam, setSortParam] = useState("default");

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setDataFetched(true);
      })
      .catch((err) => {
        console.log(`ERROR ${err}`);
        setDataFetched(false);
      });
  }, []);

  return (
    <>
      <FilterAndSort
        filterParam={filterParam}
        setFilterParam={setFilterParam}
        sortParam={sortParam}
        setSortParam={setSortParam}
        projects={projects}
        setIsDataFiltered={setIsDataFiltered}
      />
      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "grid",
            md: "grid",
            lg: "grid",
            xl: "grid",
          },
          gridTemplateColumns: {
            sm: "repeat(auto-fit, minmax(275px, 1fr))",
            md: "repeat(auto-fit, minmax(280px, 1fr))",
            lg: "repeat(auto-fit, minmax(278px, 1fr))",
            xl: "repeat(auto-fit, minmax(356px, 1fr))",
          },
          justifyContent: { xs: "center", sm: "center", md: "center" },
          alignItems: { xs: "center", sm: "center", md: "center" },
          flexWrap: { xs: "wrap", sm: "wrap" },
          flexDirection: { xs: "column", sm: "column" },
          gridColumnGap: "2rem",
          gridRowGap: "2rem",
          justifyItems: { xs: "center", sm: "start", md: "start", lg: "start" },
          mt: "3rem",
          mb: "2rem",
        }}
      >
        {dataFetched ? (
          projects
            .filter((project) => project.status === filterParam)
            .map((info) => <InfoCard info={info} key={info.id} />)
        ) : (
          <>
            {[...Array(10)].map((index) => (
              <Skeleton
                variant="rect"
                width="20vw"
                height="30vh"
                animation="wave"
                key={index}
              />
            ))}
          </>
        )}

        {isDataFiltered
          ? ""
          : projects.map((info) => <InfoCard info={info} key={info.id} />)}
      </Box>
    </>
  );
};

export default App;
