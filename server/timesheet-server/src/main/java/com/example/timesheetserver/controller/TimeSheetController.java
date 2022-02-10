package com.example.timesheetserver.controller;

import com.example.timesheetserver.entity.Days;
import com.example.timesheetserver.entity.Template;
import com.example.timesheetserver.entity.TimeSheet;
import com.example.timesheetserver.security.JwtUtil;
import com.example.timesheetserver.security.filter.JwtFilter;
import com.example.timesheetserver.service.TimeSheetService;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.Time;
import java.util.List;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600,allowCredentials = "true")
public class TimeSheetController {

    @Autowired
    private TimeSheetService timeSheetService;

    @GetMapping("/")
    public String test(HttpServletRequest request){
//        String jwt = JwtUtil.resolveToken(request);
//        log.info("---In TimeSheetController, jwt="+jwt);
//        int userId = JwtUtil.getUserIdFromJwt(jwt);
//        log.info("---In TimeSheetController, id="+userId);
        return "timesheet";
    }

    @PostMapping("/createTimeSheet")
    public String createTimeSheet(@RequestBody TimeSheet timeSheet){
        log.info("---In TimeSheetController/createTimeSheet, timesheet" + timeSheet.toString());
        timeSheetService.saveTimeSheet(timeSheet);
        return "Saved timesheet";
    }

    @GetMapping("/timesheet/getTimeSheet")
    public ResponseEntity<?> getTimeSheet(){
        log.info("---In TimeSheetController/timesheet/getTimeSheet" );
        List<TimeSheet> timeSheetList = timeSheetService.getAllTimeSheet();
        return new ResponseEntity<List<TimeSheet>>(timeSheetList, HttpStatus.OK);
    }

    @PostMapping("/timesheet/updateTimeSheet")
    public String updateTimeSheet(@RequestBody TimeSheet timeSheet){
        log.info("---In TimeSheetController/updateTimeSheet, timesheet" + timeSheet.toString());
        timeSheetService.saveTimeSheet(timeSheet);
        return "Updated timesheet";
    }

    @PostMapping("/timesheet/saveTemplate")
    public String saveTemplate(@RequestBody Template days){
        log.info("---In TimeSheetController/updateTimeSheet, timesheet" + days.toString());
        timeSheetService.saveTemplate(days);
        return "Updated template";
    }
}
