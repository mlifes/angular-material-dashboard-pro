装饰器概述
----
在我们深入了解 Angular 2 中 @NgModule、@Component、@Injectable 等常见的装饰器之前，我们要先了解 TypeScript 中的装饰器。装饰器是一个非常酷的特性，最早出现在 Google 的 AtScript 中，它出现的目的是为了让开发者，开发出更容易维护、更容易理解的 Angular 代码。令人兴奋的是，在2015年 Angular 团队跟 MicroSoft 的 TypeScript 团队经过数月的的交流，最终决定采用 TypeScript 来重写 Angular 2 项目 。

是什么？
---
1、它是一个表达式

2、该表达式被执行后，返回一个函数

3、函数的入参分别为 targe、name 和 descriptor

4、执行该函数后，可能返回 descriptor 对象，用于配置 target 对象　

分类
---
类装饰器 (Class decorators)

declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void

属性装饰器 (Property decorators)

declare type PropertyDecorator = (target:Object, propertyKey: string | symbol ) => void;

方法装饰器 (Method decorators)

declare type MethodDecorator = <T>(target:Object, propertyKey: string | symbol, descriptor: TypePropertyDescript<T>) => TypedPropertyDescriptor<T> | void;

参数装饰器 (Parameter decorators)

declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number ) => void