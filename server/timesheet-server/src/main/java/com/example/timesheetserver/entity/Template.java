package com.example.timesheetserver.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Document(collection="template")
public class Template {
    @Id
    private String id;
    private List<Days> days;
}
