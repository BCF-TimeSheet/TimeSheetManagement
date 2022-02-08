package com.example.timesheetserver.repository;

import com.example.timesheetserver.entity.TimeSheet;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TimeSheetRepository extends MongoRepository<TimeSheet, String> {
}
