import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterCards = ({
  sortParam,
  setSortParam,
  filterParam,
  setFilterParam,
  setIsDataFiltered,
  projects,
}) => {
  const handleFilterChange = (e) => {
    setFilterParam(e.target.value);
    setIsDataFiltered(true);

    if (e.target.value === "default") {
      setIsDataFiltered(false);
    }
  };

  const handleSortChange = (e) => {
    setSortParam(e.target.value);

    if (e.target.value === "less-recent") {
      projects.sort((a, b) => {
        let firstDate = new Date(a.created_at),
          secondDate = new Date(b.created_at);
        return firstDate - secondDate;
      });
    } else if (e.target.value === "most-recent") {
      projects.sort((a, b) => {
        let firstDate = new Date(a.created_at),
          secondDate = new Date(b.created_at);
        return secondDate - firstDate;
      });
    } else if (e.target.value === true) {
      projects.sort((a, b) => {
        let firstStar = a.starred,
          secondStar = b.starred;

        return secondStar - firstStar;
      });
    } else {
      projects.sort((a, b) => {
        return a.id - b.id;
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        flexDirection: "row",
        mt: "2rem",
      }}
    >
      <FormControl>
        <InputLabel>Filter By</InputLabel>
        <Select
          value={filterParam}
          label="Filter"
          onChange={handleFilterChange}
          variant="standard"
          defaultValue="None"
          autoWidth
          sx={{
            width: {
              xs: "30vw",
              sm: "15vw",
              md: "10vw",
              lg: "10vw",
              xl: "10vw",
            },
          }}
        >
          <MenuItem value={"Upcoming"}>Upcoming</MenuItem>
          <MenuItem value={"In Progress"}>In Progress</MenuItem>
          <MenuItem value={"Completed"}>Completed</MenuItem>
          <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
          <MenuItem value={"default"}>Default</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortParam}
          onChange={handleSortChange}
          label="Sort By"
          defaultValue={"default"}
          variant="standard"
          autoWidth
          sx={{
            ml: "1rem",
            width: {
              xs: "30vw",
              sm: "15vw",
              md: "10vw",
              lg: "10vw",
              xl: "10vw",
            },
          }}
        >
          <MenuItem value={"most-recent"}>Most Recent</MenuItem>
          <MenuItem value={"less-recent"}>Less Recent</MenuItem>
          <MenuItem value={true}>Starred</MenuItem>
          <MenuItem value={"default"}>Default</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterCards;
