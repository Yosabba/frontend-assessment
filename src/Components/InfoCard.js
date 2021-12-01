import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";

const InfoCard = ({ info }) => {
  const formatDate = (date) => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    return `${month}/${day}/${year}`;
  };

  const commentValue = (comments) => {
    if (comments === "" || comments === null) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <StyledInfoCard
      elevation={6}
      sx={{
        width: {
          xs: "70vw",
          sm: "42vw",
          md: "27vw",
          lg: "23vw",
          xl: "20vw",
        },
        height: {
          xs: "45vh",
          sm: "50vh",
          md: "50vh",
          lg: "45vh",
          xl: "40vh",
          maxHeight: "50vh",
        },
      }}
    >
      {info.starred && <StarIcon sx={{ color: "gold" }} />}

      <Typography variant="h4" sx={{ ml: "3rem", mt: "3rem" }}>
        {info.name}
      </Typography>

      <Typography variant="h5" sx={{ ml: "3rem" }}>{`Created ${formatDate(
        info.created_at
      )}`}</Typography>

      <Typography variant="h6" sx={{ ml: "3rem" }}>
        {info.status}
      </Typography>

      <Typography variant="subtitle2" sx={{ ml: "3rem" }}>
        {`${info.city}, ${info.state} ${info.postal_code} ,${info.country}`}
      </Typography>
      <br />

      {commentValue(info.comment) ? (
        <Typography variant="caption" sx={{ ml: "3rem" }}>
          {`Comment: ${info.comment}`}
        </Typography>
      ) : null}
    </StyledInfoCard>
  );
};

const StyledInfoCard = styled(Paper, {})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-wrap: break-word;
  padding-right: 0.6rem;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #f7f7f7;
    transform: scale(1.01);
  }
`;

export default InfoCard;
