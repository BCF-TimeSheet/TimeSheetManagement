package com.example.employeeserver.entity;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "UserProfile")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserProfile {

  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  private Integer userProfileId;

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
