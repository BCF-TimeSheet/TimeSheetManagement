package com.example.timesheetserver.service;

import com.example.timesheetserver.domain.DaysDomain;
import com.example.timesheetserver.domain.TimeSheetDomain;
import com.example.timesheetserver.entity.Days;
import com.example.timesheetserver.entity.Template;
import com.example.timesheetserver.entity.TimeSheet;
import com.example.timesheetserver.repository.DaysRepository;
import com.example.timesheetserver.repository.TemplateRepository;
import com.example.timesheetserver.repository.TimeSheetRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class TimeSheetService {
    @Autowired
    private TimeSheetRepository timeSheetRepository;

    @Autowired
    private TemplateRepository templateRepository;

    public void saveTimeSheet(TimeSheet timeSheet){
        LocalDate date = LocalDate.parse(timeSheet.getWeekEnd());
        log.info("---In TimeSheetService/saveTimeSheet, currDate: "+date.getDayOfWeek());
        log.info("---In TimeSheetService/saveTimeSheet, timeSheet: "+timeSheet);
        timeSheetRepository.save(timeSheet);
    }
    public void saveTemplate(Template days){

        log.info("---In TimeSheetService/saveTemplate, days: "+days.toString());
        templateRepository.save(days);
    }

    public List<TimeSheet> getAllTimeSheet(){
        return timeSheetRepository.findAll();
    }
}
