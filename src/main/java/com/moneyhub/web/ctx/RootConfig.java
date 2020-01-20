package com.moneyhub.web.ctx;

import javax.sql.DataSource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

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
		
		// hikariConfig.setDriverClassName("org.mariadb.jdbc.Driver");
		// hikariConfig.setJdbcUrl("jdbc:mariadb://172.168.0.199/moneyhub?serverTimezone=UTC");
		// //내꺼
		// hikariConfig.setJdbcUrl("jdbc:mariadb://172.168.0.235/moneyhubdb?serverTimezone=UTC");
		// //은지씨
//		hikariConfig.setDriverClassName("org.mariadb.jdbc.Driver");							//학원 db
//		hikariConfig.setJdbcUrl("jdbc:mariadb://localhost:3306/moneyhub?serverTimezone=UTC"); //학원 db

/*		HikariConfig hikariConfig = new HikariConfig();
 		hikariConfig.setDriverClassName("com.mysql.cj.jdbc.Driver"); // 은지집
		hikariConfig.setJdbcUrl("jdbc:mysql://localhost:3306/moneyhub?serverTimezone=UTC"); // 은지집
		hikariConfig.setUsername("moneyhub");
		hikariConfig.setPassword("moneyhub");
		HikariDataSource dataSource = new HikariDataSource(hikariConfig);*/
		
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3306/moneyhub?serverTimezone=UTC"); // 은지집
		dataSource.setUsername("moneyhub");
		dataSource.setPassword("moneyhub");
		return dataSource;
	}
	
	@Bean
	public DataSourceTransactionManager txManager() {
		return new DataSourceTransactionManager(dataSource());
	}
}
