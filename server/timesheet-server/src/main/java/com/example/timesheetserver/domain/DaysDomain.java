package com.example.timesheetserver.domain;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Data
@Builder
@Setter
@Getter
public class DaysDomain implements Serializable {
    private String day;
    private String date;
    private String startTime;
    private String endTime;
    private boolean isFloating;
    private boolean isHoliday;
    private boolean isVacation;
}
