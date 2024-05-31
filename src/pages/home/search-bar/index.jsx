import dayjs from "dayjs";
import { Component } from "react";
import { createSearchParams } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";

import { ROUTES } from "../../../constants/routes";
import { ROOMS_TYPES } from "../../../constants/rooms";
import { Container, FlexBox, Grid } from "../../../components/UI";

const ROOMS_TYPES_OPTIONS = Object.values(ROOMS_TYPES).map((type) => ({
  label: type,
  value: type,
}));
const PERSONS_OPTIONS = Array.from(Array(6)).map((_, index) => ({
  label: `${index + 1} persons`,
  value: index + 1,
}));

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchState: {},
    };
  }

  setSearchState = (name, newValue, { isDate = false } = {}) => {
    this.setState({
      searchState: {
        ...this.state.searchState,
        [name]: isDate ? dayjs(newValue).format("DD/MM/YYYY") : newValue,
      },
    });
  };

  handleSearch = () => {
    if (typeof this.props.navigate === "function") {
      this.props.navigate({
        pathname: "/" + ROUTES.ROOMS,
        search: createSearchParams(this.state.searchState)?.toString(),
      });
    }
  };

  render() {
    return (
      <Container>
        <Grid
          columns={5}
          gap={20}
          style={{ padding: 20, borderRadius: 5, background: "white" }}
        >
          <DatePicker
            label="Check In Date"
            value={
              this.state.searchState.checkInDate
                ? dayjs(this.state.searchState.checkInDate)
                : undefined
            }
            onChange={(newValue) =>
              this.setSearchState("checkInDate", newValue, { isDate: true })
            }
          />
          <DatePicker
            label="Check Out Date"
            value={
              this.state.searchState.checkOutDate
                ? dayjs(this.state.searchState.checkOutDate)
                : undefined
            }
            onChange={(newValue) =>
              this.setSearchState("checkOutDate", newValue, { isDate: true })
            }
          />
          <FormControl>
            <InputLabel id="room-type-label">Room Type</InputLabel>
            <Select
              labelId="room-type-label"
              value={this.state.searchState.roomType || ""}
              onChange={(e) => this.setSearchState("roomType", e.target.value)}
            >
              {ROOMS_TYPES_OPTIONS.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="persons-label">Persons</InputLabel>
            <Select
              labelId="persons-label"
              value={this.state.searchState.persons || ""}
              onChange={(e) => this.setSearchState("persons", e.target.value)}
            >
              {PERSONS_OPTIONS.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" onClick={this.handleSearch}>
            Search
          </Button>
        </Grid>
      </Container>
    );
  }
}

export default SearchBar;
