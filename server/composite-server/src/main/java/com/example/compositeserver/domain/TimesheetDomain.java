package com.example.compositeserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@Builder
public class TimesheetDomain {

    private String weekEnd;
    private List<DaysDomain> days;
    private Integer totalBillingHours;
    private String approvalStatus;
    private Integer totalCompensationHours;
    private Integer floatingDayLeft;
    private Integer vacationDayLeft;
}
