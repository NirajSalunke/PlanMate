import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

  return (
    <div className="w-80 scale-75 bg-[#F0F7FF] text-[#666666] ml-auto mr-7  ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>

            <p className="text-black text-lg font-semibold px-5 pt-5" >My Progress</p>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          
            <DateCalendar
              className="mt-0"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
