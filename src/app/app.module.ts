import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutes } from './app.routing';

import { LocalStorage } from 'app/@core/utils/local.storage';
import { ServicesModule } from 'app/@core/services/services.module';
import { PagesModule } from 'app/pages/pages.module';
import { AdminModule } from 'app/admin/admin.module';
import { AuxModule } from 'app/aux/aux.module';
import { LoggerService } from 'app/@core/services/logger.service';
import { ConsoleService } from 'app/@core/base/service/console.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        ServicesModule.forRoot(),
        PagesModule,
        AdminModule,
        AuxModule,
    ],
    declarations: [
        AppComponent,
    ],
    /**
     * angualr 中依赖对象的创建有四种，分别为：useClass、useValue、useExisting、useFactory，
     * 则分别对应四种不同的provider:
     *      TypeProvider:常用简洁写法。
     *      ClassProvider:标准写法，其本质是通过class初始化服务。
     *      ValueProvider:
     *      ExistingProvider:
     *      FactoryProvider：可以调用对应的函数，返回新的token对象。
     * */ 
    providers: [
        /**
         * 本地存储，TypeProvider。
         * */ 
        LocalStorage,
        ConsoleService,
        /**
         * 创建loggerService，FactoryProvider。
         * */ 
        {
            provide:LoggerService,
            useFactory: (consoleService) => {
                return new LoggerService(true,consoleService);
            },
            deps:[ConsoleService]
        },
        /**
         * 本地策略 ClassProvider
         * */ 
        { 
            provide: LocationStrategy, 
            /**
             * HashLocationStrategy :适用于基于锚点标记的路径，比如/#/**，后端只需要配置一个根路由即可。
             * PathLocationStrategy :改用 PathLocationStrategy（angular2的默认策略，也就是HTML5路由），
             * 使用这个路由的常规路径不带#，这种策略需要后台配置支持，因为我们的应用是单页面应用，如果后台没有正确的配置，
             * 当用户在浏览器从一个路由跳往另外一个路由或者刷新时就会返回404，需要在服务端里面覆盖所有的路由情况
            */
            useClass: PathLocationStrategy 
        },
        {
          provide: 'BASE_CONFIG',
          useValue: {
            uri: 'http://tp5.cn/api/v1'
          }
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
