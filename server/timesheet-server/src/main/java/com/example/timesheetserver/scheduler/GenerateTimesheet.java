package com.example.timesheetserver.scheduler;

import com.example.timesheetserver.service.TimeSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
@EnableScheduling
public class GenerateTimesheet {
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    @Autowired
    private TimeSheetService timeSheetService;

//    @Scheduled(cron = "*/30 * * * * *") //This task run every 30s
    @Scheduled(cron="* * 9 * * SUN") //This task run every sunday at 9am
    public void reportCurrentTime()
    {
        System.out.println("Current time = " + dateFormat.format(new Date()));
        timeSheetService.generateTimeSheet();
    }
}
