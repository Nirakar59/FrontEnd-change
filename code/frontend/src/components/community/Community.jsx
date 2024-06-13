import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  InputBase,
  Tab,
  Tabs,
  Typography,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Search as SearchIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
} from "@mui/icons-material";
import { useState } from "react";
// import AccordionUsage from "./readmore";

function Community() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <Box p={4}>
      <Typography variant="h5" fontWeight="bold" mb={4}>
        Activity Feed
      </Typography>
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar
          alt="User Avatar"
          src="https://placehold.co/40x40"
          sx={{ mr: 2 }}
        />
        <Box flexGrow={1}>
          <Typography variant="body1" fontWeight="bold">
            John
          </Typography>
          <InputBase
            placeholder="Write here or use @ to mention someone."
            fullWidth
            sx={{ p: 1, border: "1px solid #ccc", borderRadius: 1 }}
          />
        </Box>
      </Box>
      <Box display="flex" mb={4}>
        <Tabs aria-label="activity feed tabs">
          <Tab label="All Updates" />
          <Tab label="Likes" />
        </Tabs>
        <Box flexGrow={1} />
        <Box display="flex" alignItems="center" ml={2}>
          <InputBase
            placeholder="Search Feed..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ mr: 1 }} />
              </InputAdornment>
            }
            sx={{ p: 1, border: "1px solid #ccc", borderRadius: 1 }}
          />
        </Box>
      </Box>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar
              alt="User Avatar"
              src="https://placehold.co/40x40"
              sx={{ mr: 2 }}
            />
            <Box>
              <Typography variant="body1" fontWeight="bold">
                John
              </Typography>
              <Typography variant="body2" color="textSecondary">
                replied to the discussion{" "}
                <strong>Day Five of House Public Impeachment Hearings</strong> –
                11/21/2019 | Fiona Hill and Davi in the forum{" "}
                <strong>Politics News</strong> 2 weeks ago
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Even if you put this Ukraine business aside, all the crazy things
            this administration has actually done fly in the face of so many
            things which were “normal” for decades. Nothing like a good shakeup,
            but disregard for almost every professional in so many different
            disciplines of what used to be sane governance is beyond belief.
          </Typography>
          <Button color="primary" onClick={handleExpand}>
            {expanded ? "Close" : "Read more"}
          </Button>
          <Accordion expanded={expanded}>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
              onClick={handleExpand}
            />

            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ my: 2 }} />
          <Box display="flex" alignItems="center">
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <CommentIcon />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Comment
              </Typography>
            </IconButton>
            <IconButton color="inherit">
              <ShareIcon />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Share
              </Typography>
            </IconButton>
          </Box>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar
              alt="User Avatar"
              src="https://placehold.co/40x40"
              sx={{ mr: 2 }}
            />
            <Box>
              <Typography variant="body1" fontWeight="bold">
                Charles
              </Typography>
              <Typography variant="body2" color="textSecondary">
                started the discussion{" "}
                <strong>Day Five of House Public Impeachment Hearings</strong> –
                11/21/2019 | Fiona Hill and Davi in the forum{" "}
                <strong>Politics News</strong> 2 weeks ago
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="textSecondary" mb={2}>
            This morning the House Intelligence Committee will hold their
            seventh round of public hearings in preparation for possible
            Impeachment proceedings against President Donald Trump. Testifying
            today are Fiona Hill, former Russia adviser and David Holmes, an
            aide to top Ukraine diplomat Bill Taylor.
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box display="flex" alignItems="center">
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <CommentIcon />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Comment
              </Typography>
            </IconButton>
            <IconButton color="inherit">
              <ShareIcon />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Share
              </Typography>
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Community;
