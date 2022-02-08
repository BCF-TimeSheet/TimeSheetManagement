package com.example.timesheetserver.domain;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Data
@Builder
@Setter
@Getter
public class TimeSheetDomain implements Serializable {
    private Integer userId;
    private String weekEnd;
    private List<DaysDomain> days;
    private Integer totalBillingHours;
    private String approvalStatus;
    private Integer totalCompensationHours;
    private Integer floatingDayLeft;
    private Integer vacationDayLeft;
}