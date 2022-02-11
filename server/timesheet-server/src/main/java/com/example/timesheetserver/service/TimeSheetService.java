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

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
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

    public void generateTimeSheet(){
        //Get current date
        Date date = new Date();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String strDate = dateFormat.format(date);
        LocalDate lcDate = LocalDate.parse(strDate);

        System.out.println("Here!");

        Template template = templateRepository.findAll().get(0);
        List<Days> days = new ArrayList<>();

        for (int i=0; i < 7; i++){
            LocalDate currDate = lcDate.plusDays(i);
            Days day = Days.builder()
                    .day(currDate.getDayOfWeek().toString())
                    .date(currDate.toString())
                    .startTime(template.getDays().get(i).getStartTime())
                    .endTime(template.getDays().get(i).getEndTime())
                    .isHoliday(template.getDays().get(i).isHoliday())
                    .isFloating(template.getDays().get(i).isFloating())
                    .isVacation(template.getDays().get(i).isVacation())
                    .build();
            days.add(day);
        }
        TimeSheet newTimeSheet = TimeSheet.builder()
                .userId(1)
                .weekEnd(days.get(6).getDate())
                .days(days)
                .totalBillingHours(0)
                .submissionStatus("incomplete")
                .approvalStatus("unapproved")
                .totalCompensationHours(0)
                .floatingDayLeft(1)
                .vacationDayLeft(1).build();

        System.out.println("New timesheet:" + newTimeSheet.toString());
        timeSheetRepository.save(newTimeSheet);
    }
}
