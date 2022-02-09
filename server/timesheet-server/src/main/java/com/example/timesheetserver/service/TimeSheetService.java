package com.example.timesheetserver.service;

import com.example.timesheetserver.domain.DaysDomain;
import com.example.timesheetserver.domain.TimeSheetDomain;
import com.example.timesheetserver.entity.Days;
import com.example.timesheetserver.entity.TimeSheet;
import com.example.timesheetserver.repository.TimeSheetRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Slf4j
public class TimeSheetService {
    @Autowired
    private TimeSheetRepository timeSheetRepository;

    public void saveTimeSheet(TimeSheet timeSheet){
        LocalDate date = LocalDate.parse(timeSheet.getWeekEnd());
        log.info("---In TimeSheetService/saveTimeSheet, currDate: "+date.getDayOfWeek());
        timeSheetRepository.save(timeSheet);
    }

    public List<TimeSheet> getAllTimeSheet(){
        return timeSheetRepository.findAll();
    }

    public List<TimeSheet> getAllTimeSheet(int userId){
        return timeSheetRepository.findAllByUserId(userId);
    }

    public TimeSheet findByWeekEndAndUserId(String weekEnd, int userId) {
        return this.timeSheetRepository.findByWeekEndAndUserId(weekEnd,userId);
    }

     // todo update time sheet
    public ResponseEntity<Boolean> updateTimesheet(TimeSheet ts){
        try{
            System.out.println(ts.toString());

            int userId = ts.getUserId();
            String weekEnd = ts.getWeekEnd();
            TimeSheet timesheet = timeSheetRepository.findByWeekEndAndUserId(weekEnd,userId);

            timesheet.setTotalBillingHours(ts.getTotalBillingHours());

            List<Days> days = timesheet.getDays();

            // todo update time sheet
            for(int i = 0; i < days.size(); i++) {
                if(timesheet.getDays().get(i).getDay().equals("Sunday")) {
                    days.get(i).setStartTime(ts.getDays().get(i).getStartTime());
                    days.get(i).setEndTime(ts.getDays().get(i).getEndTime());
                    days.get(i).setFloating(ts.getDays().get(i).isFloating());
                    days.get(i).setHoliday(ts.getDays().get(i).isHoliday());
                    days.get(i).setVacation(ts.getDays().get(i).isVacation());
                }
                else if(timesheet.getDays().get(i).getDay().equals("Monday")) {
                    days.get(i).setStartTime(ts.getDays().get(i).getStartTime());
                    days.get(i).setEndTime(ts.getDays().get(i).getEndTime());
                    days.get(i).setFloating(ts.getDays().get(i).isFloating());
                    days.get(i).setHoliday(ts.getDays().get(i).isHoliday());
                    days.get(i).setVacation(ts.getDays().get(i).isVacation());
                }
                else if(timesheet.getDays().get(i).getDay().equals("Tuesday")) {
                    days.get(i).setStartTime(ts.getDays().get(i).getStartTime());
                    days.get(i).setEndTime(ts.getDays().get(i).getEndTime());
                    days.get(i).setFloating(ts.getDays().get(i).isFloating());
                    days.get(i).setHoliday(ts.getDays().get(i).isHoliday());
                    days.get(i).setVacation(ts.getDays().get(i).isVacation());
                }
                else if(timesheet.getDays().get(i).getDay().equals("Wednesday")) {
                    days.get(i).setStartTime(ts.getDays().get(i).getStartTime());
                    days.get(i).setEndTime(ts.getDays().get(i).getEndTime());
                    days.get(i).setFloating(ts.getDays().get(i).isFloating());
                    days.get(i).setHoliday(ts.getDays().get(i).isHoliday());
                    days.get(i).setVacation(ts.getDays().get(i).isVacation());
                }
                else if(timesheet.getDays().get(i).getDay().equals("Thursday")) {
                    days.get(i).setStartTime(ts.getDays().get(i).getStartTime());
                    days.get(i).setEndTime(ts.getDays().get(i).getEndTime());
                    days.get(i).setFloating(ts.getDays().get(i).isFloating());
                    days.get(i).setHoliday(ts.getDays().get(i).isHoliday());
                    days.get(i).setVacation(ts.getDays().get(i).isVacation());
                }
                else if(timesheet.getDays().get(i).getDay().equals("Friday")) {
                    days.get(i).setStartTime(ts.getDays().get(i).getStartTime());
                    days.get(i).setEndTime(ts.getDays().get(i).getEndTime());
                    days.get(i).setFloating(ts.getDays().get(i).isFloating());
                    days.get(i).setHoliday(ts.getDays().get(i).isHoliday());
                    days.get(i).setVacation(ts.getDays().get(i).isVacation());
                }
                else if(timesheet.getDays().get(i).getDay().equals("Saturday")) {
                    days.get(i).setStartTime(ts.getDays().get(i).getStartTime());
                    days.get(i).setEndTime(ts.getDays().get(i).getEndTime());
                    days.get(i).setFloating(ts.getDays().get(i).isFloating());
                    days.get(i).setHoliday(ts.getDays().get(i).isHoliday());
                    days.get(i).setVacation(ts.getDays().get(i).isVacation());
                }
            }
            timeSheetRepository.save(timesheet);

            return ResponseEntity.status(HttpStatus.CREATED).body(Boolean.TRUE);
        }
        catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.CREATED).body(Boolean.FALSE);
        }
    }
}
