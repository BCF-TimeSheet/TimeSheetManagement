package com.example.compositeserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class CompositeDomain {
    private String cellPhone;

    private String email;

    private String addressLine1;

    private List<TimesheetDomain> timesheet;
}
