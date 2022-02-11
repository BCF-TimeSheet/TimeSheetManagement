package com.example.compositeserver.config;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class SlackFeignClientConfiguration{


    private String slackOauthAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiaWQiOjEsImlhdCI6MTY0NDU0NDI3OCwiZXhwIjoxNjQ0NTc3NTc4fQ.zFoijlZeGPu-UWevj1ZcDpHYfJF0kt0LIWCUikWJjlE";

    @Bean
    public RequestInterceptor bearerTokenRequestInterceptor() {
        return new RequestInterceptor() {
            @Override
            public void apply(RequestTemplate template) {
                template.header("Authorization",
                        String.format("Bearer %s", slackOauthAccessToken));
            }
        };
    }
}
