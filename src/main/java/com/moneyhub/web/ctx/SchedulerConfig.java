package com.moneyhub.web.ctx;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;

@EnableScheduling
@Configuration
public class SchedulerConfig implements SchedulingConfigurer{
	private final Logger logger = LoggerFactory.getLogger(getClass());
	private final ThreadPoolTaskScheduler taskScheduler;
	
	public SchedulerConfig() {
		taskScheduler = new ThreadPoolTaskScheduler();
        taskScheduler.setErrorHandler(t -> logger.error("Exception in @Scheduled task. ", t));
        taskScheduler.setThreadNamePrefix("@scheduled-");

        taskScheduler.initialize();
	}
	
	@Override
	public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
		taskRegistrar.setScheduler(taskScheduler);
	}
}
