package com.tier1.supplier_portal.controller;

import java.util.concurrent.atomic.AtomicLong;

import com.tier1.supplier_portal.model.Sample;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/sample")
    public Sample greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Sample(counter.incrementAndGet(),
                            String.format(template, name));
    }
}
