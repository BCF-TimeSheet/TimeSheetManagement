package com.example.timesheetserver.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Document(collection="timesheet")
public class TimeSheet {
    @Id
    private String id;
    private Integer userId;
    private String weekEnd;
    private List<Days> days;
    private Integer totalBillingHours;
    private String submissionStatus;
    private String approvalStatus;
    private Integer totalCompensationHours;
    private Integer floatingDayLeft;
    private Integer vacationDayLeft;
}
