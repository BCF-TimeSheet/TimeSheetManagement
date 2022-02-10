package com.example.timesheetserver.repository;

import com.example.timesheetserver.entity.Days;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface DaysRepository extends MongoRepository<Days, String> {
}
