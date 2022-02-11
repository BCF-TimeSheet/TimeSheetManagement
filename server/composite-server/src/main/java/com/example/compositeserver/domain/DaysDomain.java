package com.example.compositeserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class DaysDomain {
    private String day;
    private String date;
    private String startTime;
    private String endTime;
    private boolean isFloating;
    private boolean isHoliday;
    private boolean isVacation;
}
