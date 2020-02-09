package com.moneyhub.web.pxy;

import java.util.function.BiPredicate;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Lazy
@Component("pxy")
public class Proxy {
	public int integer(String param) {
	//	Function<String, Integer> f = s-> Integer.parseInt(s);
		Function<String, Integer> f = Integer :: parseInt;
		
		return f.apply(param);
	}
	public String string(Object param) {
		Function<Object, String> f = String :: valueOf;
		return f.apply(param);
	}
	
	public boolean equal(String t, String u) {
	//	BiPredicate<String, String> f = (t, u)-> t.equals(u);
		BiPredicate<String, String> f = String :: equals;
		return f.test(t, u);
	}
	
	public void print(String t) {
		Consumer<String> c = System.out :: println;
		c.accept(t);
	}
}
