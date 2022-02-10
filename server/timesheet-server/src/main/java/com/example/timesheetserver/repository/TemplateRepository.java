package com.example.timesheetserver.repository;

import com.example.timesheetserver.entity.Template;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TemplateRepository extends MongoRepository<Template, String> {
}
