package com.example.compositeserver.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class EmployeeDomain {

    private String cellPhone;

    private String email;

    private String addressLine1;

    private String addressLine2;

    private String city;

    private String state;

    private String zipCode;

    private String emergencyFirstName;

    private String emergencyLastName;

    private String emergencyCellPhone;

}
