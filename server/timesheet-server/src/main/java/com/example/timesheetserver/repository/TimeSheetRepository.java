package com.example.timesheetserver.repository;

import com.example.timesheetserver.entity.TimeSheet;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TimeSheetRepository extends MongoRepository<TimeSheet, String> {
    List<TimeSheet> findAllByUserId(int userId);

    TimeSheet findByWeekEndAndUserId(String weekEnd, int userId);
}
