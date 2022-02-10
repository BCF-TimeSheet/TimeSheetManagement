package com.example.timesheetserver.controller;

import com.example.timesheetserver.entity.TimeSheet;
import com.example.timesheetserver.security.JwtUtil;
import com.example.timesheetserver.security.filter.JwtFilter;
import com.example.timesheetserver.service.TimeSheetService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
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

    @GetMapping("/timesheet/getUserTimeSheet")
    public ResponseEntity<?> getAllTimeSheet(HttpServletRequest request){
        log.info("---In TimeSheetController/timesheet/getTimeSheet" );
        String jwt = JwtUtil.resolveToken(request);
        log.info("---In TimeSheetController, jwt="+jwt);
        int userId = JwtUtil.getUserIdFromJwt(jwt);
        log.info("---In TimeSheetController, id="+userId);
        List<TimeSheet> timeSheetList = timeSheetService.getAllTimeSheet(userId);
        System.out.println(timeSheetList.size()+" size");
        return new ResponseEntity<List<TimeSheet>>(timeSheetList, HttpStatus.OK);
    }


    @GetMapping("/timesheet/getSingleTimeSheet")
    public ResponseEntity<TimeSheet> getSingleTimeSheet(HttpServletRequest request, String weekEnd){
        log.info("---In TimeSheetController/timesheet/getTimeSheet" );
        // todo testing purpose
        String jwt = JwtUtil.resolveToken(request);
        log.info("---In TimeSheetController, jwt="+jwt);
        int userId = JwtUtil.getUserIdFromJwt(jwt);
        log.info("---In TimeSheetController, id="+userId);
        TimeSheet timeSheet = timeSheetService.findByWeekEndAndUserId(weekEnd, userId);
        return new ResponseEntity<TimeSheet>(timeSheet, HttpStatus.OK);
    }

    @PostMapping("/timesheet/updateTimeSheet")
    public ResponseEntity<?> updateTimeSheet(@RequestBody TimeSheet ts, HttpServletRequest request) {
        log.info("---In TimeSheetController/timesheet/getTimeSheet" );
        log.info("request: "+request);
        log.info("time sheet id: "+ts.getId());
        return timeSheetService.updateTimesheet(ts);
    }


}
