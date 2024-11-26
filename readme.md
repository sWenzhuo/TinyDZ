#### 项目中遇到的坑

1，Spring Security的坑？

利用Spring Security一般通过如下代码进行用户认证：

```java
 @Override
public Map<String, String> login(String account, String pwd) {

    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(account, pwd);

    Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        
    UserDetailsImpl loginUser = (UserDetailsImpl) authentication.getPrincipal();
    User user = loginUser.getUser();
    
    }
```
可以发现主要的验证工具是authenticationManager。而该工具需要注册UserDetailsService接口，返回一个UserDetailsImpl代理对象，所以需要实现UserDetailsService借口和UserDetailsImpl借口

```java
@Configuration
@EnableWebSecurity
public class SecurityonConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @Autowired
    private JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(myUserDetailsService).passwordEncoder(passwordEncoder());
    }
    //注册myUserDetailsService接口

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().authorizeRequests()
                .antMatchers("/user/add/","/user/login/").permitAll()
                .antMatchers(HttpMethod.OPTIONS).permitAll()
                .anyRequest().authenticated();

        http.addFilterBefore(jwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }


    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    //注册AuthenticationManager工具

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

2，jwt的运用
在前端，所有的页面都需要维护用户状态，这里可以使用store维护用户的状态，然后所有页面引入store即可。

