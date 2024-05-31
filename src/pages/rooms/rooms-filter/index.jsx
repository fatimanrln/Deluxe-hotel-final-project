import dayjs, { Dayjs } from "dayjs";
import {
  Select,
  Slider,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useForm } from "./hook";
import { FlexBox, Text } from "../../../components/UI";
import { ROOMS_TYPES } from "../../../constants/rooms";

const ROOMS_TYPES_OPTIONS = Object.values(ROOMS_TYPES).map((type) => ({
  label: type,
  value: type,
}));
const PERSONS_OPTIONS = Array.from(Array(6)).map((_, index) => ({
  label: `${index + 1} persons`,
  value: index + 1,
}));

const RoomsFilter = () => {
  const [filterState, setFilterState, { clearFormState }] = useForm();

  return (
    <FlexBox
      column
      gap={24}
      p={20}
      mt={-8}
      style={{
        border: "1px solid var(--gray-200)",
        borderRadius: 5,
        background: "white",
      }}
      height="max-content"
    >
      <Text size={18} color="black">
        Advanced Search
      </Text>
      <DatePicker
        label="Check In Date"
        value={
          filterState.checkInDate ? dayjs(filterState.checkInDate) : undefined
        }
        onChange={(newValue) =>
          setFilterState("checkInDate", newValue, { isDate: true })
        }
      />
      <DatePicker
        label="Check Out Date"
        value={
          filterState.checkOutDate ? dayjs(filterState.checkOutDate) : undefined
        }
        onChange={(newValue) =>
          setFilterState("checkOutDate", newValue, { isDate: true })
        }
      />
      <FormControl>
        <InputLabel id="room-type-label">Room Type</InputLabel>
        <Select
          labelId="room-type-label"
          value={filterState.roomType || ""}
          onChange={(e) => setFilterState("roomType", e.target.value)}
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
          value={filterState.persons || ""}
          onChange={(e) => setFilterState("persons", e.target.value)}
        >
          {PERSONS_OPTIONS.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Text onClick={clearFormState} style={{ marginLeft: "auto" }}>
        clear all
      </Text>
    </FlexBox>
  );
};

export default RoomsFilter;
