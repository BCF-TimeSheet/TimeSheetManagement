package com.example.timesheetserver.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Document(collection="days")
public class Days {
    @Id
    private String id;
    private String day;
    private String date;
    private String startTime;
    private String endTime;
    private boolean isFloating;
    private boolean isHoliday;
    private boolean isVacation;
}
