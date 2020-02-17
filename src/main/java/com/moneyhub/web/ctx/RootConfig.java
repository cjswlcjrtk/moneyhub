package com.moneyhub.web.ctx;

import javax.sql.DataSource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
@MapperScan(basePackages = { "com.moneyhub.web" })
@ComponentScan(basePackages = { "com.moneyhub.web" })
//파일 인식 못할때 사용
/*
 * @Import({ MyBatisConfig.class, ServletConfig.class })
 */

public class RootConfig {
	@Bean
	public DataSource dataSource() {

		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://moneyhubdb.caqbtdlh14ub.ap-northeast-2.rds.amazonaws.com:3306/moneyhub?serverTimezone=UTC");
		dataSource.setUsername("admin");
		dataSource.setPassword("moneyhubdb");
		return dataSource;
	}
	
	@Bean
	public DataSourceTransactionManager txManager() {
		return new DataSourceTransactionManager(dataSource());
	}
}
