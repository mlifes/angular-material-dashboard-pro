
/**
 * app.token.ts : 用于统一管理应用中心的token信息。
 * ps：在providers中，使用字符串作为provide的token时，可能存在命名冲突的问题。
 * 例如：引入第三方库时。因此添加token管理是十分有必要的。
 * ps：所有的非type类型的token，都应该在此管理中心创建InjectionToken
 * 例如：export const API_URL = new InjectionToken<string>('apiUrl');
 * 总结：Token 的作用是用来标识依赖对象，Token值可能是 Type、InjectionToken、
 *      OpaqueToken 类的实例或字符串。通常不推荐使用字符串，因为如果使用字符串存在命名
 *      冲突的可能性比较高。在 Angular 4.x 以前的版本我们一般使用 OpaqueToken 来创建 
 *      Token，而在 Angular 4.x 以上的版本版本，推荐使用 InjectionToken 来创建 Token 
 */ 

 